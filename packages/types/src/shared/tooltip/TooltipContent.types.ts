/**
 *
 * TooltipContent is a component that displays the content of a tooltip.
 *
 * [Live Demo](https://www.primereact.org/tooltip/)
 *
 * @module tooltipcontent
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { TooltipInstance } from './Tooltip.types';

/**
 * Defines passthrough(pt) options type in TooltipContent component.
 */
export type TooltipContentPassThroughType<E> = PassThroughType<TooltipContentInstance, E>;

/**
 * Defines passthrough(pt) options of TooltipContent component.
 */
export interface TooltipContentPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: TooltipContentPassThroughType<React.HTMLAttributes<HTMLButtonElement>>;
}

/**
 * Defines valid properties in TooltipContent component.
 */
export interface TooltipContentProps extends BaseComponentProps<TooltipContentInstance, unknown, TooltipContentPassThrough> {}

/**
 * Defines valid state in TooltipContent component.
 */
export interface TooltipContentState {}

/**
 * Defines the methods and properties exposed by TooltipContent component.
 */
export interface TooltipContentExposes {
    /**
     * The Tooltip component instance.
     */
    tooltip: TooltipInstance | undefined | null;
}

/**
 * Instance of TooltipContent component.
 */
export type TooltipContentInstance = ComponentInstance<TooltipContentProps, TooltipContentState, TooltipContentExposes>;
