import { withHeadless } from '@primereact/core/headless';
import { useControlledState } from '@primereact/hooks/use-controlled-state';
import type { useCheckboxChangeEvent } from '@primereact/types/shared/checkbox';
import * as React from 'react';
import { defaultProps } from './useCheckbox.props';

export const useCheckbox = withHeadless({
    name: 'useCheckbox',
    defaultProps,
    setup({ props }) {
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

        // methods
        const onChange = (event: useCheckboxChangeEvent) => {
            const computedChecked = indeterminateState ? props.trueValue : checked ? props.falseValue : props.trueValue;

            if (indeterminateState) {
                setIndeterminateState(false);
            }

            setCheckedState([
                computedChecked,
                {
                    originalEvent: event,
                    checked: computedChecked
                }
            ]);
        };

        return {
            state,
            // methods
            onChange
        };
    }
});
