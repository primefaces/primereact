import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import DomHandler from '../utils/DomHandler';

class UITreeNode extends Component {
    
    static defaultProps = {
        node: null,
        index: null,
        last: null,
        parent: null,
        path: null,
        selectionMode: null,
        selectionKeys: null,
        contextMenuSelectionKey: null,
        metaKeySelection: true,
        expandedKeys: null,
        propagateSelectionUp: true,
        propagateSelectionDown: true,
        dragdropScope: null,
        nodeTemplate: null,
        onSelect: null,
        onUnselect: null,
        onExpand: null,
        onCollapse: null,
        onToggle: null,
        onSelectionChange: null,
        onContextMenuSelectionChange: PropTypes.func,
        onPropagateUp: null,
        onDragStart: null,
        onDragEnd: null,
        onDrop: null,
        onDropPoint: null,
        onContextMenu: null
    }

    static propsTypes = {
        node: PropTypes.object,
        index: PropTypes.number,
        last: PropTypes.number,
        parent: PropTypes.object,
        path: PropTypes.string,
        selectionMode: PropTypes.string,
        selectionKeys: PropTypes.any,
        contextMenuSelectionKey: PropTypes.any,
        metaKeySelection: PropTypes.bool,
        expandedKeys: PropTypes.object,
        propagateSelectionUp: PropTypes.bool,
        propagateSelectionDown: PropTypes.bool,
        dragdropScope: PropTypes.string,
        nodeTemplate: PropTypes.func,
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
        if (!this.props.onToggle) {
            this.state = {
                expanded: props.node.defaultExpanded
            }
        }

        this.onClick = this.onClick.bind(this);
        this.onRightClick = this.onRightClick.bind(this);
        this.onTouchEnd = this.onTouchEnd.bind(this);
        this.onTogglerClick = this.onTogglerClick.bind(this);
        this.onTogglerKeyDown = this.onTogglerKeyDown.bind(this);
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

        event.preventDefault();
    }

    onTogglerKeyDown(event) {
        if (event.which === 32) {
            this.onTogglerClick(event);
            event.preventDefault();
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
        if (this.props.onToggle)
            return this.props.expandedKeys && this.props.expandedKeys[this.props.node.key] !== undefined;
        else
            return this.state.expanded;
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
        const iconClassName = classNames('p-tree-toggler-icon pi pi-fw', {'pi-caret-right': !expanded, 'pi-caret-down': expanded});

        return (
            <a tabIndex="0" className="p-tree-toggler p-unselectable-text" onClick={this.onTogglerClick} onKeyDown={this.onTogglerKeyDown}>
                <span className={iconClassName}></span>
            </a>
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
        const className = classNames('p-treenode-content', this.props.node.className, {
                'p-treenode-selectable': (this.props.selectionMode && this.props.node.selectable !== false), 
                'p-highlight': this.isCheckboxSelectionMode() ? this.isChecked() : this.isSelected(),
                'p-highlight-contextmenu': (this.props.contextMenuSelectionKey && this.props.contextMenuSelectionKey === this.props.node.key)});
        const expanded = this.isExpanded();
        const toggler = this.renderToggler(expanded);
        const checkbox = this.renderCheckbox();
        const icon = this.renderIcon(expanded);
        const label = this.renderLabel();

        return (
            <div ref={(el) => this.contentElement = el} className={className} style={this.props.node.style} onClick={this.onClick} onContextMenu={this.onRightClick} onTouchEnd={this.onTouchEnd} draggable={this.props.dragdropScope && this.props.node.draggable !== false}
                onDrop={this.onDrop} onDragOver={this.onDragOver} onDragEnter={this.onDragEnter} onDragLeave={this.onDragLeave}
                onDragStart={this.onDragStart} onDragEnd={this.onDragEnd}>
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
                                <UITreeNode key={childNode.key||childNode.label} node={childNode} parent={this.props.node} index={index} last={index === this.props.node.children.length - 1} path={this.props.path + '-' + index} selectionMode={this.props.selectionMode}
                                    selectionKeys={this.props.selectionKeys} onSelectionChange={this.props.onSelectionChange} metaKeySelection={this.props.metaKeySelection}
                                    propagateSelectionDown={this.props.propagateSelectionDown} propagateSelectionUp={this.props.propagateSelectionUp}
                                    contextMenuSelectionKey={this.props.contextMenuSelectionKey} onContextMenuSelectionChange={this.props.onContextMenuSelectionChange} onContextMenu={this.props.onContextMenu}
                                    onExpand={this.props.onExpand} onCollapse={this.props.onCollapse} onSelect={this.props.onSelect} onUnselect={this.props.onUnselect}
                                    expandedKeys={this.props.expandedKeys} onToggle={this.props.onToggle} onPropagateUp={this.propagateUp} nodeTemplate={this.props.nodeTemplate}
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

        if (this.props.dragdropScope) {
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

export class Tree extends Component {

    static defaultProps = {
        id: null,
        value: null,
        selectionMode: null,
        selectionKeys: null,
        onSelectionChange: null,
        contextMenuSelectionKey: null,
        onContextMenuSelectionChange: null,
        expandedKeys: null,
        style: null,
        className: null,
        metaKeySelection: true,
        propagateSelectionUp: true,
        propagateSelectionDown: true,
        loading: false,
        loadingIcon: 'pi pi-spinner',
        dragdropScope: null,
        nodeTemplate: null,
        onSelect: null,
        onUnselect: null,
        onExpand: null,
        onCollapse: null,
        onToggle: null,
        onDragDrop: null,
        onContextMenu: null
    }

    static propsTypes = {
        id: PropTypes.string,
        value: PropTypes.any.isRequired,
        selectionMode: PropTypes.string,
        selectionKeys: PropTypes.any,
        onSelectionChange: PropTypes.func,
        contextMenuSelectionKey: PropTypes.any,
        onContextMenuSelectionChange: PropTypes.func,
        expandedKeys: PropTypes.object,
        style: PropTypes.object,
        className: PropTypes.string,
        metaKeySelection: PropTypes.bool,
        propagateSelectionUp: PropTypes.bool,
        propagateSelectionDown: PropTypes.bool,
        loading: PropTypes.bool,
        loadingIcon: PropTypes.string,
        dragdropScope: PropTypes.string,
        nodeTemplate: PropTypes.func,
        onSelect: PropTypes.func,
        onUnselect: PropTypes.func,
        onExpand: PropTypes.func,
        onCollapse: PropTypes.func,
        onToggle: PropTypes.func,
        onDragDrop: PropTypes.func,
        onContextMenu: PropTypes.func
    }

    constructor(props) {
        super(props);
        
        this.onToggle = this.onToggle.bind(this);
        this.onDragStart = this.onDragStart.bind(this);
        this.onDragEnd = this.onDragEnd.bind(this);
        this.onDrop = this.onDrop.bind(this);
        this.onDropPoint = this.onDropPoint.bind(this);
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

    onDragStart(event) {
        this.dragState = {
            path: event.path,
            index: event.index
        }
    }

    onDragEnd() {
        this.dragState = null;
    }

    onDrop(event) {
        if (this.validateDropNode(this.dragState.path, event.path)) {
            let value = JSON.parse(JSON.stringify(this.props.value));
            let dragPaths = this.dragState.path.split('-');
            dragPaths.pop();
            let dragNodeParent = this.findNode(value, dragPaths);
            let dragNode = dragNodeParent ? dragNodeParent.children[this.dragState.index] : value[this.dragState.index];
            let dropNode = this.findNode(value, event.path.split('-'));
            
            if (dropNode.children)
                dropNode.children.push(dragNode);
            else
                dropNode.children = [dragNode];

            if (dragNodeParent)
                dragNodeParent.children.splice(this.dragState.index, 1);
            else
                value.splice(this.dragState.index, 1);

            if (this.props.onDragDrop) {
                this.props.onDragDrop({
                    originalEvent: event.originalEvent,
                    value: value
                });
            }
        }
    }

    onDropPoint(event) {
        if (this.validateDropPoint(event)) {
            let value = JSON.parse(JSON.stringify(this.props.value));
            let dragPaths = this.dragState.path.split('-');
            dragPaths.pop();
            let dropPaths = event.path.split('-');
            dropPaths.pop();
            let dragNodeParent = this.findNode(value, dragPaths);
            let dropNodeParent = this.findNode(value, dropPaths);
            let dragNode = dragNodeParent ? dragNodeParent.children[this.dragState.index] : value[this.dragState.index];
            let siblings = this.areSiblings(this.dragState.path, event.path);

            if (dragNodeParent)
                dragNodeParent.children.splice(this.dragState.index, 1);
            else
                value.splice(this.dragState.index, 1);

            if (event.position < 0) {
                let dropIndex = (siblings) ? (this.dragState.index > event.index) ? event.index : event.index - 1 : event.index;

                if (dropNodeParent)
                    dropNodeParent.children.splice(dropIndex, 0, dragNode);
                else
                    value.splice(dropIndex, 0, dragNode);
            }
            else {
                if (dropNodeParent)
                    dropNodeParent.children.push(dragNode);
                else
                    value.push(dragNode);
            }
            
            if (this.props.onDragDrop) {
                this.props.onDragDrop({
                    originalEvent: event.originalEvent,
                    value: value
                });
            }
        }
    }

    validateDrop(dragPath, dropPath) {
        if (!dragPath) {
            return false;
        }
        else {   
            //same node
            if (dragPath === dropPath) {
                return false;
            }

            //parent dropped on an descendant
            if (dropPath.indexOf(dragPath) === 0) {
                return false;
            }

            return true;
        }
    }

    validateDropNode(dragPath, dropPath) {
        let validateDrop = this.validateDrop(dragPath, dropPath);
        if (validateDrop) {
            //child dropped on parent
            if (dragPath.indexOf('-') > 0 && dragPath.substring(0, dragPath.lastIndexOf('-')) === dropPath) {
                return false;
            }

            return true;
        }
        else {
            return false;
        }
    }

    validateDropPoint(event) {
        let validateDrop = this.validateDrop(this.dragState.path, event.path);
        if (validateDrop) {
            //child dropped to next sibling's drop point
            if (event.position === -1 && this.areSiblings(this.dragState.path, event.path) && (this.dragState.index +1 === event.index)) {
                return false;
            }

            return true;
        }
        else {
            return false;
        }
    }

    areSiblings(path1, path2) {
        if (path1.length === 1 && path2.length === 1)
            return true;
        else
            return path1.substring(0, path1.lastIndexOf('-')) === path2.substring(0, path2.lastIndexOf('-'));
    }

    findNode(value, path) {
        if (path.length === 0) {
            return null;
        }
        else {
            const index = parseInt(path[0], 10);
            const nextSearchRoot = value.children ? value.children[index] : value[index];

            if (path.length === 1) {
                return nextSearchRoot;
            }
            else {
                path.shift();
                return this.findNode(nextSearchRoot, path);
            }
        }
    }

    renderRootChild(node, index, last) {
        return (
            <UITreeNode key={node.key||node.label} node={node} index={index} last={last} path={String(index)} selectionMode={this.props.selectionMode} 
                    selectionKeys={this.props.selectionKeys} onSelectionChange={this.props.onSelectionChange} metaKeySelection={this.props.metaKeySelection}
                    contextMenuSelectionKey={this.props.contextMenuSelectionKey} onContextMenuSelectionChange={this.props.onContextMenuSelectionChange} onContextMenu={this.props.onContextMenu}
                    propagateSelectionDown={this.props.propagateSelectionDown} propagateSelectionUp={this.props.propagateSelectionUp}
                    onExpand={this.props.onExpand} onCollapse={this.props.onCollapse} onSelect={this.props.onSelect} onUnselect={this.props.onUnselect}
                    expandedKeys={this.props.expandedKeys} onToggle={this.props.onToggle} nodeTemplate={this.props.nodeTemplate} 
                    dragdropScope={this.props.dragdropScope} onDragStart={this.onDragStart} onDragEnd={this.onDragEnd} onDrop={this.onDrop} onDropPoint={this.onDropPoint}  />
        );
    };

    renderRootChildren() {
        return (
            this.props.value.map((node, index) => this.renderRootChild(node, index, (index === this.props.value.length - 1)))
        );
    }

    renderModel() {
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
    
    renderLoader() {
        if (this.props.loading) {
            let icon = classNames('p-tree-loading-icon pi-spin', this.props.loadingIcon);

            return (
                <React.Fragment>
                    <div className="p-tree-loading-mask p-component-overlay"></div>
                    <div className="p-tree-loading-content">
                        <i className={icon} />
                    </div>
                </React.Fragment>
            );
        }
        else {
            return null;
        }
    }

    render() {
        const className = classNames('p-tree p-components', {'p-tree-selectable': this.props.selectionMode, 'p-tree-loading': this.props.loading});
        const loader = this.renderLoader();
        const content = this.renderModel();

        return (
            <div id={this.props.id} className={className} style={this.props.style}>
                {loader}
                {content}
            </div>
        );
    }
}
