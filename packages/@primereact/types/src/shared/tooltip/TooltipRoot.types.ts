/**
 *
 * Tooltip is a popup that displays information when hovering or focusing on an element.
 *
 * [Live Demo](https://www.primereact.org/tooltip/)
 *
 * @module tooltiproot
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { usePlacerProps } from '@primereact/types/shared/placer';
import type { BaseComponentProps, PassThroughType } from '..';
import type { useTooltipExposes, useTooltipProps, useTooltipState } from './useTooltip.types';

/**
 * Defines passthrough(pt) options type in Tooltip component.
 */
export type TooltipRootPassThroughType<E> = PassThroughType<TooltipRootInstance, E>;

/**
 * Defines passthrough(pt) options of Tooltip component.
 */
export interface TooltipRootPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: TooltipRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in Toolbar component.
 */
export interface TooltipRootProps extends BaseComponentProps<TooltipRootInstance, useTooltipProps & usePlacerProps, TooltipRootPassThrough> {}

/**
 * Defines valid state in Toolbar component.
 * @extends useToolbarState
 */
export interface TooltipRootState extends useTooltipState {}

/**
 * Defines the methods and properties exposed by Toolbar component.
 * @extends useToolbarExposes
 */
export interface TooltipRootExposes extends useTooltipExposes {}

/**
 * Instance of Toolbar component.
 */
export type TooltipRootInstance = ComponentInstance<TooltipRootProps, TooltipRootState, TooltipRootExposes>;
