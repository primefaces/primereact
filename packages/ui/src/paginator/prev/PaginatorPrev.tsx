'use client';
import { Component, withComponent } from '@primereact/core/component';
import { AngleLeftIcon } from '@primereact/icons/angleleft';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { usePaginatorContext } from '../Paginator.context';
import { defaultPrevProps } from './PaginatorPrev.props';

export const PaginatorPrev = withComponent({
    name: 'PaginatorPrev',
    defaultProps: defaultPrevProps,
    setup() {
        const paginator = usePaginatorContext();

        return { paginator };
    },
    render(instance) {
        const { id, props, ptmi, ptm, paginator } = instance;

        const disabled = !paginator?.state.canPrev || paginator?.props.disabled || props.disabled;
        const rootProps = mergeProps(
            {
                id,
                className: paginator?.cx('prev', { disabled }),
                onClick: paginator?.prev,
                disabled,
                'aria-label': paginator?.getAriaLabel('prevPageLabel')
            },
            paginator?.ptmi('prev'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children ?? <AngleLeftIcon className={paginator?.cx('prevIcon')} {...ptm('prevIcon')} />} />;
    },
    components: {}
});
