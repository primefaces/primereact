'use client';
import { Component } from '@primereact/core/component';
import { styles } from '@primereact/styles/breadcrumb';
import { withComponent } from '@primereact/ui/base';
import { mergeDefaultProps } from '@primeuix/utils';
import { BreadcrumbRoot, defaultRootProps } from 'primereact/breadcrumb';
import * as React from 'react';

export const UIBreadcrumbRoot = withComponent({
    name: 'UIBreadcrumbRoot',
    defaultProps: defaultRootProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ styles }, instance.inProps);

        return <Component as={BreadcrumbRoot} attrs={rootProps} />;
    }
});
