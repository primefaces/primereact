'use client';
import { Component } from '@primereact/core/component';
import { styles } from '@primereact/styles/button';
import { withComponent } from '@primereact/ui/base';
import { mergeProps } from '@primeuix/utils';
import { ButtonRoot, defaultRootProps } from 'primereact/button';
import * as React from 'react';

export const UIButtonRoot = withComponent({
    name: 'ButtonRoot',
    defaultProps: defaultRootProps,
    render(instance) {
        const { props, inProps } = instance;

        const rootProps = mergeProps({ styles }, inProps);

        return <Component as={ButtonRoot} instance={instance} attrs={rootProps} children={props.children} />;
    }
});
