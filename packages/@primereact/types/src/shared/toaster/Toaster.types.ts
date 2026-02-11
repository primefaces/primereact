/**
 *
 * Toaster component is used to display messages.
 *
 * [Live Demo](https://www.primereact.org/toast/)
 *
 * @module toaster
 * @group components
 *
 */

/**
 * Defines the CSS class names used in the Toaster component.
 */
export const ToasterClassNames = {
    /**
     * Class name of the root element
     */
    root: 'p-toast p-component',
    /**
     * Class name of the region element
     */
    region: 'p-toast-region'
} as const;

/**
 * Type representing the CSS class names used in the Toaster component.
 */
export type ToasterClassNamesType = (typeof ToasterClassNames)[keyof typeof ToasterClassNames];
