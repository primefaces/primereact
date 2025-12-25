'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useDrawerContext } from '../Drawer.context';
import { defaultFooterProps } from './DrawerFooter.props';

export const DrawerFooter = withComponent({
    name: 'DrawerFooter',
    defaultProps: defaultFooterProps,
    setup() {
        const drawer = useDrawerContext();

        return { drawer };
    },
    render(instance) {
        const { props, ptmi, drawer } = instance;

        const footerProps = mergeProps(
            {
                className: drawer?.cx('footer')
            },
            drawer?.ptm('footer'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={footerProps} children={props.children} />;
    }
});
