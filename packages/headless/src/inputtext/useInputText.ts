import { withHeadless } from '@primereact/core/headless';
import { useControlledState } from '@primereact/hooks/use-controlled-state';
import * as React from 'react';
import { defaultProps } from './useInputText.props';

export const useInputText = withHeadless({
    setup: ({ props }) => {
        const [valueState, setValueState] = useControlledState({
            value: props.value,
            defaultValue: props.defaultValue,
            onChange: props.onValueChange
        });

        const state = {
            value: valueState
        };

        const onInput = (event: React.FormEvent<HTMLInputElement>) => {
            setValueState(
                (_, controlled) =>
                    controlled && {
                        originalEvent: event,
                        value: event.currentTarget.value
                    }
            );
        };

        return {
            state,
            onInput
        };
    },
    defaultProps
});
