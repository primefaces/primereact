'use client';
import { Component, withComponent } from '@primereact/core/component';
import { MenuIcon } from '@primereact/ui/menu';
import { mergeDefaultProps } from '@primeuix/utils';
import { ContextMenuIcon, defaultIconProps } from 'primereact/contextmenu';
import * as React from 'react';

export const UIContextMenuIcon = withComponent({
    name: 'ContextMenu.Icon',
    defaultProps: defaultIconProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ as: MenuIcon }, instance.inProps);

        return <Component as={ContextMenuIcon} attrs={rootProps} />;
    }
});
