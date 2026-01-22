'use client';
import { Component, withComponent } from '@primereact/core/component';
import { MenuSub } from '@primereact/ui/menu';
import { mergeDefaultProps } from '@primeuix/utils';
import { ContextMenuSub, defaultSubProps } from 'primereact/contextmenu';
import * as React from 'react';

export const UIContextMenuSub = withComponent({
    name: 'UIContextMenuSub',
    defaultProps: defaultSubProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ as: MenuSub }, instance.inProps);

        return <Component as={ContextMenuSub} attrs={rootProps} />;
    }
});
