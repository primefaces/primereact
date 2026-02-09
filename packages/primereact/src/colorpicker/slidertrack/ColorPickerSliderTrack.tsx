'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { SliderTrack } from 'primereact/slider';
import * as React from 'react';
import { useColorPickerContext } from '../ColorPicker.context';
import { defaultSliderTrackProps } from './ColorPickerSliderTrack.props';

export const ColorPickerSliderTrack = withComponent({
    name: 'ColorPicker.SliderTrack',
    defaultProps: defaultSliderTrackProps,
    setup() {
        const colorpicker = useColorPickerContext();

        return { colorpicker };
    },
    render(instance) {
        const { props, ptmi, colorpicker } = instance;

        const rootProps = mergeProps(
            {
                className: colorpicker?.cx('slider-track')
            },
            colorpicker?.ptm('slider-track'),
            ptmi('root')
        );

        return <Component as={SliderTrack} instance={instance} attrs={rootProps} children={props.children} />;
    }
});
