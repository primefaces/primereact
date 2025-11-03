/**
 *
 * ColorPickerEyeDropper component is a part of the ColorPicker component.
 *
 * [Live Demo](https://www.primereact.org/colorpicker/)
 *
 * @module colorpickereyedropper
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { ColorPickerInstance } from './ColorPicker.types';

/**
 * Defines passthrough(pt) options type in ColorPickerEyeDropper component.
 */
export type ColorPickerEyeDropperPassThroughType<E> = PassThroughType<ColorPickerEyeDropperInstance, E>;

/**
 * Defines passthrough(pt) options of ColorPickerEyeDropper component.
 */
export interface ColorPickerEyeDropperPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: ColorPickerEyeDropperPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in ColorPickerEyeDropper component.
 */
export interface ColorPickerEyeDropperProps extends BaseComponentProps<ColorPickerEyeDropperInstance, unknown, ColorPickerEyeDropperPassThrough> {}

/**
 * Defines valid state in ColorPickerEyeDropper component.
 */
export interface ColorPickerEyeDropperState {}

/**
 * Defines the methods and properties exposed by ColorPickerEyeDropper component
 */
export interface ColorPickerEyeDropperExposes {
    /**
     * The ColorPicker component instance.
     */
    colorpicker: ColorPickerInstance | undefined | null;
}

/**
 * Instance of ColorPickerEyeDropper component.
 */
export type ColorPickerEyeDropperInstance = ComponentInstance<ColorPickerEyeDropperProps, ColorPickerEyeDropperState, ColorPickerEyeDropperExposes>;
