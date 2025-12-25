'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useStepperContext } from '../Stepper.context';
import { StepperItemProvider } from './StepperItem.context';
import { defaultItemProps } from './StepperItem.props';

export const StepperItem = withComponent({
    name: 'StepperItem',
    defaultProps: defaultItemProps,
    setup({ props }) {
        const stepper = useStepperContext();

        const active = React.useMemo(() => {
            return props.value === stepper?.state.value;
        }, [props.value, stepper?.state.value]);

        return { stepper, active };
    },
    render(instance) {
        const { props, ptmi, stepper, active } = instance;

        const rootProps = mergeProps(
            {
                className: stepper?.cx('item', { active }),
                'data-p-active': active
            },
            stepper?.ptm('item'),
            ptmi('root')
        );

        return (
            <StepperItemProvider value={instance}>
                <Component instance={instance} attrs={rootProps} children={props.children} />
            </StepperItemProvider>
        );
    }
});
