'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useAccordionContext } from '../Accordion.context';
import { useAccordionPanelContext } from '../panel/AccordionPanel.context';
import { defaultContentProps } from './AccordionContent.props';

export const AccordionContent = withComponent({
    name: 'Accordion.Content',
    defaultProps: defaultContentProps,
    setup() {
        const accordion = useAccordionContext();
        const accordionpanel = useAccordionPanelContext();

        return { accordion, accordionpanel };
    },
    render(instance) {
        const { props, ptmi, accordion, accordionpanel } = instance;
        const { as, ...restProps } = props;

        const rootProps = mergeProps(
            restProps,
            {
                className: accordion?.cx('content'),
                role: 'region',
                [accordionpanel?.active ? 'data-open' : 'data-closed']: '',
                'data-disabled': accordionpanel?.props.disabled
            },
            accordion?.ptm('content'),
            ptmi('root')
        );

        return <Component as={as} instance={instance} attrs={rootProps} children={props.children} />;
    }
});
