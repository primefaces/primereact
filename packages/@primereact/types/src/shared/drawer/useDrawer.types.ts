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
     * @default false
     */
    open?: boolean | undefined;
    /**
     * Specifies the default visibility of the drawer.
     * @default false
     */
    defaultOpen?: boolean | undefined;
    /**
     * Defines if background should be blocked when drawer is displayed.
     * @default undefined
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
    /**
     * Whether the mask is currently visible.
     */
    maskVisible: boolean;
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
    maskRef?: React.RefObject<HTMLDivElement | null>;
    /**
     * Reference to the motion element.
     */
    motionRef?: React.RefObject<{ elementRef: React.RefObject<HTMLDivElement> } | null>;
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
     * Handler for motion enter events.
     */
    onMotionEnter?: () => void;
    /**
     * Handler for motion after enter events.
     */
    onMotionAfterEnter?: () => void;
    /**
     * Handler for motion before leave events.
     */
    onMotionBeforeLeave?: () => void;
    /**
     * Handler for motion after leave events.
     */
    onMotionAfterLeave?: () => void;
}

/**
 * Instance of useDrawer headless.
 */
export type useDrawerInstance = HeadlessInstance<useDrawerProps, useDrawerState, useDrawerExposes>;
