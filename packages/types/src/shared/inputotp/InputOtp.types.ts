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
