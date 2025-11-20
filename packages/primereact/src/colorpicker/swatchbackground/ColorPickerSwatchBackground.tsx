'use client';
import { Component } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { useColorPickerContext } from '../ColorPicker.context';
import { defaultSwatchBackgroundProps } from './ColorPickerSwatchBackground.props';

export const ColorPickerSwatchBackground = withComponent({
    name: 'ColorPickerSwatchBackground',
    defaultProps: defaultSwatchBackgroundProps,
    setup() {
        const colorpicker = useColorPickerContext();

        return { colorpicker };
    },
    render(instance) {
        const { props, ptmi, colorpicker } = instance;

        const rootProps = mergeProps(
            {
                className: colorpicker?.cx('swatchBackground')
            },
            colorpicker?.ptm('swatchBackground'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children} />;
    }
});
