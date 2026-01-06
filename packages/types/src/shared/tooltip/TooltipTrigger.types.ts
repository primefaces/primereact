/**
 *
 * TooltipTrigger is a component that displays the trigger of a tooltip.
 *
 * [Live Demo](https://www.primereact.org/tooltip/)
 *
 * @module tooltiptrigger
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { ButtonProps } from '@primereact/types/shared/button';
import type { BaseComponentProps, PassThroughType } from '..';
import type { TooltipRootInstance } from './TooltipRoot.types';

/**
 * Defines passthrough(pt) options type in TooltipTrigger component.
 */
export type TooltipTriggerPassThroughType<E> = PassThroughType<TooltipTriggerInstance, E>;

/**
 * Defines passthrough(pt) options of TooltipTrigger component.
 */
export interface TooltipTriggerPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: TooltipTriggerPassThroughType<React.HTMLAttributes<HTMLButtonElement>>;
}

/**
 * Defines valid properties in TooltipTrigger component.
 */
export interface TooltipTriggerProps extends BaseComponentProps<TooltipTriggerInstance, ButtonProps, TooltipTriggerPassThrough> {}

/**
 * Defines valid state in TooltipTrigger component.
 */
export interface TooltipTriggerState {}

/**
 * Defines the methods and properties exposed by TooltipTrigger component.
 */
export interface TooltipTriggerExposes {
    /**
     * The Tooltip component instance.
     */
    tooltip: TooltipRootInstance | undefined | null;
}

/**
 * Instance of TooltipTrigger component.
 */
export type TooltipTriggerInstance = ComponentInstance<TooltipTriggerProps, TooltipTriggerState, TooltipTriggerExposes>;
