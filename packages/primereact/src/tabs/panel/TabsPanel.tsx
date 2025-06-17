'use client';
import { Component } from '@primereact/core/component';
import { panelStyles } from '@primereact/styles/tabs/TabsPanel.style';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { useTabsContext } from '../Tabs.context';
import { defaultPanelProps } from './TabsPanel.props';

export const TabsPanel = withComponent({
    name: 'TabPanel',
    defaultProps: defaultPanelProps,
    styles: panelStyles,
    setup(instance) {
        const { props } = instance;
        const tabs = useTabsContext();

        const active = React.useMemo(() => tabs?.isItemActive(props.value), [tabs, props.value]);

        return { tabs, active };
    },
    render(instance) {
        const { props, ptmi, tabs, cx, active } = instance;

        const rootProps = mergeProps(
            {
                className: cx('root'),
                tabIndex: active ? tabs?.props.tabindex : -1,
                role: 'tabpanel',
                'data-p-active': active,
                style: {
                    display: active ? 'block' : 'none'
                }
            },
            tabs?.ptm('panel'),
            ptmi('root')
        );

        return <Component pIf={tabs?.props?.lazy ? active : true} instance={instance} attrs={rootProps} children={props.children} />;
    }
});
