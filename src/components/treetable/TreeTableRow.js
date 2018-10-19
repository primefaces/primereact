import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ObjectUtils from '../utils/ObjectUtils';

export class TreeTableRow extends Component {

    static defaultProps = {
        node: null,
        level: null,
        columns: null,
        expandedKeys: null,
        onExpand: null,
        onCollapse: null,
        onToggle: null
    }

    static propsTypes = {
        value: PropTypes.array,
        level: PropTypes.number,
        columns: PropTypes.array,
        expandedKeys: PropTypes.array,
        onExpand: PropTypes.func,
        onCollapse: PropTypes.func,
        onToggle: PropTypes.func
    }

    constructor(props) {
        super(props);
        if (!this.props.onToggle) {
            this.state = {
                expanded: props.node.defaultExpanded
            }
        }

        this.onTogglerClick = this.onTogglerClick.bind(this);
    }

    isLeaf() {
        return this.props.node.leaf === false ? false : !(this.props.node.children && this.props.node.children.length);
    }

    expand(event) {
        //uncontrolled
        if (!this.props.onToggle) {
            this.setState({
                expanded: true
            }, () => {
                this.invokeToggleEvents(event, true);
            });
        }
        //controlled
        else {
            let expandedKeys = this.props.expandedKeys ? {...this.props.expandedKeys} : {};
            expandedKeys[this.props.node.key] = true;
            
            this.props.onToggle({
                originalEvent: event,
                value: expandedKeys
            });

            this.invokeToggleEvents(event, true);
        }
    }

    collapse(event) {
        //uncontrolled
        if (!this.props.onToggle) {
            this.setState({
                expanded: false
            }, () => {
                this.invokeToggleEvents(event, false);
            });
        }
        //controlled
        else {
            let expandedKeys = {...this.props.expandedKeys};
            delete expandedKeys[this.props.node.key];
            
            this.props.onToggle({
                originalEvent: event,
                value: expandedKeys
            });

            this.invokeToggleEvents(event, false);
        }
    }
 
    onTogglerClick(event) {
        if (this.isExpanded())
            this.collapse(event);
        else
            this.expand(event);

        event.preventDefault();
    }

    isExpanded() {
        if (!this.props.onToggle)
            return this.state.expanded;
        else
            return this.props.expandedKeys ? this.props.expandedKeys[this.props.node.key] !== undefined : false;
    }

    invokeToggleEvents(event, expanded) {
        if (expanded) {
            if (this.props.onExpand) {
                this.props.onExpand({
                    originalEvent: event,
                    node: this.props.node
                });
            }
        }
        else {
            if (this.props.onCollapse) {
                this.props.onCollapse({
                    originalEvent: event,
                    node: this.props.node
                });
            }
        }
    }

    renderToggler() {
        const expanded = this.isExpanded();
        const iconClassName = classNames('pi pi-fw', {'pi-chevron-right': !expanded, 'pi-chevron-down': expanded});
        const style = {marginLeft: this.props.level * 16 + 'px', visibility: (this.props.node.leaf === false || (this.props.node.children && this.props.node.children.length)) ? 'visible' : 'hidden'};

        return (
            <a className="p-treetable-toggler p-unselectable-text" tabIndex="0" onClick={this.onTogglerClick} style={style}>
                <i className={iconClassName} ></i>
            </a>
        );
    }

    renderCell(column, index) {
        let content;
        let toggler = index === 0 ? this.renderToggler() : null;

        if(column.props.body)
            content = column.props.body(this.props.node, column);
        else
            content = ObjectUtils.resolveFieldData(this.props.node.data, column.props.field);

        return (
            <td key={column.columnKey||column.field||index}>
                {toggler}
                {content}
            </td>
        );
    }

    renderChildren() {
        if (this.isExpanded() && this.props.node.children) {
            return this.props.node.children.map(childNode => {
                return (
                    <TreeTableRow key={childNode.key||JSON.stringify(childNode.data)} level={this.props.level + 1}
                        node={childNode} columns={this.props.columns} expandedKeys={this.props.expandedKeys} 
                        onToggle={this.props.onToggle} onExpand={this.props.onExpand} onCollapse={this.props.onCollapse} />
                );
            });
        }
        else {
            return null;
        } 
    }

    render() {
        const cells = this.props.columns.map((col, i) => this.renderCell(col, i));
        const children =  this.renderChildren();

        return (
            <React.Fragment>
                <tr>{cells}</tr>
                {children}
            </React.Fragment>
            
        );
    }
}