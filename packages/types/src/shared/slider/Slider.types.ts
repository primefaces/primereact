/**
 *
 * Slider is a component to provide input with a drag handle.
 *
 * [Live Demo](https://www.primereact.org/slider/)
 *
 * @module slider
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { useSliderChangeEvent, useSliderExposes, useSliderProps, useSliderState } from './useSlider.types';

/**
 * Defines passthrough(pt) options type in Slider component.
 */
export type SliderPassThroughType<E> = PassThroughType<SliderInstance, E>;

/**
 * Defines passthrough(pt) options of Slider component.
 */
export interface SliderPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: SliderPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the range's DOM element.
     */
    range?: SliderPassThroughType<React.HTMLAttributes<HTMLSpanElement>>;
    /**
     * Used to pass attributes to the thumb's DOM element.
     */
    thumb?: SliderPassThroughType<React.HTMLAttributes<HTMLSpanElement>>;
}

/**
 * Event fired when the Slider's value changes.
 */
export interface SliderChangeEvent extends useSliderChangeEvent<React.SyntheticEvent> {
    /**
     * The pressed state of the ToggleButton.
     */
    value: number | number[] | undefined;
}

/**
 * Defines valid properties in Slider component.
 */
export interface SliderProps extends BaseComponentProps<SliderInstance, Omit<useSliderProps, 'onValueChange'>, SliderPassThrough> {
    /**
     * Callback fired when the ToggleButton's pressed state changes.
     * @param event The event that triggered the change.
     * @param event.originalEvent The original event that triggered the change.
     * @param event.value The new value of the slider.
     * @returns void
     */
    onValueChange?: (event: SliderChangeEvent) => void;
}

/**
 * Defines valid state in Slider component.
 * @extends useSliderState
 */
export interface SliderState extends useSliderState {}

/**
 * Defines the methods and properties exposed by Slider component.
 * @extends useSliderExposes
 */
export interface SliderExposes extends useSliderExposes {}

/**
 * Defines the CSS class names used in the Slider component.
 */
export const SliderClassNames = {
    /**
     * Class name of the root element
     */
    root: 'p-slider',
    /**
     * Class name of the range element
     */
    range: 'p-slider-range',
    /**
     * Class name of the thumb element
     */
    thumb: 'p-slider-handle'
} as const;

/**
 * Type representing the CSS class names used in the Slider component.
 */
export type SliderClassNamesType = (typeof SliderClassNames)[keyof typeof SliderClassNames];

/**
 * Instance of Slider component.
 */
export type SliderInstance = ComponentInstance<SliderProps, SliderState, SliderExposes>;
