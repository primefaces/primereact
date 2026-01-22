'use client';
import { Component, withComponent } from '@primereact/core/component';
import { MenuList } from '@primereact/ui/menu';
import { mergeDefaultProps } from '@primeuix/utils';
import { ContextMenuList, defaultListProps } from 'primereact/contextmenu';
import * as React from 'react';

export const UIContextMenuList = withComponent({
    name: 'ContextMenu.List',
    defaultProps: defaultListProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ as: MenuList }, instance.inProps);

        return <Component as={ContextMenuList} attrs={rootProps} />;
    }
});
