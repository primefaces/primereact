/**
 *
 * The useColorPickerSlider manages the state and functionality of a color picker slider component.
 *
 * [Live Demo](https://www.primereact.org/colorpicker/)
 *
 * @module useColorPickerSlider
 * @group headless
 *
 */
import type { HeadlessInstance } from '@primereact/types/core';
import type { ColorChannel, ColorChannelRange } from '@primereact/types/shared/colorpicker';
import * as React from 'react';

/**
 * Defines valid properties in useColorPickerSlider.
 */
export interface useColorPickerSliderProps {
    /**
     * The channel of the slider.
     */
    channel?: ColorChannel;
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
 * Defines valid state in useColorPickerSlider.
 */
export interface useColorPickerSliderState {
    isSliderDragging: boolean;
}

/**
 * Defines the methods and properties exposed by useColorPickerSlider.
 */
export interface useColorPickerSliderExposes {
    /**
     * The state of the useColorPickerSlider        .
     */
    state: useColorPickerSliderState;
    /**
     * Handles the pointer down event.
     */
    handleSliderPointerDown: (event: PointerEvent) => void;
    /**
     * Handles the pointer move event.
     */
    handleSliderPointerMove: (event: PointerEvent) => void;
    /**
     * Handles the pointer up event.
     */
    handleSliderPointerUp: (event: PointerEvent) => void;
    /**
     * Handles the key down event.
     */
    handleSliderKeyDown: (event: React.KeyboardEvent<HTMLElement>) => void;
    /**
     * The style of the slider.
     */
    sliderStyle: React.CSSProperties;
    /**
     * The value of the channel.
     */
    channelValue: number;
    /**
     * The range of the channel.
     */
    channelRange: ColorChannelRange;
}

/**
 * Instance of useColorPickerSlider headless.
 */
export type useColorPickerSliderInstance = HeadlessInstance<useColorPickerSliderProps, useColorPickerSliderState, useColorPickerSliderExposes>;
