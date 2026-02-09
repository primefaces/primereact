'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useInplaceContext } from '../Inplace.context';
import { defaultCloseProps } from './InplaceClose.props';

// @todo
export const InplaceClose = withComponent({
    name: 'Inplace.Close',
    defaultProps: defaultCloseProps,
    setup() {
        const inplace = useInplaceContext();

        return { inplace };
    },
    render(instance) {
        const { props, ptmi, inplace } = instance;

        const rootProps = mergeProps(
            {
                onClick: inplace?.close,
                [inplace?.state.active ? 'data-active' : 'data-inactive']: '',
                ...(inplace?.props.disabled && { 'data-disabled': '' })
            },
            inplace?.ptm('close'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children} />;
    }
});
