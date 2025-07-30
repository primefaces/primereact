import { withHeadless } from '@primereact/core/headless';
import { focus, getFirstFocusableElement } from '@primeuix/utils';
import * as React from 'react';
import { defaultProps } from './useRating.props';

export const useRating = withHeadless({
    name: 'useRating',
    defaultProps,
    setup: ({ props, elementRef }) => {
        const { readOnly, disabled } = props;
        const [valueState, setValueState] = React.useState(props.allowHalf ? (props.defaultValue ?? props.modelValue) : Math.ceil(props.defaultValue ?? props.modelValue ?? 0));
        const [hoverValueState, setHoverValueState] = React.useState<number | undefined>(undefined);
        const [focusedOptionIndex, setFocusedOptionIndex] = React.useState<number | undefined>(undefined);
        const [isFocusVisibleItem, setIsFocusVisibleItem] = React.useState(false);

        const hoverValueRef = React.useRef<number | undefined>(undefined);

        const state = {
            value: valueState,
            hoverValue: hoverValueState,
            focusedOptionIndex,
            isFocusVisibleItem
        };

        // methods

        const onInputFocus = (event: React.FocusEvent<HTMLInputElement>) => {
            const inputValue = parseFloat(event.target.value);
            const starIndex = Math.ceil(inputValue);

            setFocusedOptionIndex(starIndex);

            const native = event.nativeEvent as FocusEvent & {
                sourceCapabilities?: {
                    firesTouchEvents: boolean;
                };
            };

            setIsFocusVisibleItem(native.sourceCapabilities?.firesTouchEvents === false);
        };

        const onInputBlur = (event: React.FocusEvent<HTMLInputElement>) => {
            const relatedTarget = event.relatedTarget as HTMLElement | null;

            if (relatedTarget && elementRef.current?.contains(relatedTarget)) {
                return;
            }

            setFocusedOptionIndex(undefined);
            //            formField.onBlur?.();
        };

        const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            setValueState(Number(event.target.value));
            const inputValue = parseFloat(event.target.value);
            const starIndex = Math.ceil(inputValue);

            setFocusedOptionIndex(starIndex);
            setIsFocusVisibleItem(true);
        };

        const onOptionClick = (event: React.MouseEvent<HTMLDivElement>, value: number | undefined) => {
            if (readOnly || disabled) return;

            const effectiveValue = props.allowHalf ? value : Math.ceil(value ?? 0);

            if (hoverValueRef.current === effectiveValue) {
                setHoverValueState(undefined);
            }

            setValueState((prev) => (prev === effectiveValue ? undefined : effectiveValue));
            setIsFocusVisibleItem(false);

            const firstFocusableEl = getFirstFocusableElement(event.currentTarget);

            if (firstFocusableEl && firstFocusableEl instanceof HTMLElement) {
                focus(firstFocusableEl);
            }
        };

        const onOptionHover = (event: React.PointerEvent<HTMLDivElement>, value: number | undefined) => {
            if (readOnly || disabled) return;

            setFocusedOptionIndex(undefined);
            const newValue = value ? (props.allowHalf ? value : Math.ceil(value ?? 0)) : undefined;

            setHoverValueState(newValue);
            hoverValueRef.current = newValue;
        };

        const getOptionState = (value: number) => {
            const effectiveValue = hoverValueState ?? valueState ?? 0;

            const floor = Math.floor(effectiveValue);

            let state = 'empty';

            if (value <= floor) {
                state = 'filled';
            } else if (value === floor + 1 && !Number.isInteger(effectiveValue)) {
                state = 'half';
            }

            return state;
        };

        // effects

        React.useEffect(() => {
            props?.onValueChange?.({ value: valueState, originalEvent: null });
        }, [valueState]);

        return {
            state,
            // methods
            onInputFocus,
            onInputBlur,
            onInputChange,
            getOptionState,
            onOptionClick,
            onOptionHover
        };
    }
});
