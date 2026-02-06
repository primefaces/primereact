/**
 *
 * Compare component is used to compare two images side by side with a slider.
 *
 * [Live Demo](https://www.primereact.org/compare/)
 *
 * @module compare
 * @group components
 *
 */

/**
 * Defines the CSS class names used in the Compare component.
 */
export const CompareClassNames = {
    /**
     * Class name of the root element
     */
    root: 'p-imagecompare',
    /**
     * Class name of the handle element
     */
    handle: 'p-imagecompare-handle',
    /**
     * Class name of the indicator element
     */
    indicator: 'p-imagecompare-indicator'
} as const;

/**
 * Type representing the CSS class names used in the Compare component.
 */
export type CompareClassNamesType = (typeof CompareClassNames)[keyof typeof CompareClassNames];
