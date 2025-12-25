'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useTabsContext } from '../Tabs.context';
import { defaultPanelProps } from './TabsPanel.props';

export const TabsPanel = withComponent({
    name: 'TabPanel',
    defaultProps: defaultPanelProps,
    setup(instance) {
        const { props } = instance;
        const tabs = useTabsContext();

        const active = React.useMemo(() => tabs?.isItemActive(props.value) ?? false, [tabs, props.value]);

        return { tabs, active };
    },
    render(instance) {
        const { props, ptmi, tabs, active } = instance;

        const rootProps = mergeProps(
            {
                className: tabs?.cx('panel', { active }),
                tabIndex: active ? tabs?.props.tabIndex : -1,
                role: 'tabpanel',
                'data-p-active': active,
                'aria-labelledby': `${tabs?.id}_tab_${props.value}`,
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
