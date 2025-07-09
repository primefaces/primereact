'use client';
import type { ButtonProps } from '@primereact/types/shared/button';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
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
            drawer?.ptm('trigger'),
            ptmi('root')
        );

        return (
            <Button {...(props as ButtonProps)} {...rootProps}>
                {props.children}
            </Button>
        );
    }
});
