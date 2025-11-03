import { withHeadless } from '@primereact/core/headless';
import { useColorPickerContext } from 'primereact/colorpicker';
import * as React from 'react';
import { getChannelColor, getChannelGradient } from '../colorManager';
import { defaultProps } from './useColorPickerSlider.props';

export const useColorPickerSlider = withHeadless({
    name: 'useColorPickerSlider',
    defaultProps,
    setup({ props }) {
        const { channel = 'hue', orientation, disabled } = props;
        const colorpicker = useColorPickerContext();
        const [isSliderDragging, setIsSliderDragging] = React.useState(false);

        const state = {
            isSliderDragging
        };

        const workingValue = colorpicker?.state.value?.getChannels().includes(channel)
            ? colorpicker?.state.value
            : colorpicker?.areaValue.getChannels().includes(channel)
              ? colorpicker?.areaValue
              : colorpicker?.state.value?.toFormat(colorpicker?.props.format || 'hsba');

        const moveSlider = (x: number, y: number, element: HTMLElement) => {
            if (!element || disabled || colorpicker?.props.disabled) return;

            const rect = element.getBoundingClientRect();
            const rel = orientation === 'horizontal' ? (x - rect.left) / rect.width : (y - rect.top) / rect.height;
            const clamped = Math.max(0, Math.min(1, rel));

            const channelRange = workingValue!.getChannelRange(channel);
            const targetValue = clamped * (channelRange.max - channelRange.min) + channelRange.min;

            const currentValue = workingValue!.getChannelValue(channel);
            const delta = targetValue - currentValue;

            const newColor = workingValue!.incChannelValue(channel, delta);

            colorpicker?.setValue([
                newColor,
                {
                    color: newColor.toString(colorpicker?.props.format || 'css'),
                    value: newColor
                }
            ]);

            colorpicker?.syncChannelInputs(newColor);
        };

        const handleSliderPointerDown = (event: PointerEvent) => {
            const element = event.currentTarget as HTMLElement;

            if (!element) return;

            element.setPointerCapture(event.pointerId);
            setIsSliderDragging(true);
            moveSlider(event.clientX, event.clientY, element);
        };

        const handleSliderPointerMove = (event: PointerEvent) => {
            if (!isSliderDragging) return;

            moveSlider(event.clientX, event.clientY, event.currentTarget as HTMLElement);
        };

        const handleSliderPointerUp = (event: PointerEvent) => {
            const element = event.currentTarget as HTMLElement;

            if (!element) return;

            element.releasePointerCapture(event.pointerId);
            setIsSliderDragging(false);
        };

        const handleSliderKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
            if (disabled || colorpicker?.props.disabled) return;

            const key = event.key;
            const isVertical = orientation === 'vertical';
            const allowed = isVertical ? ['ArrowUp', 'ArrowDown'] : ['ArrowLeft', 'ArrowRight'];

            if (!allowed.includes(key)) return;

            event.preventDefault();

            const base = workingValue;

            if (!base) return;

            const { step } = base.getChannelRange(channel);

            let next = base;

            if (!isVertical) {
                if (key === 'ArrowRight') next = next.incChannelValue(channel, step);

                if (key === 'ArrowLeft') next = next.decChannelValue(channel, step);
            } else {
                if (key === 'ArrowDown') next = next.incChannelValue(channel, step);

                if (key === 'ArrowUp') next = next.decChannelValue(channel, step);
            }

            colorpicker?.setValue([
                next,
                {
                    color: next.toString(colorpicker?.props.format || 'css'),
                    value: next
                }
            ]);

            colorpicker?.syncChannelInputs(next);
        };

        const channelRange = workingValue!.getChannelRange(channel);
        const channelValue = workingValue!.getChannelValue(channel);

        const offset = (channelValue - channelRange.min) / (channelRange.max - channelRange.min);

        const sliderStyle = {
            '--slider-background': getChannelGradient(channel, workingValue!, orientation ?? 'horizontal'),
            '--thumb-position-left': orientation === 'horizontal' ? `${offset * 100}%` : '50%',
            '--thumb-position-top': orientation === 'vertical' ? `${offset * 100}%` : '50%',
            '--thumb-background': getChannelColor(workingValue!, channel).toString('css')
        } as React.CSSProperties;

        return {
            state,
            handleSliderPointerDown,
            handleSliderPointerMove,
            handleSliderPointerUp,
            handleSliderKeyDown,
            sliderStyle,
            channelValue,
            channelRange
        };
    }
});
