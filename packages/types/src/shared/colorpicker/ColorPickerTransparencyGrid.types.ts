/**
 *
 * ColorPickerTransparencyGrid component is a part of the ColorPicker component.
 *
 * [Live Demo](https://www.primereact.org/colorpicker/)
 *
 * @module colorpickertransparencygrid
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { ColorPickerInstance } from './ColorPicker.types';

/**
 * Defines passthrough(pt) options type in ColorPickerTransparencyGrid component.
 */
export type ColorPickerTransparencyGridPassThroughType<E> = PassThroughType<ColorPickerTransparencyGridInstance, E>;

/**
 * Defines passthrough(pt) options of ColorPickerTransparencyGrid component.
 */
export interface ColorPickerTransparencyGridPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: ColorPickerTransparencyGridPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in ColorPickerTransparencyGrid component.
 */
export interface ColorPickerTransparencyGridProps extends BaseComponentProps<ColorPickerTransparencyGridInstance, unknown, ColorPickerTransparencyGridPassThrough> {}

/**
 * Defines valid state in ColorPickerTransparencyGrid component.
 */
export interface ColorPickerTransparencyGridState {}

/**
 * Defines the methods and properties exposed by ColorPickerTransparencyGrid component
 */
export interface ColorPickerTransparencyGridExposes {
    /**
     * The ColorPicker component instance.
     */
    colorpicker: ColorPickerInstance | undefined | null;
}

/**
 * Instance of ColorPickerTransparencyGrid component.
 */
export type ColorPickerTransparencyGridInstance = ComponentInstance<ColorPickerTransparencyGridProps, ColorPickerTransparencyGridState, ColorPickerTransparencyGridExposes>;
