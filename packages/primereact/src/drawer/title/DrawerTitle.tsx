'use client';
import { Component } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { useDrawerContext } from '../Drawer.context';
import { defaultTitleProps } from './DrawerTitle.props';

export const DrawerTitle = withComponent({
    name: 'DrawerTitle',
    defaultProps: defaultTitleProps,
    setup() {
        const drawer = useDrawerContext();

        return { drawer };
    },
    render(instance) {
        const { props, ptmi, drawer } = instance;

        const titleProps = mergeProps(
            {
                className: drawer?.cx('title')
            },
            drawer?.ptm('title'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={titleProps} children={props.children} />;
    }
});
