'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { SliderRoot } from 'primereact/slider';
import * as React from 'react';
import { useColorPickerContext } from '../ColorPicker.context';
import { defaultSliderProps } from './ColorPickerSlider.props';

export const ColorPickerSlider = withComponent({
    name: 'ColorPicker.Slider',
    defaultProps: defaultSliderProps,
    setup() {
        const colorpicker = useColorPickerContext();

        return { colorpicker };
    },
    render(instance) {
        const { props, ptmi, colorpicker } = instance;
        const sliderProps = colorpicker?.getSliderProps?.({
            channel: props.channel,
            orientation: props.orientation,
            disabled: props.disabled
        });

        const rootProps = mergeProps(
            {
                className: colorpicker?.cx('slider', { orientation: props.orientation }),
                style: { ...colorpicker?.sx('slider'), ...sliderProps?.sliderStyle },
                'data-orientation': props.orientation,
                'data-channel': props.channel,
                orientation: props.orientation,
                value: sliderProps?.value,
                min: sliderProps?.min,
                max: sliderProps?.max,
                step: sliderProps?.step,
                disabled: sliderProps?.disabled,
                onValueChange: sliderProps?.onValueChange,
                onValueChangeEnd: sliderProps?.onValueChangeEnd
            },
            colorpicker?.ptm('slider'),
            ptmi('root')
        );

        return <Component as={SliderRoot} instance={instance} attrs={rootProps} children={props.children} />;
    }
});
