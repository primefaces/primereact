'use client';
import { Component, withComponent } from '@primereact/core/component';
import { useColorPickerInput } from '@primereact/headless/colorpicker/input';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useColorPickerContext } from '../ColorPicker.context';
import { ColorPickerInputProvider } from './ColorPickerInput.context';
import { defaultInputProps } from './ColorPickerInput.props';

export const ColorPickerInput = withComponent({
    name: 'ColorPicker.Input',
    defaultProps: defaultInputProps,
    setup(instance) {
        const colorpicker = useColorPickerContext();
        const colorpickerinput = useColorPickerInput(instance.inProps);

        return { colorpicker, ...colorpickerinput };
    },
    render(instance) {
        const { props, ptmi, colorpicker, type, channelRange, channelValue, handleBlur, handleKeyDown } = instance;
        const { as, ...restProps } = props;

        const rootProps = mergeProps(
            restProps,
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
                'aria-label': props.channel,
                disabled: props.disabled || colorpicker?.props.disabled
            },
            colorpicker?.ptm('input'),
            ptmi('root')
        );

        return (
            <ColorPickerInputProvider value={instance}>
                <Component ref={colorpicker?.registerInputEl} as={as} instance={instance} attrs={rootProps} children={props.children} />
            </ColorPickerInputProvider>
        );
    }
});
