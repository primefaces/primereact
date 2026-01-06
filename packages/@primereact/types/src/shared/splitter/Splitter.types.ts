/**
 *
 * Splitter is utilized to separate and resize panels.
 *
 * [Live Demo](https://www.primereact.org/splitter/)
 *
 * @module splitter
 * @group components
 *
 */

/**
 * Defines the CSS class names used in the Splitter component.
 */
export const SplitterClassNames = {
    /**
     * Class name of the root element
     */
    root: 'p-splitter',
    /**
     * Class name of the panel element
     */
    panel: 'p-splitterpanel',
    /**
     * Class name of the gutter element
     */
    gutter: 'p-splitter-gutter',
    /**
     * Class name of the thumb element
     */
    thumb: 'p-splitter-gutter-handle'
} as const;

/**
 * Type representing the CSS class names used in the Splitter component.
 */
export type SplitterClassNamesType = (typeof SplitterClassNames)[keyof typeof SplitterClassNames];
