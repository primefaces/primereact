/**
 *
 * Password displays strength indicator for password fields.
 *
 * [Live Demo](https://www.primereact.org/password/)
 *
 * @module password
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { usePasswordChangeEvent, usePasswordExposes, usePasswordProps, usePasswordState } from './usePassword.types';

/**
 * Defines passthrough(pt) options type in Password component.
 */
export type PasswordPassThroughType<E> = PassThroughType<PasswordInstance, E>;

/**
 * Defines passthrough(pt) options of Password component.
 */
export interface PasswordPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: PasswordPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the input's DOM element.
     */
    input?: PasswordPassThroughType<React.InputHTMLAttributes<HTMLInputElement>>;
    /**
     * Used to pass attributes to the portal's DOM element.
     */
    portal?: PasswordPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the panel's DOM element.
     */
    panel?: PasswordPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the strength's DOM element.
     */
    strength?: PasswordPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the meter's DOM element.
     */
    meter?: PasswordPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the clear icon's DOM element.
     */
    clearIcon?: PasswordPassThroughType<React.SVGAttributes<SVGElement>>;
}

/**
 * Event fired when the password's value state changes.
 * @extends usePasswordChangeEvent
 */
export interface PasswordChangeEvent extends usePasswordChangeEvent<React.ChangeEvent<HTMLInputElement>> {
    /**
     * The new password value.
     */
    value: string | null;
}

/**
 * Defines valid properties in Password component.
 */
export interface PasswordProps extends BaseComponentProps<PasswordInstance, Omit<usePasswordProps, 'onValueChange'>, PasswordPassThrough> {
    /**
     * Callback fired when the password value changes.
     * @param event The event that triggered the change.
     * @param event.originalEvent The original event that triggered the change.
     * @param event.value The value of the password input.
     * @returns void
     */
    onValueChange?: (event: PasswordChangeEvent) => void;
}

/**
 * Defines valid state in Password component.
 * @extends usePasswordState
 */
export interface PasswordState extends usePasswordState {}

/**
 * Defines the methods and properties exposed by Password component.
 * @extends usePasswordExposes
 */
export interface PasswordExposes extends usePasswordExposes {}

/**
 * Defines the CSS class names used in the Password component.
 */
export const PasswordClassNames = {
    /**
     * Class name of the root element
     */
    root: 'p-password',
    /**
     * Class name of the input element
     */
    input: 'p-password-input',
    /**
     * Class name of the strength element
     */
    strength: 'p-password-strength',
    /**
     * Class name of the meter element
     */
    meter: 'p-password-meter',
    /**
     * Class name of the panel element
     */
    panel: 'p-password-overlay',
    /**
     * Class name of the clear icon element
     */
    clearIcon: 'p-password-clear-icon'
} as const;

/**
 * Type representing the CSS class names used in the Password component.
 */
export type PasswordClassNamesType = (typeof PasswordClassNames)[keyof typeof PasswordClassNames];

/**
 * Instance of Password component.
 */
export type PasswordInstance = ComponentInstance<PasswordProps, PasswordState, PasswordExposes>;
