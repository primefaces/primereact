import { withHeadless } from '@primereact/core/headless';
import { useEventListener } from '@primereact/hooks';
import { useSliderProps } from '@primereact/types/shared/slider';
import { focus, getAttribute, getWindowScrollLeft, getWindowScrollTop, isRTL } from '@primeuix/utils';
import * as React from 'react';
import { defaultProps } from './useSlider.props';

export const useSlider = withHeadless({
    name: 'useSlider',
    defaultProps,
    setup({ props, elementRef }) {
        const [activeValue, setActiveValue] = React.useState<useSliderProps['value']>(props.value ?? props.defaultValue ?? undefined);
        const handleIndex = React.useRef(0);
        const dragging = React.useRef(false);
        const thumbCounter = React.useRef(0);
        const initX = React.useRef(0);
        const initY = React.useRef(0);
        const barWidth = React.useRef<number | null>(null);
        const barHeight = React.useRef<number | null>(null);

        React.useEffect(() => {
            if (props.value !== undefined) {
                setActiveValue(props.value);
            }
        }, [props.value]);

        const state = {
            value: activeValue
        };

        const registerThumb = React.useCallback(() => {
            const index = thumbCounter.current;

            thumbCounter.current += 1;

            return index;
        }, []);

        React.useEffect(() => {
            thumbCounter.current = 0;

            return () => {
                thumbCounter.current = 0;
            };
        }, []);

        const range = React.useCallback(() => {
            return Array.isArray(state.value) || thumbCounter.current > 1;
        }, [state.value]);

        const updateDomData = () => {
            const rect = elementRef.current?.getBoundingClientRect();

            initX.current = (rect?.left ?? 0) + getWindowScrollLeft();
            initY.current = (rect?.top ?? 0) + getWindowScrollTop();
            barWidth.current = elementRef.current?.offsetWidth ?? null;
            barHeight.current = elementRef.current?.offsetHeight ?? null;
        };

        const handleValue = (event: React.MouseEvent | React.TouchEvent) => {
            let rawValue;
            const touchEvent = event as React.TouchEvent;
            const mouseEvent = event as React.MouseEvent;
            const pageX = touchEvent.touches ? touchEvent.touches[0].pageX : mouseEvent.pageX;
            const pageY = touchEvent.touches ? touchEvent.touches[0].pageY : mouseEvent.pageY;

            if (horizontal()) {
                if (!elementRef.current) return;

                if (isRTL(elementRef.current)) {
                    rawValue = ((initX.current + (barWidth.current as number) - pageX) * 100) / (barWidth.current as number);
                } else {
                    rawValue = ((pageX - initX.current) * 100) / (barWidth.current as number);
                }
            } else {
                rawValue = ((initY.current + (barHeight.current as number) - pageY) * 100) / (barHeight.current as number);
            }

            let newValue = ((props.max as number) - (props.min as number)) * (rawValue / 100) + (props.min as number);

            if (props.step) {
                const oldValue: number = range() ? (Array.isArray(state.value) ? (state.value[handleIndex.current] ?? 0) : 0) : typeof state.value === 'number' ? state.value : 0;
                const diff = newValue - oldValue;

                if (diff < 0) newValue = oldValue + Math.ceil(newValue / props.step - oldValue / props.step) * props.step;
                else if (diff > 0) newValue = oldValue + Math.floor(newValue / props.step - oldValue / props.step) * props.step;
            } else {
                newValue = Math.floor(newValue);
            }

            updateValue(event, newValue);
        };

        const updateValue = (event: React.MouseEvent | React.TouchEvent | React.KeyboardEvent, value: number) => {
            let newValue = Math.round(value * 100) / 100;
            let updatedValue;

            if (range()) {
                updatedValue = Array.isArray(state.value) ? [...state.value] : [0, 0];

                if (handleIndex.current == 0) {
                    if (newValue < (props.min ?? 0)) {
                        newValue = props.min as number;
                    } else if (newValue >= (props.max ?? 100)) {
                        newValue = props.max as number;
                    }

                    updatedValue[0] = newValue;
                } else {
                    if (newValue > (props.max ?? 100)) {
                        newValue = props.max as number;
                    } else if (newValue <= (props.min ?? 0)) {
                        newValue = props.min as number;
                    }

                    updatedValue[1] = newValue;
                }
            } else {
                if (newValue < (props.min ?? 0)) {
                    newValue = props.min as number;
                } else if (newValue > (props.max ?? 100)) {
                    newValue = props.max as number;
                }

                updatedValue = newValue;
            }

            setActiveValue(updatedValue);

            if (props.onValueChange) {
                props.onValueChange({
                    originalEvent: event,
                    value: updatedValue
                });
            }
        };

        const onDragStart = (event: React.MouseEvent<HTMLElement> | React.TouchEvent<HTMLElement>, index: number = 0) => {
            if (props.disabled) {
                return;
            }

            elementRef.current?.setAttribute('data-p-sliding', 'true');
            dragging.current = true;
            updateDomData();

            if (range() && Array.isArray(state.value) && state.value[0] === props.max) {
                handleIndex.current = 0;
            } else {
                handleIndex.current = index;
            }

            focus(event.currentTarget as HTMLElement);
        };

        const onDrag = (event: React.MouseEvent | React.TouchEvent) => {
            if (dragging.current) {
                handleValue(event);
            }
        };

        const onDragEnd = () => {
            if (dragging.current) {
                dragging.current = false;
                elementRef.current?.removeAttribute('data-p-sliding');

                unbindThumbMouseMoveListener();
                unbindThumbMouseUpListener();
                unbindDocumentTouchMoveListener();
                unbindDocumentTouchEndListener();
            }
        };

        const onTouchStart = (event: React.TouchEvent<HTMLElement>, index: number) => {
            bindDocumentTouchMoveListener();
            bindDocumentTouchEndListener();
            onDragStart(event, index);
        };

        const onMouseDown = (event: React.MouseEvent<HTMLElement>, index: number) => {
            bindThumbMouseMoveListener();
            bindThumbMouseUpListener();
            onDragStart(event, index);
        };

        const onKeyDown = (event: React.KeyboardEvent, index: number) => {
            handleIndex.current = index;

            switch (event.code) {
                case 'ArrowDown':
                case 'ArrowLeft':
                    decrementValue(event, index);
                    event.preventDefault();
                    break;

                case 'ArrowUp':
                case 'ArrowRight':
                    incrementValue(event, index);
                    event.preventDefault();
                    break;

                case 'PageDown':
                    decrementValue(event, index, true);
                    event.preventDefault();
                    break;

                case 'PageUp':
                    incrementValue(event, index, true);
                    event.preventDefault();
                    break;

                case 'Home':
                    updateValue(event, props.min ?? 0);
                    event.preventDefault();
                    break;

                case 'End':
                    updateValue(event, props.max ?? 100);
                    event.preventDefault();
                    break;

                default:
                    break;
            }
        };

        const onBarClick = (event: React.MouseEvent) => {
            if (props.disabled) {
                return;
            }

            if (getAttribute(event.target as Element, 'data-pc-name') !== 'sliderthumb') {
                updateDomData();
                handleValue(event);
            }
        };

        const [bindThumbMouseMoveListener, unbindThumbMouseMoveListener] = useEventListener({
            type: 'mousemove',
            listener: (event: Event) => onDrag(event as unknown as React.MouseEvent)
        });

        const [bindThumbMouseUpListener, unbindThumbMouseUpListener] = useEventListener({
            type: 'mouseup',
            listener: () => onDragEnd()
        });

        const [bindDocumentTouchMoveListener, unbindDocumentTouchMoveListener] = useEventListener({
            type: 'touchmove',
            listener: (event: Event) => onDrag(event as unknown as React.MouseEvent)
        });

        const [bindDocumentTouchEndListener, unbindDocumentTouchEndListener] = useEventListener({
            type: 'touchend',
            listener: () => onDragEnd()
        });

        const decrementValue = (event: React.KeyboardEvent, index: number, pageKey = false) => {
            let newValue;

            if (range()) {
                if (Array.isArray(state.value)) {
                    if (props.step) newValue = (state.value[index] ?? 0) - props.step;
                    else newValue = (state.value[index] ?? 0) - 1;
                } else {
                    newValue = 0;
                }
            } else {
                if (typeof state.value === 'number') {
                    if (props.step) newValue = state.value - props.step;
                    else if (!props.step && pageKey) newValue = state.value - 10;
                    else newValue = state.value - 1;
                } else {
                    newValue = 0;
                }
            }

            updateValue(event, newValue);
            event.preventDefault();
        };

        const incrementValue = (event: React.KeyboardEvent, index: number, pageKey = false) => {
            let newValue;

            if (range()) {
                if (Array.isArray(state.value)) {
                    if (props.step) newValue = (state.value[index] ?? 0) + props.step;
                    else newValue = (state.value[index] ?? 0) + 1;
                } else {
                    newValue = 0;
                }
            } else {
                if (props.step) newValue = (typeof state.value === 'number' ? state.value : 0) + props.step;
                else if (!props.step && pageKey) newValue = (typeof state.value === 'number' ? state.value : 0) + 10;
                else newValue = (typeof state.value === 'number' ? state.value : 0) + 1;
            }

            updateValue(event, newValue);
            event.preventDefault();
        };

        const handlePosition = React.useCallback(() => {
            const value = state.value;
            const min = props.min ?? 0;
            const max = props.max ?? 100;

            if (value === undefined || Array.isArray(value)) return 0;

            if (value < min) return 0;
            else if (value > max) return 100;
            else return ((value - min) * 100) / (max - min);
        }, [state.value, props.min, props.max]);

        const rangeStartPosition = React.useCallback(() => {
            const value = state.value;
            const min = props.min ?? 0;
            const max = props.max ?? 100;

            if (Array.isArray(value) && value[0] !== undefined) {
                if (value[0] < min) return 0;
                else return ((value[0] - min) * 100) / (max - min);
            } else return 0;
        }, [state.value, props.min, props.max]);

        const rangeEndPosition = React.useCallback(() => {
            const value = state.value;
            const min = props.min ?? 0;
            const max = props.max ?? 100;

            if (Array.isArray(value) && value.length === 2 && value[1] !== undefined) {
                if (value[1] > max) return 100;
                else return ((value[1] - min) * 100) / (max - min);
            } else return 100;
        }, [state.value, props.min, props.max]);

        const rangeStyle = () => {
            if (range()) {
                const rangeSliderWidth = rangeEndPosition() > rangeStartPosition() ? rangeEndPosition() - rangeStartPosition() : rangeStartPosition() - rangeEndPosition();
                const rangeSliderPosition = rangeEndPosition() > rangeStartPosition() ? rangeStartPosition() : rangeEndPosition();

                if (horizontal()) {
                    return { insetInlineStart: rangeSliderPosition + '%', width: rangeSliderWidth + '%' };
                } else {
                    return { bottom: rangeSliderPosition + '%', height: rangeSliderWidth + '%' };
                }
            } else {
                if (horizontal()) {
                    return { width: handlePosition() + '%' };
                } else {
                    return { height: handlePosition() + '%' };
                }
            }
        };

        const handleThumbStyle = () => {
            if (horizontal()) {
                return { insetInlineStart: handlePosition() + '%' };
            } else {
                return { bottom: handlePosition() + '%' };
            }
        };

        const rangeStartHandleStyle = () => {
            if (horizontal()) {
                return { insetInlineStart: rangeStartPosition() + '%' };
            } else {
                return { bottom: rangeStartPosition() + '%' };
            }
        };

        const rangeEndHandleStyle = () => {
            if (horizontal()) {
                return { insetInlineStart: rangeEndPosition() + '%' };
            } else {
                return { bottom: rangeEndPosition() + '%' };
            }
        };

        const horizontal = React.useCallback(() => {
            return props.orientation === 'horizontal';
        }, []);

        return {
            state,
            registerThumb,
            thumbCounter,
            //methods
            range,
            onTouchStart,
            onDrag,
            onDragEnd,
            onMouseDown,
            onKeyDown,
            onBarClick,
            rangeStyle,
            handleThumbStyle,
            rangeStartHandleStyle,
            rangeEndHandleStyle
        };
    }
});
