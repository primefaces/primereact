/**
 *
 * Tooltip is a popup that displays information when hovering or focusing on an element.
 *
 * [Live Demo](https://www.primereact.org/tooltip/)
 *
 * @module tooltipgroup
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import { useTooltipGroupExposes, useTooltipGroupProps, useTooltipGroupState } from './useTooltipGroup.types';

/**
 * Defines passthrough(pt) options type in  TooltipGroup component.
 */
export type TooltipGroupPassThroughType<E> = PassThroughType<TooltipGroupInstance, E>;

/**
 * Defines passthrough(pt) options of TooltipGroup component.
 */
export interface TooltipGroupPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: TooltipGroupPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in TooltipGroup component.
 */
export interface TooltipGroupProps extends BaseComponentProps<TooltipGroupInstance, useTooltipGroupProps, TooltipGroupPassThrough> {}

/**
 * Defines valid state in TooltipGroup component.
 * @extends useTooltipGroupState
 */
export interface TooltipGroupState extends useTooltipGroupState {}

/**
 * Defines the methods and properties exposed by TooltipGroup component.
 * @extends useTooltipGroupExposes
 */
export interface TooltipGroupExposes extends useTooltipGroupExposes {}

/**
 * Defines the CSS class names used in the TooltipGroup component.
 */
export const TooltipGroupClassNames = {} as const;

/**
 * Type representing the CSS class names used in the TooltipGroup component.
 */
export type TooltipGroupClassNamesType = (typeof TooltipGroupClassNames)[keyof typeof TooltipGroupClassNames];

/**
 * Instance of TooltipGroup component.
 */
export type TooltipGroupInstance = ComponentInstance<TooltipGroupProps, TooltipGroupState, TooltipGroupExposes>;
