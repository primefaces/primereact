'use client';
import { Component, withComponent } from '@primereact/core/component';
import { isElementOfType } from '@primereact/core/utils';
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
        const { props, ptmi, ptm, accordion, accordionpanel } = instance;
        const { as, ...restProps } = props;

        const asProps = isElementOfType(as, 'Collapsible.Content')
            ? {
                  pt: ptm('pcCollapsible.content')
              }
            : undefined;

        const rootProps = mergeProps(
            restProps,
            asProps,
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
