/**
 *
 * The usePassword manages the state and functionality of a Password component.
 *
 * [Live Demo](https://www.primereact.org/password/)
 *
 * @module usepassword
 * @group headless
 *
 */
import type { HeadlessInstance } from '@primereact/types/core';

/**
 * Event object for value change callback.
 */
export interface usePasswordValueChangeEvent<E = React.SyntheticEvent> {
    /**
     * The new password value.
     */
    value: string | null;
    /**
     * The original DOM event.
     */
    originalEvent: E;
}

/**
 * Props for the usePassword hook.
 */
export interface usePasswordProps {
    /**
     * The controlled value of the password input.
     */
    value?: string | undefined;
    /**
     * The default value for uncontrolled mode.
     */
    defaultValue?: string | undefined;
    /**
     * Callback fired when the password value changes.
     */
    onValueChange?: (event: usePasswordValueChangeEvent) => void;
}

/**
 * Defines valid state in usePassword.
 */
export interface usePasswordState {
    /**
     * Current password value.
     */
    value: string | null | undefined;
}

/**
 * Defines the methods and properties exposed by usePassword.
 */
export interface usePasswordExposes {
    /**
     * The state of the usePassword.
     */
    state: usePasswordState;
    /**
     * Handle input change.
     */
    onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * Instance of usePassword headless.
 */
export type usePasswordInstance = HeadlessInstance<usePasswordProps, usePasswordState, usePasswordExposes>;
