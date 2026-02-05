import { withHeadless } from '@primereact/core/headless';
import { useControlledState } from '@primereact/hooks';
import { isRTL } from '@primeuix/utils';
import * as React from 'react';
import { defaultProps } from './useSlider.props';

export const useSlider = withHeadless({
    name: 'useSlider',
    defaultProps,
    setup({ props }) {
        const [valueState, setValueState] = useControlledState({
            value: props.value,
            defaultValue: props.defaultValue,
            onChange: props.onValueChange
        });
        const [isDragging, setIsDragging] = React.useState(false);
        const activeIndex = React.useRef(0);
        const focusedIndex = React.useRef<number | null>(null);
        const rootRef = React.useRef<HTMLDivElement | null>(null);
        const min = props.min ?? 0;
        const max = props.max ?? 100;
        const step = props.step ?? 1;
        const minStepsBetweenThumbs = props.minStepsBetweenThumbs ?? 0;
        const isHorizontal = props.orientation === 'horizontal';
        const isThumbPointerDown = React.useRef(false);
        const dragOffset = React.useRef(0);

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

        function range() {
            return Array.isArray(valueState);
        }

        function getValues() {
            const sourceValue = valueState !== undefined ? valueState : (props.value ?? props.defaultValue);
            const rawValues = Array.isArray(sourceValue) ? sourceValue : sourceValue !== undefined ? [sourceValue] : [min];

            return rawValues.map((value) => normalizeValue(value));
        }

        function getValueState() {
            const values = getValues();

            if (range()) {
                return values;
            }

            return values[0];
        }

        function getThumbElement(index: number) {
            return rootRef.current?.querySelector<HTMLElement>(`[data-index="${index}"]`) ?? null;
        }

        function isThumbDisabled(index: number) {
            return getThumbElement(index)?.hasAttribute('data-disabled') ?? false;
        }

        function blurFocusedThumbIfDifferent(nextIndex: number) {
            if (focusedIndex.current === null || focusedIndex.current === nextIndex) return;

            const rootNode = rootRef.current;

            if (!rootNode) {
                focusedIndex.current = null;

                return;
            }

            const input = rootNode.querySelector<HTMLInputElement>(`[data-index="${focusedIndex.current}"] input[type="range"]`);

            focusedIndex.current = null;
            input?.blur();
        }

        function getClosestEnabledValueIndex(values: number[], nextValue: number, event?: React.PointerEvent<HTMLDivElement>) {
            const indices = values.map((_, index) => index);
            const enabledIndices = rootRef.current ? indices.filter((index) => !isThumbDisabled(index)) : indices;

            if (!enabledIndices.length) return -1;

            let closestIndex = enabledIndices[0];
            let smallestDistance = Math.abs(values[closestIndex] - nextValue);
            const pointerAxis = event ? (isHorizontal ? event.clientX : event.clientY) : null;

            for (const index of enabledIndices.slice(1)) {
                const distance = Math.abs(values[index] - nextValue);

                if (distance < smallestDistance) {
                    closestIndex = index;
                    smallestDistance = distance;
                } else if (distance === smallestDistance && pointerAxis !== null) {
                    const closestElement = getThumbElement(closestIndex);
                    const candidateElement = getThumbElement(index);

                    if (closestElement && candidateElement) {
                        const closestRect = closestElement.getBoundingClientRect();
                        const candidateRect = candidateElement.getBoundingClientRect();
                        const closestCenter = isHorizontal ? closestRect.left + closestRect.width / 2 : closestRect.top + closestRect.height / 2;
                        const candidateCenter = isHorizontal ? candidateRect.left + candidateRect.width / 2 : candidateRect.top + candidateRect.height / 2;

                        if (closestCenter === candidateCenter) {
                            closestIndex = pointerAxis < closestCenter ? Math.min(closestIndex, index) : Math.max(closestIndex, index);
                        } else {
                            const closestDelta = Math.abs(pointerAxis - closestCenter);
                            const candidateDelta = Math.abs(pointerAxis - candidateCenter);

                            if (candidateDelta < closestDelta) {
                                closestIndex = index;
                            }
                        }
                    }
                }
            }

            return closestIndex;
        }

        function getThumbValue(index: number) {
            const values = getValues();

            return values[index] ?? min;
        }

        function getValuePercent(value: number) {
            const rangeValue = max - min;

            if (!rangeValue) return 0;

            return clamp(((value - min) / rangeValue) * 100, 0, 100);
        }

        function getRangeStyle(): React.CSSProperties {
            const values = getValues();
            const isRange = range();
            const minValue = values.length ? Math.min(...values) : min;
            const maxValue = values.length ? Math.max(...values) : min;
            const startValue = isRange ? minValue : min;
            const endValue = isRange ? maxValue : (values[0] ?? min);
            const startPercent = getValuePercent(startValue);
            const endPercent = getValuePercent(endValue);
            const sizePercent = Math.max(endPercent - startPercent, 0);

            return isHorizontal
                ? {
                      position: 'absolute',
                      insetInlineStart: `${startPercent}%`,
                      width: `${sizePercent}%`
                  }
                : {
                      position: 'absolute',
                      bottom: `${startPercent}%`,
                      height: `${sizePercent}%`
                  };
        }

        function getThumbStyle(index: number): React.CSSProperties {
            const value = getThumbValue(index);
            const percent = getValuePercent(value);

            return isHorizontal
                ? {
                      position: 'absolute',
                      insetInlineStart: `${percent}%`,
                      translate: '-50% 0'
                  }
                : {
                      position: 'absolute',
                      bottom: `${percent}%`,
                      translate: '0 50%'
                  };
        }

        function setRootRef(node: HTMLDivElement | null) {
            rootRef.current = node;
        }

        function getRootRect(event: React.PointerEvent<HTMLDivElement>) {
            return rootRef.current?.getBoundingClientRect() ?? event.currentTarget.getBoundingClientRect();
        }

        function getValueFromPointer(event: React.PointerEvent<HTMLDivElement>) {
            const rect = getRootRect(event);
            const size = isHorizontal ? rect.width : rect.height;

            if (!size) return min;

            const position = isHorizontal ? (event.clientX - rect.left) / rect.width : (event.clientY - rect.top) / rect.height;
            const clampedPosition = clamp(position, 0, 1);
            const isRtl = isHorizontal && isRTL(rootRef.current ?? event.currentTarget);
            const orientedPosition = isHorizontal ? (isRtl ? 1 - clampedPosition : clampedPosition) : 1 - clampedPosition;
            const value = min + orientedPosition * (max - min);

            return normalizeValue(value);
        }

        function updateValueAt(index: number, nextValue: number, originalEvent: React.PointerEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement> | React.ChangeEvent<HTMLInputElement>) {
            const values = getValues();
            const minDistance = Math.max(minStepsBetweenThumbs * (step || 1), 0);
            const minValue = index > 0 ? values[index - 1] + minDistance : min;
            const maxValue = index < values.length - 1 ? values[index + 1] - minDistance : max;
            const lowerBound = Math.min(minValue, maxValue);
            const upperBound = Math.max(minValue, maxValue);
            const clampedValue = clamp(normalizeValue(nextValue), lowerBound, upperBound);
            const nextValues = [...values];

            nextValues[index] = clampedValue;

            const nextValueState = range() ? nextValues : nextValues[0];

            setValueState([
                nextValueState,
                {
                    originalEvent,
                    value: nextValueState
                }
            ]);

            return nextValueState;
        }

        function onTrackPointerDown(event: React.PointerEvent<HTMLDivElement>) {
            if (props.disabled || props.readOnly) return;

            if (event.pointerType === 'mouse' && event.button !== 0) return;

            event.preventDefault();
            event.currentTarget.setPointerCapture(event.pointerId);
            setIsDragging(true);

            if (isThumbPointerDown.current) {
                dragOffset.current = getThumbValue(activeIndex.current) - getValueFromPointer(event);
                isThumbPointerDown.current = false;

                return;
            }

            const nextValue = getValueFromPointer(event);
            const values = getValues();
            const closestIndex = getClosestEnabledValueIndex(values, nextValue, event);

            if (closestIndex === -1) return;

            blurFocusedThumbIfDifferent(closestIndex);
            activeIndex.current = closestIndex;
            dragOffset.current = 0;
            updateValueAt(activeIndex.current, nextValue, event);
        }

        function onTrackPointerMove(event: React.PointerEvent<HTMLDivElement>) {
            if (props.disabled || props.readOnly) return;

            if (!isDragging) return;

            if (isThumbDisabled(activeIndex.current)) return;

            event.preventDefault();
            updateValueAt(activeIndex.current, getValueFromPointer(event) + dragOffset.current, event);
        }

        function onTrackPointerUp(event: React.PointerEvent<HTMLDivElement>) {
            if (props.disabled || props.readOnly) return;

            event.preventDefault();
            event.currentTarget.releasePointerCapture(event.pointerId);
            setIsDragging(false);
            isThumbPointerDown.current = false;
            dragOffset.current = 0;

            props.onValueChangeEnd?.({
                originalEvent: event,
                value: getValueState()
            });
        }

        function onThumbPointerDown(event: React.PointerEvent<HTMLDivElement>, index: number) {
            if (props.disabled || props.readOnly) return;

            if (event.pointerType === 'mouse' && event.button !== 0) return;

            event.preventDefault();
            blurFocusedThumbIfDifferent(index);
            activeIndex.current = index;
            isThumbPointerDown.current = true;
        }

        function onInputChange(event: React.ChangeEvent<HTMLInputElement>, index: number) {
            if (props.disabled || props.readOnly) return;

            activeIndex.current = index;
            const nextValueState = updateValueAt(index, Number(event.target.value), event);

            props.onValueChangeEnd?.({
                originalEvent: event,
                value: nextValueState
            });
        }

        function onInputFocus(event: React.FocusEvent<HTMLInputElement>, index: number) {
            if (props.disabled || props.readOnly) return;

            focusedIndex.current = index;
            activeIndex.current = index;
        }

        function onInputBlur(event: React.FocusEvent<HTMLInputElement>, index: number) {
            if (props.disabled || props.readOnly) return;

            activeIndex.current = index;

            if (focusedIndex.current === index) {
                focusedIndex.current = null;
            }

            props.onValueChangeEnd?.({
                originalEvent: event,
                value: getValueState()
            });
        }

        const state = {
            value: valueState,
            isDragging
        };

        return {
            state,
            // methods
            range,
            getThumbValue,
            getRangeStyle,
            getThumbStyle,
            setRootRef,
            onTrackPointerDown,
            onTrackPointerMove,
            onTrackPointerUp,
            onThumbPointerDown,
            onInputChange,
            onInputFocus,
            onInputBlur
        };
    }
});
