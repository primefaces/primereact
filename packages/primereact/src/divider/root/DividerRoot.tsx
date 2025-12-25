'use client';
import { Component, withComponent } from '@primereact/core/component';
import { useDivider } from '@primereact/headless/divider';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { DividerProvider } from '../Divider.context';
import { defaultRootProps } from './DividerRoot.props';

export const DividerRoot = withComponent({
    name: 'DividerRoot',
    defaultProps: defaultRootProps,
    setup(instance) {
        const divider = useDivider(instance.inProps);

        return divider;
    },
    render(instance) {
        const { id, props, ptmi, cx, sx } = instance;

        const rootProps = mergeProps(
            {
                id,
                className: cx('root'),
                style: sx('root'),
                role: 'separator',
                'aria-orientation': props.orientation
            },
            ptmi('root')
        );

        return (
            <DividerProvider value={instance}>
                <Component instance={instance} attrs={rootProps} children={props.children} />
            </DividerProvider>
        );
    }
});
