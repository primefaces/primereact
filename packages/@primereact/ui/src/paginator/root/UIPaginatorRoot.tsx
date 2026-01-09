'use client';
import { Component } from '@primereact/core/component';
import { mergeDefaultProps } from '@primereact/core/utils';
import { styles } from '@primereact/styles/paginator';
import { withComponent } from '@primereact/ui/base';
import { PaginatorRoot, defaultRootProps } from 'primereact/paginator';
import * as React from 'react';

export const UIPaginatorRoot = withComponent({
    name: 'UIPaginatorRoot',
    defaultProps: defaultRootProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ styles }, instance.inProps);

        return <Component as={PaginatorRoot} attrs={rootProps} />;
    }
});
