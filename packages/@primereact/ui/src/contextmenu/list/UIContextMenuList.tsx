'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeDefaultProps } from '@primereact/core/utils';
import { MenuList } from '@primereact/ui/menu';
import { ContextMenuList, defaultListProps } from 'primereact/contextmenu';
import * as React from 'react';

export const UIContextMenuList = withComponent({
    name: 'UIContextMenuList',
    defaultProps: defaultListProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ as: MenuList }, instance.inProps);

        return <Component as={ContextMenuList} attrs={rootProps} />;
    }
});
