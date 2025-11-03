'use client';
import { Component } from '@primereact/core/component';
import { useColorPickerInput } from '@primereact/headless/colorpicker/input';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import { InputText } from 'primereact/inputtext';
import * as React from 'react';
import { useColorPickerContext } from '../ColorPicker.context';
import { ColorPickerInputProvider } from './ColorPickerInput.context';
import { defaultInputProps } from './ColorPickerInput.props';

export const ColorPickerInput = withComponent({
    name: 'ColorPickerInput',
    defaultProps: defaultInputProps,
    setup(instance) {
        const colorpicker = useColorPickerContext();
        const colorpickerinput = useColorPickerInput(instance.inProps);

        return { colorpicker, ...colorpickerinput };
    },
    render(instance) {
        const { props, ptmi, colorpicker, type, channelRange, channelValue, handleBlur, handleKeyDown } = instance;

        const rootProps = mergeProps(
            {
                id: props.inputId,
                className: colorpicker?.cx('input'),
                type,
                spellCheck: false,
                autoComplete: 'off',
                defaultValue: channelValue,
                min: channelRange?.min,
                max: channelRange?.max,
                step: channelRange?.step,
                onBlur: handleBlur,
                onKeyDown: handleKeyDown,
                'data-channel': props.channel,
                'aria-label': props.channel
            },
            colorpicker?.ptm('input'),
            ptmi('root')
        );

        return (
            <ColorPickerInputProvider value={instance}>
                {/* @ts-expect-error: InputText expects a type prop, but we are using it as a text input. */}
                <Component as={InputText} instance={instance} attrs={{ ...props, ...rootProps }} pt={colorpicker?.ptm('input')} children={props.children} ref={colorpicker?.registerInputEl} />
            </ColorPickerInputProvider>
        );
    }
});
