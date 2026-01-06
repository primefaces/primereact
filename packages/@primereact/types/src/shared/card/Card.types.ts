/**
 *
 * Card is a flexible container component.
 *
 * [Live Demo](https://www.primereact.org/card/)
 *
 * @module card
 * @group components
 *
 */

/**
 * Defines the CSS class names used in the Card component.
 */
export const CardClassNames = {
    /**
     * Class name of the root element
     */
    root: 'p-card',
    /**
     * Class name of the header element
     */
    header: 'p-card-header',
    /**
     * Class name of the body element
     */
    body: 'p-card-body',
    /**
     * Class name of the caption element
     */
    caption: 'p-card-caption',
    /**
     * Class name of the title element
     */
    title: 'p-card-title',
    /**
     * Class name of the subtitle element
     */
    subtitle: 'p-card-subtitle',
    /**
     * Class name of the content element
     */
    content: 'p-card-content',
    /**
     * Class name of the footer element
     */
    footer: 'p-card-footer'
} as const;

/**
 * Type representing the CSS class names used in the Card component.
 */
export type CardClassNamesType = (typeof CardClassNames)[keyof typeof CardClassNames];
