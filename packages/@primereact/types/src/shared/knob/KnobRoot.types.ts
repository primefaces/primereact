/**
 *
 * Knob is a form component to define number inputs with a dial.
 *
 * [Live Demo](https://www.primereact.org/knob/)
 *
 * @module knobroot
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { useKnobExposes, useKnobProps, useKnobState } from './useKnob.types';

/**
 * Defines passthrough(pt) options type in Knob component.
 */
export type KnobRootPassThroughType<E> = PassThroughType<KnobRootInstance, E>;

/**
 * Defines passthrough(pt) options of Knob component.
 */
export interface KnobRootPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: KnobRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the svg's DOM element.
     */
    svg?: KnobRootPassThroughType<React.HTMLAttributes<SVGSVGElement>>;
    /**
     * Used to pass attributes to the range's DOM element.
     */
    range?: KnobRootPassThroughType<React.HTMLAttributes<SVGPathElement>>;
    /**
     * Used to pass attributes to the value's DOM element.
     */
    value?: KnobRootPassThroughType<React.HTMLAttributes<SVGPathElement>>;
    /**
     * Used to pass attributes to the text's DOM element.
     */
    text?: KnobRootPassThroughType<React.HTMLAttributes<SVGTextElement>>;
}

/**
 * Event fired when the knob's value changes.
 */
export interface KnobRootChangeEvent {
    /**
     * The value of the knob.
     */
    value: number | undefined | null;
}

/**
 * Defines valid properties in Knob component.
 */
export interface KnobRootProps extends BaseComponentProps<KnobRootInstance, Omit<useKnobProps, 'onCheckedChange'>, KnobRootPassThrough> {
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
    onValueChange?: (event: KnobRootChangeEvent) => void;
}

/**
 * Defines valid state in Knob component.
 * @extends useKnobState
 */
export interface KnobRootState extends useKnobState {}

/**
 * Defines the methods and properties exposed by Knob component.
 * @extends useKnobExposes
 */
export interface KnobRootExposes extends useKnobExposes {}

/**
 * Instance of Knob component.
 */
export type KnobRootInstance = ComponentInstance<KnobRootProps, KnobRootState, KnobRootExposes>;
