'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useStepperContext } from '../Stepper.context';
import { defaultNumberProps } from './StepperNumber.props';

export const StepperNumber = withComponent({
    name: 'StepperNumber',
    defaultProps: defaultNumberProps,
    setup() {
        const stepper = useStepperContext();

        return { stepper };
    },
    render(instance) {
        const { props, ptmi, stepper } = instance;

        const rootProps = mergeProps(
            {
                className: stepper?.cx('number')
            },
            stepper?.ptm('number'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children} />;
    }
});
