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
 * Event object for mask change callback.
 */
export interface usePasswordMaskChangeEvent {
    /**
     * Whether the password is masked.
     */
    value: boolean;
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
     * The controlled mask state of the password input.
     * When true, the password is hidden. When false, the password is visible.
     */
    mask?: boolean | undefined;
    /**
     * The default mask state for uncontrolled mode.
     * @defaultValue true
     */
    defaultMask?: boolean | undefined;
    /**
     * Callback fired when the password value changes.
     */
    onValueChange?: (event: usePasswordValueChangeEvent) => void;
    /**
     * Callback fired when the mask state changes.
     */
    onMaskChange?: (event: usePasswordMaskChangeEvent) => void;
}

/**
 * Defines valid state in usePassword.
 */
export interface usePasswordState {
    /**
     * Current password value.
     */
    value: string | null | undefined;
    /**
     * Whether the password is masked.
     */
    mask: boolean;
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
    /**
     * Toggle the mask state of the password.
     */
    toggleMask: () => void;
}

/**
 * Instance of usePassword headless.
 */
export type usePasswordInstance = HeadlessInstance<usePasswordProps, usePasswordState, usePasswordExposes>;
