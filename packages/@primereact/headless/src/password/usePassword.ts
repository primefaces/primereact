import { withHeadless } from '@primereact/core/headless';
import { useControlledState } from '@primereact/hooks/use-controlled-state';
import * as React from 'react';
import { defaultProps } from './usePassword.props';

export const usePassword = withHeadless({
    name: 'usePassword',
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

        const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            const newValue = event.target.value;

            setValueState([
                newValue,
                {
                    originalEvent: event,
                    value: newValue
                }
            ]);
        };

        return {
            state,
            // methods
            onInputChange
        };
    }
});
