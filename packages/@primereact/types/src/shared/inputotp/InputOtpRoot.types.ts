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
export type InputOtpRootPassThroughType<E> = PassThroughType<InputOtpRootInstance, E>;

/**
 * Defines passthrough(pt) options of InputOtp component.
 */
export interface InputOtpRootPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: InputOtpRootPassThroughType<React.InputHTMLAttributes<HTMLInputElement>>;
    /**
     * Used to pass attributes to the input's DOM element.
     */
    pcInputText?: InputOtpRootPassThroughType<React.InputHTMLAttributes<HTMLInputElement>>;
}

/**
 * Defines valid properties in InputOtp component.
 */
export interface InputOtpRootProps extends BaseComponentProps<InputOtpRootInstance, useInputOtpProps, InputOtpRootPassThrough> {
    /**
     * Defines the size of the InputText.
     */
    size?: 'small' | 'large' | undefined;
    /**
     * Specifies the input variant of the component.
     */
    variant?: 'outlined' | 'filled' | undefined;
    /**
     * When present, it specifies that the element should be disabled.
     * @default false
     */
    disabled?: boolean | undefined;
}

/**
 * Defines valid state in InputOtp component.
 * @extends useInputOtpState
 */
export interface InputOtpRootState extends useInputOtpState {}

/**
 * Defines the methods and properties exposed by InputOtp component.
 * @extends useInputOtpExposes
 */
export interface InputOtpRootExposes extends useInputOtpExposes {}

/**
 * Instance of InputOtp component.
 */
export type InputOtpRootInstance = ComponentInstance<InputOtpRootProps, InputOtpRootState, InputOtpRootExposes>;
