/**
 *
 * InputOtp is used to enter one time passwords.
 *
 * [Live Demo](https://www.primereact.org/inputotp/)
 *
 * @module inputotp
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { useInputOtpExposes, useInputOtpProps, useInputOtpState } from './useInputOtp.types';

/**
 * Defines passthrough(pt) options type in InputOtp component.
 */
export type InputOtpPassThroughType<E> = PassThroughType<InputOtpInstance, E>;

/**
 * Defines passthrough(pt) options of InputOtp component.
 */
export interface InputOtpPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: InputOtpPassThroughType<React.InputHTMLAttributes<HTMLInputElement>>;
    /**
     * Used to pass attributes to the input's DOM element.
     */
    text?: InputOtpPassThroughType<React.InputHTMLAttributes<HTMLInputElement>>;
}

/**
 * Defines valid properties in InputOtp component.
 */
export interface InputOtpProps extends BaseComponentProps<InputOtpInstance, useInputOtpProps, InputOtpPassThrough> {}

/**
 * Defines valid state in InputOtp component.
 * @extends useInputOtpState
 */
export interface InputOtpState extends useInputOtpState {}

/**
 * Defines the methods and properties exposed by InputOtp component.
 * @extends useInputOtpExposes
 */
export interface InputOtpExposes extends useInputOtpExposes {}

/**
 * Defines the CSS class names used in the InputOtp component.
 */
export const InputOtpClassNames = {
    /**
     * Class name of the root element
     */
    root: 'p-inputotp',
    /**
     * Class name of the input element
     */
    text: 'p-inputotp-input'
} as const;

/**
 * Type representing the CSS class names used in the InputOtp component.
 */
export type InputOtpClassNamesType = (typeof InputOtpClassNames)[keyof typeof InputOtpClassNames];

/**
 * Instance of InputOtp component.
 */
export type InputOtpInstance = ComponentInstance<InputOtpProps, InputOtpState, InputOtpExposes>;
