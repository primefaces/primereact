import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {UITreeNode} from './UITreeNode';

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

        if (!this.props.onToggle) {
            this.state = {
                expandedKeys: this.props.expandedKeys
            };
        }
        
        this.onToggle = this.onToggle.bind(this);
        this.onDragStart = this.onDragStart.bind(this);
        this.onDragEnd = this.onDragEnd.bind(this);
        this.onDrop = this.onDrop.bind(this);
        this.onDropPoint = this.onDropPoint.bind(this);
    }

    getExpandedKeys() {
        return this.props.onToggle ? this.props.expandedKeys : this.state.expandedKeys;
    }

    onToggle(event) {
        if (this.props.onToggle) {
            this.props.onToggle(event);
        }
        else {
            this.setState({
                expandedKeys: event.value
            });
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
                    expandedKeys={this.getExpandedKeys()} onToggle={this.onToggle} nodeTemplate={this.props.nodeTemplate} 
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
                <ul className="p-tree-container" role="tree" aria-label={this.props.ariaLabel} aria-labelledby={this.props.ariaLabelledBy}>
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
        const className = classNames('p-tree p-component', {'p-tree-selectable': this.props.selectionMode, 'p-tree-loading': this.props.loading});
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
