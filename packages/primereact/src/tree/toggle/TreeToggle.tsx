'use client';
import { Component } from '@primereact/core/component';
import { ChevronDownIcon, ChevronRightIcon, SpinnerIcon } from '@primereact/icons';
import type { TreeNode } from '@primereact/types/shared/tree';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { useTreeNodeContext } from '../node/TreeNode.context';
import { useTreeContext } from '../Tree.context';
import { defaultToggleProps } from './TreeToggle.props';

export const TreeToggle = withComponent({
    name: 'TreeToggle',
    defaultProps: defaultToggleProps,
    setup() {
        const tree = useTreeContext();
        const treenode = useTreeNodeContext();

        return { tree, treenode };
    },
    render(instance) {
        const { props, ptmi, tree, treenode } = instance;

        const rootProps = mergeProps(
            {
                className: tree?.cx('toggle'),
                type: 'button',
                tabIndex: -1,
                onClick: (event: React.MouseEvent<HTMLButtonElement>) => {
                    // Stop propagation to prevent TreeContent onClick from firing
                    event.stopPropagation();

                    tree?.onNodeToggle(event, treenode?.props.node as TreeNode);
                }
            },
            tree?.ptm('toggle'),
            ptmi('root')
        );

        const createIconElement = () => {
            const iconProps = mergeProps(
                {
                    className: tree?.cx('toggleIcon')
                },
                tree?.ptm('toggleIcon')
            );

            if (treenode?.props?.node?.loading) {
                return <SpinnerIcon spin {...iconProps} />;
            } else if (treenode?.expanded) {
                return <ChevronDownIcon {...iconProps} />;
            }

            return <ChevronRightIcon {...iconProps} />;
        };

        return <Component instance={instance} attrs={rootProps} children={props.children ?? createIconElement()} />;
    }
});
