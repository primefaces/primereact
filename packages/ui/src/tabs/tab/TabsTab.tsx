'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useTabsContext } from '../Tabs.context';
import { defaultTabProps } from './TabsTab.props';

export const TabsTab = withComponent({
    name: 'Tab',
    defaultProps: defaultTabProps,
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
                className: tabs?.cx('tab', { active, disabled: props.disabled }),
                tabIndex: active ? tabs?.props.tabindex : -1,
                disabled: props.disabled,
                role: 'tab',
                'data-p-active': active,
                'data-p-disabled': props.disabled,
                'aria-disabled': props.disabled,
                'aria-selected': active,
                'aria-controls': `${tabs?.id}_tabpanel_${props.value}`,
                onClick: (event: React.MouseEvent<HTMLButtonElement>) => {
                    tabs?.onTabClick(event, props.value);
                },
                onFocus: (event: React.FocusEvent<HTMLButtonElement>) => {
                    tabs?.onTabFocus(event, props.value);
                },
                onKeyDown: (event: React.KeyboardEvent<HTMLButtonElement>) => {
                    tabs?.onTabKeyDown(event, props.value);
                }
            },
            ptmi('tab'),
            tabs?.ptm('tab')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children} />;
    }
});
