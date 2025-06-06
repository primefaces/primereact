'use client';
import { Component } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';

import { withComponent } from 'primereact/base';
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
        const { props, ptmi, accordion, accordionpanel, elementRef } = instance;

        const rootProps = mergeProps(
            {
                className: accordion?.cx('header'),
                onClick: () => {
                    if (!accordion?.props.selectOnFocus) {
                        accordion?.updateValue(accordionpanel?.props.value);
                    }
                },
                onFocus: (event: React.FocusEvent<HTMLButtonElement>) => {
                    if (accordion?.props.selectOnFocus) {
                        accordion?.updateValue(accordionpanel?.props.value);
                    }

                    props?.onFocus?.(event);
                },
                onKeyDown: (event: React.KeyboardEvent<HTMLButtonElement>) => {
                    switch (event.code) {
                        case 'ArrowDown':
                        case 'Tab':
                            accordion?.focusPanel(elementRef, accordion?.elementRef, 'next');
                            break;

                        case 'ArrowUp':
                            accordion?.focusPanel(elementRef, accordion?.elementRef, 'previous');
                            break;

                        case 'Home':
                            accordion?.focusPanel(elementRef, accordion?.elementRef, 'first');
                            break;

                        case 'End':
                            accordion?.focusPanel(elementRef, accordion?.elementRef, 'last');
                            break;

                        case 'Enter':
                        case 'NumpadEnter':
                        case 'Space':
                            accordion?.updateValue(accordionpanel?.props.value);
                            break;

                        default:
                            break;
                    }

                    event.preventDefault();
                },
                style: { userSelect: 'none' },
                disabled: accordionpanel?.props.disabled,
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
