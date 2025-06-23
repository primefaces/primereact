/**
 *
 * StepperSeparator is a container component for Stepper Items that displays a separator of steps in the Stepper component.
 *
 * [Live Demo](https://www.primereact.org/stepper/)
 *
 * @module stepperseparator
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { StepperInstance } from './Stepper.types';

/**
 * Defines passthrough(pt) options type in StepperSeparator component.
 */
export type StepperSeparatorPassThroughType<E> = PassThroughType<StepperSeparatorInstance, E>;

/**
 * Defines passthrough(pt) options of StepperSeparator component.
 */
export interface StepperSeparatorPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: StepperSeparatorPassThroughType<React.HTMLAttributes<HTMLSpanElement>>;
}

/**
 * Defines valid properties in StepperSeparator component.
 */
export interface StepperSeparatorProps extends BaseComponentProps<StepperSeparatorInstance, unknown, StepperSeparatorPassThrough> {}

/**
 * Defines valid state in StepperSeparator component.
 */
export interface StepperSeparatorState {}

/**
 * Defines the methods and properties exposed by StepperSeparator component.
 */
export interface StepperSeparatorExposes {
    /**
     * The Stepper component instance.
     */
    stepper: StepperInstance | undefined | null;
}

/**
 * Instance of StepperSeparator component.
 */
export type StepperSeparatorInstance = ComponentInstance<StepperSeparatorProps, StepperSeparatorState, StepperSeparatorExposes>;
