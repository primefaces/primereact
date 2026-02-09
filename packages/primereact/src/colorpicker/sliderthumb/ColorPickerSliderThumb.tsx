'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { SliderThumb } from 'primereact/slider';
import * as React from 'react';
import { useColorPickerContext } from '../ColorPicker.context';
import { defaultSliderThumbProps } from './ColorPickerSliderThumb.props';

export const ColorPickerSliderThumb = withComponent({
    name: 'ColorPicker.SliderThumb',
    defaultProps: defaultSliderThumbProps,
    setup() {
        const colorpicker = useColorPickerContext();

        return { colorpicker };
    },
    render(instance) {
        const { props, ptmi, colorpicker } = instance;

        const disabled = !!colorpicker?.props.disabled;

        const rootProps = mergeProps(
            {
                className: colorpicker?.cx('slider-thumb', { disabled }),
                role: 'slider',
                tabIndex: disabled ? -1 : 0,
                'aria-disabled': disabled
            },
            colorpicker?.ptm('slider-thumb'),
            ptmi('root')
        );

        return <Component as={SliderThumb} instance={instance} attrs={rootProps} children={props.children} />;
    }
});
