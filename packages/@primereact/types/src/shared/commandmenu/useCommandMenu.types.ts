/**
 *
 * The useCommandMenu manages the state and functionality of a command menu component.
 *
 * [Live Demo](https://www.primereact.org/commandmenu/)
 *
 * @module useCommandMenu
 * @group headless
 */
import type { HeadlessInstance } from '@primereact/types/core';

/**
 * Defines valid state in useCommandMenu.
 */
export interface useCommandMenuState {}

export interface useCommandMenuStore {
    /**
     *
     * @param listener - The listener to subscribe to.
     * @returns A function to unsubscribe from the listener.
     */
    subscribe: (listener: () => void) => () => void;
    /**
     * Returns the current state of the useCommandMenu.
     * @returns The current state of the useCommandMenu.
     */
    snapshot: () => useCommandMenuStoreState;
    /**
     * Emits a change event to all subscribers.
     */
    emit: () => void;
    /**
     * Sets the search value.
     * @param search - The search value to set.
     */
    setSearch: (search: string) => void;
    /**
     * Sets the selected value.
     * @param value - The selected value to set.
     */
    setSelected: (value: string) => void;
    /**
     * Registers a value.
     * @param id - The id of the value.
     * @param value - The value to register.
     * @param keywords - The keywords to register.
     */
    registerValue: (id: string, value?: string, keywords?: string[]) => void;
    /**
     * Registers an item.
     * @param id - The id of the item.
     * @param groupId - The id of the group the item belongs to.
     */
    registerItem: (id: string, groupId?: string) => () => void;
    /**
     * Registers a group.
     * @param id - The id of the group.
     */
    registerGroup: (id: string) => () => void;
    /**
     * Filters the items.
     */
    filter: () => void;
    /**
     * Sorts the items.
     */
    sort: () => void;
}

/**
 * Defines valid properties in useCommandMenu.
 */
export interface useCommandMenuProps {
    /**
     * The number of items to jump by.
     */
    jump?: number;
    /**
     * The selected value.
     */
    selected?: string;
    /**
     * The default selected value.
     */
    defaultSelected?: string;
    /**
     * Callback function that is called when the selected value changes.
     * @param value - The selected value.
     */
    onSelectedChange?: (value: string) => void;
    /**
     * Whether to select on hover.
     */
    selectOnHover?: boolean;
    /**
     * Callback function that is called to filter the items.
     * @param value - The value to filter.
     * @param search - The search value.
     * @param keywords - The keywords to filter.
     */
    filter?: (value: string, search: string, keywords?: string[]) => number;
    /**
     * Whether the items are filterable.
     */
    filterable?: boolean;
    /**
     * Whether to loop the items.
     */
    loop?: boolean;
}

/**
 * Defines valid state in useCommandMenu.
 */
export interface useCommandMenuStoreState {
    /**
     * The selected value.
     */
    selected: string;
    /**
     * The search value.
     */
    search: string;
    /**
     * The filtered items and groups.
     */
    filtered: {
        /**
         * The count of the filtered items.
         */
        count: number;
        /**
         * The items of the filtered items.
         */
        items: Map<string, number>;
        /**
         * The groups of the filtered groups.
         */
        groups: Set<string>;
    };
}

/**
 * Defines the methods and properties exposed by useCommandMenu  .
 */
export interface useCommandMenuExposes {
    /**
     * Selector function to access the store.
     * @param selector - The selector function to access the store.
     * @returns The value returned by the selector function.
     */
    useCommandMenuStore: <T>(selector: (state: useCommandMenuStoreState) => T) => T;
    /**
     * The store of the useCommandMenu.
     */
    store: useCommandMenuStore;
    /**
     * The ref to the list element.
     */
    listRef: React.RefObject<HTMLDivElement | null>;
    /**
     * Handles the pointer move event.
     * @param e - The pointer event.
     */
    handleItemPointerMove: (e: React.PointerEvent<HTMLDivElement>) => void;
    /**
     * Handles the item click event.
     * @param e - The mouse event.
     * @param onSelect - The callback function to call when the item is selected.
     * @returns void
     */
    handleItemClick: (e: React.MouseEvent<HTMLDivElement>, onSelect?: (value?: string) => void) => void;
    /**
     * Handles the key down event.
     * @param e - The keyboard event.
     * @returns void
     */
    handleKeyDown: (e: React.KeyboardEvent) => void;
}

/**
 * Instance of useCommandMenu headless.
 */
export type useCommandMenuInstance = HeadlessInstance<useCommandMenuProps, useCommandMenuState, useCommandMenuExposes>;
