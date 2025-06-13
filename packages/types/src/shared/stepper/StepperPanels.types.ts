/**
 *
 * StepperPanels is a container component that manages the content panels corresponding to each step in the Stepper component.
 *
 * [Live Demo](https://www.primereact.org/stepper/)
 *
 * @module stepperpanels
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { StepperInstance } from './Stepper.types';

/**
 * Defines passthrough(pt) options type in StepperPanels component.
 */
export type StepperPanelsPassThroughType<E> = PassThroughType<StepperPanelsInstance, E>;

/**
 * Defines passthrough(pt) options of StepperPanels component.
 */
export interface StepperPanelsPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: StepperPanelsPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in StepperPanels component.
 */
export interface StepperPanelsProps extends BaseComponentProps<StepperPanelsInstance> {}

/**
 * Defines valid state in StepperPanels component.
 */
export interface StepperPanelsState {}

/**
 * Defines the methods and properties exposed by StepperPanels component.
 */
export interface StepperPanelsExposes {
    /**
     * The Stepper component instance.
     */
    stepper: StepperInstance | undefined | null;
}

/**
 * Instance of StepperPanels component.
 */
export type StepperPanelsInstance = ComponentInstance<StepperPanelsProps, StepperPanelsState, StepperPanelsExposes, StepperPanelsPassThrough>;
