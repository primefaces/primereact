'use client';
import { Component } from '@primereact/core/component';
import { styles } from '@primereact/styles/toast';
import { withComponent } from '@primereact/ui/base';
import { mergeProps } from '@primeuix/utils';
import { ToastRoot, defaultRootProps } from 'primereact/toast';
import * as React from 'react';

export const UIToastRoot = withComponent({
    name: 'ToastRoot',
    defaultProps: defaultRootProps,
    render(instance) {
        const { props, inProps } = instance;

        const rootProps = mergeProps({ styles }, inProps);

        return <Component as={ToastRoot} instance={instance} attrs={rootProps} children={props.children} />;
    }
});
