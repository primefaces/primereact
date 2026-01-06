/**
 *
 * Toolbar is a grouping component for buttons and other content.
 *
 * [Live Demo](https://www.primereact.org/toolbar/)
 *
 * @module toolbar
 * @group components
 *
 */

/**
 * Defines the CSS class names used in the Toolbar component.
 */
export const ToolbarClassNames = {
    /**
     * Class name of the root element
     */
    root: 'p-toolbar',
    /**
     * Class name of the start element
     */
    start: 'p-toolbar-start',
    /**
     * Class name of the center element
     */
    center: 'p-toolbar-center',
    /**
     * Class name of the end element
     */
    end: 'p-toolbar-end'
} as const;

/**
 * Type representing the CSS class names used in the Toolbar component.
 */
export type ToolbarClassNamesType = (typeof ToolbarClassNames)[keyof typeof ToolbarClassNames];
