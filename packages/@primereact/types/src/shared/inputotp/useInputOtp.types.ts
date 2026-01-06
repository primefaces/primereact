/**
 *
 * The useInputOtp manages the state and functionality of an input otp component.
 *
 * [Live Demo](https://www.primereact.org/inputotp/)
 *
 * @module useinputotp
 * @group headless
 *
 */
import type { HeadlessInstance } from '@primereact/types/core';
import * as React from 'react';

/**
 * Custom value change event.
 */
export interface useInputOtpValueChangeEvent {
    /**
     * Original browser event.
     */
    originalEvent: React.FormEvent<HTMLInputElement>;
    /**
     * New value.
     */
    value: string;
}

/**
 * Defines valid properties in useInputOtp.
 */
export interface useInputOtpProps {
    /**
     * Specifies whether a inputotp should be checked or not.
     * @default null
     */
    value?: string | null | undefined;
    /**
     * Specifies whether a inputotp should be checked or not.
     * @default null
     */
    defaultValue?: string | null | undefined;
    /**
     * When present, it specifies that only integers are allowed.
     * @default false
     */
    integerOnly?: boolean | undefined;
    /**
     * Mask pattern.
     * @default false
     */
    mask?: boolean | undefined;
    /**
     * Callback to invoke when value changes.
     * @param {useInputOtpValueChangeEvent} event - Custom value change event.
     */
    onValueChange?: (event: useInputOtpValueChangeEvent) => void;
}

/**
 * Defines valid state in useInputOtp.
 */
export interface useInputOtpState {
    /**
     * Value of the otp.
     */
    value: string | null | undefined;
    /**
     * Tokens of the otp.
     */
    tokens: string[];
}

/**
 * Defines the methods and properties exposed by useInputOtp.
 */
export interface useInputOtpExposes {
    /**
     * State of the input OTP.
     */
    state: useInputOtpState;
    /**
     * Register a text input.
     */
    registerText: () => number;
    /**
     * Returns the input type based on configuration.
     * @returns {string} The input type ('text' or 'password').
     */
    inputType: () => string;
    /**
     * Returns the input mode for mobile keyboards.
     * @returns {string} The input mode ('numeric' when integerOnly is true, 'text' otherwise).
     */
    inputMode: () => string;
    /**
     * Input event handler.
     * @param event - Form event
     * @param index - Input index
     * @returns void
     */
    onInput: (event: React.FormEvent<HTMLInputElement>, index: number) => void;
    /**
     * Click event handler.
     * @param event - Mouse event
     * @returns void
     */
    onClick: (event: React.MouseEvent<HTMLInputElement>) => void;
    /**
     * Key down event handler.
     * @param event - Keyboard event
     * @returns void
     */
    onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    /**
     * Paste event handler.
     * @param event - Clipboard event
     * @returns void
     */
    onPaste: (event: React.ClipboardEvent<HTMLInputElement>) => void;
}

/**
 * Instance of useInputOtp headless.
 */
export type useInputOtpInstance = HeadlessInstance<useInputOtpProps, useInputOtpState, useInputOtpExposes>;
