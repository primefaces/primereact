'use client';
import { withComponent } from '@primereact/core/component';
import { useContextMenu } from '@primereact/headless/contextmenu';
import { ContextMenuRootInstance, ContextMenuRootProps } from '@primereact/types/shared/contextmenu';
import { mergeProps } from '@primeuix/utils';
import { Menu, useMenuContext } from 'primereact/menu';
import * as React from 'react';
import { ContextMenuProvider } from '../ContextMenu.context';
import { defaultRootProps } from './ContextMenuRoot.props';

export const ContextMenuRoot = withComponent({
    name: 'ContextMenu.Root',
    defaultProps: defaultRootProps,
    setup(instance) {
        const contextmenu = useContextMenu(instance?.inProps);
        const menu = useMenuContext();

        return { ...contextmenu, menu };
    },
    render(instance) {
        const { id, props, ptmi, cx, inProps } = instance;

        const rootProps = mergeProps(
            {
                id,
                className: cx('root')
            },
            {
                ...inProps
            },
            ptmi('root')
        );

        return (
            <ContextMenuProvider value={instance as unknown as ContextMenuRootInstance}>
                <Menu.Root {...(props as ContextMenuRootProps)} composite {...rootProps}>
                    {props.children}
                </Menu.Root>
            </ContextMenuProvider>
        );
    }
});
