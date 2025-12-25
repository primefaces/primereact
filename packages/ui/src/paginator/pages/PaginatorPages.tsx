'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { PaginatorEllipsis } from '../ellipsis';
import { PaginatorPage } from '../page/PaginatorPage';
import { usePaginatorContext } from '../Paginator.context';
import { defaultPagesProps } from './PaginatorPages.props';

export const PaginatorPages = withComponent({
    name: 'PaginatorPages',
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

        const pages = paginator?.pages.map((page, index) => (page.type === 'page' ? <PaginatorPage key={index} value={page.value} /> : <PaginatorEllipsis key={index} />));

        return <Component instance={instance} attrs={rootProps} children={props.children ?? pages} />;
    }
});
