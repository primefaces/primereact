'use client';
import { Component, withComponent } from '@primereact/core/component';
import { ChevronUpIcon } from '@primereact/icons/chevronup';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { defaultProps } from './AccordionCollapseIcon.props';

export const AccordionCollapseIcon = withComponent({
    defaultProps,
    render: (instance) => {
        const { props, ptmi, getParent } = instance;
        const accordion = getParent('Accordion');
        const accordionpanel = getParent('AccordionPanel');

        const toggleIconProps = mergeProps(
            {
                className: 'p-accordionheader-toggle-icon',
                'aria-hidden': true,
                'data-pc-section': 'toggleicon'
            },
            accordion?.ptm('toggleicon'),
            ptmi('root')
        );

        const isItemActive = accordion?.isItemActive(accordionpanel?.props.value);

        return isItemActive ? (
            props.asChild ? (
                <Component as={props.as || 'span'} {...toggleIconProps}>
                    {props.children}
                </Component>
            ) : (
                <ChevronUpIcon {...toggleIconProps} />
            )
        ) : null;
    }
});
