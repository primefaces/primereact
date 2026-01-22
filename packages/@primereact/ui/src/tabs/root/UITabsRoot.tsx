'use client';
import { Component } from '@primereact/core/component';
import { styles } from '@primereact/styles/tabs';
import { withComponent } from '@primereact/ui/base';
import { mergeDefaultProps } from '@primeuix/utils';
import { TabsRoot, defaultRootProps } from 'primereact/tabs';
import * as React from 'react';

export const UITabsRoot = withComponent({
    name: 'Tabs.Root',
    defaultProps: defaultRootProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ styles }, instance.inProps);

        return <Component as={TabsRoot} attrs={rootProps} />;
    }
});
