import { createStyles } from '@primereact/styles/utils';
import type { ContextMenuInstance } from '@primereact/types/shared/contextmenu';

export const styles = createStyles<ContextMenuInstance>({
    name: 'contextmenu',
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
