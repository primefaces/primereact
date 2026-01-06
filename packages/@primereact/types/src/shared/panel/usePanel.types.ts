/**
 *
 * The usePanel manages the state and functionality of a panel component.
 *
 * [Live Demo](https://www.primereact.org/panel/)
 *
 * @module usepanel
 * @group headless
 *
 */
import type { HeadlessInstance } from '@primereact/types/core';
import * as React from 'react';

/**
 * Event object for the onToggle callback.
 */
export interface usePanelToggleEvent {
    /**
     * The original event that triggered the toggle.
     */
    originalEvent: React.SyntheticEvent;
    /**
     * The new value of the panel's toggle state.
     */
    value: boolean;
}

/**
 * Props for the usePanel hook.
 */
export interface usePanelProps {
    /**
     * Whether the panel is collapsed.
     * @default false
     */
    collapsed?: boolean | undefined;
    /**
     * Indicates if the panel can be toggled.
     * @default false
     */
    toggleable?: boolean | undefined;
    /**
     * Callback triggered when the panel is collapsed.
     */
    onCollapse?: (event: React.SyntheticEvent) => void;
    /**
     * Callback triggered when the panel is expanded.
     */
    onExpand?: ((event: React.SyntheticEvent) => void) | undefined;
    /**
     * Callback triggered when the panel's toggle state changes.
     */
    onToggle?: ((event: usePanelToggleEvent) => void) | undefined;
}

/**
 * Defines valid state in usePanel.
 */
export interface usePanelState {
    /**
     * Whether the panel is collapsed.
     */
    collapsed?: boolean | undefined;
}

/**
 * Defines the methods and properties exposed by usePanel.
 */
export interface usePanelExposes {
    /**
     * The state of the usePanel.
     */
    state: usePanelState;
    /**
     * Reference to the content element of the panel.
     */
    contentRef: React.RefObject<HTMLDivElement | null>;
    /**
     * Toggles the collapsed state of the panel.
     * @param {React.SyntheticEvent} event - Browser event
     */
    toggle: (event: React.SyntheticEvent) => void;
    /**
     * Expands the panel.
     * @param {React.SyntheticEvent} event - Browser event
     */
    expand: (event: React.SyntheticEvent) => void;
    /**
     * Collapses the panel.
     * @param {React.SyntheticEvent} event - Browser event
     */
    collapse: (event: React.SyntheticEvent) => void;
    /**
     * Callback for when the toggle button is clicked.
     * @param {React.SyntheticEvent} event - Browser event
     */
    onButtonClick: (event: React.SyntheticEvent) => void;
}

/**
 * Instance of usePanel headless.
 */
export type usePanelInstance = HeadlessInstance<usePanelProps, usePanelState, usePanelExposes>;
