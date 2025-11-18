/**
 *
 * The useMenu manages the state and functionality of a menu component.
 *
 * [Live Demo](https://www.primereact.org/menu/)
 *
 * @module usemenu
 * @group headless
 *
 */
import type { HeadlessInstance } from '@primereact/types/core';
import * as React from 'react';

/**
 * Event object for the onOpenChange callback.
 */
export interface useMenuOpenChangeEvent {
    /**
     * The new value of the menu's open state.
     */
    value: boolean;
}

/**
 * Props for the useMenu hook.
 */
export interface useMenuProps {
    /**
     * Controlled open state of the menu.
     */
    open?: boolean;
    /**
     * Default open state for uncontrolled mode.
     * @default false
     */
    defaultOpen?: boolean;
    /**
     * The element to which the overlay is appended.
     * @default 'body'
     */
    appendTo?: 'body' | 'self' | HTMLElement;
    /**
     * Base zIndex value to use in layering.
     * @default 0
     */
    baseZIndex?: number;
    /**
     * Whether to automatically manage layering.
     * @default true
     */
    autoZIndex?: boolean;
    /**
     * Index of the element in tabbing order.
     * @default 0
     */
    tabIndex?: number;
    /**
     * Callback to invoke when the open state changes.
     */
    onOpenChange?: (event: useMenuOpenChangeEvent) => void;
}

/**
 * Defines valid state in useMenu.
 */
export interface useMenuState {
    /**
     * Whether the menu is opened.
     */
    opened: boolean;
    /**
     * Whether the menu is focused.
     */
    focused: boolean;
    /**
     * The ID of the focused option (HTML id attribute).
     */
    focusedOptionId: string;
}

/**
 * Defines the methods and properties exposed by useMenu.
 */
export interface useMenuExposes {
    /**
     * The state of the useMenu.
     */
    state: useMenuState;
    /**
     * Reference to the portal element.
     */
    portalRef: React.RefObject<{ containerRef: { current: { elementRef: React.RefObject<HTMLDivElement> } } } | null>;
    /**
     * Reference to the trigger element.
     */
    triggerRef: React.RefObject<{ elementRef: React.RefObject<HTMLButtonElement> } | null>;
    /**
     * Reference to the list element.
     */
    listRef: React.RefObject<HTMLUListElement | null>;
    /**
     * Register an item with the menu.
     */
    registerItem: (id: string, ref: HTMLElement) => void;
    /**
     * Unregister an item from the menu.
     */
    unregisterItem: (id: string) => void;
    /**
     * Handle trigger click event.
     */
    onTriggerClick: () => void;
    /**
     * Handle overlay enter event.
     */
    onOverlayEnter: () => void;
    /**
     * Change the visible state.
     */
    changeVisibleState: (isVisible: boolean) => void;
    /**
     * Handle list focus event.
     */
    onListFocus: () => void;
    /**
     * Handle list blur event.
     */
    onListBlur: () => void;
    /**
     * Handle keyboard events on the list.
     */
    onListKeyDown: (event: React.KeyboardEvent) => void;
    /**
     * Change the focused option ID.
     */
    changeFocusedOptionId: (id: string) => void;
    /**
     * Handle item click event.
     */
    onItemClick: (event: React.MouseEvent) => void;
}

/**
 * Instance of useMenu headless.
 */
export type useMenuInstance = HeadlessInstance<useMenuProps, useMenuState, useMenuExposes>;
