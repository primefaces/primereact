'use client';
import { Component } from '@primereact/core/component';
import { useFluid } from '@primereact/headless/fluid';
import { styles } from '@primereact/styles/fluid';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { FluidProvider } from './Fluid.context';
import { defaultProps } from './Fluid.props';

export const Fluid = withComponent({
    name: 'Fluid',
    defaultProps,
    styles,
    setup(instance) {
        const fluid = useFluid(instance.inProps);

        return fluid;
    },
    render(instance) {
        const { id, props, ptmi, cx } = instance;

        const rootProps = mergeProps(
            {
                id,
                className: cx('root')
            },
            ptmi('root')
        );

        return (
            <FluidProvider value={instance}>
                <Component instance={instance} attrs={rootProps} children={props.children} />
            </FluidProvider>
        );
    }
});
