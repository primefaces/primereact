'use client';
import { Component } from '@primereact/core/component';
import { styles } from '@primereact/styles/switch';
import { withComponent } from '@primereact/ui/base';
import { mergeProps } from '@primeuix/utils';
import { SwitchRoot, defaultRootProps } from 'primereact/switch';
import * as React from 'react';

export const UISwitchRoot = withComponent({
    name: 'SwitchRoot',
    defaultProps: defaultRootProps,
    render(instance) {
        const { props, inProps } = instance;

        const rootProps = mergeProps({ styles }, inProps);

        return <Component as={SwitchRoot} instance={instance} attrs={rootProps} children={props.children} />;
    }
});
