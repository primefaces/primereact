/**
 *
 * MenuList is a component that displays a list.
 *
 * [Live Demo](https://www.primereact.org/menu/)
 *
 * @module menulist
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { MenuInstance } from './Menu.types';
import type { MenuLevelContextValue } from './MenuLevel.types';
import type { MenuSubInstance } from './MenuSub.types';

/**
 * Defines passthrough(pt) options type in MenuList component.
 */
export type MenuListPassThroughType<E> = PassThroughType<MenuListInstance, E>;

/**
 * Defines passthrough(pt) options of MenuList component.
 */
export interface MenuListPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: MenuListPassThroughType<React.HTMLAttributes<HTMLUListElement>>;
    /**
     * Used to pass attributes to the content's DOM element.
     */
    content?: MenuListPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in MenuList component.
 */
export interface MenuListProps extends BaseComponentProps<MenuListInstance, unknown, MenuListPassThrough> {}

/**
 * Defines valid state in MenuList component.
 */
export interface MenuListState {}

/**
 * Defines the methods and properties exposed by MenuList component.
 */
export interface MenuListExposes {
    /**
     * Instance of the Menu component.
     */
    menu: MenuInstance | undefined | null;
    /**
     * Instance of the MenuSub component.
     */
    submenu: MenuSubInstance | undefined | null;
    /**
     * Context value of the MenuLevel.
     */
    parentLevel: MenuLevelContextValue | undefined | null;
    /**
     * Level of the list.
     */
    listLevel: number;
    /**
     * ID of the list element.
     */
    listId: string | undefined;
    /**
     * Index of the trigger element.
     */
    triggerIndex: number | null;
}

/**
 * Instance of MenuList component.
 */
export type MenuListInstance = ComponentInstance<MenuListProps, MenuListState, MenuListExposes>;
