/**
 *
 * DrawerPortal is a component that displays a portal.
 *
 * [Live Demo](https://www.primereact.org/drawer/)
 *
 * @module drawerportal
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { DrawerInstance } from './Drawer.types';

/**
 * Defines passthrough(pt) options type in DrawerPortal component.
 */
export type DrawerPortalPassThroughType<E> = PassThroughType<DrawerPortalInstance, E>;

/**
 * Defines passthrough(pt) options of DrawerPortal component.
 */
export interface DrawerPortalPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: DrawerPortalPassThroughType<React.HTMLAttributes<HTMLButtonElement>>;
}

/**
 * Defines valid properties in DrawerPortal component.
 */
export interface DrawerPortalProps extends BaseComponentProps<DrawerPortalInstance, unknown, DrawerPortalPassThrough> {}

/**
 * Defines valid state in DrawerPortal component.
 */
export interface DrawerPortalState {}

/**
 * Defines the methods and properties exposed by DrawerPortal component.
 */
export interface DrawerPortalExposes {
    /**
     * Instance of the Drawer component.
     */
    drawer: DrawerInstance | undefined | null;
}

/**
 * Instance of DrawerPortal component.
 */
export type DrawerPortalInstance = ComponentInstance<DrawerPortalProps, DrawerPortalState, DrawerPortalExposes>;
