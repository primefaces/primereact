'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeDefaultProps } from '@primereact/core/utils';
import { MenuPortal } from '@primereact/ui/menu';
import { ContextMenuPortal, defaultPortalProps } from 'primereact/contextmenu';
import * as React from 'react';

export const UIContextMenuPortal = withComponent({
    name: 'UIContextMenuPortal',
    defaultProps: defaultPortalProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ as: MenuPortal }, instance.inProps);

        return <Component as={ContextMenuPortal} attrs={rootProps} />;
    }
});
