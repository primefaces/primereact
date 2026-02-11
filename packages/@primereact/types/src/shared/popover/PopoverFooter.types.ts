/**
 *
 * PopoverFooter is a component that displays the footer of a popover.
 *
 * [Live Demo](https://www.primereact.org/popover/)
 *
 * @module popoverfooter
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { PopoverRootInstance } from './PopoverRoot.types';

/**
 * Defines passthrough(pt) options type in PopoverFooter component.
 */
export type PopoverFooterPassThroughType<E> = PassThroughType<PopoverFooterInstance, E>;

/**
 * Defines passthrough(pt) options of PopoverFooter component.
 */
export interface PopoverFooterPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: PopoverFooterPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in PopoverFooter component.
 */
export interface PopoverFooterProps extends BaseComponentProps<PopoverFooterInstance, unknown, PopoverFooterPassThrough> {}

/**
 * Defines valid state in PopoverFooter component.
 */
export interface PopoverFooterState {}

/**
 * Defines the methods and properties exposed by PopoverFooter component.
 */
export interface PopoverFooterExposes {
    /**
     * The Popover component instance.
     */
    popover: PopoverRootInstance | undefined | null;
}

/**
 * Instance of PopoverFooter component.
 */
export type PopoverFooterInstance = ComponentInstance<PopoverFooterProps, PopoverFooterState, PopoverFooterExposes>;
