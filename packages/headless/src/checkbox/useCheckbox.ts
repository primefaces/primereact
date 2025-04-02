import { withHeadless } from '@primereact/core/headless';
import { contains } from '@primeuix/utils';
import * as React from 'react';
import { defaultProps } from './useCheckbox.props';

export const useCheckbox = withHeadless({
    setup: ({ props }) => {
        const [indeterminateState, setIndeterminateState] = React.useState<boolean | undefined>(props.indeterminate);
        const [checked, setChecked] = React.useState<boolean>(false);

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

                props.onChange?.({
                    originalEvent: event,
                    value: props.value,
                    checked: value
                });

                setChecked(value);
            }
        };

        const onFocus = (event: React.FocusEventHandler<HTMLInputElement>) => {
            props.onFocus?.(event);
        };

        const onBlur = (event: React.FocusEventHandler<HTMLInputElement>) => {
            props.onBlur?.(event);
        };

        // effects
        React.useEffect(() => {
            setChecked(indeterminateState ? false : props.binary ? props.checked === props.trueValue : contains(props.value, props.checked as any));
        }, [indeterminateState, props.checked, props.binary, props.value, props.trueValue]);

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
