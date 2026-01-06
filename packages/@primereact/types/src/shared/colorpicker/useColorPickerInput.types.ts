/**
 *
 * The useColorPickerInput manages the state and functionality of a color picker input component.
 *
 * [Live Demo](https://www.primereact.org/colorpicker/)
 *
 * @module useColorPickerInput
 * @group headless
 *
 */
import type { HeadlessInstance } from '@primereact/types/core';
import type { ColorChannelRange, ColorInputChannel } from '@primereact/types/shared/colorpicker';
import * as React from 'react';

/**
 * Defines valid properties in useColorPickerInput.
 */
export interface useColorPickerInputProps {
    /**
     * The channel of the input.
     */
    channel?: ColorInputChannel;
}

/**
 * Defines valid state in useColorPickerInput.
 */
export interface useColorPickerInputState {}

/**
 * Defines the methods and properties exposed by useColorPickerInput.
 */
export interface useColorPickerInputExposes {
    /**
     * The state of the useColorPickerInput.
     */
    state: useColorPickerInputState;
    /**
     * The value of the input.
     */
    channelValue: string;
    /**
     * The range of the input.
     */
    channelRange: ColorChannelRange | undefined;
    /**
     * The type of the input.
     */
    type: 'text' | 'number';
    /**
     * Handles the blur event.
     */
    handleBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
    /**
     * Handles the key down event.
     */
    handleKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

/**
 * Instance of useColorPickerInput headless.
 */
export type useColorPickerInputInstance = HeadlessInstance<useColorPickerInputProps, useColorPickerInputState, useColorPickerInputExposes>;
