import { withHeadless } from '@primereact/core/headless';
import * as React from 'react';
import { defaultProps } from './useRadioButton.props';

export const useRadioButton = withHeadless({
    setup: ({ props }) => {
        const [checked, setChecked] = React.useState<boolean>(false);
        const state = {
            checked
        };

        const radioButtonGroupRef = React.useRef<any>(null);

        // element refs

        // methods
        const setRadioButtonGroup = (radioButtonGroup: any) => {
            if (!radioButtonGroupRef.current && radioButtonGroup) {
                const { defaultValue, value, onValueChange } = radioButtonGroup.props;
                const computedValue = onValueChange ? value : defaultValue;
                const isChecked = computedValue === props.value;

                setChecked(isChecked);
            }

            radioButtonGroupRef.current = radioButtonGroup;
        };

        const onChange = (event: React.FormEvent<HTMLInputElement>) => {
            if (!props.disabled && !props.readOnly) {
                setChecked(true);

                if (radioButtonGroupRef.current) {
                    const { onValueChange } = radioButtonGroupRef.current.props;

                    if (onValueChange) {
                        onValueChange({
                            originalEvent: event,
                            value: props.value
                        });
                    }
                }
            }
        };

        const onFocus = (event: React.FocusEvent<HTMLInputElement>) => {
            props.onFocus?.(event);
        };

        const onBlur = (event: React.FocusEvent<HTMLInputElement>) => {
            props.onBlur?.(event);
        };

        // effects
        React.useEffect(() => {
            if (radioButtonGroupRef.current) {
                const { value, defaultValue, onValueChange } = radioButtonGroupRef.current.props;
                const isChecked = onValueChange ? value === props.value : defaultValue === props.value;

                setChecked(isChecked);
            }
        }, [radioButtonGroupRef.current, props.value]);

        return {
            state,
            // element refs

            // methods
            setRadioButtonGroup,
            onChange,
            onFocus,
            onBlur
        };
    },
    defaultProps
});
