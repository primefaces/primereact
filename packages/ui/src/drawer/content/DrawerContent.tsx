'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useDrawerContext } from '../Drawer.context';
import { defaultContentProps } from './DrawerContent.props';

export const DrawerContent = withComponent({
    name: 'DrawerContent',
    defaultProps: defaultContentProps,
    setup() {
        const drawer = useDrawerContext();

        return { drawer };
    },
    render(instance) {
        const { props, ptmi, drawer } = instance;

        const contentProps = mergeProps(
            {
                className: drawer?.cx('content')
            },
            drawer?.ptm('content'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={contentProps} children={props.children} />;
    }
});
