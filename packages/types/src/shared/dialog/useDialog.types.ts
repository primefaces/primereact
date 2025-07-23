/**
 *
 * The useDialog manages the state and functionality of a dialog component.
 *
 * [Live Demo](https://www.primereact.org/dialog/)
 *
 * @module usedialog
 * @group headless
 *
 */
import type { HeadlessInstance } from '@primereact/types/core';

/**
 * Event fired when the dialog's open state changes.
 */
export interface useDialogChangeEvent {
    /**
     * The value of the dialog.
     */
    value: boolean | undefined;
}

/**
 * Defines valid properties in useDialog.
 */
export interface useDialogProps {
    /**
     * Specifies the visibility of the dialog.
     * @default false
     */
    open?: boolean | undefined;
    /**
     * Specifies the default visibility of the dialog.
     * @default false
     */
    defaultOpen?: boolean | undefined;
    /**
     * Enables dragging to change the position using header.
     * @default true
     */
    draggable?: boolean | undefined;
    /**
     * Keeps dialog in the viewport.
     * @default true
     */
    keepInViewport?: boolean | undefined;
    /**
     * Minimum value for the left coordinate of dialog in dragging.
     * @default 0
     */
    minX?: number | undefined;
    /**
     * Minimum value for the top coordinate of dialog in dragging.
     * @default 0
     */
    minY?: number | undefined;
    /**
     * Defines if background should be blocked when dialog is displayed.
     * @default undefined
     */
    modal?: boolean | undefined;
    /**
     * Specifies if clicking the modal background should hide the dialog.
     * @default false
     */
    dismissableMask?: boolean | undefined;
    /**
     * Specifies if pressing escape key should hide the dialog.
     * @default true
     */
    closeOnEscape?: boolean | undefined;
    /**
     * Whether background scroll should be blocked when dialog is visible.
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
     * A valid query selector or an HTMLElement to specify where the dialog gets attached.
     * @default body
     */
    appendTo?: HTMLElement | 'body' | 'self' | undefined;
    /**
     * Callback function that is called when the trigger is clicked.
     * @param event The event that triggered the change.
     * @param event.originalEvent The original event that triggered the change.
     * @param event.value The open value of the dialog.
     * @returns void
     */
    onOpenChange?: (event: useDialogChangeEvent) => void;
}

/**
 * Defines valid state in useDialog.
 */
export interface useDialogState {
    /**
     * Whether the dialog is currently opened.
     */
    opened: boolean;
    /**
     * Whether the dialog is currently maximized.
     */
    maximized: boolean;
    /**
     * Whether the mask is currently visible.
     */
    maskVisible: boolean;
}

/**
 * Defines the methods and properties exposed by useDialog.
 */
export interface useDialogExposes {
    /**
     * Current state of the dialog.
     */
    state?: useDialogState;
    /**
     * Reference to the mask element.
     */
    maskRef?: React.RefObject<HTMLDivElement | null>;
    /**
     * Reference to the close button element.
     */
    motionRef?: React.RefObject<{ elementRef: React.RefObject<HTMLDivElement> } | null>;
    /**
     * Reference to the close button element.
     */
    closeButtonRef?: React.RefObject<{ elementRef: React.RefObject<HTMLButtonElement> } | null>;
    /**
     * Reference to the maximizable button element.
     */
    maximizableButtonRef?: React.RefObject<{ elementRef: React.RefObject<HTMLButtonElement> } | null>;
    /**
     * Method to change the open state of the dialog.
     */
    onOpenStateChange?: () => void;
    /**
     * Method to close the dialog.
     */
    close?: () => void;
    /**
     * Method to toggle maximized state.
     */
    toggleMaximized?: () => void;
    /**
     * Handler for mask mouse down events.
     */
    onMaskMouseDown?: (event: React.MouseEvent) => void;
    /**
     * Handler for mask mouse up events.
     */
    onMaskMouseUp?: () => void;
    /**
     * Handler for drag start events.
     */
    onDragStart?: (event: React.MouseEvent) => void;
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
     * Handler for motion leave events.
     */
    onMotionLeave?: () => void;
    /**
     * Handler for motion after leave events.
     */
    onMotionAfterLeave?: () => void;
}

/**
 * Instance of useDialog headless.
 */
export type useDialogInstance = HeadlessInstance<useDialogProps, useDialogState, useDialogExposes>;
