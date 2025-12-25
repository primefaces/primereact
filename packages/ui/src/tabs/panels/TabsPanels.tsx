'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useTabsContext } from '../Tabs.context';
import { defaultPanelsProps } from './TabsPanels.props';

export const TabsPanels = withComponent({
    name: 'TabPanels',
    defaultProps: defaultPanelsProps,
    setup() {
        const tabs = useTabsContext();

        return { tabs };
    },
    render(instance) {
        const { props, ptmi, tabs } = instance;

        const rootProps = mergeProps(
            {
                className: tabs?.cx('panels')
            },
            tabs?.ptm('panels'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children} />;
    }
});
