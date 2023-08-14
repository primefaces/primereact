import * as React from 'react';
import { ariaLabel } from '../api/Api';
import { CheckIcon } from '../icons/check';
import { ChevronDownIcon } from '../icons/chevrondown';
import { ChevronRightIcon } from '../icons/chevronright';
import { MinusIcon } from '../icons/minus';
import { Ripple } from '../ripple/Ripple';
import { classNames, DomHandler, IconUtils, mergeProps, ObjectUtils } from '../utils/Utils';

export const UITreeNode = React.memo((props) => {
    const contentRef = React.useRef(null);
    const nodeTouched = React.useRef(false);
    const isLeaf = props.isNodeLeaf(props.node);
    const expanded = (props.expandedKeys ? props.expandedKeys[props.node.key] !== undefined : false) || props.node.expanded;

    const getPTOptions = (key) => {
        return props.ptm(key, {
            context: {
                selected: props.selected,
                expanded: expanded,
                checked: props.checked
            }
        });
    };

    const expand = (event) => {
        let expandedKeys = props.expandedKeys ? { ...props.expandedKeys } : {};

        expandedKeys[props.node.key] = true;

        props.onToggle({
            originalEvent: event,
            value: expandedKeys
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

        expanded ? collapse(event) : expand(event);

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

    const onNodeKeyDown = (event) => {
        if (props.disabled) {
            return;
        }

        const nodeElement = event.target.parentElement;

        if (!DomHandler.hasClass(nodeElement, 'p-treenode')) {
            return;
        }

        switch (event.which) {
            //down arrow
            case 40:
                const listElement = nodeElement.children[1];

                if (listElement) {
                    focusNode(listElement.children[0]);
                } else {
                    let nextNodeElement = nodeElement.nextElementSibling;

                    while (nextNodeElement) {
                        if (!DomHandler.hasClass(nextNodeElement, 'p-treenode-droppoint')) {
                            break;
                        }

                        nextNodeElement = nextNodeElement.nextElementSibling;
                    }

                    if (nextNodeElement) {
                        focusNode(nextNodeElement);
                    } else {
                        const nextSiblingAncestor = findNextSiblingOfAncestor(nodeElement);

                        nextSiblingAncestor && focusNode(nextSiblingAncestor);
                    }
                }

                event.preventDefault();
                break;

            //up arrow
            case 38:
                if (nodeElement.previousElementSibling) {
                    focusNode(findLastVisibleDescendant(nodeElement.previousElementSibling));
                } else {
                    const parentNodeElement = getParentNodeElement(nodeElement);

                    parentNodeElement && focusNode(parentNodeElement);
                }

                event.preventDefault();
                break;

            //right arrow
            case 39:
                if (!expanded) {
                    expand(event);
                }

                event.preventDefault();
                break;

            //left arrow
            case 37:
                if (expanded) {
                    collapse(event);
                }

                event.preventDefault();
                break;

            //enter
            case 13:
                onClick(event);
                event.preventDefault();
                break;

            default:
                //no op
                break;
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
        element && element.children[0] && element.children[0].focus();
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

    const propagateUp = (event) => {
        let check = event.check;
        let selectionKeys = event.selectionKeys;
        let checkedChildCount = 0;
        let childPartialSelected = false;

        for (let child of props.node.children) {
            if (selectionKeys[child.key] && selectionKeys[child.key].checked) checkedChildCount++;
            else if (selectionKeys[child.key] && selectionKeys[child.key].partialChecked) childPartialSelected = true;
        }

        if (check && checkedChildCount === props.node.children.length) {
            selectionKeys[props.node.key] = { checked: true, partialChecked: false };
        } else {
            if (!check) {
                delete selectionKeys[props.node.key];
            }

            if (childPartialSelected || (checkedChildCount > 0 && checkedChildCount !== props.node.children.length)) selectionKeys[props.node.key] = { checked: false, partialChecked: true };
            else delete selectionKeys[props.node.key];
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
        return props.selectionKeys ? props.selectionKeys[props.node.key] && props.selectionKeys[props.node.key].checked : false;
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
                className: 'p-treenode-label'
            },
            getPTOptions('label')
        );
        let content = <span {...labelProps}>{props.node.label}</span>;

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
            const className = classNames('p-checkbox-box', { 'p-highlight': checked, 'p-indeterminate': partialChecked, 'p-disabled': props.disabled });
            const iconClassName = 'p-checkbox-icon p-c';
            const checkboxIconProps = mergeProps(
                {
                    className: iconClassName
                },
                getPTOptions('checkboxIcon')
            );
            const icon = checked ? props.checkboxIcon || <CheckIcon {...checkboxIconProps} /> : partialChecked ? props.checkboxIcon || <MinusIcon {...checkboxIconProps} /> : null;
            const checkboxIcon = IconUtils.getJSXIcon(icon, { ...checkboxIconProps }, props);
            const checkboxContainerProps = mergeProps(
                {
                    className: 'p-checkbox p-component'
                },
                getPTOptions('checkboxContainer')
            );
            const checkboxProps = mergeProps(
                {
                    className: className,
                    role: 'checkbox',
                    'aria-checked': checked
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
            const className = classNames('p-treenode-icon', icon);
            const nodeIconProps = mergeProps(
                {
                    className
                },
                getPTOptions('nodeIcon')
            );

            return <span {...nodeIconProps}></span>;
        }

        return null;
    };

    const createToggler = () => {
        const label = expanded ? ariaLabel('collapseLabel') : ariaLabel('expandLabel');
        const iconProps = { className: 'p-tree-toggler-icon', 'aria-hidden': true };
        const togglerIconProps = mergeProps(
            {
                className: iconProps
            },
            getPTOptions('togglerIcon')
        );
        const icon = expanded ? props.collapseIcon || <ChevronDownIcon {...togglerIconProps} /> : props.expandIcon || <ChevronRightIcon {...togglerIconProps} />;
        const togglerIcon = IconUtils.getJSXIcon(icon, { ...togglerIconProps }, { props, expanded });
        const togglerProps = mergeProps(
            {
                type: 'button',
                className: 'p-tree-toggler p-link',
                tabIndex: -1,
                onClick: onTogglerClick,
                'aria-label': label
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
                    className: 'p-treenode-droppoint',
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
        const className = classNames('p-treenode-content', props.node.className, {
            'p-treenode-selectable': props.selectionMode && props.node.selectable !== false,
            'p-highlight': isCheckboxSelectionMode() ? checked : selected,
            'p-highlight-contextmenu': props.contextMenuSelectionKey && props.contextMenuSelectionKey === props.node.key,
            'p-disabled': props.disabled
        });
        const toggler = createToggler();
        const checkbox = createCheckbox();
        const icon = createIcon();
        const label = createLabel();
        const tabIndex = props.disabled ? undefined : 0;

        const contentProps = mergeProps(
            {
                ref: contentRef,
                className,
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
                tabIndex,
                onKeyDown: onNodeKeyDown,
                role: 'treeitem',
                'aria-posinset': props.index + 1,
                'aria-expanded': expanded,
                'aria-selected': checked || selected
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
                className: 'p-treenode-children',
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
                                parent={props.node}
                                index={index}
                                last={index === props.node.children.length - 1}
                                path={props.path + '-' + index}
                                disabled={props.disabled}
                                selectionMode={props.selectionMode}
                                selectionKeys={props.selectionKeys}
                                onSelectionChange={props.onSelectionChange}
                                metaKeySelection={props.metaKeySelection}
                                propagateSelectionDown={props.propagateSelectionDown}
                                propagateSelectionUp={props.propagateSelectionUp}
                                contextMenuSelectionKey={props.contextMenuSelectionKey}
                                onContextMenuSelectionChange={props.onContextMenuSelectionChange}
                                onContextMenu={props.onContextMenu}
                                onExpand={props.onExpand}
                                onCollapse={props.onCollapse}
                                onSelect={props.onSelect}
                                onUnselect={props.onUnselect}
                                onClick={props.onClick}
                                onDoubleClick={props.onDoubleClick}
                                expandedKeys={props.expandedKeys}
                                onToggle={props.onToggle}
                                onPropagateUp={propagateUp}
                                nodeTemplate={props.nodeTemplate}
                                togglerTemplate={props.togglerTemplate}
                                isNodeLeaf={props.isNodeLeaf}
                                dragdropScope={props.dragdropScope}
                                onDragStart={props.onDragStart}
                                onDragEnd={props.onDragEnd}
                                onDrop={props.onDrop}
                                onDropPoint={props.onDropPoint}
                                ptm={props.ptm}
                            />
                        );
                    })}
                </ul>
            );
        }

        return null;
    };

    const createNode = () => {
        const className = classNames(
            'p-treenode',
            {
                'p-treenode-leaf': isLeaf
            },
            props.node.className
        );
        const content = createContent();
        const children = createChildren();

        const nodeProps = mergeProps(
            {
                className,
                style: props.node.style
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
