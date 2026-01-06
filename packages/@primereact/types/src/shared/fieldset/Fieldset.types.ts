/**
 *
 * Fieldset component is used to select a boolean value.
 *
 * [Live Demo](https://www.primereact.org/fieldset/)
 *
 * @module fieldset
 * @group components
 *
 */

/**
 * Defines the CSS class names used in the Fieldset component.
 */
export const FieldsetClassNames = {
    /**
     * Class name of the root element
     */
    root: 'p-fieldset',
    /**
     * Class name of the legend element
     */
    legend: 'p-fieldset-legend',
    /**
     * Class name of the content element
     */
    content: 'p-fieldset-content'
} as const;

/**
 * Type representing the CSS class names used in the Fieldset component.
 */
export type FieldsetClassNamesType = (typeof FieldsetClassNames)[keyof typeof FieldsetClassNames];
