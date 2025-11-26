import { createStyles } from '@primereact/styles/utils';
import type { MenuInstance } from '@primereact/types/shared/menu';

const _style = /*css*/ `
    /* For PrimeReact */
    .p-menu {
        background: dt('menu.background');
        color: dt('menu.color');
        border: 1px solid dt('menu.border.color');
        border-radius: dt('menu.border.radius');
        min-width: max-content;
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

    .p-menu:not(.p-menu-composite) .p-menu-submenu .p-menu-list {
        padding-inline-start: 1rem;
        padding-inline-end: 0;
    }

    .p-menu-composite .p-menu-submenu .p-menu-list {
        position: absolute;
        min-width: 100%;
        z-index: 1;
        background: dt('menu.background');
        color: dt('menu.color');
        border: 1px solid dt('menu.border.color');
        border-radius: dt('menu.border.radius');
        box-shadow: var(--p-menu-shadow);
    }

    .p-menu-item,
    .p-menu-item-checkbox,
    .p-menu-item-radio {
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

    .p-menu:has([role="menuitemcheckbox"]) .p-menu-item,
    .p-menu:has([role="menuitemradio"]) .p-menu-item,
    .p-menu:has([role="menuitemcheckbox"]) .p-menu-label,
    .p-menu:has([role="menuitemradio"]) .p-menu-label {
        padding-inline-start: 2.25rem;
    }

    .p-menu-item:not(.p-disabled):hover,
    .p-menu-item-checkbox:not(.p-disabled):hover,
    .p-menu-item-radio:not(.p-disabled):hover {
        color: dt('menu.item.focus.color');
        background: dt('menu.item.focus.background');
    }

    .p-menu-item.p-focus,
    .p-menu-item-checkbox.p-focus,
    .p-menu-item-radio.p-focus {
        color: dt('menu.item.focus.color');
        background: dt('menu.item.focus.background');
    }

    .p-menu-submenu-label {
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

    .p-menu-submenu-label:not(.p-disabled):hover {
        color: dt('menu.item.focus.color');
        background: dt('menu.item.focus.background');
    }

    .p-menu-submenu-label.p-focus {
        color: dt('menu.item.focus.color');
        background: dt('menu.item.focus.background');
    }

    .p-menu-item-icon {
        margin-left: auto;
        color: dt('menu.item.icon.color');
        transition: transform 0.2s;
    }

    .p-menu-label {
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
                'p-menu-composite': props.composite
            }
        ],
        list: 'p-menu-list',
        label: 'p-menu-label',
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
        checkboxItem: ({ context }) => [
            'p-menu-item-checkbox',
            {
                'p-focus': context.focused,
                'p-disabled': context.disabled
            }
        ],
        radioItem: ({ context }) => [
            'p-menu-item-radio',
            {
                'p-focus': context.focused,
                'p-disabled': context.disabled
            }
        ],
        trigger: 'p-menu-trigger-button',
        icon: 'p-menu-item-icon',
        checkboxIcon: 'p-menu-checkbox-icon',
        radioIcon: 'p-menu-radio-icon'
    },
    inlineStyles: {
        submenu: ({ props }) => ({
            position: props.composite ? 'relative' : undefined
        })
    }
});
