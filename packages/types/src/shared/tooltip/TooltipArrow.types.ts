/**
 *
 * TooltipArrow is a component that displays the arrow of a tooltip.
 *
 * [Live Demo](https://www.primereact.org/tooltip/)
 *
 * @module tooltiparrow
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { TooltipInstance } from './Tooltip.types';

/**
 * Defines passthrough(pt) options type in TooltipArrow component.
 */
export type TooltipArrowPassThroughType<E> = PassThroughType<TooltipArrowInstance, E>;

/**
 * Defines passthrough(pt) options of TooltipArrow component.
 */
export interface TooltipArrowPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: TooltipArrowPassThroughType<React.HTMLAttributes<HTMLButtonElement>>;
}

/**
 * Defines valid properties in TooltipArrow component.
 */
export interface TooltipArrowProps extends BaseComponentProps<TooltipArrowInstance, unknown, TooltipArrowPassThrough> {}

/**
 * Defines valid state in TooltipArrow component.
 */
export interface TooltipArrowState {}

/**
 * Defines the methods and properties exposed by TooltipArrow component.
 */
export interface TooltipArrowExposes {
    /**
     * The Tooltip component instance.
     */
    tooltip: TooltipInstance | undefined | null;
}

/**
 * Instance of TooltipArrow component.
 */
export type TooltipArrowInstance = ComponentInstance<TooltipArrowProps, TooltipArrowState, TooltipArrowExposes>;
