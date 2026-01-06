/**
 *
 * Slider is a component to provide input with a drag handle.
 *
 * [Live Demo](https://www.primereact.org/slider/)
 *
 * @module slider
 * @group components
 *
 */

/**
 * Defines the CSS class names used in the Slider component.
 */
export const SliderClassNames = {
    /**
     * Class name of the root element
     */
    root: 'p-slider',
    /**
     * Class name of the range element
     */
    range: 'p-slider-range',
    /**
     * Class name of the thumb element
     */
    thumb: 'p-slider-handle'
} as const;

/**
 * Type representing the CSS class names used in the Slider component.
 */
export type SliderClassNamesType = (typeof SliderClassNames)[keyof typeof SliderClassNames];
