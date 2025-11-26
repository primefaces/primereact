'use client';
import { Component } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import { Menu, useMenuContext } from 'primereact/menu';
import * as React from 'react';
import { useContextMenuContext } from '../ContextMenu.context';
import { defaultRadioItemProps } from './ContextMenuRadioItem.props';

export const ContextMenuRadioItem = withComponent({
    name: 'ContextMenuRadioItem',
    defaultProps: defaultRadioItemProps,
    setup() {
        const contextmenu = useContextMenuContext();
        const menu = useMenuContext();

        return { contextmenu, menu };
    },
    render(instance) {
        const { props, ptmi, contextmenu } = instance;

        const rootProps = mergeProps(
            {
                className: contextmenu?.cx('radioitem')
            },
            ptmi('root')
        );

        // @ts-expect-error: Menu.RadioItem expects a type prop, but we are using it as a radio item.
        return <Component as={Menu.RadioItem} instance={instance} attrs={rootProps} pt={contextmenu?.ptm('radioItem')} children={props.children} />;
    }
});
