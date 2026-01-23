'use client';
import { Component, withComponent } from '@primereact/core/component';
import { isElementOfType } from '@primereact/core/utils';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useAccordionContext } from '../Accordion.context';
import { AccordionPanelProvider } from './AccordionPanel.context';
import { defaultPanelProps } from './AccordionPanel.props';

export const AccordionPanel = withComponent({
    name: 'Accordion.Panel',
    defaultProps: defaultPanelProps,
    setup({ props }) {
        const accordion = useAccordionContext();

        const active = React.useMemo(() => {
            return accordion?.isItemActive(props.value) ?? false;
        }, [accordion?.state.value, props.value]);

        return {
            active,
            accordion
        };
    },
    render(instance) {
        const { props, ptmi, active, accordion } = instance;
        const { as, ...restProps } = props;

        const asProps = isElementOfType(as, 'Collapsible.Root')
            ? {
                  defaultOpen: active,
                  pt: accordion?.ptm('pcCollapsible')
              }
            : undefined;

        const rootProps = mergeProps(
            restProps,
            asProps,
            {
                className: accordion?.cx('panel', { active, disabled: props.disabled || accordion?.props.disabled }),
                'data-disabled': props.disabled || accordion?.props.disabled,
                [active ? 'data-open' : 'data-closed']: ''
            },
            accordion?.ptm('panel'),
            ptmi('root')
        );

        return (
            <AccordionPanelProvider value={instance}>
                <Component as={as} instance={instance} attrs={rootProps} children={props.children} />
            </AccordionPanelProvider>
        );
    }
});
