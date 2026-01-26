/**
 *
 * The useCheckboxGroup manages the state and functionality of a checkbox group component.
 *
 * [Live Demo](https://www.primereact.org/checkboxgroup/)
 *
 * @module usecheckboxgroup
 * @group headless
 *
 */
import type { HeadlessInstance } from '@primereact/types/core';
import { CheckboxRootProps } from '../checkbox/CheckboxRoot.types';
import { useCheckboxChangeEvent } from '../checkbox/useCheckbox.types';

/**
 * Event fired when the checkbox's checked state changes.
 */
export interface useCheckboxGroupChangeEvent {
    /**
     * The value of the checkbox group.
     */
    value: unknown[] | undefined;
}

/**
 * Defines valid properties in useCheckboxGroup.
 */
export interface useCheckboxGroupProps {
    /**
     * Value of the checkbox group.
     */
    value?: unknown[] | undefined;
    /**
     * The default value of the checkbox group.
     */
    defaultValue?: unknown[] | undefined;
    /**
     * Callback fired when the checkboxgroup's value state changes.
     * @param event The event that triggered the change.
     * @param event.originalEvent The original event that triggered the change.
     * @param event.value The value state of the checkbox.
     * @returns void
     */
    onValueChange?: (event: useCheckboxGroupChangeEvent) => void;
}

/**
 * Defines valid state in useCheckboxGroup.
 */
export interface useCheckboxGroupState {
    /**
     * Value of the checkbox group.
     */
    value: unknown[] | undefined;
}

/**
 * Defines the methods and properties exposed by useCheckboxGroup.
 */
export interface useCheckboxGroupExposes {
    /**
     * The state of the checkbox group.
     */
    state: useCheckboxGroupState;
    /**
     * Updates the value of the checkbox group.
     * @param event The event that triggered the change.
     * @param event.originalEvent The original event that triggered the change.
     * @param event.value The new value of the checkbox group.
     * @returns void
     */
    updateChange: (event: useCheckboxChangeEvent & { value: CheckboxRootProps['value'] }) => void;
}

/**
 * Instance of useCheckboxGroup headless.
 */
export type useCheckboxGroupInstance = HeadlessInstance<useCheckboxGroupProps, useCheckboxGroupState, useCheckboxGroupExposes>;
