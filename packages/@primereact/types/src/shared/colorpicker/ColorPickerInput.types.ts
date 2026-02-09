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
import type { ColorPickerRootInstance } from './ColorPickerRoot.types';
import type { ColorInputChannel } from './colorManager.types';

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
export interface ColorPickerInputComponentProps {
    /**
     * The channel of the input.
     */
    channel?: ColorInputChannel;
}

/**
 * Defines valid properties in ColorPickerInput component.
 */
export interface ColorPickerInputProps extends BaseComponentProps<ColorPickerInputInstance, ColorPickerInputComponentProps, ColorPickerInputPassThrough> {}

/**
 * Defines valid state in ColorPickerInput component.
 */
export interface ColorPickerInputState {}

/**
 * Defines the methods and properties exposed by ColorPickerInput component
 */
export interface ColorPickerInputExposes {
    /**
     * The ColorPicker component instance.
     */
    colorpicker: ColorPickerRootInstance | undefined | null;
}

/**
 * Instance of ColorPickerInput component.
 */
export type ColorPickerInputInstance = ComponentInstance<ColorPickerInputProps, ColorPickerInputState, ColorPickerInputExposes>;
