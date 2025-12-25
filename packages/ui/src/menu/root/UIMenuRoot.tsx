'use client';
import { Component } from '@primereact/core/component';
import { styles } from '@primereact/styles/menu';
import { withComponent } from '@primereact/ui/base';
import { mergeProps } from '@primeuix/utils';
import { MenuRoot, defaultRootProps } from 'primereact/menu';
import * as React from 'react';

export const UIMenuRoot = withComponent({
    name: 'MenuRoot',
    defaultProps: defaultRootProps,
    render(instance) {
        const { props, inProps } = instance;

        const rootProps = mergeProps({ styles }, inProps);

        return <Component as={MenuRoot} instance={instance} attrs={rootProps} children={props.children} />;
    }
});
