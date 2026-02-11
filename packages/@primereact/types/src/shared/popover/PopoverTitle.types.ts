/**
 *
 * PopoverTitle is a component that displays the title of a popover.
 *
 * [Live Demo](https://www.primereact.org/popover/)
 *
 * @module popovertitle
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { PopoverRootInstance } from './PopoverRoot.types';

/**
 * Defines passthrough(pt) options type in PopoverTitle component.
 */
export type PopoverTitlePassThroughType<E> = PassThroughType<PopoverTitleInstance, E>;

/**
 * Defines passthrough(pt) options of PopoverTitle component.
 */
export interface PopoverTitlePassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: PopoverTitlePassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in PopoverTitle component.
 */
export interface PopoverTitleProps extends BaseComponentProps<PopoverTitleInstance, unknown, PopoverTitlePassThrough> {}

/**
 * Defines valid state in PopoverTitle component.
 */
export interface PopoverTitleState {}

/**
 * Defines the methods and properties exposed by PopoverTitle component.
 */
export interface PopoverTitleExposes {
    /**
     * The Popover component instance.
     */
    popover: PopoverRootInstance | undefined | null;
}

/**
 * Instance of PopoverTitle component.
 */
export type PopoverTitleInstance = ComponentInstance<PopoverTitleProps, PopoverTitleState, PopoverTitleExposes>;
