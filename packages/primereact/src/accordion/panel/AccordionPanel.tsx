'use client';
import { Component } from '@primereact/core/component';
import { panelStyles } from '@primereact/styles/accordion';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { useAccordionContext } from '../Accordion.context';
import { AccordionPanelProvider } from './AccordionPanel.context';
import { defaultPanelProps } from './AccordionPanel.props';

export const AccordionPanel = withComponent({
    name: 'AccordionPanel',
    defaultProps: defaultPanelProps,
    styles: panelStyles,
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
        const { props, ptmi, active, cx } = instance;

        const rootProps = mergeProps(
            {
                className: cx('root'),
                'data-p-disabled': props.disabled,
                'data-p-active': active
            },
            ptmi('root')
        );

        return (
            <AccordionPanelProvider value={instance}>
                <Component instance={instance} attrs={rootProps} children={props.children} />
            </AccordionPanelProvider>
        );
    }
});
