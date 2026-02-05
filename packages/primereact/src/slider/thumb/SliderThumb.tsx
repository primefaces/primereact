'use client';
import { Component, withComponent } from '@primereact/core/component';
import { cn, mergeProps, resolve } from '@primeuix/utils';
import * as React from 'react';
import { useSliderContext } from '../Slider.context';
import { defaultThumbProps } from './SliderThumb.props';

export const SliderThumb = withComponent({
    name: 'Slider.Thumb',
    defaultProps: defaultThumbProps,
    setup(instance) {
        const slider = useSliderContext();

        return { slider, thumbIndex: instance.props.index ?? 0 };
    },
    render(instance) {
        const { props, ptmi, slider, thumbIndex } = instance;
        const thumbValue = slider?.getThumbValue?.(thumbIndex);
        const disabled = !!(slider?.props.disabled || props.disabled);
        const readOnly = !!(slider?.props.readOnly || props.readOnly);
        const invalid = !!(slider?.props.invalid || props.invalid);
        const tabIndex = disabled ? -1 : (props.tabIndex ?? 0);

        const rootProps = mergeProps(
            {
                className: slider?.cx('thumb'),
                style: { ...slider?.getThumbStyle?.(thumbIndex), ...slider?.sx('thumb') },
                onPointerDown: (event: React.PointerEvent<HTMLDivElement>) => {
                    if (disabled || readOnly) return;

                    slider?.onThumbPointerDown?.(event, thumbIndex);
                },
                'data-index': thumbIndex,
                'data-orientation': slider?.props.orientation,
                ...(disabled && { 'data-disabled': '' }),
                ...(invalid && { 'data-invalid': '' }),
                ...(slider?.state.isDragging && { 'data-dragging': '' })
            },
            slider?.ptm('thumb'),
            ptmi('root')
        );

        const createInputElement = () => {
            const inputProps = mergeProps(
                {
                    id: props.inputId,
                    type: 'range',
                    style: props.inputStyle,
                    className: cn(slider?.cx('input'), props.inputClassName),
                    min: slider?.props.min,
                    max: slider?.props.max,
                    step: slider?.props.step,
                    value: thumbValue ?? slider?.props.min ?? 0,
                    name: props.name,
                    tabIndex: tabIndex,
                    disabled: disabled,
                    readOnly: readOnly,
                    'aria-valuemin': slider?.props.min,
                    'aria-valuemax': slider?.props.max,
                    'aria-valuenow': thumbValue,
                    'aria-labelledby': props.ariaLabelledby,
                    'aria-label': props.ariaLabel,
                    'aria-orientation': slider?.props.orientation,
                    onFocus: (event: React.FocusEvent<HTMLInputElement>) => {
                        props.onFocus?.(event);
                        slider?.onInputFocus?.(event, thumbIndex);
                    },
                    onBlur: (event: React.FocusEvent<HTMLInputElement>) => {
                        props.onBlur?.(event);
                        slider?.onInputBlur?.(event, thumbIndex);
                    },
                    onChange: slider?.onInputChange ? (event: React.ChangeEvent<HTMLInputElement>) => slider.onInputChange(event, thumbIndex) : undefined,
                    onInput: slider?.onInputChange ? (event: React.FormEvent<HTMLInputElement>) => slider.onInputChange(event as React.ChangeEvent<HTMLInputElement>, thumbIndex) : undefined
                },
                slider?.ptm('input')
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
