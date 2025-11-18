import { createStyles } from '@primereact/styles/utils';
import type { MenuInstance } from '@primereact/types/shared/menu';
import { style } from '@primeuix/styles/menu';

const _style = /*css*/ `
    /* ${style} */

    /* For PrimeReact */
    .p-menu-content {
        background: dt('menu.background');
        color: dt('menu.color');
        border: 1px solid dt('menu.border.color');
        border-radius: dt('menu.border.radius');
        min-width: 12.5rem;
        /* min-width: max-content; */
    }

    .p-menu-list {
        margin: 0;
        padding: dt('menu.list.padding');
        outline: 0 none;
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: dt('menu.list.gap');
    }

    .p-menu-item {
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

    .p-menu-item:not(.p-disabled):hover {
        color: dt('menu.item.focus.color');
        background: dt('menu.item.focus.background');
    }

    .p-menu-item.p-focus {
        color: dt('menu.item.focus.color');
        background: dt('menu.item.focus.background');
    }

    .p-menu-submenu {
        position: relative;
    }

    .p-menu-submenu-label {
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: space-between;
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

    .p-menu-submenu-label:not(.p-disabled):hover {
        color: dt('menu.item.focus.color');
        background: dt('menu.item.focus.background');
    }

    .p-menu-submenu-label.p-focus {
        color: dt('menu.item.focus.color');
        background: dt('menu.item.focus.background');
    }

    .p-menu-item-icon {
        color: dt('menu.item.icon.color');
        transition: transform 0.2s;
    }

    .p-menu-submenu .p-menu-list {
        padding-left: 1rem;
        margin-top: 0.25rem;
    }

    .p-menu-group-label {
        background: dt('menu.submenu.label.background');
        padding: dt('menu.submenu.label.padding');
        color: dt('menu.submenu.label.color');
        font-weight: dt('menu.submenu.label.font.weight');
    }

    .p-menu-separator {
        border-block-start: 1px solid dt('menu.separator.border.color');
    }
`;

export const styles = createStyles<MenuInstance>({
    name: 'menu',
    style: _style,
    classes: {
        root: ({ props }) => [
            'p-menu p-component',
            {
                'p-menu-overlay': props.popup
            }
        ],
        content: 'p-menu-content',
        list: 'p-menu-list',
        groupLabel: 'p-menu-group-label',
        submenu: 'p-menu-submenu',
        submenuLabel: ({ context }) => [
            'p-menu-submenu-label',
            {
                'p-menu-submenu-label-active': context.active,
                'p-focus': context.focused,
                'p-disabled': context.disabled
            }
        ],
        separator: 'p-menu-separator',
        item: ({ context }) => [
            'p-menu-item',
            {
                'p-focus': context.focused,
                'p-disabled': context.disabled
            }
        ],
        trigger: 'p-menu-trigger-button',
        itemIcon: 'p-menu-item-icon'
    }
});
