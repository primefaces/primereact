'use client';
import { Component, withComponent } from '@primereact/core/component';
import { useAccordion } from '@primereact/headless/accordion';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { AccordionProvider } from '../Accordion.context';
import { defaultRootProps } from './AccordionRoot.props';

export const AccordionRoot = withComponent({
    name: 'AccordionRoot',
    defaultProps: defaultRootProps,
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
    }
});
