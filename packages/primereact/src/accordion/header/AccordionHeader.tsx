'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useAccordionContext } from '../Accordion.context';
import { useAccordionPanelContext } from '../panel/AccordionPanel.context';
import { defaultHeaderProps } from './AccordionHeader.props';

export const AccordionHeader = withComponent({
    name: 'AccordionHeader',
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
                onClick: (event: React.MouseEvent<HTMLButtonElement>) => {
                    accordion?.onHeaderClick(event, accordionpanel?.props.value);
                },
                onFocus: (event: React.FocusEvent<HTMLButtonElement>) => {
                    accordion?.onHeaderFocus(event, accordionpanel?.props.value);
                },
                onKeyDown: (event: React.KeyboardEvent<HTMLButtonElement>) => {
                    accordion?.onHeaderKeyDown(event, accordionpanel?.props.value);
                },
                style: { userSelect: 'none' },
                disabled: accordionpanel?.props.disabled,
                tabIndex: accordion?.props.tabIndex,
                'data-p-active': accordionpanel?.active,
                'data-p-disabled': accordionpanel?.props.disabled,
                'aria-expanded': accordionpanel?.active,
                'aria-disabled': accordionpanel?.props.disabled
            },
            accordion?.ptm('header'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children} />;
    }
});
