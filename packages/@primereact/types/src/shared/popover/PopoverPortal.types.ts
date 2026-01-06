/**
 *
 * PopoverPortal is a component that displays the portal of a popover.
 *
 * [Live Demo](https://www.primereact.org/popover/)
 *
 * @module popoverportal
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { PortalProps } from '@primereact/types/shared/portal';
import type { PopoverRootInstance } from './PopoverRoot.types';

/**
 * Defines passthrough(pt) options type in PopoverPortal component.
 */
export type PopoverPortalPassThroughType<E> = PassThroughType<PopoverPortalInstance, E>;

/**
 * Defines passthrough(pt) options of PopoverPortal component.
 */
export interface PopoverPortalPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: PopoverPortalPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in PopoverPortal component.
 */
export interface PopoverPortalProps extends BaseComponentProps<PopoverPortalInstance, PortalProps, PopoverPortalPassThrough> {}

/**
 * Defines valid state in PopoverPortal component.
 */
export interface PopoverPortalState {}

/**
 * Defines the methods and properties exposed by PopoverPortal component.
 */
export interface PopoverPortalExposes {
    /**
     * The Popover component instance.
     */
    popover: PopoverRootInstance | undefined | null;
}

/**
 * Instance of PopoverPortal component.
 */
export type PopoverPortalInstance = ComponentInstance<PopoverPortalProps, PopoverPortalState, PopoverPortalExposes>;
