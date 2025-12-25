'use client';
import { Component, withComponent } from '@primereact/core/component';
import { Motion } from '@primereact/core/motion';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useAccordionContext } from '../Accordion.context';
import { useAccordionPanelContext } from '../panel/AccordionPanel.context';
import { defaultContentProps } from './AccordionContent.props';

export const AccordionContent = withComponent({
    name: 'AccordionContent',
    defaultProps: defaultContentProps,
    setup() {
        const accordion = useAccordionContext();
        const accordionpanel = useAccordionPanelContext();

        return { accordion, accordionpanel };
    },
    render(instance) {
        const { props, ptmi, accordion, accordionpanel } = instance;

        const rootProps = mergeProps(
            {
                className: accordion?.cx('content'),
                role: 'region',
                'data-p-active': accordionpanel?.active,
                'data-p-disabled': accordionpanel?.props.disabled
            },
            accordion?.ptm('content'),
            ptmi('root')
        );

        return (
            <Motion pIf={accordion?.props.lazy ? accordionpanel?.active : true} in={accordionpanel?.active} name="p-toggleable-content">
                <Component instance={instance} attrs={rootProps} children={props.children} />
            </Motion>
        );
    }
});
