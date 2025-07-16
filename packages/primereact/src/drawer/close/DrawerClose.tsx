'use client';
import { Component } from '@primereact/core/component';
import { TimesIcon } from '@primereact/icons';
import { mergeProps } from '@primeuix/utils';
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
                type: 'button',
                className: drawer?.cx('close'),
                onClick: drawer?.close
            },
            ptmi('root')
        );

        const createIconElement = () => {
            return <TimesIcon pt={drawer?.ptm('closeIcon')} />;
        };

        const icon = createIconElement();

        // @ts-expect-error: Button expects a type prop, but we are using it as a close button.
        return <Component ref={drawer?.closeButtonRef} as={Button} instance={instance} attrs={{ ...props, ...rootProps }} pt={drawer?.ptm('close')} children={props.children ?? icon} />;
    }
});
