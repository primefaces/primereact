import { withHeadless } from '@primereact/core/headless';
import { useControlledState } from '@primereact/hooks/use-controlled-state';
import type { TreeCheckboxSelectionKeys, TreeExpandedKeys, TreeNode, TreeSelectionKeys } from '@primereact/types/shared/tree';
import { find, findSingle, focus, getAttribute, isPrintableCharacter } from '@primeuix/utils';
import * as React from 'react';
import { defaultProps } from './useTree.props';

export const useTree = withHeadless({
    name: 'useTree',
    defaultProps,
    setup({ props, elementRef }) {
        const defaultExpandedKeyRef = React.useRef(props.defaultExpandedKeys ?? {});
        const [expandedKeyState, setExpandedKeyState] = useControlledState({
            value: props.expandedKeys,
            defaultValue: defaultExpandedKeyRef.current,
            onChange: props.onExpandedChange
        });

        const defaultSelectedKeyRef = React.useRef(props.defaultSelectionKeys ?? {});
        const [selectedKeyState, setSelectedKeyState] = useControlledState({
            value: props.selectionKeys,
            defaultValue: defaultSelectedKeyRef.current,
            onChange: props.onSelectionChange
        });

        const searchTimeout = React.useRef<NodeJS.Timeout | null>(null);
        const searchValue = React.useRef<string>('');

        const state = {
            expandedKey: expandedKeyState,
            selectedKey: selectedKeyState
        };

        const getNodes = () => {
            return props.value || [];
        };

        const onKeyDown = (event: React.KeyboardEvent, node: TreeNode, level: number, expanded: boolean, leaf: boolean) => {
            if (!isSameNode(event)) return;

            const metaKey = event.metaKey || event.ctrlKey;

            switch (event.code) {
                case 'Tab':
                    onTabKey();

                    break;

                case 'ArrowDown':
                    onArrowDown(event);

                    break;

                case 'ArrowUp':
                    onArrowUp(event);

                    break;

                case 'ArrowRight':
                    onArrowRight(event, node, expanded, leaf);

                    break;

                case 'ArrowLeft':
                    onArrowLeft(event, node, level, expanded, leaf);

                    break;

                case 'Enter':
                case 'NumpadEnter':
                case 'Space':
                    onEnterKey(event, node, expanded);

                    break;

                default:
                    if (!metaKey && isPrintableCharacter(event.key)) {
                        searchNodes(event.key, node);
                    }

                    break;
            }
        };

        const onArrowDown = (event: React.KeyboardEvent) => {
            const target = event.target as HTMLElement;
            const nodeElement = target.getAttribute('data-pc-section') === 'treetoggle' ? target.closest('[role="treeitem"]') : target;

            if (!nodeElement) return;

            const listElement = nodeElement.children[1];

            if (listElement) {
                focusRowChange(nodeElement, listElement.children[0]);
            } else {
                if (nodeElement.nextElementSibling) {
                    focusRowChange(nodeElement, nodeElement.nextElementSibling);
                } else {
                    const nextSiblingAncestor = findNextSiblingOfAncestor(nodeElement);

                    if (nextSiblingAncestor) {
                        focusRowChange(nodeElement, nextSiblingAncestor);
                    }
                }
            }

            event.preventDefault();
        };

        const onArrowUp = (event: React.KeyboardEvent) => {
            const nodeElement = event.target as HTMLElement;

            if (nodeElement.previousElementSibling) {
                focusRowChange(nodeElement, nodeElement.previousElementSibling, findLastVisibleDescendant(nodeElement.previousElementSibling));
            } else {
                const parentNodeElement = getParentNodeElement(nodeElement);

                if (parentNodeElement) {
                    focusRowChange(nodeElement, parentNodeElement);
                }
            }

            event.preventDefault();
        };

        const onArrowRight = (event: React.KeyboardEvent, node: TreeNode, expanded: boolean, leaf: boolean) => {
            if (leaf || expanded) return;

            (event.currentTarget as HTMLElement).tabIndex = -1;

            onNodeToggle(event, node);

            setTimeout(() => {
                onArrowDown(event);
            }, 0);
        };

        const onArrowLeft = (event: React.KeyboardEvent, node: TreeNode, level: number, expanded: boolean, leaf: boolean) => {
            if (level === 0 && !expanded) {
                return false;
            }

            if (expanded && !leaf) {
                onNodeToggle(event, node);

                return false;
            }

            const target = findBeforeClickableNode(event.currentTarget as HTMLElement);

            if (target) {
                focusRowChange(event.currentTarget as HTMLElement, target);
            }
        };

        const onEnterKey = (event: React.KeyboardEvent, node: TreeNode, expanded: boolean) => {
            setTabIndexForSelectionMode(event, expanded);
            onClick(event, node, true);

            event.preventDefault();
        };

        const onTabKey = () => {
            setAllNodesTabIndexes();
        };

        const setAllNodesTabIndexes = () => {
            if (!elementRef.current) return;

            const nodes = find(elementRef.current as HTMLElement, '[role="treeitem"]');

            const hasSelectedNode = [...nodes].some((node) => node.getAttribute('aria-selected') === 'true' || node.getAttribute('aria-checked') === 'true');

            [...nodes].forEach((node) => {
                (node as HTMLElement).tabIndex = -1;
            });

            if (hasSelectedNode) {
                const selectedNodes = [...nodes].filter((node) => node.getAttribute('aria-selected') === 'true' || node.getAttribute('aria-checked') === 'true');

                (selectedNodes[0] as HTMLElement).tabIndex = 0;

                return;
            }

            ([...nodes][0] as HTMLElement).tabIndex = 0;
        };

        const setTabIndexForSelectionMode = (event: React.KeyboardEvent, expanded: boolean) => {
            if (props.selectionMode !== null) {
                const parentElement = (event.currentTarget as HTMLElement).parentElement;

                if (!parentElement) return;

                const elements = [...find(parentElement, '[role="treeitem"]')];

                (event.currentTarget as HTMLElement).tabIndex = expanded ? -1 : 0;

                if (elements.every((element) => (element as HTMLElement).tabIndex === -1)) {
                    (elements[0] as HTMLElement).tabIndex = 0;
                }
            }
        };

        const focusRowChange = (firstFocusableRow: Element, currentFocusedRow: Element, lastVisibleDescendant?: Element) => {
            (firstFocusableRow as HTMLElement).tabIndex = -1;
            (currentFocusedRow as HTMLElement).tabIndex = 0;

            focus((lastVisibleDescendant || currentFocusedRow) as HTMLElement);
        };

        const findBeforeClickableNode = (node: HTMLElement): Element | null => {
            const ulElement = node.closest('ul');

            if (!ulElement) return null;

            const parentListElement = ulElement.closest('li');

            if (parentListElement) {
                const prevNodeButton = findSingle(parentListElement, 'button');

                if (prevNodeButton && (prevNodeButton as HTMLElement).style.visibility !== 'hidden') {
                    return parentListElement;
                }

                if (node.previousElementSibling) {
                    return findBeforeClickableNode(node.previousElementSibling as HTMLElement);
                }
            }

            return null;
        };

        const findNextSiblingOfAncestor = (nodeElement: Element): Element | null => {
            const parentNodeElement = getParentNodeElement(nodeElement);

            if (parentNodeElement) {
                if (parentNodeElement.nextElementSibling) return parentNodeElement.nextElementSibling;
                else return findNextSiblingOfAncestor(parentNodeElement);
            } else {
                return null;
            }
        };

        const findLastVisibleDescendant = (nodeElement: Element): Element => {
            const childrenListElement = nodeElement.children[1];

            if (childrenListElement) {
                const lastChildElement = childrenListElement.children[childrenListElement.children.length - 1];

                return findLastVisibleDescendant(lastChildElement);
            } else {
                return nodeElement;
            }
        };

        const getParentNodeElement = (nodeElement: Element): Element | null => {
            const parentElement = nodeElement.parentElement;

            if (!parentElement) return null;

            const parentNodeElement = parentElement.parentElement;

            if (!parentNodeElement) return null;

            return getAttribute(parentNodeElement, 'role') === 'treeitem' ? parentNodeElement : null;
        };

        const onNodeToggle = (event: React.SyntheticEvent, node: TreeNode) => {
            const currentKeys = (expandedKeyState || {}) as TreeExpandedKeys;
            const nodeKey = node.key;
            let newValue: TreeExpandedKeys;

            if (currentKeys[nodeKey]) {
                newValue = { ...currentKeys };
                delete newValue[nodeKey];

                if (props.onCollapse) {
                    props.onCollapse({
                        originalEvent: event,
                        node
                    });
                }

                if (props.onToggle) {
                    props.onToggle({
                        originalEvent: event,
                        node
                    });
                }
            } else {
                newValue = { ...currentKeys, [nodeKey]: true };

                if (props.onExpand) {
                    props.onExpand({
                        originalEvent: event,
                        node
                    });
                }

                if (props.onToggle) {
                    props.onToggle({
                        originalEvent: event,
                        node
                    });
                }
            }

            setExpandedKeyState([
                newValue,
                {
                    originalEvent: event,
                    value: newValue
                }
            ]);
        };

        const onNodeClick = (event: React.MouseEvent | React.KeyboardEvent, node: TreeNode, nodeTouched = false) => {
            if (props.selectionMode != null) {
                const metaSelection = nodeTouched ? false : props.metaKeySelection;
                const newValue = metaSelection ? handleSelectionWithMetaKey(event, node) : handleSelectionWithoutMetaKey(event, node);

                setSelectedKeyState([
                    newValue,
                    {
                        originalEvent: event,
                        value: newValue
                    }
                ]);

                if (props.onClick) {
                    props.onClick({
                        originalEvent: event,
                        node
                    });
                }
            }
        };

        const handleSelectionWithMetaKey = (event: React.MouseEvent | React.KeyboardEvent, node: TreeNode) => {
            const metaKey = (event as React.MouseEvent).metaKey || (event as React.KeyboardEvent).ctrlKey;
            const selected = isNodeSelected(node);
            let _selectionKeys: TreeSelectionKeys = {};
            const currentSelection = (selectedKeyState || {}) as TreeSelectionKeys;

            if (selected && metaKey) {
                if (isSingleSelectionMode()) {
                    _selectionKeys = {};
                } else {
                    _selectionKeys = { ...currentSelection };
                    delete _selectionKeys[node.key];
                }

                if (props.onUnselect) {
                    props.onUnselect({
                        originalEvent: event,
                        node
                    });
                }
            } else {
                if (isSingleSelectionMode()) {
                    _selectionKeys = {};
                } else if (isMultipleSelectionMode()) {
                    _selectionKeys = !metaKey ? {} : { ...currentSelection };
                }

                _selectionKeys[node.key] = true;

                if (props.onSelect) {
                    props.onSelect({
                        originalEvent: event,
                        node
                    });
                }
            }

            return _selectionKeys;
        };

        const handleSelectionWithoutMetaKey = (event: React.MouseEvent | React.KeyboardEvent, node: TreeNode) => {
            const selected = isNodeSelected(node);
            let _selectionKeys: TreeSelectionKeys = {};
            const currentSelection = (selectedKeyState || {}) as TreeSelectionKeys;
            const nodeKey = node.key;

            if (isSingleSelectionMode()) {
                if (selected) {
                    _selectionKeys = {};

                    if (props.onUnselect) {
                        props.onUnselect({
                            originalEvent: event,
                            node
                        });
                    }
                } else {
                    _selectionKeys = { [nodeKey]: true };

                    if (props.onSelect) {
                        props.onSelect({
                            originalEvent: event,
                            node
                        });
                    }
                }
            } else {
                if (selected) {
                    _selectionKeys = { ...currentSelection };
                    delete _selectionKeys[nodeKey];

                    if (props.onUnselect) {
                        props.onUnselect({
                            originalEvent: event,
                            node
                        });
                    }
                } else {
                    _selectionKeys = { ...currentSelection, [nodeKey]: true };

                    if (props.onSelect) {
                        props.onSelect({
                            originalEvent: event,
                            node
                        });
                    }
                }
            }

            return _selectionKeys;
        };

        const isSingleSelectionMode = () => {
            return props.selectionMode === 'single';
        };

        const isMultipleSelectionMode = () => {
            return props.selectionMode === 'multiple';
        };

        const isCheckboxSelectionMode = () => {
            return props.selectionMode === 'checkbox';
        };

        const isNodeSelected = (node: TreeNode) => {
            if (!props.selectionMode || !selectedKeyState) return false;

            if (isCheckboxSelectionMode()) {
                const checkboxKeys = selectedKeyState as TreeCheckboxSelectionKeys;

                return checkboxKeys[node.key]?.checked === true;
            }

            const keys = selectedKeyState as TreeSelectionKeys;

            return keys[node.key] === true;
        };

        const onClick = (event: React.MouseEvent | React.KeyboardEvent, node: TreeNode, nodeTouched = false) => {
            if (isCheckboxSelectionMode()) {
                onCheckboxChange(event, node);
            } else {
                onNodeClick(event, node, nodeTouched);
            }
        };

        const onCheckboxChange = (event: React.SyntheticEvent, node: TreeNode) => {
            const currentKeys = (selectedKeyState || {}) as TreeCheckboxSelectionKeys;
            const _selectionKeys = { ...currentKeys };
            const nodeKey = node.key;

            if (!node) return;

            const isChecked = _selectionKeys[nodeKey]?.checked === true;
            const newCheckState = !isChecked;

            if (newCheckState) {
                if (props.onUnselect) {
                    props.onUnselect({
                        originalEvent: event,
                        node
                    });
                }
            } else {
                if (props.onSelect) {
                    props.onSelect({
                        originalEvent: event,
                        node
                    });
                }
            }

            propagateDown(node, newCheckState, _selectionKeys);

            let parentNode = findParentNode(getNodes(), nodeKey);

            while (parentNode) {
                propagateUp(parentNode, _selectionKeys);
                parentNode = findParentNode(getNodes(), parentNode.key);
            }

            setSelectedKeyState([
                _selectionKeys,
                {
                    originalEvent: event,
                    value: _selectionKeys
                }
            ]);
        };

        const propagateDown = (node: TreeNode, check: boolean, selectionKeys: TreeCheckboxSelectionKeys) => {
            if (check && node.selectable !== false) {
                selectionKeys[node.key] = { checked: true, partialChecked: false };
            } else {
                delete selectionKeys[node.key];
            }

            if (node.children && node.children.length) {
                for (const child of node.children) {
                    propagateDown(child, check, selectionKeys);
                }
            }
        };

        const propagateUp = (node: TreeNode, selectionKeys: TreeCheckboxSelectionKeys): TreeCheckboxSelectionKeys => {
            if (!node.children || node.children.length === 0) {
                return selectionKeys;
            }

            let checkedChildCount = 0;
            let childPartialSelected = false;

            for (const child of node.children) {
                if (selectionKeys[child.key]?.checked) {
                    checkedChildCount++;
                } else if (selectionKeys[child.key]?.partialChecked) {
                    childPartialSelected = true;
                }
            }

            if (checkedChildCount === node.children.length) {
                selectionKeys[node.key] = { checked: true, partialChecked: false };
            } else {
                delete selectionKeys[node.key];

                if (childPartialSelected || (checkedChildCount > 0 && checkedChildCount !== node.children.length)) {
                    selectionKeys[node.key] = { checked: false, partialChecked: true };
                }
            }

            return selectionKeys;
        };

        const findParentNode = (nodes: TreeNode[], childKey: string, parent: TreeNode | null = null): TreeNode | null => {
            for (const node of nodes) {
                if (node.key === childKey) {
                    return parent;
                }

                if (node.children) {
                    const found = findParentNode(node.children, childKey, node);

                    if (found !== null) return found;
                }
            }

            return null;
        };

        const searchNodes = (char: string, currentNode: TreeNode) => {
            searchValue.current = (searchValue.current || '') + char;

            if (searchTimeout.current) {
                clearTimeout(searchTimeout.current);
            }

            if (searchValue.current) {
                if (!elementRef.current) return;

                const allTreeItems = [...find(elementRef.current as HTMLElement, '[role="treeitem"]')] as HTMLElement[];
                const currentNodeElement = allTreeItems.find((item) => item.getAttribute('data-node-key') === currentNode.key);

                if (!currentNodeElement) return;

                const currentIndex = allTreeItems.indexOf(currentNodeElement);
                const searchLower = searchValue.current.toLowerCase();
                let matchedElement: HTMLElement | null = null;

                for (let i = currentIndex + 1; i < allTreeItems.length; i++) {
                    const item = allTreeItems[i];
                    const label = item.textContent?.trim().toLowerCase() || '';

                    if (label.startsWith(searchLower)) {
                        matchedElement = item;
                        break;
                    }
                }

                if (!matchedElement) {
                    for (let i = 0; i <= currentIndex; i++) {
                        const item = allTreeItems[i];
                        const label = item.textContent?.trim().toLowerCase() || '';

                        if (label.startsWith(searchLower)) {
                            matchedElement = item;
                            break;
                        }
                    }
                }

                if (matchedElement && matchedElement !== currentNodeElement) {
                    allTreeItems.forEach((item) => {
                        item.tabIndex = -1;
                    });

                    matchedElement.tabIndex = 0;
                    focus(matchedElement);
                }
            }

            searchTimeout.current = setTimeout(() => {
                searchValue.current = '';
                searchTimeout.current = null;
            }, 500);
        };

        const isSameNode = (event: React.KeyboardEvent) => {
            const target = event.target as HTMLElement;
            const currentTarget = event.currentTarget as HTMLElement;

            return currentTarget && (currentTarget.isSameNode(target as Node) || currentTarget.isSameNode(target.closest('[role="treeitem"]') as Node));
        };

        const onFilterKeyUp = (event: React.KeyboardEvent) => {
            if (event.code === 'Enter' || event.code === 'NumpadEnter') {
                event.preventDefault();
            }
        };

        const findNodeInfo = (nodeKey: string) => {
            let level = 1;
            let posInSet = 0;
            let setSize = 0;

            const findInNodes = (nodes: unknown[], currentLevel: number): boolean => {
                for (let i = 0; i < nodes.length; i++) {
                    const node = nodes[i] as { key: string; children?: unknown[] };

                    if (node.key === nodeKey) {
                        level = currentLevel;
                        posInSet = i + 1;
                        setSize = nodes.length;

                        return true;
                    }

                    if (node.children) {
                        if (findInNodes(node.children, currentLevel + 1)) {
                            return true;
                        }
                    }
                }

                return false;
            };

            const nodes = getNodes();

            findInNodes(nodes, 1);

            return { level, posInSet, setSize };
        };

        return {
            state,
            //methods
            getNodes,
            onKeyDown,
            onNodeToggle,
            onNodeClick,
            onClick,
            onCheckboxChange,
            isNodeSelected,
            onFilterKeyUp,
            findNodeInfo
        };
    }
});
