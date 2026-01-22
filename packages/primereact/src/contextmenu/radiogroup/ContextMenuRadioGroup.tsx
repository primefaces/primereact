'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { useMenuContext } from 'primereact/menu';
import * as React from 'react';
import { useContextMenuContext } from '../ContextMenu.context';
import { defaultRadioGroupProps } from './ContextMenuRadioGroup.props';

export const ContextMenuRadioGroup = withComponent({
    name: 'ContextMenu.RadioGroup',
    defaultProps: defaultRadioGroupProps,
    setup() {
        const contextmenu = useContextMenuContext();
        const menu = useMenuContext();

        return { contextmenu, menu };
    },
    render(instance) {
        const { props, ptmi, contextmenu } = instance;
        const { as, ...restProps } = props;

        const rootProps = mergeProps(restProps, contextmenu?.ptm('radioGroup'), ptmi('root'));

        return <Component as={as} instance={instance} attrs={rootProps} children={props.children} />;
    }
});
