/**
 *
 * The useColorPicker manages the state and functionality of a color picker component.
 *
 * [Live Demo](https://www.primereact.org/colorpicker/)
 *
 * @module useColorPicker
 * @group headless
 *
 */
import type { HeadlessInstance } from '@primereact/types/core';
import type { Color2DAxes, ColorChannelRange, ColorInputChannel, ColorInstance, ColorSliderChannel, ColorSpace } from '@primereact/types/shared/colorpicker';
import type { useSliderChangeEvent } from '@primereact/types/shared/slider';
import * as React from 'react';

/**
 * Event fired when the color picker's color is changed.
 */
export interface useColorPickerChangeEvent<E = React.SyntheticEvent> {
    /**
     * The original event that triggered the change.
     */
    originalEvent: E;
    /**
     * The color of the color picker.
     */
    color: string;
    /**
     * The value of the color picker.
     */
    value: ColorInstance;
}

/**
 * Defines valid properties in useColorPicker.
 */
export interface useColorPickerProps {
    /**
     * The value of the color picker.
     */
    value?: ColorInstance;
    /**
     * The default value of the color picker.
     */
    defaultValue?: ColorInstance;
    /**
     * The format of the color picker.
     */
    format?: ColorSpace;
    /**
     * Whether the color picker is disabled.
     */
    disabled?: boolean;
    /**
     * Callback fired when the color picker's value is changed.
     */
    onValueChange?: (event: useColorPickerChangeEvent) => void;
    /**
     * Callback fired when the pointer interaction ends.
     */
    onValueChangeEnd?: (event: useColorPickerChangeEvent) => void;
}

/**
 * Defines valid state in useColorPicker.
 */
export interface useColorPickerState {
    /**
     * The color of the color picker.
     */
    value: ColorInstance;
    /**
     * Whether the color picker area is dragging.
     */
    isAreaDragging: boolean;
}

/**
 * Defines the methods and properties exposed by useColorPicker.
 */
export interface useColorPickerExposes {
    /**
     * The state of the useColorPicker.
     */
    state: useColorPickerState;
    /**
     * The area value of the color picker.
     */
    areaValue: ColorInstance;
    /**
     * The channels of the area of the color picker.
     */
    areaChannels: Color2DAxes;
    /**
     * Sets the value of the color picker.
     */
    setValue: (value: unknown) => void;
    /**
     * Handles the area pointer down event.
     */
    handleAreaPointerDown: (event: PointerEvent) => void;
    /**
     * Handles the area pointer move event.
     */
    handleAreaPointerMove: (event: PointerEvent) => void;
    /**
     * Handles the area pointer up event.
     */
    handleAreaPointerUp: (event: PointerEvent) => void;
    /**
     * Handles the area blur event.
     */
    handleAreaBlur: (event: React.FocusEvent<HTMLElement>) => void;
    /**
     * Handles the area key down event.
     */
    handleAreaKeyDown: (event: React.KeyboardEvent<HTMLElement>) => void;
    /**
     * The styles of the area of the color picker.
     */
    areaStyles: React.CSSProperties;
    /**
     * The styles of the swatch of the color picker.
     */
    swatchStyles: React.CSSProperties;
    /**
     * Opens the eye dropper.
     */
    openEyeDropper: () => void;
    /**
     * Syncs the channel inputs.
     */
    syncChannelInputs: (color?: ColorInstance) => void;
    /**
     * Registers an input element.
     */
    registerInputEl: (el: { elementRef: React.RefObject<HTMLInputElement> }) => void;
    /**
     * Provides input props for a color channel.
     */
    getInputProps: (options?: { channel?: ColorInputChannel; disabled?: boolean }) => {
        type: 'text' | 'number';
        channelRange: ColorChannelRange | undefined;
        channelValue: string;
        handleBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
        handleKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    };
    /**
     * Provides slider props and styles for a color channel.
     */
    getSliderProps: (options?: { channel?: ColorSliderChannel; orientation?: 'horizontal' | 'vertical'; disabled?: boolean }) => {
        sliderStyle: React.CSSProperties;
        channelValue: number;
        channelRange: ColorChannelRange;
        value: number;
        min: number;
        max: number;
        step: number;
        disabled?: boolean | undefined;
        onValueChange: (event: useSliderChangeEvent) => void;
        onValueChangeEnd: (event: useSliderChangeEvent) => void;
    };
}

/**
 * Instance of useColorPicker headless.
 */
export type useColorPickerInstance = HeadlessInstance<useColorPickerProps, useColorPickerState, useColorPickerExposes>;
