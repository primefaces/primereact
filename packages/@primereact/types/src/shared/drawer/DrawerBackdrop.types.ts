/**
 *
 * DrawerBackdrop is a component that displays the overlay mask behind the drawer.
 *
 * [Live Demo](https://www.primereact.org/drawer/)
 *
 * @module drawerbackdrop
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { DrawerRootInstance } from './DrawerRoot.types';

/**
 * Defines passthrough(pt) options type in DrawerBackdrop component.
 */
export type DrawerBackdropPassThroughType<E> = PassThroughType<DrawerBackdropInstance, E>;

/**
 * Defines passthrough(pt) options of DrawerBackdrop component.
 */
export interface DrawerBackdropPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: DrawerBackdropPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in DrawerBackdrop component.
 */
export interface DrawerBackdropProps extends BaseComponentProps<DrawerBackdropInstance, unknown, DrawerBackdropPassThrough> {}

/**
 * Defines valid state in DrawerBackdrop component.
 */
export interface DrawerBackdropState {}

/**
 * Defines the methods and properties exposed by DrawerBackdrop component.
 */
export interface DrawerBackdropExposes {
    /**
     * The Drawer component instance.
     */
    drawer: DrawerRootInstance | undefined | null;
}

/**
 * Instance of DrawerBackdrop component.
 */
export type DrawerBackdropInstance = ComponentInstance<DrawerBackdropProps, DrawerBackdropState, DrawerBackdropExposes>;
