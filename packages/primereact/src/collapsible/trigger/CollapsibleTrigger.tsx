'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useCollapsibleContext } from '../Collapsible.context';
import { defaultTriggerProps } from './CollapsibleTrigger.props';

export const CollapsibleTrigger = withComponent({
    name: 'Collapsible.Trigger',
    defaultProps: defaultTriggerProps,
    setup() {
        const collapsible = useCollapsibleContext();

        return { collapsible };
    },
    render(instance) {
        const { props, ptmi, collapsible } = instance;

        const rootProps = mergeProps(
            {
                type: 'button',
                className: collapsible?.cx('trigger'),
                tabIndex: collapsible?.props.tabIndex,
                'aria-expanded': collapsible?.state.open,
                'aria-disabled': collapsible?.props.disabled,
                'aria-controls': collapsible?.id + '_content',
                [collapsible?.state.open ? 'data-content-open' : 'data-content-closed']: '',
                onClick: collapsible?.toggle
            },
            collapsible?.ptm('trigger'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children} />;
    }
});
