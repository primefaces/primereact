/**
 *
 * Tag component is used to categorize content.
 *
 * [Live Demo](https://www.primereact.org/tag/)
 *
 * @module tag
 * @group components
 *
 */

/**
 * Defines the CSS class names used in the Tag component.
 */
export const TagClassNames = {
    /**
     * Class name of the root element
     */
    root: 'p-tag',
    /**
     * Class name of the icon element
     */
    icon: 'p-tag-icon',
    /**
     * Class name of the label element
     */
    label: 'p-tag-label'
} as const;

/**
 * Type representing the CSS class names used in the Tag component.
 */
export type TagClassNamesType = (typeof TagClassNames)[keyof typeof TagClassNames];
