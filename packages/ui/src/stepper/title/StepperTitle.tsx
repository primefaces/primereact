'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useStepperContext } from '../Stepper.context';
import { defaultTitleProps } from './StepperTitle.props';

export const StepperTitle = withComponent({
    name: 'StepperTitle',
    defaultProps: defaultTitleProps,
    setup() {
        const stepper = useStepperContext();

        return { stepper };
    },
    render(instance) {
        const { props, ptmi, stepper } = instance;

        const rootProps = mergeProps(
            {
                className: stepper?.cx('title')
            },
            stepper?.ptm('title'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children} />;
    }
});
