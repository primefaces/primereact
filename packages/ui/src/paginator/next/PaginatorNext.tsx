'use client';
import { Component, withComponent } from '@primereact/core/component';
import { AngleRightIcon } from '@primereact/icons/angleright';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { usePaginatorContext } from '../Paginator.context';
import { defaultNextProps } from './PaginatorNext.props';

export const PaginatorNext = withComponent({
    name: 'PaginatorNext',
    defaultProps: defaultNextProps,
    setup() {
        const paginator = usePaginatorContext();

        return { paginator };
    },
    render(instance) {
        const { id, props, ptmi, ptm, paginator } = instance;

        const disabled = !paginator?.state.canNext || paginator?.props.disabled || props.disabled;
        const rootProps = mergeProps(
            {
                id,
                className: paginator?.cx('next', { disabled }),
                onClick: paginator?.next,
                disabled,
                'aria-label': paginator?.getAriaLabel('nextPageLabel')
            },
            paginator?.ptmi('next'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children ?? <AngleRightIcon className={paginator?.cx('nextIcon')} {...ptm('nextIcon')} />} />;
    },
    components: {}
});
