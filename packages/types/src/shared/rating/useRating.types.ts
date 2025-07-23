/**
 *
 * The useRating manages the state and functionality of a rating component.
 *
 * [Live Demo](https://www.primereact.org/rating/)
 *
 * @module useRating
 * @group headless
 *
 */
import type { HeadlessInstance } from '@primereact/types/core';

export interface useRatingChangeEvent {
    /**
     * The value of th  e rating.
     */
    value: number | undefined;
    /**
     * The original event.
     */
    originalEvent: Event | null;
}

/**
 * Defines valid properties in useRating.
 */
export interface useRatingProps {
    /**
     * Value of the rating.
     */
    modelValue?: number | undefined;
    /**
     * The default value for the input when not controlled by `modelValue`.
     */
    defaultValue?: number | undefined;
    /**
     * Number of stars.
     * @default 5
     */
    stars?: number | undefined;
    /**
     * When present, it specifies that the element should be disabled.
     * @default false
     */
    disabled?: boolean | undefined;
    /**
     * When present, it specifies that component is read-only.
     * @default false
     */
    readOnly?: boolean | undefined;
    /**
     * Callback function that is called when the value changes.
     */
    onChange?: (event: useRatingChangeEvent) => void;
}

/**
 * Defines valid state in useRating.
 */
export interface useRatingState {
    value: number | undefined;
    focusedOptionIndex: number | undefined;
    isFocusVisibleItem: boolean | undefined;
}

/**
 * Defines the methods and properties exposed by useRating.
 */
export interface useRatingExposes {
    /**
     * Current state of the rating.
     */
    state: useRatingState;
}

/**
 * Instance of useRating headless.
 */
export type useRatingInstance = HeadlessInstance<useRatingProps, useRatingState, useRatingExposes>;
