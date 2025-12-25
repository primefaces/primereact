'use client';
import { Component, withComponent } from '@primereact/core/component';
import { usePanel } from '@primereact/headless/panel';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { PanelProvider } from '../Panel.context';
import { defaultRootProps } from './PanelRoot.props';

export const PanelRoot = withComponent({
    name: 'PanelRoot',
    defaultProps: defaultRootProps,
    setup(instance) {
        const panel = usePanel(instance?.inProps);

        return panel;
    },
    render(instance) {
        const { id, props, ptmi, cx } = instance;

        const rootProps = mergeProps(
            {
                id,
                className: cx('root')
            },
            ptmi('root')
        );

        return (
            <PanelProvider value={instance}>
                <Component instance={instance} attrs={rootProps} children={props.children} />
            </PanelProvider>
        );
    }
});
