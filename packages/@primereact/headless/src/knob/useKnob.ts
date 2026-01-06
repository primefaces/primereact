import { withHeadless } from '@primereact/core/headless';
import { useEventListener } from '@primereact/hooks';
import { useKnobProps } from '@primereact/types/shared/knob';
import * as React from 'react';
import { defaultProps } from './useKnob.props';

const radius = 40;
const midX = 50;
const midY = 50;
const minRadians = (4 * Math.PI) / 3;
const maxRadians = -Math.PI / 3;
// Set fix value for SSR.
const Math_PI = 3.14159265358979;

export const useKnob = withHeadless({
    name: 'useKnob',
    defaultProps,
    setup({ props, elementRef }) {
        const [valueState, setValueState] = React.useState<useKnobProps['value']>(props.value ?? props.defaultValue ?? null);

        const state = {
            value: valueState
        };

        const mapRange = (x: number, inMin: number, inMax: number, outMin: number, outMax: number) => ((x - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;

        const zeroRadians = () => {
            const min = props.min ?? 0;
            const max = props.max ?? 100;

            return mapRange(min > 0 && max > 0 ? min : 0, min, max, minRadians, maxRadians);
        };

        const valueRadians = () => {
            const min = props.min ?? 0;
            const max = props.max ?? 100;
            const value = valueState ?? min;

            return mapRange(value, min, max, minRadians, maxRadians);
        };

        const minX = () => midX + Math.cos(minRadians) * radius;

        const minY = () => midY - Math.sin(minRadians) * radius;

        const maxX = () => midX + Math.cos(maxRadians) * radius;

        const maxY = () => midY - Math.sin(maxRadians) * radius;

        const zeroX = () => midX + Math.cos(zeroRadians()) * radius;

        const zeroY = () => midY - Math.sin(zeroRadians()) * radius;

        const valueX = () => midX + Math.cos(valueRadians()) * radius;

        const valueY = () => midY - Math.sin(valueRadians()) * radius;

        const largeArc = () => (Math.abs(zeroRadians() - valueRadians()) < Math_PI ? 0 : 1);

        const sweep = () => (valueRadians() > zeroRadians() ? 0 : 1);

        const rangePath = `M ${minX()} ${minY()} A ${radius} ${radius} 0 1 1 ${maxX()} ${maxY()}`;

        const valuePath = `M ${zeroX()} ${zeroY()} A ${radius} ${radius} 0 ${largeArc()} ${sweep()} ${valueX()} ${valueY()}`;

        const [bindWindowMouseMoveListener, unbindWindowMouseMoveListener] = useEventListener({
            target: 'window',
            type: 'mousemove',
            listener: (event: Event) => onMouseMove(event as unknown as React.MouseEvent)
        });

        const [bindWindowMouseUpListener, unbindWindowMouseUpListener] = useEventListener({
            target: 'window',
            type: 'mouseup',
            listener: () => onMouseUp()
        });

        const [bindWindowTouchMoveListener, unbindWindowTouchMoveListener] = useEventListener({
            target: 'window',
            type: 'touchmove',
            listener: (event: Event) => onTouchMove(event as unknown as React.TouchEvent)
        });

        const [bindWindowTouchEndListener, unbindWindowTouchEndListener] = useEventListener({
            target: 'window',
            type: 'touchend',
            listener: () => onTouchEnd()
        });

        const updateValueByOffset = (offsetX: number, offsetY: number) => {
            const dx = offsetX - (props.size ?? 100) / 2;
            const dy = (props.size ?? 100) / 2 - offsetY;
            const angle = Math.atan2(dy, dx);
            const start = -Math_PI / 2 - Math_PI / 6;

            updateModel(angle, start);
        };

        const updateModel = (angle: number, start: number) => {
            let mappedValue;

            if (angle > maxRadians) mappedValue = mapRange(angle, minRadians, maxRadians, props.min ?? 0, props.max ?? 100);
            else if (angle < start) mappedValue = mapRange(angle + 2 * Math.PI, minRadians, maxRadians, props.min ?? 0, props.max ?? 100);
            else return;

            const newValue = Math.round((mappedValue - (props.min ?? 0)) / (props.step ?? 1)) * (props.step ?? 1) + (props.min ?? 0);

            setValueState(newValue);

            if (props.onValueChange) {
                props.onValueChange({
                    value: newValue
                });
            }
        };

        const updateModelValue = (newValue: number) => {
            let currentValue;

            if (newValue > (props.max ?? 100)) {
                currentValue = props.max ?? 100;
            } else if (newValue < (props.min ?? 0)) {
                currentValue = props.min ?? 0;
            } else {
                currentValue = newValue;
            }

            setValueState(currentValue);

            if (props.onValueChange) {
                props.onValueChange({
                    value: currentValue
                });
            }
        };

        const onClick = (event: React.MouseEvent) => {
            if (!props.disabled && !props.readOnly) {
                updateValueByOffset(event.nativeEvent.offsetX, event.nativeEvent.offsetY);
            }
        };

        const onMouseDown = (event: React.MouseEvent) => {
            bindWindowMouseMoveListener();
            bindWindowMouseUpListener();
            event.preventDefault();
        };

        const onMouseUp = () => {
            unbindWindowMouseMoveListener();
            unbindWindowMouseUpListener();
        };

        const onTouchStart = () => {
            bindWindowTouchMoveListener();
            bindWindowTouchEndListener();
        };

        const onTouchEnd = () => {
            unbindWindowTouchMoveListener();
            unbindWindowTouchEndListener();
        };

        const onMouseMove = (event: React.MouseEvent) => {
            if (!props.disabled && !props.readOnly) {
                updateValueByOffset(event.nativeEvent.offsetX, event.nativeEvent.offsetY);
                event.preventDefault();
            }
        };

        const onTouchMove = (event: React.TouchEvent) => {
            if (!props.disabled && !props.readOnly && event.touches.length == 1) {
                const rect = elementRef.current?.getBoundingClientRect();
                const touch = event.targetTouches.item(0);

                if (rect && touch) {
                    const offsetX = touch.clientX - rect.left;
                    const offsetY = touch.clientY - rect.top;

                    updateValueByOffset(offsetX, offsetY);
                }
            }
        };

        const onKeyDown = (event: React.KeyboardEvent) => {
            if (!props.disabled && !props.readOnly) {
                switch (event.code) {
                    case 'ArrowRight':

                    case 'ArrowUp': {
                        event.preventDefault();
                        updateModelValue((state.value ?? props.min ?? 0) + (props.step ?? 1));
                        break;
                    }

                    case 'ArrowLeft':

                    case 'ArrowDown': {
                        event.preventDefault();
                        updateModelValue((state.value ?? props.min ?? 0) - (props.step ?? 1));
                        break;
                    }

                    case 'Home': {
                        event.preventDefault();
                        updateModelValue(props.min ?? 0);
                        break;
                    }

                    case 'End': {
                        event.preventDefault();
                        updateModelValue(props.max ?? 100);
                        break;
                    }

                    case 'PageUp': {
                        event.preventDefault();
                        updateModelValue((state.value ?? props.min ?? 0) + 10);
                        break;
                    }

                    case 'PageDown': {
                        event.preventDefault();
                        updateModelValue((state.value ?? props.min ?? 0) - 10);
                        break;
                    }
                }
            }
        };

        React.useEffect(() => {
            if (props.value !== undefined) {
                setValueState(props.value);
            }
        }, [props.value]);

        return {
            state,
            rangePath,
            valuePath,
            //methods
            onClick,
            onMouseDown,
            onMouseUp,
            onTouchStart,
            onTouchEnd,
            onMouseMove,
            onTouchMove,
            onKeyDown
        };
    }
});
