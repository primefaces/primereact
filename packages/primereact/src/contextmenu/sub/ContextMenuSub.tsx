'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { useMenuContext } from 'primereact/menu';
import * as React from 'react';
import { useContextMenuContext } from '../ContextMenu.context';
import { ContextMenuSubProvider } from './ContextMenuSub.context';
import { defaultSubProps } from './ContextMenuSub.props';

export const ContextMenuSub = withComponent({
    name: 'ContextMenu.Sub',
    defaultProps: defaultSubProps,
    setup() {
        const contextmenu = useContextMenuContext();
        const menu = useMenuContext();

        return { contextmenu, menu };
    },
    render(instance) {
        const { props, ptmi, contextmenu } = instance;
        const { as, ...restProps } = props;

        const rootProps = mergeProps(
            restProps,
            {
                className: contextmenu?.cx('submenu')
            },
            contextmenu?.ptm('submenu'),
            ptmi('root')
        );

        return (
            <ContextMenuSubProvider value={instance}>
                <Component as={as} instance={instance} attrs={rootProps} children={props.children} />
            </ContextMenuSubProvider>
        );
    }
});
