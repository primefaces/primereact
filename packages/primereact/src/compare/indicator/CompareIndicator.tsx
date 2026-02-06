'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps, resolve } from '@primeuix/utils';
import * as React from 'react';
import { useCompareContext } from '../Compare.context';
import { defaultIndicatorProps } from './CompareIndicator.props';

export const CompareIndicator = withComponent({
    name: 'Compare.Indicator',
    defaultProps: defaultIndicatorProps,
    setup() {
        const compare = useCompareContext();

        return { compare };
    },
    render(instance) {
        const { props, ptmi, compare } = instance;

        const rootProps = mergeProps(
            {
                className: compare?.cx('indicator', { disabled: compare?.props.disabled }),
                style: { ...compare?.sx('indicator') },
                'data-orientation': compare?.props.orientation,
                ...(compare?.props.disabled && { 'data-disabled': '' }),
                ...(compare?.props.invalid && { 'data-invalid': '' }),
                ...(compare?.state.isDragging && { 'data-dragging': '' })
            },
            compare?.ptm('indicator'),
            ptmi('root')
        );

        return (
            <Component instance={instance} attrs={rootProps}>
                {resolve(props.children, instance)}
            </Component>
        );
    }
});
