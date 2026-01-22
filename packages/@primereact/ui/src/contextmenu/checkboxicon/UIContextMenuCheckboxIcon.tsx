'use client';
import { Component, withComponent } from '@primereact/core/component';
import { MenuCheckboxIcon } from '@primereact/ui/menu';
import { mergeDefaultProps } from '@primeuix/utils';
import { ContextMenuCheckboxIcon, defaultCheckboxIconProps } from 'primereact/contextmenu';
import * as React from 'react';

export const UIContextMenuCheckboxIcon = withComponent({
    name: 'ContextMenu.CheckboxIcon',
    defaultProps: defaultCheckboxIconProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ as: MenuCheckboxIcon }, instance.inProps);

        return <Component as={ContextMenuCheckboxIcon} attrs={rootProps} />;
    }
});
