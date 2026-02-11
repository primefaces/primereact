/**
 *
 * ToasterPortal is a component that displays a toaster portal.
 *
 * [Live Demo](https://www.primereact.org/toaster/)
 *
 * @module toasterportal
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { ToasterRootInstance } from './ToasterRoot.types';

/**
 * Defines passthrough(pt) options type in ToasterPortal component.
 */
export type ToasterPortalPassThroughType<E> = PassThroughType<ToasterPortalInstance, E>;

/**
 * Defines passthrough(pt) options of ToasterPortal component.
 */
export interface ToasterPortalPassThrough {
    /**
     * Used to pass attributes to the portal's DOM element.
     */
    root?: ToasterPortalPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in ToasterPortal component.
 */
export interface ToasterPortalProps extends BaseComponentProps<ToasterPortalInstance, unknown, ToasterPortalPassThrough> {}

/**
 * Defines valid state in ToasterPortal component.
 */
export interface ToasterPortalState {}

/**
 * Defines the methods and properties exposed by ToasterPortal component.
 */
export interface ToasterPortalExposes {
    /**
     * The Toaster component instance.
     */
    toaster: ToasterRootInstance | undefined | null;
}

/**
 * Instance of ToasterPortal component.
 */
export type ToasterPortalInstance = ComponentInstance<ToasterPortalProps, ToasterPortalState, ToasterPortalExposes>;
