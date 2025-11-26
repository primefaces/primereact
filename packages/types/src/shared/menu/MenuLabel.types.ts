/**
 *
 * MenuLabel is a component that displays label.
 *
 * [Live Demo](https://www.primereact.org/menu/)
 *
 * @module menulabel
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import { MenuInstance } from '../menu';

/**
 * Defines passthrough(pt) options type in MenuLabel component.
 */
export type MenuLabelPassThroughType<E> = PassThroughType<MenuLabelInstance, E>;

/**
 * Defines passthrough(pt) options of MenuLabel component.
 */
export interface MenuLabelPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: MenuLabelPassThroughType<React.HTMLAttributes<HTMLLIElement>>;
}

/**
 * Defines valid properties in MenuLabel component.
 */
export interface MenuLabelProps extends BaseComponentProps<MenuLabelInstance, unknown, MenuLabelPassThrough> {}

/**
 * Defines valid state in MenuLabel component.
 */
export interface MenuLabelState {}

/**
 * Defines the methods and properties exposed by MenuLabel component.
 */
export interface MenuLabelExposes {
    /**
     * Instance of the Menu component.
     */
    menu: MenuInstance | undefined | null;
}

/**
 * Instance of MenuLabel component.
 */
export type MenuLabelInstance = ComponentInstance<MenuLabelProps, MenuLabelState, MenuLabelExposes>;
