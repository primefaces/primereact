'use client';
import { Component } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import { Menu, useMenuContext } from 'primereact/menu';
import * as React from 'react';
import { useContextMenuContext } from '../ContextMenu.context';
import { defaultCheckboxGroupProps } from './ContextMenuCheckboxGroup.props';

export const ContextMenuCheckboxGroup = withComponent({
    name: 'ContextMenuCheckboxGroup',
    defaultProps: defaultCheckboxGroupProps,
    setup() {
        const contextmenu = useContextMenuContext();
        const menu = useMenuContext();

        return { contextmenu, menu };
    },
    render(instance) {
        const { props, ptmi, contextmenu } = instance;

        const rootProps = mergeProps(ptmi('root'));

        // @ts-expect-error: Menu.CheckboxGroup expects a type prop, but we are using it as a checkbox group.
        return <Component as={Menu.CheckboxGroup} instance={instance} attrs={rootProps} pt={contextmenu?.ptm('checkboxGroup')} children={props.children} />;
    }
});
