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
import type { useSliderProps } from '@primereact/types/shared/slider';
import type * as React from 'react';

/**
 * Event object for compare change callback.
 */
export interface useCompareChangeEvent<E = React.SyntheticEvent> {
    /**
     * The new value of the compare.
     */
    value: number | number[] | undefined;
    /**
     * The original DOM event.
     */
    originalEvent: E;
}

/**
 * Defines valid properties in useCompare.
 */
export interface useCompareProps extends Omit<useSliderProps, 'minStepsBetweenThumbs'> {
    /**
     * Whether slider moves on hover.
     * @defaultValue false
     */
    slideOnHover?: boolean;
}

/**
 * Defines valid state in useCompare.
 */
export interface useCompareState {
    /**
     * Current value.
     */
    value: number;
    /**
     * Whether the compare handle is being dragged.
     */
    isDragging?: boolean;
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
     * Get handle style.
     */
    getHandleStyle: () => React.CSSProperties;
    /**
     * Root element ref setter.
     */
    setRootRef: (node: HTMLDivElement | null) => void;
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
