/**
 *
 * Slider is a component to provide input with a drag handle.
 *
 * [Live Demo](https://www.primereact.org/slider/)
 *
 * @module sliderroot
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { useSliderChangeEvent, useSliderExposes, useSliderProps, useSliderState } from './useSlider.types';

/**
 * Defines passthrough(pt) options type in Slider component.
 */
export type SliderRootPassThroughType<E> = PassThroughType<SliderRootInstance, E>;

/**
 * Defines passthrough(pt) options of Slider component.
 */
export interface SliderRootPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: SliderRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the range's DOM element.
     */
    range?: SliderRootPassThroughType<React.HTMLAttributes<HTMLSpanElement>>;
    /**
     * Used to pass attributes to the thumb's DOM element.
     */
    thumb?: SliderRootPassThroughType<React.HTMLAttributes<HTMLSpanElement>>;
}

/**
 * Event fired when the Slider's value changes.
 */
export interface SliderRootChangeEvent extends useSliderChangeEvent<React.SyntheticEvent> {
    /**
     * The pressed state of the ToggleButton.
     */
    value: number | number[] | undefined;
}

/**
 * Defines valid properties in Slider component.
 */
export interface SliderRootProps extends BaseComponentProps<SliderRootInstance, Omit<useSliderProps, 'onValueChange'>, SliderRootPassThrough> {
    /**
     * When present, it specifies that the element should be disabled.
     * @default false
     */
    disabled?: boolean | undefined;
    /**
     * Callback fired when the ToggleButton's pressed state changes.
     * @param event The event that triggered the change.
     * @param event.originalEvent The original event that triggered the change.
     * @param event.value The new value of the slider.
     * @returns void
     */
    onValueChange?: (event: SliderRootChangeEvent) => void;
}

/**
 * Defines valid state in Slider component.
 * @extends useSliderState
 */
export interface SliderRootState extends useSliderState {}

/**
 * Defines the methods and properties exposed by Slider component.
 * @extends useSliderExposes
 */
export interface SliderRootExposes extends useSliderExposes {}

/**
 * Instance of Slider component.
 */
export type SliderRootInstance = ComponentInstance<SliderRootProps, SliderRootState, SliderRootExposes>;
