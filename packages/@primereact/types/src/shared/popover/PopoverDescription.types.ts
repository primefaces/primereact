/**
 *
 * PopoverDescription is a component that displays the description of a popover.
 *
 * [Live Demo](https://www.primereact.org/popover/)
 *
 * @module popoverdescription
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { PopoverRootInstance } from './PopoverRoot.types';

/**
 * Defines passthrough(pt) options type in PopoverDescription component.
 */
export type PopoverDescriptionPassThroughType<E> = PassThroughType<PopoverDescriptionInstance, E>;

/**
 * Defines passthrough(pt) options of PopoverDescription component.
 */
export interface PopoverDescriptionPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: PopoverDescriptionPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in PopoverDescription component.
 */
export interface PopoverDescriptionProps extends BaseComponentProps<PopoverDescriptionInstance, unknown, PopoverDescriptionPassThrough> {}

/**
 * Defines valid state in PopoverDescription component.
 */
export interface PopoverDescriptionState {}

/**
 * Defines the methods and properties exposed by PopoverDescription component.
 */
export interface PopoverDescriptionExposes {
    /**
     * The Popover component instance.
     */
    popover: PopoverRootInstance | undefined | null;
}

/**
 * Instance of PopoverDescription component.
 */
export type PopoverDescriptionInstance = ComponentInstance<PopoverDescriptionProps, PopoverDescriptionState, PopoverDescriptionExposes>;
