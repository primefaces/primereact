/**
 *
 * ToasterRegion is a component that displays a toaster region.
 *
 * [Live Demo](https://www.primereact.org/toaster/)
 *
 * @module toasterregion
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { ToasterRootInstance } from './ToasterRoot.types';

/**
 * Defines passthrough(pt) options type in ToasterRegion component.
 */
export type ToasterRegionPassThroughType<E> = PassThroughType<ToasterRegionInstance, E>;

/**
 * Defines passthrough(pt) options of ToasterRegion component.
 */
export interface ToasterRegionPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: ToasterRegionPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in ToasterRegion component.
 */
export interface ToasterRegionProps extends BaseComponentProps<ToasterRegionInstance, unknown, ToasterRegionPassThrough> {}

/**
 * Defines valid state in ToasterRegion component.
 */
export interface ToasterRegionState {}

/**
 * Defines the methods and properties exposed by ToasterRegion component.
 */
export interface ToasterRegionExposes {
    /**
     * The Toaster component instance.
     */
    toaster: ToasterRootInstance | undefined | null;
}

/**
 * Instance of ToasterRegion component.
 */
export type ToasterRegionInstance = ComponentInstance<ToasterRegionProps, ToasterRegionState, ToasterRegionExposes>;
