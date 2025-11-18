/**
 *
 * MenuSeparator is a component that displays a separator.
 *
 * [Live Demo](https://www.primereact.org/menu/)
 *
 * @module menuseparator
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { MenuInstance } from './Menu.types';

/**
 * Defines passthrough(pt) options type in MenuSeparator component.
 */
export type MenuSeparatorPassThroughType<E> = PassThroughType<MenuSeparatorInstance, E>;

/**
 * Defines passthrough(pt) options of MenuSeparator component.
 */
export interface MenuSeparatorPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: MenuSeparatorPassThroughType<React.HTMLAttributes<HTMLLIElement>>;
}

/**
 * Defines valid properties in MenuSeparator component.
 */
export interface MenuSeparatorProps extends BaseComponentProps<MenuSeparatorInstance, unknown, MenuSeparatorPassThrough> {}

/**
 * Defines valid state in MenuSeparator component.
 */
export interface MenuSeparatorState {}

/**
 * Defines the methods and properties exposed by MenuSeparator component.
 */
export interface MenuSeparatorExposes {
    /**
     * Instance of the Menu component.
     */
    menu: MenuInstance | undefined | null;
}

/**
 * Instance of MenuSeparator component.
 */
export type MenuSeparatorInstance = ComponentInstance<MenuSeparatorProps, MenuSeparatorState, MenuSeparatorExposes>;
