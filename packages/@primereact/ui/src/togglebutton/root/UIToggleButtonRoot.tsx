'use client';
import { Component } from '@primereact/core/component';
import { styles } from '@primereact/styles/togglebutton';
import { withComponent } from '@primereact/ui/base';
import { mergeProps } from '@primeuix/utils';
import { ToggleButtonRoot, defaultRootProps } from 'primereact/togglebutton';
import * as React from 'react';

export const UIToggleButtonRoot = withComponent({
    name: 'ToggleButtonRoot',
    defaultProps: defaultRootProps,
    render(instance) {
        const { props, inProps } = instance;

        const rootProps = mergeProps({ styles }, inProps);

        return <Component as={ToggleButtonRoot} instance={instance} attrs={rootProps} children={props.children} />;
    }
});
