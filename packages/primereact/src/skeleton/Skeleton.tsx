'use client';
import { Component } from '@primereact/core/component';
import { useSkeleton } from '@primereact/headless/skeleton';
import { styles } from '@primereact/styles/skeleton';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { SkeletonProvider } from './Skeleton.context';
import { defaultProps } from './Skeleton.props';

export const Skeleton = withComponent({
    name: 'Skeleton',
    defaultProps,
    styles,
    setup(instance) {
        const skeleton = useSkeleton(instance.inProps);

        return skeleton;
    },
    render(instance) {
        const { id, props, ptmi, cx, sx } = instance;

        const style = { width: props.size ?? props.width, height: props.size ?? props.height, borderRadius: props.borderRadius };

        const rootProps = mergeProps(
            {
                id,
                className: cx('root'),
                style: { ...style, ...sx('root') },
                'aria-hidden': true
            },
            ptmi('root')
        );

        return (
            <SkeletonProvider value={instance}>
                <Component instance={instance} attrs={rootProps} children={props.children} />
            </SkeletonProvider>
        );
    }
});
