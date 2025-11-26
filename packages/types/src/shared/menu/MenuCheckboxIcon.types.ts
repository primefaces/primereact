/**
 *
 * MenuCheckboxIcon is a component that displays a checkbox icon.
 *
 * [Live Demo](https://www.primereact.org/menu/)
 *
 * @module menucheckboxicon
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { MenuInstance } from './Menu.types';
import type { MenuCheckboxItemInstance } from './MenuCheckboxItem.types';

/**
 * Defines passthrough(pt) options type in MenuCheckboxIcon component.
 */
export type MenuCheckboxIconPassThroughType<E> = PassThroughType<MenuCheckboxIconInstance, E>;

/**
 * Defines passthrough(pt) options of MenuCheckboxIcon component.
 */
export interface MenuCheckboxIconPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: MenuCheckboxIconPassThroughType<React.SVGAttributes<SVGElement>>;
}

/**
 * Defines valid properties in MenuCheckboxIcon component.
 */
export interface MenuCheckboxIconProps extends BaseComponentProps<MenuCheckboxIconInstance, unknown, MenuCheckboxIconPassThrough> {}

/**
 * Defines valid state in MenuCheckboxIcon component.
 */
export interface MenuCheckboxIconState {}

/**
 * Defines the methods and properties exposed by MenuCheckboxIcon component.
 */
export interface MenuCheckboxIconExposes {
    /**
     * The Menu component instance.
     */
    menu: MenuInstance | undefined | null;
    /**
     * Instance of the MenuCheckboxItem component.
     */
    checkboxitem: MenuCheckboxItemInstance | undefined | null;
}

/**
 * Instance of MenuCheckboxIcon component.
 */
export type MenuCheckboxIconInstance = ComponentInstance<MenuCheckboxIconProps, MenuCheckboxIconState, MenuCheckboxIconExposes>;
