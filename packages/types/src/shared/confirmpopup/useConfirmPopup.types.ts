/**
 *
 * The useConfirmPopup manages the state and functionality of a confirmpopup component.
 *
 * [Live Demo](https://www.primereact.org/confirmpopup/)
 *
 * @module useconfirmpopup
 * @group headless
 *
 */
import type { HeadlessInstance } from '@primereact/types/core';

/**
 * Event fired when the confirmpopup's open state changes.
 */
export interface useConfirmPopupChangeEvent {
    /**
     * The value of the confirmpopup.
     */
    value: boolean | undefined;
}

/**
 * Defines valid properties in useConfirmPopup.
 */
export interface useConfirmPopupProps {
    /**
     * Specifies the visibility of the confirmpopup.
     * @default false
     */
    open?: boolean | undefined;
    /**
     * Element to receive the focus when the dialog gets visible, valid values are "accept" and "reject".
     * @default undefined
     */
    defaultFocus?: 'accept' | 'reject' | undefined;
    /**
     * Callback function that is called when the trigger is clicked.
     * @param event The event that triggered the change.
     * @param event.originalEvent The original event that triggered the change.
     * @param event.value The open value of the confirmpopup.
     * @returns void
     */
    onOpenChange?: (event: useConfirmPopupChangeEvent) => void;
}

/**
 * Defines valid state in useConfirmPopup.
 */
export interface useConfirmPopupState {
    /**
     * Whether the confirmpopup is currently opened.
     */
    opened: boolean;
}

/**
 * Defines the methods and properties exposed by useConfirmPopup.
 */
export interface useConfirmPopupExposes {
    /**
     * Current state of the confirmpopup.
     */
    state?: useConfirmPopupState;
    /**
     * Reference to the motion element.
     */
    motionRef?: React.RefObject<{ elementRef: React.RefObject<HTMLDivElement> } | null>;
    /**
     * Reference to the trigger element.
     */
    triggerRef?: React.RefObject<{ elementRef: React.RefObject<HTMLButtonElement> } | null>;
    /**
     * Reference to the reject element.
     */
    rejectRef?: React.RefObject<{ elementRef: React.RefObject<HTMLButtonElement> } | null>;
    /**
     * Reference to the accept element.
     */
    acceptRef?: React.RefObject<{ elementRef: React.RefObject<HTMLButtonElement> } | null>;
    /**
     * Method to change the open state of the confirmpopup.
     */
    onOpenStateChange?: () => void;
    /**
     * Method to close the confirmpopup.
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
     * Handler for motion after leave events.
     */
    onMotionAfterLeave?: () => void;
}

/**
 * Instance of useConfirmPopup headless.
 */
export type useConfirmPopupInstance = HeadlessInstance<useConfirmPopupProps, useConfirmPopupState, useConfirmPopupExposes>;
