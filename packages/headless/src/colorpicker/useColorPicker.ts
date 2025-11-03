import { withHeadless } from '@primereact/core/headless';
import { useControlledState } from '@primereact/hooks/use-controlled-state';
import type { ColorInputChannel, ColorInstance } from '@primereact/types/shared/colorpicker';
import * as React from 'react';
import { getAreaGradient, getInputChannelValue, parseColor } from './colorManager';
import { defaultProps } from './useColorPicker.props';

export const useColorPicker = withHeadless({
    name: 'useColorPicker',
    defaultProps,
    setup({ props }) {
        const { format = 'hsba', disabled } = props;
        const [isAreaDragging, setIsAreaDragging] = React.useState(false);
        const inputElRefs = React.useRef<HTMLInputElement[]>([]);

        const [value, setValue] = useControlledState({
            value: React.useMemo(() => props.value, [props.value]),
            defaultValue: React.useMemo(() => props.defaultValue ?? parseColor('#ff0000').toFormat(props.format || 'hsba'), [props.defaultValue]),
            onChange: props.onValueChange
        });

        const ensuredValue: ColorInstance = React.useMemo(() => {
            return ((value as ColorInstance | undefined) ?? parseColor('#ff0000').toFormat(format)) as ColorInstance;
        }, [value, format]);

        const areaFormat = format.startsWith('hsl') ? 'hsla' : 'hsba';
        const areaValue = React.useMemo(() => {
            return ensuredValue.toFormat(areaFormat);
        }, [ensuredValue, areaFormat]);

        const state = {
            value: ensuredValue,
            isAreaDragging
        };

        const moveArea = (x: number, y: number, element: HTMLElement) => {
            if (!element || disabled) return;

            const rect = element.getBoundingClientRect();
            const nx = Math.max(0, Math.min(1, (x - rect.left) / rect.width));
            const ny = Math.max(0, Math.min(1, (y - rect.top) / rect.height));

            const { xChannel, yChannel } = getAreaChannels();

            const xRange = areaValue.getChannelRange(xChannel);
            const yRange = areaValue.getChannelRange(yChannel);

            const xValue = nx * (xRange.max - xRange.min) + xRange.min;
            const yValue = (1 - ny) * (yRange.max - yRange.min) + yRange.min;

            const xDelta = xValue - areaValue.getChannelValue(xChannel);
            const yDelta = yValue - areaValue.getChannelValue(yChannel);

            const newColor = areaValue.incChannelValue(xChannel, xDelta).incChannelValue(yChannel, yDelta);

            setValue([
                newColor,
                {
                    color: newColor.toString(format),
                    value: newColor
                }
            ]);

            syncChannelInputs(newColor);
        };

        const handleAreaPointerDown = (event: PointerEvent) => {
            const element = event.currentTarget as HTMLElement;

            if (!element) return;

            element.setPointerCapture(event.pointerId);
            setIsAreaDragging(true);
            moveArea(event.clientX, event.clientY, element);
        };

        const handleAreaPointerMove = (event: PointerEvent) => {
            if (!isAreaDragging) return;

            moveArea(event.clientX, event.clientY, event.currentTarget as HTMLElement);
        };

        const handleAreaPointerUp = (event: PointerEvent) => {
            const element = event.currentTarget as HTMLElement;

            if (!element) return;

            element.releasePointerCapture(event.pointerId);
            setIsAreaDragging(false);
        };

        const handleAreaKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
            if (disabled) return;

            const key = event.key;

            if (!['ArrowRight', 'ArrowLeft', 'ArrowUp', 'ArrowDown'].includes(key)) return;

            event.preventDefault();

            const { xChannel, yChannel } = getAreaChannels();
            const { step: stepX } = areaValue.getChannelRange(xChannel);
            const { step: stepY } = areaValue.getChannelRange(yChannel);

            let next = areaValue;

            if (key === 'ArrowRight') next = next.incChannelValue(xChannel, stepX);

            if (key === 'ArrowLeft') next = next.decChannelValue(xChannel, stepX);

            if (key === 'ArrowUp') next = next.incChannelValue(yChannel, stepY);

            if (key === 'ArrowDown') next = next.decChannelValue(yChannel, stepY);

            setValue([
                next,
                {
                    color: next.toString(format),
                    value: next
                }
            ]);

            syncChannelInputs(next);
        };

        const getAreaChannels = () => {
            const channels = areaValue.getChannels();

            return {
                xChannel: channels[1],
                yChannel: channels[2]
            };
        };

        const openEyeDropper = () => {
            // @ts-expect-error - EyeDropper is not supported by some browsers
            if (typeof window !== 'undefined' && !window.EyeDropper) return;

            const eyeDropper = new (window as Window & typeof globalThis & { EyeDropper: new () => { open: () => Promise<{ sRGBHex: string }> } }).EyeDropper();

            eyeDropper
                .open()
                .then((result: { sRGBHex: string }) => {
                    const newColor = parseColor(result.sRGBHex);

                    setValue([
                        newColor,
                        {
                            color: newColor.toString(format),
                            value: newColor
                        }
                    ]);
                    syncChannelInputs(newColor);
                })
                .catch((e: Error) => {
                    // User cancelled the eyedropper
                    // eslint-disable-next-line no-console
                    console.error('Error opening eyedropper', e);
                });
        };

        const areaChannels = getAreaChannels();
        const { min: minX, max: maxX } = areaValue.getChannelRange(areaChannels.xChannel);
        const { min: minY, max: maxY } = areaValue.getChannelRange(areaChannels.yChannel);
        const xValue = areaValue.getChannelValue(areaChannels.xChannel);
        const yValue = areaValue.getChannelValue(areaChannels.yChannel);

        const areaStyles = {
            ...getAreaGradient(areaValue, areaChannels),
            '--thumb-background': areaValue.withChannelValue('alpha', 1).toString('css'),
            '--thumb-position-left': ((xValue - minX) / (maxX - minX)) * 100 + '%',
            '--thumb-position-top': (1 - (yValue - minY) / (maxY - minY)) * 100 + '%'
        } as React.CSSProperties;

        const swatchStyles = {
            '--swatch-background': ensuredValue.toString('css')
        } as React.CSSProperties;

        const registerInputEl = (el: { elementRef: React.RefObject<HTMLInputElement> }) => {
            const element = el.elementRef.current;

            if (inputElRefs.current.includes(element)) return;

            inputElRefs.current.push(element);
        };

        const syncChannelInputs = (color?: ColorInstance) => {
            requestAnimationFrame(() => {
                const base = color || ensuredValue;

                const channelInputs = inputElRefs.current;

                channelInputs.forEach((input) => {
                    const channel = input.getAttribute('data-channel');

                    if (channel) {
                        const channelValue = getInputChannelValue(base, channel as ColorInputChannel);

                        input.value = String(channelValue);
                    }
                });
            });
        };

        return {
            state,
            value,
            areaValue,
            areaChannels,
            setValue,
            handleAreaPointerDown,
            handleAreaPointerMove,
            handleAreaPointerUp,
            handleAreaKeyDown,
            areaStyles,
            swatchStyles,
            openEyeDropper,
            syncChannelInputs,
            registerInputEl
        };
    }
});
