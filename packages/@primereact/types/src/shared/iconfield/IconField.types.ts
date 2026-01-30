/**
 *
 * IconField wraps an input and an icon.
 *
 * [Live Demo](https://www.primereact.org/iconfield/)
 *
 * @module iconfield
 * @group components
 *
 */

/**
 * Defines the CSS class names used in the IconField component.
 */
export const IconFieldClassNames = {
    /**
     * Class name of the root element
     */
    root: 'p-iconfield'
} as const;

/**
 * Type representing the CSS class names used in the IconField component.
 */
export type IconFieldClassNamesType = (typeof IconFieldClassNames)[keyof typeof IconFieldClassNames];
