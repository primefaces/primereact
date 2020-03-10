import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import DomHandler from '../utils/DomHandler';

export class UITreeNode extends Component {

    static defaultProps = {
        node: null,
        index: null,
        last: null,
        parent: null,
        path: null,
        disabled: false,
        selectionMode: null,
        selectionKeys: null,
        contextMenuSelectionKey: null,
        metaKeySelection: true,
        expandedKeys: null,
        propagateSelectionUp: true,
        propagateSelectionDown: true,
        dragdropScope: null,
        ariaLabel: null,
        ariaLabelledBy: null,
        nodeTemplate: null,
        isNodeLeaf: null,
        onSelect: null,
        onUnselect: null,
        onExpand: null,
        onCollapse: null,
        onToggle: null,
        onSelectionChange: null,
        onContextMenuSelectionChange: null,
        onPropagateUp: null,
        onDragStart: null,
        onDragEnd: null,
        onDrop: null,
        onDropPoint: null,
        onContextMenu: null
    }

    static propTypes = {
        node: PropTypes.object,
        index: PropTypes.number,
        last: PropTypes.bool,
        parent: PropTypes.object,
        path: PropTypes.string,
        disabled: PropTypes.bool,
        selectionMode: PropTypes.string,
        selectionKeys: PropTypes.any,
        contextMenuSelectionKey: PropTypes.any,
        metaKeySelection: PropTypes.bool,
        expandedKeys: PropTypes.object,
        propagateSelectionUp: PropTypes.bool,
        propagateSelectionDown: PropTypes.bool,
        dragdropScope: PropTypes.string,
        ariaLabel: PropTypes.string,
        ariaLabelledBy: PropTypes.string,
        nodeTemplate: PropTypes.func,
        isNodeLeaf: PropTypes.func,
        onSelect: PropTypes.func,
        onUnselect: PropTypes.func,
        onExpand: PropTypes.func,
        onCollapse: PropTypes.func,
        onToggle: PropTypes.func,
        onSelectionChange: PropTypes.func,
        onContextMenuSelectionChange: PropTypes.func,
        onPropagateUp: PropTypes.func,
        onDragStart: PropTypes.func,
        onDragEnd: PropTypes.func,
        onDrop: PropTypes.func,
        onDropPoint: PropTypes.func,
        onContextMenu: PropTypes.func
    }

    constructor(props) {
        super(props);

        this.onClick = this.onClick.bind(this);
        this.onRightClick = this.onRightClick.bind(this);
        this.onTouchEnd = this.onTouchEnd.bind(this);
        this.onTogglerClick = this.onTogglerClick.bind(this);
        this.onNodeKeyDown = this.onNodeKeyDown.bind(this);
        this.propagateUp = this.propagateUp.bind(this);

        this.onDrop = this.onDrop.bind(this);
        this.onDragOver = this.onDragOver.bind(this);
        this.onDragEnter = this.onDragEnter.bind(this);
        this.onDragLeave = this.onDragLeave.bind(this);
        this.onDragStart = this.onDragStart.bind(this);
        this.onDragEnd = this.onDragEnd.bind(this);
        this.onDropPointDragOver = this.onDropPointDragOver.bind(this);
        this.onDropPointDragEnter = this.onDropPointDragEnter.bind(this);
        this.onDropPointDragLeave = this.onDropPointDragLeave.bind(this);
    }

    isLeaf() {
        return this.props.isNodeLeaf(this.props.node);
    }

    expand(event) {
        let expandedKeys = this.props.expandedKeys ? {...this.props.expandedKeys} : {};
        expandedKeys[this.props.node.key] = true;

        this.props.onToggle({
            originalEvent: event,
            value: expandedKeys
        });

        this.invokeToggleEvents(event, true);
    }

    collapse(event) {
        let expandedKeys = {...this.props.expandedKeys};
        delete expandedKeys[this.props.node.key];

        this.props.onToggle({
            originalEvent: event,
            value: expandedKeys
        });

        this.invokeToggleEvents(event, false);
    }

    onTogglerClick(event) {
        if (this.props.disabled) {
            return;
        }

        if (this.isExpanded())
            this.collapse(event);
        else
            this.expand(event);
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

    isExpanded() {
        return this.props.expandedKeys ? this.props.expandedKeys[this.props.node.key] !== undefined : false;
    }

    onNodeKeyDown(event) {
        if (this.props.disabled) {
            return;
        }

        const nodeElement = event.target.parentElement;

        switch (event.which) {
            //down arrow
            case 40:
                const listElement = nodeElement.children[1];
                if (listElement) {
                    this.focusNode(listElement.children[0]);
                }
                else {
                    const nextNodeElement = nodeElement.nextElementSibling;
                    if (nextNodeElement) {
                        this.focusNode(nextNodeElement);
                    }
                    else {
                        let nextSiblingAncestor = this.findNextSiblingOfAncestor(nodeElement);
                        if (nextSiblingAncestor) {
                            this.focusNode(nextSiblingAncestor);
                        }
                    }
                }

                event.preventDefault();
            break;

            //up arrow
            case 38:
                if (nodeElement.previousElementSibling) {
                    this.focusNode(this.findLastVisibleDescendant(nodeElement.previousElementSibling));
                }
                else {
                    let parentNodeElement = this.getParentNodeElement(nodeElement);
                    if (parentNodeElement) {
                        this.focusNode(parentNodeElement);
                    }
                }

                event.preventDefault();
            break;

            //right arrow
            case 39:
                if (!this.isExpanded()) {
                    this.expand(event);
                }

                event.preventDefault();
            break;

            //left arrow
            case 37:
                if (this.isExpanded()) {
                    this.collapse(event);
                }

                event.preventDefault();
            break;

            //enter
            case 13:
                this.onClick(event);
                event.preventDefault();
            break;

            default:
                //no op
            break;
        }
    }

    findNextSiblingOfAncestor(nodeElement) {
        let parentNodeElement = this.getParentNodeElement(nodeElement);
        if (parentNodeElement) {
            if (parentNodeElement.nextElementSibling)
                return parentNodeElement.nextElementSibling;
            else
                return this.findNextSiblingOfAncestor(parentNodeElement);
        }
        else {
            return null;
        }
    }

    findLastVisibleDescendant(nodeElement) {
        const childrenListElement = nodeElement.children[1];
        if (childrenListElement) {
            const lastChildElement = childrenListElement.children[childrenListElement.children.length - 1];

            return this.findLastVisibleDescendant(lastChildElement);
        }
        else {
            return nodeElement;
        }
    }

    getParentNodeElement(nodeElement) {
        const parentNodeElement = nodeElement.parentElement.parentElement;

        return DomHandler.hasClass(parentNodeElement, 'p-treenode') ? parentNodeElement : null;
    }

    focusNode(element) {
        element.children[0].focus();
    }

    onClick(event) {
        if ((event.target.className && event.target.className.constructor === String && event.target.className.indexOf('p-tree-toggler') === 0) || this.props.disabled) {
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

                    if (this.props.onUnselect) {
                        this.props.onUnselect({
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

                    if (this.props.onSelect) {
                        this.props.onSelect({
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

                        if (this.props.onUnselect) {
                            this.props.onUnselect({
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

                        if (this.props.onSelect) {
                            this.props.onSelect({
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

                            if (this.props.onUnselect) {
                                this.props.onUnselect({
                                    originalEvent: event,
                                    node: this.props.node
                                });
                            }
                        }
                        else {
                            selectionKeys = this.props.node.key;

                            if (this.props.onSelect) {
                                this.props.onSelect({
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

                            if (this.props.onUnselect) {
                                this.props.onUnselect({
                                    originalEvent: event,
                                    node: this.props.node
                                });
                            }
                        }
                        else {
                            selectionKeys = this.props.selectionKeys ? {...this.props.selectionKeys} : {};
                            selectionKeys[this.props.node.key] = true;

                            if (this.props.onSelect) {
                                this.props.onSelect({
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

    onRightClick(event) {
        if (this.props.disabled) {
            return;
        }

        DomHandler.clearSelection();

        if (this.props.onContextMenuSelectionChange) {
            this.props.onContextMenuSelectionChange({
                originalEvent: event,
                value: this.props.node.key
            })
        }

        if (this.props.onContextMenu) {
            this.props.onContextMenu({
                originalEvent: event,
                node: this.props.node
            });
        }
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

    onDropPoint(event, position) {
        event.preventDefault();

        if (this.props.node.droppable !== false) {
            DomHandler.removeClass(event.target, 'p-treenode-droppoint-active');

            if (this.props.onDropPoint) {
                this.props.onDropPoint({
                    originalEvent: event,
                    path: this.props.path,
                    index: this.props.index,
                    position: position
                });
            }
        }
    }

    onDropPointDragOver(event) {
        if (event.dataTransfer.types[1] === this.props.dragdropScope) {
            event.dataTransfer.dropEffect = 'move';
            event.preventDefault();
        }
    }

    onDropPointDragEnter(event) {
        if (event.dataTransfer.types[1] === this.props.dragdropScope) {
            DomHandler.addClass(event.target, 'p-treenode-droppoint-active');
        }
    }

    onDropPointDragLeave(event) {
        if (event.dataTransfer.types[1] === this.props.dragdropScope) {
            DomHandler.removeClass(event.target, 'p-treenode-droppoint-active');
        }
    }

    onDrop(event) {
        if (this.props.dragdropScope && this.props.node.droppable !== false) {
            DomHandler.removeClass(this.contentElement, 'p-treenode-dragover');
            event.preventDefault();
            event.stopPropagation();

            if (this.props.onDrop) {
                this.props.onDrop({
                    originalEvent: event,
                    path: this.props.path
                });
            }
        }
    }

    onDragOver(event) {
        if (event.dataTransfer.types[1] === this.props.dragdropScope && this.props.node.droppable !== false) {
            event.dataTransfer.dropEffect = 'move';
            event.preventDefault();
            event.stopPropagation();
        }
    }

    onDragEnter(event) {
        if (event.dataTransfer.types[1] === this.props.dragdropScope && this.props.node.droppable !== false) {
            DomHandler.addClass(this.contentElement, 'p-treenode-dragover');
        }
    }

    onDragLeave(event) {
        if (event.dataTransfer.types[1] === this.props.dragdropScope && this.props.node.droppable !== false) {
            let rect = event.currentTarget.getBoundingClientRect();
            if (event.nativeEvent.x > rect.left + rect.width || event.nativeEvent.x < rect.left || event.nativeEvent.y >= Math.floor(rect.top + rect.height) || event.nativeEvent.y < rect.top) {
                DomHandler.removeClass(this.contentElement, 'p-treenode-dragover');
            }
        }
    }

    onDragStart(event) {
        event.dataTransfer.setData("text", this.props.dragdropScope);
        event.dataTransfer.setData(this.props.dragdropScope, this.props.dragdropScope);

        if (this.props.onDragStart) {
            this.props.onDragStart({
                originalEvent: event,
                path: this.props.path,
                index: this.props.index
            });
        }
    }

    onDragEnd(event) {
        if (this.props.onDragEnd) {
            this.props.onDragEnd({
                originalEvent: event
            });
        }
    }

    renderLabel() {
        const label = this.props.nodeTemplate ? this.props.nodeTemplate(this.props.node) : this.props.node.label;

        return (
            <span className="p-treenode-label">
                {label}
            </span>
        );
    }

    renderCheckbox() {
        if (this.isCheckboxSelectionMode() && this.props.node.selectable !== false) {
            const checked = this.isChecked();
            const partialChecked = this.isPartialChecked();
            const className = classNames('p-checkbox-box', {'p-highlight': checked, 'p-disabled': this.props.disabled});
            const icon = classNames('p-checkbox-icon p-c', {'pi pi-check': checked, 'pi pi-minus': partialChecked});

            return (
                <div className="p-checkbox p-component">
                    <div className={className} role="checkbox" aria-checked={checked}>
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
        const iconClassName = classNames('p-tree-toggler-icon pi pi-fw', {'pi-caret-right': !expanded, 'pi-caret-down': expanded});

        return (
            <span className="p-tree-toggler p-unselectable-text p-link" onClick={this.onTogglerClick}>
                <span className={iconClassName}></span>
            </span>
        );
    }

    renderDropPoint(position) {
        if (this.props.dragdropScope) {
            return (
                <li className="p-treenode-droppoint" onDrop={event => this.onDropPoint(event, position)} onDragOver={this.onDropPointDragOver}
                        onDragEnter={this.onDropPointDragEnter} onDragLeave={this.onDropPointDragLeave}></li>
            );
        }
        else {
            return null;
        }
    }

    renderContent() {
        const selected = this.isSelected();
        const checked = this.isChecked();
        const className = classNames('p-treenode-content', this.props.node.className, {
                'p-treenode-selectable': (this.props.selectionMode && this.props.node.selectable !== false),
                'p-highlight': this.isCheckboxSelectionMode() ? checked : selected,
                'p-highlight-contextmenu': (this.props.contextMenuSelectionKey && this.props.contextMenuSelectionKey === this.props.node.key),
                'p-disabled': this.props.disabled
            });
        const expanded = this.isExpanded();
        const toggler = this.renderToggler(expanded);
        const checkbox = this.renderCheckbox();
        const icon = this.renderIcon(expanded);
        const label = this.renderLabel();
        const tabIndex = this.props.disabled ? undefined : '0';

        return (
            <div ref={(el) => this.contentElement = el} className={className} style={this.props.node.style} onClick={this.onClick} onContextMenu={this.onRightClick} onTouchEnd={this.onTouchEnd} draggable={this.props.dragdropScope && this.props.node.draggable !== false && !this.props.disabled}
                onDrop={this.onDrop} onDragOver={this.onDragOver} onDragEnter={this.onDragEnter} onDragLeave={this.onDragLeave}
                onDragStart={this.onDragStart} onDragEnd={this.onDragEnd} tabIndex={tabIndex} onKeyDown={this.onNodeKeyDown}
                role="treeitem" aria-posinset={this.props.index + 1} aria-expanded={this.isExpanded()} aria-selected={checked || selected}>
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
                <ul className="p-treenode-children" role="group">
                    {
                        this.props.node.children.map((childNode, index) => {
                            return (
                                <UITreeNode key={childNode.key||childNode.label} node={childNode} parent={this.props.node} index={index} last={index === this.props.node.children.length - 1} path={this.props.path + '-' + index} disabled={this.props.disabled}
                                    selectionMode={this.props.selectionMode} selectionKeys={this.props.selectionKeys} onSelectionChange={this.props.onSelectionChange} metaKeySelection={this.props.metaKeySelection}
                                    propagateSelectionDown={this.props.propagateSelectionDown} propagateSelectionUp={this.props.propagateSelectionUp}
                                    contextMenuSelectionKey={this.props.contextMenuSelectionKey} onContextMenuSelectionChange={this.props.onContextMenuSelectionChange} onContextMenu={this.props.onContextMenu}
                                    onExpand={this.props.onExpand} onCollapse={this.props.onCollapse} onSelect={this.props.onSelect} onUnselect={this.props.onUnselect}
                                    expandedKeys={this.props.expandedKeys} onToggle={this.props.onToggle} onPropagateUp={this.propagateUp} nodeTemplate={this.props.nodeTemplate} isNodeLeaf={this.props.isNodeLeaf}
                                    dragdropScope={this.props.dragdropScope} onDragStart={this.props.onDragStart} onDragEnd={this.props.onDragEnd} onDrop={this.props.onDrop} onDropPoint={this.props.onDropPoint} />
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

    renderNode() {
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

    render() {
        const node = this.renderNode();

        if (this.props.dragdropScope && !this.props.disabled) {
            const beforeDropPoint = this.renderDropPoint(-1);
            const afterDropPoint = this.props.last ? this.renderDropPoint(1) : null;

            return (
                <React.Fragment>
                    {beforeDropPoint}
                    {node}
                    {afterDropPoint}
                </React.Fragment>
            );
        }
        else {
            return node;
        }
    }
}
