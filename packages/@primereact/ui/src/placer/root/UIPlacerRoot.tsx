'use client';
import { Component } from '@primereact/core/component';
import { styles } from '@primereact/styles/';
import { withComponent } from '@primereact/ui/base';
import { mergeProps } from '@primeuix/utils';
import { PanelRoot, defaultRootProps } from 'primereact/panel';
import * as React from 'react';

export const UIPanelRoot = withComponent({
    name: 'PanelRoot',
    defaultProps: defaultRootProps,
    render(instance) {
        const { props, inProps } = instance;

        const rootProps = mergeProps({ styles }, inProps);

        return <Component as={PanelRoot} instance={instance} attrs={rootProps} children={props.children} />;
    }
});
