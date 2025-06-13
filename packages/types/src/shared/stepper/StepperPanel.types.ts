/**
 *
 * StepperPanel is a container component that renders the content associated with a specific step in the Stepper component.
 *
 * [Live Demo](https://www.primereact.org/stepper/)
 *
 * @module stepperpanel
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { StepperInstance } from './Stepper.types';
import { StepperItemInstance } from './StepperItem.types';

/**
 * Defines passthrough(pt) options type in StepperPanel component.
 */
export type StepperPanelPassThroughType<E> = PassThroughType<StepperPanelInstance, E>;

/**
 * Defines passthrough(pt) options of StepperPanel component.
 */
export interface StepperPanelPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: StepperPanelPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in StepperPanel component.
 */
export interface StepperPanelProps extends BaseComponentProps<StepperPanelInstance> {
    /**
     * Value of the step.
     * @default null
     */
    value?: string | number | undefined | null;
}

/**
 * Defines valid state in StepperPanel component.
 */
export interface StepperPanelState {}

/**
 * Defines the methods and properties exposed by StepperPanel component.
 */
export interface StepperPanelExposes {
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
    active: boolean | undefined | null;
}

/**
 * Instance of StepperPanel component.
 */
export type StepperPanelInstance = ComponentInstance<StepperPanelProps, StepperPanelState, StepperPanelExposes, StepperPanelPassThrough>;
