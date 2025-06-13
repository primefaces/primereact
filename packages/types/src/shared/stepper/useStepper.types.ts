/**
 *
 * The useStepper manages the functionality of a stepper component.
 *
 * [Live Demo](https://www.primereact.org/stepper/)
 *
 * @module usestepper
 * @group headless
 *
 */
import type { HeadlessInstance } from '@primereact/types/core';

/**
 * Event fired when the stepper's value changes.
 */
export interface useStepperChangeEvent {
    /**
     * The value of the stepper.
     */
    value: string | number | null | undefined;
}

/**
 * Defines valid properties in useStepper.
 */
export interface useStepperProps {
    /**
     * Default value of the active step.
     * @default null
     */
    defaultValue?: string | number | null | undefined;
    /**
     * Value of the active step.
     * @default null
     */
    value?: string | number | null | undefined;
    /**
     * Whether the steps are clickable or not.
     * @default false
     */
    linear?: boolean | undefined;
    /**
     * Callback fired when the stepper's value changes.
     * @param event The event that triggered the change.
     * @param event.value The value of the stepper.
     * @returns void
     */
    onValueChange?: (event: useStepperChangeEvent) => void;
}

/**
 * Defines valid state in useStepper.
 */
export interface useStepperState {
    /**
     * Value of the active step.
     */
    value: string | number | null | undefined;
}

/**
 * Defines the methods and properties exposed by useStepper.
 */
export interface useStepperExposes {
    /**
     * The state of the useStepper.
     */
    state: useStepperState;
    /**
     * The method to update the value of the active step.
     * @param value The value of the step.
     * @returns void
     */
    setActiveStep: (value: string | number | null | undefined) => void;
    /**
     * The method to check if the step is active.
     * @param value The value of the step.
     * @returns boolean
     */
    isStepActive: (value: string | number | null | undefined) => boolean;
    /**
     * The method to check if the step is disabled.
     * @returns boolean
     */
    isStepDisabled: () => boolean;
}

/**
 * Instance of useStepper headless.
 */
export type useStepperInstance = HeadlessInstance<useStepperProps, useStepperState, useStepperExposes>;
