/**
 *
 * ColorPickerSwatch component is a part of the ColorPicker component.
 *
 * [Live Demo](https://www.primereact.org/colorpicker/)
 *
 * @module colorpickerswatch
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { ColorPickerInstance } from './ColorPicker.types';

/**
 * Defines passthrough(pt) options type in ColorPickerSwatch component.
 */
export type ColorPickerSwatchPassThroughType<E> = PassThroughType<ColorPickerSwatchInstance, E>;

/**
 * Defines passthrough(pt) options of ColorPickerSwatch component.
 */
export interface ColorPickerSwatchPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: ColorPickerSwatchPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in ColorPickerSwatch component.
 */
export interface ColorPickerSwatchProps extends BaseComponentProps<ColorPickerSwatchInstance, unknown, ColorPickerSwatchPassThrough> {}

/**
 * Defines valid state in ColorPickerSwatch component.
 */
export interface ColorPickerSwatchState {}

/**
 * Defines the methods and properties exposed by ColorPickerSwatch component
 */
export interface ColorPickerSwatchExposes {
    /**
     * The ColorPicker component instance.
     */
    colorpicker: ColorPickerInstance | undefined | null;
}

/**
 * Instance of ColorPickerSwatch component.
 */
export type ColorPickerSwatchInstance = ComponentInstance<ColorPickerSwatchProps, ColorPickerSwatchState, ColorPickerSwatchExposes>;
