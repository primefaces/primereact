/**
 *
 * PasswordClearIcon component is a part of the Password component.
 *
 * [Live Demo](https://www.primereact.org/password/)
 *
 * @module passwordclearicon
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { PasswordInstance } from './Password.types';

/**
 * Defines passthrough(pt) options type in PasswordClearIcon component.
 */
export type PasswordClearIconPassThroughType<E> = PassThroughType<PasswordClearIconInstance, E>;

/**
 * Defines passthrough(pt) options of PasswordClearIcon component.
 */
export interface PasswordClearIconPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: PasswordClearIconPassThroughType<React.HTMLAttributes<HTMLSpanElement>>;
}

/**
 * Defines valid properties in PasswordClearIcon component.
 */
export interface PasswordClearIconProps extends BaseComponentProps<PasswordClearIconInstance, unknown, PasswordClearIconPassThrough> {}

/**
 * Defines valid state in PasswordClearIcon component.
 */
export interface PasswordClearIconState {}

/**
 * Defines the methods and properties exposed by PasswordClearIcon component.
 */
export interface PasswordClearIconExposes {
    /**
     * The Password component instance.
     */
    password: PasswordInstance | undefined | null;
}

/**
 * Instance of PasswordClearIcon component.
 */
export type PasswordClearIconInstance = ComponentInstance<PasswordClearIconProps, PasswordClearIconState, PasswordClearIconExposes>;
