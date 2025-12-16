'use client';
import { Component } from '@primereact/core/component';
import type { TreeNode as TreeNodeType } from '@primereact/types/shared/tree';
import { mergeProps } from '@primeuix/utils';
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

        return { tree, treenode, nodeTouched, setNodeTouched };
    },
    render(instance) {
        const { props, ptmi, tree, treenode, nodeTouched, setNodeTouched } = instance;

        const rootProps = mergeProps(
            {
                className: tree?.cx('content', { selected: treenode?.selected, selectable: tree?.props.selectionMode, checked: treenode?.checked }),
                onClick: (event: React.MouseEvent) => {
                    if (tree) {
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

        return <Component instance={instance} attrs={rootProps} children={props.children} />;
    }
});
