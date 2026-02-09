'use client';
import { Component, withComponent } from '@primereact/core/component';
import { cn, mergeProps, resolve } from '@primeuix/utils';
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

        const thumbValue = compare?.slider?.getThumbValue?.(0);
        const tabIndex = compare?.props.disabled ? -1 : (compare?.props.tabIndex ?? 0);

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

        const createInputElement = () => {
            const inputProps = mergeProps(
                {
                    id: compare?.props.inputId,
                    type: 'range',
                    style: compare?.props.inputStyle,
                    className: cn(compare?.cx('input'), compare?.props.inputClassName),
                    min: compare?.props.min,
                    max: compare?.props.max,
                    step: compare?.props.step,
                    value: compare?.state.value ?? compare?.props.min ?? 0,
                    name: compare?.props.name,
                    tabIndex: tabIndex,
                    disabled: compare?.props.disabled,
                    readOnly: compare?.props.readOnly,
                    'aria-valuemin': compare?.props.min,
                    'aria-valuemax': compare?.props.max,
                    'aria-valuenow': thumbValue,
                    'aria-labelledby': compare?.props.ariaLabelledby,
                    'aria-label': compare?.props.ariaLabel,
                    'aria-orientation': compare?.props.orientation,
                    onFocus: (event: React.FocusEvent<HTMLInputElement>) => {
                        compare?.props.onFocus?.(event);
                        compare?.slider?.onInputFocus?.(event, 0);
                    },
                    onBlur: (event: React.FocusEvent<HTMLInputElement>) => {
                        compare?.props.onBlur?.(event);
                        compare?.slider?.onInputBlur?.(event, 0);
                    },
                    onChange: compare?.slider?.onInputChange ? (event: React.ChangeEvent<HTMLInputElement>) => compare?.slider.onInputChange(event, 0) : undefined,
                    onInput: compare?.slider?.onInputChange ? (event: React.FormEvent<HTMLInputElement>) => compare?.slider.onInputChange(event as React.ChangeEvent<HTMLInputElement>, 0) : undefined
                },
                compare?.ptm('input')
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
