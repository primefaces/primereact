import { withHeadless } from '@primereact/core/headless';
import type { ColorInstance } from '@primereact/types/shared/colorpicker';
import { useColorPickerContext } from 'primereact/colorpicker';
import * as React from 'react';
import { getInputChannelRange, getInputChannelValue, parseColor } from '../colorManager';
import { defaultProps } from './useColorPickerInput.props';

const HEX_REGEX = /^[0-9a-fA-F]{3,8}$/;

export function isValidHex(value: string) {
    return HEX_REGEX.test(value);
}

export function prefixHex(value: string) {
    if (value.startsWith('#')) return value;

    if (isValidHex(value)) return `#${value}`;

    return value;
}

export const useColorPickerInput = withHeadless({
    name: 'useColorPickerInput',
    defaultProps,
    setup({ props }) {
        const { channel = 'hex' } = props;
        const colorpicker = useColorPickerContext();

        const colorValue = colorpicker?.state.value as ColorInstance;
        const colorFormat = colorpicker?.props.format || 'hsba';

        const channelRange = getInputChannelRange(colorValue, channel);
        const channelValue = getInputChannelValue(colorValue, channel, colorFormat);
        const state = {};

        const isCssChannel = channel === 'hex' || channel === 'css';

        const changeValue = (value: string | number) => {
            if (colorpicker?.props.disabled) return;

            let newColor: ColorInstance;

            if (isCssChannel) {
                try {
                    newColor = parseColor(channel === 'hex' ? prefixHex(String(value)) : String(value));
                } catch {
                    newColor = colorValue;
                }
            } else {
                let current = colorValue;

                if (channel !== 'alpha') {
                    current = current.toFormat(colorFormat);
                }

                const parsed = Number.parseFloat(String(value));
                const valueAsNumber = Number.isNaN(parsed) ? current.getChannelValue(channel) : parsed;

                newColor = current.withChannelValue(channel, valueAsNumber);
            }

            colorpicker?.syncChannelInputs(newColor);

            colorpicker?.setValue([
                newColor,
                {
                    color: newColor.toString(colorpicker.props.format || 'css'),
                    value: newColor
                }
            ]);
        };

        const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
            const value = isCssChannel ? event.currentTarget.value : event.currentTarget.valueAsNumber;

            changeValue(value);
        };

        const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
            if (event.defaultPrevented) return;

            if (event.key === 'Enter') {
                const value = isCssChannel ? event.currentTarget.value : event.currentTarget.valueAsNumber;

                changeValue(value);
                event.preventDefault();
            }
        };

        return {
            state,
            channelValue,
            channelRange,
            type: (isCssChannel ? 'text' : 'number') as 'text' | 'number',
            handleBlur,
            handleKeyDown
        };
    }
});
