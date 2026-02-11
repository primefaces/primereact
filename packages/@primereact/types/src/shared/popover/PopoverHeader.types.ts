/**
 *
 * PopoverHeader is a component that displays the header of a popover.
 *
 * [Live Demo](https://www.primereact.org/popover/)
 *
 * @module popoverheader
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { PopoverRootInstance } from './PopoverRoot.types';

/**
 * Defines passthrough(pt) options type in PopoverHeader component.
 */
export type PopoverHeaderPassThroughType<E> = PassThroughType<PopoverHeaderInstance, E>;

/**
 * Defines passthrough(pt) options of PopoverHeader component.
 */
export interface PopoverHeaderPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: PopoverHeaderPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in PopoverHeader component.
 */
export interface PopoverHeaderProps extends BaseComponentProps<PopoverHeaderInstance, unknown, PopoverHeaderPassThrough> {}

/**
 * Defines valid state in PopoverHeader component.
 */
export interface PopoverHeaderState {}

/**
 * Defines the methods and properties exposed by PopoverHeader component.
 */
export interface PopoverHeaderExposes {
    /**
     * The Popover component instance.
     */
    popover: PopoverRootInstance | undefined | null;
}

/**
 * Instance of PopoverHeader component.
 */
export type PopoverHeaderInstance = ComponentInstance<PopoverHeaderProps, PopoverHeaderState, PopoverHeaderExposes>;
