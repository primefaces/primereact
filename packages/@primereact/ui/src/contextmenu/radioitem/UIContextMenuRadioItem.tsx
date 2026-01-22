'use client';
import { Component, withComponent } from '@primereact/core/component';
import { MenuRadioItem } from '@primereact/ui/menu';
import { mergeDefaultProps } from '@primeuix/utils';
import { ContextMenuRadioItem, defaultRadioItemProps } from 'primereact/contextmenu';
import * as React from 'react';

export const UIContextMenuRadioItem = withComponent({
    name: 'ContextMenu.RadioItem',
    defaultProps: defaultRadioItemProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ as: MenuRadioItem }, instance.inProps);

        return <Component as={ContextMenuRadioItem} attrs={rootProps} />;
    }
});
