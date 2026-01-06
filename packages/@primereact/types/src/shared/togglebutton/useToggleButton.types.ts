/**
 *
 * The useToggleButton manages the state and functionality of a ToggleButton component.
 *
 * [Live Demo](https://www.primereact.org/togglebutton/)
 *
 * @module usetogglebutton
 * @group headless
 *
 */
import type { HeadlessInstance } from '@primereact/types/core';
import * as React from 'react';

/**
 * Event fired when the ToggleButton's checked state changes.
 */
export interface useToggleButtonChangeEvent<E = React.SyntheticEvent> {
    /**
     * The original event that triggered the change.
     */
    originalEvent: E;
    /**
     * The pressed state of the ToggleButton.
     */
    pressed: boolean;
}

/**
 * Defines valid properties in useToggleButton.
 */
export interface useToggleButtonProps {
    /**
     * When present, it specifies that the ToggleButton should be pressed.
     */
    pressed?: boolean | undefined;
    /**
     * The default pressed value when not controlled by `pressed` and `onPressedChange`.
     */
    defaultPressed?: boolean | undefined;
    /**
     * Callback fired when the ToggleButton's pressed state changes.
     * @param event The event that triggered the change.
     * @param event.originalEvent The original event that triggered the change.
     * @param event.pressed The pressed state of the ToggleButton.
     * @returns void
     */
    onPressedChange?: (event: useToggleButtonChangeEvent) => void;
}

/**
 * Defines valid state in useToggleButton.
 */
export interface useToggleButtonState {
    /**
     * The pressed state of the useToggleButton.
     */
    pressed: boolean | undefined;
}

/**
 * Defines the methods and properties exposed by useToggleButton.
 */
export interface useToggleButtonExposes {
    /**
     * The state of the useToggleButton.
     */
    state: useToggleButtonState;
    /**
     * Callback fired when the useToggleButton's pressed state changes.
     *
     * @param event The event that triggered the change.
     * @param event.originalEvent The original event that triggered the change.
     * @param event.pressed The pressed state of the ToggleButton.
     * @returns void
     */
    onChange: (event: useToggleButtonChangeEvent) => void;
}

/**
 * Instance of useToggleButton headless.
 */
export type useToggleButtonInstance = HeadlessInstance<useToggleButtonProps, useToggleButtonState, useToggleButtonExposes>;
