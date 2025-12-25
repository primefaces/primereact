'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { ColorPickerAreaBackground } from '../areabackground/ColorPickerAreaBackground';
import { ColorPickerAreaThumb } from '../areathumb/ColorPickerAreaThumb';
import { useColorPickerContext } from '../ColorPicker.context';
import { defaultAreaProps } from './ColorPickerArea.props';

export const ColorPickerArea = withComponent({
    name: 'ColorPickerArea',
    defaultProps: defaultAreaProps,
    setup() {
        const colorpicker = useColorPickerContext();

        return { colorpicker };
    },
    render(instance) {
        const { props, ptmi, colorpicker } = instance;

        const rootProps = mergeProps(
            {
                className: colorpicker?.cx('area'),
                onPointerDown: colorpicker?.handleAreaPointerDown,
                onPointerMove: colorpicker?.handleAreaPointerMove,
                onPointerUp: colorpicker?.handleAreaPointerUp,
                style: { ...colorpicker?.areaStyles, ...colorpicker?.sx('area') }
            },
            colorpicker?.ptm('area'),
            ptmi('root')
        );

        return (
            <Component
                instance={instance}
                attrs={rootProps}
                children={
                    props.children ?? (
                        <>
                            <ColorPickerAreaBackground />
                            <ColorPickerAreaThumb />
                        </>
                    )
                }
            />
        );
    }
});
