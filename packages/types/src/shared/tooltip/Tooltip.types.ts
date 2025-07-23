/**
 *
 * Tooltip is a popup that displays information when hovering or focusing on an element.
 *
 * [Live Demo](https://www.primereact.org/tooltip/)
 *
 * @module tooltip
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import { usePlacerProps } from '../placer';
import type { useTooltipExposes, useTooltipProps, useTooltipState } from './useTooltip.types';

/**
 * Defines passthrough(pt) options type in Tooltip component.
 */
export type TooltipPassThroughType<E> = PassThroughType<TooltipInstance, E>;

/**
 * Defines passthrough(pt) options of Tooltip component.
 */
export interface TooltipPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: TooltipPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in Toolbar component.
 */
export interface TooltipProps extends BaseComponentProps<TooltipInstance, useTooltipProps & usePlacerProps, TooltipPassThrough> {}

/**
 * Defines valid state in Toolbar component.
 * @extends useToolbarState
 */
export interface TooltipState extends useTooltipState {}

/**
 * Defines the methods and properties exposed by Toolbar component.
 * @extends useToolbarExposes
 */
export interface TooltipExposes extends useTooltipExposes {}

/**
 * Defines the CSS class names used in the Toolbar component.
 */
export const TooltipClassNames = {
    /**
     * Class name of the root element
     */
    root: 'p-tooltip2',
    /**
     * Class name of the arrow element
     */
    arrow: 'p-tooltip2-arrow',
    /**
     * Class name of the content element
     */
    content: 'p-tooltip2-content'
} as const;

/**
 * Type representing the CSS class names used in the Toolbar component.
 */
export type TooltipClassNamesType = (typeof TooltipClassNames)[keyof typeof TooltipClassNames];

/**
 * Instance of Toolbar component.
 */
export type TooltipInstance = ComponentInstance<TooltipProps, TooltipState, TooltipExposes>;
