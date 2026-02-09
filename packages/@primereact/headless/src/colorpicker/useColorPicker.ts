import { withHeadless } from '@primereact/core/headless';
import { useControlledState } from '@primereact/hooks/use-controlled-state';
import type { ColorInputChannel, ColorInstance, ColorSliderChannel } from '@primereact/types/shared/colorpicker';
import * as React from 'react';
import { getAreaGradient, getChannelColor, getChannelGradient, getInputChannelRange, getInputChannelValue, parseColor } from './colorManager';
import { defaultProps } from './useColorPicker.props';

const HEX_REGEX = /^[0-9a-fA-F]{3,8}$/;

function isValidHex(value: string) {
    return HEX_REGEX.test(value);
}

function prefixHex(value: string) {
    if (value.startsWith('#')) return value;

    if (isValidHex(value)) return `#${value}`;

    return value;
}

function flipVerticalGradient(gradient: string) {
    return gradient.replace('to bottom', 'to top');
}

export const useColorPicker = withHeadless({
    name: 'useColorPicker',
    defaultProps,
    setup({ props }) {
        const { format = 'hsba', disabled } = props;
        const [isAreaDragging, setIsAreaDragging] = React.useState(false);
        const inputElRefs = React.useRef<HTMLInputElement[]>([]);
        const areaDragOffset = React.useRef({ x: 0, y: 0 });

        const defaultValueRef = React.useRef<ColorInstance | undefined>(props.defaultValue ?? parseColor('#ff0000').toFormat(props.format || 'hsba'));

        const [value, setValue] = useControlledState({
            value: props.value,
            defaultValue: defaultValueRef.current,
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

        const commitColor = (nextColor: ColorInstance, options?: { originalEvent?: React.SyntheticEvent }) => {
            setValue([
                nextColor,
                {
                    color: nextColor.toString(format),
                    value: nextColor,
                    ...(options?.originalEvent ? { originalEvent: options.originalEvent } : {})
                }
            ]);

            syncChannelInputs(nextColor);
        };

        const moveArea = (x: number, y: number, element: HTMLElement) => {
            if (!element || disabled) return;

            const rect = element.getBoundingClientRect();
            const nx = Math.max(0, Math.min(1, (x - areaDragOffset.current.x - rect.left) / rect.width));
            const ny = Math.max(0, Math.min(1, (y - areaDragOffset.current.y - rect.top) / rect.height));

            const { xChannel, yChannel } = getAreaChannels();

            const xRange = areaValue.getChannelRange(xChannel);
            const yRange = areaValue.getChannelRange(yChannel);

            const xValue = nx * (xRange.max - xRange.min) + xRange.min;
            const yValue = (1 - ny) * (yRange.max - yRange.min) + yRange.min;

            const xDelta = xValue - areaValue.getChannelValue(xChannel);
            const yDelta = yValue - areaValue.getChannelValue(yChannel);

            const newColor = areaValue.incChannelValue(xChannel, xDelta).incChannelValue(yChannel, yDelta);

            commitColor(newColor);
        };

        const handleAreaPointerDown = (event: PointerEvent) => {
            const element = event.currentTarget as HTMLElement;

            if (!element || event.button !== 0) return;

            const target = event.target as HTMLElement | null;
            const thumb = target?.closest?.('[data-part="area-thumb"], .p-color-picker-area-thumb') as HTMLElement | null;

            if (thumb) {
                const thumbRect = thumb.getBoundingClientRect();
                const thumbCenterX = thumbRect.left + thumbRect.width / 2;
                const thumbCenterY = thumbRect.top + thumbRect.height / 2;

                areaDragOffset.current = {
                    x: event.clientX - thumbCenterX,
                    y: event.clientY - thumbCenterY
                };
            } else {
                areaDragOffset.current = { x: 0, y: 0 };
            }

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
            areaDragOffset.current = { x: 0, y: 0 };

            if (props.onValueChangeEnd) {
                props.onValueChangeEnd({
                    originalEvent: event as unknown as React.SyntheticEvent,
                    color: ensuredValue.toString(format),
                    value: ensuredValue
                });
            }
        };

        const handleAreaBlur = (event: React.FocusEvent<HTMLElement>) => {
            if (!props.onValueChangeEnd) return;

            props.onValueChangeEnd({
                originalEvent: event,
                color: ensuredValue.toString(format),
                value: ensuredValue
            });
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

            commitColor(next);

            if (props.onValueChangeEnd) {
                props.onValueChangeEnd({
                    originalEvent: event,
                    color: next.toString(format),
                    value: next
                });
            }
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
            if ((typeof window !== 'undefined' && !window.EyeDropper) || disabled) return;

            const eyeDropper = new (window as Window & typeof globalThis & { EyeDropper: new () => { open: () => Promise<{ sRGBHex: string }> } }).EyeDropper();

            eyeDropper
                .open()
                .then((result: { sRGBHex: string }) => {
                    const newColor = parseColor(result.sRGBHex);

                    commitColor(newColor);
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

        const getSliderProps = ({
            channel = 'hue',
            orientation = 'horizontal',
            disabled: sliderDisabled
        }: {
            channel?: ColorSliderChannel;
            orientation?: 'horizontal' | 'vertical';
            disabled?: boolean;
        } = {}) => {
            const isDisabled = disabled || sliderDisabled;
            const workingValue = channel === 'alpha' ? areaValue : ensuredValue.getChannels().includes(channel) ? ensuredValue : areaValue.getChannels().includes(channel) ? areaValue : ensuredValue.toFormat(format);

            const channelRange = workingValue.getChannelRange(channel);
            const channelValue = workingValue.getChannelValue(channel);

            const baseGradient = getChannelGradient(channel, workingValue, orientation);
            const sliderBackground = orientation === 'vertical' ? flipVerticalGradient(baseGradient) : baseGradient;

            const sliderStyle = {
                '--slider-background': sliderBackground,
                '--slider-thumb-background': getChannelColor(workingValue, channel).toString('css')
            } as React.CSSProperties;

            const onValueChange = (event: { originalEvent: React.SyntheticEvent; value: number | number[] | undefined }) => {
                if (isDisabled) return;

                const nextValue = Array.isArray(event.value) ? event.value[0] : event.value;

                if (nextValue === undefined || Number.isNaN(nextValue)) return;

                const nextColor = workingValue.withChannelValue(channel, nextValue);

                commitColor(nextColor, { originalEvent: event.originalEvent });
            };

            const onValueChangeEnd = (event: { originalEvent: React.SyntheticEvent; value: number | number[] | undefined }) => {
                if (isDisabled || !props.onValueChangeEnd) return;

                const nextValue = Array.isArray(event.value) ? event.value[0] : event.value;

                if (nextValue === undefined || Number.isNaN(nextValue)) return;

                const nextColor = workingValue.withChannelValue(channel, nextValue);

                props.onValueChangeEnd({
                    originalEvent: event.originalEvent,
                    color: nextColor.toString(format),
                    value: nextColor
                });
            };

            return {
                sliderStyle,
                channelValue,
                channelRange,
                value: channelValue,
                min: channelRange.min,
                max: channelRange.max,
                step: channelRange.step,
                disabled: isDisabled,
                onValueChange,
                onValueChangeEnd
            };
        };

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
                        const channelValue = getInputChannelValue(base, channel as ColorInputChannel, format);

                        input.value = String(channelValue);
                    }
                });
            });
        };

        React.useEffect(() => {
            syncChannelInputs();
        }, [ensuredValue, format]);

        const getInputProps = ({
            channel = 'hex',
            disabled: inputDisabled
        }: {
            channel?: ColorInputChannel;
            disabled?: boolean;
        } = {}) => {
            const isDisabled = disabled || inputDisabled;
            const colorValue = ensuredValue as ColorInstance;
            const colorFormat = format;
            const channelRange = getInputChannelRange(colorValue, channel);
            const channelValue = getInputChannelValue(colorValue, channel, colorFormat);
            const isCssChannel = channel === 'hex' || channel === 'css';

            const changeValue = (value: string | number) => {
                if (isDisabled) return undefined;

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

                commitColor(newColor);

                return newColor;
            };

            const commitInputValue = (event: React.FocusEvent<HTMLInputElement> | React.KeyboardEvent<HTMLInputElement>) => {
                const currentTarget = event.currentTarget as HTMLInputElement;
                const value = isCssChannel ? currentTarget.value : currentTarget.valueAsNumber;
                const nextColor = changeValue(value);

                if (!nextColor || !props.onValueChangeEnd) return;

                props.onValueChangeEnd({
                    originalEvent: event,
                    color: nextColor.toString(format),
                    value: nextColor
                });
            };

            const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
                commitInputValue(event);
            };

            const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
                if (event.defaultPrevented) return;

                if (event.key === 'Enter') {
                    commitInputValue(event);
                    event.preventDefault();
                }
            };

            return {
                type: (isCssChannel ? 'text' : 'number') as 'text' | 'number',
                channelRange,
                channelValue,
                handleBlur,
                handleKeyDown
            };
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
            handleAreaBlur,
            handleAreaKeyDown,
            areaStyles,
            swatchStyles,
            openEyeDropper,
            syncChannelInputs,
            registerInputEl,
            getInputProps,
            getSliderProps
        };
    }
});
