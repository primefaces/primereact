/**
 *
 * PopoverContent is a component that displays the content of a popover.
 *
 * [Live Demo](https://www.primereact.org/popover/)
 *
 * @module popovercontent
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { PopoverInstance } from './Popover.types';

/**
 * Defines passthrough(pt) options type in PopoverContent component.
 */
export type PopoverContentPassThroughType<E> = PassThroughType<PopoverContentInstance, E>;

/**
 * Defines passthrough(pt) options of PopoverContent component.
 */
export interface PopoverContentPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: PopoverContentPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in PopoverContent component.
 */
export interface PopoverContentProps extends BaseComponentProps<PopoverContentInstance, unknown, PopoverContentPassThrough> {
    /**
     * Whether to focus the first focusable element when the popover is opened.
     * @default true
     */
    autoFocus?: boolean;
}

/**
 * Defines valid state in PopoverContent component.
 */
export interface PopoverContentState {}

/**
 * Defines the methods and properties exposed by PopoverContent component.
 */
export interface PopoverContentExposes {
    /**
     * The Popover component instance.
     */
    popover: PopoverInstance | undefined | null;
}

/**
 * Instance of PopoverContent component.
 */
export type PopoverContentInstance = ComponentInstance<PopoverContentProps, PopoverContentState, PopoverContentExposes>;
