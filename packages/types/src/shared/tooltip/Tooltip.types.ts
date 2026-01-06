/**
 *
 * Tooltip is a popup that displays information when hovering or focusing on an element.
 *
 * [Live Demo](https://www.primereact.org/tooltip/)
 *
 * @module tooltip
 * @group components
 *
 */

/**
 * Defines the CSS class names used in the Toolbar component.
 */
export const TooltipClassNames = {
    /**
     * Class name of the root element
     */
    root: 'p-tooltip2',
    /**
     * Class name of the arrow element
     */
    arrow: 'p-tooltip2-arrow',
    /**
     * Class name of the content element
     */
    content: 'p-tooltip2-content'
} as const;

/**
 * Type representing the CSS class names used in the Toolbar component.
 */
export type TooltipClassNamesType = (typeof TooltipClassNames)[keyof typeof TooltipClassNames];
