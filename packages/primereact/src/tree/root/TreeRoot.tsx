'use client';
import { Component, withComponent } from '@primereact/core/component';
import { useTree } from '@primereact/headless/tree';
import { mergeProps, resolve } from '@primeuix/utils';
import * as React from 'react';
import { TreeProvider } from '../Tree.context';
import { defaultRootProps } from './TreeRoot.props';

export const TreeRoot = withComponent({
    name: 'TreeRoot',
    defaultProps: defaultRootProps,
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
    }
});
