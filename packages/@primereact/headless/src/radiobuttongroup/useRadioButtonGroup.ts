import { withHeadless } from '@primereact/core/headless';
import { useControlledState } from '@primereact/hooks/use-controlled-state';
import type { useRadioButtonGroupExposes } from '@primereact/types/shared/radiobuttongroup';
import * as React from 'react';
import { defaultProps } from './useRadioButtonGroup.props';

export const useRadioButtonGroup = withHeadless({
    name: 'useRadioButtonGroup',
    defaultProps,
    setup: ({ props }) => {
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
            (event: Parameters<useRadioButtonGroupExposes['updateChange']>[0]) => {
                const newValue = event.checked ? event.value : undefined;

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
