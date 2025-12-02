'use client';
import { Component } from '@primereact/core/component';
import { ChevronRightIcon } from '@primereact/icons';
import { mergeProps, resolve } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { useBreadcrumbContext } from '../Breadcrumb.context';
import { defaultSeparatorProps } from './BreadcrumbSeparator.props';

export const BreadcrumbSeparator = withComponent({
    name: 'BreadcrumbSeparator',
    defaultProps: defaultSeparatorProps,
    setup() {
        const breadcrumb = useBreadcrumbContext();

        return { breadcrumb };
    },
    render(instance) {
        const { props, ptmi, breadcrumb } = instance;

        const rootProps = mergeProps(
            {
                className: breadcrumb?.cx('separator')
            },
            breadcrumb?.ptm('separator'),
            ptmi('root')
        );

        const createIconElement = () => {
            return <ChevronRightIcon pt={breadcrumb?.ptm('icon')} />;
        };

        return (
            <Component instance={instance} attrs={rootProps}>
                {props.children ? resolve(props.children, instance) : createIconElement()}
            </Component>
        );
    }
});
