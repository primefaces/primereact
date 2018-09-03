import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class UITreeNode extends Component {
    
    static defaultProps = {
        node: null,
        selectionMode: null,
        selectionKeys: null,
        metaKeySelection: true,
        expandedKeys: null,
        propagateSelectionUp: true,
        propagateSelectionDown: true,
        onSelect: null,
        onUnselect: null,
        onExpand: null,
        onCollapse: null,
        onToggle: null,
        onSelectionChange: null,
        onPropagateUp: null
    }

    static propsTypes = {
        node: PropTypes.object,
        selectionMode: PropTypes.string,
        selectionKeys: PropTypes.any,
        metaKeySelection: PropTypes.bool,
        expandedKeys: PropTypes.object,
        propagateSelectionUp: PropTypes.bool,
        propagateSelectionDown: PropTypes.bool,
        onSelect: PropTypes.func,
        onUnselect: PropTypes.func,
        onExpand: PropTypes.func,
        onCollapse: PropTypes.func,
        onToggle: PropTypes.func,
        onSelectionChange: PropTypes.func,
        onPropagateUp: PropTypes.func
    }

    constructor(props) {
        super(props);
        if (!this.props.onToggle) {
            this.state = {
                expanded: props.node.defaultExpanded
            }
        }

        this.onClick = this.onClick.bind(this);
        this.onTouchEnd = this.onTouchEnd.bind(this);
        this.onTogglerClick = this.onTogglerClick.bind(this);
        this.propagateUp = this.propagateUp.bind(this);
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

    onClick(event) {
        if (event.target.className && event.target.className.indexOf('p-tree-toggler') === 0) {
            return;
        }
        
        if (this.props.selectionMode && this.props.node.selectable !== false) {
            let selectionKeys;

            if (this.isCheckboxSelectionMode()) {
                const checked = this.isChecked();
                selectionKeys = this.props.selectionKeys ? {...this.props.selectionKeys} : {};    

                if (checked) {
                    if (this.props.propagateSelectionDown)
                        this.propagateDown(this.props.node, false, selectionKeys);
                    else
                        delete selectionKeys[this.props.node.key];

                    if (this.props.propagateSelectionUp && this.props.onPropagateUp) {
                        this.props.onPropagateUp({
                            originalEvent: event,
                            check: false,
                            selectionKeys: selectionKeys
                        });
                    }

                    if (this.props.onNodeUnselect) {
                        this.props.onNodeUnselect({
                            originalEvent: event,
                            node: this.props.node
                        });
                    }
                }
                else {
                    if (this.props.propagateSelectionDown)
                        this.propagateDown(this.props.node, true, selectionKeys);
                    else 
                        selectionKeys[this.props.node.key] = {checked: true};
 
                        if (this.props.propagateSelectionUp && this.props.onPropagateUp) {
                            this.props.onPropagateUp({
                                originalEvent: event,
                                check: true,
                                selectionKeys: selectionKeys
                            });
                        }

                    if (this.props.onNodeSelect) {
                        this.props.onNodeSelect({
                            originalEvent: event,
                            node: this.props.node
                        });
                    }
                }
            }
            else {
                const selected = this.isSelected();
                const metaSelection = this.nodeTouched ? false : this.props.metaKeySelection;

                if (metaSelection) {
                    let metaKey = (event.metaKey||event.ctrlKey);
    
                    if (selected && metaKey) {
                        if (this.isSingleSelectionMode()) {
                            selectionKeys = null;
                        }
                        else {
                            selectionKeys = {...this.props.selectionKeys};
                            delete selectionKeys[this.props.node.key];
                        }
    
                        if (this.props.onNodeUnselect) {
                            this.props.onNodeUnselect({
                                originalEvent: event,
                                node: this.props.node
                            });
                        }
                    }
                    else {
                        if (this.isSingleSelectionMode()) {
                            selectionKeys = this.props.node.key;
                        }
                        else if (this.isMultipleSelectionMode()) {
                            selectionKeys = !metaKey ? {} : (this.props.selectionKeys ? {...this.props.selectionKeys} : {});
                            selectionKeys[this.props.node.key] = true;
                        }
    
                        if (this.props.onNodeSelect) {
                            this.props.onNodeSelect({
                                originalEvent: event,
                                node: this.props.node
                            });
                        }
                    }
                }
                else {
                    if (this.isSingleSelectionMode()) {
                        if (selected) {
                            selectionKeys = null;
    
                            if (this.props.onNodeUnselect) {
                                this.props.onNodeUnselect({
                                    originalEvent: event,
                                    node: this.props.node
                                });
                            }
                        }
                        else {
                            selectionKeys = this.props.node.key;
    
                            if (this.props.onNodeSelect) {
                                this.props.onNodeSelect({
                                    originalEvent: event,
                                    node: this.props.node
                                });
                            }
                        }
                    }
                    else {
                        if (selected) {
                            selectionKeys = {...this.props.selectionKeys};
                            delete selectionKeys[this.props.node.key];
    
                            if (this.props.onNodeUnselect) {
                                this.props.onNodeUnselect({
                                    originalEvent: event,
                                    node: this.props.node
                                });
                            }
                        }
                        else {
                            selectionKeys = this.props.selectionKeys ? {...this.props.selectionKeys} : {};
                            selectionKeys[this.props.node.key] = true;
                            
                            if (this.props.onNodeSelect) {
                                this.props.onNodeSelect({
                                    originalEvent: event,
                                    node: this.props.node
                                });
                            }
                        }
                    }
                }
            }

            if (this.props.onSelectionChange) {
                this.props.onSelectionChange({
                    originalEvent: event,
                    value: selectionKeys
                })
            }
        }

        this.nodeTouched = false;
    }

    propagateUp(event) {
        let check = event.check;
        let selectionKeys = event.selectionKeys;
        let checkedChildCount = 0;
        let childPartialSelected = false;
        
        for(let child of this.props.node.children) {
            if(selectionKeys[child.key] && selectionKeys[child.key].checked)
                checkedChildCount++;
            else if(selectionKeys[child.key] && selectionKeys[child.key].partialChecked)
                childPartialSelected = true;
        }

        if(check && checkedChildCount === this.props.node.children.length) {
            selectionKeys[this.props.node.key] = {checked: true, partialChecked: false};
        }
        else {
            if (!check) {
                delete selectionKeys[this.props.node.key];
            }

            if(childPartialSelected || (checkedChildCount > 0 && checkedChildCount !== this.props.node.children.length))
                selectionKeys[this.props.node.key] = {checked: false, partialChecked: true};
            else
                selectionKeys[this.props.node.key] = {checked: false, partialChecked: false};
        }

        if (this.props.propagateSelectionUp && this.props.onPropagateUp) {
            this.props.onPropagateUp(event);
        }
    }

    propagateDown(node, check, selectionKeys) {
        if(check)
            selectionKeys[node.key] = {checked: true, partialChecked: false};
        else
            delete selectionKeys[node.key];

        if (node.children && node.children.length) {
            for (let i = 0; i < node.children.length; i++) {
                this.propagateDown(node.children[i], check, selectionKeys);
            }
        }
    }

    isSelected() {
        if (this.props.selectionMode && this.props.selectionKeys)
            return this.isSingleSelectionMode() ? this.props.selectionKeys === this.props.node.key : this.props.selectionKeys[this.props.node.key] !== undefined;
        else
            return false;
    }

    isChecked() {
        return this.props.selectionKeys ? this.props.selectionKeys[this.props.node.key] && this.props.selectionKeys[this.props.node.key].checked: false;
    }

    isPartialChecked() {
        return this.props.selectionKeys ? this.props.selectionKeys[this.props.node.key] && this.props.selectionKeys[this.props.node.key].partialChecked: false;
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

    onTouchEnd() {
        this.nodeTouched = true;
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

    renderCheckbox() {
        if (this.isCheckboxSelectionMode() && this.props.node.selectable !== false) {
            const checked = this.isChecked();
            const partialChecked = this.isPartialChecked();
            const className = classNames('p-checkbox-box', {'p-highlight': checked});
            const icon = classNames('p-checkbox-icon p-c', {'pi pi-check': checked, 'pi pi-minus': partialChecked});

            return (
                <div className="p-checkbox p-component">
                    <div className={className}>
                        <span className={icon}></span>
                    </div>
                </div>
            )
        }
        else {
            return null;
        }
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
        const className = classNames('p-treenode-content', {'p-treenode-selectable': (this.props.selectionMode && this.props.node.selectable !== false), 'p-highlight': this.isCheckboxSelectionMode() ? this.isChecked() : this.isSelected()});
        const expanded = this.isExpanded();
        const toggler = this.renderToggler(expanded);
        const checkbox = this.renderCheckbox();
        const icon = this.renderIcon(expanded);
        const label = this.renderLabel();

        return (
            <div className={className} onClick={this.onClick} onTouchEnd={this.onTouchEnd}>
                {toggler}
                {checkbox}
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
                                <UITreeNode key={childNode.label} node={childNode} selectionMode={this.props.selectionMode}
                                    selectionKeys={this.props.selectionKeys} onSelectionChange={this.props.onSelectionChange} metaKeySelection={this.props.metaKeySelection}
                                    propagateSelectionDown={this.props.propagateSelectionDown} propagateSelectionUp={this.props.propagateSelectionUp}
                                    onExpand={this.props.onExpand} onCollapse={this.props.onCollapse} onSelect={this.props.onSelect} onUnselect={this.props.onUnselect}
                                    expandedKeys={this.props.expandedKeys} onToggle={this.props.onToggle} 
                                    onPropagateUp={this.propagateUp} />
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
        selectionKeys: null,
        onSelectionChange: null,
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
        selectionKeys: PropTypes.null,
        onSelectionChange: PropTypes.func,
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
            <UITreeNode key={node.label} node={node} selectionMode={this.props.selectionMode} 
                    selectionKeys={this.props.selectionKeys} onSelectionChange={this.props.onSelectionChange} metaKeySelection={this.props.metaKeySelection}
                    propagateSelectionDown={this.props.propagateSelectionDown} propagateSelectionUp={this.props.propagateSelectionUp}
                    onExpand={this.props.onExpand} onCollapse={this.props.onCollapse} onSelect={this.props.onSelect} onUnselect={this.props.onUnselect}
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
