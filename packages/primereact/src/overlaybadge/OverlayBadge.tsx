'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { OverlayBadgeProvider } from './OverlayBadge.context';
import { defaultProps } from './OverlayBadge.props';

export const OverlayBadge = withComponent({
    name: 'OverlayBadge',
    defaultProps,
    render(instance) {
        const { props, ptmi, cx } = instance;

        const rootProps = mergeProps(
            {
                className: cx('root')
            },
            ptmi('root')
        );

        return (
            <OverlayBadgeProvider value={instance}>
                <Component instance={instance} attrs={rootProps} children={props.children} />
            </OverlayBadgeProvider>
        );
    }
});
