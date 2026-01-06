/**
 *
 * Checkbox is an extension to standard checkbox element with theming.
 *
 * [Live Demo](https://www.primereact.org/checkbox/)
 *
 * @module checkbox
 * @group components
 *
 */

/**
 * Defines the CSS class names used in the Checkbox component.
 */
export const CheckboxClassNames = {
    /**
     * Class name of the root element
     */
    root: 'p-checkbox',
    /**
     * Class name of the box element
     */
    box: 'p-checkbox-box',
    /**
     * Class name of the input element
     */
    input: 'p-checkbox-input',
    /**
     * Class name of the icon element
     */
    icon: 'p-checkbox-icon'
} as const;

/**
 * Type representing the CSS class names used in the Checkbox component.
 */
export type CheckboxClassNamesType = (typeof CheckboxClassNames)[keyof typeof CheckboxClassNames];
