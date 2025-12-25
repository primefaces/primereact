'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { Menu, useMenuContext } from 'primereact/menu';
import * as React from 'react';
import { useContextMenuContext } from '../ContextMenu.context';
import { defaultCheckboxItemProps } from './ContextMenuCheckboxItem.props';

export const ContextMenuCheckboxItem = withComponent({
    name: 'ContextMenuCheckboxItem',
    defaultProps: defaultCheckboxItemProps,
    setup() {
        const contextmenu = useContextMenuContext();
        const menu = useMenuContext();

        return { contextmenu, menu };
    },
    render(instance) {
        const { props, ptmi, contextmenu } = instance;

        const rootProps = mergeProps(
            {
                className: contextmenu?.cx('checkboxitem')
            },
            ptmi('root')
        );

        // @ts-expect-error: Menu.CheckboxItem expects a type prop, but we are using it as a checkbox item.
        return <Component as={Menu.CheckboxItem} instance={instance} attrs={rootProps} pt={contextmenu?.ptm('checkboxItem')} children={props.children} />;
    }
});
