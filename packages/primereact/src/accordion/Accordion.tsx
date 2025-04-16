'use client';
import { Component, withComponent } from '@primereact/core/component';
import { useAccordion } from '@primereact/headless/accordion';
import { styles } from '@primereact/styles/accordion';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { defaultProps } from './Accordion.props';
import { AccordionCollapseIcon } from './collapseicon';
import { AccordionContent } from './content';
import { AccordionExpandIcon } from './expandicon';
import { AccordionHeader } from './header';
import { AccordionPanel } from './panel';

export const Accordion = withComponent({
    defaultProps,
    styles,
    setup: (instance) => {
        const accordion = useAccordion(instance.inProps);

        return accordion;
    },
    render: (instance) => {
        const {
            id,
            props,
            ptmi,
            cx,
            // element refs
            elementRef
        } = instance;

        const rootProps = mergeProps(
            {
                id,
                className: cx('root')
            },
            ptmi('root')
        );

        return (
            <Component as={props.as || 'div'} {...rootProps} ref={elementRef}>
                {props.children}
            </Component>
        );
    },
    components: {
        Panel: AccordionPanel,
        Header: AccordionHeader,
        CollapseIcon: AccordionCollapseIcon,
        ExpandIcon: AccordionExpandIcon,
        Content: AccordionContent
    }
});
