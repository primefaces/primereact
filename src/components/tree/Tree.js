import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ObjectUtils from '../utils/ObjectUtils';

class UITreeNode extends Component {
    
    static defaultProps = {
        node: null,
        selectionMode: null,
        expandedKeys: null,
        onExpand: null,
        onCollapse: null,
        onToggle: null
    }

    static propsTypes = {
        node: PropTypes.object,
        selectionMode: PropTypes.string,
        expandedKeys: PropTypes.object,
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

    onTogglerClick(event) {
        //uncontrolled
        if (!this.props.onToggle) {
            this.setState(prevState => {
                return {
                    expanded: !prevState.expanded
                }
            },
            () => {
                this.invokeToggleEvents(event, this.state.expanded);
            });
        }
        //controlled
        else {
            let expandedKeys = this.props.expandedKeys ? {...this.props.expandedKeys} : {};
            let expanded = expandedKeys[this.props.node.key] !== undefined;
            if (expanded)
                delete expandedKeys[this.props.node.key];
            else
                expandedKeys[this.props.node.key] = true;
            
            this.props.onToggle({
                originalEvent: event,
                value: expandedKeys
            });

            this.invokeToggleEvents(event, !expanded);
        }
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
            if (this.props.onExpand) {
                this.props.onCollapse({
                    originalEvent: event,
                    node: this.props.node
                });
            }
        }
    }

    isExpanded() {
        if (this.props.onToggle)
            return this.props.expandedKeys && this.props.expandedKeys[this.props.node.key] !== undefined;
        else
            return this.state.expanded;
    }

    renderLabel() {
        return (
            <span className="p-treenode-label">
                {this.props.node.label}
            </span>
        );
    }

    renderIcon(expanded) {
        let icon = this.props.node.icon || (expanded  ? this.props.node.expandedIcon : this.props.node.collapsedIcon);

        if (icon) {
            let className = classNames('p-treenode-icon', icon);

            return (
               <span className={className}></span>
            );
        }
        else {
            return null;
        }
    }

    renderToggler(expanded) {
        const className = classNames('p-tree-toggler p-unselectable-text pi pi-fw', {'pi-caret-right': !expanded, 'pi-caret-down': expanded});

        return (
            <span className={className} onClick={this.onTogglerClick}></span>
        );
    }

    renderContent() {
        const className = classNames('p-treenode-content', {'p-treenode-selectable': (this.props.selectionMode && this.props.node.selectable !== false)});
        const expanded = this.isExpanded();
        const toggler = this.renderToggler(expanded);
        const icon = this.renderIcon(expanded);
        const label = this.renderLabel();

        return (
            <div className={className}>
                {toggler}
                {icon}
                {label}
            </div>
        );
    }

    renderChildren() {
        if (this.props.node.children && this.props.node.children.length && this.isExpanded()) {
            return (
                <ul className="p-treenode-children">
                    {
                        this.props.node.children.map((childNode, index) => {
                            return (
                                <UITreeNode key={childNode.label} node={childNode} selectionMode={this.props.selectionMode} onExpand={this.props.onExpand} onCollapse={this.props.onCollapse} 
                                    expandedKeys={this.props.expandedKeys} onToggle={this.props.onToggle} />
                            );
                        })
                    }
                </ul>
            )
        }
        else {
            return null;
        }
    }

    render() {
        const className = classNames('p-treenode', this.props.node.className, {'p-treenode-leaf': this.isLeaf()})
        const content = this.renderContent();
        const children = this.renderChildren();

        return (
           <li className={className} style={this.props.node.style}>
                {content}
                {children}
           </li>
        );
    }
}

export class Tree extends Component {

    static defaultProps = {
        id: null,
        value: null,
        selectionMode: null,
        selection: null,
        onSelectionChange: null,
        layout: 'vertical',
        expandedKeys: null,
        style: null,
        className: null,
        metaKeySelection: true,
        propagateSelectionUp: true,
        propagateSelectionDown: true,
        onSelect: null,
        onUnselect: null,
        onExpand: null,
        onCollapse: null,
        onToggle: null
    }

    static propsTypes = {
        id: PropTypes.string,
        value: PropTypes.any.isRequired,
        selectionMode: PropTypes.string,
        selection: PropTypes.any,
        onSelectionChange: PropTypes.func.isRequired,
        layout: PropTypes.string,
        expandedKeys: PropTypes.object,
        style: PropTypes.object,
        className: PropTypes.string,
        metaKeySelection: PropTypes.bool,
        propagateSelectionUp: PropTypes.bool,
        propagateSelectionDown: PropTypes.bool,
        onSelect: PropTypes.func,
        onUnselect: PropTypes.func,
        onExpand: PropTypes.func,
        onCollapse: PropTypes.func,
        onToggle: PropTypes.func
    }

    constructor(props) {
        super(props);
        this.onToggle = this.onToggle.bind(this);
    }

    onToggle(event) {
        if (event.expanded) {
            if (this.props.onNodeExpand) {
                this.props.onNodeExpand(event);
            }
        }
        else {
            if (this.props.onNodeCollapse) {
                this.props.onNodeCollapse(event);
            }
        }
    }

    renderRootChild(node) {
        return (
            <UITreeNode key={node.label} node={node} selectionMode={this.props.selectionMode} onExpand={this.props.onExpand} onCollapse={this.props.onCollapse} 
                    expandedKeys={this.props.expandedKeys} onToggle={this.props.onToggle} />
        );
    };

    renderRootChildren() {
        return (
            this.props.value.map((node) => this.renderRootChild(node))
        );
    }

    renderRoot() {
        if (this.props.value) {
            const rootNodes = this.renderRootChildren();

            return (
                <ul className="p-tree-container">
                    {rootNodes}
                </ul>
            );
        }
        else {
            return null;
        }
    } 

    render() {
        const className = classNames('p-tree p-components', {'p-tree-selectable': this.props.selectionMode});
        const root = this.renderRoot();

        return (
            <div id={this.props.id} className={className} style={this.props.style}>
                {root}
            </div>
        );
    }
}
