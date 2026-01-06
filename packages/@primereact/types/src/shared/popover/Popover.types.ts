/**
 *
 * Popover component is used to display a popover to the user.
 *
 * [Live Demo](https://www.primereact.org/popover/)
 *
 * @module popover
 * @group components
 *
 */

/**
 * Defines the CSS class names used in the Popover component.
 */
export const PopoverClassNames = {
    /**
     * Class name of the root element
     */
    root: 'p-popover',
    /**
     * Class name of the content element
     */
    content: 'p-popover-content'
} as const;

/**
 * Type representing the CSS class names used in the Popover component.
 */
export type PopoverClassNamesType = (typeof PopoverClassNames)[keyof typeof PopoverClassNames];
