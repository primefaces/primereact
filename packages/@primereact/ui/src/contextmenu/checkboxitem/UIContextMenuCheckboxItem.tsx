'use client';
import { Component, withComponent } from '@primereact/core/component';
import { MenuCheckboxItem } from '@primereact/ui/menu';
import { mergeDefaultProps } from '@primeuix/utils';
import { ContextMenuCheckboxItem, defaultCheckboxItemProps } from 'primereact/contextmenu';
import * as React from 'react';

export const UIContextMenuCheckboxItem = withComponent({
    name: 'UIContextMenuCheckboxItem',
    defaultProps: defaultCheckboxItemProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ as: MenuCheckboxItem }, instance.inProps);

        return <Component as={ContextMenuCheckboxItem} attrs={rootProps} />;
    }
});
