/**
 *
 * PopoverArrow is a component that displays the arrow of a popover.
 *
 * [Live Demo](https://www.primereact.org/popover/)
 *
 * @module popoverarrow
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { PopoverRootInstance } from './PopoverRoot.types';

/**
 * Defines passthrough(pt) options type in PopoverArrow component.
 */
export type PopoverArrowPassThroughType<E> = PassThroughType<PopoverArrowInstance, E>;

/**
 * Defines passthrough(pt) options of PopoverArrow component.
 */
export interface PopoverArrowPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: PopoverArrowPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in PopoverArrow component.
 */
export interface PopoverArrowProps extends BaseComponentProps<PopoverArrowInstance, unknown, PopoverArrowPassThrough> {}

/**
 * Defines valid state in PopoverArrow component.
 */
export interface PopoverArrowState {}

/**
 * Defines the methods and properties exposed by PopoverArrow component.
 */
export interface PopoverArrowExposes {
    /**
     * The Popover component instance.
     */
    popover: PopoverRootInstance | undefined | null;
}

/**
 * Instance of PopoverArrow component.
 */
export type PopoverArrowInstance = ComponentInstance<PopoverArrowProps, PopoverArrowState, PopoverArrowExposes>;
