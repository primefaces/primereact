'use client';
import { Component } from '@primereact/core/component';
import { styles } from '@primereact/styles/drawer';
import { withComponent } from '@primereact/ui/base';
import { mergeProps } from '@primeuix/utils';
import { DrawerRoot, defaultRootProps } from 'primereact/drawer';
import * as React from 'react';

export const UIDrawerRoot = withComponent({
    name: 'DrawerRoot',
    defaultProps: defaultRootProps,
    render(instance) {
        const { props, inProps } = instance;

        const rootProps = mergeProps({ styles }, inProps);

        return <Component as={DrawerRoot} instance={instance} attrs={rootProps} children={props.children} />;
    }
});
