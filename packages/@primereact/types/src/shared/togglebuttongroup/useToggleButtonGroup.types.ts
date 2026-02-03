/**
 *
 * The useToggleButtonGroup manages the state and functionality of a ToggleButtonGroup component.
 *
 * [Live Demo](https://www.primereact.org/togglebutton/)
 *
 * @module usetogglebuttongroup
 * @group headless
 *
 */
import type { HeadlessInstance } from '@primereact/types/core';
import * as React from 'react';
import { useToggleButtonProps } from '../togglebutton/useToggleButton.types';

/**
 * Event fired when the ToggleButtonGroup's checked state changes.
 */
export interface useToggleButtonGroupChangeEvent<E = React.SyntheticEvent> {
    /**
     * The original event that triggered the change.
     */
    originalEvent: E;
    /**
     * The value of the ToggleButtonGroup.
     */
    value: unknown | unknown[] | undefined;
}

/**
 * Defines valid properties in useToggleButton.
 */
export interface useToggleButtonGroupProps {
    /**
     * Value of the ToggleButtonGroup.
     */
    value?: unknown | unknown[] | undefined;
    /**
     * The default value of the ToggleButtonGroup.
     */
    defaultValue?: unknown | unknown[] | undefined;
    /**
     * Callback fired when the ToggleButtonGroup's value state changes.
     * @param event The event that triggered the change.
     * @param event.originalEvent The original event that triggered the change.
     * @param event.value The value state of the ToggleButtonGroup.
     * @returns void
     */
    onValueChange?: (event: useToggleButtonGroupChangeEvent) => void;
    /**
     * When present, it specifies that the ToggleButton group allows multiple selections.
     * @default false
     */
    multiple?: boolean | undefined;
    /**
     * When present, it specifies that the ToggleButton group allows empty selection.
     * @default true
     */
    allowEmpty?: boolean | undefined;
}

/**
 * Defines valid state in useToggleButtonGroup.
 */
export interface useToggleButtonGroupState {
    /**
     * The value state of the useToggleButtonGroup.
     */
    value: unknown | unknown[] | undefined;
}

/**
 * Defines the methods and properties exposed by useToggleButton.
 */
export interface useToggleButtonGroupExposes {
    /**
     * The state of the useToggleButtonGroup.
     */
    state: useToggleButtonGroupState;
    /**
     * Updates the value of the checkbox group.
     * @param event The event that triggered the change.
     * @param event.originalEvent The original event that triggered the change.
     * @param event.value The new value of the checkbox group.
     * @returns void
     */
    updateChange: (event: useToggleButtonGroupChangeEvent & { pressed: useToggleButtonProps['pressed'] }) => void;
    /**
     * Checks if a toggle button is pressed.
     * Returns true if the toggle button is pressed, false if not pressed, or undefined if the value is undefined.
     * @param value The current value of the ToggleButton group.
     * @param toggleButtonValue The value of the toggle button to check.
     * @returns boolean | undefined
     */
    isPressed: (value: unknown | unknown[] | undefined, toggleButtonValue: unknown) => boolean | undefined;
}

/**
 * Instance of useToggleButtonGroup headless.
 */
export type useToggleButtonGroupInstance = HeadlessInstance<useToggleButtonGroupProps, useToggleButtonGroupState, useToggleButtonGroupExposes>;
