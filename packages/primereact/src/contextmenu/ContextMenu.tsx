'use client';
import { useContextMenu } from '@primereact/headless/contextmenu';
import { styles } from '@primereact/styles/contextmenu';
import { ContextMenuInstance, ContextMenuProps } from '@primereact/types/shared/contextmenu';
import { mergeProps, omit } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import { Menu, useMenuContext } from 'primereact/menu';
import * as React from 'react';
import { ContextMenuProvider } from './ContextMenu.context';
import { defaultProps } from './ContextMenu.props';
import { ContextMenuIcon } from './icon';
import { ContextMenuItem } from './item';
import { ContextMenuList } from './list';
import { ContextMenuPortal } from './portal';
import { ContextMenuSeparator } from './separator';
import { ContextMenuSub } from './sub';
import { ContextMenuTrigger } from './trigger';

export const ContextMenu = withComponent({
    name: 'ContextMenu',
    defaultProps,
    styles,
    setup: (instance) => {
        const contextmenu = useContextMenu(instance?.inProps);
        const menu = useMenuContext();

        return { ...contextmenu, menu };
    },
    render: (instance) => {
        const { id, props, ptmi, cx, inProps } = instance;

        const rootProps = mergeProps(
            {
                id,
                className: cx('root')
            },
            {
                ...(omit(inProps, ...Object.keys(defaultProps)) as Record<PropertyKey, unknown>)
            },
            ptmi('root')
        );

        return (
            <ContextMenuProvider value={instance as unknown as ContextMenuInstance}>
                <Menu {...(props as ContextMenuProps)} composite {...rootProps}>
                    {props.children}
                </Menu>
            </ContextMenuProvider>
        );
    },
    components: {
        List: ContextMenuList,
        Item: ContextMenuItem,
        Trigger: ContextMenuTrigger,
        Portal: ContextMenuPortal,
        Sub: ContextMenuSub,
        Separator: ContextMenuSeparator,
        Icon: ContextMenuIcon
    }
});
