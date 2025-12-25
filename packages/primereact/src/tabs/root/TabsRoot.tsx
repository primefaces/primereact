'use client';
import { Component, withComponent } from '@primereact/core/component';
import { useTabs } from '@primereact/headless/tabs';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { TabsProvider } from '../Tabs.context';
import { defaultRootProps } from './TabsRoot.props';

export const TabsRoot = withComponent({
    name: 'TabsRoot',
    defaultProps: defaultRootProps,
    setup(instance) {
        const tabs = useTabs(instance.inProps);

        return tabs;
    },
    render(instance) {
        const {
            props,
            ptmi,
            cx
            // methods
        } = instance;

        const rootProps = mergeProps(
            {
                className: cx('root')
            },
            ptmi('root')
        );

        return (
            <TabsProvider value={instance}>
                <Component instance={instance} attrs={rootProps} children={props.children} />
            </TabsProvider>
        );
    }
});
