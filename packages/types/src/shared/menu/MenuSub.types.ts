/**
 *
 * MenuSub is a submenu component for nested menu structures.
 *
 * [Live Demo](https://www.primereact.org/menu/)
 *
 * @module menusub
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import { MenuInstance } from './Menu.types';
import type { MenuLevelContextValue } from './MenuLevel.types';
import type { useMenuSubExposes, useMenuSubOpenChangeEvent, useMenuSubProps, useMenuSubState } from './useMenuSub.types';

/**
 * Defines passthrough(pt) options type in MenuSub component.
 */
export type MenuSubPassThroughType<E> = PassThroughType<MenuSubInstance, E>;

/**
 * Defines passthrough(pt) options of MenuSub component.
 */
export interface MenuSubPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: MenuSubPassThroughType<React.HTMLAttributes<HTMLLIElement>>;
}

/**
 * Event fired when the menu's open state changes.
 * @extends useMenuOpenChangeEvent
 */
export interface MenuSubOpenChangeEvent extends useMenuSubOpenChangeEvent {}

/**
 * Defines valid properties in MenuSub component.
 */
export interface MenuSubProps extends BaseComponentProps<MenuSubInstance, Omit<useMenuSubProps, 'onOpenChange'>, MenuSubPassThrough> {
    /**
     * Whether the submenu is disabled.
     * @default false
     */
    disabled?: boolean;
    /**
     * Callback fired when the submenu's open state changes.
     * @param event.value The new value of the menu's open state.
     * @returns void
     */
    onOpenChange?: (event: MenuSubOpenChangeEvent) => void;
}

/**
 * Defines valid state in MenuSub component.
 * @extends useMenuSubState
 */
export interface MenuSubState extends useMenuSubState {}

/**
 * Defines the methods and properties exposed by MenuSub component.
 * @extends useMenuSubExposes
 */
export interface MenuSubExposes extends useMenuSubExposes {
    /**
     * The Menu component instance.
     */
    menu: MenuInstance | undefined | null;
    /**
     * Context value of the MenuLevel.
     */
    parentLevel: MenuLevelContextValue | undefined | null;
}

/**
 * Instance of MenuSub component.
 */
export type MenuSubInstance = ComponentInstance<MenuSubProps, MenuSubState, MenuSubExposes>;
