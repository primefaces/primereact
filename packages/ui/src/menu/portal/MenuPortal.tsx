'use client';
import { Component, withComponent } from '@primereact/core/component';
import type { useOverlayOpenChangeEvent } from '@primereact/types/shared/overlay';
import { mergeProps, resolve } from '@primeuix/utils';
import { Overlay } from 'primereact/overlay';
import * as React from 'react';
import { useMenuContext } from '../Menu.context';
import { MenuPortalProvider } from './MenuPortal.context';
import { defaultPortalProps } from './MenuPortal.props';

export const MenuPortal = withComponent({
    name: 'MenuPortal',
    defaultProps: defaultPortalProps,
    setup() {
        const menu = useMenuContext();

        return { menu };
    },
    render(instance) {
        const { props, ptmi, menu } = instance;

        const rootProps = mergeProps(
            {
                className: menu?.cx('portal')
            },
            ptmi('root')
        );

        return (
            <MenuPortalProvider value={instance}>
                <Component instance={instance} attrs={rootProps}>
                    <Overlay
                        ref={menu?.portalRef}
                        appendTo={menu?.props.appendTo}
                        target={menu?.state.contextMenuTarget || menu?.triggerRef?.current?.elementRef?.current}
                        type="menu"
                        open={menu?.state.opened}
                        onOpenChange={({ value }: useOverlayOpenChangeEvent) => menu?.changeVisibleState(value)}
                        onEnter={menu?.onOverlayEnter}
                    >
                        {resolve(props.children, instance)}
                    </Overlay>
                </Component>
            </MenuPortalProvider>
        );
    }
});
