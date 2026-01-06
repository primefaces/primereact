'use client';
import { Component } from '@primereact/core/component';
import { styles } from '@primereact/styles/avatar';
import { withComponent } from '@primereact/ui/base';
import { mergeProps } from '@primeuix/utils';
import { AvatarRoot, defaultRootProps } from 'primereact/avatar';
import * as React from 'react';

export const UIAvatarRoot = withComponent({
    name: 'AvatarRoot',
    defaultProps: defaultRootProps,
    render(instance) {
        const { props, inProps } = instance;

        const rootProps = mergeProps({ styles }, inProps);

        return <Component as={AvatarRoot} instance={instance} attrs={rootProps} children={props.children} />;
    }
});
