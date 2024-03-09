import * as React from 'react';
import { useMergeProps } from '../hooks/Hooks';
import { CheckIcon } from '../icons/check';
import { ChevronDownIcon } from '../icons/chevrondown';
import { ChevronRightIcon } from '../icons/chevronright';
import { MinusIcon } from '../icons/minus';
import { Ripple } from '../ripple/Ripple';
import { classNames, DomHandler, IconUtils, ObjectUtils } from '../utils/Utils';

export const UITreeNode = React.memo((props) => {
    const contentRef = React.useRef(null);
    const elementRef = React.useRef(null);
    const nodeTouched = React.useRef(false);
    const mergeProps = useMergeProps();
    const isLeaf = props.isNodeLeaf(props.node);
    const label = props.node.label;
    const expanded = (props.expandedKeys ? props.expandedKeys[props.node.key] !== undefined : false) || props.node.expanded;
    const { ptm, cx } = props;

    const getPTOptions = (key) => {
        return ptm(key, {
            hostName: props.hostName,
            context: {
                selected: !isCheckboxSelectionMode() ? isSelected() : false,
                expanded: expanded || false,
                checked: isCheckboxSelectionMode() ? isChecked() : false,
                isLeaf
            }
        });
    };

    const expand = (event, navigateFocusToChild = false) => {
        let expandedKeys = props.expandedKeys ? { ...props.expandedKeys } : {};

        expandedKeys[props.node.key] = true;

        props.onToggle({
            originalEvent: event,
            value: expandedKeys,
            navigateFocusToChild
        });

        invokeToggleEvents(event, true);
    };

    const collapse = (event) => {
        let expandedKeys = { ...props.expandedKeys };

        delete expandedKeys[props.node.key];

        props.onToggle({
            originalEvent: event,
            value: expandedKeys
        });

        invokeToggleEvents(event, false);
    };

    const onTogglerClick = (event) => {
        if (props.disabled) {
            return;
        }

        expanded ? collapse(event) : expand(event, false);

        event.preventDefault();
        event.stopPropagation();
    };

    const invokeToggleEvents = (event, isExpanded) => {
        if (isExpanded) {
            if (props.onExpand) {
                props.onExpand({
                    originalEvent: event,
                    node: props.node
                });
            }
        } else {
            if (props.onCollapse) {
                props.onCollapse({
                    originalEvent: event,
                    node: props.node
                });
            }
        }
    };

    const findNextSiblingOfAncestor = (nodeElement) => {
        const parentNodeElement = getParentNodeElement(nodeElement);

        return parentNodeElement ? parentNodeElement.nextElementSibling || findNextSiblingOfAncestor(parentNodeElement) : null;
    };

    const findLastVisibleDescendant = (nodeElement) => {
        const childrenListElement = nodeElement.children[1];

        if (childrenListElement) {
            const lastChildElement = childrenListElement.children[childrenListElement.children.length - 1];

            return findLastVisibleDescendant(lastChildElement);
        } else {
            return nodeElement;
        }
    };

    const getParentNodeElement = (nodeElement) => {
        const parentNodeElement = nodeElement.parentElement.parentElement;

        return DomHandler.hasClass(parentNodeElement, 'p-treenode') ? parentNodeElement : null;
    };

    const focusNode = (element) => {
        element && element.focus();
    };

    const onClick = (event) => {
        if (props.onClick) {
            props.onClick({
                originalEvent: event,
                node: props.node
            });
        }

        const targetNode = event.target.nodeName;

        if (props.disabled || targetNode === 'INPUT' || targetNode === 'BUTTON' || targetNode === 'A' || DomHandler.hasClass(event.target, 'p-clickable')) {
            return;
        }

        if (props.selectionMode && props.node.selectable !== false) {
            let selectionKeys;

            if (isCheckboxSelectionMode()) {
                const checked = isChecked();

                selectionKeys = props.selectionKeys ? { ...props.selectionKeys } : {};

                if (checked) {
                    if (props.propagateSelectionDown) propagateDown(props.node, false, selectionKeys);
                    else delete selectionKeys[props.node.key];

                    if (props.propagateSelectionUp && props.onPropagateUp) {
                        props.onPropagateUp({
                            originalEvent: event,
                            check: false,
                            selectionKeys: selectionKeys
                        });
                    }

                    if (props.onUnselect) {
                        props.onUnselect({
                            originalEvent: event,
                            node: props.node
                        });
                    }
                } else {
                    if (props.propagateSelectionDown) propagateDown(props.node, true, selectionKeys);
                    else selectionKeys[props.node.key] = { checked: true };

                    if (props.propagateSelectionUp && props.onPropagateUp) {
                        props.onPropagateUp({
                            originalEvent: event,
                            check: true,
                            selectionKeys: selectionKeys
                        });
                    }

                    if (props.onSelect) {
                        props.onSelect({
                            originalEvent: event,
                            node: props.node
                        });
                    }
                }
            } else {
                const selected = isSelected();
                const metaSelection = nodeTouched.current ? false : props.metaKeySelection;

                if (metaSelection) {
                    let metaKey = event.metaKey || event.ctrlKey;

                    if (selected && metaKey) {
                        if (isSingleSelectionMode()) {
                            selectionKeys = null;
                        } else {
                            selectionKeys = { ...props.selectionKeys };
                            delete selectionKeys[props.node.key];
                        }

                        if (props.onUnselect) {
                            props.onUnselect({
                                originalEvent: event,
                                node: props.node
                            });
                        }
                    } else {
                        if (isSingleSelectionMode()) {
                            selectionKeys = props.node.key;
                        } else if (isMultipleSelectionMode()) {
                            selectionKeys = !metaKey ? {} : props.selectionKeys ? { ...props.selectionKeys } : {};
                            selectionKeys[props.node.key] = true;
                        }

                        if (props.onSelect) {
                            props.onSelect({
                                originalEvent: event,
                                node: props.node
                            });
                        }
                    }
                } else {
                    if (isSingleSelectionMode()) {
                        if (selected) {
                            selectionKeys = null;

                            if (props.onUnselect) {
                                props.onUnselect({
                                    originalEvent: event,
                                    node: props.node
                                });
                            }
                        } else {
                            selectionKeys = props.node.key;

                            if (props.onSelect) {
                                props.onSelect({
                                    originalEvent: event,
                                    node: props.node
                                });
                            }
                        }
                    } else {
                        if (selected) {
                            selectionKeys = { ...props.selectionKeys };
                            delete selectionKeys[props.node.key];

                            if (props.onUnselect) {
                                props.onUnselect({
                                    originalEvent: event,
                                    node: props.node
                                });
                            }
                        } else {
                            selectionKeys = props.selectionKeys ? { ...props.selectionKeys } : {};
                            selectionKeys[props.node.key] = true;

                            if (props.onSelect) {
                                props.onSelect({
                                    originalEvent: event,
                                    node: props.node
                                });
                            }
                        }
                    }
                }
            }

            if (props.onSelectionChange) {
                props.onSelectionChange({
                    originalEvent: event,
                    value: selectionKeys
                });
            }
        }

        nodeTouched.current = false;
    };

    const onDoubleClick = (event) => {
        if (props.onDoubleClick) {
            props.onDoubleClick({
                originalEvent: event,
                node: props.node
            });
        }
    };

    const onRightClick = (event) => {
        if (props.disabled) {
            return;
        }

        DomHandler.clearSelection();

        if (props.onContextMenuSelectionChange) {
            props.onContextMenuSelectionChange({
                originalEvent: event,
                value: props.node.key
            });
        }

        if (props.onContextMenu) {
            props.onContextMenu({
                originalEvent: event,
                node: props.node
            });
        }
    };

    const onKeyDown = (event) => {
        if (!isSameNode(event)) return;

        switch (event.code) {
            case 'Tab':
                onTabKey(event);

                break;

            case 'ArrowDown':
                onArrowDown(event);

                break;

            case 'ArrowUp':
                onArrowUp(event);

                break;

            case 'ArrowRight':
                onArrowRight(event);

                break;

            case 'ArrowLeft':
                onArrowLeft(event);

                break;

            case 'Enter':
            case 'NumpadEnter':
            case 'Space':
                onEnterKey(event);

                break;

            default:
                break;
        }
    };

    const onArrowDown = (event) => {
        const nodeElement = event.target.getAttribute('data-pc-section') === 'toggler' ? event.target.closest('[role="treeitem"]') : event.target;
        const listElement = nodeElement.children[1];

        if (listElement) {
            focusRowChange(nodeElement, listElement.children[0]);
        } else {
            if (nodeElement.nextElementSibling) {
                focusRowChange(nodeElement, nodeElement.nextElementSibling);
            } else {
                let nextSiblingAncestor = findNextSiblingOfAncestor(nodeElement);

                if (nextSiblingAncestor) {
                    focusRowChange(nodeElement, nextSiblingAncestor);
                }
            }
        }

        event.preventDefault();
    };

    const onArrowUp = (event) => {
        const nodeElement = event.target;

        if (nodeElement.previousElementSibling) {
            focusRowChange(nodeElement, nodeElement.previousElementSibling, findLastVisibleDescendant(nodeElement.previousElementSibling));
        } else {
            let parentNodeElement = getParentNodeElement(nodeElement);

            if (parentNodeElement) {
                focusRowChange(nodeElement, parentNodeElement);
            }
        }

        event.preventDefault();
    };

    const onArrowRight = (event) => {
        if (isLeaf || expanded) return;

        event.currentTarget.tabIndex = -1;

        expand(event, true);
    };

    const onArrowLeft = (event) => {
        const togglerElement = DomHandler.findSingle(event.currentTarget, '[data-pc-section="toggler"]');

        if (props.level === 0 && !expanded) {
            return false;
        }

        if (expanded && !isLeaf) {
            togglerElement.click();

            return false;
        }

        const target = findBeforeClickableNode(event.currentTarget);

        if (target) {
            focusRowChange(event.currentTarget, target);
        }
    };

    const onEnterKey = (event) => {
        setTabIndexForSelectionMode(event, nodeTouched.current);
        onClick(event);

        event.preventDefault();
    };

    const onTabKey = () => {
        setAllNodesTabIndexes();
    };

    const setAllNodesTabIndexes = () => {
        const nodes = DomHandler.find(contentRef.current.closest('[data-pc-section="container"]'), '[role="treeitem"]');

        const hasSelectedNode = [...nodes].some((node) => node.getAttribute('aria-selected') === 'true' || node.getAttribute('aria-checked') === 'true');

        [...nodes].forEach((node) => {
            node.tabIndex = -1;
        });

        if (hasSelectedNode) {
            const selectedNodes = [...nodes].filter((node) => node.getAttribute('aria-selected') === 'true' || node.getAttribute('aria-checked') === 'true');

            selectedNodes[0].tabIndex = 0;

            return;
        }

        [...nodes][0].tabIndex = 0;
    };

    const setTabIndexForSelectionMode = (event, nodeTouched) => {
        if (props.selectionMode !== null) {
            const elements = [...DomHandler.find(elementRef.current.parentElement, '[role="treeitem"]')];

            event.currentTarget.tabIndex = nodeTouched === false ? -1 : 0;

            if (elements.every((element) => element.tabIndex === -1)) {
                elements[0].tabIndex = 0;
            }
        }
    };

    const focusRowChange = (firstFocusableRow, currentFocusedRow, lastVisibleDescendant) => {
        firstFocusableRow.tabIndex = '-1';
        currentFocusedRow.tabIndex = '0';

        focusNode(lastVisibleDescendant || currentFocusedRow);
    };

    const findBeforeClickableNode = (node) => {
        const parentListElement = node.closest('ul').closest('li');

        if (parentListElement) {
            const prevNodeButton = DomHandler.findSingle(parentListElement, 'button');

            if (prevNodeButton && prevNodeButton.style.visibility !== 'hidden') {
                return parentListElement;
            }

            return findBeforeClickableNode(node.previousElementSibling);
        }

        return null;
    };

    const propagateUp = (event) => {
        let check = event.check;
        let selectionKeys = event.selectionKeys;
        let checkedChildCount = 0;

        for (let child of props.node.children) {
            if (selectionKeys[child.key] && selectionKeys[child.key].checked) checkedChildCount++;
        }

        const parentKey = props.node.key;
        const children = ObjectUtils.findChildrenByKey(props.originalOptions, parentKey);

        let isParentPartiallyChecked = children.some((ele) => ele.key in selectionKeys);
        let isCompletelyChecked = children.every((ele) => ele.key in selectionKeys && selectionKeys[ele.key].checked);

        if (isParentPartiallyChecked && !isCompletelyChecked) {
            selectionKeys[parentKey] = { checked: false, partialChecked: true };
        } else if (isCompletelyChecked) {
            selectionKeys[parentKey] = { checked: true, partialChecked: false };
        } else if (check) {
            selectionKeys[parentKey] = { checked: false, partialChecked: false };
        } else {
            delete selectionKeys[parentKey];
        }

        if (props.propagateSelectionUp && props.onPropagateUp) {
            props.onPropagateUp(event);
        }
    };

    const propagateDown = (node, check, selectionKeys) => {
        if (check) selectionKeys[node.key] = { checked: true, partialChecked: false };
        else delete selectionKeys[node.key];

        if (node.children && node.children.length) {
            for (let i = 0; i < node.children.length; i++) {
                propagateDown(node.children[i], check, selectionKeys);
            }
        }
    };

    const isSelected = () => {
        if (props.selectionMode && props.selectionKeys) return isSingleSelectionMode() ? props.selectionKeys === props.node.key : props.selectionKeys[props.node.key] !== undefined;
        else return false;
    };

    const isChecked = () => {
        return (props.selectionKeys ? props.selectionKeys[props.node.key] && props.selectionKeys[props.node.key].checked : false) || false;
    };

    const isSameNode = (event) => {
        return event.currentTarget && (event.currentTarget.isSameNode(event.target) || event.currentTarget.isSameNode(event.target.closest('[role="treeitem"]')));
    };

    const isPartialChecked = () => {
        return props.selectionKeys ? props.selectionKeys[props.node.key] && props.selectionKeys[props.node.key].partialChecked : false;
    };

    const isSingleSelectionMode = () => {
        return props.selectionMode && props.selectionMode === 'single';
    };

    const isMultipleSelectionMode = () => {
        return props.selectionMode && props.selectionMode === 'multiple';
    };

    const isCheckboxSelectionMode = () => {
        return props.selectionMode && props.selectionMode === 'checkbox';
    };

    const onTouchEnd = () => {
        nodeTouched.current = true;
    };

    const onDropPoint = (event, position) => {
        event.preventDefault();

        if (props.node.droppable !== false) {
            DomHandler.removeClass(event.target, 'p-treenode-droppoint-active');

            if (props.onDropPoint) {
                const dropIndex = position === -1 ? props.index : props.index + 1;

                props.onDropPoint({
                    originalEvent: event,
                    path: props.path,
                    index: dropIndex,
                    position
                });
            }
        }
    };

    const onDropPointDragOver = (event) => {
        if (event.dataTransfer.types[1] === props.dragdropScope.toLocaleLowerCase()) {
            event.dataTransfer.dropEffect = 'move';
            event.preventDefault();
        }
    };

    const onDropPointDragEnter = (event) => {
        if (event.dataTransfer.types[1] === props.dragdropScope.toLocaleLowerCase()) {
            DomHandler.addClass(event.target, 'p-treenode-droppoint-active');
        }
    };

    const onDropPointDragLeave = (event) => {
        if (event.dataTransfer.types[1] === props.dragdropScope.toLocaleLowerCase()) {
            DomHandler.removeClass(event.target, 'p-treenode-droppoint-active');
        }
    };

    const onDrop = (event) => {
        if (props.dragdropScope && props.node.droppable !== false) {
            DomHandler.removeClass(contentRef.current, 'p-treenode-dragover');
            event.preventDefault();
            event.stopPropagation();

            if (props.onDrop) {
                props.onDrop({
                    originalEvent: event,
                    path: props.path,
                    index: props.index
                });
            }
        }
    };

    const onDragOver = (event) => {
        if (event.dataTransfer.types[1] === props.dragdropScope.toLocaleLowerCase() && props.node.droppable !== false) {
            event.dataTransfer.dropEffect = 'move';
            event.preventDefault();
            event.stopPropagation();
        }
    };

    const onDragEnter = (event) => {
        if (event.dataTransfer.types[1] === props.dragdropScope.toLocaleLowerCase() && props.node.droppable !== false) {
            DomHandler.addClass(contentRef.current, 'p-treenode-dragover');
        }
    };

    const onDragLeave = (event) => {
        if (event.dataTransfer.types[1] === props.dragdropScope.toLocaleLowerCase() && props.node.droppable !== false) {
            let rect = event.currentTarget.getBoundingClientRect();

            if (event.nativeEvent.x > rect.left + rect.width || event.nativeEvent.x < rect.left || event.nativeEvent.y >= Math.floor(rect.top + rect.height) || event.nativeEvent.y < rect.top) {
                DomHandler.removeClass(contentRef.current, 'p-treenode-dragover');
            }
        }
    };

    const onDragStart = (event) => {
        event.dataTransfer.setData('text', props.dragdropScope);
        event.dataTransfer.setData(props.dragdropScope, props.dragdropScope);

        if (props.onDragStart) {
            props.onDragStart({
                originalEvent: event,
                path: props.path,
                index: props.index
            });
        }
    };

    const onDragEnd = (event) => {
        if (props.onDragEnd) {
            props.onDragEnd({
                originalEvent: event
            });
        }
    };

    const createLabel = () => {
        const labelProps = mergeProps(
            {
                className: cx('label')
            },
            getPTOptions('label')
        );
        let content = <span {...labelProps}>{label}</span>;

        if (props.nodeTemplate) {
            const defaultContentOptions = {
                onTogglerClick: onTogglerClick,
                className: 'p-treenode-label',
                element: content,
                props,
                expanded
            };

            content = ObjectUtils.getJSXElement(props.nodeTemplate, props.node, defaultContentOptions);
        }

        return content;
    };

    const createCheckbox = () => {
        if (isCheckboxSelectionMode() && props.node.selectable !== false) {
            const checked = isChecked();
            const partialChecked = isPartialChecked();
            const checkboxIconProps = mergeProps(
                {
                    className: cx('checkboxIcon')
                },
                getPTOptions('checkboxIcon')
            );
            const icon = checked ? props.checkboxIcon || <CheckIcon {...checkboxIconProps} /> : partialChecked ? props.checkboxIcon || <MinusIcon {...checkboxIconProps} /> : null;
            const checkboxIcon = IconUtils.getJSXIcon(icon, { ...checkboxIconProps }, props);
            const checkboxContainerProps = mergeProps(
                {
                    'aria-hidden': true,
                    className: cx('checkboxContainer')
                },
                getPTOptions('checkboxContainer')
            );
            const checkboxProps = mergeProps(
                {
                    className: cx('checkbox', { checked, partialChecked, nodeProps: props }),
                    role: 'checkbox'
                },
                getPTOptions('checkbox')
            );

            return (
                <div {...checkboxContainerProps}>
                    <div {...checkboxProps}>{checkboxIcon}</div>
                </div>
            );
        }

        return null;
    };

    const createIcon = () => {
        const icon = props.node.icon || (expanded ? props.node.expandedIcon : props.node.collapsedIcon);

        if (icon) {
            const nodeIconProps = mergeProps(
                {
                    className: classNames(icon, cx('nodeIcon'))
                },
                getPTOptions('nodeIcon')
            );

            return <span {...nodeIconProps}></span>;
        }

        return null;
    };

    const createToggler = () => {
        const togglerIconProps = mergeProps(
            {
                className: cx('togglerIcon'),
                'aria-hidden': true
            },
            getPTOptions('togglerIcon')
        );
        const icon = expanded ? props.collapseIcon || <ChevronDownIcon {...togglerIconProps} /> : props.expandIcon || <ChevronRightIcon {...togglerIconProps} />;
        const togglerIcon = IconUtils.getJSXIcon(icon, { ...togglerIconProps }, { props, expanded });
        const togglerProps = mergeProps(
            {
                type: 'button',
                className: cx('toggler'),
                tabIndex: -1,
                'aria-hidden': true,
                onClick: onTogglerClick
            },
            getPTOptions('toggler')
        );
        let content = (
            <button {...togglerProps}>
                {togglerIcon}
                <Ripple />
            </button>
        );

        if (props.togglerTemplate) {
            const defaultContentOptions = {
                onClick: onTogglerClick,
                containerClassName: 'p-tree-toggler p-link',
                iconClassName: 'p-tree-toggler-icon',
                element: content,
                props,
                expanded
            };

            content = ObjectUtils.getJSXElement(props.togglerTemplate, props.node, defaultContentOptions);
        }

        return content;
    };

    const createDropPoint = (position) => {
        if (props.dragdropScope) {
            const droppointProps = mergeProps(
                {
                    className: cx('droppoint'),
                    role: 'treeitem',
                    onDrop: (event) => onDropPoint(event, position),
                    onDragOver: onDropPointDragOver,
                    onDragEnter: onDropPointDragEnter,
                    onDragLeave: onDropPointDragLeave
                },
                getPTOptions('droppoint')
            );

            return <li {...droppointProps}></li>;
        }

        return null;
    };

    const createContent = () => {
        const selected = isSelected();
        const checked = isChecked();
        const toggler = createToggler();
        const checkbox = createCheckbox();
        const icon = createIcon();
        const label = createLabel();

        const contentProps = mergeProps(
            {
                ref: contentRef,
                className: classNames(props.node.className, cx('content', { checked, selected, nodeProps: props, isCheckboxSelectionMode })),
                style: props.node.style,
                onClick: onClick,
                onDoubleClick: onDoubleClick,
                onContextMenu: onRightClick,
                onTouchEnd: onTouchEnd,
                draggable: props.dragdropScope && props.node.draggable !== false && !props.disabled,
                onDrop: onDrop,
                onDragOver: onDragOver,
                onDragEnter: onDragEnter,
                onDragLeave: onDragLeave,
                onDragStart: onDragStart,
                onDragEnd: onDragEnd,
                'data-p-highlight': isCheckboxSelectionMode() ? checked : selected
            },
            getPTOptions('content')
        );

        return (
            <div {...contentProps}>
                {toggler}
                {checkbox}
                {icon}
                {label}
            </div>
        );
    };

    const createChildren = () => {
        const subgroupProps = mergeProps(
            {
                className: cx('subgroup'),
                role: 'group'
            },
            getPTOptions('subgroup')
        );

        if (ObjectUtils.isNotEmpty(props.node.children) && expanded) {
            return (
                <ul {...subgroupProps}>
                    {props.node.children.map((childNode, index) => {
                        return (
                            <UITreeNode
                                key={childNode.key || childNode.label}
                                node={childNode}
                                checkboxIcon={props.checkboxIcon}
                                collapseIcon={props.collapseIcon}
                                contextMenuSelectionKey={props.contextMenuSelectionKey}
                                cx={cx}
                                disabled={props.disabled}
                                dragdropScope={props.dragdropScope}
                                expandIcon={props.expandIcon}
                                expandedKeys={props.expandedKeys}
                                index={index}
                                isNodeLeaf={props.isNodeLeaf}
                                last={index === props.node.children.length - 1}
                                metaKeySelection={props.metaKeySelection}
                                nodeTemplate={props.nodeTemplate}
                                onClick={props.onClick}
                                onCollapse={props.onCollapse}
                                onContextMenu={props.onContextMenu}
                                onContextMenuSelectionChange={props.onContextMenuSelectionChange}
                                onDoubleClick={props.onDoubleClick}
                                onDragEnd={props.onDragEnd}
                                onDragStart={props.onDragStart}
                                onDrop={props.onDrop}
                                onDropPoint={props.onDropPoint}
                                onExpand={props.onExpand}
                                onPropagateUp={propagateUp}
                                onSelect={props.onSelect}
                                onSelectionChange={props.onSelectionChange}
                                onToggle={props.onToggle}
                                onUnselect={props.onUnselect}
                                originalOptions={props.originalOptions}
                                parent={props.node}
                                path={props.path + '-' + index}
                                propagateSelectionDown={props.propagateSelectionDown}
                                propagateSelectionUp={props.propagateSelectionUp}
                                ptm={ptm}
                                selectionKeys={props.selectionKeys}
                                selectionMode={props.selectionMode}
                                togglerTemplate={props.togglerTemplate}
                            />
                        );
                    })}
                </ul>
            );
        }

        return null;
    };

    const createNode = () => {
        const tabIndex = props.disabled || props.index !== 0 ? -1 : 0;
        const selected = isSelected();
        const checked = isChecked();

        const content = createContent();
        const children = createChildren();

        const nodeProps = mergeProps(
            {
                ref: elementRef,
                className: classNames(props.node.className, cx('node', { isLeaf })),
                style: props.node.style,
                tabIndex,
                role: 'treeitem',
                'aria-label': label,
                'aria-level': props.level,
                'aria-expanded': expanded,
                'aria-checked': checked,
                'aria-setsize': props.node.children ? props.node.children.length : 0,
                'aria-posinset': props.index + 1,
                onKeyDown: onKeyDown,
                'aria-expanded': expanded,
                'aria-selected': checked || selected
            },
            getPTOptions('node')
        );

        return (
            <li {...nodeProps}>
                {content}
                {children}
            </li>
        );
    };

    const node = createNode();

    if (props.dragdropScope && !props.disabled) {
        const beforeDropPoint = createDropPoint(-1);
        const afterDropPoint = props.last ? createDropPoint(1) : null;

        return (
            <>
                {beforeDropPoint}
                {node}
                {afterDropPoint}
            </>
        );
    }

    return node;
});

UITreeNode.displayName = 'UITreeNode';
