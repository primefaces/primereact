'use client';
import { Component } from '@primereact/core/component';
import { useAccordion } from '@primereact/headless/accordion';
import { styles } from '@primereact/styles/accordion';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { AccordionProvider } from './Accordion.context';
import { defaultProps } from './Accordion.props';
import { AccordionContent } from './content';
import { AccordionHeader } from './header';
import { AccordionHeaderIndicator } from './headerindicator';
import { AccordionPanel } from './panel';

export const Accordion = withComponent({
    name: 'Accordion',
    defaultProps,
    styles,
    setup(instance) {
        const accordion = useAccordion(instance.inProps);

        return accordion;
    },
    render(instance) {
        const { props, ptmi, cx } = instance;

        const rootProps = mergeProps(
            {
                className: cx('root'),
                'data-p-disabled': props.disabled
            },
            ptmi('root')
        );

        return (
            <AccordionProvider value={instance}>
                <Component instance={instance} attrs={rootProps} children={props.children} />
            </AccordionProvider>
        );
    },
    components: {
        Content: AccordionContent,
        Header: AccordionHeader,
        Panel: AccordionPanel,
        HeaderIndicator: AccordionHeaderIndicator
    }
});
