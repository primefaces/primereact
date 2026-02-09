'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useCompareContext } from '../Compare.context';
import { defaultHandleProps } from './CompareHandle.props';

export const CompareHandle = withComponent({
    name: 'Compare.Handle',
    defaultProps: defaultHandleProps,
    setup() {
        const compare = useCompareContext();

        return { compare };
    },
    render(instance) {
        const { props, ptmi, compare } = instance;

        const rootProps = mergeProps(
            {
                tabIndex: -1,
                className: compare?.cx('handle', { disabled: compare?.props.disabled }),
                style: {
                    ...compare?.getHandleStyle?.(),
                    ...compare?.sx('handle')
                },
                onPointerDown: compare?.onThumbPointerDown,
                'data-orientation': compare?.props.orientation,
                ...(compare?.props.disabled && { 'data-disabled': '' }),
                ...(compare?.props.invalid && { 'data-invalid': '' }),
                ...(compare?.state.isDragging && { 'data-dragging': '' })
            },
            compare?.ptm('handle'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children} />;
    }
});
