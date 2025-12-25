'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useColorPickerContext } from '../ColorPicker.context';
import { defaultAreaBackgroundProps } from './ColorPickerAreaBackground.props';

export const ColorPickerAreaBackground = withComponent({
    name: 'ColorPickerAreaBackground',
    defaultProps: defaultAreaBackgroundProps,
    setup() {
        const colorpicker = useColorPickerContext();

        return { colorpicker };
    },
    render(instance) {
        const { props, ptmi, colorpicker } = instance;

        const rootProps = mergeProps(
            {
                className: colorpicker?.cx('areaBackground')
            },
            colorpicker?.ptm('areaBackground'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children} />;
    }
});
