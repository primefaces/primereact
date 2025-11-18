/**
 *
 * Menu is a grouping component providing with content toggle feature.
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
     * Used to pass attributes to the header's DOM element.
     */
    header?: MenuPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the header actions's DOM element.
     */
    headerActions?: MenuPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the title's DOM element.
     */
    title?: MenuPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the content's DOM element.
     */
    content?: MenuPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the collapse's DOM element.
     */
    collapse?: MenuPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the footer's DOM element.
     */
    footer?: MenuPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
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
     * Class name of the header element
     */
    header: 'p-menu-header',
    /**
     * Class name of the title element
     */
    title: 'p-menu-title',
    /**
     * Class name of the header actions element
     */
    headerActions: 'p-menu-header-actions',
    /**
     * Class name of the toggle button element
     */
    collapse: 'p-menu-toggle-button',
    /**
     * Class name of the content element
     */
    content: 'p-menu-content'
    /**
     * Class name of the footer element
     */
} as const;

/**
 * Type representing the CSS class names used in the Menu component.
 */
export type MenuClassNamesType = (typeof MenuClassNames)[keyof typeof MenuClassNames];

/**
 * Instance of Menu component.
 */
export type MenuInstance = ComponentInstance<MenuProps, MenuState, MenuExposes>;
