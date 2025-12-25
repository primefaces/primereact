'use client';
import { Component, withComponent } from '@primereact/core/component';
import { useColorPicker } from '@primereact/headless/colorpicker';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { ColorPickerProvider } from '../ColorPicker.context';
import { defaultRootProps } from './ColorPickerRoot.props';

export const ColorPickerRoot = withComponent({
    name: 'ColorPickerRoot',
    defaultProps: defaultRootProps,
    setup(instance) {
        const colorpicker = useColorPicker(instance.inProps);

        return colorpicker;
    },
    render(instance) {
        const { props, ptmi } = instance;

        const rootProps = mergeProps(ptmi('root'));

        return (
            <ColorPickerProvider value={instance}>
                <Component instance={instance} attrs={rootProps} children={props.children} as={React.Fragment} />
            </ColorPickerProvider>
        );
    }
});
