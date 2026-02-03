'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { usePaginatorContext } from '../Paginator.context';
import { defaultFirstProps } from './PaginatorFirst.props';

export const PaginatorFirst = withComponent({
    name: 'Paginator.First',
    defaultProps: defaultFirstProps,
    setup() {
        const paginator = usePaginatorContext();

        return { paginator };
    },
    render(instance) {
        const { id, props, ptmi, paginator } = instance;

        const disabled = !paginator?.state.canPrev || paginator?.props.disabled || props.disabled;
        const rootProps = mergeProps(
            {
                id,
                className: paginator?.cx('first', { disabled }),
                onClick: paginator?.first,
                disabled,
                'aria-label': paginator?.getAriaLabel('firstPageLabel'),
                ...(disabled && { 'data-disabled': '' })
            },
            paginator?.ptmi('first'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children} />;
    }
});
