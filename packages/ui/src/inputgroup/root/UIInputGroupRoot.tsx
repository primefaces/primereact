'use client';
import { Component } from '@primereact/core/component';
import { styles } from '@primereact/styles/inputgroup';
import { withComponent } from '@primereact/ui/base';
import { mergeProps } from '@primeuix/utils';
import { InputGroupRoot, defaultRootProps } from 'primereact/inputgroup';
import * as React from 'react';

export const UIInputGroupRoot = withComponent({
    name: 'InputGroupRoot',
    defaultProps: defaultRootProps,
    render(instance) {
        const { props, inProps } = instance;

        const rootProps = mergeProps({ styles }, inProps);

        return <Component as={InputGroupRoot} instance={instance} attrs={rootProps} children={props.children} />;
    }
});
