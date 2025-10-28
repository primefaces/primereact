/**
 *
 * The useOverlay manages the state and functionality of a overlay component.
 *
 * [Live Demo](https://www.primereact.org/overlay/)
 *
 * @module useoverlay
 * @group headless
 *
 */
import type { HeadlessInstance } from '@primereact/types/core';

/**
 * Event fired when the overlay's open state changes.
 */
export interface useOverlayOpenChangeEvent {
    /**
     * The new open state value.
     */
    value: boolean;
}

/**
 * Defines valid properties in useOverlay.
 */
export interface useOverlayProps {
    /**
     * The target element to attach the overlay to.
     */
    target?: HTMLElement | undefined;
    /**
     * Where to append the overlay.
     * @default 'body'
     */
    appendTo?: 'body' | 'self' | HTMLElement | undefined;
    /**
     * Base zIndex value to use in layering.
     * @default 0
     */
    baseZIndex?: number | undefined;
    /**
     * Whether to automatically manage layering.
     * @default true
     */
    autoZIndex?: boolean | undefined;
    /**
     * Whether to close the overlay on escape key press.
     * @default true
     */
    closeOnEscape?: boolean | undefined;
    /**
     * Default open state for uncontrolled mode.
     */
    defaultOpen?: boolean | undefined;
    /**
     * Whether the overlay is visible (controlled mode).
     */
    open?: boolean | undefined;
    /**
     * Callback function that is called when the overlay's open state changes.
     */
    onOpenChange?: (event: useOverlayOpenChangeEvent) => void;
}

/**
 * Defines valid state in useOverlay.
 */
export interface useOverlayState {
    /**
     * The visible state of the overlay.
     */
    visible: boolean;
}

/**
 * Defines the methods and properties exposed by useOverlay.
 */
export interface useOverlayExposes {
    /**
     * The state of the useOverlay.
     */
    state: useOverlayState;
    /**
     * Reference to the container element.
     */
    containerRef: React.RefObject<{ elementRef: React.RefObject<HTMLDivElement> } | null>;
    /**
     * Method to hide the overlay.
     */
    hide: () => void;
    /**
     * Callback when overlay enters (before animation).
     */
    onOverlayEnter: () => void;
    /**
     * Callback when overlay enter animation completes.
     */
    onOverlayAfterEnter: () => void;
    /**
     * Callback when overlay starts leaving.
     */
    onLeave: () => void;
    /**
     * Callback when overlay leave animation completes.
     */
    onAfterLeave: () => void;
    /**
     * Handler for overlay click events.
     */
    onOverlayClick: (event: React.MouseEvent) => void;
    /**
     * Handler for overlay keydown events.
     */
    onOverlayKeyDown: (event: React.KeyboardEvent) => void;
}

/**
 * Instance of useOverlay headless.
 */
export type useOverlayInstance = HeadlessInstance<useOverlayProps, useOverlayState, useOverlayExposes>;
