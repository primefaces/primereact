'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useAccordionContext } from '../Accordion.context';
import { useAccordionPanelContext } from '../panel/AccordionPanel.context';
import { defaultHeaderProps } from './AccordionHeader.props';

export const AccordionHeader = withComponent({
    name: 'Accordion.Header',
    defaultProps: defaultHeaderProps,
    setup() {
        const accordion = useAccordionContext();
        const accordionpanel = useAccordionPanelContext();

        return { accordion, accordionpanel };
    },
    render(instance) {
        const { props, ptmi, accordion, accordionpanel } = instance;

        const rootProps = mergeProps(
            {
                className: accordion?.cx('header'),
                [accordionpanel?.active ? 'data-open' : 'data-closed']: ''
            },
            accordion?.ptm('header'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children} />;
    }
});
