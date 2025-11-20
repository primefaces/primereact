/**
 *
 * ColorPickerInput component is a part of the ColorPicker component.
 *
 * [Live Demo](https://www.primereact.org/colorpicker/)
 *
 * @module colorpickerinput
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { ColorPickerInstance } from './ColorPicker.types';
import type { useColorPickerInputExposes, useColorPickerInputProps, useColorPickerInputState } from './useColorPickerInput.types';

/**
 * Defines passthrough(pt) options type in ColorPickerInput component.
 */
export type ColorPickerInputPassThroughType<E> = PassThroughType<ColorPickerInputInstance, E>;

/**
 * Defines passthrough(pt) options of ColorPickerInput component.
 */
export interface ColorPickerInputPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: ColorPickerInputPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in ColorPickerInput component.
 */
export interface ColorPickerInputProps extends BaseComponentProps<ColorPickerInputInstance, useColorPickerInputProps, ColorPickerInputPassThrough> {}

/**
 * Defines valid state in ColorPickerInput component.
 */
export interface ColorPickerInputState extends useColorPickerInputState {}

/**
 * Defines the methods and properties exposed by ColorPickerInput component
 */
export interface ColorPickerInputExposes extends useColorPickerInputExposes {
    /**
     * The ColorPicker component instance.
     */
    colorpicker: ColorPickerInstance | undefined | null;
}

/**
 * Instance of ColorPickerInput component.
 */
export type ColorPickerInputInstance = ComponentInstance<ColorPickerInputProps, ColorPickerInputState, ColorPickerInputExposes>;
