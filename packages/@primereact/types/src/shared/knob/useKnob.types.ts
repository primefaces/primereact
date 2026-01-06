/**
 *
 * The useKnob manages the state and functionality of a knob component.
 *
 * [Live Demo](https://www.primereact.org/knob/)
 *
 * @module useknob
 * @group headless
 *
 */
import type { HeadlessInstance } from '@primereact/types/core';

/**
 * Event fired when the knob's value changes.
 */
export interface useKnobChangeEvent {
    /**
     * The value of the knob.
     */
    value: number | undefined | null;
}

/**
 * Defines valid properties in useKnob.
 */
export interface useKnobProps {
    /**
     * Value of the knob.
     * @default undefined
     */
    defaultValue?: number | undefined | null;
    /**
     * The default value of the knob.
     * @default undefined
     */
    value?: number | undefined | null;
    /**
     * Size of the component in pixels.
     * @default 100
     */
    size?: number | undefined;
    /**
     * Step factor to increment/decrement the value.
     * @default 1
     */
    step?: number | undefined;
    /**
     * Mininum boundary value.
     * @default 0
     */
    min?: number | undefined;
    /**
     * Maximum boundary value.
     * @default 100
     */
    max?: number | undefined;
    /**
     * When present, it specifies that the component value cannot be edited.
     * @default false
     */
    readOnly?: boolean | undefined;
    /**
     * When present, it specifies that the component should be disabled.
     * @default false
     */
    disabled?: boolean | undefined;
    /**
     * Callback fired when the knob's value changes.
     * @param event The event that triggered the change.
     * @param event.value The value of the knob.
     * @returns void
     */
    onValueChange?: (event: useKnobChangeEvent) => void;
}

/**
 * Defines valid state in useKnob.
 */
export interface useKnobState {
    /**
     * The value of the knob.
     */
    value: number | undefined | null;
}

/**
 * Defines the methods and properties exposed by useKnob.
 */
export interface useKnobExposes {
    /**
     * The state of the useKnob.
     */
    state: useKnobState;
    /**
     * The path string for the range arc of the knob.
     */
    rangePath: string;
    /**
     * The path string for the value arc of the knob.
     */
    valuePath: string;
    /**
     * Callback fired when the knob is clicked.
     *
     * @param event The mouse event that triggered the click.
     * @returns void
     */
    onClick: (event: React.MouseEvent) => void;
    /**
     * Callback fired when mouse down occurs on the knob.
     *
     * @param event The mouse event that triggered the mouse down.
     * @returns void
     */
    onMouseDown: (event: React.MouseEvent) => void;
    /**
     * Callback fired when mouse up occurs.
     *
     * @returns void
     */
    onMouseUp: () => void;
    /**
     * Callback fired when touch starts on the knob.
     *
     * @returns void
     */
    onTouchStart: () => void;
    /**
     * Callback fired when touch ends.
     *
     * @returns void
     */
    onTouchEnd: () => void;
    /**
     * Callback fired when mouse moves while dragging the knob.
     *
     * @param event The mouse event that triggered the mouse move.
     * @returns void
     */
    onMouseMove: (event: React.MouseEvent) => void;
    /**
     * Callback fired when touch moves while dragging the knob.
     *
     * @param event The touch event that triggered the touch move.
     * @returns void
     */
    onTouchMove: (event: React.TouchEvent) => void;
    /**
     * Callback fired when a key is pressed while the knob is focused.
     *
     * @param event The keyboard event that triggered the key down.
     * @returns void
     */
    onKeyDown: (event: React.KeyboardEvent) => void;
}

/**
 * Instance of useKnob headless.
 */
export type useKnobInstance = HeadlessInstance<useKnobProps, useKnobState, useKnobExposes>;
