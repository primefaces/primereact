import { createStyles } from '@primereact/styles/utils';
import type { ContextMenuRootInstance } from '@primereact/types/shared/contextmenu';
import { style } from '@primeuix/styles/contextmenu';

export const styles = createStyles<ContextMenuRootInstance>({
    name: 'contextmenu',
    style,
    classes: {
        root: 'p-contextmenu',
        list: 'p-contextmenu-list',
        submenu: 'p-contextmenu-submenu',
        separator: 'p-contextmenu-separator',
        item: 'p-contextmenu-item',
        checkboxItem: 'p-contextmenu-item-checkbox',
        radioItem: 'p-contextmenu-item-radio',
        trigger: 'p-contextmenu-trigger',
        icon: 'p-contextmenu-item-icon',
        checkboxIcon: 'p-contextmenu-checkbox-icon',
        radioIcon: 'p-contextmenu-radio-icon'
    }
});
