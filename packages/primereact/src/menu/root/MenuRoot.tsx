'use client';
import { Component, withComponent } from '@primereact/core/component';
import { useMenu } from '@primereact/headless/menu';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { MenuProvider } from '../Menu.context';
import { MenuLevelProvider } from '../MenuLevel.context';
import { defaultRootProps } from './MenuRoot.props';

export const MenuRoot = withComponent({
    name: 'MenuRoot',
    defaultProps: defaultRootProps,
    setup(instance) {
        const menu = useMenu(instance?.inProps);

        return menu;
    },
    render(instance) {
        const { id, props, ptmi, cx } = instance;

        const rootProps = mergeProps(
            {
                id,
                className: cx('root')
            },
            ptmi('root')
        );

        return (
            <MenuProvider value={instance}>
                <MenuLevelProvider parentPath={[]} parentIndex={null}>
                    <Component instance={instance} attrs={rootProps} children={props.children} />
                </MenuLevelProvider>
            </MenuProvider>
        );
    }
});
