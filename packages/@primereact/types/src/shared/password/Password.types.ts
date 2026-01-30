/**
 *
 * Password is an enhanced input for password entry with strength metering, mask toggling, and controlled or uncontrolled usage.
 *
 * [Live Demo](https://www.primereact.org/password/)
 *
 * @module password
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { usePasswordExposes, usePasswordMaskChangeEvent, usePasswordProps, usePasswordState, usePasswordValueChangeEvent } from './usePassword.types';

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
}

/**
 * Event fired when the password's value state changes.
 * @extends usePasswordValueChangeEvent
 */
export interface PasswordValueChangeEvent extends usePasswordValueChangeEvent<React.ChangeEvent<HTMLInputElement>> {
    /**
     * The new password value.
     */
    value: string;
}

/**
 * Event fired when the password's mask state changes.
 * @extends usePasswordMaskChangeEvent
 */
export interface PasswordMaskChangeEvent extends usePasswordMaskChangeEvent {}

/**
 * Defines valid properties in Password component.
 */
export interface PasswordProps extends BaseComponentProps<PasswordInstance, Omit<usePasswordProps, 'onValueChange' | 'onMaskChange'>, PasswordPassThrough> {
    /**
     * Callback fired when the password value changes.
     * @param event The event that triggered the change.
     * @param event.originalEvent The original event that triggered the change.
     * @param event.value The value of the password input.
     * @returns void
     */
    onValueChange?: (event: PasswordValueChangeEvent) => void;
    /**
     * Callback fired when the mask state changes.
     * @param event The event that triggered the change.
     * @param event.value Whether the password is masked.
     * @returns void
     */
    onMaskChange?: (event: PasswordMaskChangeEvent) => void;
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
    root: 'p-password'
} as const;

/**
 * Type representing the CSS class names used in the Password component.
 */
export type PasswordClassNamesType = (typeof PasswordClassNames)[keyof typeof PasswordClassNames];

/**
 * Instance of Password component.
 */
export type PasswordInstance = ComponentInstance<PasswordProps, PasswordState, PasswordExposes>;
