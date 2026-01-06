/**
 *
 * Password displays strength indicator for password fields.
 *
 * [Live Demo](https://www.primereact.org/password/)
 *
 * @module passwordroot
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { usePasswordChangeEvent, usePasswordExposes, usePasswordProps, usePasswordState } from './usePassword.types';

/**
 * Defines passthrough(pt) options type in Password component.
 */
export type PasswordRootPassThroughType<E> = PassThroughType<PasswordRootInstance, E>;

/**
 * Defines passthrough(pt) options of Password component.
 */
export interface PasswordRootPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: PasswordRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the input's DOM element.
     */
    pcInputText?: PasswordRootPassThroughType<React.InputHTMLAttributes<HTMLInputElement>>;
    /**
     * Used to pass attributes to the portal's DOM element.
     */
    portal?: PasswordRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the panel's DOM element.
     */
    panel?: PasswordRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the strength's DOM element.
     */
    strength?: PasswordRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the meter's DOM element.
     */
    meter?: PasswordRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the clear icon's DOM element.
     */
    clearIcon?: PasswordRootPassThroughType<React.SVGAttributes<SVGElement>>;
}

/**
 * Event fired when the password's value state changes.
 * @extends usePasswordChangeEvent
 */
export interface PasswordRootChangeEvent extends usePasswordChangeEvent<React.ChangeEvent<HTMLInputElement>> {
    /**
     * The new password value.
     */
    value: string | null;
}

/**
 * Defines valid properties in Password component.
 */
export interface PasswordRootProps extends BaseComponentProps<PasswordRootInstance, Omit<usePasswordProps, 'onValueChange'>, PasswordRootPassThrough> {
    /**
     * Callback fired when the password value changes.
     * @param event The event that triggered the change.
     * @param event.originalEvent The original event that triggered the change.
     * @param event.value The value of the password input.
     * @returns void
     */
    onValueChange?: (event: PasswordRootChangeEvent) => void;
}

/**
 * Defines valid state in Password component.
 * @extends usePasswordState
 */
export interface PasswordRootState extends usePasswordState {}

/**
 * Defines the methods and properties exposed by Password component.
 * @extends usePasswordExposes
 */
export interface PasswordRootExposes extends usePasswordExposes {}

/**
 * Instance of Password component.
 */
export type PasswordRootInstance = ComponentInstance<PasswordRootProps, PasswordRootState, PasswordRootExposes>;
