'use client';
import { Component } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { useColorPickerContext } from '../ColorPicker.context';
import { defaultTransparencyGridProps } from './ColorPickerTransparencyGrid.props';

export const ColorPickerTransparencyGrid = withComponent({
    name: 'ColorPickerTransparencyGrid',
    defaultProps: defaultTransparencyGridProps,
    setup() {
        const colorpicker = useColorPickerContext();

        return { colorpicker };
    },
    render(instance) {
        const { props, ptmi, colorpicker } = instance;

        const rootProps = mergeProps(
            {
                className: colorpicker?.cx('transparency-grid')
            },
            colorpicker?.ptm('transparency-grid'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children} />;
    }
});
