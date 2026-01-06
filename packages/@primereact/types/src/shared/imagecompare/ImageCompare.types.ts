/**
 *
 * ImageCompare component is used to compare two images side by side with a slider.
 *
 * [Live Demo](https://www.primereact.org/imagecompare/)
 *
 * @module imagecompare
 * @group components
 *
 */

/**
 * Defines the CSS class names used in the ImageCompare component.
 */
export const ImageCompareClassNames = {
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
 * Type representing the CSS class names used in the ImageCompare component.
 */
export type ImageCompareClassNamesType = (typeof ImageCompareClassNames)[keyof typeof ImageCompareClassNames];
