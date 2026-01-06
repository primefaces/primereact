/**
 *
 * Stepper is utilized to separate and resize panels.
 *
 * [Live Demo](https://www.primereact.org/stepper/)
 *
 * @module stepperroot
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { useStepperExposes, useStepperProps, useStepperState } from './useStepper.types';

/**
 * Defines passthrough(pt) options type in Stepper component.
 */
export type StepperRootPassThroughType<E> = PassThroughType<StepperRootInstance, E>;

/**
 * Defines passthrough(pt) options of Stepper component.
 */
export interface StepperRootPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: StepperRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the list's DOM element.
     */
    list?: StepperRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the step's DOM element.
     */
    step?: StepperRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the header's DOM element.
     */
    header?: StepperRootPassThroughType<React.HTMLAttributes<HTMLButtonElement>>;
    /**
     * Used to pass attributes to the number's DOM element.
     */
    number?: StepperRootPassThroughType<React.HTMLAttributes<HTMLSpanElement>>;
    /**
     * Used to pass attributes to the title's DOM element.
     */
    title?: StepperRootPassThroughType<React.HTMLAttributes<HTMLSpanElement>>;
    /**
     * Used to pass attributes to the separator's DOM element.
     */
    separator?: StepperRootPassThroughType<React.HTMLAttributes<HTMLSpanElement>>;
    /**
     * Used to pass attributes to the panels's DOM element.
     */
    panels?: StepperRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the panel's DOM element.
     */
    panel?: StepperRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the item's DOM element.
     */
    item?: StepperRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the content's DOM element.
     */
    content?: StepperRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in Stepper component.
 */
export interface StepperRootProps extends BaseComponentProps<StepperRootInstance, useStepperProps, StepperRootPassThrough> {}

/**
 * Defines valid state in Stepper component.
 * @extends useStepperState
 */
export interface StepperRootState extends useStepperState {}

/**
 * Defines the methods and properties exposed by Stepper component.
 * @extends useStepperExposes
 */
export interface StepperRootExposes extends useStepperExposes {}

/**
 * Instance of Stepper component.
 */
export type StepperRootInstance = ComponentInstance<StepperRootProps, StepperRootState, StepperRootExposes>;
