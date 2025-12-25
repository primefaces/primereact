'use client';
import { Component, withComponent } from '@primereact/core/component';
import { AngleDoubleRightIcon } from '@primereact/icons/angledoubleright';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { usePaginatorContext } from '../Paginator.context';
import { defaultLastProps } from './PaginatorLast.props';

export const PaginatorLast = withComponent({
    name: 'PaginatorLast',
    defaultProps: defaultLastProps,
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
                className: paginator?.cx('last', { disabled }),
                onClick: paginator?.last,
                disabled,
                'aria-label': paginator?.getAriaLabel('lastPageLabel')
            },
            paginator?.ptmi('last'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children ?? <AngleDoubleRightIcon className={paginator?.cx('lastIcon')} {...ptm('lastIcon')} />} />;
    },
    components: {}
});
