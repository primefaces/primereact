'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeDefaultProps } from '@primereact/core/utils';
import { MenuIcon } from '@primereact/ui/menu';
import { ContextMenuIcon, defaultIconProps } from 'primereact/contextmenu';
import * as React from 'react';

export const UIContextMenuIcon = withComponent({
    name: 'UIContextMenuIcon',
    defaultProps: defaultIconProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ as: MenuIcon }, instance.inProps);

        return <Component as={ContextMenuIcon} attrs={rootProps} />;
    }
});
