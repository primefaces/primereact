'use client';
import { Component } from '@primereact/core/component';
import { styles } from '@primereact/styles/paginator';
import { withComponent } from '@primereact/ui/base';
import { mergeProps } from '@primeuix/utils';
import { PaginatorRoot, defaultRootProps } from 'primereact/paginator';
import * as React from 'react';

export const UIPaginatorRoot = withComponent({
    name: 'PaginatorRoot',
    defaultProps: defaultRootProps,
    render(instance) {
        const { props, inProps } = instance;

        const rootProps = mergeProps({ styles }, inProps);

        return <Component as={PaginatorRoot} instance={instance} attrs={rootProps} children={props.children} />;
    }
});
