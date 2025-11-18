/**
 *
 * MenuItem is a component that displays a item.
 *
 * [Live Demo](https://www.primereact.org/menu/)
 *
 * @module menuitem
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { MenuInstance } from './Menu.types';
import type { MenuPortalInstance } from './MenuPortal.types';
import type { MenuSubInstance } from './MenuSub.types';

/**
 * Defines passthrough(pt) options type in MenuItem component.
 */
export type MenuItemPassThroughType<E> = PassThroughType<MenuItemInstance, E>;

/**
 * Defines passthrough(pt) options of MenuItem component.
 */
export interface MenuItemPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: MenuItemPassThroughType<React.HTMLAttributes<HTMLLIElement>>;
}

/**
 * Defines valid properties in MenuItem component.
 */
export interface MenuItemProps extends BaseComponentProps<MenuItemInstance, unknown, MenuItemPassThrough> {
    /**
     * When enabled, renders the item as a group label.
     * @defaultValue false
     */
    group?: boolean | undefined;
    /**
     * When present, it specifies that the item should be disabled.
     * @default false
     */
    disabled?: boolean | undefined;
}

/**
 * Defines valid state in MenuItem component.
 */
export interface MenuItemState {}

/**
 * Defines the methods and properties exposed by MenuItem component.
 */
export interface MenuItemExposes {
    /**
     * Instance of the Menu component.
     */
    menu: MenuInstance | undefined | null;
    /**
     * Instance of the MenuSub component.
     */
    submenu: MenuSubInstance | undefined | null;
    /**
     * Instance of the MenuPortal component.
     */
    portal: MenuPortalInstance | undefined | null;
}

/**
 * Instance of MenuItem component.
 */
export type MenuItemInstance = ComponentInstance<MenuItemProps, MenuItemState, MenuItemExposes>;
