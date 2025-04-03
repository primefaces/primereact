import { withHeadless } from '@primereact/core/headless';
import { useControlledState } from '@primereact/hooks/use-controlled-state';
import { contains } from '@primeuix/utils';
import * as React from 'react';
import { defaultProps } from './useCheckbox.props';

export const useCheckbox = withHeadless({
    setup: ({ props }) => {
        const [indeterminateState, setIndeterminateState] = React.useState<boolean | undefined>(props.indeterminate);
        const [checkedState, setCheckedState] = useControlledState<boolean | undefined>({
            value: props.checked,
            defaultValue: props.defaultChecked ?? false,
            onChange: props.onChange
        });

        const checked = indeterminateState ? false : props.binary ? checkedState === props.trueValue : contains(props.value, checkedState as any);

        /*const [checkedState, setCheckedState] = React.useState<boolean | undefined>(props.defaultChecked ?? props.checked);
        const _checked = props?.onChange ? props.checked : checkedState;
        const checked = indeterminateState ? false : props.binary ? _checked === props.trueValue : contains(props.value, _checked as any);
        */

        const state = {
            checked,
            indeterminate: indeterminateState
        };

        // element refs

        // methods
        const onChange = (event: React.FormEventHandler<HTMLInputElement>) => {
            if (!props.disabled && !props.readonly) {
                let value;

                if (props.binary) {
                    value = indeterminateState ? props.trueValue : checked ? props.falseValue : props.trueValue;
                } else {
                    //if (checked || indeterminateState) newModelValue = value.filter((val) => !equals(val, this.value));
                    //else newModelValue = value ? [...value, this.value] : [this.value];
                }

                if (indeterminateState) {
                    setIndeterminateState(false);
                    //this.$emit('update:indeterminate', this.d_indeterminate);
                }

                setCheckedState((_, controlled) =>
                    controlled
                        ? {
                              originalEvent: event,
                              value,
                              checked: value
                          }
                        : value
                );

                /*if (props?.onChange) {
                    props.onChange({
                        originalEvent: event,
                        value,
                        checked: value
                    });
                } else {
                    setCheckedState(value);
                }*/
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
