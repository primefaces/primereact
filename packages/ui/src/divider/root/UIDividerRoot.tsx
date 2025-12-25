'use client';
import { Component } from '@primereact/core/component';
import { styles } from '@primereact/styles/divider';
import { withComponent } from '@primereact/ui/base';
import { mergeProps } from '@primeuix/utils';
import { DividerRoot, defaultRootProps } from 'primereact/divider';
import * as React from 'react';

export const UIDividerRoot = withComponent({
    name: 'DividerRoot',
    defaultProps: defaultRootProps,
    render(instance) {
        const { props, inProps } = instance;

        const rootProps = mergeProps({ styles }, inProps);

        return <Component as={DividerRoot} instance={instance} attrs={rootProps} children={props.children} />;
    }
});
