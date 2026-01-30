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

        const [maskState, setMaskState] = useControlledState({
            value: props.mask,
            defaultValue: props.defaultMask ?? true,
            onChange: props.onMaskChange
        });

        const state = {
            value: valueState,
            mask: maskState ?? true
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

        const toggleMask = () => {
            setMaskState([!maskState, { value: !maskState }]);
        };

        return {
            state,
            // methods
            onInputChange,
            toggleMask
        };
    }
});
