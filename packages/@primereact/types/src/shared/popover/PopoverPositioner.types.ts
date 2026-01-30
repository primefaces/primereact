/**
 *
 * PopoverPositioner is a component that displays the positioner of a popover.
 *
 * [Live Demo](https://www.primereact.org/popover/)
 *
 * @module popoverpositioner
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import { usePositionerProps } from '../positioner';
import type { PopoverRootInstance } from './PopoverRoot.types';

/**
 * Defines passthrough(pt) options type in PopoverPositioner component.
 */
export type PopoverPositionerPassThroughType<E> = PassThroughType<PopoverPositionerInstance, E>;

/**
 * Defines passthrough(pt) options of PopoverPositioner component.
 */
export interface PopoverPositionerPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: PopoverPositionerPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in PopoverPositioner component.
 */
export interface PopoverPositionerProps extends BaseComponentProps<PopoverPositionerInstance, usePositionerProps, PopoverPositionerPassThrough> {}

/**
 * Defines valid state in PopoverPositioner component.
 */
export interface PopoverPositionerState {}

/**
 * Defines the methods and properties exposed by PopoverPositioner component.
 */
export interface PopoverPositionerExposes {
    /**
     * The Popover component instance.
     */
    popover: PopoverRootInstance | undefined | null;
}

/**
 * Instance of PopoverPositioner component.
 */
export type PopoverPositionerInstance = ComponentInstance<PopoverPositionerProps, PopoverPositionerState, PopoverPositionerExposes>;
