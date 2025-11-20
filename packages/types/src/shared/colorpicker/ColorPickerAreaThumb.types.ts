/**
 *
 * ColorPickerAreaThumb component is a part of the ColorPicker component.
 *
 * [Live Demo](https://www.primereact.org/colorpicker/)
 *
 * @module colorpickerareathumb
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { ColorPickerInstance } from './ColorPicker.types';

/**
 * Defines passthrough(pt) options type in ColorPickerAreaThumb component.
 */
export type ColorPickerAreaThumbPassThroughType<E> = PassThroughType<ColorPickerAreaThumbInstance, E>;

/**
 * Defines passthrough(pt) options of ColorPickerAreaThumb component.
 */
export interface ColorPickerAreaThumbPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: ColorPickerAreaThumbPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in ColorPickerAreaThumb component.
 */
export interface ColorPickerAreaThumbProps extends BaseComponentProps<ColorPickerAreaThumbInstance, unknown, ColorPickerAreaThumbPassThrough> {}

/**
 * Defines valid state in ColorPickerAreaThumb component.
 */
export interface ColorPickerAreaThumbState {}

/**
 * Defines the methods and properties exposed by ColorPickerAreaThumb component.
 */
export interface ColorPickerAreaThumbExposes {
    /**
     * The ColorPickerArea component instance.
     */
    colorpicker: ColorPickerInstance | undefined | null;
}

/**
 * Instance of ColorPickerAreaThumb component.
 */
export type ColorPickerAreaThumbInstance = ComponentInstance<ColorPickerAreaThumbProps, ColorPickerAreaThumbState, ColorPickerAreaThumbExposes>;
