import { withHeadless } from '@primereact/core/headless';
import { useControlledState } from '@primereact/hooks/use-controlled-state';
import type { useToggleButtonGroupExposes } from '@primereact/types/shared/togglebuttongroup';
import * as React from 'react';
import { defaultProps } from './useToggleButtonGroup.props';

export const useToggleButtonGroup = withHeadless({
    name: 'useToggleButtonGroup',
    defaultProps,
    setup({ props }) {
        const [valueState, setValueState] = useControlledState({
            value: props.value,
            defaultValue: props.defaultValue,
            onChange: props.onValueChange
        });

        const state = {
            value: valueState
        };

        // methods
        const updateChange = React.useCallback(
            (event: Parameters<useToggleButtonGroupExposes['updateChange']>[0]) => {
                let newValue = null;

                if (props.multiple) {
                    newValue = event.pressed ? [...((valueState as unknown[]) || []), event.value] : ((valueState as unknown[]) || []).filter((v) => v !== event.value);
                    if (!props.allowEmpty && newValue.length === 0) return;
                } else {
                    newValue = event.pressed ? event.value : null;
                    if (!props.allowEmpty && newValue === null) return;
                }

                setValueState?.([newValue, { originalEvent: event.originalEvent, value: newValue }]);
            },
            [valueState, setValueState]
        );

        const isPressed = (value: unknown | unknown[] | undefined, toggleButtonValue: unknown) => {
            if (value === undefined) return;

            return props.multiple ? (value as unknown[])?.includes(toggleButtonValue) : value === toggleButtonValue;
        };

        return {
            state,
            // methods
            updateChange,
            isPressed
        };
    }
});
