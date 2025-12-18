'use client';
import { Component } from '@primereact/core/component';
import { TreeDragDropService } from '@primereact/headless/tree';
import type { TreeNode as TreeNodeType } from '@primereact/types/shared/tree';
import { getOuterHeight, getOuterWidth, mergeProps, resolve } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { useTreeNodeContext } from '../node/TreeNode.context';
import { useTreeContext } from '../Tree.context';
import { defaultContentProps } from './TreeContent.props';

export const TreeContent = withComponent({
    name: 'TreeContent',
    defaultProps: defaultContentProps,
    setup() {
        const tree = useTreeContext();
        const treenode = useTreeNodeContext();
        const [nodeTouched, setNodeTouched] = React.useState(false);

        const [isPrevDropPointHovered, setIsPrevDropPointHovered] = React.useState(false);
        const [isNextDropPointHovered, setIsNextDropPointHovered] = React.useState(false);
        const [isNodeDropHovered, setIsNodeDropHovered] = React.useState(false);

        const subNodes = treenode?.parentNode?.props.node?.children || tree?.getNodes() || [];

        const isDraggable = tree?.props.draggableNodes === true;
        const isNodeDraggable = treenode?.props.node?.draggable !== false && isDraggable;

        const dragState = TreeDragDropService.getDragState();
        const isDroppable = tree?.props.droppableNodes && tree?.allowDrop?.(treenode?.props.node as TreeNodeType);
        const isNodeDroppable = treenode?.props.node?.droppable !== false && isDroppable;

        const isPrevDropPointActive = isPrevDropPointHovered && isDroppable;
        const isNextDropPointActive = isNextDropPointHovered && isDroppable;
        const isNodeDropActive = isNodeDropHovered && isNodeDroppable;

        const dropPosition = isPrevDropPointActive ? -1 : isNextDropPointActive ? 1 : 0;

        const removeNodeFromTree = (nodes: TreeNodeType[], nodeToRemove: TreeNodeType): TreeNodeType[] => {
            return nodes.reduce((acc: TreeNodeType[], node: TreeNodeType) => {
                if (node.key === nodeToRemove.key) {
                    return acc;
                }

                if (node.children && node.children.length > 0) {
                    const updatedChildren = removeNodeFromTree(node.children, nodeToRemove);

                    acc.push({ ...node, children: updatedChildren });
                } else {
                    acc.push(node);
                }

                return acc;
            }, []);
        };

        const insertNodeInSiblings = (nodes: TreeNodeType[], targetKey: string, nodeToInsert: TreeNodeType, offset: number): TreeNodeType[] => {
            const targetIndex = nodes.findIndex((n) => n.key === targetKey);

            if (targetIndex !== -1) {
                const newNodes = [...nodes];

                newNodes.splice(targetIndex + offset, 0, nodeToInsert);

                return newNodes;
            }

            return nodes.map((node) => {
                if (node.children && node.children.length > 0) {
                    return { ...node, children: insertNodeInSiblings(node.children, targetKey, nodeToInsert, offset) };
                }

                return node;
            });
        };

        const addNodeAsChild = (nodes: TreeNodeType[], parentKey: string, nodeToInsert: TreeNodeType): TreeNodeType[] => {
            return nodes.map((node) => {
                if (node.key === parentKey) {
                    return { ...node, children: [...(node.children || []), nodeToInsert] };
                }

                if (node.children && node.children.length > 0) {
                    return { ...node, children: addNodeAsChild(node.children, parentKey, nodeToInsert) };
                }

                return node;
            });
        };

        const insertNodeOnDrop = (): TreeNodeType[] | null => {
            const dragNode = dragState.dragNode;
            const rootNodes = tree?.getNodes() || [];

            if (!treenode?.props.node || !dragNode) {
                return null;
            }

            const position = dropPosition;
            let updatedNodes = removeNodeFromTree(rootNodes, dragNode);

            if (position < 0) {
                updatedNodes = insertNodeInSiblings(updatedNodes, treenode?.props.node.key, dragNode, 0);
            } else if (position > 0) {
                updatedNodes = insertNodeInSiblings(updatedNodes, treenode?.props.node.key, dragNode, 1);
            } else {
                updatedNodes = addNodeAsChild(updatedNodes, treenode?.props.node.key, dragNode);
            }

            if (tree?.props.onValueChange) {
                tree.props.onValueChange({ value: updatedNodes });
            }

            TreeDragDropService.stopDrag({
                node: dragNode
            });

            return updatedNodes;
        };

        const onNodeDragStart = (event: React.DragEvent) => {
            if (isNodeDraggable) {
                event.stopPropagation();
                event.dataTransfer.effectAllowed = 'all';
                event.dataTransfer.setData('text', 'data');

                const target = event.currentTarget as HTMLElement;
                const dragEl = target.cloneNode(true) as HTMLElement;
                const toggler = dragEl.querySelector('[data-pc-name="treetoggle"]') as HTMLElement;
                const checkbox = dragEl.querySelector('[data-pc-name="checkbox"]');

                target.setAttribute('data-p-dragging', 'true');
                dragEl.style.width = getOuterWidth(target) + 'px';
                dragEl.style.height = getOuterHeight(target) + 'px';
                dragEl.setAttribute('data-pc-section', 'drag-image');

                if (toggler) {
                    toggler.style.visibility = 'hidden';
                }

                checkbox?.remove();
                document.body.appendChild(dragEl);
                event.dataTransfer.setDragImage(dragEl, 0, 0);

                setTimeout(() => document.body.removeChild(dragEl), 0);

                TreeDragDropService.startDrag({
                    node: treenode?.props.node as TreeNodeType,
                    subNodes: subNodes as TreeNodeType[],
                    index: treenode?.props.index,
                    scope: tree?.props.draggableScope
                });
            } else {
                event.preventDefault();
            }
        };

        const onNodeDragOver = (event: React.DragEvent) => {
            if (isDroppable) {
                event.dataTransfer.dropEffect = 'copy';
                const nodeElement = event.currentTarget as HTMLElement;
                const rect = nodeElement.getBoundingClientRect();
                const y = event.clientY - rect.top;

                setIsPrevDropPointHovered(false);
                setIsNextDropPointHovered(false);
                setIsNodeDropHovered(false);

                if (y < rect.height * 0.25) {
                    setIsPrevDropPointHovered(true);
                } else if (y > rect.height * 0.75) {
                    setIsNextDropPointHovered(true);
                } else if (isNodeDroppable) {
                    setIsNodeDropHovered(true);
                }
            } else {
                event.dataTransfer.dropEffect = 'none';
            }

            if (tree?.props.droppableNodes) {
                event.preventDefault();
                event.stopPropagation();
            }
        };

        const onNodeDragEnter = () => {
            if (treenode?.props.onNodeDragEnter) {
                treenode.props.onNodeDragEnter({
                    node: treenode.props.node as TreeNodeType
                });
            }
        };

        const onNodeDragLeave = () => {
            if (treenode?.props.onNodeDragLeave) {
                treenode.props.onNodeDragLeave({
                    node: treenode.props.node as TreeNodeType
                });
            }

            setIsPrevDropPointHovered(false);
            setIsNextDropPointHovered(false);
            setIsNodeDropHovered(false);
        };

        const onNodeDragEnd = (event: React.DragEvent) => {
            event.stopPropagation();
            (event.currentTarget as HTMLElement)?.removeAttribute('data-p-dragging');

            TreeDragDropService.stopDrag({
                node: treenode?.props.node as TreeNodeType
            });
        };

        const onNodeDrop = (event: React.DragEvent) => {
            if (isDroppable) {
                event.preventDefault();
                event.stopPropagation();

                const dragNode = dragState.dragNode;
                const position = dropPosition;
                const isValidDrop = position !== 0 || (position === 0 && isNodeDroppable);

                if (isValidDrop && dragNode) {
                    if (tree?.props.validateDrop) {
                        if (treenode?.props.onNodeDrop) {
                            treenode.props.onNodeDrop({
                                originalEvent: event,
                                value: tree?.getNodes() || [],
                                dragNode: dragNode,
                                dropNode: treenode.props.node as TreeNodeType,
                                index: treenode?.props.index ?? 0,
                                accept: () => {
                                    const updatedNodes = insertNodeOnDrop();

                                    if (treenode?.props.onNodeDrop && updatedNodes) {
                                        treenode.props.onNodeDrop({
                                            originalEvent: event,
                                            value: updatedNodes,
                                            dragNode: dragNode,
                                            dropNode: treenode.props.node as TreeNodeType,
                                            index: treenode?.props.index ?? 0
                                        });
                                    }
                                }
                            });
                        }
                    } else {
                        const updatedNodes = insertNodeOnDrop();

                        if (treenode?.props.onNodeDrop && updatedNodes) {
                            treenode.props.onNodeDrop({
                                originalEvent: event,
                                value: updatedNodes,
                                dragNode: dragNode,
                                dropNode: treenode.props.node as TreeNodeType,
                                index: treenode?.props.index ?? 0
                            });
                        }
                    }
                }

                setIsPrevDropPointHovered(false);
                setIsNextDropPointHovered(false);
                setIsNodeDropHovered(false);
            }
        };

        return {
            tree,
            treenode,
            nodeTouched,
            setNodeTouched,
            isDraggable: isNodeDraggable,
            isPrevDropPointActive,
            isNextDropPointActive,
            isNodeDropActive,
            onNodeDragStart,
            onNodeDragOver,
            onNodeDragEnter,
            onNodeDragLeave,
            onNodeDragEnd,
            onNodeDrop
        };
    },
    render(instance) {
        const { props, ptmi, tree, treenode, nodeTouched, setNodeTouched, isDraggable, isPrevDropPointActive, isNextDropPointActive, isNodeDropActive, onNodeDragStart, onNodeDragOver, onNodeDragEnter, onNodeDragLeave, onNodeDragEnd, onNodeDrop } =
            instance;

        const rootProps = mergeProps(
            {
                className: tree?.cx('content', {
                    selected: treenode?.selected,
                    selectable: tree?.props.selectionMode,
                    checked: treenode?.checked,
                    isNodeDropActive
                }),
                draggable: isDraggable,
                'data-p-selected': tree?.props.selectionMode === 'checkbox' ? treenode?.checked : treenode?.selected,
                'data-p-selectable': props.node?.selectable !== false,
                onDragStart: onNodeDragStart,
                onDragOver: onNodeDragOver,
                onDragEnter: onNodeDragEnter,
                onDragLeave: onNodeDragLeave,
                onDragEnd: onNodeDragEnd,
                onDrop: onNodeDrop,
                onClick: (event: React.MouseEvent) => {
                    if (tree && treenode?.props.node?.selectable !== false) {
                        tree.onClick(event, treenode?.props.node as TreeNodeType, nodeTouched);

                        if (nodeTouched) {
                            setNodeTouched(false);
                        }
                    }
                },
                onTouchEnd: () => {
                    setNodeTouched(true);
                }
            },
            tree?.ptm('content'),
            ptmi('root')
        );

        const prevDropPointProps = mergeProps(
            {
                className: tree?.cx('dropPoint', { isPrevDropPointActive }),
                'aria-hidden': true
            },
            tree?.ptm('dropPoint')
        );

        const nextDropPointProps = mergeProps(
            {
                className: tree?.cx('dropPoint', { isNextDropPointActive }),
                'aria-hidden': true
            },
            tree?.ptm('dropPoint')
        );

        return (
            <>
                {isPrevDropPointActive && <div {...prevDropPointProps} />}
                <Component instance={instance} attrs={rootProps}>
                    {resolve(props.children, instance)}
                </Component>
                {isNextDropPointActive && <div {...nextDropPointProps} />}
            </>
        );
    }
});
