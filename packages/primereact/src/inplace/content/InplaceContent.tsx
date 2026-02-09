'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useInplaceContext } from '../Inplace.context';
import { defaultContentProps } from './InplaceContent.props';

export const InplaceContent = withComponent({
    name: 'Inplace.Content',
    defaultProps: defaultContentProps,
    setup() {
        const inplace = useInplaceContext();

        return { inplace };
    },
    render(instance) {
        const { props, ptmi, inplace } = instance;

        const rootProps = mergeProps(
            {
                className: inplace?.cx('content'),
                ...(inplace?.state.active && { 'data-active': '' }),
                ...(!inplace?.state.active && { 'data-inactive': '' }),
                ...(inplace?.props.disabled && { 'data-disabled': '' })
            },
            inplace?.ptm('content'),
            ptmi('root')
        );

        return <Component pIf={inplace?.state.active} instance={instance} attrs={rootProps} children={props.children} />;
    }
});
