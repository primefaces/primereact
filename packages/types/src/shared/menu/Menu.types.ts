/**
 *
 * Menu displays submenus in nested overlays.
 *
 * [Live Demo](https://www.primereact.org/menu/)
 *
 * @module menu
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { useMenuExposes, useMenuOpenChangeEvent, useMenuProps, useMenuState } from './useMenu.types';

/**
 * Defines passthrough(pt) options type in Menu component.
 */
export type MenuPassThroughType<E> = PassThroughType<MenuInstance, E>;

/**
 * Defines passthrough(pt) options of Menu component.
 */
export interface MenuPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: MenuPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the list's DOM element.
     */
    list?: MenuPassThroughType<React.HTMLAttributes<HTMLUListElement>>;
    /**
     * Used to pass attributes to the item's DOM element.
     */
    item?: MenuPassThroughType<React.HTMLAttributes<HTMLLIElement>>;
    /**
     * Used to pass attributes to the group label's DOM element.
     */
    groupLabel?: MenuPassThroughType<React.HTMLAttributes<HTMLLIElement>>;
    /**
     * Used to pass attributes to the submenu's DOM element.
     */
    submenu?: MenuPassThroughType<React.HTMLAttributes<HTMLUListElement>>;
    /**
     * Used to pass attributes to the trigger's DOM element.
     */
    trigger?: MenuPassThroughType<React.HTMLAttributes<HTMLButtonElement>>;
    /**
     * Used to pass attributes to the item icon's DOM element.
     */
    itemIcon?: MenuPassThroughType<React.HTMLAttributes<SVGElement>>;
    /**
     * Used to pass attributes to the separator's DOM element.
     */
    separator?: MenuPassThroughType<React.HTMLAttributes<HTMLLIElement>>;
    /**
     * Used to pass attributes to the portal's DOM element.
     */
    portal?: MenuPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Event fired when the menu's open state changes.
 * @extends useMenuOpenChangeEvent
 */
export interface MenuOpenChangeEvent extends useMenuOpenChangeEvent {}

/**
 * Defines valid properties in Menu component.
 */
export interface MenuProps extends BaseComponentProps<MenuInstance, Omit<useMenuProps, 'onOpenChange'>, MenuPassThrough> {
    /**
     * Callback fired when the menu's open state changes.
     * @param event.value The new value of the menu's open state.
     * @returns void
     */
    onOpenChange?: (event: MenuOpenChangeEvent) => void;
}

/**
 * Defines valid state in Menu component.
 * @extends useMenuState
 */
export interface MenuState extends useMenuState {}

/**
 * Defines the methods and properties exposed by Menu component.
 * @extends useMenuExposes
 */
export interface MenuExposes extends useMenuExposes {}

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
    groupLabel: 'p-menu-group-label',
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
     * Class name of the trigger element
     */
    trigger: 'p-menu-trigger-button',
    /**
     * Class name of the item icon element
     */
    itemIcon: 'p-menu-item-icon'
} as const;

/**
 * Type representing the CSS class names used in the Menu component.
 */
export type MenuClassNamesType = (typeof MenuClassNames)[keyof typeof MenuClassNames];

/**
 * Instance of Menu component.
 */
export type MenuInstance = ComponentInstance<MenuProps, MenuState, MenuExposes>;
