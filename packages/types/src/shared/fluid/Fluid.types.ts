/**
 *
 * Fluid is a layout component to make descendant components span full width of their container.
 *
 * [Live Demo](https://www.primereact.org/fluid/)
 *
 * @module fluid
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { useFluidExposes, useFluidProps, useFluidState } from './useFluid.types';

/**
 * Defines passthrough(pt) options type in Fluid component.
 */
export type FluidPassThroughType<E> = PassThroughType<FluidInstance, E>;

/**
 * Defines passthrough(pt) options of Fluid component.
 */
export interface FluidPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: FluidPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in Fluid component.
 */
export interface FluidProps extends BaseComponentProps<FluidInstance, useFluidProps, FluidPassThrough> {}

/**
 * Defines valid state in Fluid component.
 * @extends useFluidState
 */
export interface FluidState extends useFluidState {}

/**
 * Defines the methods and properties exposed by Fluid component.
 * @extends useFluidExposes
 */
export interface FluidExposes extends useFluidExposes {}

/**
 * Defines the CSS class names used in the Fluid component.
 */
export const FluidClassNames = {
    /**
     * Class name of the root element
     */
    root: 'p-fluid'
} as const;

/**
 * Type representing the CSS class names used in the Fluid component.
 */
export type FluidClassNamesType = (typeof FluidClassNames)[keyof typeof FluidClassNames];

/**
 * Instance of Fluid component.
 */
export type FluidInstance = ComponentInstance<FluidProps, FluidState, FluidExposes>;
