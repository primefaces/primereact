'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { useMenuContext } from 'primereact/menu';
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
        const { as, ...restProps } = props;

        const rootProps = mergeProps(
            restProps,
            {
                className: contextmenu?.cx('checkboxitem')
            },
            contextmenu?.ptm('checkboxItem'),
            ptmi('root')
        );

        return <Component as={as} instance={instance} attrs={rootProps} children={props.children} />;
    }
});
