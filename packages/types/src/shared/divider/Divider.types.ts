/**
 *
 * Divider is used to separate contents.
 *
 * [Live Demo](https://www.primereact.org/divider/)
 *
 * @module divider
 * @group components
 *
 */

/**
 * Defines the CSS class names used in the Divider component.
 */
export const DividerClassNames = {
    /**
     * Class name of the root element
     */
    root: 'p-divider',
    /**
     * Class name of the content element
     */
    content: 'p-divider-content'
} as const;

/**
 * Type representing the CSS class names used in the Divider component.
 */
export type DividerClassNamesType = (typeof DividerClassNames)[keyof typeof DividerClassNames];
