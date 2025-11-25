'use client';
import { Component } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import { Menu, useMenuContext } from 'primereact/menu';
import * as React from 'react';
import { useContextMenuContext } from '../ContextMenu.context';
import { defaultIconProps } from './ContextMenuIcon.props';

export const ContextMenuIcon = withComponent({
    name: 'ContextMenuIcon',
    defaultProps: defaultIconProps,
    setup() {
        const contextmenu = useContextMenuContext();
        const menu = useMenuContext();

        return { contextmenu, menu };
    },
    render(instance) {
        const { props, ptmi, contextmenu } = instance;

        const rootProps = mergeProps(
            {
                className: contextmenu?.cx('icon')
            },
            ptmi('root')
        );

        // @ts-expect-error: Menu.Icon expects a type prop, but we are using it as a icon.
        return <Component as={Menu.Icon} instance={instance} attrs={rootProps} pt={contextmenu?.ptm('icon')} children={props.children} />;
    }
});
