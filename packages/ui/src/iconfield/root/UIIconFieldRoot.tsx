'use client';
import { Component } from '@primereact/core/component';
import { styles } from '@primereact/styles/iconfield';
import { withComponent } from '@primereact/ui/base';
import { mergeProps } from '@primeuix/utils';
import { IconFieldRoot, defaultRootProps } from 'primereact/iconfield';
import * as React from 'react';

export const UIIconFieldRoot = withComponent({
    name: 'IconFieldRoot',
    defaultProps: defaultRootProps,
    render(instance) {
        const { props, inProps } = instance;

        const rootProps = mergeProps({ styles }, inProps);

        return <Component as={IconFieldRoot} instance={instance} attrs={rootProps} children={props.children} />;
    }
});
