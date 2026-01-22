'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useAccordionContext } from '../Accordion.context';
import { useAccordionPanelContext } from '../panel/AccordionPanel.context';
import { defaultTriggerProps } from './AccordionTrigger.props';

export const AccordionTrigger = withComponent({
    name: 'Accordion.Trigger',
    defaultProps: defaultTriggerProps,
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
                className: accordion?.cx('trigger'),
                onClick: (event: React.MouseEvent<HTMLButtonElement>) => {
                    accordion?.onTriggerClick(event, accordionpanel?.props.value);
                },
                onFocus: (event: React.FocusEvent<HTMLButtonElement>) => {
                    accordion?.onTriggerFocus(event, accordionpanel?.props.value);
                },
                onKeyDown: (event: React.KeyboardEvent<HTMLButtonElement>) => {
                    accordion?.onTriggerKeyDown(event, accordionpanel?.props.value);
                },
                style: { userSelect: 'none' },
                disabled: accordion?.props.disabled || accordionpanel?.props.disabled,
                tabIndex: accordion?.props.tabIndex,
                'aria-expanded': accordionpanel?.active,
                'aria-disabled': accordion?.props.disabled || accordionpanel?.props.disabled,
                [accordionpanel?.active ? 'data-content-open' : 'data-content-closed']: '',
                'data-disabled': accordion?.props.disabled || accordionpanel?.props.disabled
            },
            accordion?.ptm('trigger'),
            ptmi('root')
        );

        return <Component as={as} instance={instance} attrs={rootProps} children={props.children} />;
    }
});
