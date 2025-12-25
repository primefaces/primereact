'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { Menu, useMenuContext } from 'primereact/menu';
import * as React from 'react';
import { useContextMenuContext } from '../ContextMenu.context';
import { defaultLabelProps } from './ContextMenuLabel.props';

export const ContextMenuLabel = withComponent({
    name: 'ContextMenuLabel',
    defaultProps: defaultLabelProps,
    setup() {
        const contextmenu = useContextMenuContext();
        const menu = useMenuContext();

        return { contextmenu, menu };
    },
    render(instance) {
        const { props, ptmi, contextmenu } = instance;

        const rootProps = mergeProps(
            {
                className: contextmenu?.cx('label')
            },
            ptmi('root')
        );

        // @ts-expect-error: Menu.Label expects a type prop, but we are using it as a label.
        return <Component as={Menu.Label} instance={instance} attrs={rootProps} pt={contextmenu?.ptm('label')} children={props.children} />;
    }
});
