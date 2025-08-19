/**
 *
 * Knob is a form component to define number inputs with a dial.
 *
 * [Live Demo](https://www.primereact.org/knob/)
 *
 * @module knob
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { useKnobExposes, useKnobProps, useKnobState } from './useKnob.types';

/**
 * Defines passthrough(pt) options type in Knob component.
 */
export type KnobPassThroughType<E> = PassThroughType<KnobInstance, E>;

/**
 * Defines passthrough(pt) options of Knob component.
 */
export interface KnobPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: KnobPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the svg's DOM element.
     */
    svg?: KnobPassThroughType<React.HTMLAttributes<SVGSVGElement>>;
    /**
     * Used to pass attributes to the range's DOM element.
     */
    range?: KnobPassThroughType<React.HTMLAttributes<SVGPathElement>>;
    /**
     * Used to pass attributes to the value's DOM element.
     */
    value?: KnobPassThroughType<React.HTMLAttributes<SVGPathElement>>;
    /**
     * Used to pass attributes to the text's DOM element.
     */
    text?: KnobPassThroughType<React.HTMLAttributes<SVGTextElement>>;
}

/**
 * Event fired when the knob's value changes.
 */
export interface KnobChangeEvent {
    /**
     * The value of the knob.
     */
    value: number | undefined | null;
}

/**
 * Defines valid properties in Knob component.
 */
export interface KnobProps extends BaseComponentProps<KnobInstance, Omit<useKnobProps, 'onCheckedChange'>, KnobPassThrough> {
    /**
     * Index of the element in tabbing order.
     * @default 0
     */
    tabindex?: number | undefined;
    /**
     * When present, it specifies that the component should have invalid state style.
     * @default false
     */
    invalid?: boolean | undefined;
    /**
     * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
     */
    ariaLabelledby?: string | undefined;
    /**
     * Used to define a string that labels the element.
     */
    ariaLabel?: string | undefined;
    /**
     * Callback fired when the knob's value changes.
     * @param event The event that triggered the change.
     * @param event.value The value of the knob.
     * @returns void
     */
    onValueChange?: (event: KnobChangeEvent) => void;
}

/**
 * Defines valid state in Knob component.
 * @extends useKnobState
 */
export interface KnobState extends useKnobState {}

/**
 * Defines the methods and properties exposed by Knob component.
 * @extends useKnobExposes
 */
export interface KnobExposes extends useKnobExposes {}

/**
 * Defines the CSS class names used in the Knob component.
 */
export const KnobClassNames = {
    /**
     * Class name of the root element
     */
    root: 'p-knob',
    /**
     * Class name of the range element
     */
    range: 'p-knob-range',
    /**
     * Class name of the value element
     */
    value: 'p-knob-value',
    /**
     * Class name of the text element
     */
    text: 'p-knob-text'
} as const;

/**
 * Type representing the CSS class names used in the Knob component.
 */
export type KnobClassNamesType = (typeof KnobClassNames)[keyof typeof KnobClassNames];

/**
 * Instance of Knob component.
 */
export type KnobInstance = ComponentInstance<KnobProps, KnobState, KnobExposes>;
