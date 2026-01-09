'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeDefaultProps } from '@primereact/core/utils';
import { MenuRadioIcon } from '@primereact/ui/menu';
import { ContextMenuRadioIcon, defaultRadioIconProps } from 'primereact/contextmenu';
import * as React from 'react';

export const UIContextMenuRadioIcon = withComponent({
    name: 'UIContextMenuRadioIcon',
    defaultProps: defaultRadioIconProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ as: MenuRadioIcon }, instance.inProps);

        return <Component as={ContextMenuRadioIcon} attrs={rootProps} />;
    }
});
