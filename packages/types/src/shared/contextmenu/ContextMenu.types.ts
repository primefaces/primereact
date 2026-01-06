/**
 *
 * ContextMenu ContextMenu uses Menu component and displays an overlay menu to display actions related to a trigger.
 *
 * [Live Demo](https://www.primereact.org/contextmenu/)
 *
 * @module contextmenu
 * @group components
 *
 */

/**
 * Defines the CSS class names used in the ContextMenu component.
 */
export const ContextMenuClassNames = {
    /**
     * Class name of the root element
     */
    root: 'p-contextmenu',
    /**
     * Class name of the list element
     */
    list: 'p-contextmenu-list',
    /**
     * Class name of the submenu element
     */
    submenu: 'p-contextmenu-submenu',
    /**
     * Class name of the separator element
     */
    separator: 'p-contextmenu-separator',
    /**
     * Class name of the item element
     */
    item: 'p-contextmenu-item',
    /**
     * Class name of the checkbox item element
     */
    checkboxItem: 'p-contextmenu-item-checkbox',
    /**
     * Class name of the radio item element
     */
    radioItem: 'p-contextmenu-item-radio',
    /**
     * Class name of the trigger element
     */
    trigger: 'p-contextmenu-trigger',
    /**
     * Class name of the icon element
     */
    icon: 'p-contextmenu-item-icon',
    /**
     * Class name of the checkbox icon element
     */
    checkboxIcon: 'p-contextmenu-checkbox-icon',
    /**
     * Class name of the radio icon element
     */
    radioIcon: 'p-contextmenu-radio-icon'
} as const;

/**
 * Type representing the CSS class names used in the ContextMenu component.
 */
export type ContextMenuClassNamesType = (typeof ContextMenuClassNames)[keyof typeof ContextMenuClassNames];
