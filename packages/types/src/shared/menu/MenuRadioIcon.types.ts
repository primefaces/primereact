/**
 *
 * MenuRadioIcon is a component that displays a radio icon.
 *
 * [Live Demo](https://www.primereact.org/menu/)
 *
 * @module menuradioicon
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { MenuInstance } from './Menu.types';
import type { MenuRadioItemInstance } from './MenuRadioItem.types';

/**
 * Defines passthrough(pt) options type in MenuRadioIcon component.
 */
export type MenuRadioIconPassThroughType<E> = PassThroughType<MenuRadioIconInstance, E>;

/**
 * Defines passthrough(pt) options of MenuRadioIcon component.
 */
export interface MenuRadioIconPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: MenuRadioIconPassThroughType<React.SVGAttributes<SVGElement>>;
}

/**
 * Defines valid properties in MenuRadioIcon component.
 */
export interface MenuRadioIconProps extends BaseComponentProps<MenuRadioIconInstance, unknown, MenuRadioIconPassThrough> {}

/**
 * Defines valid state in MenuRadioIcon component.
 */
export interface MenuRadioIconState {}

/**
 * Defines the methods and properties exposed by MenuRadioIcon component.
 */
export interface MenuRadioIconExposes {
    /**
     * The Menu component instance.
     */
    menu: MenuInstance | undefined | null;
    /**
     * Instance of the MenuRadioItem component.
     */
    radioitem: MenuRadioItemInstance | undefined | null;
}

/**
 * Instance of MenuRadioIcon component.
 */
export type MenuRadioIconInstance = ComponentInstance<MenuRadioIconProps, MenuRadioIconState, MenuRadioIconExposes>;
