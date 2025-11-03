/**
 *
 * ColorPickerSwatchBackground component is a part of the ColorPicker component.
 *
 * [Live Demo](https://www.primereact.org/colorpicker/)
 *
 * @module colorpickerswatchbackground
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { ColorPickerInstance } from './ColorPicker.types';

/**
 * Defines passthrough(pt) options type in ColorPickerSwatchBackground component.
 */
export type ColorPickerSwatchBackgroundPassThroughType<E> = PassThroughType<ColorPickerSwatchBackgroundInstance, E>;

/**
 * Defines passthrough(pt) options of ColorPickerSwatchBackground component.
 */
export interface ColorPickerSwatchBackgroundPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: ColorPickerSwatchBackgroundPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in ColorPickerSwatchBackground component.
 */
export interface ColorPickerSwatchBackgroundProps extends BaseComponentProps<ColorPickerSwatchBackgroundInstance, unknown, ColorPickerSwatchBackgroundPassThrough> {}

/**
 * Defines valid state in ColorPickerSwatchBackground component.
 */
export interface ColorPickerSwatchBackgroundState {}

/**
 * Defines the methods and properties exposed by ColorPickerSwatchBackground component
 */
export interface ColorPickerSwatchBackgroundExposes {
    /**
     * The ColorPicker component instance.
     */
    colorpicker: ColorPickerInstance | undefined | null;
}

/**
 * Instance of ColorPickerSwatchBackground component.
 */
export type ColorPickerSwatchBackgroundInstance = ComponentInstance<ColorPickerSwatchBackgroundProps, ColorPickerSwatchBackgroundState, ColorPickerSwatchBackgroundExposes>;
