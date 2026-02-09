/**
 *
 * The useInplace manages the state and functionality of a inplace component.
 *
 * [Live Demo](https://www.primereact.org/checkbox/)
 *
 * @module useinplace
 * @group headless
 *
 */
import type { HeadlessInstance } from '@primereact/types/core';

/**
 * Event fired when the checkbox's checked state changes.
 */
export interface useInplaceChangeEvent {
    /**
     * The active state of the inplace.
     */
    active: boolean;
}

/**
 * Defines valid properties in useInplace.
 */
export interface useInplaceProps {
    /**
     * Whether the content is displayed or not.
     * @default false
     */
    active?: boolean;
    /**
     * Whether the content is displayed or not.
     * @default false
     */
    defaultActive?: boolean;
    /**
     * Callback function that is called when the element is clicked.
     * @param event The event that triggered the change.
     * @param event.originalEvent The original event that triggered the change.
     * @param event.active The active state of the inplace.
     * @returns void
     */
    onActiveChange?: (event: useInplaceChangeEvent) => void;
}

/**
 * Defines valid state in useInplace.
 */
export interface useInplaceState {
    /**
     * The active state of the useInplace.
     */
    active: boolean | undefined;
}

/**
 * Defines the methods and properties exposed by useInplace.
 */
export interface useInplaceExposes {
    /**
     * The state of the useInplace.
     */
    state: useInplaceState;
    /**
     * Method to open the inplace.
     */
    open: () => void;
    /**
     * Method to close the inplace.
     */
    close: () => void;
}

/**
 * Instance of useInplace headless.
 */
export type useInplaceInstance = HeadlessInstance<useInplaceProps, useInplaceState, useInplaceExposes>;
