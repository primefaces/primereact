/**
 *
 * MenuIcon is a component that displays an icon.
 *
 * [Live Demo](https://www.primereact.org/menu/)
 *
 * @module menuicon
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { MenuInstance } from './Menu.types';

/**
 * Defines passthrough(pt) options type in MenuIcon component.
 */
export type MenuIconPassThroughType<E> = PassThroughType<MenuIconInstance, E>;

/**
 * Defines passthrough(pt) options of MenuIcon component.
 */
export interface MenuIconPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: MenuIconPassThroughType<React.SVGAttributes<SVGElement>>;
}

/**
 * Defines valid properties in MenuIcon component.
 */
export interface MenuIconProps extends BaseComponentProps<MenuIconInstance, unknown, MenuIconPassThrough> {}

/**
 * Defines valid state in MenuIcon component.
 */
export interface MenuIconState {}

/**
 * Defines the methods and properties exposed by MenuIcon component.
 */
export interface MenuIconExposes {
    /**
     * The Menu component instance.
     */
    menu: MenuInstance | undefined | null;
}

/**
 * Instance of MenuIcon component.
 */
export type MenuIconInstance = ComponentInstance<MenuIconProps, MenuIconState, MenuIconExposes>;
