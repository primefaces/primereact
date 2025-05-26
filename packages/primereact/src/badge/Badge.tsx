'use client';
import { Component } from '@primereact/core/component';
import { useBadge } from '@primereact/headless/badge';
import { styles } from '@primereact/styles/badge';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { BadgeProvider } from './Badge.context';
import { defaultProps } from './Badge.props';
import { OverlayBadge } from './overlay';

export const Badge = withComponent({
    name: 'Badge',
    defaultProps,
    styles,
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
    },
    components: {
        Overlay: OverlayBadge
    }
});
