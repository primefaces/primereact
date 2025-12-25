'use client';
import { Component, withComponent } from '@primereact/core/component';
import { usePaginator } from '@primereact/headless/paginator';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { PaginatorProvider } from '../Paginator.context';
import { defaultRootProps } from './PaginatorRoot.props';

export const PaginatorRoot = withComponent({
    name: 'PaginatorRoot',
    defaultProps: defaultRootProps,
    setup(instance) {
        const paginator = usePaginator(instance?.inProps);

        const getAriaLabel = (labelType: string) => {
            // @ts-expect-error - TODO: fix this
            return instance?.$primereact?.config?.locale?.aria ? instance?.$primereact?.config?.locale?.aria[labelType] : undefined;
        };

        return { ...paginator, getAriaLabel };
    },
    render(instance) {
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
    }
});
