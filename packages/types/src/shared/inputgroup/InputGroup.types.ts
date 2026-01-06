/**
 *
 * InputGroup displays text, icon, buttons and other content can be grouped next to an input.
 *
 * [Live Demo](https://www.primereact.org/inputgroup/)
 *
 * @module inputgroup
 * @group components
 *
 */

/**
 * Defines the CSS class names used in the InputGroup component.
 */
export const InputGroupClassNames = {
    /**
     * Class name of the root element
     */
    root: 'p-inputgroup'
} as const;

/**
 * Type representing the CSS class names used in the InputGroup component.
 */
export type InputGroupClassNamesType = (typeof InputGroupClassNames)[keyof typeof InputGroupClassNames];
