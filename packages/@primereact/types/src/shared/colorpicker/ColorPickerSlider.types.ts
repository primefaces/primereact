/**
 *
 * ColorPickerSlider component is a part of the ColorPicker component.
 *
 * [Live Demo](https://www.primereact.org/colorpicker/)
 *
 * @module colorpickerslider
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { ColorPickerRootInstance } from './ColorPickerRoot.types';
import type { ColorSliderChannel } from './colorManager.types';

/**
 * Defines passthrough(pt) options type in ColorPickerSlider component.
 */
export type ColorPickerSliderPassThroughType<E> = PassThroughType<ColorPickerSliderInstance, E>;

/**
 * Defines passthrough(pt) options of ColorPickerSlider component.
 */
export interface ColorPickerSliderPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: ColorPickerSliderPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in ColorPickerSlider component.
 */
export interface ColorPickerSliderComponentProps {
    /**
     * The channel of the slider.
     */
    channel?: ColorSliderChannel;
    /**
     * The orientation of the slider.
     */
    orientation?: 'horizontal' | 'vertical';
    /**
     * Whether the slider is disabled.
     */
    disabled?: boolean;
}

/**
 * Defines valid properties in ColorPickerSlider component.
 */
export interface ColorPickerSliderProps extends BaseComponentProps<ColorPickerSliderInstance, ColorPickerSliderComponentProps, ColorPickerSliderPassThrough> {}

/**
 * Defines valid state in ColorPickerSlider component.
 */
export interface ColorPickerSliderState {}

/**
 * Defines the methods and properties exposed by ColorPickerSlider component.
 */
export interface ColorPickerSliderExposes {
    /**
     * The ColorPicker component instance.
     */
    colorpicker: ColorPickerRootInstance | undefined | null;
}

/**
 * Instance of ColorPickerSlider component.
 */
export type ColorPickerSliderInstance = ComponentInstance<ColorPickerSliderProps, ColorPickerSliderState, ColorPickerSliderExposes>;
