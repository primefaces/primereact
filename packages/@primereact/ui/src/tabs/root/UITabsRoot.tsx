'use client';
import { Component } from '@primereact/core/component';
import { styles } from '@primereact/styles/tabs';
import { withComponent } from '@primereact/ui/base';
import { mergeProps } from '@primeuix/utils';
import { TabsRoot, defaultRootProps } from 'primereact/tabs';
import * as React from 'react';

export const UITabsRoot = withComponent({
    name: 'TabsRoot',
    defaultProps: defaultRootProps,
    render(instance) {
        const { props, inProps } = instance;

        const rootProps = mergeProps({ styles }, inProps);

        return <Component as={TabsRoot} instance={instance} attrs={rootProps} children={props.children} />;
    }
});
