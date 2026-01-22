'use client';
import { Component, withComponent } from '@primereact/core/component';
import { MenuItem } from '@primereact/ui/menu';
import { mergeDefaultProps } from '@primeuix/utils';
import { ContextMenuItem, defaultItemProps } from 'primereact/contextmenu';
import * as React from 'react';

export const UIContextMenuItem = withComponent({
    name: 'UIContextMenuItem',
    defaultProps: defaultItemProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ as: MenuItem }, instance.inProps);

        return <Component as={ContextMenuItem} attrs={rootProps} />;
    }
});
