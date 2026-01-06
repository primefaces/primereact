/**
 *
 * Badge is a small status indicator for another element.
 *
 * [Live Demo](https://www.primereact.org/badge/)
 *
 * @module badge
 * @group components
 *
 */

/**
 * Defines the CSS class names used in the Badge component.
 */
export const BadgeClassNames = {
    /**
     * Class name of the root element
     */
    root: 'p-badge'
} as const;

/**
 * Type representing the CSS class names used in the Badge component.
 */
export type BadgeClassNamesType = (typeof BadgeClassNames)[keyof typeof BadgeClassNames];
