/**
 *
 * StepperItem is a container component that represents an individual step within the Stepper component.
 *
 * [Live Demo](https://www.primereact.org/stepper/)
 *
 * @module stepperitem
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { StepperInstance } from './Stepper.types';

/**
 * Defines passthrough(pt) options type in StepperItem component.
 */
export type StepperItemPassThroughType<E> = PassThroughType<StepperItemInstance, E>;

/**
 * Defines passthrough(pt) options of StepperItem component.
 */
export interface StepperItemPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: StepperItemPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in StepperItem component.
 */
export interface StepperItemProps extends BaseComponentProps<StepperItemInstance> {
    /**
     * Value of the step.
     * @default null
     */
    value?: string | number | undefined | null;
}

/**
 * Defines valid state in StepperItem component.
 */
export interface StepperItemState {}

/**
 * Defines the methods and properties exposed by StepperItem component.
 */
export interface StepperItemExposes {
    /**
     * The Stepper component instance.
     */
    stepper: StepperInstance | undefined | null;
    /**
     * Whether the step is active or not.
     */
    active: boolean;
}

/**
 * Instance of StepperItem component.
 */
export type StepperItemInstance = ComponentInstance<StepperItemProps, StepperItemState, StepperItemExposes, StepperItemPassThrough>;
