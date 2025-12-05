'use client';
import { Component } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import { Menu, useMenuContext } from 'primereact/menu';
import * as React from 'react';
import { useContextMenuContext } from '../ContextMenu.context';
import { defaultPortalProps } from './ContextMenuPortal.props';

export const ContextMenuPortal = withComponent({
    name: 'ContextMenuPortal',
    defaultProps: defaultPortalProps,
    setup() {
        const contextmenu = useContextMenuContext();
        const menu = useMenuContext();

        return { contextmenu, menu };
    },
    render(instance) {
        const { props, ptmi, contextmenu } = instance;

        const rootProps = mergeProps(
            {
                className: contextmenu?.cx('portal')
            },
            ptmi('root')
        );

        // @ts-expect-error: Menu.Portal expects a type prop, but we are using it as a portal.
        return <Component as={Menu.Portal} instance={instance} attrs={rootProps} pt={contextmenu?.ptm('portal')} children={props.children} />;
    }
});
