import { withHeadless } from '@primereact/core/headless';
import { useControlledState } from '@primereact/hooks/use-controlled-state';
import React from 'react';
import { defaultProps } from './useCompare.props';

export const useCompare = withHeadless({
    name: 'useCompare',
    defaultProps,
    setup({ props }) {
        const [valueState, setValueState] = useControlledState({
            value: props.value,
            defaultValue: props.defaultValue,
            onChange: props.onValueChange
        });
        const [isDragging, setIsDragging] = React.useState(false);
        const min = props.min ?? 0;
        const max = props.max ?? 100;
        const step = props.step ?? 1;
        const isHorizontal = props.orientation === 'horizontal';
        const rootRef = React.useRef<HTMLDivElement | null>(null);

        // methods

        function clamp(value: number, minValue: number, maxValue: number) {
            return Math.min(Math.max(value, minValue), maxValue);
        }

        function getPrecision(stepValue: number) {
            const stepString = stepValue.toString();

            if (stepString.includes('e-')) {
                return Number(stepString.split('e-')[1] || 0);
            }

            const dotIndex = stepString.indexOf('.');

            return dotIndex >= 0 ? stepString.length - dotIndex - 1 : 0;
        }

        function roundToStep(value: number, stepValue: number, minValue: number) {
            if (!stepValue) return value;

            const precision = getPrecision(stepValue);
            const rounded = Math.round((value - minValue) / stepValue) * stepValue + minValue;

            return Number(rounded.toFixed(precision));
        }

        const normalizeValue = (value: number) => clamp(roundToStep(value, step, min), min, max);
        const rawValue = Array.isArray(valueState) ? valueState[0] : valueState;
        const normalizedValue = normalizeValue(rawValue ?? min);

        const state = {
            value: normalizedValue
        };

        function setRootRef(node: HTMLDivElement | null) {
            rootRef.current = node;
        }

        function getRootRect(event: React.PointerEvent<HTMLDivElement>) {
            return rootRef.current?.getBoundingClientRect() ?? event.currentTarget.getBoundingClientRect();
        }

        function getValueFromPointer(event: React.PointerEvent<HTMLDivElement>) {
            const rect = getRootRect(event);

            const size = isHorizontal ? rect.width : rect.height;

            if (!size) {
                return normalizedValue;
            }

            const position = isHorizontal ? (event.clientX - rect.left) / rect.width : (event.clientY - rect.top) / rect.height;
            const clampedPosition = clamp(position, 0, 1);
            const percentValue = clampedPosition * 100;
            const orientedValue = isHorizontal ? percentValue : 100 - percentValue;

            return normalizeValue(clamp(orientedValue, min, max));
        }

        function updateValue(value: number, originalEvent: React.PointerEvent<HTMLDivElement> | React.ChangeEvent<HTMLInputElement>) {
            const nextValue = normalizeValue(value);

            setValueState([
                nextValue,
                {
                    originalEvent,
                    value: nextValue
                }
            ]);
        }

        function onThumbPointerDown(event: React.PointerEvent<HTMLDivElement>) {
            if (props.disabled || props.readOnly) return;

            if (event.pointerType === 'mouse' && event.button !== 0) return;

            event.preventDefault();
            event.stopPropagation();
            event.currentTarget.setPointerCapture(event.pointerId);
            setIsDragging(true);
        }

        function onThumbPointerMove(event: React.PointerEvent<HTMLDivElement>) {
            if (props.disabled || props.readOnly) return;

            event.preventDefault();
            event.stopPropagation();

            if (isDragging) {
                updateValue(getValueFromPointer(event), event);
            }
        }

        function onThumbPointerUp(event: React.PointerEvent<HTMLDivElement>) {
            if (props.disabled || props.readOnly) return;

            event.preventDefault();
            event.stopPropagation();
            event.currentTarget.releasePointerCapture(event.pointerId);
            setIsDragging(false);
        }

        function onRootPointerDown(event: React.PointerEvent<HTMLDivElement>) {
            if (props.disabled || props.readOnly) return;

            event.preventDefault();
            event.currentTarget.setPointerCapture(event.pointerId);
            setIsDragging(true);
            updateValue(getValueFromPointer(event), event);
        }

        function onRootPointerMove(event: React.PointerEvent<HTMLDivElement>) {
            if (props.disabled || props.readOnly) return;

            event.preventDefault();

            if (isDragging || props.slideOnHover) {
                updateValue(getValueFromPointer(event), event);
            }
        }

        function onRootPointerUp(event: React.PointerEvent<HTMLDivElement>) {
            if (props.disabled || props.readOnly) return;

            event.preventDefault();
            event.currentTarget.releasePointerCapture(event.pointerId);
            setIsDragging(false);
        }

        function onInputChange(event: React.ChangeEvent<HTMLInputElement>) {
            updateValue(Number(event.target.value), event);
        }

        function getItemStyle(position: 'before' | 'after'): React.CSSProperties {
            const value = Number(normalizedValue);
            const isHorizontal = props.orientation === 'horizontal';
            const positionValue = isHorizontal ? value : 100 - value;

            const clipPath = isHorizontal
                ? position === 'before'
                    ? `inset(0 ${Math.max(0, 100 - positionValue)}% 0 0)`
                    : `inset(0 0 0 ${Math.max(0, positionValue)}%)`
                : position === 'before'
                  ? `inset(0 0 ${Math.max(0, 100 - positionValue)}% 0)`
                  : `inset(${Math.max(0, positionValue)}% 0 0 0)`;

            return {
                clipPath
            };
        }

        return {
            state,
            getItemStyle,
            setRootRef,
            onThumbPointerDown,
            onThumbPointerMove,
            onThumbPointerUp,
            onRootPointerDown,
            onRootPointerMove,
            onRootPointerUp,
            onInputChange
        };
    }
});
