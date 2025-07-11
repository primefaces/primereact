'use client';
import { Component } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { useAccordionContext } from '../Accordion.context';
import { AccordionPanelProvider } from './AccordionPanel.context';
import { defaultPanelProps } from './AccordionPanel.props';

export const AccordionPanel = withComponent({
    name: 'AccordionPanel',
    defaultProps: defaultPanelProps,
    setup({ props }) {
        const accordion = useAccordionContext();

        const active = React.useMemo(() => {
            return accordion?.isItemActive(props.value) ?? false;
        }, [accordion?.state.value, props.value]);

        return {
            active,
            accordion
        };
    },
    render(instance) {
        const { props, ptmi, active, accordion } = instance;

        const rootProps = mergeProps(
            {
                className: accordion?.cx('panel', { active, disabled: props.disabled || accordion?.props.disabled }),
                'data-p-disabled': props.disabled,
                'data-p-active': active
            },
            accordion?.ptm('panel'),
            ptmi('root')
        );

        return (
            <AccordionPanelProvider value={instance}>
                <Component instance={instance} attrs={rootProps} children={props.children} />
            </AccordionPanelProvider>
        );
    }
});
