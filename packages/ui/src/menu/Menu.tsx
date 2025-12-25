'use client';
import { Component, withComponent } from '@primereact/core/component';
import { useMenu } from '@primereact/headless/menu';
import { styles } from '@primereact/styles/menu';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { MenuProvider } from './Menu.context';
import { defaultProps } from './Menu.props';
import { MenuLevelProvider } from './MenuLevel.context';
import { MenuCheckboxIcon } from './checkboxicon';
import { MenuCheckboxItem } from './checkboxitem';
import { MenuIcon } from './icon';
import { MenuItem } from './item';
import { MenuLabel } from './label';
import { MenuList } from './list';
import { MenuPortal } from './portal';
import { MenuRadioGroup } from './radiogroup';
import { MenuRadioIcon } from './radioicon';
import { MenuRadioItem } from './radioitem';
import { MenuSeparator } from './separator';
import { MenuSub } from './sub';
import { MenuTrigger } from './trigger';

export const Menu = withComponent({
    name: 'Menu',
    defaultProps,
    styles,
    setup(instance) {
        const menu = useMenu(instance?.inProps);

        return menu;
    },
    render(instance) {
        const { id, props, ptmi, cx } = instance;

        const rootProps = mergeProps(
            {
                id,
                className: cx('root')
            },
            ptmi('root')
        );

        return (
            <MenuProvider value={instance}>
                <MenuLevelProvider parentPath={[]} parentIndex={null}>
                    <Component instance={instance} attrs={rootProps} children={props.children} />
                </MenuLevelProvider>
            </MenuProvider>
        );
    },
    components: {
        List: MenuList,
        Item: MenuItem,
        CheckboxItem: MenuCheckboxItem,
        RadioGroup: MenuRadioGroup,
        RadioItem: MenuRadioItem,
        Label: MenuLabel,
        Trigger: MenuTrigger,
        Portal: MenuPortal,
        Sub: MenuSub,
        Separator: MenuSeparator,
        Icon: MenuIcon,
        CheckboxIcon: MenuCheckboxIcon,
        RadioIcon: MenuRadioIcon
    }
});
