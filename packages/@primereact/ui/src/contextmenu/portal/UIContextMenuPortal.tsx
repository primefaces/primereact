'use client';
import { Component, withComponent } from '@primereact/core/component';
import { MenuPortal } from '@primereact/ui/menu';
import { mergeDefaultProps } from '@primeuix/utils';
import { ContextMenuPortal, defaultPortalProps } from 'primereact/contextmenu';
import * as React from 'react';

export const UIContextMenuPortal = withComponent({
    name: 'ContextMenu.Portal',
    defaultProps: defaultPortalProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ as: MenuPortal }, instance.inProps);

        return <Component as={ContextMenuPortal} attrs={rootProps} />;
    }
});
