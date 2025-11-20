/**
 *
 * ColorPickerSliderThumb component is a part of the ColorPicker component.
 *
 * [Live Demo](https://www.primereact.org/colorpicker/)
 *
 * @module colorpickersliderthumb
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { ColorPickerInstance } from './ColorPicker.types';

/**
 * Defines passthrough(pt) options type in ColorPickerSliderThumb component.
 */
export type ColorPickerSliderThumbPassThroughType<E> = PassThroughType<ColorPickerSliderThumbInstance, E>;

/**
 * Defines passthrough(pt) options of ColorPickerSliderThumb component.
 */
export interface ColorPickerSliderThumbPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: ColorPickerSliderThumbPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in ColorPickerSliderThumb component.
 */
export interface ColorPickerSliderThumbProps extends BaseComponentProps<ColorPickerSliderThumbInstance, unknown, ColorPickerSliderThumbPassThrough> {}

/**
 * Defines valid state in ColorPickerSliderThumb component.
 */
export interface ColorPickerSliderThumbState {}

/**
 * Defines the methods and properties exposed by ColorPickerSliderThumb component
 */
export interface ColorPickerSliderThumbExposes {
    /**
     * The ColorPicker component instance.
     */
    colorpicker: ColorPickerInstance | undefined | null;
}

/**
 * Instance of ColorPickerSliderThumb component.
 */
export type ColorPickerSliderThumbInstance = ComponentInstance<ColorPickerSliderThumbProps, ColorPickerSliderThumbState, ColorPickerSliderThumbExposes>;
