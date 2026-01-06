/**
 * The useImageCompare manages the state and functionality of a imagecompare component.
 *
 * [Live Demo](https://www.primereact.org/imagecompare/)
 *
 * @module useImageCompare
 * @group headless
 *
 */
import type { HeadlessInstance } from '@primereact/types/core';

/**
 * Defines valid properties in useImageCompare.
 */
export interface useImageCompareProps {}

/**
 * Defines valid state in useImageCompare.
 */
export interface useImageCompareState {
    /**
     * Current slide value as percentage
     */
    slideValue: string | undefined;
}

/**
 * Defines the methods and properties exposed by useImageCompare.
 */
export interface useImageCompareExposes {
    /**
     * State object containing current slide value
     */
    state: useImageCompareState;

    /**
     * Handler for slide value changes
     */
    onSlideChange: (event: React.ChangeEvent<HTMLInputElement>) => void;

    /**
     * Sets CSS property for right image positioning
     */
    registerRightImage: (element: HTMLImageElement) => void;
}

/**
 * Instance of useImageCompare headless.
 */
export type useImageCompareInstance = HeadlessInstance<useImageCompareProps, useImageCompareState, useImageCompareExposes>;
