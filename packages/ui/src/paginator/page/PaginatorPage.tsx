'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { usePaginatorContext } from '../Paginator.context';
import { defaultPageProps } from './PaginatorPage.props';

export const PaginatorPage = withComponent({
    name: 'PaginatorPage',
    defaultProps: defaultPageProps,
    setup() {
        const paginator = usePaginatorContext();

        return { paginator };
    },
    render(instance) {
        const { id, props, ptmi, paginator, $primereact } = instance;
        // @ts-expect-error - TODO: fix this
        const ariaLabel = $primereact.config?.locale?.aria ? $primereact.config.locale.aria.pageLabel.replace(/{page}/g, props.value) : undefined;
        const disabled = paginator?.props.disabled || props.disabled;
        const rootProps = mergeProps(
            {
                id,
                className: paginator?.cx('page', { selected: paginator?.state.activePage === props.value, disabled }),
                onClick: () => paginator?.handlePage(props.value),
                disabled,
                'aria-label': ariaLabel,
                'aria-current': paginator?.state.activePage === props.value ? 'page' : undefined,
                'data-p-active': paginator?.state.activePage === props.value
            },
            paginator?.ptmi('page'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children ?? props.value} />;
    },
    components: {}
});
