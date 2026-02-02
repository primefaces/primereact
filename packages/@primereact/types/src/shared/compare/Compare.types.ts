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
     * Class name of the slider element
     */
    slider: 'p-imagecompare-slider'
} as const;

/**
 * Type representing the CSS class names used in the Compare component.
 */
export type CompareClassNamesType = (typeof CompareClassNames)[keyof typeof CompareClassNames];
