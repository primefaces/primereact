/**
 *
 * Menu Menu is a versatile component that provides various features such as inline and portal rendering, composite structures, app-style layouts, menubars, sidebars, and router integration.
 *
 * [Live Demo](https://www.primereact.org/menu/)
 *
 * @module menuroot
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { useMenuExposes, useMenuOpenChangeEvent, useMenuProps, useMenuState } from './useMenu.types';

/**
 * Defines passthrough(pt) options type in Menu component.
 */
export type MenuRootPassThroughType<E> = PassThroughType<MenuRootInstance, E>;

/**
 * Defines passthrough(pt) options of Menu component.
 */
export interface MenuRootPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: MenuRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the list's DOM element.
     */
    list?: MenuRootPassThroughType<React.HTMLAttributes<HTMLUListElement>>;
    /**
     * Used to pass attributes to the item's DOM element.
     */
    item?: MenuRootPassThroughType<React.HTMLAttributes<HTMLLIElement>>;
    /**
     * Used to pass attributes to the checkbox item's DOM element.
     */
    checkboxItem?: MenuRootPassThroughType<React.HTMLAttributes<HTMLLIElement>>;
    /**
     * Used to pass attributes to the radio item's DOM element.
     */
    radioItem?: MenuRootPassThroughType<React.HTMLAttributes<HTMLLIElement>>;
    /**
     * Used to pass attributes to the label's DOM element.
     */
    label?: MenuRootPassThroughType<React.HTMLAttributes<HTMLLIElement>>;
    /**
     * Used to pass attributes to the trigger's DOM element.
     */
    trigger?: MenuRootPassThroughType<React.HTMLAttributes<HTMLButtonElement>>;
    /**
     * Used to pass attributes to the item icon's DOM element.
     */
    icon?: MenuRootPassThroughType<React.HTMLAttributes<SVGElement>>;
    /**
     * Used to pass attributes to the checkbox item icon's DOM element.
     */
    checkboxIcon?: MenuRootPassThroughType<React.HTMLAttributes<SVGElement>>;
    /**
     * Used to pass attributes to the radio item icon's DOM element.
     */
    radioIcon?: MenuRootPassThroughType<React.HTMLAttributes<SVGElement>>;
    /**
     * Used to pass attributes to the separator's DOM element.
     */
    separator?: MenuRootPassThroughType<React.HTMLAttributes<HTMLLIElement>>;
    /**
     * Used to pass attributes to the portal's DOM element.
     */
    portal?: MenuRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Event fired when the menu's open state changes.
 * @extends useMenuOpenChangeEvent
 */
export interface MenuRootOpenChangeEvent extends useMenuOpenChangeEvent {}

/**
 * Defines valid properties in Menu component.
 */
export interface MenuRootProps extends BaseComponentProps<MenuRootInstance, Omit<useMenuProps, 'onOpenChange'>, MenuRootPassThrough> {
    /**
     * Callback fired when the menu's open state changes.
     * @param event.value The new value of the menu's open state.
     * @returns void
     */
    onOpenChange?: (event: MenuRootOpenChangeEvent) => void;
}

/**
 * Defines valid state in Menu component.
 * @extends useMenuState
 */
export interface MenuRootState extends useMenuState {}

/**
 * Defines the methods and properties exposed by Menu component.
 * @extends useMenuExposes
 */
export interface MenuRootExposes extends useMenuExposes {}

/**
 * Instance of Menu component.
 */
export type MenuRootInstance = ComponentInstance<MenuRootProps, MenuRootState, MenuRootExposes>;
