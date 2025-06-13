'use client';
import { Component } from '@primereact/core/component';
import { useStepper } from '@primereact/headless/stepper';
import { styles } from '@primereact/styles/stepper';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { StepperProvider } from './Stepper.context';
import { defaultProps } from './Stepper.props';
import { StepperContent } from './content';
import { StepperHeader } from './header';
import { StepperItem } from './item';
import { StepperList } from './list';
import { StepperNumber } from './number';
import { StepperPanel } from './panel';
import { StepperPanels } from './panels';
import { StepperSeparator } from './separator';
import { StepperStep } from './step';
import { StepperTitle } from './title';

export const Stepper = withComponent({
    name: 'Stepper',
    defaultProps,
    styles,
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
    },
    components: {
        Content: StepperContent,
        Header: StepperHeader,
        Item: StepperItem,
        List: StepperList,
        Number: StepperNumber,
        Panels: StepperPanels,
        Panel: StepperPanel,
        Separator: StepperSeparator,
        Step: StepperStep,
        Title: StepperTitle
    }
});
