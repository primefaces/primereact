'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { usePaginatorContext } from '../Paginator.context';
import { defaultContentProps } from './PaginatorContent.props';

export const PaginatorContent = withComponent({
    name: 'PaginatorContent',
    defaultProps: defaultContentProps,
    setup() {
        const paginator = usePaginatorContext();

        return { paginator };
    },
    render(instance) {
        const { id, props, ptmi, paginator } = instance;

        const rootProps = mergeProps(
            {
                id,
                className: paginator?.cx('content')
            },
            paginator?.ptmi('content'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children} />;
    },
    components: {}
});
