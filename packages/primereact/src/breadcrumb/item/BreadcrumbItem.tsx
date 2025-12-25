'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useBreadcrumbContext } from '../Breadcrumb.context';
import { defaultItemProps } from './BreadcrumbItem.props';

export const BreadcrumbItem = withComponent({
    name: 'BreadcrumbItem',
    defaultProps: defaultItemProps,
    setup() {
        const breadcrumb = useBreadcrumbContext();

        return { breadcrumb };
    },
    render(instance) {
        const { props, ptmi, breadcrumb } = instance;

        const rootProps = mergeProps(
            {
                className: breadcrumb?.cx('item', { disabled: props.disabled }),
                tabIndex: props.disabled ? -1 : undefined,
                'aria-current': props.isCurrent ? 'page' : undefined,
                'data-p-disabled': props.disabled,
                onClick: (event: React.MouseEvent) => breadcrumb?.onAction(event, props.uKey as string)
            },
            breadcrumb?.ptm('item'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children} />;
    }
});
