/**
 *
 * StepperContent is a container component for Stepper Items that displays a content of steps in the Stepper component.
 *
 * [Live Demo](https://www.primereact.org/stepper/)
 *
 * @module steppercontent
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { StepperInstance } from './Stepper.types';

/**
 * Defines passthrough(pt) options type in StepperContent component.
 */
export type StepperContentPassThroughType<E> = PassThroughType<StepperContentInstance, E>;

/**
 * Defines passthrough(pt) options of StepperContent component.
 */
export interface StepperContentPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: StepperContentPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in StepperContent component.
 */
export interface StepperContentProps extends BaseComponentProps<StepperContentInstance> {}

/**
 * Defines valid state in StepperContent component.
 */
export interface StepperContentState {}

/**
 * Defines the methods and properties exposed by StepperContent component.
 */
export interface StepperContentExposes {
    /**
     * The Stepper component instance.
     */
    stepper: StepperInstance | undefined | null;
}

/**
 * Instance of StepperContent component.
 */
export type StepperContentInstance = ComponentInstance<StepperContentProps, StepperContentState, StepperContentExposes, StepperContentPassThrough>;
