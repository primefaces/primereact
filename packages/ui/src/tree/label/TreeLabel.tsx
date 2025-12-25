'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useTreeNodeContext } from '../node/TreeNode.context';
import { useTreeContext } from '../Tree.context';
import { defaultLabelProps } from './TreeLabel.props';

export const TreeLabel = withComponent({
    name: 'TreeLabel',
    defaultProps: defaultLabelProps,
    setup() {
        const tree = useTreeContext();
        const treenode = useTreeNodeContext();

        return { tree, treenode };
    },
    render(instance) {
        const { props, ptmi, tree } = instance;

        const rootProps = mergeProps(
            {
                className: tree?.cx('label')
            },
            tree?.ptm('label'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children} />;
    }
});
