'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { usePanelContext } from '../Panel.context';
import { defaultTriggerProps } from './PanelTrigger.props';

export const PanelTrigger = withComponent({
    name: 'Panel.Trigger',
    defaultProps: defaultTriggerProps,
    setup() {
        const panel = usePanelContext();

        return { panel };
    },
    render(instance) {
        const { props, ptmi, panel } = instance;
        const { as, children, ...restProps } = props;

        const rootProps = mergeProps(
            restProps,
            {
                className: panel?.cx('trigger'),
                onClick: panel?.onTriggerClick
            },
            panel?.ptm('trigger'),
            ptmi('root')
        );

        return <Component as={as} instance={instance} attrs={rootProps} children={children} />;
    }
});
