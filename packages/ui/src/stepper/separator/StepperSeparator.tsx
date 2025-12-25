'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useStepperContext } from '../Stepper.context';
import { defaultSeparatorProps } from './StepperSeparator.props';

export const StepperSeparator = withComponent({
    name: 'StepperSeparator',
    defaultProps: defaultSeparatorProps,
    setup() {
        const stepper = useStepperContext();

        return { stepper };
    },
    render(instance) {
        const { props, ptmi, stepper } = instance;

        const rootProps = mergeProps(
            {
                className: stepper?.cx('separator')
            },
            stepper?.ptm('separator'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children} />;
    }
});
