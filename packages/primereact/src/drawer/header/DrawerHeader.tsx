'use client';
import { Component } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { useDrawerContext } from '../Drawer.context';
import { defaultHeaderProps } from './DrawerHeader.props';

export const DrawerHeader = withComponent({
    name: 'DrawerHeader',
    defaultProps: defaultHeaderProps,
    setup() {
        const drawer = useDrawerContext();

        return { drawer };
    },
    render(instance) {
        const { props, ptmi, drawer } = instance;

        const headerProps = mergeProps(
            {
                id: drawer?.inProps?.ariaLabelledby ?? drawer?.id + '_header',
                className: drawer?.cx('header')
            },
            drawer?.ptm('header'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={headerProps} children={props.children} />;
    }
});
