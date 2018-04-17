import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export class OrganizationChartNode extends Component {
    
    static defaultProps = {
        node: null,
        nodeTemplate: null,
        root: false,
        first: false,
        last: false,
        selectionMode: null,
        onNodeClick: null,
        isSelected: null
    }

    static propsTypes = {
        node: PropTypes.any,
        nodeTemplate: PropTypes.any,
        root: PropTypes.bool,
        first: PropTypes.bool,
        last: PropTypes.bool,
        selectionMode: PropTypes.string,
        onNodeClick: PropTypes.func,
        isSelected: PropTypes.func
    }

    constructor(props) {
        super(props);
        this.state = {
            expanded: this.props.node.expanded,
            node: this.props.node
        };
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.node !== nextProps.node) {
            this.setState({node: nextProps.node});
        }
    }

    getLeaf() {
        return this.state.node.leaf === false ? false : !(this.state.node.children&&this.state.node.children.length);
    }
    
    getColspan() {
        return (this.state.node.children && this.state.node.children.length) ? this.state.node.children.length * 2: null;
    }

    onNodeClick(event, node) {
        this.props.onNodeClick(event, node)
    }
    
    toggleNode(event, node) {
        let _expanded = !this.state.expanded;
        this.setState({expanded: _expanded});
        event.preventDefault();
    }
    
    isSelected() {
        return this.props.isSelected(this.state.node);
    }

    render() {
        var colspan = this.getColspan();
        let nodeStyleClass = classNames('ui-organizationchart-node-content ui-widget-content ui-corner-all', this.state.node.className, {
                'ui-organizationchart-selectable-node': this.props.selectionMode && this.state.node.selectable !== false,
                'ui-state-highlight': this.isSelected()
            }),
            nodeLabel = (this.props.nodeTemplate && this.props.nodeTemplate(this.state.node)) ? <div>{this.props.nodeTemplate(this.state.node)}</div> : <div>{this.state.node.label}</div>,
            toggleIcon = classNames('fa ui-node-toggler-icon', {'fa-chevron-down': this.state.expanded, 'fa-chevron-up': !this.state.expanded}),
            nodeContent = (<tr>
                <td colSpan={colspan}>
                    <div className={nodeStyleClass} onClick={(e) => this.onNodeClick(e,this.state.node)}>
                        {nodeLabel}
                        {
                            !this.getLeaf() && <a className="ui-node-toggler" onClick={(e) => this.toggleNode(e, this.state.node)}>
                                <i className={toggleIcon}></i>
                            </a>
                        }
                    </div>
                </td>
            </tr>);

        let _visibility = (!this.getLeaf() && this.state.expanded) ? 'inherit' : 'hidden',
            linesDown = (<tr style={{visibility: _visibility}} className="ui-organizationchart-lines">
                <td colSpan={colspan}>
                    <div className="ui-organizationchart-line-down"></div>
                </td>
            </tr>),
            nodeChildLength = this.state.node.children && this.state.node.children.length,
            linesMiddle = (<tr style={{visibility: _visibility}} className="ui-organizationchart-lines">
                {
                    this.state.node.children && this.state.node.children.map((item, index) => {
                        let leftClass = classNames('ui-organizationchart-line-left', {'ui-organizationchart-line-top': index !== 0}),
                        rightClass = classNames('ui-organizationchart-line-right', {'ui-organizationchart-line-top': index !== nodeChildLength - 1});

                        return [<td key={index + '_lineleft'} className={leftClass}>&nbsp;</td>, <td key={index + '_lineright'} className={rightClass}>&nbsp;</td>];
                    })
                }
            </tr>),
            childNodes = (<tr style={{visibility: _visibility}} className="ui-organizationchart-nodes">
                    {
                        this.state.node.children && this.state.node.children.map((child, index) => {
                            return (<td key={index} colSpan="2">
                                    <OrganizationChartNode node={child} nodeTemplate={this.props.nodeTemplate} selectionMode={this.props.selectionMode}
                                        onNodeClick={this.props.onNodeClick} isSelected={this.props.isSelected}/>
                                </td>)
                        })
                    }
            </tr>);


        return (
            <table className="ui-organizationchart-table">
                <tbody>
                    {nodeContent}
                    {linesDown}
                    {linesMiddle}
                    {childNodes}
                </tbody>
            </table>
        );
    }

}

export class OrganizationChart extends Component {

    static defaultProps = {
        id: null,
        value: null,
        style: null,
        className: null,
        selectionMode: null,
        selection: null,
        nodeTemplate: null,
        selectionChange: null,
        onNodeSelect: null,
        onNodeUnselect: null
    }

    static propsTypes = {
        id: PropTypes.string,
        value: PropTypes.any,
        style: PropTypes.object,
        className: PropTypes.string,
        selectionMode: PropTypes.string,
        selection: PropTypes.any,
        nodeTemplate: PropTypes.any,
        selectionChange: PropTypes.func,
        onNodeSelect: PropTypes.func,
        onNodeUnselect: PropTypes.func
    }

    constructor(props) {
        super(props);
        this.onNodeClick = this.onNodeClick.bind(this);
        this.isSelected = this.isSelected.bind(this);
        this.state = {root: this.getRootNode(this.props.value)};
    }

    getRootNode(value) {
        return value && value.length ? value[0] : null;
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.value !== nextProps.value) {
            this.setState({root: this.getRootNode(nextProps.value)});
        }
    }

    onNodeClick(event, node) {
        let eventTarget = (event.target);

        if(eventTarget.className && (eventTarget.className.indexOf('ui-node-toggler') !== -1 || eventTarget.className.indexOf('ui-node-toggler-icon') !== -1)) {
            return;
        }
        else if(this.props.selectionMode) {
            if(node.selectable === false) {
                return;
            }
            
            let index = this.findIndexInSelection(node);
            let selected = (index >= 0);
            
            if(this.props.selectionMode === 'single') {
                if(selected) {
                    this.selection = null;
                    if(this.props.onNodeUnselect) {
                        this.props.onNodeUnselect({originalEvent: event, node: node});
                    }
                }
                else {
                    this.selection = node;
                    if(this.props.onNodeSelect) {
                        this.props.onNodeSelect({originalEvent: event, node: node});
                    }
                }
            }
            else if(this.props.selectionMode === 'multiple') {
                if(selected) {
                    this.selection = this.selection.filter((val,i) => i!==index);
                    if(this.props.onNodeUnselect) {
                        this.props.onNodeUnselect({originalEvent: event, node: node});
                    }
                }
                else {
                    this.selection = [...this.selection||[],node];
                    if(this.props.onNodeSelect) {
                        this.props.onNodeSelect({originalEvent: event, node: node});
                    }
                }
            }
            
            if(this.props.selectionChange) {
                this.props.selectionChange(this.selection);
            }
        }
    }
    
    findIndexInSelection(node) {
        let index = -1;

        if(this.props.selectionMode && this.selection) {
            if(this.props.selectionMode === 'single') {
                index = (this.selection === node) ? 0 : - 1;
            }
            else if(this.props.selectionMode === 'multiple') {
                for(let i = 0; i  < this.selection.length; i++) {
                    if(this.selection[i] === node) {
                        index = i;
                        break;
                    }
                }
            }
        }

        return index;
    }
    
    isSelected(node) {
        return this.findIndexInSelection(node) !== -1;         
    }

    render() {
        var className = classNames('ui-organizationchart ui-widget', this.props.className);
        return (
            <div id={this.props.id} style={this.props.style} className={className}>
                <OrganizationChartNode node={this.state.root} nodeTemplate={this.props.nodeTemplate} selectionMode={this.props.selectionMode}
                        onNodeClick={this.onNodeClick} isSelected={this.isSelected}/>
            </div>
        );
    }
}