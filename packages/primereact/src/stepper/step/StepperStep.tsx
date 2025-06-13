'use client';
import { Component } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { useStepperContext } from '../Stepper.context';
import { useStepperItemContext } from '../item/StepperItem.context';
import { StepperStepProvider } from './StepperStep.context';
import { defaultStepProps } from './StepperStep.props';

export const StepperStep = withComponent({
    name: 'StepperStep',
    defaultProps: defaultStepProps,
    setup({ props }) {
        const stepper = useStepperContext();
        const stepperitem = useStepperItemContext();

        const activeValue = React.useMemo(() => {
            return stepperitem ? stepperitem?.props?.value : props.value;
        }, [props.value, stepper?.state.value, stepperitem?.active]);

        const active = React.useMemo(() => {
            return stepper?.isStepActive(activeValue) as boolean;
        }, [activeValue, stepper?.state.value]);

        const disabled = React.useMemo(() => {
            return !active && (stepper?.isStepDisabled() || props.disabled);
        }, [active, stepper?.state.value, stepper?.props.linear, props.disabled]);

        return { stepper, stepperitem, activeValue, active, disabled };
    },
    render(instance) {
        const { props, ptmi, stepper, active, disabled } = instance;

        const rootProps = mergeProps(
            {
                className: stepper?.cx('step', { active, disabled }),
                'aria-current': active ? 'step' : undefined,
                role: 'presentation',
                'data-p-active': active,
                'data-p-disabled': disabled
            },
            stepper?.ptm('step'),
            ptmi('root')
        );

        return (
            <StepperStepProvider value={instance}>
                <Component instance={instance} attrs={rootProps} children={props.children} />
            </StepperStepProvider>
        );
    }
});
