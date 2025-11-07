/**
 *
 * PasswordStrength is a component that displays password strength information.
 *
 * [Live Demo](https://www.primereact.org/password/)
 *
 * @module passwordstrength
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { PasswordInstance } from './Password.types';

/**
 * Defines passthrough(pt) options type in PasswordStrength component.
 */
export type PasswordStrengthPassThroughType<E> = PassThroughType<PasswordStrengthInstance, E>;

/**
 * Defines passthrough(pt) options of PasswordStrength component.
 */
export interface PasswordStrengthPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: PasswordStrengthPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in PasswordStrength component.
 */
export interface PasswordStrengthProps extends BaseComponentProps<PasswordStrengthInstance, unknown, PasswordStrengthPassThrough> {}

/**
 * Defines valid state in PasswordStrength component.
 */
export interface PasswordStrengthState {}

/**
 * Defines the methods and properties exposed by PasswordStrength component.
 */
export interface PasswordStrengthExposes {
    /**
     * Instance of the Password component.
     */
    password: PasswordInstance | undefined | null;
}

/**
 * Instance of PasswordStrength component.
 */
export type PasswordStrengthInstance = ComponentInstance<PasswordStrengthProps, PasswordStrengthState, PasswordStrengthExposes>;
