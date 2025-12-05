/**
 *
 * PasswordInput is a component that displays a input.
 *
 * [Live Demo](https://www.primereact.org/password/)
 *
 * @module passwordinput
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { PasswordInstance } from './Password.types';

/**
 * Defines passthrough(pt) options type in PasswordInputcomponent.
 */
export type PasswordInputPassThroughType<E> = PassThroughType<PasswordInputInstance, E>;

/**
 * Defines passthrough(pt) options of PasswordInputcomponent.
 */
export interface PasswordInputPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: PasswordInputPassThroughType<React.HTMLAttributes<HTMLInputElement>>;
}

/**
 * Defines valid properties in PasswordInputcomponent.
 */
export interface PasswordInputProps extends BaseComponentProps<PasswordInputInstance, unknown, PasswordInputPassThrough> {}

/**
 * Defines valid state in PasswordInputcomponent.
 */
export interface PasswordInputState {}

/**
 * Defines the methods and properties exposed by PasswordInputcomponent.
 */
export interface PasswordInputExposes {
    /**
     * Instance of the Password component.
     */
    password: PasswordInstance | undefined | null;
}

/**
 * Instance of PasswordInputcomponent.
 */
export type PasswordInputInstance = ComponentInstance<PasswordInputProps, PasswordInputState, PasswordInputExposes>;
