'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { usePaginatorContext } from '../Paginator.context';
import { defaultPagesProps } from './PaginatorPages.props';

export const PaginatorPages = withComponent({
    name: 'Paginator.Pages',
    defaultProps: defaultPagesProps,
    setup() {
        const paginator = usePaginatorContext();

        return { paginator };
    },
    render(instance) {
        const { id, props, paginator, ptmi } = instance;

        const rootProps = mergeProps(
            {
                id,
                className: paginator?.cx('pages'),
                'aria-label': paginator?.getAriaLabel('pageLabel')
            },
            paginator?.ptmi('pages'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children} />;
    }
});
