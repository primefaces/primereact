'use client';
import { Component } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { useTabsContext } from '../Tabs.context';
import { defaultIndicatorProps } from './TabsIndicator.props';

export const TabsIndicator = withComponent({
    name: 'TabsIndicator',
    defaultProps: defaultIndicatorProps,
    setup() {
        const tabs = useTabsContext();

        return { tabs };
    },
    render(instance) {
        const { props, ptmi, tabs } = instance;

        const rootProps = mergeProps(
            {
                className: tabs?.cx('activeBar'),
                style: {
                    ...tabs?.state.inkBarDimensions,
                    left: `var(--left)`,
                    width: `var(--width)`
                }
            },
            tabs?.ptm('activeBar'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children} />;
    }
});
