/**
 *
 * ScrollArea is a cross browser, lightweight and themable alternative to native browser scrollbar.
 *
 * [Live Demo](https://www.primereact.org/scrollarea/)
 *
 * @module scrollarea
 * @group components
 *
 */

/**
 * Defines the CSS class names used in the ScrollArea component.
 */
export const ScrollAreaClassNames = {
    /**
     * Class name of the root element
     */
    root: 'p-scrollarea',
    /**
     * Class name of the viewport element
     */
    viewport: 'p-scrollpanel-content-container',
    /**
     * Class name of the content element
     */
    content: 'p-scrollpanel-content',
    /**
     * Class name of the thumb x element
     */
    thumbX: 'p-scrollpanel-bar-x',
    /**
     * Class name of the thumb y element
     */
    thumbY: 'p-scrollpanel-bar-y'
} as const;

/**
 * Type representing the CSS class names used in the ScrollArea component.
 */
export type ScrollAreaClassNamesType = (typeof ScrollAreaClassNames)[keyof typeof ScrollAreaClassNames];
