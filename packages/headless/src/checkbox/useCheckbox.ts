import { withHeadless } from '@primereact/core/headless';
import { useControlledState } from '@primereact/hooks/use-controlled-state';
import { CheckboxGroupInstance } from '@primereact/types/shared/checkbox';
import * as React from 'react';
import { defaultProps } from './useCheckbox.props';

export const useCheckbox = withHeadless({
    name: 'useCheckbox',
    defaultProps,
    setup: ({ props, getParent }) => {
        const checkboxGroup = getParent<CheckboxGroupInstance>('CheckboxGroup');

        const [indeterminateState, setIndeterminateState] = React.useState<boolean | undefined>(props.indeterminate);
        const [checkedState, setCheckedState] = useControlledState<boolean | undefined>({
            value: props.checked,
            defaultValue: props.defaultChecked ?? false,
            onChange: props.onCheckedChange
        });

        const checked = React.useMemo(() => (indeterminateState ? false : checkedState === props.trueValue), [indeterminateState, checkedState, props.trueValue]);

        const state = React.useMemo(
            () => ({
                checked,
                indeterminate: indeterminateState
            }),
            [checked, indeterminateState]
        );

        // methods
        const onChange = (event: React.FormEventHandler) => {
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

                if (checkboxGroup) {
                    const { value, onValueChange } = checkboxGroup.props;

                    if (onValueChange) {
                        const newValue = value?.includes(props.value) ? (value || []).filter((v: unknown) => v !== props.value) : [...(value || []), props.value];

                        onValueChange({
                            originalEvent: event,
                            value: newValue
                        });
                    }
                }
            }
        };

        // effects
        React.useEffect(() => {
            if (checkboxGroup) {
                const { defaultValue, value, onValueChange } = checkboxGroup.props;

                const computedValue = onValueChange ? value : defaultValue;
                const isChecked = computedValue ? computedValue.includes(props.value) : false;

                setCheckedState(isChecked);
            }
        }, [checkboxGroup]);

        return {
            state,
            // methods
            onChange
        };
    }
});
