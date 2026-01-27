/**
 *
 * The usePanel manages the state and functionality of a panel component.
 *
 * [Live Demo](https://www.primereact.org/panel/)
 *
 * @module usePanel
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
export interface usePanelOpenChangeEvent<E = React.SyntheticEvent> extends useCollapsibleOpenChangeEvent<E> {}

/**
 * Props for the usePanel hook.
 * @extends useCollapsibleProps
 */
export interface usePanelProps extends Omit<useCollapsibleProps, 'onOpenChange'> {
    /**
     * Callback triggered when the content's toggle state changes.
     * @param event The event that triggered the toggle.
     * @param event.originalEvent The original event that triggered the toggle.
     * @param event.value The new value of the open state.
     * @returns void
     */
    onOpenChange?: ((event: usePanelOpenChangeEvent) => void) | undefined;
}

/**
 * Defines valid state in usePanel.
 * @extends useCollapsibleState
 */
export interface usePanelState extends useCollapsibleState {}

/**
 * Defines the methods and properties exposed by usePanel.
 */
export interface usePanelExposes extends Omit<useCollapsibleExposes, 'state'> {
    /**
     * The state of the usePanel.
     */
    state: usePanelState;
    /**
     * Callback to be invoked when the trigger is clicked.
     * @param event The click event.
     */
    onTriggerClick?: (event?: React.SyntheticEvent) => void;
}

/**
 * Instance of usePanel headless.
 */
export type usePanelInstance = HeadlessInstance<usePanelProps, usePanelState, usePanelExposes>;
