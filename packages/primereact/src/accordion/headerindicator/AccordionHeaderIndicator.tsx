'use client';
import { Component } from '@primereact/core/component';
import { Icon } from '@primereact/core/icon';
import { ChevronDownIcon } from '@primereact/icons/chevrondown';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { useAccordionContext } from '../Accordion.context';
import { useAccordionPanelContext } from '../panel/AccordionPanel.context';
import { defaultHeaderIndicatorProps } from './AccordionHeaderIndicator.props';

export const AccordionHeaderIndicator = withComponent({
    name: 'AccordionHeaderIndicator',
    defaultProps: defaultHeaderIndicatorProps,
    setup() {
        const accordion = useAccordionContext();
        const accordionpanel = useAccordionPanelContext();

        return { accordion, accordionpanel };
    },
    render(instance) {
        const { props, ptmi, accordion, accordionpanel } = instance;

        const rootProps = mergeProps(
            {
                className: accordion?.cx('toggleicon'),
                'data-p-active': accordionpanel?.active,
                'data-p-disabled': accordionpanel?.props.disabled
            },
            accordion?.ptm('toggleicon'),
            ptmi('root')
        );

        const createIconElement = () => {
            const iconProps = mergeProps(
                {
                    className: accordion?.cx('toggleicon'),
                    rotate: accordionpanel?.active ? 180 : 0,
                    style: {
                        transition: 'transform 0.15s ease-in-out'
                    }
                },
                accordion?.ptm('toggleicon'),
                ptmi('root')
            );

            return <Icon as={ChevronDownIcon} {...iconProps} />;
        };

        const icon = createIconElement();

        return <Component as={props.children ? props.as : icon} instance={instance} attrs={rootProps} children={props.children ?? null} />;
    }
});
