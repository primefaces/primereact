/**
 *
 * Inplace provides an easy to do editing and display at the same time where clicking the output displays the actual content.
 *
 * [Live Demo](https://www.primereact.org/inplace/)
 *
 * @module inplace
 * @group components
 *
 */

/**
 * Defines the CSS class names used in the Inplace component.
 */
export const InplaceClassNames = {
    /**
     * Class name of the root element
     */
    root: 'p-inplace',
    /**
     * Class name of the display element
     */
    display: 'p-inplace-display',
    /**
     * Class name of the content element
     */
    content: 'p-inplace-content'
} as const;

/**
 * Type representing the CSS class names used in the Inplace component.
 */
export type InplaceClassNamesType = (typeof InplaceClassNames)[keyof typeof InplaceClassNames];
