'use client';
import { Component } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { useColorPickerContext } from '../ColorPicker.context';
import { useColorPickerSliderContext } from '../slider/ColorPickerSlider.context';
import { defaultSliderThumbProps } from './ColorPickerSliderThumb.props';

export const ColorPickerSliderThumb = withComponent({
    name: 'ColorPickerSliderThumb',
    defaultProps: defaultSliderThumbProps,
    setup() {
        const colorpicker = useColorPickerContext();
        const colorpickerslider = useColorPickerSliderContext();

        return { colorpicker, colorpickerslider };
    },
    render(instance) {
        const { props, ptmi, colorpicker, colorpickerslider } = instance;

        const rootProps = mergeProps(
            {
                className: colorpicker?.cx('slider-thumb'),
                role: 'slider',
                tabIndex: 0,
                onKeyDown: colorpickerslider?.handleSliderKeyDown,
                'data-orientation': colorpickerslider?.props.orientation,
                'data-channel': colorpickerslider?.props.channel,
                'aria-orientation': colorpickerslider?.props.orientation,
                'aria-disabled': !!(colorpickerslider?.props.disabled || colorpicker?.props.disabled),
                'aria-label': `${colorpickerslider?.props.channel} slider`,
                'aria-valuemin': colorpickerslider?.channelRange?.min ?? 0,
                'aria-valuemax': colorpickerslider?.channelRange?.max ?? 100,
                'aria-valuenow': colorpickerslider?.channelValue,
                'aria-valuetext': `${colorpickerslider?.props.channel} ${colorpickerslider?.channelValue}`
            },
            colorpicker?.ptm('slider-thumb'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children} />;
    }
});
