'use client';
import { Component, withComponent } from '@primereact/core/component';
import { useStepper } from '@primereact/headless/stepper';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { StepperProvider } from '../Stepper.context';
import { defaultRootProps } from './StepperRoot.props';

export const StepperRoot = withComponent({
    name: 'StepperRoot',
    defaultProps: defaultRootProps,
    setup(instance) {
        const stepper = useStepper(instance.inProps);

        return stepper;
    },
    render(instance) {
        const { id, props, ptmi, cx } = instance;

        const rootProps = mergeProps(
            {
                id,
                className: cx('root')
            },
            ptmi('root')
        );

        return (
            <StepperProvider value={instance}>
                <Component instance={instance} attrs={rootProps} children={props.children} />
            </StepperProvider>
        );
    }
});
