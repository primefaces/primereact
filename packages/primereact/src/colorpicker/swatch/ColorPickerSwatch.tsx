'use client';
import { Component } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { useColorPickerContext } from '../ColorPicker.context';
import { ColorPickerSwatchBackground } from '../swatchbackground';
import { ColorPickerTransparencyGrid } from '../transparencygrid';
import { defaultSwatchProps } from './ColorPickerSwatch.props';

export const ColorPickerSwatch = withComponent({
    name: 'ColorPickerSwatch',
    defaultProps: defaultSwatchProps,
    setup() {
        const colorpicker = useColorPickerContext();

        return { colorpicker };
    },
    render(instance) {
        const { props, ptmi, colorpicker } = instance;

        const rootProps = mergeProps(
            {
                className: colorpicker?.cx('swatch'),
                style: { ...colorpicker?.swatchStyles, ...colorpicker?.sx('swatch') }
            },
            colorpicker?.ptm('swatch'),
            ptmi('root')
        );

        return (
            <Component
                instance={instance}
                attrs={rootProps}
                children={
                    props.children ?? (
                        <>
                            <ColorPickerTransparencyGrid />
                            <ColorPickerSwatchBackground />
                        </>
                    )
                }
            />
        );
    }
});
