/**
 *
 * ColorPickerArea component is a part of the ColorPicker component.
 *
 * [Live Demo](https://www.primereact.org/colorpicker/)
 *
 * @module colorpickerarea
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { ColorPickerInstance } from './ColorPicker.types';

/**
 * Defines passthrough(pt) options type in ColorPickerArea component.
 */
export type ColorPickerAreaPassThroughType<E> = PassThroughType<ColorPickerAreaInstance, E>;

/**
 * Defines passthrough(pt) options of ColorPickerArea component.
 */
export interface ColorPickerAreaPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: ColorPickerAreaPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in ColorPickerArea component.
 */
export interface ColorPickerAreaProps extends BaseComponentProps<ColorPickerAreaInstance, unknown, ColorPickerAreaPassThrough> {}

/**
 * Defines valid state in ColorPickerArea component.
 */
export interface ColorPickerAreaState {}

/**
 * Defines the methods and properties exposed by ColorPickerArea component.
 */
export interface ColorPickerAreaExposes {
    /**
     * The ColorPicker component instance.
     */
    colorpicker: ColorPickerInstance | undefined | null;
}

/**
 * Instance of ColorPickerArea component.
 */
export type ColorPickerAreaInstance = ComponentInstance<ColorPickerAreaProps, ColorPickerAreaState, ColorPickerAreaExposes>;
