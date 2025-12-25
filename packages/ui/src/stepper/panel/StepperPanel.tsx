'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useStepperContext } from '../Stepper.context';
import { useStepperItemContext } from '../item/StepperItem.context';
import { defaultPanelProps } from './StepperPanel.props';

export const StepperPanel = withComponent({
    name: 'StepperPanel',
    defaultProps: defaultPanelProps,
    setup({ props }) {
        const stepper = useStepperContext();
        const stepperitem = useStepperItemContext();

        const activeValue = React.useMemo(() => {
            return stepperitem ? stepperitem?.props?.value : props.value;
        }, [props.value, stepper?.state.value, stepperitem?.active]);

        const active = React.useMemo(() => {
            return stepper?.isStepActive(activeValue) as boolean;
        }, [activeValue, stepper?.state.value]);

        return { stepper, stepperitem, activeValue, active };
    },
    render(instance) {
        const { props, ptmi, stepper, stepperitem, activeValue, active } = instance;

        const rootProps = mergeProps(
            {
                className: stepper?.cx('panel', { isVertical: !!stepperitem, active }),
                role: 'tabpanel',
                'aria-controls': `${stepper?.id}_step_${activeValue}`,
                'data-p-active': active
            },
            stepper?.ptm('panel'),
            ptmi('root')
        );

        return <Component pIf={active} instance={instance} attrs={rootProps} children={props.children} />;
    }
});
