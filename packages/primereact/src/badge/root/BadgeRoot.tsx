'use client';
import { Component, withComponent } from '@primereact/core/component';
import { useBadge } from '@primereact/headless/badge';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { BadgeProvider } from '../Badge.context';
import { defaultRootProps } from './BadgeRoot.props';

export const BadgeRoot = withComponent({
    name: 'BadgeRoot',
    defaultProps: defaultRootProps,
    setup(instance) {
        const badge = useBadge(instance.inProps);

        return badge;
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
            <BadgeProvider value={instance}>
                <Component instance={instance} attrs={rootProps} children={props.children} />
            </BadgeProvider>
        );
    }
});
