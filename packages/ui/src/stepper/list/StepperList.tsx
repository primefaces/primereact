'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useStepperContext } from '../Stepper.context';
import { defaultListProps } from './StepperList.props';

export const StepperList = withComponent({
    name: 'StepperList',
    defaultProps: defaultListProps,
    setup() {
        const stepper = useStepperContext();

        return { stepper };
    },
    render(instance) {
        const { props, ptmi, stepper } = instance;

        const rootProps = mergeProps(
            {
                className: stepper?.cx('list')
            },
            stepper?.ptm('list'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children} />;
    }
});
