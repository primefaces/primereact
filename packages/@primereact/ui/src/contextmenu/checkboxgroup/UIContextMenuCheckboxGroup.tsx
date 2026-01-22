'use client';
import { Component, withComponent } from '@primereact/core/component';
import { MenuCheckboxGroup } from '@primereact/ui/menu';
import { mergeDefaultProps } from '@primeuix/utils';
import { ContextMenuCheckboxGroup, defaultCheckboxGroupProps } from 'primereact/contextmenu';
import * as React from 'react';

export const UIContextMenuCheckboxGroup = withComponent({
    name: 'UIContextMenuCheckboxGroup',
    defaultProps: defaultCheckboxGroupProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ as: MenuCheckboxGroup }, instance.inProps);

        return <Component as={ContextMenuCheckboxGroup} attrs={rootProps} />;
    }
});
