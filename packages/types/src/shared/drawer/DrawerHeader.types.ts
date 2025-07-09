/**
 *
 * DrawerHeader is a component that displays header.
 *
 * [Live Demo](https://www.primereact.org/drawer/)
 *
 * @module drawerheader
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { DrawerInstance } from './Drawer.types';

/**
 * Defines passthrough(pt) options type in DrawerHeader component.
 */
export type DrawerHeaderPassThroughType<E> = PassThroughType<DrawerHeaderInstance, E>;

/**
 * Defines passthrough(pt) options of DrawerHeader component.
 */
export interface DrawerHeaderPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: DrawerHeaderPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in DrawerHeader component.
 */
export interface DrawerHeaderProps extends BaseComponentProps<DrawerHeaderInstance, unknown, DrawerHeaderPassThrough> {}

/**
 * Defines valid state in DrawerHeader component.
 */
export interface DrawerHeaderState {}

/**
 * Defines the methods and properties exposed by DrawerHeader component.
 */
export interface DrawerHeaderExposes {
    /**
     * The Drawer component instance.
     */
    drawer: DrawerInstance | undefined | null;
}

/**
 * Instance of DrawerHeader component.
 */
export type DrawerHeaderInstance = ComponentInstance<DrawerHeaderProps, DrawerHeaderState, DrawerHeaderExposes>;
