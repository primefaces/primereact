/**
 * The useCompare manages the state and functionality of a compare component.
 *
 * [Live Demo](https://www.primereact.org/compare/)
 *
 * @module useCompare
 * @group headless
 *
 */
import type { HeadlessInstance } from '@primereact/types/core';
import type * as React from 'react';

/**
 * Event object for value change callback.
 */
export interface useCompareValueChangeEvent<E = React.SyntheticEvent> {
    /**
     * The new value.
     */
    value: number;
    /**
     * The original DOM event.
     */
    originalEvent: E;
}

/**
 * Defines valid properties in useCompare.
 */
export interface useCompareProps {
    /**
     * Current value in controlled mode.
     */
    value?: number;
    /**
     * Default value in uncontrolled mode.
     * @defaultValue 50
     */
    defaultValue?: number;
    /**
     * Callback fired when value changes.
     */
    onValueChange?: (event: useCompareValueChangeEvent) => void;
    /**
     * Minimum allowed value.
     * @defaultValue 0
     */
    min?: number;
    /**
     * Maximum allowed value.
     * @defaultValue 100
     */
    max?: number;
    /**
     * Step for rounding.
     * @defaultValue 1
     */
    step?: number;
    /**
     * Orientation of the slider.
     * @defaultValue vertical
     */
    orientation?: 'horizontal' | 'vertical';
    /**
     * Whether slider moves on hover.
     * @defaultValue false
     */
    slideOnHover?: boolean;
    /**
     * Input element id.
     */
    inputId?: string;
    /**
     * Input tab index.
     */
    tabIndex?: number;
    /**
     * Whether the component is disabled.
     * @defaultValue false
     */
    disabled?: boolean;
    /**
     * Whether the component is read-only.
     * @defaultValue false
     */
    readOnly?: boolean;
    /**
     * Whether input is required.
     */
    required?: boolean;
    /**
     * Defines a string value that labels an interactive element.
     */
    ariaLabel?: string;
    /**
     * Identifies the element (or elements) that labels the component.
     */
    ariaLabelledby?: string;
    /**
     * Callback fired on focus.
     */
    onFocus?: React.FocusEventHandler<HTMLInputElement>;
    /**
     * Callback fired on blur.
     */
    onBlur?: React.FocusEventHandler<HTMLInputElement>;
}

/**
 * Defines valid state in useCompare.
 */
export interface useCompareState {
    /**
     * Current value.
     */
    value: number;
}

/**
 * Defines the methods and properties exposed by useCompare.
 */
export interface useCompareExposes {
    /**
     * State object containing current slide value
     */
    state: useCompareState;
    /**
     * Get item clip style.
     */
    getItemStyle: (position: 'before' | 'after') => React.CSSProperties;
    /**
     * Root element ref setter.
     */
    setRootRef: (node: HTMLDivElement | null) => void;
    /**
     * Pointer handlers for thumb.
     */
    onThumbPointerDown: (event: React.PointerEvent<HTMLDivElement>) => void;
    /**
     * Pointer move handler for thumb.
     */
    onThumbPointerMove: (event: React.PointerEvent<HTMLDivElement>) => void;
    /**
     * Pointer up handler for thumb.
     */
    onThumbPointerUp: (event: React.PointerEvent<HTMLDivElement>) => void;
    /**
     * Pointer handlers for root.
     */
    onRootPointerDown: (event: React.PointerEvent<HTMLDivElement>) => void;
    /**
     * Pointer move handler for root.
     */
    onRootPointerMove: (event: React.PointerEvent<HTMLDivElement>) => void;
    /**
     * Pointer up handler for root.
     */
    onRootPointerUp: (event: React.PointerEvent<HTMLDivElement>) => void;
    /**
     * Input change handler.
     */
    onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * Instance of useCompare headless.
 */
export type useCompareInstance = HeadlessInstance<useCompareProps, useCompareState, useCompareExposes>;
