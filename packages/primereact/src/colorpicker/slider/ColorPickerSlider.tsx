'use client';
import { Component } from '@primereact/core/component';
import { useColorPickerSlider } from '@primereact/headless/colorpicker/slider';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { useColorPickerContext } from '../ColorPicker.context';
import { ColorPickerSliderThumb } from '../sliderthumb/ColorPickerSliderThumb';
import { ColorPickerSliderTrack } from '../slidertrack/ColorPickerSliderTrack';
import { ColorPickerTransparencyGrid } from '../transparencygrid';
import { ColorPickerSliderProvider } from './ColorPickerSlider.context';
import { defaultSliderProps } from './ColorPickerSlider.props';

export const ColorPickerSlider = withComponent({
    name: 'ColorPickerSlider',
    defaultProps: defaultSliderProps,
    setup(instance) {
        const colorpicker = useColorPickerContext();
        const colorpickerslider = useColorPickerSlider(instance.inProps);

        return { ...colorpickerslider, colorpicker };
    },
    render(instance) {
        const { props, ptmi, colorpicker, handleSliderPointerDown, handleSliderPointerMove, handleSliderPointerUp, sliderStyle } = instance;

        const rootProps = mergeProps(
            {
                className: colorpicker?.cx('slider', { orientation: props.orientation }),
                onPointerDown: handleSliderPointerDown,
                onPointerMove: handleSliderPointerMove,
                onPointerUp: handleSliderPointerUp,
                style: { ...sliderStyle, ...colorpicker?.sx('slider') },
                'data-orientation': props.orientation,
                'data-channel': props.channel
            },
            colorpicker?.ptm('slider'),
            ptmi('root')
        );

        return (
            <ColorPickerSliderProvider value={instance}>
                <Component
                    instance={instance}
                    attrs={rootProps}
                    children={
                        props.children ?? (
                            <>
                                <ColorPickerTransparencyGrid />
                                <ColorPickerSliderTrack />
                                <ColorPickerSliderThumb />
                            </>
                        )
                    }
                />
            </ColorPickerSliderProvider>
        );
    }
});
