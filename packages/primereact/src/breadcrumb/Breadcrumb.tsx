'use client';
import { Component } from '@primereact/core/component';
import { useBreadcrumb } from '@primereact/headless/breadcrumb';
import { styles } from '@primereact/styles/breadcrumb';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { BreadcrumbProvider } from './Breadcrumb.context';
import { defaultProps } from './Breadcrumb.props';
import { BreadcrumbItem } from './item';
import { BreadcrumbList } from './list';
import { BreadcrumbSeparator } from './separator';

export const Breadcrumb = withComponent({
    name: 'Breadcrumb',
    defaultProps,
    styles,
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
    },
    components: {
        List: BreadcrumbList,
        Item: BreadcrumbItem,
        Separator: BreadcrumbSeparator
    }
});
