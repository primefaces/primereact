'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeDefaultProps } from '@primereact/core/utils';
import { MenuSeparator } from '@primereact/ui/menu';
import { ContextMenuSeparator, defaultSeparatorProps } from 'primereact/contextmenu';
import * as React from 'react';

export const UIContextMenuSeparator = withComponent({
    name: 'UIContextMenuSeparator',
    defaultProps: defaultSeparatorProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ as: MenuSeparator }, instance.inProps);

        return <Component as={ContextMenuSeparator} attrs={rootProps} />;
    }
});
