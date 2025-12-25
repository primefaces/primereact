'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useMenuContext } from '../Menu.context';
import { defaultSeparatorProps } from './MenuSeparator.props';

export const MenuSeparator = withComponent({
    name: 'MenuSeparator',
    defaultProps: defaultSeparatorProps,
    setup() {
        const menu = useMenuContext();

        return { menu };
    },
    render(instance) {
        const { props, ptmi, menu } = instance;

        const rootProps = mergeProps(
            {
                className: menu?.cx('separator'),
                role: 'separator'
            },
            menu?.ptm('separator'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children} />;
    }
});
