'use client';
import { Component, withComponent } from '@primereact/core/component';
import { isElementOfType } from '@primereact/core/utils';
import { usePanel } from '@primereact/headless/panel';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { PanelProvider } from '../Panel.context';
import { defaultRootProps } from './PanelRoot.props';

export const PanelRoot = withComponent({
    name: 'Panel.Root',
    defaultProps: defaultRootProps,
    setup(instance) {
        const panel = usePanel(instance?.inProps);

        return panel;
    },
    render(instance) {
        const { id, props, ptmi, cx, state } = instance;
        const { as, ...restProps } = props;

        const asProps = isElementOfType(as, 'Collapsible.Root')
            ? {
                  defaultOpen: state.open,
                  pt: instance?.ptm('pcCollapsible')
              }
            : undefined;

        const rootProps = mergeProps(
            restProps,
            asProps,
            {
                id,
                className: cx('root'),
                ...(props.disabled ? { 'data-disabled': '' } : undefined),
                [state.open ? 'data-open' : 'data-closed']: ''
            },
            ptmi('root')
        );

        return (
            <PanelProvider value={instance}>
                <Component as={as} instance={instance} attrs={rootProps} children={props.children} />
            </PanelProvider>
        );
    }
});
