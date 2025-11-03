/**
 *
 * ColorPickerSliderTrack component is a part of the ColorPicker component.
 *
 * [Live Demo](https://www.primereact.org/colorpicker/)
 *
 * @module colorpickerslidertrack
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { ColorPickerInstance } from './ColorPicker.types';

/**
 * Defines passthrough(pt) options type in ColorPickerSliderTrack component.
 */
export type ColorPickerSliderTrackPassThroughType<E> = PassThroughType<ColorPickerSliderTrackInstance, E>;

/**
 * Defines passthrough(pt) options of ColorPickerSliderTrack component.
 */
export interface ColorPickerSliderTrackPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: ColorPickerSliderTrackPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in ColorPickerSliderTrack component.
 */
export interface ColorPickerSliderTrackProps extends BaseComponentProps<ColorPickerSliderTrackInstance, unknown, ColorPickerSliderTrackPassThrough> {}

/**
 * Defines valid state in ColorPickerSliderTrack component.
 */
export interface ColorPickerSliderTrackState {}

/**
 * Defines the methods and properties exposed by ColorPickerSliderTrack component
 */
export interface ColorPickerSliderTrackExposes {
    /**
     * The ColorPicker component instance.
     */
    colorpicker: ColorPickerInstance | undefined | null;
}

/**
 * Instance of ColorPickerSliderTrack component.
 */
export type ColorPickerSliderTrackInstance = ComponentInstance<ColorPickerSliderTrackProps, ColorPickerSliderTrackState, ColorPickerSliderTrackExposes>;
