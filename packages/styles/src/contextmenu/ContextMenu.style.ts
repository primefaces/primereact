import { createStyles } from '@primereact/styles/utils';
import type { ContextMenuInstance } from '@primereact/types/shared/contextmenu';
// import { style } from '@primeuix/styles/contextmenu';

const style = /*css*/ `
    /* For PrimeReact */
    .p-contextmenu {
        background: dt('menu.background');
        color: dt('menu.color');
        border: 1px solid dt('menu.border.color');
        border-radius: dt('menu.border.radius');
        min-width: max-content;
    }

    .p-contextmenu-list {
        margin: 0;
        padding: dt('menu.list.padding');
        outline: 0 none;
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: dt('menu.list.gap');
    }

    .p-contextmenu .p-contextmenu-submenu .p-contextmenu-list {
        position: absolute;
        min-width: 100%;
        z-index: 1;
        background: dt('menu.background');
        color: dt('menu.color');
        border: 1px solid dt('menu.border.color');
        border-radius: dt('menu.border.radius');
        box-shadow: var(--p-menu-shadow);
    }

    .p-contextmenu-item {
        cursor: pointer;
        display: flex;
        align-items: center;
        text-decoration: none;
        padding: dt('menu.item.padding');
        gap: dt('menu.item.gap');
        user-select: none;
        outline: 0 none;
        transition:
            background dt('menu.transition.duration'),
            color dt('menu.transition.duration');
        border-radius: dt('menu.item.border.radius');
        color: dt('menu.item.color');
        overflow: hidden;
    }

    .p-contextmenu-item:not(.p-disabled):hover {
        color: dt('menu.item.focus.color');
        background: dt('menu.item.focus.background');
    }

    .p-contextmenu-item.p-focus {
        color: dt('menu.item.focus.color');
        background: dt('menu.item.focus.background');
    }

    .p-contextmenu-submenu-label {
        cursor: pointer;
        display: flex;
        align-items: center;
        text-decoration: none;
        padding: dt('menu.item.padding');
        gap: dt('menu.item.gap');
        user-select: none;
        outline: 0 none;
        transition:
            background dt('menu.transition.duration'),
            color dt('menu.transition.duration');
        border-radius: dt('menu.item.border.radius');
        color: dt('menu.item.color');
        overflow: hidden;
    }

    .p-contextmenu-submenu-label:not(.p-disabled):hover {
        color: dt('menu.item.focus.color');
        background: dt('menu.item.focus.background');
    }

    .p-contextmenu-submenu-label.p-focus {
        color: dt('menu.item.focus.color');
        background: dt('menu.item.focus.background');
    }

    .p-contextmenu-item-icon {
        margin-left: auto;
        color: dt('menu.item.icon.color');
        transition: transform 0.2s;
    }

    /* .p-contextmenu-group-label {
        background: dt('menu.submenu.label.background');
        padding: dt('menu.submenu.label.padding');
        color: dt('menu.submenu.label.color');
        font-weight: dt('menu.submenu.label.font.weight');
    } */

    .p-contextmenu-separator {
        border-block-start: 1px solid dt('menu.separator.border.color');
    }
`;

export const styles = createStyles<ContextMenuInstance>({
    name: 'contextmenu',
    style,
    classes: {
        root: 'p-contextmenu',
        list: 'p-contextmenu-list',
        submenu: 'p-contextmenu-submenu',
        separator: 'p-contextmenu-separator',
        item: 'p-contextmenu-item',
        trigger: 'p-contextmenu-trigger',
        icon: 'p-contextmenu-item-icon'
    }
});
