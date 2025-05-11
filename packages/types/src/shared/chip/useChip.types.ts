/**
 *
 * The useChip manages the state and functionality of a chip component.
 *
 * [Live Demo](https://www.primereact.org/chip/)
 *
 * @module usechip
 * @group headless
 *
 */
import type { HeadlessInstance } from '@primereact/types/core';
import * as React from 'react';

/**
 * Event fired when the chip's remove icon is clicked.
 */
export interface useChipRemoveEvent<E = React.SyntheticEvent> {
    /**
     * The original event that triggered the change.
     */
    originalEvent: E;
}

/**
 * Defines valid properties in useChip.
 */
export interface useChipProps {
    /**
     * Callback fired when the chip is removed.
     * @param event The event that triggered the remove.
     * @param event.originalEvent The original event that triggered the remove.
     * @returns void
     */
    onRemove?: (event: useChipRemoveEvent) => void;
}

/**
 * Defines valid state in useChip.
 */
export interface useChipState {
    /**
     * The visibility state of the chip.
     */
    visible: boolean | undefined;
}

/**
 * Defines the methods and properties exposed by useChip.
 */
export interface useChipExposes {
    /**
     * The state of the useChip.
     */
    state: useChipState;
    /**
     * Closes the chip.
     * @param event The event that triggered the close.
     */
    close: (event: React.SyntheticEvent<HTMLElement>) => void;
    /**
     * Props for the remove icon.
     */
    removeIconProps: {
        /**
         * The keydown event handler for the remove icon.
         */
        onKeyDown: (event: React.KeyboardEvent<HTMLElement>) => void;
    };
}

/**
 * Instance of useChip headless.
 */
export type useChipInstance = HeadlessInstance<useChipProps, useChipState, useChipExposes>;
