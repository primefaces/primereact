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
     * Whether to allow half stars.
     * @default true
     */
    allowHalf?: boolean | undefined;
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
    onValueChange?: (event: useRatingChangeEvent) => void;
}

/**
 * Defines valid state in useRating.
 */
export interface useRatingState {
    /**
     * The value of the rating.
     */
    value: number | undefined;
    /**
     * The hover value of the rating.
     */
    hoverValue: number | undefined;
    /**
     * The focused option index of the rating.
     */
    focusedOptionIndex: number | undefined;
    /**
     * Whether the focus is visible item of the rating.
     */
    isFocusVisibleItem: boolean;
}

/**
 * Defines the methods and properties exposed by useRating.
 */
export interface useRatingExposes {
    /**
     * Current state of the rating.
     */
    state: useRatingState;
    /**
     * Get the state of a star.
     */
    getOptionState: (value: number) => string;
    /**
     * Handle input focus event.
     */
    onInputFocus: (event: React.FocusEvent<HTMLInputElement>) => void;
    /**
     * Handle input blur event.
     */
    onInputBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
    /**
     * Handle input change event.
     */
    onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    /**
     * Handle option click event.
     */
    onOptionClick: (event: React.MouseEvent<HTMLDivElement>, value: number) => void;
    /**
     * Handle option hover event.
     */
    onOptionHover: (event: React.PointerEvent<HTMLDivElement>, value: number) => void;
}

/**
 * Instance of useRating headless.
 */
export type useRatingInstance = HeadlessInstance<useRatingProps, useRatingState, useRatingExposes>;
