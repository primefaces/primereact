/**
 *
 * The useRadioButtonGroup manages the state and functionality of a radio button group component.
 *
 * [Live Demo](https://www.primereact.org/radiobutton/)
 *
 * @module useradiobuttongroup
 * @group headless
 *
 */
import type { HeadlessInstance } from '@primereact/types/core';
import { RadioButtonRootProps } from '../radiobutton/RadioButtonRoot.types';
import { useRadioButtonChangeEvent } from '../radiobutton/useRadioButton.types';

/**
 * Event fired when the radio button's checked state changes.
 */
export interface useRadioButtonGroupChangeEvent {
    /**
     * The checked state of the radio button.
     */
    value: unknown | undefined;
}

/**
 * Defines valid properties in useRadioButtonGroup.
 */
export interface useRadioButtonGroupProps {
    /**
     * Value of the radio button group.
     */
    value?: unknown | undefined;
    /**
     * The default value of the radio button group.
     */
    defaultValue?: unknown | undefined;
    /**
     * Callback fired when the radio button group's value state changes.
     * @param event The event that triggered the change.
     * @param event.originalEvent The original event that triggered the change.
     * @param event.value The value state of the radio button.
     * @returns void
     */
    onValueChange?: (event: useRadioButtonGroupChangeEvent) => void;
}

/**
 * Defines valid state in useRadioButtonGroup.
 */
export interface useRadioButtonGroupState {
    /**
     * The checked state of the useRadioButtonGroup.
     */
    checked: boolean | undefined;
}

/**
 * Defines the methods and properties exposed by useRadioButtonGroup.
 */
export interface useRadioButtonGroupExposes {
    /**
     * The state of the useRadioButtonGroup.
     */
    state: useRadioButtonGroupState;
    /**
     * Updates the value of the radio button group.
     * @param event The event that triggered the change.
     * @param event.originalEvent The original event that triggered the change.
     * @param event.value The new value of the radio button group.
     * @returns void
     */
    updateChange: (event: useRadioButtonChangeEvent & { value: RadioButtonRootProps['value'] }) => void;
}

/**
 * Instance of useRadioButtonGroup headless.
 */
export type useRadioButtonGroupInstance = HeadlessInstance<useRadioButtonGroupProps, useRadioButtonGroupState, useRadioButtonGroupExposes>;
