'use client';
import { Component, withComponent } from '@primereact/core/component';
import { MenuLabel } from '@primereact/ui/menu';
import { mergeDefaultProps } from '@primeuix/utils';
import { ContextMenuLabel, defaultLabelProps } from 'primereact/contextmenu';
import * as React from 'react';

export const UIContextMenuLabel = withComponent({
    name: 'UIContextMenuLabel',
    defaultProps: defaultLabelProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ as: MenuLabel }, instance.inProps);

        return <Component as={ContextMenuLabel} attrs={rootProps} />;
    }
});
