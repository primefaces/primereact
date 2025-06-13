/**
 *
 * StepperTitle is a component that displays the title or label text of a step within the Stepper component.
 *
 * [Live Demo](https://www.primereact.org/stepper/)
 *
 * @module steppertitle
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { StepperInstance } from './Stepper.types';

/**
 * Defines passthrough(pt) options type in StepperTitle component.
 */
export type StepperTitlePassThroughType<E> = PassThroughType<StepperTitleInstance, E>;

/**
 * Defines passthrough(pt) options of StepperTitle component.
 */
export interface StepperTitlePassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: StepperTitlePassThroughType<React.HTMLAttributes<HTMLSpanElement>>;
}

/**
 * Defines valid properties in StepperTitle component.
 */
export interface StepperTitleProps extends BaseComponentProps<StepperTitleInstance> {}

/**
 * Defines valid state in StepperTitle component.
 */
export interface StepperTitleState {}

/**
 * Defines the methods and properties exposed by StepperTitle component.
 */
export interface StepperTitleExposes {
    /**
     * The Stepper component instance.
     */
    stepper: StepperInstance | undefined | null;
}

/**
 * Instance of StepperTitle component.
 */
export type StepperTitleInstance = ComponentInstance<StepperTitleProps, StepperTitleState, StepperTitleExposes, StepperTitlePassThrough>;
