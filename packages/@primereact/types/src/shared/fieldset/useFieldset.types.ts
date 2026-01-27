/**
 *
 * The useFieldset manages the state and functionality of a fieldset component.
 *
 * [Live Demo](https://www.primereact.org/fieldset/)
 *
 * @module useFieldset
 * @group headless
 *
 */
import type { HeadlessInstance } from '@primereact/types/core';
import type { useCollapsibleExposes, useCollapsibleOpenChangeEvent, useCollapsibleProps, useCollapsibleState } from '@primereact/types/shared/collapsible';
import * as React from 'react';

/**
 * Event object for the onToggle callback.
 * @extends useCollapsibleOpenChangeEvent
 */
export interface useFieldsetOpenChangeEvent<E = React.SyntheticEvent> extends useCollapsibleOpenChangeEvent<E> {}

/**
 * Props for the useFieldset hook.
 * @extends useCollapsibleProps
 */
export interface useFieldsetProps extends Omit<useCollapsibleProps, 'onOpenChange'> {
    /**
     * Callback triggered when the content's toggle state changes.
     * @param event The event that triggered the toggle.
     * @param event.originalEvent The original event that triggered the toggle.
     * @param event.value The new value of the open state.
     * @returns void
     */
    onOpenChange?: ((event: useFieldsetOpenChangeEvent) => void) | undefined;
}

/**
 * Defines valid state in useFieldset.
 * @extends useCollapsibleState
 */
export interface useFieldsetState extends useCollapsibleState {}

/**
 * Defines the methods and properties exposed by useFieldset.
 */
export interface useFieldsetExposes extends Omit<useCollapsibleExposes, 'state'> {
    /**
     * The state of the useFieldset.
     */
    state: useFieldsetState;
    /**
     * Callback to be invoked when the trigger is clicked.
     * @param event The click event.
     */
    onTriggerClick?: (event?: React.SyntheticEvent) => void;
}

/**
 * Instance of useFieldset headless.
 */
export type useFieldsetInstance = HeadlessInstance<useFieldsetProps, useFieldsetState, useFieldsetExposes>;
