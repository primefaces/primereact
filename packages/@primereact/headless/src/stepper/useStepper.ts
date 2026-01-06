import { withHeadless } from '@primereact/core/headless';
import { useStepperProps } from '@primereact/types/shared/stepper';
import * as React from 'react';
import { defaultProps } from './useStepper.props';

export const useStepper = withHeadless({
    name: 'useStepper',
    defaultProps,
    setup({ props }) {
        const [activeValue, setActiveValue] = React.useState<useStepperProps['value']>(props.value ?? props.defaultValue ?? null);

        const state = {
            value: activeValue
        };

        const setActiveStep = (value: null | undefined | string | number) => {
            if (value !== activeValue) {
                setActiveValue(value);

                props.onValueChange?.({
                    value
                });
            }
        };

        const isStepActive = (value: null | undefined | string | number): boolean => {
            return activeValue === value;
        };

        const isStepDisabled = () => {
            return props.linear ?? false;
        };

        return {
            state,
            //methods
            setActiveStep,
            isStepActive,
            isStepDisabled
        };
    }
});
