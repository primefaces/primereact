'use client';
import { Component } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { useStepperItemContext } from '../item/StepperItem.context';
import { useStepperStepContext } from '../step/StepperStep.context';
import { useStepperContext } from '../Stepper.context';
import { defaultHeaderProps } from './StepperHeader.props';

export const StepperHeader = withComponent({
    name: 'StepperHeader',
    defaultProps: defaultHeaderProps,
    setup() {
        const stepper = useStepperContext();
        const stepperitem = useStepperItemContext();
        const stepperstep = useStepperStepContext();

        const activeValue = React.useMemo(() => {
            return stepperitem?.props?.value ?? stepperstep?.props?.value;
        }, [stepperitem?.props?.value, stepper?.props?.value]);

        const disabled = React.useMemo(() => {
            return !stepper?.isStepActive(activeValue) && (stepper?.isStepDisabled() || stepperitem?.props.disabled || stepperstep?.props.disabled);
        }, [stepper?.isStepDisabled, stepperitem?.props.disabled]);

        return { stepper, stepperitem, stepperstep, activeValue, disabled };
    },
    render(instance) {
        const { props, ptmi, stepper, activeValue, disabled } = instance;

        const rootProps = mergeProps(
            {
                className: stepper?.cx('header'),
                type: 'button',
                role: 'tab',
                tabIndex: disabled ? -1 : undefined,
                'aria-controls': `${stepper?.id}_steppanel_${activeValue}`,
                disabled,
                onClick: () => stepper?.setActiveStep(activeValue)
            },
            stepper?.ptm('header'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children} />;
    }
});
