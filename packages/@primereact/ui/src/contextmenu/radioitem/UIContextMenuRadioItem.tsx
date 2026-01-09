'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeDefaultProps } from '@primereact/core/utils';
import { MenuRadioItem } from '@primereact/ui/menu';
import { ContextMenuRadioItem, defaultRadioItemProps } from 'primereact/contextmenu';
import * as React from 'react';

export const UIContextMenuRadioItem = withComponent({
    name: 'UIContextMenuRadioItem',
    defaultProps: defaultRadioItemProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ as: MenuRadioItem }, instance.inProps);

        return <Component as={ContextMenuRadioItem} attrs={rootProps} />;
    }
});
