'use client';
import { Component, withComponent } from '@primereact/core/component';
import { cn, mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { defaultProps } from './AccordionPanel.props';

export const AccordionPanel = withComponent({
    defaultProps,
    render: (instance) => {
        const { props, ptmi, getParent } = instance;
        const accordion = getParent('Accordion');

        const panelProps = mergeProps(
            {
                className: cn('p-accordionpanel', {
                    'p-accordionpanel-active': accordion?.isItemActive(props.value),
                    'p-disabled': props.disabled
                }),
                'data-pc-name': 'accordionpanel',
                'data-p-disabled': props.disabled,
                'data-p-active': accordion?.isItemActive(props.value)
            },
            accordion?.ptm('panel'),
            ptmi('root')
        );

        return (
            <Component as={props.as || 'div'} {...panelProps}>
                {props.children}
            </Component>
        );
    }
});
