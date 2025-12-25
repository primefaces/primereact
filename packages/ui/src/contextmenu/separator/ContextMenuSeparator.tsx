'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { Menu, useMenuContext } from 'primereact/menu';
import * as React from 'react';
import { useContextMenuContext } from '../ContextMenu.context';
import { defaultSeparatorProps } from './ContextMenuSeparator.props';

export const ContextMenuSeparator = withComponent({
    name: 'ContextMenuSeparator',
    defaultProps: defaultSeparatorProps,
    setup() {
        const contextmenu = useContextMenuContext();
        const menu = useMenuContext();

        return { contextmenu, menu };
    },
    render(instance) {
        const { props, ptmi, contextmenu } = instance;

        const rootProps = mergeProps(
            {
                className: contextmenu?.cx('separatormenu')
            },
            ptmi('root')
        );

        // @ts-expect-error: Menu.Separator expects a type prop, but we are using it as a separator.
        return <Component as={Menu.Separator} instance={instance} attrs={rootProps} pt={contextmenu?.ptm('separator')} children={props.children} />;
    }
});
