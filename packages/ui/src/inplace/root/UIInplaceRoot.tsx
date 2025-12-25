'use client';
import { Component } from '@primereact/core/component';
import { styles } from '@primereact/styles/inplace';
import { withComponent } from '@primereact/ui/base';
import { mergeProps } from '@primeuix/utils';
import { InplaceRoot, defaultRootProps } from 'primereact/inplace';
import * as React from 'react';

export const UIInplaceRoot = withComponent({
    name: 'InplaceRoot',
    defaultProps: defaultRootProps,
    render(instance) {
        const { props, inProps } = instance;

        const rootProps = mergeProps({ styles }, inProps);

        return <Component as={InplaceRoot} instance={instance} attrs={rootProps} children={props.children} />;
    }
});
