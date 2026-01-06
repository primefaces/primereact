/**
 *
 * Menu Menu is a versatile component that provides various features such as inline and portal rendering, composite structures, app-style layouts, menubars, sidebars, and router integration.
 *
 * [Live Demo](https://www.primereact.org/menu/)
 *
 * @module menu
 * @group components
 *
 */

/**
 * Defines the CSS class names used in the Menu component.
 */
export const MenuClassNames = {
    /**
     * Class name of the root element
     */
    root: 'p-menu',
    /**
     * Class name of the list element
     */
    list: 'p-menu-list',
    /**
     * Class name of the group label element
     */
    label: 'p-menu-label',
    /**
     * Class name of the submenu element
     */
    submenu: 'p-menu-submenu',
    /**
     * Class name of the submenu label element
     */
    submenuLabel: 'p-menu-submenu-label',
    /**
     * Class name of the separator element
     */
    separator: 'p-menu-separator',
    /**
     * Class name of the item element
     */
    item: 'p-menu-item',
    /**
     * Class name of the checkbox item element
     */
    checkboxItem: 'p-menu-item-checkbox',
    /**
     * Class name of the radio item element
     */
    radioItem: 'p-menu-item-radio',
    /**
     * Class name of the trigger element
     */
    trigger: 'p-menu-trigger-button',
    /**
     * Class name of the item icon element
     */
    icon: 'p-menu-item-icon',
    /**
     * Class name of the checkbox icon element
     */
    checkboxIcon: 'p-menu-checkbox-icon',
    /**
     * Class name of the radio icon element
     */
    radioIcon: 'p-menu-radio-icon'
} as const;

/**
 * Type representing the CSS class names used in the Menu component.
 */
export type MenuClassNamesType = (typeof MenuClassNames)[keyof typeof MenuClassNames];
