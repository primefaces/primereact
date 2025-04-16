'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { defaultProps } from './AccordionHeader.props';

export const AccordionHeader = withComponent({
    defaultProps,
    render: (instance) => {
        const { props, ptmi, getParent } = instance;
        const accordion = getParent('Accordion');
        const accordionpanel = getParent('AccordionPanel');

        const isItemActive = accordion?.isItemActive(accordionpanel?.props.value);

        const headerProps = mergeProps(
            {
                className: 'p-accordionheader',
                type: 'button',
                tabIndex: accordion?.props.tabIndex,
                'aria-expanded': isItemActive,
                'aria-controls': `${accordion?.id}_accordionheader_${accordionpanel?.props.value}`,
                'data-pc-name': 'accordionheader',
                'data-p-disabled': accordionpanel?.props.disabled,
                'data-p-active': isItemActive,
                onClick: () => accordion?.onClick(accordionpanel?.props.value),
                onKeyDown: (event: React.KeyboardEvent<HTMLButtonElement>) => accordion?.onKeyDown(event, accordionpanel?.props.value),
                onFocus: () => accordion?.onFocus(accordionpanel?.props.value)
            },
            accordion?.ptm('header'),
            ptmi('root')
        );

        return (
            <Component as={props.as || 'button'} {...headerProps}>
                {props.children}
            </Component>
        );
    }
});
