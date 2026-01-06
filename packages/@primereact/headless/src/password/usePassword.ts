import { withHeadless } from '@primereact/core/headless';
import { useControlledState } from '@primereact/hooks/use-controlled-state';
import type { PasswordStrengthLevel, PasswordStrengthResult } from '@primereact/types/shared/password';
import { getOuterWidth, isEmpty } from '@primeuix/utils';
import * as React from 'react';
import { defaultProps } from './usePassword.props';

export const usePassword = withHeadless({
    name: 'usePassword',
    defaultProps,
    setup({ props, elementRef }) {
        const inputRef = React.useRef<{ elementRef: React.RefObject<HTMLInputElement> } | null>(null);
        const overlayRef = React.useRef<HTMLDivElement | null>(null);
        const portalRef = React.useRef<{ containerRef: { current: { elementRef: React.RefObject<HTMLDivElement> } } } | null>(null);
        const [valueState, setValueState] = useControlledState({
            value: props.value,
            defaultValue: props.defaultValue,
            onChange: props.onValueChange
        });
        const [overlayVisibleState, setOverlayVisibleState] = React.useState<boolean>(false);
        const [showClearIcon, setShowClearIcon] = React.useState(true);
        const [unmaskedState, setUnmaskedState] = React.useState(false);
        const [focusedState, setFocusedState] = React.useState(false);

        const calculatePasswordStrength = React.useCallback((password: string, levels: PasswordStrengthLevel[]): PasswordStrengthResult => {
            if (!password || !levels || levels.length === 0) {
                return {
                    id: -1,
                    value: '',
                    contains: [],
                    length: 0,
                    percentage: 0
                };
            }

            const contains: string[] = [];

            if (/[a-z]/.test(password)) {
                contains.push('lowercase');
            }

            if (/[A-Z]/.test(password)) {
                contains.push('uppercase');
            }

            if (/[0-9]/.test(password)) {
                contains.push('number');
            }

            if (/[^a-zA-Z0-9]/.test(password)) {
                contains.push('symbol');
            }

            const diversity = contains.length;
            const length = password.length;

            for (let i = levels.length - 1; i >= 0; i--) {
                const level = levels[i];

                if (diversity >= level.minDiversity && length >= level.minLength) {
                    const percentage = levels.length > 1 ? Math.round(((i + 1) / levels.length) * 100) : 100;

                    return {
                        id: level.id,
                        value: level.value,
                        contains,
                        length,
                        percentage
                    };
                }
            }

            return {
                id: levels[0].id,
                value: levels[0].value,
                contains,
                length,
                percentage: 0
            };
        }, []);

        const strength = React.useMemo(() => {
            const levels = props.strengthOptions || [];

            return calculatePasswordStrength(valueState || '', levels);
        }, [valueState, props.strengthOptions, calculatePasswordStrength]);

        const state = {
            value: valueState,
            strength,
            overlayVisible: overlayVisibleState,
            levelsCount: props.strengthOptions?.length ?? 4,
            showClearIcon,
            unmasked: unmaskedState,
            focused: focusedState,
            inputType: (unmaskedState ? 'text' : 'password') as 'text' | 'password'
        };

        const testRequirement = React.useCallback(
            (test: (value: string, strength: PasswordStrengthResult | null) => boolean) => {
                return test(valueState || '', strength);
            },
            [valueState, strength]
        );

        const onInputClick = () => {
            if (!overlayVisibleState) {
                setOverlayVisibleState(true);
            }
        };

        const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            const newValue = event.target.value;

            setShowClearIcon(!isEmpty(newValue));
            setValueState([
                newValue,
                {
                    originalEvent: event,
                    value: newValue
                }
            ]);
        };

        const onFocus = () => {
            setFocusedState(true);
        };

        const onBlur = () => {
            setFocusedState(false);
        };

        const changeVisibleState = (isVisible: boolean) => {
            setOverlayVisibleState(isVisible);
        };

        const onOverlayEnter = () => {
            if (portalRef?.current?.containerRef?.current?.elementRef?.current) {
                const element = portalRef.current.containerRef.current.elementRef.current;

                if (elementRef?.current) {
                    element.style.minWidth = getOuterWidth(elementRef.current) + 'px';
                }
            }
        };

        const onClearClick = (event: React.MouseEvent<HTMLButtonElement>) => {
            setValueState([
                null,
                {
                    originalEvent: event,
                    value: null
                }
            ]);
            setShowClearIcon(false);

            if (overlayVisibleState) {
                setOverlayVisibleState(false);
            }

            // Clear the input value from DOM when using defaultValue (uncontrolled)
            if (inputRef.current?.elementRef?.current) {
                inputRef.current.elementRef.current.value = '';
            }
        };

        const onMaskToggle = () => {
            setUnmaskedState((prev) => !prev);
        };

        React.useEffect(() => {
            if (isEmpty(valueState)) {
                setShowClearIcon(false);
            }
        }, [valueState]);

        return {
            state,
            // refs
            inputRef,
            overlayRef,
            portalRef,
            // methods
            testRequirement,
            calculatePasswordStrength,
            onInputClick,
            onInputChange,
            onFocus,
            onBlur,
            onOverlayEnter,
            changeVisibleState,
            onClearClick,
            onMaskToggle
        };
    }
});
