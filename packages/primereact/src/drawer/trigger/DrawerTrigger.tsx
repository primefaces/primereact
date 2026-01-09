'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useDrawerContext } from '../Drawer.context';
import { defaultTriggerProps } from './DrawerTrigger.props';

export const DrawerTrigger = withComponent({
    name: 'DrawerTrigger',
    defaultProps: defaultTriggerProps,
    setup() {
        const drawer = useDrawerContext();

        return { drawer };
    },
    render(instance) {
        const { props, ptmi, drawer } = instance;
        const { as, ...restProps } = props;

        const rootProps = mergeProps(
            restProps,
            {
                className: drawer?.cx('trigger'),
                type: 'button',
                'aria-expanded': drawer?.state.opened,
                'aria-controls': drawer?.id,
                onClick: drawer?.onOpenStateChange
            },
            drawer?.ptm('trigger'),
            ptmi('root')
        );

        return <Component as={as} instance={instance} attrs={rootProps} children={props.children} />;
    }
});
