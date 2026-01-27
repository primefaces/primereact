/**
 *
 * The useCollapsible manages the state and functionality of a collapsible component.
 *
 * [Live Demo](https://www.primereact.org/collapsible/)
 *
 * @module useCollapsible
 * @group headless
 *
 */
import type { HeadlessInstance } from '@primereact/types/core';

/**
 * Event fired when the collapsible's value changes.
 */
export interface useCollapsibleOpenChangeEvent<E = React.SyntheticEvent> {
    /**
     * The original event that triggered the change.
     */
    originalEvent: E;
    /**
     * The value of the collapsible.
     */
    value: boolean | undefined;
}

/**
 * Defines valid properties in useCollapsible.
 */
export interface useCollapsibleProps {
    /**
     * Controls the open state of the collapsible.
     * @default false
     */
    open?: boolean | undefined;
    /**
     * Defines the initial open state of the collapsible.
     * @default false
     */
    defaultOpen?: boolean | undefined;
    /**
     * Callback triggered when the content is opened.
     */
    onOpen?: (event?: React.SyntheticEvent) => void;
    /**
     * Callback triggered when the content is closed.
     */
    onClose?: (event?: React.SyntheticEvent) => void;
    /**
     * Callback triggered when the content's toggle state changes.
     * @param event The event that triggered the toggle.
     * @param event.originalEvent The original event that triggered the toggle.
     * @param event.value The new value of the open state.
     * @returns void
     */
    onOpenChange?: ((event: useCollapsibleOpenChangeEvent) => void) | undefined;
}

/**
 * Defines valid state in useCollapsible.
 */
export interface useCollapsibleState {
    /**
     * Whether the collapsible content is open or not.
     */
    open: boolean | undefined;
}

/**
 * Defines the methods and properties exposed by useCollapsible.
 */
export interface useCollapsibleExposes {
    /**
     * The state of the useCollapsible.
     */
    state: useCollapsibleState;
    /**
     * The method to open the collapsible content.
     * @param event The event that triggered the open.
     * @returns void
     */
    open: (event?: React.SyntheticEvent) => void;
    /**
     * The method to close the collapsible content.
     * @param event The event that triggered the close.
     * @returns void
     */
    close: (event?: React.SyntheticEvent) => void;
    /**
     * The method to toggle the collapsible content.
     * @param event The event that triggered the toggle.
     * @returns void
     */
    toggle: (event?: React.SyntheticEvent) => void;
}

/**
 * Instance of useCollapsible headless.
 */
export type useCollapsibleInstance = HeadlessInstance<useCollapsibleProps, useCollapsibleState, useCollapsibleExposes>;
