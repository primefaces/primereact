'use client';
import { Component } from '@primereact/core/component';
import type { useOverlayOpenChangeEvent } from '@primereact/types/shared/overlay';
import { mergeProps, resolve } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import { Overlay } from 'primereact/overlay';
import * as React from 'react';
import { useMenuContext } from '../Menu.context';
import { useMenuSubContext } from '../sub/MenuSub.context';
import { MenuPortalProvider } from './MenuPortal.context';
import { defaultPortalProps } from './MenuPortal.props';

export const MenuPortal = withComponent({
    name: 'MenuPortal',
    defaultProps: defaultPortalProps,
    setup() {
        const menu = useMenuContext();
        const submenu = useMenuSubContext();

        return { menu, submenu };
    },
    render(instance) {
        const { props, ptmi, menu, submenu } = instance;

        const rootProps = mergeProps(
            {
                className: menu?.cx('portal')
            },
            ptmi('root')
        );

        return (
            <MenuPortalProvider value={instance}>
                <Component instance={instance} attrs={rootProps}>
                    {submenu ? (
                        <Overlay
                            ref={submenu?.portalRef}
                            appendTo={menu?.props.appendTo}
                            target={submenu?.triggerRef?.current}
                            type="menu"
                            open={submenu?.state.opened}
                            // onOpenChange={({ value }: useOverlayOpenChangeEvent) => menu?.changeVisibleState(value)}
                            onEnter={menu?.onOverlayEnter} //TODO: should we have separate onEnter for submenu?
                        >
                            {resolve(props.children, instance)}
                        </Overlay>
                    ) : (
                        <Overlay
                            ref={menu?.portalRef}
                            appendTo={menu?.props.appendTo}
                            target={menu?.triggerRef?.current?.elementRef?.current}
                            type="menu"
                            open={menu?.state.opened}
                            onOpenChange={({ value }: useOverlayOpenChangeEvent) => menu?.changeVisibleState(value)}
                            onEnter={menu?.onOverlayEnter}
                        >
                            {resolve(props.children, instance)}
                        </Overlay>
                    )}
                </Component>
            </MenuPortalProvider>
        );
    }
});
