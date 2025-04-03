import { withHeadless } from '@primereact/core/headless';
import { useControlledState } from '@primereact/hooks/use-controlled-state';
import * as React from 'react';
import { defaultProps } from './useCheckbox.props';

export const useCheckbox = withHeadless({
    setup: ({ props }) => {
        const [indeterminateState, setIndeterminateState] = React.useState<boolean | undefined>(props.indeterminate);
        const [checkedState, setCheckedState] = useControlledState<boolean | undefined>({
            value: props.checked,
            defaultValue: props.defaultChecked ?? false,
            onChange: props.onCheckedChange
        });

        const checked = indeterminateState ? false : checkedState === props.trueValue;

        const state = {
            checked,
            indeterminate: indeterminateState
        };

        // element refs

        // methods
        const onChange = (event: React.FormEventHandler<HTMLInputElement>) => {
            if (!props.disabled && !props.readOnly) {
                const computedChecked = indeterminateState ? props.trueValue : checked ? props.falseValue : props.trueValue;

                if (indeterminateState) {
                    setIndeterminateState(false);
                }

                setCheckedState((_, controlled) =>
                    controlled
                        ? {
                              originalEvent: event,
                              value: props.value,
                              checked: computedChecked
                          }
                        : computedChecked
                );
            }
        };

        const onFocus = (event: React.FocusEventHandler<HTMLInputElement>) => {
            props.onFocus?.(event);
        };

        const onBlur = (event: React.FocusEventHandler<HTMLInputElement>) => {
            props.onBlur?.(event);
        };

        // effects

        return {
            state,
            // element refs

            // methods
            onChange,
            onFocus,
            onBlur
        };
    },
    defaultProps
});
