/**
 *
 * InputOtpText is a component that displays a text button.
 *
 * [Live Demo](https://www.primereact.org/inputotp/)
 *
 * @module inputotptext
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { InputOtpInstance } from './InputOtp.types';

/**
 * Defines passthrough(pt) options type in InputOtpText component.
 */
export type InputOtpTextPassThroughType<E> = PassThroughType<InputOtpTextInstance, E>;

/**
 * Defines passthrough(pt) options of InputOtpText component.
 */
export interface InputOtpTextPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: InputOtpTextPassThroughType<React.HTMLAttributes<HTMLButtonElement>>;
}

/**
 * Defines valid properties in InputOtpText component.
 */
export interface InputOtpTextProps extends BaseComponentProps<InputOtpTextInstance, unknown, InputOtpTextPassThrough> {}

/**
 * Defines valid state in InputOtpText component.
 */
export interface InputOtpTextState {}

/**
 * Defines the methods and properties exposed by InputOtpText component.
 */
export interface InputOtpTextExposes {
    /**
     * Instance of the InputOtp component.
     */
    inputotp: InputOtpInstance | undefined | null;
}

/**
 * Instance of InputOtpText component.
 */
export type InputOtpTextInstance = ComponentInstance<InputOtpTextProps, InputOtpTextState, InputOtpTextExposes>;
