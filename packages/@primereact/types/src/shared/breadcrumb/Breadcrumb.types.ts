/**
 *
 * Breadcrumb provides contextual information about page hierarchy.
 *
 * [Live Demo](https://www.primereact.org/breadcrumb/)
 *
 * @module breadcrumb
 * @group components
 *
 */

/**
 * Defines the CSS class names used in the Breadcrumb component.
 */
export const BreadcrumbClassNames = {
    /**
     * Class name of the root element
     */
    root: 'p-breadcrumb',
    /**
     * Class name of the list element
     */
    list: 'p-breadcrumb-list',
    /**
     * Class name of the item element
     */
    item: 'p-breadcrumb-item',
    /**
     * Class name of the separator element
     */
    separator: 'p-breadcrumb-separator',
    /**
     * Class name of the icon element
     */
    icon: 'p-breadcrumb-separator-icon'
} as const;

/**
 * Type representing the CSS class names used in the Breadcrumb component.
 */
export type BreadcrumbClassNamesType = (typeof BreadcrumbClassNames)[keyof typeof BreadcrumbClassNames];
