'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { Menu, useMenuContext } from 'primereact/menu';
import * as React from 'react';
import { useContextMenuContext } from '../ContextMenu.context';
import { defaultRadioGroupProps } from './ContextMenuRadioGroup.props';

export const ContextMenuRadioGroup = withComponent({
    name: 'ContextMenuRadioGroup',
    defaultProps: defaultRadioGroupProps,
    setup() {
        const contextmenu = useContextMenuContext();
        const menu = useMenuContext();

        return { contextmenu, menu };
    },
    render(instance) {
        const { props, ptmi, contextmenu } = instance;

        const rootProps = mergeProps(ptmi('root'));

        // @ts-expect-error: Menu.RadioGroup expects a type prop, but we are using it as a radio group.
        return <Component as={Menu.RadioGroup} instance={instance} attrs={rootProps} pt={contextmenu?.ptm('radioGroup')} children={props.children} />;
    }
});
