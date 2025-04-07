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

        const checkboxGroupRef = React.useRef<any>(null);

        // element refs

        // methods
        const setCheckboxGroup = (checkboxGroup: any) => {
            if (!checkboxGroupRef.current && checkboxGroup) {
                const { defaultValue, value, onValueChange } = checkboxGroup.props;
                const computedValue = onValueChange ? value : defaultValue;
                const isChecked = computedValue ? computedValue.includes(props.value) : false;

                setCheckedState(isChecked);
            }

            checkboxGroupRef.current = checkboxGroup;
        };

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

                if (checkboxGroupRef.current) {
                    const { value, onValueChange } = checkboxGroupRef.current.props;

                    if (onValueChange) {
                        const newValue = value.includes(props.value) ? (value || []).filter((v: any) => v !== props.value) : [...(value || []), props.value];

                        onValueChange({
                            originalEvent: event,
                            value: newValue
                        });
                    }
                }
            }
        };

        // effects

        return {
            state,
            // element refs

            // methods
            setCheckboxGroup,
            onChange
        };
    },
    defaultProps
});
