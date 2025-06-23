/**
 *
 * StepperStep represents an individual step within a Stepper component.
 *
 * [Live Demo](https://www.primereact.org/stepper/)
 *
 * @module stepperstep
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { StepperInstance } from './Stepper.types';
import { StepperItemInstance } from './StepperItem.types';

/**
 * Defines passthrough(pt) options type in StepperStep component.
 */
export type StepperStepPassThroughType<E> = PassThroughType<StepperStepInstance, E>;

/**
 * Defines passthrough(pt) options of StepperStep component.
 */
export interface StepperStepPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: StepperStepPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in StepperStep component.
 */
export interface StepperStepProps extends BaseComponentProps<StepperStepInstance, unknown, StepperStepPassThrough> {
    /**
     * Value of the step.
     * @default null
     */
    value?: string | number | undefined | null;
    /**
     * Whether the step is disabled.
     * @default false
     */
    disabled?: boolean | undefined;
}

/**
 * Defines valid state in StepperStep component.
 */
export interface StepperStepState {}

/**
 * Defines the methods and properties exposed by StepperStep component.
 */
export interface StepperStepExposes {
    /**
     * The Stepper component instance.
     */
    stepper: StepperInstance | undefined | null;
    /**
     * The StepperItem component instance.
     */
    stepperitem: StepperItemInstance | undefined | null;
    /**
     * Current active value of the stepper.
     */
    activeValue: string | number | undefined | null;
    /**
     * Whether the step is active or not.
     */
    active: boolean;
    /**
     * Whether the step is disabled or not.
     */
    disabled: boolean | undefined | null;
}

/**
 * Instance of StepperStep component.
 */
export type StepperStepInstance = ComponentInstance<StepperStepProps, StepperStepState, StepperStepExposes>;
