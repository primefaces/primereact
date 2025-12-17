'use client';
import { Component } from '@primereact/core/component';
import { useTree } from '@primereact/headless/tree';
import { styles } from '@primereact/styles/tree';
import { mergeProps, resolve } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { TreeProvider } from './Tree.context';
import { defaultProps } from './Tree.props';
import { TreeContent } from './content/TreeContent';
import { TreeEmpty } from './empty/TreeEmpty';
import { TreeFilter } from './filter/TreeFilter';
import { TreeFooter } from './footer/TreeFooter';
import { TreeHeader } from './header/TreeHeader';
import { TreeIcon } from './icon/TreeIcon';
import { TreeLabel } from './label/TreeLabel';
import { TreeList } from './list/TreeList';
import { TreeNode } from './node/TreeNode';
import { TreeToggle } from './toggle/TreeToggle';

export const Tree = withComponent({
    name: 'Tree',
    defaultProps,
    styles,
    setup(instance) {
        const tree = useTree(instance.inProps);

        return tree;
    },
    render(instance) {
        const { id, props, state, ptmi, ptm, cx, onDragOver, onDragEnter, onDragLeave, onDrop } = instance;

        const rootProps = mergeProps(
            {
                id,
                className: cx('root', { isDragHover: state.isDragHover }),
                onDragOver,
                onDragEnter,
                onDragLeave,
                onDrop
            },
            ptmi('root', { isDragHover: state.isDragHover })
        );

        const createWrapper = () => {
            const wrapperProps = mergeProps(
                {
                    className: cx('wrapper'),
                    style: { maxHeight: props.scrollHeight }
                },
                ptm('wrapper')
            );

            return <div {...wrapperProps}>{resolve(props.children, instance)}</div>;
        };

        return (
            <TreeProvider value={instance}>
                <Component instance={instance} attrs={rootProps}>
                    {createWrapper()}
                </Component>
            </TreeProvider>
        );
    },
    components: {
        List: TreeList,
        Node: TreeNode,
        Content: TreeContent,
        Label: TreeLabel,
        Icon: TreeIcon,
        Toggle: TreeToggle,
        Filter: TreeFilter,
        Header: TreeHeader,
        Footer: TreeFooter,
        Empty: TreeEmpty
    }
});
