import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ObjectUtils from '../utils/ObjectUtils';

export class TreeNode extends Component {
    
    static defaultProps = {
        node: null,
        index: null,
        parentNode: null,
        root: false,
        isHorizontal: false,
        selectionMode: null,
        onNodeTouchEnd: null,
        onNodeClick: null,
        isSelected: null,
        onNodeExpand: null,
        onNodeCollapse: null
    }

    static propsTypes = {
        node: PropTypes.any,
        index: PropTypes.string,
        parentNode: PropTypes.any,
        root: PropTypes.bool,
        isHorizontal: PropTypes.bool,
        selectionMode: PropTypes.string,
        onNodeTouchEnd: PropTypes.func,
        onNodeClick: PropTypes.func,
        isSelected: PropTypes.func,
        onNodeExpand: PropTypes.func,
        onNodeCollapse: PropTypes.func
    }

    constructor(props) {
        super(props);
        this.node = this.props.node;
        this.node.parent = this.props.parentNode;
        this.state = { expanded: this.node.expanded };
        this.toggle = this.toggle.bind(this);
    }

    getIcon() {
        var icon;

        if (this.node.icon)
            icon = this.node.icon;
        else
            icon = this.state.expanded && this.node.children && this.node.children.length ? this.node.expandedIcon : this.node.collapsedIcon;

        return 'ui-treenode-icon ' + icon;
    }

    isLeaf(node) {
        return this.node.leaf === false ? false : !(this.node.children && this.node.children.length);
    }

    toggle(event) {
        if(this.state.expanded && this.props.onNodeCollapse) {
            this.props.onNodeCollapse({originalEvent: event, node: this.node});
        }
        else if(this.props.onNodeExpand) {
            this.props.onNodeExpand({originalEvent: event, node: this.node});
        }

        this.setState({ expanded: !this.state.expanded });
    }

    renderVerticalTree() {
        var nodeClass = classNames('ui-treenode', this.node.className, {
            'ui-treenode-leaf': this.isLeaf(this.node)
        });

        var labelClass = classNames('ui-treenode-label ui-corner-all', { 'ui-state-highlight': this.props.isSelected(this.node) }),
            label = (<span className={labelClass}>
                <span>{this.node.label}</span>
            </span>);

        var togglerClass = classNames('ui-tree-toggler pi pi-fw', {
            'pi-caret-right': !this.state.expanded,
            'pi-caret-down': this.state.expanded
        });

        var hasIcon = (this.node.icon || this.node.expandedIcon || this.node.collapsedIcon),
            iconClass = this.getIcon();

        if (this.props.selectionMode === 'checkbox') {
            var checkboxIconClass = classNames('ui-chkbox-icon ui-c pi', {
                'pi-check': this.props.isSelected(this.node),
                'pi-minus': this.node.partialSelected
            }),
                checkbox = (<div className="ui-chkbox">
                    <div className="ui-chkbox-box ui-widget ui-corner-all ui-state-default">
                        <span className={checkboxIconClass}></span>
                    </div>
                </div>);
        }

        var nodeContentClass = classNames('ui-treenode-content', {
            'ui-treenode-selectable': this.props.selectionMode && this.node.selectable !== false
        }),
            nodeContent = (
                <div className={nodeContentClass} onClick={(e) => this.props.onNodeClick(e, this.node)} onTouchEnd={this.props.onNodeTouchEnd}>
                    <span className={togglerClass} onClick={this.toggle}></span>
                    {checkbox}
                    {hasIcon && <span className={iconClass}></span>}
                    {label}
                </div>
            );

        var nodeChildren = (this.node.children && this.state.expanded) && (<ul style={{ 'display': this.state.expanded ? 'block' : 'none' }} className="ui-treenode-children">
            {
                this.node.children && this.node.children.map((child, i) => {
                    return (<TreeNode key={this.props.index + '_' + i} node={child} index={this.props.index + '_' + i} parentNode={this.node} selectionMode={this.props.selectionMode} isSelected={this.props.isSelected}
                        onNodeTouchEnd={this.props.onNodeTouchEnd} onNodeClick={this.props.onNodeClick} isHorizontal={false} onNodeExpand={this.props.onNodeExpand} onNodeCollapse={this.props.onNodeCollapse}/>)
                })
            }
        </ul>);

        return (<li className={nodeClass} key={this.props.index}>
            {nodeContent}
            {nodeChildren}
        </li>);
    }

    renderHorizontalTree() {
        var isFirstChild = String(this.props.index).slice(-1) === "0",
            isLastChild = this.node.parent && String(this.props.index).slice(-1) === String(this.node.parent.children.length - 1);

        var connector = (!this.props.root && <td className="ui-treenode-connector">
            <table className="ui-treenode-connector-table">
                <tbody>
                    <tr>
                        <td className={!isFirstChild ? "ui-treenode-connector-line" : ""}></td>
                    </tr>
                    <tr>
                        <td className={!isLastChild ? "ui-treenode-connector-line" : ""}></td>
                    </tr>
                </tbody>
            </table>
        </td>);

        var nodeClass = classNames('ui-treenode', this.node.className, {
            'ui-treenode-collapsed': !this.state.expanded
        });

        var label = (<span className="ui-treenode-label ui-corner-all">
            <span>{this.node.label}</span>
        </span>);

        var togglerClass = classNames('ui-tree-toggler pi pi-fw', {
            'pi-plus': !this.state.expanded,
            'pi-minus': this.state.expanded
        });

        var hasIcon = (this.node.icon || this.node.expandedIcon || this.node.collapsedIcon),
            iconClass = this.getIcon();

        var nodeContentClass = classNames('ui-treenode-content ui-state-default ui-corner-all', {
            'ui-treenode-selectable': this.props.selectionMode && this.node.selectable !== false,
            'ui-state-highlight': this.props.isSelected(this.node)
        }),
            nodeContent = (
                <td className={nodeClass}>
                    <div className={nodeContentClass} onClick={(e) => this.props.onNodeClick(e, this.node)} onTouchEnd={this.props.onNodeTouchEnd}>
                        {!this.isLeaf() && <span className={togglerClass} onClick={this.toggle}></span>}
                        {hasIcon && <span className={iconClass}></span>}
                        {label}
                    </div>
                </td>
            );

        var nodeChildren = (this.node.children && this.state.expanded) && (<td className="ui-treenode-children-container" style={{ 'display': this.state.expanded ? 'table-cell' : 'none' }}>
            <div className="ui-treenode-children">
                {
                    this.node.children && this.node.children.map((child, i) => {
                        return (<TreeNode key={this.props.index + '_' + i} node={child} index={this.props.index + '_' + i} parentNode={this.node} selectionMode={this.props.selectionMode} isSelected={this.props.isSelected}
                            onNodeTouchEnd={this.props.onNodeTouchEnd} onNodeClick={this.props.onNodeClick} isHorizontal={true} onNodeExpand={this.props.onNodeExpand} onNodeCollapse={this.props.onNodeCollapse}/>)
                    })
                }
            </div>
        </td>);

        var tbody = (<tbody>
            <tr>
                {connector}
                {nodeContent}
                {nodeChildren}
            </tr>
        </tbody>);

        if (this.props.root) {
            return tbody;
        }
        else {
            return (<table>{tbody}</table>);
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        let nextNode = nextProps.node;
        if(nextNode.hasOwnProperty("expanded") && prevState.expanded !== nextNode.expanded) {
            return {
                expanded: nextNode.expanded
            };
        }
        return null;
    }

    render() {
        if (this.props.isHorizontal) {
            return this.renderHorizontalTree();
        }
        else {
            return this.renderVerticalTree();
        }
    }
}

export class Tree extends Component {

    static defaultProps = {
        id: null,
        value: null,
        selectionMode: null,
        selection: null,
        selectionChange: null,
        layout: 'vertical',
        onNodeSelect: null,
        onNodeUnselect: null,
        onNodeExpand: null,
        onNodeCollapse: null,
        style: null,
        className: null,
        metaKeySelection: true,
        propagateSelectionUp: true,
        propagateSelectionDown: true
    }

    static propsTypes = {
        id: PropTypes.string,
        value: PropTypes.any.isRequired,
        selectionMode: PropTypes.string,
        selection: PropTypes.any,
        selectionChange: PropTypes.func.isRequired,
        layout: PropTypes.string,
        onNodeSelect: PropTypes.func,
        onNodeUnselect: PropTypes.func,
        onNodeExpand: PropTypes.func,
        onNodeCollapse: PropTypes.func,
        style: PropTypes.object,
        className: PropTypes.string,
        metaKeySelection: PropTypes.bool,
        propagateSelectionUp: PropTypes.bool,
        propagateSelectionDown: PropTypes.bool
    }

    constructor(props) {
        super(props);
        this.onNodeTouchEnd = this.onNodeTouchEnd.bind(this);
        this.onNodeClick = this.onNodeClick.bind(this);
        this.isSelected = this.isSelected.bind(this);
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
        if (node.children && node.children.length) {
            var selectedCount = 0;
            var childPartialSelected = false;
            for (var child of node.children) {
                if (this.isSelected(child)) {
                    selectedCount++;
                }
                else if (child.partialSelected) {
                    childPartialSelected = true;
                }
            }

            if (select && selectedCount === node.children.length) {
                this.selection = [...this.selection || [], node];
                node.partialSelected = false;
            }
            else {
                if (!select) {
                    var index = this.findIndexInSelection(node);
                    if (index >= 0) {
                        this.selection = this.selection.filter((val, i) => i !== index);
                    }
                }

                if (childPartialSelected || (selectedCount > 0 && selectedCount !== node.children.length))
                    node.partialSelected = true;
                else
                    node.partialSelected = false;
            }
        }

        var parent = node.parent;
        if (parent) {
            this.propagateUp(parent, select);
        }
    }

    propagateDown(node, select) {
        var index = this.findIndexInSelection(node);

        if (select && index === -1) {
            this.selection = [...this.selection || [], node];
        }
        else if (!select && index > -1) {
            this.selection = this.selection.filter((val, i) => i !== index);
        }

        node.partialSelected = false;

        if (node.children && node.children.length) {
            for (var child of node.children) {
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

                    if (this.props.onNodeUnselect) {
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

                    if (this.props.onNodeSelect) {
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

                        if (this.props.onNodeUnselect) {
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

                        if (this.props.onNodeSelect) {
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
                            if (this.props.onNodeUnselect) {
                                this.props.onNodeUnselect({
                                    originalEvent: event,
                                    node: node
                                });
                            }
                        }
                        else {
                            this.selection = node;
                            if (this.props.onNodeSelect) {
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
                            if (this.props.onNodeUnselect) {
                                this.props.onNodeUnselect({
                                    originalEvent: event,
                                    node: node
                                });
                            }
                        }
                        else {
                            this.selection = [...this.selection || [], node];
                            if (this.props.onNodeSelect) {
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

    isHorizontal() {
        return this.props.layout === 'horizontal';
    }

    render() {
        if(this.props.selection && this.selection !== this.props.selection) {
            this.selection = this.props.selection;
        }

        var treeClass = classNames('ui-tree ui-widget ui-widget-content ui-corner-all', this.props.className, {
            'ui-tree-selectable': this.props.selectionMode,
            'ui-tree-horizontal': this.isHorizontal()
        });

        var container;
        if (this.isHorizontal()) {
            container = this.props.value && this.props.value[0] && (
                <table>
                    <TreeNode node={this.props.value[0]} root={true} index={0} isHorizontal={true} selectionMode={this.props.selectionMode} 
                        onNodeTouchEnd={this.onNodeTouchEnd} onNodeClick={this.onNodeClick} isSelected={this.isSelected} onNodeExpand={this.props.onNodeExpand} onNodeCollapse={this.props.onNodeCollapse}></TreeNode>
                </table>)
        }
        else {
            container = (<ul className="ui-tree-container">
                {
                    this.props.value && this.props.value.map((node, index) => {
                        return (<TreeNode key={'node_' + index} node={node} index={index} parentNode={this.props.value} isHorizontal={false} selectionMode={this.props.selectionMode}
                            onNodeTouchEnd={this.onNodeTouchEnd} onNodeClick={this.onNodeClick} isSelected={this.isSelected} onNodeExpand={this.props.onNodeExpand} onNodeCollapse={this.props.onNodeCollapse}/>)
                    })
                }
            </ul>);
        }

        return (
            <div id={this.props.id} className={treeClass} style={this.props.style}>
                {container}
            </div>
        );
    }
}
