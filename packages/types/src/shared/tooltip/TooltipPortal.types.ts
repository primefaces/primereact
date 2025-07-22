/**
 *
 * TooltipPortal is a component that displays the portal of a tooltip.
 *
 * [Live Demo](https://www.primereact.org/tooltip/)
 *
 * @module tooltipportal
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import { PortalProps } from '../portal';
import type { TooltipInstance } from './Tooltip.types';

/**
 * Defines passthrough(pt) options type in TooltipPortal component.
 */
export type TooltipPortalPassThroughType<E> = PassThroughType<TooltipInstance, E>;

/**
 * Defines passthrough(pt) options of TooltipPortal component.
 */
export interface TooltipPortalPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: TooltipPortalPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in TooltipPortal component.
 */
export interface TooltipPortalProps extends BaseComponentProps<TooltipPortalInstance, PortalProps, TooltipPortalPassThrough> {}

/**
 * Defines valid state in TooltipPortal component.
 */
export interface TooltipPortalState {}

/**
 * Defines the methods and properties exposed by TooltipPortal component.
 */
export interface TooltipPortalExposes {
    /**
     * The Tooltip component instance.
     */
    tooltip: TooltipInstance | undefined | null;
}

/**
 * Instance of TooltipPortal component.
 */
export type TooltipPortalInstance = ComponentInstance<TooltipPortalProps, TooltipPortalState, TooltipPortalExposes>;
