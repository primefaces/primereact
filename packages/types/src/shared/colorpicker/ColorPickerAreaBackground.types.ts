/**
 *
 * ColorPickerAreaBackground component is a part of the ColorPicker component.
 *
 * [Live Demo](https://www.primereact.org/colorpicker/)
 *
 * @module colorpickerareabackground
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { ColorPickerInstance } from './ColorPicker.types';

/**
 * Defines passthrough(pt) options type in ColorPickerAreaBackground component.
 */
export type ColorPickerAreaBackgroundPassThroughType<E> = PassThroughType<ColorPickerAreaBackgroundInstance, E>;

/**
 * Defines passthrough(pt) options of ColorPickerAreaBackground component.
 */
export interface ColorPickerAreaBackgroundPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: ColorPickerAreaBackgroundPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in ColorPickerAreaBackground component.
 */
export interface ColorPickerAreaBackgroundProps extends BaseComponentProps<ColorPickerAreaBackgroundInstance, unknown, ColorPickerAreaBackgroundPassThrough> {}

/**
 * Defines valid state in ColorPickerAreaBackground component.
 */
export interface ColorPickerAreaBackgroundState {}

/**
 * Defines the methods and properties exposed by ColorPickerAreaBackground component.
 */
export interface ColorPickerAreaBackgroundExposes {
    /**
     * The ColorPickerArea component instance.
     */
    colorpicker: ColorPickerInstance | undefined | null;
}

/**
 * Instance of ColorPickerAreaBackground component.
 */
export type ColorPickerAreaBackgroundInstance = ComponentInstance<ColorPickerAreaBackgroundProps, ColorPickerAreaBackgroundState, ColorPickerAreaBackgroundExposes>;
