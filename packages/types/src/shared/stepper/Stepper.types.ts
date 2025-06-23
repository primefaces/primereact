/**
 *
 * Stepper is utilized to separate and resize panels.
 *
 * [Live Demo](https://www.primereact.org/stepper/)
 *
 * @module stepper
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { useStepperExposes, useStepperProps, useStepperState } from './useStepper.types';

/**
 * Defines passthrough(pt) options type in Stepper component.
 */
export type StepperPassThroughType<E> = PassThroughType<StepperInstance, E>;

/**
 * Defines passthrough(pt) options of Stepper component.
 */
export interface StepperPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: StepperPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the list's DOM element.
     */
    list?: StepperPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the step's DOM element.
     */
    step?: StepperPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the header's DOM element.
     */
    header?: StepperPassThroughType<React.HTMLAttributes<HTMLButtonElement>>;
    /**
     * Used to pass attributes to the number's DOM element.
     */
    number?: StepperPassThroughType<React.HTMLAttributes<HTMLSpanElement>>;
    /**
     * Used to pass attributes to the title's DOM element.
     */
    title?: StepperPassThroughType<React.HTMLAttributes<HTMLSpanElement>>;
    /**
     * Used to pass attributes to the separator's DOM element.
     */
    separator?: StepperPassThroughType<React.HTMLAttributes<HTMLSpanElement>>;
    /**
     * Used to pass attributes to the panels's DOM element.
     */
    panels?: StepperPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the panel's DOM element.
     */
    panel?: StepperPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the item's DOM element.
     */
    item?: StepperPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the content's DOM element.
     */
    content?: StepperPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in Stepper component.
 */
export interface StepperProps extends BaseComponentProps<StepperInstance, useStepperProps, StepperPassThrough> {}

/**
 * Defines valid state in Stepper component.
 * @extends useStepperState
 */
export interface StepperState extends useStepperState {}

/**
 * Defines the methods and properties exposed by Stepper component.
 * @extends useStepperExposes
 */
export interface StepperExposes extends useStepperExposes {}

/**
 * Defines the CSS class names used in the Stepper component.
 */
export const StepperClassNames = {
    /**
     * Class name of the root element
     */
    root: 'p-stepper',
    /**
     * Class name of the separator element
     */
    separator: 'p-stepper-separator',
    /**
     * Class name of the panels element
     */
    panels: 'p-steppanels',
    /**
     * Class name of the panel element
     */
    panel: 'p-steppanel',
    /**
     * Class name of the content element
     */
    content: 'p-steppanel-content',
    /**
     * Class name of the list element
     */
    list: 'p-steplist',
    /**
     * Class name of the item element
     */
    item: 'p-stepitem',
    /**
     * Class name of the header element
     */
    header: 'p-step-header',
    /**
     * Class name of the number element
     */
    number: 'p-step-number',
    /**
     * Class name of the title element
     */
    title: 'p-step-title'
} as const;

/**
 * Type representing the CSS class names used in the Stepper component.
 */
export type StepperClassNamesType = (typeof StepperClassNames)[keyof typeof StepperClassNames];

/**
 * Instance of Stepper component.
 */
export type StepperInstance = ComponentInstance<StepperProps, StepperState, StepperExposes>;
