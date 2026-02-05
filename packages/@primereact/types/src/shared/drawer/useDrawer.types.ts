/**
 *
 * The useDrawer manages the state and functionality of a drawer component.
 *
 * [Live Demo](https://www.primereact.org/drawer/)
 *
 * @module usedrawer
 * @group headless
 *
 */
import type { HeadlessInstance } from '@primereact/types/core';

/**
 * Event fired when the drawer's open state changes.
 */
export interface useDrawerChangeEvent {
    /**
     * The value of the drawer.
     */
    value: boolean | undefined;
}

/**
 * Defines valid properties in useDrawer.
 */
export interface useDrawerProps {
    /**
     * Specifies the visibility of the drawer.
     */
    open?: boolean | undefined;
    /**
     * Specifies the default visibility of the drawer.
     */
    defaultOpen?: boolean | undefined;
    /**
     * Defines if background should be blocked when drawer is displayed.
     */
    modal?: boolean | undefined;
    /**
     * Whether clicking outside closes the drawer.
     * @default true
     */
    dismissable?: boolean | undefined;
    /**
     * Whether background scroll should be blocked when drawer is visible.
     * @default false
     */
    blockScroll?: boolean | undefined;
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
     * A valid query selector or an HTMLElement to specify where the drawer gets attached.
     * @default body
     */
    appendTo?: HTMLElement | 'body' | 'self' | undefined;
    /**
     * Callback function that is called when the trigger is clicked.
     * @param event The event that triggered the change.
     * @param event.originalEvent The original event that triggered the change.
     * @param event.value The open value of the drawer.
     * @returns void
     */
    onOpenChange?: (event: useDrawerChangeEvent) => void;
}

/**
 * Defines valid state in useDrawer.
 */
export interface useDrawerState {
    /**
     * Whether the drawer is currently opened.
     */
    opened: boolean;
}

/**
 * Defines the methods and properties exposed by useDrawer.
 */
export interface useDrawerExposes {
    /**
     * Current state of the drawer.
     */
    state?: useDrawerState;
    /**
     * Reference to the mask element.
     */
    maskRef?: React.RefObject<{ elementRef: React.RefObject<HTMLDivElement | null> } | null>;
    /**
     * Reference to the root element.
     */
    rootRef?: React.RefObject<{ elementRef: React.RefObject<HTMLDivElement> } | null>;
    /**
     * Reference to the close button element.
     */
    closeButtonRef?: React.RefObject<{ elementRef: React.RefObject<HTMLButtonElement> } | null>;
    /**
     * Method to change the open state of the drawer.
     */
    onOpenStateChange?: () => void;
    /**
     * Method to close the drawer.
     */
    close?: () => void;
    /**
     * Handler for mask mouse down events.
     */
    onMaskMouseDown?: (event: React.MouseEvent) => void;
    /**
     * Handler for mask mouse up events.
     */
    onMaskMouseUp?: () => void;
    /**
     * Handler for mask enter events.
     */
    onMaskEnter?: () => void;
    /**
     * Handler for enter events.
     */
    onEnter?: () => void;
    /**
     * Handler for after enter events.
     */
    onAfterEnter?: () => void;
    /**
     * Handler for leave events.
     */
    onLeave?: () => void;
    /**
     * Handler for after leave events.
     */
    onAfterLeave?: () => void;
}

/**
 * Instance of useDrawer headless.
 */
export type useDrawerInstance = HeadlessInstance<useDrawerProps, useDrawerState, useDrawerExposes>;
