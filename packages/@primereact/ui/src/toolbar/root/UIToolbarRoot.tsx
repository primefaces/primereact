'use client';
import { Component } from '@primereact/core/component';
import { styles } from '@primereact/styles/toolbar';
import { withComponent } from '@primereact/ui/base';
import { mergeProps } from '@primeuix/utils';
import { ToolbarRoot, defaultRootProps } from 'primereact/toolbar';
import * as React from 'react';

export const UIToolbarRoot = withComponent({
    name: 'ToolbarRoot',
    defaultProps: defaultRootProps,
    render(instance) {
        const { props, inProps } = instance;

        const rootProps = mergeProps({ styles }, inProps);

        return <Component as={ToolbarRoot} instance={instance} attrs={rootProps} children={props.children} />;
    }
});
