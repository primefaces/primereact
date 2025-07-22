/**
 *
 * The useSlider manages the state and functionality of a slider component.
 *
 * [Live Demo](https://www.primereact.org/slider/)
 *
 * @module useslider
 * @group headless
 *
 */
import type { HeadlessInstance } from '@primereact/types/core';

/**
 * Event fired when the Slider's value changes.
 */
export interface useSliderChangeEvent<E = React.SyntheticEvent> {
    /**
     * The original event that triggered the change.
     */
    originalEvent: E;
    /**
     * The pressed state of the ToggleButton.
     */
    value: number | number[] | undefined;
}

/**
 * Defines valid properties in useSlider.
 */
export interface useSliderProps {
    /**
     * Value of the component.
     */
    value?: number | number[] | undefined;
    /**
     * The default value for the input when not controlled by `value`.
     */
    defaultValue?: number | number[] | undefined;
    /**
     * Mininum boundary value.
     * @default 0
     */
    min?: number | undefined;
    /**
     * Maximum boundary value.
     * @default 100
     */
    max?: number | undefined;
    /**
     * Orientation of the slider.
     * @default horizontal
     */
    orientation?: 'horizontal' | 'vertical' | undefined;
    /**
     * Step factor to increment/decrement the value.
     * @default 1
     */
    step?: number | undefined;
    /**
     * Callback fired when the ToggleButton's pressed state changes.
     * @param event The event that triggered the change.
     * @param event.originalEvent The original event that triggered the change.
     * @param event.value The new value of the slider.
     * @returns void
     */
    onValueChange?: (event: useSliderChangeEvent) => void;
}

/**
 * Defines valid state in useSlider.
 */
export interface useSliderState {
    /**
     * Value of the component.
     */
    value?: number | number[] | undefined;
}

/**
 * Defines the methods and properties exposed by useSlider.
 */
export interface useSliderExposes {
    /**
     * The state of the useSlider.
     */
    state: useSliderState;
    /**
     * Registers a thumb and returns its index.
     */
    registerThumb: () => number;
    /**
     * Counter for tracking number of thumbs.
     */
    thumbCounter: React.MutableRefObject<number>;
    /**
     * Determines if the slider is in range mode.
     */
    range: () => boolean;
    /**
     * Handler for touch start events.
     */
    onTouchStart: (event: React.TouchEvent<HTMLElement>, index: number) => void;
    /**
     * Handler for drag events.
     */
    onDrag: (event: React.MouseEvent | React.TouchEvent) => void;
    /**
     * Handler for drag end events.
     */
    onDragEnd: () => void;
    /**
     * Handler for mouse down events.
     */
    onMouseDown: (event: React.MouseEvent<HTMLElement>, index: number) => void;
    /**
     * Handler for key down events.
     */
    onKeyDown: (event: React.KeyboardEvent, index: number) => void;
    /**
     * Returns the style object for the range.
     */
    rangeStyle: () => React.CSSProperties;
    /**
     * Returns the style object for the handle thumb.
     */
    handleThumbStyle: () => React.CSSProperties;
    /**
     * Returns the style object for the range start handle.
     */
    rangeStartHandleStyle: () => React.CSSProperties;
    /**
     * Returns the style object for the range end handle.
     */
    rangeEndHandleStyle: () => React.CSSProperties;
}

/**
 * Instance of useSlider headless.
 */
export type useSliderInstance = HeadlessInstance<useSliderProps, useSliderState, useSliderExposes>;
