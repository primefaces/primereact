import { withHeadless } from '@primereact/core/headless';
import { focus, getFirstFocusableElement } from '@primeuix/utils';
import * as React from 'react';
import { defaultProps } from './useRating.props';

export const useRating = withHeadless({
    name: 'useRating',
    defaultProps,
    setup: ({ props, elementRef }) => {
        const { readOnly, disabled } = props;
        const [valueState, setValueState] = React.useState(props.modelValue);
        const focusedOptionIndexRef = React.useRef(-1);
        const isFocusVisibleItemRef = React.useRef(false);
        const [focusedOptionIndex, setFocusedOptionIndex] = React.useState(-1);
        const [isFocusVisibleItem, setIsFocusVisibleItem] = React.useState(false);

        const state = {
            value: valueState,
            focusedOptionIndex,
            isFocusVisibleItem
        };

        // methods
        const setFocusedOption = (val: number) => {
            focusedOptionIndexRef.current = val;
            setFocusedOptionIndex(val);
        };

        const setIsFocusVisible = (val: boolean) => {
            isFocusVisibleItemRef.current = val;
            setIsFocusVisibleItem(val);
        };

        const onOptionClick = (event: React.MouseEvent<HTMLDivElement>, value: number) => {
            if (!readOnly && !disabled) {
                onOptionSelect(value);
                setIsFocusVisible(false);

                const firstFocusableEl = getFirstFocusableElement(event.currentTarget);

                if (firstFocusableEl && firstFocusableEl instanceof HTMLElement) {
                    focus(firstFocusableEl);
                }
            }
        };

        const onOptionSelect = (value: number) => {
            if (readOnly || disabled) return;

            if (focusedOptionIndexRef.current === value || valueState === value) {
                setFocusedOption(-1);
                setIsFocusVisible(false);
                setValueState(undefined);
            } else {
                setFocusedOption(value);
                setIsFocusVisible(true);
                setValueState(value);
            }
        };

        const onFocus = (event: React.FocusEvent<HTMLInputElement>, value: number) => {
            if (readOnly || disabled) return;

            setFocusedOption(value);
            setIsFocusVisible((event.nativeEvent as FocusEvent & { sourceCapabilities?: { firesTouchEvents: boolean } | null }).sourceCapabilities?.firesTouchEvents === false);
        };

        const onBlur = (event: React.FocusEvent<HTMLInputElement>) => {
            if (readOnly || disabled) return;

            const relatedTarget = event.relatedTarget as HTMLElement | null;

            if (relatedTarget && elementRef.current?.contains(relatedTarget)) {
                return;
            }

            setFocusedOption(-1);
            setIsFocusVisible(false);
            //            formField.onBlur?.();
        };

        const onChange = (event: React.ChangeEvent<HTMLInputElement>, value: number) => {
            if (readOnly || disabled) return;

            onOptionSelect(value);
            setIsFocusVisible(true);
        };

        // effects

        React.useEffect(() => {
            props?.onChange?.({ value: valueState, originalEvent: null });
        }, [valueState]);

        return {
            state,
            // methods
            onOptionClick,
            onFocus,
            onBlur,
            onChange
        };
    }
});
