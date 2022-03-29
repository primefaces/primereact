import React, { forwardRef, memo, useImperativeHandle, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { UITreeNode } from './UITreeNode';
import { ObjectUtils, classNames } from '../utils/Utils';

export const Tree = memo(forwardRef((props, ref) => {
    const [filterValueState, setFilterValueState] = useState('');
    const [expandedKeysState, setExpandedKeysState] = useState(props.expandedKeys);
    const filteredNodes = useRef([]);
    const dragState = useRef(null);
    const filterChanged = useRef(false);
    const filteredValue = props.onFilterValueChange ? props.filterValue : filterValueState;
    const expandedKeys = props.onToggle ? props.expandedKeys : expandedKeysState;

    const getRootNode = () => {
        return (props.filter && filteredNodes.current) ? filteredNodes.current : props.value;
    }

    const onToggle = (event) => {
        if (props.onToggle) {
            props.onToggle(event);
        }
        else {
            setExpandedKeysState(event.value);
        }
    }

    const onDragStart = (event) => {
        dragState.current = {
            path: event.path,
            index: event.index
        }
    }

    const onDragEnd = () => {
        dragState.current = null;
    }

    const onDrop = (event) => {
        if (validateDropNode(dragState.current.path, event.path)) {
            let value = JSON.parse(JSON.stringify(props.value));
            let dragPaths = dragState.current.path.split('-');

            dragPaths.pop();

            let dragNodeParent = findNode(value, dragPaths);
            let dragNode = dragNodeParent ? dragNodeParent.children[dragState.current.index] : value[dragState.current.index];
            let dropNode = findNode(value, event.path.split('-'));

            if (dropNode.children)
                dropNode.children.push(dragNode);
            else
                dropNode.children = [dragNode];

            if (dragNodeParent)
                dragNodeParent.children.splice(dragState.current.index, 1);
            else
                value.splice(dragState.current.index, 1);

            if (props.onDragDrop) {
                props.onDragDrop({
                    originalEvent: event.originalEvent,
                    value: value,
                    dragNode,
                    dropNode,
                    dropIndex: event.index
                });
            }
        }
    }

    const onDropPoint = (event) => {
        if (validateDropPoint(event)) {
            let value = JSON.parse(JSON.stringify(props.value));
            let dragPaths = dragState.current.path.split('-');

            dragPaths.pop();

            let dropPaths = event.path.split('-');

            dropPaths.pop();

            let dragNodeParent = findNode(value, dragPaths);
            let dropNodeParent = findNode(value, dropPaths);
            let dragNode = dragNodeParent ? dragNodeParent.children[dragState.current.index] : value[dragState.current.index];
            let siblings = areSiblings(dragState.current.path, event.path);

            if (dragNodeParent)
                dragNodeParent.children.splice(dragState.current.index, 1);
            else
                value.splice(dragState.current.index, 1);

            if (event.position < 0) {
                let dropIndex = (siblings) ? (dragState.current.index > event.index) ? event.index : event.index - 1 : event.index;

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

            if (props.onDragDrop) {
                props.onDragDrop({
                    originalEvent: event.originalEvent,
                    value: value,
                    dragNode,
                    dropNode: dropNodeParent,
                    dropIndex: event.index
                });
            }
        }
    }

    const validateDrop = (dragPath, dropPath) => {
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

    const validateDropNode = (dragPath, dropPath) => {
        let _validateDrop = validateDrop(dragPath, dropPath);
        if (_validateDrop) {
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

    const validateDropPoint = (event) => {
        let _validateDrop = validateDrop(dragState.current.path, event.path);
        if (_validateDrop) {
            //child dropped to next sibling's drop point
            if (event.position === -1 && areSiblings(dragState.current.path, event.path) && (dragState.current.index + 1 === event.index)) {
                return false;
            }

            return true;
        }
        else {
            return false;
        }
    }

    const areSiblings = (path1, path2) => {
        if (path1.length === 1 && path2.length === 1)
            return true;
        else
            return path1.substring(0, path1.lastIndexOf('-')) === path2.substring(0, path2.lastIndexOf('-'));
    }

    const findNode = (value, path) => {
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
                return findNode(nextSearchRoot, path);
            }
        }
    }

    const isNodeLeaf = (node) => {
        return node.leaf === false ? false : !(node.children && node.children.length);
    }

    const onFilterInputKeyDown = (event) => {
        //enter
        if (event.which === 13) {
            event.preventDefault();
        }
    }

    const onFilterInputChange = (event) => {
        filterChanged.current = true;
        const value = event.target.value;

        if (props.onFilterValueChange) {
            props.onFilterValueChange({
                originalEvent: event,
                value
            });
        }
        else {
            setFilterValueState(value);
        }
    }

    const filter = (value) => {
        setFilterValueState(ObjectUtils.isNotEmpty(value) ? value : '');
        _filter();
    }

    const _filter = () => {
        if (!filterChanged.current) {
            return;
        }

        if (ObjectUtils.isEmpty(filteredValue)) {
            filteredNodes.current = props.value;
        }
        else {
            filteredNodes.current = [];
            const searchFields = props.filterBy.split(',');
            const filterText = filteredValue.toLocaleLowerCase(props.filterLocale);
            const isStrictMode = props.filterMode === 'strict';
            for (let node of props.value) {
                let copyNode = { ...node };
                let paramsWithoutNode = { searchFields, filterText, isStrictMode };
                if ((isStrictMode && (findFilteredNodes(copyNode, paramsWithoutNode) || isFilterMatched(copyNode, paramsWithoutNode))) ||
                    (!isStrictMode && (isFilterMatched(copyNode, paramsWithoutNode) || findFilteredNodes(copyNode, paramsWithoutNode)))) {
                    filteredNodes.current.push(copyNode);
                }
            }
        }

        filterChanged.current = false;
    }

    const findFilteredNodes = (node, paramsWithoutNode) => {
        if (node) {
            let matched = false;
            if (node.children) {
                let childNodes = [...node.children];
                node.children = [];
                for (let childNode of childNodes) {
                    let copyChildNode = { ...childNode };
                    if (isFilterMatched(copyChildNode, paramsWithoutNode)) {
                        matched = true;
                        node.children.push(copyChildNode);
                    }
                }
            }

            if (matched) {
                node.expanded = true;
                return true;
            }
        }
    }

    const isFilterMatched = (node, { searchFields, filterText, isStrictMode }) => {
        let matched = false;
        for (let field of searchFields) {
            let fieldValue = String(ObjectUtils.resolveFieldData(node, field)).toLocaleLowerCase(props.filterLocale);
            if (fieldValue.indexOf(filterText) > -1) {
                matched = true;
            }
        }

        if (!matched || (isStrictMode && !isNodeLeaf(node))) {
            matched = findFilteredNodes(node, { searchFields, filterText, isStrictMode }) || matched;
        }

        return matched;
    }

    useImperativeHandle(ref, () => ({
        filter
    }));

    const createRootChild = (node, index, last) => {
        return (
            <UITreeNode key={node.key || node.label} node={node} index={index} last={last} path={String(index)} disabled={props.disabled} selectionMode={props.selectionMode}
                selectionKeys={props.selectionKeys} onSelectionChange={props.onSelectionChange} metaKeySelection={props.metaKeySelection}
                contextMenuSelectionKey={props.contextMenuSelectionKey} onContextMenuSelectionChange={props.onContextMenuSelectionChange} onContextMenu={props.onContextMenu}
                propagateSelectionDown={props.propagateSelectionDown} propagateSelectionUp={props.propagateSelectionUp}
                onExpand={props.onExpand} onCollapse={props.onCollapse} onSelect={props.onSelect} onUnselect={props.onUnselect}
                expandedKeys={expandedKeys} onToggle={onToggle} nodeTemplate={props.nodeTemplate} togglerTemplate={props.togglerTemplate} isNodeLeaf={isNodeLeaf}
                dragdropScope={props.dragdropScope} onDragStart={onDragStart} onDragEnd={onDragEnd} onDrop={onDrop} onDropPoint={onDropPoint}
                onNodeClick={props.onNodeClick} onNodeDoubleClick={props.onNodeDoubleClick} />
        )
    }

    const createRootChildren = () => {
        if (props.filter) {
            filterChanged.current = true;
            _filter();
        }

        const value = getRootNode();

        return (
            value.map((node, index) => createRootChild(node, index, (index === value.length - 1)))
        )
    }

    const createModel = () => {
        if (props.value) {
            const rootNodes = createRootChildren();
            const contentClass = classNames('p-tree-container', props.contentClassName);

            return (
                <ul className={contentClass} role="tree" aria-label={props.ariaLabel} aria-labelledby={props.ariaLabelledBy} style={props.contentStyle}>
                    {rootNodes}
                </ul>
            )
        }

        return null;
    }

    const createLoader = () => {
        if (props.loading) {
            const icon = classNames('p-tree-loading-icon pi-spin', props.loadingIcon);

            return (
                <div className="p-tree-loading-overlay p-component-overlay">
                    <i className={icon} />
                </div>
            )
        }

        return null;
    }

    const createFilter = () => {
        if (props.filter) {
            const value = ObjectUtils.isNotEmpty(filteredValue) ? filteredValue : '';

            return (
                <div className="p-tree-filter-container">
                    <input type="text" value={value} autoComplete="off" className="p-tree-filter p-inputtext p-component" placeholder={props.filterPlaceholder}
                        onKeyDown={onFilterInputKeyDown} onChange={onFilterInputChange} disabled={props.disabled} />
                    <span className="p-tree-filter-icon pi pi-search"></span>
                </div>
            )
        }

        return null;
    }

    const createHeader = () => {
        if (props.showHeader) {
            const filterElement = createFilter();
            let content = filterElement;

            if (props.header) {
                const defaultContentOptions = {
                    filterContainerClassName: 'p-tree-filter-container',
                    filterIconClasssName: 'p-tree-filter-icon pi pi-search',
                    filterInput: {
                        className: 'p-tree-filter p-inputtext p-component',
                        onKeyDown: onFilterInputKeyDown,
                        onChange: onFilterInputChange
                    },
                    filterElement,
                    element: content,
                    props
                };

                content = ObjectUtils.getJSXElement(props.header, defaultContentOptions);
            }

            return (
                <div className="p-tree-header">
                    {content}
                </div>
            )
        }

        return null;
    }

    const createFooter = () => {
        const content = ObjectUtils.getJSXElement(props.footer, props);

        return (
            <div className="p-tree-footer">
                {content}
            </div>
        )
    }

    const className = classNames('p-tree p-component', props.className, {
        'p-tree-selectable': props.selectionMode,
        'p-tree-loading': props.loading,
        'p-disabled': props.disabled
    });
    const loader = createLoader();
    const content = createModel();
    const header = createHeader();
    const footer = createFooter();

    return (
        <div id={props.id} className={className} style={props.style}>
            {loader}
            {header}
            {content}
            {footer}
        </div>
    )
}));

Tree.defaultProps = {
    __TYPE: 'Tree',
    id: null,
    value: null,
    disabled: false,
    selectionMode: null,
    selectionKeys: null,
    onSelectionChange: null,
    contextMenuSelectionKey: null,
    onContextMenuSelectionChange: null,
    expandedKeys: null,
    style: null,
    className: null,
    contentStyle: null,
    contentClassName: null,
    metaKeySelection: true,
    propagateSelectionUp: true,
    propagateSelectionDown: true,
    loading: false,
    loadingIcon: 'pi pi-spinner',
    dragdropScope: null,
    header: null,
    footer: null,
    showHeader: true,
    filter: false,
    filterValue: null,
    filterBy: 'label',
    filterMode: 'lenient',
    filterPlaceholder: null,
    filterLocale: undefined,
    nodeTemplate: null,
    togglerTemplate: null,
    onSelect: null,
    onUnselect: null,
    onExpand: null,
    onCollapse: null,
    onToggle: null,
    onDragDrop: null,
    onContextMenu: null,
    onFilterValueChange: null,
    onNodeClick: null,
    onNodeDoubleClick: null
}

Tree.propTypes /* remove-proptypes */ = {
    __TYPE: PropTypes.string,
    id: PropTypes.string,
    value: PropTypes.any,
    disabled: PropTypes.bool,
    selectionMode: PropTypes.string,
    selectionKeys: PropTypes.any,
    onSelectionChange: PropTypes.func,
    contextMenuSelectionKey: PropTypes.any,
    onContextMenuSelectionChange: PropTypes.func,
    expandedKeys: PropTypes.object,
    style: PropTypes.object,
    className: PropTypes.string,
    contentStyle: PropTypes.object,
    contentClassName: PropTypes.string,
    metaKeySelection: PropTypes.bool,
    propagateSelectionUp: PropTypes.bool,
    propagateSelectionDown: PropTypes.bool,
    loading: PropTypes.bool,
    loadingIcon: PropTypes.string,
    dragdropScope: PropTypes.string,
    header: PropTypes.any,
    footer: PropTypes.any,
    showHeader: PropTypes.bool,
    filter: PropTypes.bool,
    filterValue: PropTypes.string,
    filterBy: PropTypes.any,
    filterMode: PropTypes.string,
    filterPlaceholder: PropTypes.string,
    filterLocale: PropTypes.string,
    nodeTemplate: PropTypes.any,
    togglerTemplate: PropTypes.func,
    onSelect: PropTypes.func,
    onUnselect: PropTypes.func,
    onExpand: PropTypes.func,
    onCollapse: PropTypes.func,
    onToggle: PropTypes.func,
    onDragDrop: PropTypes.func,
    onContextMenu: PropTypes.func,
    onFilterValueChange: PropTypes.func,
    onNodeClick: PropTypes.func,
    onNodeDoubleClick: PropTypes.func
}
