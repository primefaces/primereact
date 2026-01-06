/**
 *
 * RadioButton is an extension to standard radio button element with theming.
 *
 * [Live Demo](https://www.primereact.org/radiobutton/)
 *
 * @module radiobutton
 * @group components
 *
 */

/**
 * Defines the CSS class names used in the RadioButton component.
 */
export const RadioButtonClassNames = {
    /**
     * Class name of the root element
     */
    root: 'p-radiobutton',
    /**
     * Class name of the box element
     */
    box: 'p-radiobutton-box',
    /**
     * Class name of the input element
     */
    input: 'p-radiobutton-input',
    /**
     * Class name of the icon element
     */
    icon: 'p-radiobutton-icon'
} as const;

/**
 * Type representing the CSS class names used in the RadioButton component.
 */
export type RadioButtonClassNamesType = (typeof RadioButtonClassNames)[keyof typeof RadioButtonClassNames];
