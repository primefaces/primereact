/**
 *
 * ColorPicker represents a color picker component.
 *
 * [Live Demo](https://www.primereact.org/colorpicker/)
 *
 * @module colorpicker
 * @group components
 *
 */

/**
 * Defines the CSS class names used in the ColorPicker component.
 */
export const ColorPickerClassNames = {
    /**
     * Class name of the area element
     */
    area: 'p-color-picker-area',
    /**
     * Class name of the area thumb element
     */
    areaThumb: 'p-color-picker-area-thumb',
    /**
     * Class name of the area background element
     */
    areaBackground: 'p-color-picker-area-background',
    /**
     * Class name of the slider element
     */
    slider: 'p-color-picker-slider',
    /**
     * Class name of the slider thumb element
     */
    sliderThumb: 'p-color-picker-slider-thumb',
    /**
     * Class name of the slider track element
     */
    sliderTrack: 'p-color-picker-slider-track',
    /**
     * Class name of the transparency grid element
     */
    transparencyGrid: 'p-color-picker-transparency-grid',
    /**
     * Class name of the swatch element
     */
    swatch: 'p-color-picker-swatch',
    /**
     * Class name of the swatch background element
     */
    swatchBackground: 'p-color-picker-swatch-background',
    /**
     * Class name of the input element
     */
    input: 'p-color-picker-input',
    /**
     * Class name of the eye dropper element
     */
    eyeDropper: 'p-color-picker-eye-dropper'
} as const;

/**
 * Type representing the CSS class names used in the ColorPicker component.
 */
export type ColorPickerClassNamesType = (typeof ColorPickerClassNames)[keyof typeof ColorPickerClassNames];
