import * as React from 'react';
import { localeOption, PrimeReactContext } from '../api/Api';
import { useHandleStyle } from '../componentbase/ComponentBase';
import { useMergeProps } from '../hooks/Hooks';
import { useUpdateEffect } from '../hooks/useUpdateEffect';
import { SearchIcon } from '../icons/search';
import { SpinnerIcon } from '../icons/spinner';
import { classNames, DomHandler, IconUtils, ObjectUtils } from '../utils/Utils';
import { TreeBase } from './TreeBase';
import { UITreeNode } from './UITreeNode';

export const Tree = React.memo(
    React.forwardRef((inProps, ref) => {
        const mergeProps = useMergeProps();
        const context = React.useContext(PrimeReactContext);
        const props = TreeBase.getProps(inProps, context);

        const [filterValueState, setFilterValueState] = React.useState('');
        const [expandedKeysState, setExpandedKeysState] = React.useState(props.expandedKeys);
        const elementRef = React.useRef(null);
        const filteredNodes = React.useRef([]);
        const dragState = React.useRef(null);
        const filterChanged = React.useRef(false);
        const filteredValue = props.onFilterValueChange ? props.filterValue : filterValueState;
        const expandedKeys = props.onToggle ? props.expandedKeys : expandedKeysState;
        const childFocusEvent = React.useRef(null);
        const { ptm, cx, isUnstyled } = TreeBase.setMetaData({
            props,
            state: {
                filterValue: filteredValue,
                expandedKeys: expandedKeys
            }
        });

        useHandleStyle(TreeBase.css.styles, isUnstyled, { name: 'tree' });

        const filterOptions = {
            filter: (e) => onFilterInputChange(e),
            reset: () => resetFilter()
        };

        const getRootNode = () => {
            return props.filter && filteredNodes.current ? filteredNodes.current : props.value;
        };

        const onToggle = (event) => {
            const { originalEvent, value, navigateFocusToChild } = event;

            if (props.onToggle) {
                props.onToggle({ originalEvent, value });
            } else {
                if (navigateFocusToChild) {
                    childFocusEvent.current = originalEvent;
                }

                setExpandedKeysState(value);
            }
        };

        useUpdateEffect(() => {
            if (childFocusEvent.current) {
                const event = childFocusEvent.current;
                const nodeElement = event.target.getAttribute('data-pc-section') === 'toggler' ? event.target.closest('[role="treeitem"]') : event.target;
                const listElement = nodeElement.children[1];
                const childElement = listElement.children[0];

                nodeElement.tabIndex = '-1';
                childElement.tabIndex = '0';
                childElement.focus();

                childFocusEvent.current = null;
            }
        }, [expandedKeys]);

        const onDragStart = (event) => {
            dragState.current = {
                path: event.path,
                index: event.index
            };
        };

        const onDragEnd = () => {
            dragState.current = null;
        };

        /**
         * Deep copy a value. If the value has a data property, it will be shallow copied.
         * Values that are not plain objects or arrays are returned as-is.
         */
        const cloneValue = (value) => {
            if (Array.isArray(value)) {
                return value.map(cloneValue);
            } else if (!!value && Object.getPrototypeOf(value) === Object.prototype) {
                const result = {};

                // Leave data property alone and clone children
                for (let key in value) {
                    if (key !== 'data') {
                        result[key] = cloneValue(value[key]);
                    } else {
                        result[key] = value[key];
                    }
                }

                return result;
            } else return value;
        };

        const onDrop = (event) => {
            if (validateDropNode(dragState.current.path, event.path)) {
                const value = cloneValue(props.value);
                let dragPaths = dragState.current.path.split('-');

                dragPaths.pop();

                let dragNodeParent = findNode(value, dragPaths);
                let dragNode = dragNodeParent ? dragNodeParent.children[dragState.current.index] : value[dragState.current.index];
                let dropNode = findNode(value, event.path.split('-'));

                if (dropNode.children) dropNode.children.push(dragNode);
                else dropNode.children = [dragNode];

                if (dragNodeParent) dragNodeParent.children.splice(dragState.current.index, 1);
                else value.splice(dragState.current.index, 1);

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
        };

        const onDropPoint = (event) => {
            if (validateDropPoint(event)) {
                const value = cloneValue(props.value);
                let dragPaths = dragState.current.path.split('-');

                dragPaths.pop();

                let dropPaths = event.path.split('-');

                dropPaths.pop();

                let dragNodeParent = findNode(value, dragPaths);
                let dropNodeParent = findNode(value, dropPaths);
                let dragNode = dragNodeParent ? dragNodeParent.children[dragState.current.index] : value[dragState.current.index];
                let siblings = areSiblings(dragState.current.path, event.path);

                if (dragNodeParent) dragNodeParent.children.splice(dragState.current.index, 1);
                else value.splice(dragState.current.index, 1);

                if (event.position < 0) {
                    let dropIndex = siblings ? (dragState.current.index > event.index ? event.index : event.index - 1) : event.index;

                    if (dropNodeParent) dropNodeParent.children.splice(dropIndex, 0, dragNode);
                    else value.splice(dropIndex, 0, dragNode);
                } else {
                    if (dropNodeParent) dropNodeParent.children.push(dragNode);
                    else value.push(dragNode);
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
        };

        const validateDrop = (dragPath, dropPath) => {
            if (!dragPath) {
                return false;
            } else {
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
        };

        const validateDropNode = (dragPath, dropPath) => {
            let _validateDrop = validateDrop(dragPath, dropPath);

            if (_validateDrop) {
                //child dropped on parent
                if (dragPath.indexOf('-') > 0 && dragPath.substring(0, dragPath.lastIndexOf('-')) === dropPath) {
                    return false;
                }

                return true;
            } else {
                return false;
            }
        };

        const validateDropPoint = (event) => {
            let _validateDrop = validateDrop(dragState.current.path, event.path);

            if (_validateDrop) {
                //child dropped to next sibling's drop point
                if (event.position === -1 && areSiblings(dragState.current.path, event.path) && dragState.current.index + 1 === event.index) {
                    return false;
                }

                return true;
            } else {
                return false;
            }
        };

        const areSiblings = (path1, path2) => {
            if (path1.length === 1 && path2.length === 1) return true;
            else return path1.substring(0, path1.lastIndexOf('-')) === path2.substring(0, path2.lastIndexOf('-'));
        };

        const findNode = (value, path) => {
            if (path.length === 0) {
                return null;
            } else {
                const index = parseInt(path[0], 10);
                const nextSearchRoot = value.children ? value.children[index] : value[index];

                if (path.length === 1) {
                    return nextSearchRoot;
                } else {
                    path.shift();

                    return findNode(nextSearchRoot, path);
                }
            }
        };

        const isNodeLeaf = (node) => {
            return node.leaf === false ? false : !(node.children && node.children.length);
        };

        const onFilterInputKeyDown = (event) => {
            //enter
            if (event.which === 13) {
                event.preventDefault();
            }
        };

        const onFilterInputChange = (event) => {
            filterChanged.current = true;
            const value = event.target.value;

            if (props.onFilterValueChange) {
                props.onFilterValueChange({
                    originalEvent: event,
                    value
                });
            } else {
                setFilterValueState(value);
            }
        };

        const filter = (value) => {
            setFilterValueState(ObjectUtils.isNotEmpty(value) ? value : '');
            _filter();
        };

        const childNodeFocus = (node) => {};

        const _filter = () => {
            if (!filterChanged.current) {
                return;
            }

            if (ObjectUtils.isEmpty(filteredValue)) {
                filteredNodes.current = props.value;
            } else {
                filteredNodes.current = [];
                const searchFields = props.filterBy.split(',');
                const filterText = filteredValue.toLocaleLowerCase(props.filterLocale);
                const isStrictMode = props.filterMode === 'strict';

                for (let node of props.value) {
                    let copyNode = { ...node };
                    let paramsWithoutNode = { searchFields, filterText, isStrictMode };

                    if (
                        (isStrictMode && (findFilteredNodes(copyNode, paramsWithoutNode) || isFilterMatched(copyNode, paramsWithoutNode))) ||
                        (!isStrictMode && (isFilterMatched(copyNode, paramsWithoutNode) || findFilteredNodes(copyNode, paramsWithoutNode)))
                    ) {
                        filteredNodes.current.push(copyNode);
                    }
                }
            }

            filterChanged.current = false;
        };

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
        };

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
        };

        const resetFilter = () => {
            setFilterValueState('');
        };

        React.useImperativeHandle(ref, () => ({
            props,
            filter,
            getElement: () => elementRef.current
        }));

        const createRootChild = (node, index, last) => {
            return (
                <UITreeNode
                    hostName="Tree"
                    key={node.key || node.label}
                    node={node}
                    level={props.level + 1}
                    originalOptions={props.value}
                    index={index}
                    last={last}
                    path={String(index)}
                    checkboxIcon={props.checkboxIcon}
                    collapseIcon={props.collapseIcon}
                    contextMenuSelectionKey={props.contextMenuSelectionKey}
                    cx={cx}
                    disabled={props.disabled}
                    dragdropScope={props.dragdropScope}
                    expandIcon={props.expandIcon}
                    expandedKeys={expandedKeys}
                    isNodeLeaf={isNodeLeaf}
                    metaKeySelection={props.metaKeySelection}
                    nodeTemplate={props.nodeTemplate}
                    onClick={props.onNodeClick}
                    onCollapse={props.onCollapse}
                    onContextMenu={props.onContextMenu}
                    onContextMenuSelectionChange={props.onContextMenuSelectionChange}
                    onDoubleClick={props.onNodeDoubleClick}
                    onDragEnd={onDragEnd}
                    onDragStart={onDragStart}
                    onDrop={onDrop}
                    onDropPoint={onDropPoint}
                    onExpand={props.onExpand}
                    onSelect={props.onSelect}
                    onSelectionChange={props.onSelectionChange}
                    onToggle={onToggle}
                    onUnselect={props.onUnselect}
                    propagateSelectionDown={props.propagateSelectionDown}
                    propagateSelectionUp={props.propagateSelectionUp}
                    ptm={ptm}
                    selectionKeys={props.selectionKeys}
                    selectionMode={props.selectionMode}
                    togglerTemplate={props.togglerTemplate}
                />
            );
        };

        const createEmptyMessageNode = () => {
            const emptyMessageProps = mergeProps(
                {
                    className: classNames(props.contentClassName, cx('emptyMessage')),
                    role: 'treeitem'
                },
                ptm('emptyMessage')
            );

            const message = ObjectUtils.getJSXElement(props.emptyMessage, props) || localeOption('emptyMessage');

            return (
                <li {...emptyMessageProps}>
                    <span className="p-treenode-content">{message}</span>
                </li>
            );
        };

        const createRootChildrenContainer = (children) => {
            const containerProps = mergeProps(
                {
                    className: classNames(props.contentClassName, cx('container')),
                    role: 'tree',
                    'aria-label': props.ariaLabel,
                    'aria-labelledby': props.ariaLabelledBy,
                    style: props.contentStyle,
                    ...ariaProps
                },
                ptm('container')
            );

            return <ul {...containerProps}>{children}</ul>;
        };

        const createRootChildren = (value) => {
            return value.map((node, index) => createRootChild(node, index, index === value.length - 1));
        };

        const createModel = () => {
            if (props.value) {
                if (props.filter) {
                    filterChanged.current = true;
                    _filter();
                }

                const value = getRootNode();

                if (value.length > 0) {
                    const rootNodes = createRootChildren(value);

                    return createRootChildrenContainer(rootNodes);
                } else {
                    const emptyMessageNode = createEmptyMessageNode();

                    return createRootChildrenContainer(emptyMessageNode);
                }
            }

            return null;
        };

        const createLoader = () => {
            if (props.loading) {
                const loadingIconProps = mergeProps(
                    {
                        className: cx('loadingIcon')
                    },
                    ptm('loadingIcon')
                );
                const icon = props.loadingIcon || <SpinnerIcon {...loadingIconProps} spin />;
                const loadingIcon = IconUtils.getJSXIcon(icon, { ...loadingIconProps }, { props });

                const loadingOverlayProps = mergeProps(
                    {
                        className: cx('loadingOverlay')
                    },
                    ptm('loadingOverlay')
                );

                return <div {...loadingOverlayProps}>{loadingIcon}</div>;
            }

            return null;
        };

        const createFilter = () => {
            if (props.filter) {
                const value = ObjectUtils.isNotEmpty(filteredValue) ? filteredValue : '';
                const searchIconProps = mergeProps(
                    {
                        className: cx('searchIcon')
                    },
                    ptm('searchIcon')
                );
                const icon = props.filterIcon || <SearchIcon {...searchIconProps} />;
                const filterIcon = IconUtils.getJSXIcon(icon, { ...searchIconProps }, { props });

                const filterContainerProps = mergeProps(
                    {
                        className: cx('filterContainer')
                    },
                    ptm('filterContainer')
                );

                const inputProps = mergeProps(
                    {
                        type: 'text',
                        value: value,
                        autoComplete: 'off',
                        className: cx('input'),
                        placeholder: props.filterPlaceholder,
                        'aria-label': props.filterPlaceholder,
                        onKeyDown: onFilterInputKeyDown,
                        onChange: onFilterInputChange,
                        disabled: props.disabled
                    },
                    ptm('input')
                );

                let content = (
                    <div {...filterContainerProps}>
                        <input {...inputProps} />
                        {filterIcon}
                    </div>
                );

                if (props.filterTemplate) {
                    const defaultContentOptions = {
                        className: 'p-tree-filter-container',
                        element: content,
                        filterOptions: filterOptions,
                        filterInputKeyDown: onFilterInputKeyDown,
                        filterInputChange: onFilterInputChange,
                        filterIconClassName: 'p-dropdown-filter-icon',
                        props
                    };

                    content = ObjectUtils.getJSXElement(props.filterTemplate, defaultContentOptions);
                }

                return <>{content}</>;
            }

            return null;
        };

        const createHeader = () => {
            if (props.showHeader) {
                const filterElement = createFilter();
                let content = filterElement;

                if (props.header) {
                    const defaultContentOptions = {
                        filterContainerClassName: 'p-tree-filter-container',
                        filterIconClassName: 'p-tree-filter-icon',
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

                const headerProps = mergeProps(
                    {
                        className: cx('header')
                    },
                    ptm('header')
                );

                return <div {...headerProps}>{content}</div>;
            }

            return null;
        };

        const createFooter = () => {
            const content = ObjectUtils.getJSXElement(props.footer, props);

            const footerProps = mergeProps(
                {
                    className: cx('footer')
                },
                ptm('footer')
            );

            return <div {...footerProps}>{content}</div>;
        };

        const otherProps = TreeBase.getOtherProps(props);
        const ariaProps = ObjectUtils.reduceKeys(otherProps, DomHandler.ARIA_PROPS);
        const loader = createLoader();
        const content = createModel();
        const header = createHeader();
        const footer = createFooter();

        const rootProps = mergeProps(
            {
                ref: elementRef,
                className: classNames(props.className, cx('root')),
                style: props.style,
                id: props.id
            },
            TreeBase.getOtherProps(props),
            ptm('root')
        );

        return (
            <div {...rootProps}>
                {loader}
                {header}
                {content}
                {footer}
            </div>
        );
    })
);

Tree.displayName = 'Tree';
