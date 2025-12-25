'use client';
import { Component, withComponent } from '@primereact/core/component';
import { useToolbar } from '@primereact/headless/toolbar';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { ToolbarProvider } from '../Toolbar.context';
import { defaultRootProps } from './ToolbarRoot.props';

export const ToolbarRoot = withComponent({
    name: 'ToolbarRoot',
    defaultProps: defaultRootProps,
    setup(instance) {
        const toolbar = useToolbar(instance.inProps);

        return toolbar;
    },
    render(instance) {
        const { id, props, ptmi, cx } = instance;

        const rootProps = mergeProps(
            {
                id,
                className: cx('root'),
                role: 'toolbar'
            },
            ptmi('root')
        );

        return (
            <ToolbarProvider value={instance}>
                <Component instance={instance} attrs={rootProps} children={props.children} />
            </ToolbarProvider>
        );
    }
});
