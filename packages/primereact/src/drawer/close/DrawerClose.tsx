'use client';
import { TimesIcon } from '@primereact/icons';
import type { ButtonProps } from '@primereact/types/shared/button';
import { mergeProps, resolve } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import { Button } from 'primereact/button';
import * as React from 'react';
import { useDrawerContext } from '../Drawer.context';
import { defaultCloseProps } from './DrawerClose.props';

export const DrawerClose = withComponent({
    name: 'DrawerClose',
    defaultProps: defaultCloseProps,
    setup() {
        const drawer = useDrawerContext();

        return { drawer };
    },
    render(instance) {
        const { props, ptmi, drawer } = instance;

        const rootProps = mergeProps(
            {
                ref: drawer?.closeButtonRef,
                type: 'button',
                className: drawer?.cx('close'),
                onClick: drawer?.close
            },
            drawer?.ptm('close'),
            ptmi('root')
        );

        return (
            <Button {...(props as ButtonProps)} {...rootProps}>
                {props.children ? resolve(props.children, instance) : <TimesIcon />}
            </Button>
        );
    }
});
