'use client';
import { Component } from '@primereact/core/component';
import type { CheckboxChangeEvent } from '@primereact/types/shared/checkbox';
import type { TreeNode as TreeNodeType } from '@primereact/types/shared/tree';
import { mergeProps, resolve } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import { Checkbox } from 'primereact/checkbox';
import * as React from 'react';
import { TreeContent } from '../content/TreeContent';
import { TreeLabel } from '../label/TreeLabel';
import { TreeNode } from '../node/TreeNode';
import { useTreeNodeContext } from '../node/TreeNode.context';
import { TreeToggle } from '../toggle/TreeToggle';
import { useTreeContext } from '../Tree.context';
import { defaultListProps } from './TreeList.props';

export const TreeList = withComponent({
    name: 'TreeList',
    defaultProps: defaultListProps,
    setup() {
        const tree = useTreeContext();
        const treenode = useTreeNodeContext();

        const nodes = treenode ? treenode.props.node?.children : tree?.getNodes();

        return { tree, treenode, nodes };
    },
    render(instance) {
        const { props, ptmi, tree, treenode, nodes } = instance;

        const rootProps = treenode
            ? mergeProps(
                  {
                      className: tree?.cx('nodeChildren'),
                      role: 'group'
                  },
                  tree?.ptm('list'),
                  ptmi('root')
              )
            : mergeProps(
                  {
                      className: tree?.cx('rootChildren'),
                      role: 'tree'
                  },
                  tree?.ptm('list'),
                  ptmi('root')
              );

        const createNodes = () => {
            return nodes?.map((node: TreeNodeType, index: number) => {
                let isChecked = false;
                let isPartialChecked = false;
                const isExpanded = tree?.state?.expandedKey?.[node.key] === true;

                if (tree?.props.selectionMode === 'checkbox' && tree?.state?.selectedKey) {
                    const checkboxKeys = tree.state.selectedKey as Record<string, { checked: boolean; partialChecked: boolean }>;

                    isChecked = checkboxKeys[node.key]?.checked === true;
                    isPartialChecked = checkboxKeys[node.key]?.partialChecked === true;
                }

                return (
                    <TreeNode key={index} node={node} index={index}>
                        <TreeContent>
                            <TreeToggle />
                            {tree?.props.selectionMode === 'checkbox' && (
                                <Checkbox
                                    className={tree?.cx('checkbox')}
                                    checked={isChecked}
                                    indeterminate={isPartialChecked}
                                    onCheckedChange={(event: CheckboxChangeEvent) => tree?.onCheckboxChange(event.originalEvent as React.ChangeEvent<HTMLInputElement>, node)}
                                    tabIndex={-1}
                                    pt={tree?.ptm('checkbox')}
                                />
                            )}
                            <TreeLabel>{resolve(node.label, instance)}</TreeLabel>
                        </TreeContent>
                        {isExpanded && <TreeList />}
                    </TreeNode>
                );
            });
        };

        const createContent = () => {
            if (props.children) {
                if (treenode && !treenode.expanded) {
                    return null;
                }

                return resolve(props.children, instance);
            } else if (nodes && nodes.length > 0) {
                return createNodes();
            }

            return null;
        };

        const content = createContent();

        return content ? (
            <Component instance={instance} attrs={rootProps}>
                {content}
            </Component>
        ) : null;
    }
});
