import { withHeadless } from '@primereact/core/headless';
import { TreeNode } from '@primereact/types/shared/orgchart';
import * as React from 'react';
import { defaultProps } from './useOrgChart.props';

export const useOrgChart = withHeadless({
    name: 'useOrgChart',
    defaultProps,
    setup({ props }) {
        const [selectedNodesSet, setSelectedNodesSet] = React.useState<Set<string>>(() => new Set());
        const [collapsedNodesSet, setCollapsedNodesSet] = React.useState<Set<string>>(() => new Set());

        const selectedNodes = React.useMemo(() => Array.from(selectedNodesSet), [selectedNodesSet]);
        const collapsedNodes = React.useMemo(() => Array.from(collapsedNodesSet), [collapsedNodesSet]);

        const isInitialized = React.useRef(false);
        const initialSelectedKeysRef = React.useRef<Set<string>>(new Set());
        const initialCollapsedKeysRef = React.useRef<Set<string>>(new Set());

        const state = {
            selectedNodes,
            collapsedNodes
        };

        const toggleNodeSelect = React.useCallback(
            (key?: string) => {
                if (!key) return;

                setSelectedNodesSet((prev) => {
                    const next = new Set(prev);

                    if (next.has(key)) {
                        if (props.selectionMode === 'single') {
                            next.clear();
                        } else {
                            next.delete(key);
                        }
                    } else {
                        if (props.selectionMode === 'single') {
                            next.clear();
                        }

                        next.add(key);
                    }

                    return next;
                });
            },
            [props.selectionMode]
        );

        const toggleNodeCollapse = React.useCallback((key?: string) => {
            if (!key) return;

            setCollapsedNodesSet((prev) => {
                const next = new Set(prev);

                if (next.has(key)) {
                    next.delete(key);
                } else {
                    next.add(key);
                }

                return next;
            });
        }, []);

        const handleNodeKeyDown = React.useCallback(
            (event: React.KeyboardEvent<HTMLDivElement>, key?: string) => {
                if (event.key === 'Enter' || event.key === ' ') {
                    toggleNodeSelect(key);

                    event.preventDefault();
                    event.stopPropagation();
                }
            },
            [toggleNodeSelect]
        );

        const handleCollapseKeyDown = React.useCallback(
            (event: React.KeyboardEvent<HTMLButtonElement>, key?: string) => {
                if (event.key === 'Enter' || event.key === ' ') {
                    toggleNodeCollapse(key);

                    event.preventDefault();
                    event.stopPropagation();
                }
            },
            [toggleNodeCollapse]
        );

        const orgChartStyle = React.useMemo(() => {
            let gap = props.gap ?? 40;

            if (!Array.isArray(gap)) {
                gap = [gap, gap];
            } else if (gap.length === 1) {
                gap = [gap[0], gap[0]];
            } else if (gap.length === 0) {
                gap = [40, 40];
            }

            return {
                '--gap-x': gap[0],
                '--gap-y': gap[1]
            };
        }, [props.gap]);

        const flattenNodes = React.useCallback((nodes: TreeNode[]): TreeNode[] => {
            return nodes.reduce((acc, node) => {
                acc.push(node);

                if (node.children && node.children.length > 0) {
                    acc.push(...flattenNodes(node.children));
                }

                return acc;
            }, [] as TreeNode[]);
        }, []);

        const nodeMap = React.useMemo(() => {
            if (!props.value || props.value.length === 0) return new Map<string, TreeNode>();

            const allNodes = flattenNodes(props.value);
            const map = new Map<string, TreeNode>();

            allNodes.forEach((node) => {
                map.set(node.key, node);
            });

            return map;
        }, [props.value, flattenNodes]);

        React.useMemo(() => {
            if (isInitialized.current || nodeMap.size === 0) return;

            const collapsedKeys = new Set<string>();
            const selectedKeys = new Set<string>();

            nodeMap.forEach((node) => {
                if (node.collapsedByDefault) {
                    const nodeCollapsible = node.collapsible ?? props.collapsible ?? false;
                    const hasChildren = node.children && node.children.length > 0;

                    if (nodeCollapsible && hasChildren) {
                        collapsedKeys.add(node.key);
                    }
                }
            });

            nodeMap.forEach((node) => {
                if (node.selectedByDefault) {
                    const nodeSelectable = node.selectable ?? props.selectable ?? true;

                    if (nodeSelectable) {
                        if (props.selectionMode === 'single' && selectedKeys.size > 0) {
                            return;
                        }

                        selectedKeys.add(node.key);
                    }
                }
            });

            initialCollapsedKeysRef.current = collapsedKeys;
            initialSelectedKeysRef.current = selectedKeys;
        }, [nodeMap, props.collapsible, props.selectable, props.selectionMode]);

        const isCollapsible = React.useCallback(
            (node?: TreeNode) => {
                if (!node) return false;

                const nodeCollapsible = node.collapsible ?? props.collapsible ?? false;

                return Boolean(nodeCollapsible && node.children && node.children.length > 0);
            },
            [props.collapsible]
        );

        const isSelectable = React.useCallback(
            (node?: TreeNode) => {
                if (!node) return false;

                return Boolean(node.selectable ?? props.selectable ?? false);
            },
            [props.selectable]
        );

        const isCollapsed = React.useCallback(
            (node?: TreeNode) => {
                if (!node || !node.key) return false;

                if (!isCollapsible(node)) return false;

                if (collapsedNodesSet.has(node.key)) return true;

                if (!isInitialized.current && initialCollapsedKeysRef.current.has(node.key)) {
                    return true;
                }

                return false;
            },
            [collapsedNodesSet, isCollapsible]
        );

        const isSelected = React.useCallback(
            (node?: TreeNode) => {
                if (!node || !node.key) return false;

                if (selectedNodesSet.has(node.key)) return true;

                if (!isInitialized.current && initialSelectedKeysRef.current.has(node.key)) {
                    return true;
                }

                return false;
            },
            [selectedNodesSet]
        );

        React.useEffect(() => {
            if (nodeMap.size === 0) {
                setCollapsedNodesSet((prev) => (prev.size > 0 ? new Set() : prev));
                setSelectedNodesSet((prev) => (prev.size > 0 ? new Set() : prev));

                return;
            }

            if (!isInitialized.current) {
                isInitialized.current = true;

                const collapsedKeys = initialCollapsedKeysRef.current;
                const selectedKeys = initialSelectedKeysRef.current;

                if (collapsedKeys.size > 0) {
                    setCollapsedNodesSet(new Set(collapsedKeys));
                }

                if (selectedKeys.size > 0) {
                    setSelectedNodesSet(new Set(selectedKeys));
                }

                return;
            }

            setCollapsedNodesSet((prev) => {
                if (prev.size === 0) return prev;

                const next = new Set<string>();
                let hasChanges = false;

                prev.forEach((key) => {
                    const node = nodeMap.get(key);

                    if (node) {
                        const nodeCollapsible = node.collapsible ?? props.collapsible ?? false;

                        if (nodeCollapsible && node.children && node.children.length > 0) {
                            next.add(key);
                        } else {
                            hasChanges = true;
                        }
                    } else {
                        hasChanges = true;
                    }
                });

                return hasChanges ? next : prev;
            });

            setSelectedNodesSet((prev) => {
                if (prev.size === 0) return prev;

                const next = new Set<string>();
                let hasChanges = false;

                prev.forEach((key) => {
                    const node = nodeMap.get(key);

                    if (node) {
                        const nodeSelectable = node.selectable ?? props.selectable ?? true;

                        if (nodeSelectable) {
                            next.add(key);
                        } else {
                            hasChanges = true;
                        }
                    } else {
                        hasChanges = true;
                    }
                });

                return hasChanges ? next : prev;
            });
        }, [nodeMap, props.collapsible, props.selectable]);

        return {
            state,
            orgChartStyle,
            toggleNodeSelect,
            toggleNodeCollapse,
            isCollapsible,
            isSelectable,
            isCollapsed,
            isSelected,
            handleNodeKeyDown,
            handleCollapseKeyDown
        };
    }
});
