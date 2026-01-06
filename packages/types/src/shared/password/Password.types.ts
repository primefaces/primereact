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
