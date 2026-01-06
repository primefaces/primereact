/**
 *
 * ColorPicker represents a color picker component.
 *
 * [Live Demo](https://www.primereact.org/colorpicker/)
 *
 * @module colorpickerroot
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { useColorPickerExposes, useColorPickerProps, useColorPickerState } from './useColorPicker.types';

/**
 * Defines passthrough(pt) options type in ColorPicker component.
 */
export type ColorPickerRootPassThroughType<E> = PassThroughType<ColorPickerRootInstance, E>;

/**
 * Defines passthrough(pt) options of ColorPicker component.
 */
export interface ColorPickerRootPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: ColorPickerRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in ColorPicker component.
 */
export interface ColorPickerRootProps extends BaseComponentProps<ColorPickerRootInstance, useColorPickerProps, ColorPickerRootPassThrough> {}

/**
 * Defines valid state in ColorPicker component.
 * @extends useColorPickerState
 */
export interface ColorPickerRootState extends useColorPickerState {}

/**
 * Defines the methods and properties exposed by ColorPicker component.
 * @extends useColorPickerExposes
 */
export interface ColorPickerRootExposes extends useColorPickerExposes {}

/**
 * Instance of ColorPicker component.
 */
export type ColorPickerRootInstance = ComponentInstance<ColorPickerRootProps, ColorPickerRootState, ColorPickerRootExposes>;
