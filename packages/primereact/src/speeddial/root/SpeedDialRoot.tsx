'use client';
import { Component, withComponent } from '@primereact/core/component';
import { useSpeedDial } from '@primereact/headless/speeddial';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { SpeedDialProvider } from '../SpeedDial.context';
import { defaultRootProps } from './SpeedDialRoot.props';

export const SpeedDialRoot = withComponent({
    name: 'SpeedDialRoot',
    defaultProps: defaultRootProps,
    setup(instance) {
        const speeddial = useSpeedDial(instance.inProps);

        return speeddial;
    },
    render(instance) {
        const { id, props, ptmi, cx, sx } = instance;

        const rootProps = mergeProps(
            {
                id,
                className: cx('root'),
                style: sx('root')
            },
            ptmi('root')
        );

        return (
            <SpeedDialProvider value={instance}>
                <Component instance={instance} attrs={rootProps} children={props.children} />
            </SpeedDialProvider>
        );
    }
});
