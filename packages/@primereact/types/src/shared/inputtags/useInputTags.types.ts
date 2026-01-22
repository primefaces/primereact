/**
 *
 * The useInputTags manages the state and functionality of an input items component.
 *
 * [Live Demo](https://www.primereact.org/inputitems/)
 *
 * @module useinputtags
 * @group headless
 *
 */
import type { HeadlessInstance } from '@primereact/types/core';
import type { useListboxInstance } from '@primereact/types/shared/listbox';
import * as React from 'react';

/**
 * Custom change event for InputTags component.
 */
export interface useInputTagsValueChangeEvent {
    /**
     * The new value of the items.
     */
    value: string[] | undefined;
}

/**
 * Event fired when an item is added.
 */
export interface useInputTagsAddEvent {
    /**
     * The added item value.
     */
    value: string;
}

/**
 * Event fired when an item is removed.
 */
export interface useInputTagsRemoveEvent {
    /**
     * The removed item value.
     */
    value: string;
    /**
     * The index of the removed item.
     */
    index: number;
}

/**
 * Event fired when the input value changes.
 */
export interface useInputTagsInputValueChangeEvent<E = React.SyntheticEvent> {
    /**
     * The original event that triggered the change.
     */
    originalEvent: E;
    /**
     * The current input value (query).
     */
    query: string;
}

/**
 * Event fired when the autocomplete triggers a search/complete action.
 */
export interface useInputTagsCompleteEvent<E = React.SyntheticEvent> {
    /**
     * The original event that triggered the complete.
     */
    originalEvent: E;
    /**
     * The current query string.
     */
    query: string;
}

/**
 * Defines valid properties in useInputTags.
 */
export interface useInputTagsProps {
    /**
     * Default value of the items.
     */
    defaultValue?: string[] | undefined;
    /**
     * Value of the items.
     */
    value?: string[] | undefined;
    /**
     * Default value of the input field.
     */
    defaultInputValue?: string | undefined;
    /**
     * Value of the input field (controlled).
     */
    inputValue?: string | undefined;
    /**
     * Maximum number of items allowed.
     */
    max?: number | undefined;
    /**
     * Delimiter character or regex to split input into items.
     */
    delimiter?: string | RegExp | undefined;
    /**
     * Whether to allow duplicate items.
     */
    allowDuplicate?: boolean | undefined;
    /**
     * Whether to add item on blur event.
     */
    addOnBlur?: boolean | undefined;
    /**
     * Whether to add item on paste event.
     */
    addOnPaste?: boolean | undefined;
    /**
     * Whether to add item on tab key press.
     */
    addOnTab?: boolean | undefined;
    /**
     * An array of options to display in dropdown.
     */
    options?: unknown[];
    /**
     * Unique key for each option.
     */
    optionKey?: string;
    /**
     * Label field for each option.
     */
    optionLabel?: string;
    /**
     * Value field for each option.
     */
    optionValue?: string;
    /**
     * Field to check if an option is disabled.
     */
    optionDisabled?: string;
    /**
     * Label field for option groups.
     */
    optionGroupLabel?: string;
    /**
     * Field that contains the children options in a group.
     */
    optionGroupChildren?: string;
    /**
     * Delay between keystrokes to wait before sending a query.
     * @defaultValue 300
     */
    delay?: number;
    /**
     * Minimum number of characters to initiate a search.
     * @defaultValue 1
     */
    minLength?: number;
    /**
     * A valid query selector or an HTMLElement to specify where the overlay gets attached.
     * @defaultValue 'body'
     */
    appendTo?: 'body' | 'self' | HTMLElement;
    /**
     * Callback to invoke when value changes.
     */
    onValueChange?: (event: useInputTagsValueChangeEvent) => void;
    /**
     * Callback to invoke when a item is added.
     * @param {useInputTagsAddEvent} event - Custom add event.
     * @returns void
     */
    onAdd?: (event: useInputTagsAddEvent) => void;
    /**
     * Callback to invoke when a item is removed.
     * @param {useInputTagsRemoveEvent} event - Custom remove event.
     * @returns void
     */
    onRemove?: (event: useInputTagsRemoveEvent) => void;
    /**
     * Callback when the input value changes.
     * @param {useInputTagsInputValueChangeEvent} event - The input value change event.
     */
    onInputValueChange?: (event: useInputTagsInputValueChangeEvent) => void;
    /**
     * Callback to invoke to search for suggestions.
     * @param {useInputTagsCompleteEvent} event - Custom complete event.
     */
    onComplete?: (event: useInputTagsCompleteEvent) => void;
}

/**
 * Defines valid state in useInputTags.
 */
export interface useInputTagsState {
    /**
     * Current items value.
     */
    value: string[];
    /**
     * Current input field value.
     */
    inputValue: string;
    /**
     * Index of the currently focused item item (-1 if none).
     */
    focusedItemIndex: number;
    /**
     * Whether the overlay is visible.
     */
    overlayVisible: boolean;
    /**
     * Whether a search is in progress.
     */
    searching: boolean;
    /**
     * The index of the currently focused option. -1 if no option is focused.
     */
    focusedOptionIndex: number;
}

/**
 * Defines the methods and properties exposed by useInputTags.
 */
export interface useInputTagsExposes {
    /**
     * Current state of the component.
     */
    state: useInputTagsState;
    /**
     * The listbox instance used internally for option management.
     */
    listbox: useListboxInstance;
    /**
     * Reference to the input element.
     */
    inputRef: React.RefObject<{ elementRef: React.RefObject<HTMLInputElement> } | null>;
    /**
     * Reference to the portal element.
     */
    portalRef: React.RefObject<{ containerRef: { current: { elementRef: React.RefObject<HTMLDivElement> } } } | null>;
    /**
     * Map of item refs by index.
     */
    itemRefs: React.RefObject<Map<number, HTMLElement>>;
    /**
     * Click handler for the container.
     */
    onClick: () => void;
    /**
     * Input change handler.
     */
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    /**
     * Keyboard event handler for navigation.
     */
    onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    /**
     * Paste event handler.
     */
    onPaste: (event: React.ClipboardEvent<HTMLInputElement>) => void;
    /**
     * Blur event handler.
     */
    onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
    /**
     * Focus event handler.
     */
    onFocus: (event: React.FocusEvent<HTMLInputElement>) => void;
    /**
     * Remove icon click handler.
     */
    onItemRemoveClick: (index: number) => void;
    /**
     * Removes all items.
     */
    onRemoveAllItems: () => void;
    /**
     * Changes the visibility state of the overlay.
     * @param {boolean} isVisible - The new visibility state.
     */
    changeVisibleState: (isVisible: boolean) => void;
    /**
     * Callback when the overlay enters.
     */
    onOverlayEnter: () => void;
    /**
     * Callback after the overlay has entered.
     */
    onOverlayAfterEnter: () => void;
    /**
     * Returns the ID of the currently focused option.
     * @returns The focused option ID or null if no option is focused.
     */
    getFocusedOptionId: () => string | null;
}

/**
 * Instance of useInputTags headless.
 */
export type useInputTagsInstance = HeadlessInstance<useInputTagsProps, useInputTagsState, useInputTagsExposes>;
