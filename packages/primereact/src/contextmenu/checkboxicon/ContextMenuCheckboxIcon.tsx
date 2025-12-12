'use client';
import { Component } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import { Menu, useMenuContext } from 'primereact/menu';
import * as React from 'react';
import { useContextMenuContext } from '../ContextMenu.context';
import { defaultCheckboxIconProps } from './ContextMenuCheckboxIcon.props';

export const ContextMenuCheckboxIcon = withComponent({
    name: 'ContextMenuCheckboxIcon',
    defaultProps: defaultCheckboxIconProps,
    setup() {
        const contextmenu = useContextMenuContext();
        const menu = useMenuContext();

        return { contextmenu, menu };
    },
    render(instance) {
        const { props, ptmi, contextmenu } = instance;

        const rootProps = mergeProps(
            {
                className: contextmenu?.cx('checkboxIcon')
            },
            ptmi('root')
        );

        // @ts-expect-error: Menu.CheckboxIcon expects a type prop, but we are using it as a checkbox icon.
        return <Component as={Menu.CheckboxIcon} instance={instance} attrs={rootProps} pt={contextmenu?.ptm('checkboxIcon')} children={props.children} />;
    }
});
