'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useColorPickerContext } from '../ColorPicker.context';
import { ColorPickerInputProvider } from './ColorPickerInput.context';
import { defaultInputProps } from './ColorPickerInput.props';

export const ColorPickerInput = withComponent({
    name: 'ColorPicker.Input',
    defaultProps: defaultInputProps,
    setup() {
        const colorpicker = useColorPickerContext();

        return { colorpicker };
    },
    render(instance) {
        const { props, ptmi, colorpicker } = instance;
        const { as, ...restProps } = props;
        const inputProps = colorpicker?.getInputProps?.({
            channel: props.channel,
            disabled: props.disabled
        });

        const [inputValue, setInputValue] = React.useState<string | number | undefined>(inputProps?.channelValue);

        React.useEffect(() => {
            setInputValue(inputProps?.channelValue);
        }, [inputProps?.channelValue]);

        const rootProps = mergeProps(
            restProps,
            {
                id: props.inputId,
                className: colorpicker?.cx('input'),
                type: inputProps?.type,
                spellCheck: false,
                autoComplete: 'off',
                value: inputValue,
                min: inputProps?.channelRange?.min,
                max: inputProps?.channelRange?.max,
                step: inputProps?.channelRange?.step,
                onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
                    setInputValue(event.currentTarget.value);
                    props.onChange?.(event);
                },
                onBlur: inputProps?.handleBlur,
                onKeyDown: inputProps?.handleKeyDown,
                'data-channel': props.channel,
                'aria-label': props.channel,
                disabled: props.disabled || colorpicker?.props.disabled
            },
            colorpicker?.ptm('input'),
            ptmi('root')
        );

        return (
            <ColorPickerInputProvider value={instance}>
                <Component as={as} instance={instance} attrs={rootProps} children={props.children} />
            </ColorPickerInputProvider>
        );
    }
});
