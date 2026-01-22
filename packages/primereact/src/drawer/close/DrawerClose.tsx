'use client';
import { Component, withComponent } from '@primereact/core/component';
import { TimesIcon } from '@primereact/icons';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useDrawerContext } from '../Drawer.context';
import { defaultCloseProps } from './DrawerClose.props';

export const DrawerClose = withComponent({
    name: 'Drawer.Close',
    defaultProps: defaultCloseProps,
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
                type: 'button',
                className: drawer?.cx('close'),
                onClick: drawer?.close
            },
            drawer?.ptm('close'),
            ptmi('root')
        );

        const createIconElement = () => {
            return <TimesIcon pt={drawer?.ptm('closeIcon')} />;
        };

        const icon = createIconElement();

        return <Component ref={drawer?.closeButtonRef} as={as} instance={instance} attrs={rootProps} children={props.children ?? icon} />;
    }
});
