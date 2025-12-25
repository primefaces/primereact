'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { Menu, useMenuContext } from 'primereact/menu';
import * as React from 'react';
import { useContextMenuContext } from '../ContextMenu.context';
import { defaultRadioIconProps } from './ContextMenuRadioIcon.props';

export const ContextMenuRadioIcon = withComponent({
    name: 'ContextMenuRadioIcon',
    defaultProps: defaultRadioIconProps,
    setup() {
        const contextmenu = useContextMenuContext();
        const menu = useMenuContext();

        return { contextmenu, menu };
    },
    render(instance) {
        const { props, ptmi, contextmenu } = instance;

        const rootProps = mergeProps(
            {
                className: contextmenu?.cx('radioIcon')
            },
            ptmi('root')
        );

        // @ts-expect-error: Menu.RadioIcon expects a type prop, but we are using it as a radio icon.
        return <Component as={Menu.RadioIcon} instance={instance} attrs={rootProps} pt={contextmenu?.ptm('radioIcon')} children={props.children} />;
    }
});
