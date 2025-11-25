'use client';
import { Component } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { useMenuContext } from '../Menu.context';
import { defaultLabelProps } from './MenuLabel.props';

export const MenuLabel = withComponent({
    name: 'MenuLabel',
    defaultProps: defaultLabelProps,
    setup() {
        const menu = useMenuContext();

        return { menu };
    },
    render(instance) {
        const { props, ptmi, menu } = instance;

        const rootProps = mergeProps(
            {
                className: menu?.cx('label'),
                role: 'none'
            },
            menu?.ptm('label'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children} />;
    }
});
