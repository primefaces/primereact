/**
 *
 * MenuTrigger is a component that displays a trigger.
 *
 * [Live Demo](https://www.primereact.org/menu/)
 *
 * @module menutrigger
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { MenuInstance } from './Menu.types';
import type { MenuLevelContextValue } from './MenuLevel.types';
import type { MenuSubInstance } from './MenuSub.types';

/**
 * Defines passthrough(pt) options type in MenuTrigger component.
 */
export type MenuTriggerPassThroughType<E> = PassThroughType<MenuTriggerInstance, E>;

/**
 * Defines passthrough(pt) options of MenuTrigger component.
 */
export interface MenuTriggerPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: MenuTriggerPassThroughType<React.HTMLAttributes<HTMLButtonElement>>;
    /**
     * Used to pass attributes to the item icon's DOM element.
     */
    itemIcon?: MenuTriggerPassThroughType<React.HTMLAttributes<SVGElement>>;
}

/**
 * Defines valid properties in MenuTrigger component.
 */
export interface MenuTriggerProps extends BaseComponentProps<MenuTriggerInstance, unknown, MenuTriggerPassThrough> {}

/**
 * Defines valid state in MenuTrigger component.
 */
export interface MenuTriggerState {}

/**
 * Defines the methods and properties exposed by MenuTrigger component.
 */
export interface MenuTriggerExposes {
    /**
     * Instance of the Menu component.
     */
    menu: MenuInstance | undefined | null;
    /**
     * Instance of the MenuPortal component.
     */
    submenu: MenuSubInstance | undefined | null;
    /**
     * Instance of the MenuLevel component.
     */
    level: MenuLevelContextValue | undefined | null;
    /**
     * Identifier of the menu item.
     */
    itemId: string | undefined;
    /**
     * Whether the menu item is focused.
     */
    focused: boolean | undefined;
    /**
     * Whether the menu item is disabled.
     */
    disabled: boolean | undefined;
    /**
     * Aria level of the menu item.
     */
    ariaLevel: number;
    /**
     * Aria position in set of the menu item.
     */
    ariaPosInSet: number | undefined;
    /**
     * Aria set size of the menu item.
     */
    ariaSetSize: number | undefined;
}

/**
 * Instance of MenuTrigger component.
 */
export type MenuTriggerInstance = ComponentInstance<MenuTriggerProps, MenuTriggerState, MenuTriggerExposes>;
