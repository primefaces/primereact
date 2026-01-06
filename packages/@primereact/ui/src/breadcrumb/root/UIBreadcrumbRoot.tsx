'use client';
import { Component } from '@primereact/core/component';
import { styles } from '@primereact/styles/breadcrumb';
import { withComponent } from '@primereact/ui/base';
import { mergeProps } from '@primeuix/utils';
import { BreadcrumbRoot, defaultRootProps } from 'primereact/breadcrumb';
import * as React from 'react';

export const UIBreadcrumbRoot = withComponent({
    name: 'BreadcrumbRoot',
    defaultProps: defaultRootProps,
    render(instance) {
        const { props, inProps } = instance;

        const rootProps = mergeProps({ styles }, inProps);

        return <Component as={BreadcrumbRoot} instance={instance} attrs={rootProps} children={props.children} />;
    }
});
