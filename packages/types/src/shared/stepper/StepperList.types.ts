/**
 *
 * StepperList is a container component for Stepper Items that displays a list of steps in the Stepper component.
 *
 * [Live Demo](https://www.primereact.org/stepper/)
 *
 * @module stepperlist
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { StepperInstance } from './Stepper.types';

/**
 * Defines passthrough(pt) options type in StepperList component.
 */
export type StepperListPassThroughType<E> = PassThroughType<StepperListInstance, E>;

/**
 * Defines passthrough(pt) options of StepperList component.
 */
export interface StepperListPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: StepperListPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in StepperList component.
 */
export interface StepperListProps extends BaseComponentProps<StepperListInstance> {}

/**
 * Defines valid state in StepperList component.
 */
export interface StepperListState {}

/**
 * Defines the methods and properties exposed by StepperList component.
 */
export interface StepperListExposes {
    /**
     * The Stepper component instance.
     */
    stepper: StepperInstance | undefined | null;
}

/**
 * Instance of StepperList component.
 */
export type StepperListInstance = ComponentInstance<StepperListProps, StepperListState, StepperListExposes, StepperListPassThrough>;
