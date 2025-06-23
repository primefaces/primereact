/**
 *
 * StepperNumber is a component that displays the numeric indicator for each step in the Stepper component.
 *
 * [Live Demo](https://www.primereact.org/stepper/)
 *
 * @module steppernumber
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { StepperInstance } from './Stepper.types';

/**
 * Defines passthrough(pt) options type in StepperNumber component.
 */
export type StepperNumberPassThroughType<E> = PassThroughType<StepperNumberInstance, E>;

/**
 * Defines passthrough(pt) options of StepperNumber component.
 */
export interface StepperNumberPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: StepperNumberPassThroughType<React.HTMLAttributes<HTMLSpanElement>>;
}

/**
 * Defines valid properties in StepperNumber component.
 */
export interface StepperNumberProps extends BaseComponentProps<StepperNumberInstance, unknown, StepperNumberPassThrough> {}

/**
 * Defines valid state in StepperNumber component.
 */
export interface StepperNumberState {}

/**
 * Defines the methods and properties exposed by StepperNumber component.
 */
export interface StepperNumberExposes {
    /**
     * The Stepper component instance.
     */
    stepper: StepperInstance | undefined | null;
}

/**
 * Instance of StepperNumber component.
 */
export type StepperNumberInstance = ComponentInstance<StepperNumberProps, StepperNumberState, StepperNumberExposes>;
