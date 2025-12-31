'use client';
import { Component, withComponent } from '@primereact/core/component';
import { EyeDropperIcon } from '@primereact/icons/eyedropper';
import { mergeProps } from '@primeuix/utils';
import { Button } from 'primereact/button';
import * as React from 'react';
import { useColorPickerContext } from '../ColorPicker.context';
import { defaultEyeDropperProps } from './ColorPickerEyeDropper.props';

export const ColorPickerEyeDropper = withComponent({
    name: 'ColorPickerEyeDropper',
    defaultProps: defaultEyeDropperProps,
    setup() {
        const colorpicker = useColorPickerContext();

        return { colorpicker };
    },
    render(instance) {
        const { props, ptmi, colorpicker } = instance;

        const rootProps = mergeProps(
            {
                type: 'button',
                className: colorpicker?.cx('eyeDropper'),
                onClick: colorpicker?.openEyeDropper,
                disabled: props.disabled || colorpicker?.props.disabled
            },
            colorpicker?.ptm('eyeDropper'),
            ptmi('root')
        );

        const createIconElement = () => {
            return <EyeDropperIcon pt={colorpicker?.ptm('eyeDropperIcon')} />;
        };

        const icon = createIconElement();

        return null;

        // @ts-expect-error: Button expects a type prop, but we are using it as a close button.
        return <Component as={Button} instance={instance} attrs={{ ...props, ...rootProps }} pt={colorpicker?.ptm('eyeDropper')} children={props.children ?? icon} />;
    }
});
