'use client';
import { Component, withComponent } from '@primereact/core/component';
import { useBreadcrumb } from '@primereact/headless/breadcrumb';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { BreadcrumbProvider } from '../Breadcrumb.context';
import { defaultRootProps } from './BreadcrumbRoot.props';

export const BreadcrumbRoot = withComponent({
    name: 'BreadcrumbRoot',
    defaultProps: defaultRootProps,
    setup(instance) {
        const breadcrumb = useBreadcrumb(instance.inProps);

        return breadcrumb;
    },
    render(instance) {
        const { id, props, ptmi, cx } = instance;

        const rootProps = mergeProps(
            {
                id,
                className: cx('root')
            },
            ptmi('root')
        );

        return (
            <BreadcrumbProvider value={instance}>
                <Component instance={instance} attrs={rootProps} children={props.children} />
            </BreadcrumbProvider>
        );
    }
});
