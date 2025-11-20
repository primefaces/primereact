/**
 *
 * ColorPickerSlider component is a part of the ColorPicker component.
 *
 * [Live Demo](https://www.primereact.org/colorpicker/)
 *
 * @module colorpickerslider
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { ColorPickerInstance } from './ColorPicker.types';
import type { useColorPickerSliderExposes, useColorPickerSliderProps, useColorPickerSliderState } from './useColorPickerSlider.types';

/**
 * Defines passthrough(pt) options type in ColorPickerSlider component.
 */
export type ColorPickerSliderPassThroughType<E> = PassThroughType<ColorPickerSliderInstance, E>;

/**
 * Defines passthrough(pt) options of ColorPickerSlider component.
 */
export interface ColorPickerSliderPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: ColorPickerSliderPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in ColorPickerSlider component.
 */
export interface ColorPickerSliderProps extends BaseComponentProps<ColorPickerSliderInstance, useColorPickerSliderProps, ColorPickerSliderPassThrough> {}

/**
 * Defines valid state in ColorPickerSlider component.
 */
export interface ColorPickerSliderState extends useColorPickerSliderState {}

/**
 * Defines the methods and properties exposed by ColorPickerSlider component.
 */
export interface ColorPickerSliderExposes extends useColorPickerSliderExposes {
    /**
     * The ColorPicker component instance.
     */
    colorpicker: ColorPickerInstance | undefined | null;
}

/**
 * Instance of ColorPickerSlider component.
 */
export type ColorPickerSliderInstance = ComponentInstance<ColorPickerSliderProps, ColorPickerSliderState, ColorPickerSliderExposes>;
