/**
 *
 * The useMenuSub manages the state and functionality of a submenu component.
 *
 * [Live Demo](https://www.primereact.org/menu/)
 *
 * @module usemenusub
 * @group headless
 *
 */
import type { HeadlessInstance } from '@primereact/types/core';
import * as React from 'react';

/**
 * Event object for the onOpenChange callback.
 */
export interface useMenuSubOpenChangeEvent {
    /**
     * The new value of the submenu's open state.
     */
    value: boolean;
}

/**
 * Props for the useMenuSub hook.
 */
export interface useMenuSubProps {
    /**
     * Controlled open state of the submenu.
     */
    open?: boolean;
    /**
     * Default open state for uncontrolled mode.
     * @default false
     */
    defaultOpen?: boolean;
    /**
     * Callback to invoke when the open state changes.
     */
    onOpenChange?: (event: useMenuSubOpenChangeEvent) => void;
}

/**
 * Defines valid state in useMenuSub.
 */
export interface useMenuSubState {
    /**
     * Whether the submenu is opened.
     */
    opened: boolean;
}

/**
 * Defines the methods and properties exposed by useMenuSub.
 */
export interface useMenuSubExposes {
    /**
     * The state of the useMenuSub.
     */
    state: useMenuSubState;
    /**
     * Reference to the trigger element.
     */
    triggerRef: React.RefObject<HTMLDivElement | null>;
    /**
     * Reference to the list element.
     */
    listRef: React.RefObject<HTMLUListElement | null>;
    /**
     * Toggle the submenu open/close state.
     */
    toggle: () => void;
    /**
     * Open the submenu (composite mode).
     */
    open?: () => void;
    /**
     * Close the submenu (composite mode).
     */
    close?: () => void;
    /**
     * Handle trigger click event.
     */
    onTriggerClick: () => void;
}

/**
 * Instance of useMenuSub headless.
 */
export type useMenuSubInstance = HeadlessInstance<useMenuSubProps, useMenuSubState, useMenuSubExposes>;
