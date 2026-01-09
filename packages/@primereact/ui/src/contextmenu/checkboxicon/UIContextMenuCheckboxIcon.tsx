'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeDefaultProps } from '@primereact/core/utils';
import { MenuCheckboxIcon } from '@primereact/ui/menu';
import { ContextMenuCheckboxIcon, defaultCheckboxIconProps } from 'primereact/contextmenu';
import * as React from 'react';

export const UIContextMenuCheckboxIcon = withComponent({
    name: 'UIContextMenuCheckboxIcon',
    defaultProps: defaultCheckboxIconProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ as: MenuCheckboxIcon }, instance.inProps);

        return <Component as={ContextMenuCheckboxIcon} attrs={rootProps} />;
    }
});
