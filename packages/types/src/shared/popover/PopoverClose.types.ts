/**
 *
 * PopoverClose is a component that displays the close button of a popover.
 *
 * [Live Demo](https://www.primereact.org/popover/)
 *
 * @module popoverclose
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import { ButtonProps } from '../button';
import type { PopoverInstance } from './Popover.types';

/**
 * Defines passthrough(pt) options type in PopoverClose component.
 */
export type PopoverClosePassThroughType<E> = PassThroughType<PopoverCloseInstance, E>;

/**
 * Defines passthrough(pt) options of PopoverClose component.
 */
export interface PopoverClosePassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: PopoverClosePassThroughType<React.HTMLAttributes<HTMLButtonElement>>;
}

/**
 * Defines valid properties in PopoverClose component.
 */
export interface PopoverCloseProps extends BaseComponentProps<PopoverCloseInstance, ButtonProps, PopoverClosePassThrough> {}

/**
 * Defines valid state in PopoverClose component.
 */
export interface PopoverCloseState {}

/**
 * Defines the methods and properties exposed by PopoverClose component.
 */
export interface PopoverCloseExposes {
    /**
     * The Popover component instance.
     */
    popover: PopoverInstance | undefined | null;
}

/**
 * Instance of PopoverClose component.
 */
export type PopoverCloseInstance = ComponentInstance<PopoverCloseProps, PopoverCloseState, PopoverCloseExposes>;
