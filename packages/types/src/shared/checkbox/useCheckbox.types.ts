/**
 *
 * The useCheckbox manages the state and functionality of a checkbox component.
 *
 * [Live Demo](https://www.primereact.org/checkbox/)
 *
 * @module usecheckbox
 * @group headless
 *
 */
import type { HeadlessInstance } from '@primereact/types/core';
import * as React from 'react';

/**
 * Instance of useCheckbox headless.
 */
export type useCheckboxInstance = HeadlessInstance<useCheckboxProps, useCheckboxState, useCheckboxExposes>;

/**
 * Event fired when the checkbox's checked state changes.
 */
export interface useCheckboxChangeEvent<E = React.SyntheticEvent> {
    /**
     * The original event that triggered the change.
     */
    originalEvent: E;
    /**
     * The checked state of the checkbox.
     */
    checked: boolean;
}

/**
 * Defines valid properties in useCheckbox.
 */
export interface useCheckboxProps {
    /**
     * When present, it specifies the input's checked state.
     */
    checked?: boolean | undefined;
    /**
     * The default value for the input when not controlled by `checked` and `onCheckedChange`.
     */
    defaultChecked?: boolean | undefined;
    /**
     * When present, it specifies input state as indeterminate.
     * @default false
     */
    indeterminate?: boolean | undefined;
    /**
     * Value in checked state.
     * @default true
     */
    trueValue?: boolean | string | number | undefined;
    /**
     * Value in unchecked state.
     * @default false
     */
    falseValue?: boolean | string | number | undefined;
    /**
     * Callback fired when the checkbox's checked state changes.
     * @param event The event that triggered the change.
     * @param event.originalEvent The original event that triggered the change.
     * @param event.checked The checked state of the checkbox.
     * @returns void
     */
    onCheckedChange?: (event: useCheckboxChangeEvent) => void;
}

/**
 * Defines valid state in useCheckbox.
 */
export interface useCheckboxState {
    /**
     * The checked state of the useCheckbox.
     */
    checked: boolean | undefined;
    /**
     * The indeterminate state of the useCheckbox.
     */
    indeterminate: boolean | undefined;
}

/**
 * Defines the methods and properties exposed by useCheckbox.
 */
export interface useCheckboxExposes {
    /**
     * The state of the useCheckbox.
     */
    state: useCheckboxState;
    /**
     * Callback fired when the useCheckbox's checked state changes.
     *
     * @param event The event that triggered the change.
     * @param event.originalEvent The original event that triggered the change.
     * @param event.checked The checked state of the checkbox.
     * @returns void
     */
    onChange: (event: useCheckboxChangeEvent) => void;
}
