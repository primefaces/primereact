/**
 *
 * The useInputTags manages the state and functionality of an input items component.
 *
 * [Live Demo](https://www.primereact.org/inputitems/)
 *
 * @module useInputTags
 * @group headless
 *
 */
import type { HeadlessInstance } from '@primereact/types/core';

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
     * Reference to the control element.
     */
    controlRef: React.RefObject<HTMLDivElement | null>;
    /**
     * Reference to the input element.
     */
    inputRef: React.RefObject<{ elementRef: React.RefObject<HTMLInputElement> } | null>;
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
     * Remove icon click handler.
     */
    onItemRemoveClick: (index: number) => void;
    /**
     * Removes all items.
     */
    onRemoveAllItems: () => void;
}

/**
 * Instance of useInputTags headless.
 */
export type useInputTagsInstance = HeadlessInstance<useInputTagsProps, useInputTagsState, useInputTagsExposes>;
