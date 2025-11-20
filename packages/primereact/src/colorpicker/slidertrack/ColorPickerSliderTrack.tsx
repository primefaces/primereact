'use client';
import { Component } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { useColorPickerContext } from '../ColorPicker.context';
import { useColorPickerSliderContext } from '../slider/ColorPickerSlider.context';
import { defaultSliderTrackProps } from './ColorPickerSliderTrack.props';

export const ColorPickerSliderTrack = withComponent({
    name: 'ColorPickerSliderTrack',
    defaultProps: defaultSliderTrackProps,
    setup() {
        const colorpicker = useColorPickerContext();
        const colorpickerslider = useColorPickerSliderContext();

        return { colorpicker, colorpickerslider };
    },
    render(instance) {
        const { props, ptmi, colorpicker, colorpickerslider } = instance;

        const rootProps = mergeProps(
            {
                className: colorpicker?.cx('slider-track'),
                'data-orientation': colorpickerslider?.props.orientation,
                'data-channel': colorpickerslider?.props.channel
            },
            colorpicker?.ptm('slider-track'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children} />;
    }
});
