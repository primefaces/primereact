'use client';
import { Component } from '@primereact/core/component';
import { useTabs } from '@primereact/headless/tabs';
import { styles } from '@primereact/styles/tabs';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { TabsProvider } from './Tabs.context';
import { defaultProps } from './Tabs.props';
import { TabsIndicator } from './indicator';
import { TabsList } from './list';
import { TabsPanel } from './panel';
import { TabsPanels } from './panels';
import { TabsTab } from './tab';

export const Tabs = withComponent({
    name: 'Tabs',
    defaultProps,
    styles,
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
    },
    components: {
        Panel: TabsPanel,
        Panels: TabsPanels,
        List: TabsList,
        Tab: TabsTab,
        Indicator: TabsIndicator
    }
});
