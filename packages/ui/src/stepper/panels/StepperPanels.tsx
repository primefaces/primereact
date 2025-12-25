'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useStepperContext } from '../Stepper.context';
import { defaultPanelsProps } from './StepperPanels.props';

export const StepperPanels = withComponent({
    name: 'StepperPanels',
    defaultProps: defaultPanelsProps,
    setup() {
        const stepper = useStepperContext();

        return { stepper };
    },
    render(instance) {
        const { props, ptmi, stepper } = instance;

        const rootProps = mergeProps(
            {
                className: stepper?.cx('panels')
            },
            stepper?.ptm('panels'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children} />;
    }
});
