'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { usePaginatorContext } from '../Paginator.context';
import { defaultEllipsisProps } from './PaginatorEllipsis.props';

export const PaginatorEllipsis = withComponent({
    name: 'PaginatorEllipsis',
    defaultProps: defaultEllipsisProps,
    setup() {
        const paginator = usePaginatorContext();

        return { paginator };
    },
    render(instance) {
        const { id, props, ptmi, paginator } = instance;

        const rootProps = mergeProps(
            {
                id,
                className: paginator?.cx('ellipsis')
            },
            paginator?.ptmi('ellipsis'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children ?? '...'} />;
    },
    components: {}
});
