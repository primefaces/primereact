/**
 *
 * StepperHeader is a container component that displays the navigation section of a Stepper component.
 *
 * [Live Demo](https://www.primereact.org/stepper/)
 *
 * @module stepperheader
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { StepperInstance } from './Stepper.types';
import { StepperItemInstance } from './StepperItem.types';
import { StepperStepInstance } from './StepperStep.types';

/**
 * Defines passthrough(pt) options type in StepperHeader component.
 */
export type StepperHeaderPassThroughType<E> = PassThroughType<StepperHeaderInstance, E>;

/**
 * Defines passthrough(pt) options of StepperHeader component.
 */
export interface StepperHeaderPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: StepperHeaderPassThroughType<React.HTMLAttributes<HTMLButtonElement>>;
}

/**
 * Defines valid properties in StepperHeader component.
 */
export interface StepperHeaderProps extends BaseComponentProps<StepperHeaderInstance, unknown, StepperHeaderPassThrough> {}

/**
 * Defines valid state in StepperHeader component.
 */
export interface StepperHeaderState {}

/**
 * Defines the methods and properties exposed by StepperHeader component.
 */
export interface StepperHeaderExposes {
    /**
     * The Stepper component instance.
     */
    stepper: StepperInstance | undefined | null;
    /**
     * The StepperItem component instance.
     */
    stepperitem: StepperItemInstance | undefined | null;
    /**
     * The StepperStep component instance.
     */
    stepperstep: StepperStepInstance | undefined | null;
    /**
     * Current active value of the stepper.
     */
    activeValue: string | number | undefined | null;
    /**
     * Whether the step is disabled or not.
     */
    disabled: boolean | undefined | null;
}

/**
 * Instance of StepperHeader component.
 */
export type StepperHeaderInstance = ComponentInstance<StepperHeaderProps, StepperHeaderState, StepperHeaderExposes>;
