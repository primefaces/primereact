'use client';
import { withComponent } from '@primereact/core/component';
import { useContextMenu } from '@primereact/headless/contextmenu';
import { styles } from '@primereact/styles/contextmenu';
import { ContextMenuInstance, ContextMenuProps } from '@primereact/types/shared/contextmenu';
import { mergeProps } from '@primeuix/utils';
import { Menu, useMenuContext } from 'primereact/menu';
import * as React from 'react';
import { ContextMenuCheckboxGroup } from './checkboxgroup';
import { ContextMenuCheckboxIcon } from './checkboxicon';
import { ContextMenuCheckboxItem } from './checkboxitem';
import { ContextMenuProvider } from './ContextMenu.context';
import { defaultProps } from './ContextMenu.props';
import { ContextMenuIcon } from './icon';
import { ContextMenuItem } from './item';
import { ContextMenuLabel } from './label';
import { ContextMenuList } from './list';
import { ContextMenuPortal } from './portal';
import { ContextMenuRadioGroup } from './radiogroup';
import { ContextMenuRadioIcon } from './radioicon';
import { ContextMenuRadioItem } from './radioitem';
import { ContextMenuSeparator } from './separator';
import { ContextMenuSub } from './sub';
import { ContextMenuTrigger } from './trigger';

export const ContextMenu = withComponent({
    name: 'ContextMenu',
    defaultProps,
    styles,
    setup(instance) {
        const contextmenu = useContextMenu(instance?.inProps);
        const menu = useMenuContext();

        return { ...contextmenu, menu };
    },
    render(instance) {
        const { id, props, ptmi, cx, inProps } = instance;

        const rootProps = mergeProps(
            {
                id,
                className: cx('root')
            },
            {
                ...inProps
            },
            ptmi('root')
        );

        return (
            <ContextMenuProvider value={instance as unknown as ContextMenuInstance}>
                <Menu {...(props as ContextMenuProps)} composite {...rootProps}>
                    {props.children}
                </Menu>
            </ContextMenuProvider>
        );
    },
    components: {
        List: ContextMenuList,
        Item: ContextMenuItem,
        Label: ContextMenuLabel,
        Trigger: ContextMenuTrigger,
        Portal: ContextMenuPortal,
        Sub: ContextMenuSub,
        Separator: ContextMenuSeparator,
        Icon: ContextMenuIcon,
        CheckboxGroup: ContextMenuCheckboxGroup,
        CheckboxItem: ContextMenuCheckboxItem,
        RadioGroup: ContextMenuRadioGroup,
        RadioItem: ContextMenuRadioItem,
        RadioIcon: ContextMenuRadioIcon,
        CheckboxIcon: ContextMenuCheckboxIcon
    }
});
