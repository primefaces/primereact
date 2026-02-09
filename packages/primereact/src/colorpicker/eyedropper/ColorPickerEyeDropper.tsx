'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useColorPickerContext } from '../ColorPicker.context';
import { defaultEyeDropperProps } from './ColorPickerEyeDropper.props';

export const ColorPickerEyeDropper = withComponent({
    name: 'ColorPicker.EyeDropper',
    defaultProps: defaultEyeDropperProps,
    setup() {
        const colorpicker = useColorPickerContext();

        return { colorpicker };
    },
    render(instance) {
        const { props, ptmi, colorpicker } = instance;

        const rootProps = mergeProps(
            {
                className: colorpicker?.cx('eyeDropper'),
                onClick: colorpicker?.openEyeDropper,
                disabled: props.disabled || colorpicker?.props.disabled
            },
            colorpicker?.ptm('eyeDropper'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children} />;
    }
});
