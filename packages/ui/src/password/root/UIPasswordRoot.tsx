'use client';
import { Component } from '@primereact/core/component';
import { styles } from '@primereact/styles/password';
import { withComponent } from '@primereact/ui/base';
import { mergeProps } from '@primeuix/utils';
import { PasswordRoot, defaultRootProps } from 'primereact/password';
import * as React from 'react';

export const UIPasswordRoot = withComponent({
    name: 'PasswordRoot',
    defaultProps: defaultRootProps,
    render(instance) {
        const { props, inProps } = instance;

        const rootProps = mergeProps({ styles }, inProps);

        return <Component as={PasswordRoot} instance={instance} attrs={rootProps} children={props.children} />;
    }
});
