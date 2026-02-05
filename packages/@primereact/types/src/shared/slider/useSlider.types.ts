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
import type * as React from 'react';

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
     * Minimum steps between thumbs.
     * @default 0
     */
    minStepsBetweenThumbs?: number | undefined;
    /**
     * Callback fired when the ToggleButton's pressed state changes.
     * @param event The event that triggered the change.
     * @param event.originalEvent The original event that triggered the change.
     * @param event.value The new value of the slider.
     * @returns void
     */
    onValueChange?: (event: useSliderChangeEvent) => void;
    /**
     * Callback fired when the pointer interaction ends.
     * @param event The event that triggered the change.
     * @param event.originalEvent The original event that triggered the change.
     * @param event.value The new value of the slider.
     * @returns void
     */
    onValueChangeEnd?: (event: useSliderChangeEvent) => void;
    /**
     * Whether the component is disabled.
     * @default false
     */
    disabled?: boolean | undefined;
    /**
     * Whether the component is read-only.
     * @default false
     */
    readOnly?: boolean | undefined;
}

/**
 * Defines valid state in useSlider.
 */
export interface useSliderState {
    /**
     * Value of the component.
     */
    value?: number | number[] | undefined;
    /**
     * Whether the slider is being dragged.
     */
    isDragging?: boolean;
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
     * Determines if the slider is in range mode.
     */
    range: () => boolean;
    /**
     * Returns the value for a specific thumb.
     */
    getThumbValue: (index: number) => number;
    /**
     * Returns the style object for the range element.
     */
    getRangeStyle: () => React.CSSProperties;
    /**
     * Returns the style object for a thumb.
     */
    getThumbStyle: (index: number) => React.CSSProperties;
    /**
     * Sets the root element ref.
     */
    setRootRef: (node: HTMLDivElement | null) => void;
    /**
     * Pointer handlers for the root element.
     */
    onTrackPointerDown: (event: React.PointerEvent<HTMLDivElement>) => void;
    /**
     * Pointer handlers for the root element.
     */
    onTrackPointerMove: (event: React.PointerEvent<HTMLDivElement>) => void;
    /**
     * Pointer handlers for the root element.
     */
    onTrackPointerUp: (event: React.PointerEvent<HTMLDivElement>) => void;
    /**
     * Pointer handlers for thumbs.
     */
    onThumbPointerDown: (event: React.PointerEvent<HTMLDivElement>, index: number) => void;
    /**
     * Input change handler for thumbs.
     */
    onInputChange: (event: React.ChangeEvent<HTMLInputElement>, index: number) => void;
    /**
     * Input focus handler for thumbs.
     */
    onInputFocus: (event: React.FocusEvent<HTMLInputElement>, index: number) => void;
    /**
     * Input blur handler for thumbs.
     */
    onInputBlur: (event: React.FocusEvent<HTMLInputElement>, index: number) => void;
}

/**
 * Instance of useSlider headless.
 */
export type useSliderInstance = HeadlessInstance<useSliderProps, useSliderState, useSliderExposes>;
