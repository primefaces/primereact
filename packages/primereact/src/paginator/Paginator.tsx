'use client';
import { Component } from '@primereact/core/component';
import { usePaginator } from '@primereact/headless/paginator';
import { styles } from '@primereact/styles/paginator';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { PaginatorProvider } from './Paginator.context';
import { defaultProps } from './Paginator.props';
import { PaginatorContent } from './content';
import { PaginatorEllipsis } from './ellipsis';
import { PaginatorFirst } from './first';
import { PaginatorLast } from './last';
import { PaginatorNext } from './next';
import { PaginatorPage } from './page';
import { PaginatorPages } from './pages';
import { PaginatorPrev } from './prev';

export const Paginator = withComponent({
    name: 'Paginator',
    defaultProps,
    styles,
    setup: (instance) => {
        const paginator = usePaginator(instance?.inProps);

        const getAriaLabel = (labelType: string) => {
            // @ts-expect-error - TODO: fix this
            return instance?.$primereact?.config?.locale?.aria ? instance?.$primereact?.config?.locale?.aria[labelType] : undefined;
        };

        return { ...paginator, getAriaLabel };
    },
    render: (instance) => {
        const { id, props, ptmi, cx } = instance;

        const rootProps = mergeProps(
            {
                id,
                className: cx('root')
            },
            ptmi('root')
        );

        return (
            <PaginatorProvider value={instance}>
                <Component instance={instance} attrs={rootProps} children={props.children} />
            </PaginatorProvider>
        );
    },
    components: {
        First: PaginatorFirst,
        Last: PaginatorLast,
        Next: PaginatorNext,
        Prev: PaginatorPrev,
        Pages: PaginatorPages,
        Page: PaginatorPage,
        Ellipsis: PaginatorEllipsis,
        Content: PaginatorContent
    }
});
