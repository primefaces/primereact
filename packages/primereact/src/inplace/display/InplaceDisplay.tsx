'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useInplaceContext } from '../Inplace.context';
import { defaultDisplayProps } from './InplaceDisplay.props';

export const InplaceDisplay = withComponent({
    name: 'Inplace.Display',
    defaultProps: defaultDisplayProps,
    setup() {
        const inplace = useInplaceContext();

        return { inplace };
    },
    render(instance) {
        const { props, ptmi, inplace } = instance;

        const rootProps = mergeProps(
            {
                tabIndex: 0,
                className: inplace?.cx('display'),
                onClick: inplace?.open,
                onKeyDown: inplace?.onDisplayKeyDown,
                [inplace?.state.active ? 'data-active' : 'data-inactive']: '',
                ...(inplace?.props.disabled && { 'data-disabled': '' })
            },
            inplace?.ptm('display'),
            ptmi('root')
        );

        return <Component pIf={!inplace?.state.active} instance={instance} attrs={rootProps} children={props.children} />;
    }
});
