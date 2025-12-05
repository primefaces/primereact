'use client';
import { Component } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { useBreadcrumbContext } from '../Breadcrumb.context';
import { defaultListProps } from './BreadcrumbList.props';

export const BreadcrumbList = withComponent({
    name: 'BreadcrumbList',
    defaultProps: defaultListProps,
    setup() {
        const breadcrumb = useBreadcrumbContext();

        return { breadcrumb };
    },
    render(instance) {
        const { props, ptmi, breadcrumb } = instance;

        const rootProps = mergeProps(
            {
                className: breadcrumb?.cx('list')
            },
            breadcrumb?.ptm('list'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children} />;
    }
});
