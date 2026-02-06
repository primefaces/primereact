'use client';
import { Component, withComponent } from '@primereact/core/component';
import { cn, mergeProps, resolve } from '@primeuix/utils';
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
                'data-orientation': compare?.props.orientation,
                ...(compare?.props.disabled && { 'data-disabled': '' }),
                ...(compare?.props.invalid && { 'data-invalid': '' }),
                ...(compare?.state.isDragging && { 'data-dragging': '' })
            },
            compare?.ptm('handle'),
            ptmi('root')
        );

        const createInputElement = () => {
            const inputProps = mergeProps(
                {
                    id: compare?.props.inputId,
                    type: 'range',
                    min: compare?.props.min,
                    max: compare?.props.max,
                    step: compare?.props.step,
                    style: compare?.sx('input'),
                    className: cn(compare?.cx('input'), props.inputClassName),
                    value: compare?.state.value,
                    tabIndex: compare?.props.tabIndex,
                    disabled: compare?.props.disabled,
                    readOnly: compare?.props.readOnly,
                    'aria-labelledby': compare?.props.ariaLabelledby,
                    'aria-label': compare?.props.ariaLabel,
                    'aria-valuemin': compare?.props.min,
                    'aria-valuemax': compare?.props.max,
                    'aria-valuenow': compare?.state.value,
                    onFocus: compare?.props.onFocus,
                    onBlur: compare?.props.onBlur,
                    onChange: !compare?.props.readOnly ? compare?.onInputChange : undefined
                },
                compare?.ptm('input'),
                ptmi('input')
            );

            return <input {...inputProps} />;
        };

        const input = createInputElement();

        return (
            <Component instance={instance} attrs={rootProps}>
                {input}
                {resolve(props.children, instance)}
            </Component>
        );
    }
});
