'use client';
import { Component, withComponent } from '@primereact/core/component';
import type { TreeNode as TreeNodeType } from '@primereact/types/shared/tree';
import { mergeProps, resolve } from '@primeuix/utils';
import * as React from 'react';
import { useTreeContext } from '../Tree.context';
import { TreeNodeProvider, useTreeNodeContext } from './TreeNode.context';
import { defaultNodeProps } from './TreeNode.props';

export const TreeNode = withComponent({
    name: 'TreeNode',
    defaultProps: defaultNodeProps,
    setup({ props }) {
        const tree = useTreeContext();
        const parentNode = useTreeNodeContext();

        const nodeKey = props?.node?.key;
        const expanded = nodeKey ? tree?.state?.expandedKey?.[nodeKey] === true : false;
        const selected = props.node ? (tree?.isNodeSelected(props.node) ?? false) : false;
        const leaf = props?.node ? (props.node.leaf ?? (!props.node.children || props.node.children.length === 0)) : true;

        let checked = false;
        let partialChecked = false;

        if (tree?.props.selectionMode === 'checkbox' && nodeKey && tree?.state?.selectedKey) {
            const checkboxKeys = tree.state.selectedKey as Record<string, { checked: boolean; partialChecked: boolean }>;

            checked = checkboxKeys[nodeKey]?.checked === true;
            partialChecked = checkboxKeys[nodeKey]?.partialChecked === true;
        }

        let level = 1;
        let posInSet = 1;
        let setSize = 1;

        if (props?.index !== undefined) {
            const siblings = parentNode ? (parentNode.props.node as { children?: unknown[] })?.children : tree?.getNodes();

            setSize = siblings?.length || 0;
            posInSet = props.index + 1;

            let currentParent: typeof parentNode = parentNode;

            level = 1;

            while (currentParent) {
                level++;
                currentParent = currentParent.parentNode ?? undefined;
            }
        } else if (tree && nodeKey) {
            const info = tree.findNodeInfo(nodeKey);

            level = info.level;
            posInSet = info.posInSet;
            setSize = info.setSize;
        }

        return {
            tree,
            parentNode,
            expanded,
            checked,
            partialChecked,
            selected,
            leaf,
            setSize,
            posInSet,
            level
        };
    },
    render(instance) {
        const { props, ptmi, tree, expanded, checked, selected, leaf, setSize, posInSet, level } = instance;

        const rootProps = mergeProps(
            {
                className: tree?.cx('node', { leaf }),
                role: 'treeitem',
                tabIndex: posInSet - 1 === 0 ? 0 : -1,
                'aria-level': level,
                'aria-setsize': setSize,
                'aria-posinset': posInSet,
                'aria-expanded': expanded,
                'aria-selected': tree?.props.selectionMode === 'checkbox' ? checked : undefined,
                'aria-checked': tree?.props.selectionMode === 'single' || tree?.props.selectionMode === 'multiple' ? selected : undefined,
                'data-node-key': props.node?.key,
                onKeyDown: (event: React.KeyboardEvent) => tree?.onKeyDown(event, props.node as TreeNodeType, level, expanded, leaf)
            },
            props.node?.nodeProps,
            tree?.ptm('node'),
            ptmi('root')
        );

        return (
            <TreeNodeProvider value={instance}>
                <Component instance={instance} attrs={rootProps}>
                    {resolve(props.children, instance) ?? props.node?.label}
                </Component>
            </TreeNodeProvider>
        );
    }
});
