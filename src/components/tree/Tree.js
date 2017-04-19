import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ObjectUtils from '../utils/ObjectUtils';

export class TreeNode extends Component {
    static defaultProps = {
        node: null,
        index: null,
        tree: null,
        parentNode: null
    }

    static propsTypes = {
        node: PropTypes.any,
        index: PropTypes.string,
        tree: PropTypes.any,
        parentNode: PropTypes.any
    }

    constructor(props) {
        super(props);
        this.node = this.props.node;
        this.node.parent = this.props.parentNode;
        this.tree = this.props.tree;
        this.state = { expanded: this.node.expanded };
    }

    getIcon() {
        var icon;

        if (this.node.icon)
            icon = this.node.icon;
        else
            icon = this.state.expanded && this.node.children && this.node.children.length ? this.node.expandedIcon : this.node.collapsedIcon;

        return 'ui-treenode-icon fa fa-fw ' + icon;
    }

    isLeaf(node) {
        return this.node.leaf === false ? false : !(this.node.children && this.node.children.length);
    }

    toggle(event) {
        this.setState({ expanded: !this.state.expanded });
    }

    onNodeClick(event) {
        this.tree.onNodeClick(event, this.node);
    }

    onNodeTouchEnd() {
        this.tree.onNodeTouchEnd();
    }

    isSelected() {
        return this.tree.isSelected(this.node);
    }

    render() {
        var nodeClass = classNames('ui-treenode', this.node.styleClass, {
            'ui-treenode-leaf': this.isLeaf(this.node)
        });

        var labelClass = classNames('ui-treenode-label ui-corner-all', { 'ui-state-highlight': this.isSelected() }),
            label = (<span className={labelClass}>
                <span>{this.node.label}</span>
            </span>);

        var togglerClass = classNames('ui-tree-toggler fa fa-fw', {
            'fa-caret-right': !this.state.expanded,
            'fa-caret-down': this.state.expanded
        });

        var hasIcon = (this.node.icon || this.node.expandedIcon || this.node.collapsedIcon),
            iconClass = this.getIcon();

        if (this.tree.props.selectionMode === 'checkbox') {
            var checkboxIconClass = classNames('ui-chkbox-icon ui-c fa', {
                'fa-check': this.isSelected(),
                'fa-minus': this.node.partialSelected
            }),
                checkbox = (<div className="ui-chkbox">
                    <div className="ui-chkbox-box ui-widget ui-corner-all ui-state-default">
                        <span className={checkboxIconClass}></span>
                    </div>
                </div>);
        }

        var nodeContentClass = classNames('ui-treenode-content', {
            'ui-treenode-selectable': this.tree.props.selectionMode && this.node.selectable !== false
        }),
            nodeContent = (
                <div className={nodeContentClass} onClick={this.onNodeClick.bind(this)} onTouchEnd={this.onNodeTouchEnd.bind(this)}>
                    {!this.isLeaf() && <span className={togglerClass} onClick={this.toggle.bind(this)}></span>}
                    {checkbox}
                    {hasIcon && <span className={iconClass}></span>}
                    {label}
                </div>
            );

        var nodeChildren = (this.node.children && this.state.expanded) && (<ul style={{ 'display': this.state.expanded ? 'block' : 'none' }}>
            {
                this.node.children && this.node.children.map((child, i) => {
                    return (<TreeNode key={this.props.index + '_' + i} node={child} index={this.props.index + '_' + i} tree={this.tree} parentNode={this.node}/>)
                })
            }
        </ul>);

        return (<li className={nodeClass} key={this.props.index}>
            {nodeContent}
            {nodeChildren}
        </li>);
    }
}

export class Tree extends Component {

    static defaultProps = {
        value: null,
        selectionMode: null,
        selection: null,
        selectionChange: null,
        onNodeSelect: null,
        onNodeUnselect: null,
        onNodeExpand: null,
        onNodeCollapse: null,
        style: null,
        styleClass: null,
        metaKeySelection: true,
        propagateSelectionUp: true,
        propagateSelectionDown: true
    }

    static propsTypes = {
        value: PropTypes.any.isRequired,
        selectionMode: PropTypes.string,
        selection: PropTypes.any,
        selectionChange: PropTypes.func.isRequired,
        onNodeSelect: PropTypes.func,
        onNodeUnselect: PropTypes.func,
        onNodeExpand: PropTypes.func,
        onNodeCollapse: PropTypes.func,
        style: PropTypes.string,
        styleClass: PropTypes.string,
        metaKeySelection: PropTypes.bool,
        propagateSelectionUp: PropTypes.bool,
        propagateSelectionDown: PropTypes.bool
    }

    isSelected(node) {
        return this.findIndexInSelection(node) !== -1;
    }

    findIndexInSelection(node) {
        var index = -1;

        if (this.props.selectionMode && this.selection) {
            if (this.isSingleSelectionMode()) {
                index = (ObjectUtils.equals(this.selection, node)) ? 0 : - 1;
            }
            else {
                for (var i = 0; i < this.selection.length; i++) {
                    if (ObjectUtils.equals(this.selection[i], node)) {
                        index = i;
                        break;
                    }
                }
            }
        }

        return index;
    }

    propagateUp(node, select) {
        if(node.children && node.children.length) {
            var selectedCount = 0;
            var childPartialSelected = false;
            for(var child of node.children) {
                if(this.isSelected(child)) {
                    selectedCount++;
                }
                else if(child.partialSelected) {
                    childPartialSelected = true;
                }
            }
            
            if(select && selectedCount === node.children.length) {
                this.selection = [...this.selection||[],node];
                node.partialSelected = false;
            }
            else {                
                if(!select) {
                    var index = this.findIndexInSelection(node);
                    if(index >= 0) {
                        this.selection = this.selection.filter((val,i) => i!==index);
                    }
                }
                
                if(childPartialSelected || (selectedCount > 0 && selectedCount !== node.children.length))
                    node.partialSelected = true;
                else
                    node.partialSelected = false;
            }
        }
                
        var parent = node.parent;
        if(parent) {
            this.propagateUp(parent, select);
        }
    }
    
    propagateDown(node, select) {
        var index = this.findIndexInSelection(node);
        
        if(select && index === -1) {
            this.selection = [...this.selection||[],node];
        }
        else if(!select && index > -1) {
            this.selection = this.selection.filter((val,i) => i!==index);
        }
        
        node.partialSelected = false;
        
        if(node.children && node.children.length) {
            for(var child of node.children) {
                this.propagateDown(child, select);
            }
        }
    }

    isSingleSelectionMode() {
        return this.props.selectionMode && this.props.selectionMode === 'single';
    }

    isMultipleSelectionMode() {
        return this.props.selectionMode && this.props.selectionMode === 'multiple';
    }

    isCheckboxSelectionMode() {
        return this.props.selectionMode && this.props.selectionMode === 'checkbox';
    }

    onNodeClick(event, node) {
        var eventTarget = (event.target);

        if (eventTarget.className && eventTarget.className.indexOf('ui-tree-toggler') === 0) {
            return;
        }
        else if (this.props.selectionMode) {
            if (node.selectable === false) {
                return;
            }

            var index = this.findIndexInSelection(node);
            var selected = (index >= 0);

            if (this.isCheckboxSelectionMode()) {
                if (selected) {
                    if (this.props.propagateSelectionDown)
                        this.propagateDown(node, false);
                    else
                        this.selection = this.selection.filter((val, i) => i !== index);

                    if (this.props.propagateSelectionUp && node.parent) {
                        this.propagateUp(node.parent, false);
                    }

                    this.props.selectionChange({
                        originalEvent: event,
                        selection: this.selection
                    });

                    if(this.props.onNodeUnselect) {
                        this.props.onNodeUnselect({ 
                            originalEvent: event, 
                            node: node 
                        });
                    }
                }
                else {
                    if (this.props.propagateSelectionDown)
                        this.propagateDown(node, true);
                    else
                        this.selection = [...this.selection || [], node];

                    if (this.props.propagateSelectionUp && node.parent) {
                        this.propagateUp(node.parent, true);
                    }

                    this.props.selectionChange({
                        originalEvent: event,
                        selection: this.selection
                    });

                    if(this.props.onNodeSelect) {
                        this.props.onNodeSelect({ 
                            originalEvent: event, 
                            node: node 
                        });
                    }
                }
            }
            else {
                var metaSelection = this.nodeTouched ? false : this.props.metaKeySelection;

                if (metaSelection) {
                    var metaKey = (event.metaKey || event.ctrlKey);

                    if (selected && metaKey) {
                        if (this.isSingleSelectionMode()) {
                            this.selection = null;
                            this.props.selectionChange({
                                originalEvent: event,
                                selection: null
                            });
                        }
                        else {
                            this.selection = this.selection.filter((val, i) => i !== index);
                            this.props.selectionChange({
                                originalEvent: event,
                                selection: this.selection
                            });
                        }

                        if(this.props.onNodeUnselect) {
                            this.props.onNodeUnselect({ 
                                originalEvent: event, 
                                node: node 
                            });
                        }
                    }
                    else {
                        if (this.isSingleSelectionMode()) {
                            this.selection = node;
                            this.props.selectionChange({
                                originalEvent: event,
                                selection: node
                            });
                        }
                        else if (this.isMultipleSelectionMode()) {
                            this.selection = (!metaKey) ? [] : this.selection || [];
                            this.selection = [...this.selection, node];
                            this.props.selectionChange({
                                originalEvent: event,
                                selection: this.selection
                            });
                        }

                        if(this.props.onNodeSelect) {
                            this.props.onNodeSelect({ 
                                originalEvent: event, 
                                node: node 
                            });
                        }
                    }
                }
                else {
                    if (this.isSingleSelectionMode()) {
                        if (selected) {
                            this.selection = null;
                            if(this.props.onNodeUnselect) {
                                this.props.onNodeUnselect({ 
                                    originalEvent: event, 
                                    node: node 
                                });
                            }
                        }
                        else {
                            this.selection = node;
                            if(this.props.onNodeSelect) {
                                this.props.onNodeSelect({ 
                                    originalEvent: event, 
                                    node: node 
                                });
                            }
                        }
                    }
                    else {
                        if (selected) {
                            this.selection = this.selection.filter((val, i) => i !== index);
                            if(this.props.onNodeUnselect) {
                                this.props.onNodeUnselect({ 
                                    originalEvent: event, 
                                    node: node 
                                });
                            }
                        }
                        else {
                            this.selection = [...this.selection || [], node];
                            if(this.props.onNodeSelect) {
                                this.props.onNodeSelect({ 
                                    originalEvent: event, 
                                    node: node 
                                });
                            }
                        }
                    }

                    this.props.selectionChange({
                        originalEvent: event,
                        selection: this.selection
                    });
                }
            }
        }

        this.nodeTouched = false;
    }

    onNodeTouchEnd() {
        this.nodeTouched = true;
    }
    
    render() {
        var treeClass = classNames('ui-tree ui-widget ui-widget-content ui-corner-all', this.props.styleClass, {
            'ui-tree-selectable': this.props.selectionMode
        });

        return (
            <div className={treeClass} style={this.props.style}>
                <ul className="ui-tree-container">
                    {
                        this.props.value && this.props.value.map((node, index) => {
                            return (<TreeNode key={index} node={node} index={index} tree={this} parentNode={this.props.value}/>)
                        })
                    }
                </ul>
            </div>
        );
    }
}
