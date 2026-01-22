'use client';
import { Component, withComponent } from '@primereact/core/component';
import { MenuRadioGroup } from '@primereact/ui/menu';
import { mergeDefaultProps } from '@primeuix/utils';
import { ContextMenuRadioGroup, defaultRadioGroupProps } from 'primereact/contextmenu';
import * as React from 'react';

export const UIContextMenuRadioGroup = withComponent({
    name: 'UIContextMenuRadioGroup',
    defaultProps: defaultRadioGroupProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ as: MenuRadioGroup }, instance.inProps);

        return <Component as={ContextMenuRadioGroup} attrs={rootProps} />;
    }
});
