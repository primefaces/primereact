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

    static propTypes = {
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
        this.node = this.props.node;
        this.state = {expanded: this.node.expanded};
    }

    getLeaf() {
        return this.node.leaf === false ? false : !(this.node.children&&this.node.children.length);
    }

    getColspan() {
        return (this.node.children && this.node.children.length) ? this.node.children.length * 2: null;
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
        return this.props.isSelected(this.node);
    }

    render() {
        this.node = this.props.node;

        var colspan = this.getColspan();
        let nodeStyleClass = classNames('p-organizationchart-node-content', this.node.className, {
                'p-organizationchart-selectable-node': this.props.selectionMode && this.node.selectable !== false,
                'p-highlight': this.isSelected()
            }),
            nodeLabel = (this.props.nodeTemplate && this.props.nodeTemplate(this.node)) ? <div>{this.props.nodeTemplate(this.node)}</div> : <div>{this.node.label}</div>,
            toggleIcon = classNames('p-node-toggler-icon', {'pi pi-chevron-down': this.state.expanded, 'pi pi-chevron-up': !this.state.expanded}),
            nodeContent = (<tr>
                <td colSpan={colspan}>
                    <div className={nodeStyleClass} onClick={(e) => this.onNodeClick(e,this.node)}>
                        {nodeLabel}
                        {
                            !this.getLeaf() && <button type="button" className="p-node-toggler p-link" onClick={(e) => this.toggleNode(e, this.node)}>
                                <i className={toggleIcon}></i>
                            </button>
                        }
                    </div>
                </td>
            </tr>);

        let _visibility = (!this.getLeaf() && this.state.expanded) ? 'inherit' : 'hidden',
            linesDown = (<tr style={{visibility: _visibility}} className="p-organizationchart-lines">
                <td colSpan={colspan}>
                    <div className="p-organizationchart-line-down"></div>
                </td>
            </tr>),
            nodeChildLength = this.node.children && this.node.children.length,
            linesMiddle = (<tr style={{visibility: _visibility}} className="p-organizationchart-lines">
                {
                    this.node.children && this.node.children.map((item, index) => {
                        let leftClass = classNames('p-organizationchart-line-left', {'p-organizationchart-line-top': index !== 0}),
                        rightClass = classNames('p-organizationchart-line-right', {'p-organizationchart-line-top': index !== nodeChildLength - 1});

                        return [<td key={index + '_lineleft'} className={leftClass}>&nbsp;</td>, <td key={index + '_lineright'} className={rightClass}>&nbsp;</td>];
                    })
                }
            </tr>),
            childNodes = (<tr style={{visibility: _visibility}} className="p-organizationchart-nodes">
                    {
                        this.node.children && this.node.children.map((child, index) => {
                            return (<td key={index} colSpan="2">
                                    <OrganizationChartNode node={child} nodeTemplate={this.props.nodeTemplate} selectionMode={this.props.selectionMode}
                                        onNodeClick={this.props.onNodeClick} isSelected={this.props.isSelected}/>
                                </td>)
                        })
                    }
            </tr>);


        return (
            <table className="p-organizationchart-table">
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
        onSelectionChange: null,
        onNodeSelect: null,
        onNodeUnselect: null
    }

    static propTypes = {
        id: PropTypes.string,
        value: PropTypes.any,
        style: PropTypes.object,
        className: PropTypes.string,
        selectionMode: PropTypes.string,
        selection: PropTypes.any,
        nodeTemplate: PropTypes.any,
        onSelectionChange: PropTypes.func,
        onNodeSelect: PropTypes.func,
        onNodeUnselect: PropTypes.func
    }

    constructor(props) {
        super(props);
        this.root = this.props.value && this.props.value.length ? this.props.value[0] : null;
        this.onNodeClick = this.onNodeClick.bind(this);
        this.isSelected = this.isSelected.bind(this);
    }

    onNodeClick(event, node) {
        if (this.props.selectionMode) {
            let eventTarget = (event.target);
            if (eventTarget.className && (eventTarget.className.indexOf('p-node-toggler') !== -1 || eventTarget.className.indexOf('p-node-toggler-icon') !== -1)) {
                return;
            }

            if (node.selectable === false) {
                return;
            }

            let index = this.findIndexInSelection(node);
            let selected = (index >= 0);
            let selection;

            if (this.props.selectionMode === 'single') {
                if (selected) {
                    selection = null;
                    if (this.props.onNodeUnselect) {
                        this.props.onNodeUnselect({originalEvent: event, node: node});
                    }
                }
                else {
                    selection = node;
                    if (this.props.onNodeSelect) {
                        this.props.onNodeSelect({originalEvent: event, node: node});
                    }
                }
            }
            else if (this.props.selectionMode === 'multiple') {
                if (selected) {
                    selection = this.props.selection.filter((val,i) => i !== index);
                    if (this.props.onNodeUnselect) {
                        this.props.onNodeUnselect({originalEvent: event, node: node});
                    }
                }
                else {
                    selection = [...this.props.selection||[], node];
                    if(this.props.onNodeSelect) {
                        this.props.onNodeSelect({originalEvent: event, node: node});
                    }
                }
            }

            if (this.props.onSelectionChange) {
                this.props.onSelectionChange({
                    originalEvent: event,
                    data: selection
                });
            }
        }
    }

    findIndexInSelection(node) {
        let index = -1;

        if(this.props.selectionMode && this.props.selection) {
            if(this.props.selectionMode === 'single') {
                index = (this.props.selection === node) ? 0 : - 1;
            }
            else if(this.props.selectionMode === 'multiple') {
                for(let i = 0; i  < this.props.selection.length; i++) {
                    if(this.props.selection[i] === node) {
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
        this.root = this.props.value && this.props.value.length ? this.props.value[0] : null;

        var className = classNames('p-organizationchart p-component', this.props.className);
        return (
            <div id={this.props.id} style={this.props.style} className={className}>
                <OrganizationChartNode node={this.root} nodeTemplate={this.props.nodeTemplate} selectionMode={this.props.selectionMode}
                        onNodeClick={this.onNodeClick} isSelected={this.isSelected}/>
            </div>
        );
    }
}
