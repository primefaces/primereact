import { withHeadless } from '@primereact/core/headless';
import React from 'react';
import { useSlider } from '../slider/useSlider';
import { defaultProps } from './useCompare.props';

export const useCompare = withHeadless({
    name: 'useCompare',
    defaultProps,
    setup({ props }) {
        const slider = useSlider({
            value: props.value,
            defaultValue: props.defaultValue,
            orientation: props.orientation,
            min: props.min,
            max: props.max,
            step: props.step,
            onValueChange: props.onValueChange,
            onValueChangeEnd: props.onValueChangeEnd,
            disabled: props.disabled,
            readOnly: props.readOnly
        });
        const value = slider.getThumbValue(0);
        const state = {
            value,
            isDragging: slider.state.isDragging
        };

        function getItemStyle(position: 'before' | 'after'): React.CSSProperties {
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

        function getHandleStyle(): React.CSSProperties {
            const baseStyle = slider.getThumbStyle(0);

            return props.orientation === 'horizontal' ? { ...baseStyle, insetBlockStart: 0 } : { ...baseStyle, insetInlineStart: 0 };
        }

        return {
            state,
            slider,
            getItemStyle,
            getHandleStyle,
            setRootRef: slider.setRootRef,
            updateValueFromPointer: slider.updateValueFromPointer,
            onRootPointerDown: slider.onTrackPointerDown,
            onRootPointerMove: (event: React.PointerEvent<HTMLDivElement>) => {
                if (props.slideOnHover) {
                    slider.updateValueFromPointer(event);

                    return;
                }

                slider.onTrackPointerMove(event);
            },
            onRootPointerUp: slider.onTrackPointerUp,
            onThumbPointerDown: (event: React.PointerEvent<HTMLDivElement>) => slider.onThumbPointerDown(event, 0),
            onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => slider.onInputChange(event, 0)
        };
    }
});
