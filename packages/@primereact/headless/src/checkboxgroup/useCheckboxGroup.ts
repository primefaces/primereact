import { withHeadless } from '@primereact/core/headless';
import { useControlledState } from '@primereact/hooks/use-controlled-state';
import { useCheckboxGroupExposes } from '@primereact/types/shared/checkboxgroup';
import * as React from 'react';
import { defaultProps } from './useCheckboxGroup.props';

export const useCheckboxGroup = withHeadless({
    name: 'useCheckboxGroup',
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

        const updateChange = React.useCallback(
            (event: Parameters<useCheckboxGroupExposes['updateChange']>[0]) => {
                const newValue = event.checked ? [...(valueState || []), event.value] : (valueState || []).filter((v) => v !== event.value);

                setValueState?.([newValue, { originalEvent: event.originalEvent, value: newValue }]);
            },
            [valueState, setValueState]
        );

        return {
            state,
            // methods
            updateChange
        };
    }
});
