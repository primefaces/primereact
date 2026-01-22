import { withHeadless } from '@primereact/core/headless';
import { useControlledState } from '@primereact/hooks/use-controlled-state';
import { defaultProps } from './useRadioButtonGroup.props';
import * as React from 'react';
import type { useRadioButtonGroupChangeEvent } from '@primereact/types/shared/radiobuttongroup';

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
            (event: useRadioButtonGroupChangeEvent) => {
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
