/**
 *
 * The useProgressBar manages the state and functionality of a progress bar component.
 *
 * [Live Demo](https://www.primereact.org/progressbar/)
 *
 * @module useprogressbar
 * @group headless
 *
 */
import type { HeadlessInstance } from '@primereact/types/core';

/**
 * Defines valid properties in useProgressBar.
 */
export interface useProgressBarProps {
    /**
     * Current value of the progress.
     */
    value?: number | undefined;
    /**
     * Defines the mode of the progress
     */
    max?: number | undefined;
    /**
     * Defines the mode of the progress
     */
    min?: number | undefined;
    /**
     * Custom formatter function to format the display value
     * @param {number} value - The computed percentage value
     */
    formatter?: ((value: number) => string) | undefined;
}

/**
 * Defines valid state in useProgressBar.
 */
export interface useProgressBarState {
    /**
     * Current value of the progress.
     */
    computedValue?: number | undefined;
    /**
     * Current value of the progress in percentage format and fixed to 2 decimal places.
     */
    formattedValue?: string | undefined;
}

/**
 * Defines the methods and properties exposed by useProgressBar.
 */
export interface useProgressBarExposes {}

/**
 * Instance of useProgressBar headless.
 */
export type useProgressBarInstance = HeadlessInstance<useProgressBarProps, useProgressBarState, useProgressBarExposes>;
