'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { Button } from 'primereact/button';
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

        const rootProps = mergeProps(
            {
                className: drawer?.cx('trigger'),
                type: 'button',
                'aria-expanded': drawer?.state.opened,
                'aria-controls': drawer?.id,
                onClick: drawer?.onOpenStateChange
            },
            ptmi('root')
        );

        // @ts-expect-error: Button expects a type prop, but we are using it as a trigger.
        return <Component as={Button} instance={instance} attrs={rootProps} pt={drawer?.ptm('trigger')} children={props.children} />;
    }
});
