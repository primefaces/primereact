/**
 *
 * PopoverTrigger is a component that displays the trigger of a popover.
 *
 * [Live Demo](https://www.primereact.org/popover/)
 *
 * @module popovertrigger
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { ButtonProps } from '../button';
import type { PopoverInstance } from './Popover.types';

/**
 * Defines passthrough(pt) options type in PopoverTrigger component.
 */
export type PopoverTriggerPassThroughType<E> = PassThroughType<PopoverTriggerInstance, E>;

/**
 * Defines passthrough(pt) options of PopoverTrigger component.
 */
export interface PopoverTriggerPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: PopoverTriggerPassThroughType<React.HTMLAttributes<HTMLButtonElement>>;
}

/**
 * Defines valid properties in PopoverTrigger component.
 */
export interface PopoverTriggerProps extends BaseComponentProps<PopoverTriggerInstance, ButtonProps, PopoverTriggerPassThrough> {}

/**
 * Defines valid state in PopoverTrigger component.
 */
export interface PopoverTriggerState {}

/**
 * Defines the methods and properties exposed by PopoverTrigger component.
 */
export interface PopoverTriggerExposes {
    /**
     * The Popover component instance.
     */
    popover: PopoverInstance | undefined | null;
}

/**
 * Instance of PopoverTrigger component.
 */
export type PopoverTriggerInstance = ComponentInstance<PopoverTriggerProps, PopoverTriggerState, PopoverTriggerExposes>;
