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
 * Defines a password strength level configuration.
 */
export interface PasswordStrengthLevel {
    /**
     * Unique identifier for the level.
     */
    id: number;
    /**
     * Display value/label for the level (e.g., "Weak", "Strong").
     */
    value: string;
    /**
     * Minimum number of character types required (lowercase, uppercase, number, symbol).
     */
    minDiversity: number;
    /**
     * Minimum password length required.
     */
    minLength: number;
}

/**
 * Result of password strength calculation.
 */
export interface PasswordStrengthResult {
    /**
     * Level identifier.
     */
    id: number;
    /**
     * Level label.
     */
    value: string;
    /**
     * Character types contained in the password.
     */
    contains: string[];
    /**
     * Password length.
     */
    length: number;
    /**
     * Strength percentage (0-100).
     */
    percentage: number;
}

/**
 * Event object for value change callback.
 */
export interface usePasswordChangeEvent<E = React.SyntheticEvent> {
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
     * Custom strength levels for password calculation.
     */
    strengthOptions?: PasswordStrengthLevel[] | undefined;
    /**
     * DOM element instance where the overlay panel should be mounted.
     * Valid values are any DOM Element and 'self'. The 'self' value is used to render a component where it is located.
     * @default body
     */
    appendTo?: 'body' | 'self' | HTMLElement | undefined;
    /**
     * Callback fired when the password value changes.
     */
    onValueChange?: (event: usePasswordChangeEvent) => void;
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
     * Current password strength result.
     */
    strength: PasswordStrengthResult | null;
    /**
     * Whether the overlay is visible.
     */
    overlayVisible: boolean;
    /**
     * Number of strength levels.
     */
    levelsCount: number;
    /**
     * Whether the clear icon should be shown.
     */
    showClearIcon: boolean;
    /**
     * Whether the password is unmasked (visible).
     */
    unmasked: boolean;
    /**
     * Whether the input is focused.
     */
    focused: boolean;
    /**
     * The current input type (password or text).
     */
    inputType: 'password' | 'text';
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
     * Input ref for accessing the input element.
     */
    inputRef: React.RefObject<{ elementRef: React.RefObject<HTMLInputElement> } | null>;
    /**
     * Overlay ref for accessing the overlay element.
     */
    overlayRef: React.RefObject<HTMLDivElement | null>;
    /**
     * Portal ref for accessing the portal container element.
     */
    portalRef: React.RefObject<{ containerRef: { current: { elementRef: React.RefObject<HTMLDivElement> } } } | null>;
    /**
     * Test a requirement against the current password.
     */
    testRequirement: (test: (value: string, strength: PasswordStrengthResult | null) => boolean) => boolean;
    /**
     * Calculate password strength for a given password and levels.
     */
    calculatePasswordStrength: (password: string, levels: PasswordStrengthLevel[]) => PasswordStrengthResult;
    /**
     * Handle input click event.
     */
    onInputClick: () => void;
    /**
     * Handle input change.
     */
    onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    /**
     * Handle input focus event.
     */
    onFocus: () => void;
    /**
     * Handle input blur event.
     */
    onBlur: () => void;
    /**
     * Callback when overlay enters (for positioning).
     */
    onOverlayEnter: () => void;
    /**
     * Change the visibility state of the overlay.
     */
    changeVisibleState: (isVisible: boolean) => void;
    /**
     * Handle clear button click.
     */
    onClearClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    /**
     * Toggle password mask visibility.
     */
    onMaskToggle: () => void;
}

/**
 * Instance of usePassword headless.
 */
export type usePasswordInstance = HeadlessInstance<usePasswordProps, usePasswordState, usePasswordExposes>;
