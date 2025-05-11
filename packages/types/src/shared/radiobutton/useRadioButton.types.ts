/**
 *
 * The useRadioButton manages the state and functionality of a radio button component.
 *
 * [Live Demo](https://www.primereact.org/radiobutton/)
 *
 * @module useradiobutton
 * @group headless
 *
 */
import type { HeadlessInstance } from '@primereact/types/core';
import * as React from 'react';

/**
 * Event fired when the radio button's checked state changes.
 */
export interface useRadioButtonChangeEvent<E = React.SyntheticEvent> {
    /**
     * The original event that triggered the change.
     */
    originalEvent: E;
    /**
     * The checked state of the radio button.
     */
    checked: boolean;
}

/**
 * Defines valid properties in useRadioButton.
 */
export interface useRadioButtonProps {
    /**
     * When present, it specifies the input's checked state.
     */
    checked?: boolean | undefined;
    /**
     * The default value for the input when not controlled by `checked` and `onCheckedChange`.
     */
    defaultChecked?: boolean | undefined;
    /**
     * Callback fired when the radio button's checked state changes.
     * @param event The event that triggered the change.
     * @param event.originalEvent The original event that triggered the change.
     * @param event.checked The checked state of the radio button.
     * @returns void
     */
    onCheckedChange?: (event: useRadioButtonChangeEvent) => void;
}

/**
 * Defines valid state in useRadioButton.
 */
export interface useRadioButtonState {
    /**
     * The checked state of the useRadioButton.
     */
    checked: boolean | undefined;
}

/**
 * Defines the methods and properties exposed by useRadioButton.
 */
export interface useRadioButtonExposes {
    /**
     * The state of the useRadioButton.
     */
    state: useRadioButtonState;
    /**
     * Callback fired when the useRadioButton's checked state changes.
     *
     * @param event The event that triggered the change.
     * @param event.originalEvent The original event that triggered the change.
     * @param event.checked The checked state of the radio button.
     * @returns void
     */
    onChange: (event: useRadioButtonChangeEvent) => void;
}

/**
 * Instance of useRadioButton headless.
 */
export type useRadioButtonInstance = HeadlessInstance<useRadioButtonProps, useRadioButtonState, useRadioButtonExposes>;
