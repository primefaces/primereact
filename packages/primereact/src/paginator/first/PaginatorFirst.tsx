'use client';
import { Component } from '@primereact/core/component';
import { AngleDoubleLeftIcon } from '@primereact/icons/angledoubleleft';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { usePaginatorContext } from '../Paginator.context';
import { defaultFirstProps } from './PaginatorFirst.props';

export const PaginatorFirst = withComponent({
    name: 'PaginatorFirst',
    defaultProps: defaultFirstProps,
    setup: () => {
        const paginator = usePaginatorContext();

        return { paginator };
    },
    render: (instance) => {
        const { id, props, ptmi, ptm, paginator } = instance;

        const disabled = !paginator?.state.canPrev || paginator?.props.disabled || props.disabled;
        const rootProps = mergeProps(
            {
                id,
                className: paginator?.cx('first', { disabled }),
                onClick: paginator?.first,
                disabled,
                'aria-label': paginator?.getAriaLabel('firstPageLabel')
            },
            paginator?.ptmi('first'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children ?? <AngleDoubleLeftIcon className={paginator?.cx('firstIcon')} {...ptm('firstIcon')} />} />;
    },
    components: {}
});
