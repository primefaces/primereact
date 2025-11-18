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
}

/**
 * Instance of MenuTrigger component.
 */
export type MenuTriggerInstance = ComponentInstance<MenuTriggerProps, MenuTriggerState, MenuTriggerExposes>;
