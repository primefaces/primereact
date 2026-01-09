/**
 *
 * The useListbox manages the state and functionality of a listbox component.
 *
 * [Live Demo](https://www.primereact.org/listbox/)
 *
 * @module uselistbox
 * @group headless
 *
 */
import type { HeadlessInstance } from '@primereact/types/core';
import * as React from 'react';

/**
 * Event fired when the listbox's value changes.
 */
export interface useListboxValueChangeEvent {
    /**
     * The original event that triggered the change.
     */
    originalEvent: React.SyntheticEvent;
    /**
     * The value state of the listbox.
     */
    value: unknown;
}

/**
 * Props for the useListbox hook.
 */
export interface useListboxProps {
    /**
     * The current value of the listbox. For single selection, this is a single value. For multiple selection, this is an array of values.
     */
    value?: unknown;
    /**
     * The default value of the listbox when used in uncontrolled mode.
     */
    defaultValue?: unknown;
    /**
     * An array of options to display in the listbox.
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
     * When present, it specifies that the listbox should be disabled.
     * @defaultValue false
     */
    disabled?: boolean;
    /**
     * The locale to use for localization. Used for accessibility labels.
     */
    locale?: string;
    /**
     * When present, allows selecting multiple options.
     * @defaultValue false
     */
    multiple?: boolean;
    /**
     * When enabled, requires holding the meta key (Ctrl/Cmd) to select/deselect items in multiple selection mode.
     * @defaultValue false
     */
    metaKeySelection?: boolean;
    /**
     * When enabled, the focused option is automatically highlighted.
     * @defaultValue true
     */
    autoOptionFocus?: boolean;
    /**
     * When enabled, the focused option is automatically selected.
     * @defaultValue false
     */
    selectOnFocus?: boolean;
    /**
     * When enabled, the focused option changes on hover.
     * @defaultValue true
     */
    focusOnHover?: boolean;
    /**
     * Callback to invoke when the value changes.
     * @param {useListboxValueChangeEvent} event - Custom change event.
     */
    onValueChange?: (event: useListboxValueChangeEvent) => void;
}

/**
 * Defines valid state in useListbox.
 */
export interface useListboxState {
    /**
     * The current value(s) selected in the listbox.
     */
    value?: unknown;
    /**
     * Whether the listbox is currently focused.
     */
    focused?: boolean;
    /**
     * The index of the currently focused option. -1 if no option is focused.
     */
    focusedOptionIndex?: number;
}

/**
 * Defines the methods and properties exposed by useListbox.
 */
export interface useListboxExposes {
    /**
     * The state of the useListbox.
     */
    state: useListboxState;
    /**
     * Reference to the list element of the listbox.
     */
    listRef: React.RefObject<HTMLElement | null>;
    /**
     * Reference to the first hidden focusable element for accessibility.
     */
    firstHiddenFocusableRef: React.RefObject<HTMLElement | null>;
    /**
     * Reference to the last hidden focusable element for accessibility.
     */
    lastHiddenFocusableRef: React.RefObject<HTMLElement | null>;
    /**
     * Gets the list of options for the listbox.
     * @returns {unknown[]} The list of options.
     */
    getOptions: () => unknown[];
    /**
     * Gets the unique ID for an option at a given index.
     * @param {number} index - The index of the option.
     * @returns {string} The option ID.
     */
    getOptionId: (index: number) => string;
    /**
     * Gets the label for a given option.
     * @param {unknown} option - The option object.
     * @returns {string | null} The option label.
     */
    getOptionLabel: (option: unknown) => string | null;
    /**
     * Gets the value for a given option.
     * @param {unknown} option - The option object.
     * @returns {unknown} The option value.
     */
    getOptionValue: (option: unknown) => unknown;
    /**
     * Checks if a given option is disabled.
     * @param {unknown} option - The option object.
     * @returns {boolean} True if the option is disabled.
     */
    isOptionDisabled: (option: unknown) => boolean;
    /**
     * Checks if a given option is a group header.
     * @param {unknown} option - The option object.
     * @returns {boolean} True if the option is a group.
     */
    isOptionGroup: (option: unknown) => boolean;
    /**
     * Gets the label for a given option group.
     * @param {unknown} optionGroup - The option group object.
     * @returns {string | null} The group label.
     */
    getOptionGroupLabel: (optionGroup: unknown) => string | null;
    /**
     * Gets the children options for a given option group.
     * @param {unknown} optionGroup - The option group object.
     * @returns {unknown[] | null} The group children.
     */
    getOptionGroupChildren: (optionGroup: unknown) => unknown[] | null;
    /**
     * Gets the ID of the currently focused option.
     * @returns {string | null} The focused option ID.
     */
    getFocusedOptionId: () => string | null;
    /**
     * Gets the total number of selectable options for ARIA.
     * @returns {number} The set size.
     */
    getAriaSetSize: () => number;
    /**
     * Gets the position of an option in the set for ARIA.
     * @param {number} index - The index of the option.
     * @returns {number} The position in set.
     */
    getAriaPosInset: (index: number) => number;
    /**
     * Callback when the first hidden focusable element receives focus.
     * @param {React.FocusEvent} event - The focus event.
     */
    onFirstHiddenFocus: (event: React.FocusEvent) => void;
    /**
     * Callback when the last hidden focusable element receives focus.
     * @param {React.FocusEvent} event - The focus event.
     */
    onLastHiddenFocus: (event: React.FocusEvent) => void;
    /**
     * Callback when focus leaves the listbox.
     * @param {React.FocusEvent} event - The focus event.
     */
    onFocusOut: (event: React.FocusEvent) => void;
    /**
     * Callback when the list receives focus.
     */
    onListFocus: () => void;
    /**
     * Callback when the list loses focus.
     */
    onListBlur: () => void;
    /**
     * Callback for keyboard events on the list.
     * @param {React.KeyboardEvent} event - The keyboard event.
     */
    onListKeyDown: (event: React.KeyboardEvent) => void;
    /**
     * Handles arrow down key press.
     * @param {React.KeyboardEvent} event - The keyboard event.
     */
    onArrowDownKey: (event: React.KeyboardEvent) => void;
    /**
     * Handles arrow up key press.
     * @param {React.KeyboardEvent} event - The keyboard event.
     */
    onArrowUpKey: (event: React.KeyboardEvent) => void;
    /**
     * Handles arrow left key press.
     * @param {React.KeyboardEvent} event - The keyboard event.
     * @param {boolean} [pressedInInputText] - Whether the key was pressed in an input field.
     */
    onArrowLeftKey: (event: React.KeyboardEvent, pressedInInputText?: boolean) => void;
    /**
     * Handles enter key press.
     * @param {React.KeyboardEvent} event - The keyboard event.
     */
    onEnterKey: (event: React.KeyboardEvent) => void;
    /**
     * Callback when an option is selected.
     * @param {React.MouseEvent | React.KeyboardEvent} event - The event.
     * @param {unknown} option - The selected option.
     * @param {number} [index] - The index of the option.
     */
    onOptionSelect: (event: React.MouseEvent | React.KeyboardEvent, option: unknown, index?: number) => void;
    /**
     * Callback when mouse button is pressed on an option.
     * @param {React.MouseEvent} event - The mouse event.
     * @param {number} index - The index of the option.
     */
    onOptionMouseDown: (event: React.MouseEvent, index: number) => void;
    /**
     * Callback when mouse moves over an option.
     * @param {React.MouseEvent} event - The mouse event.
     * @param {number} index - The index of the option.
     */
    onOptionMouseMove: (event: React.MouseEvent, index: number) => void;
    /**
     * Callback when touch ends on an option.
     */
    onOptionTouchEnd: () => void;
    /**
     * Callback when the filter value changes.
     */
    onFilterChange: () => void;
    /**
     * Callback when the filter input loses focus.
     */
    onFilterBlur: () => void;
    /**
     * Callback for keyboard events on the filter input.
     * @param {React.KeyboardEvent} event - The keyboard event.
     */
    onFilterKeyDown: (event: React.KeyboardEvent) => void;
    /**
     * Checks if an option matches the search value.
     * @param {unknown} option - The option to check.
     * @returns {boolean} True if the option matches.
     */
    isOptionMatched: (option: unknown) => boolean;
    /**
     * Checks if an option is valid (not disabled and not a group).
     * @param {unknown} option - The option to check.
     * @returns {boolean} True if the option is valid.
     */
    isValidOption: (option: unknown) => boolean;
    /**
     * Checks if an option is valid for selection.
     * @param {unknown} option - The option to check.
     * @returns {boolean} True if the option is valid for selection.
     */
    isValidSelectedOption: (option: unknown) => boolean;
    /**
     * Checks if an option is currently selected.
     * @param {unknown} option - The option to check.
     * @returns {boolean} True if the option is selected.
     */
    isSelected: (option: unknown) => boolean;
    /**
     * Changes the focused option index.
     * @param {React.MouseEvent | React.KeyboardEvent} event - The event.
     * @param {number} [index] - The new focused index.
     */
    changeFocusedOptionIndex: (event: React.MouseEvent | React.KeyboardEvent, index?: number) => void;
    /**
     * Finds the index of the selected option.
     * @returns {number} The index of the selected option, or -1 if not found.
     */
    findSelectedOptionIndex: () => number;
    /**
     * Finds the index of the first focused option.
     * @returns {number} The index of the first focused option.
     */
    findFirstFocusedOptionIndex: () => number;
    /**
     * Scrolls the option at the given index into view.
     * @param {number} [index] - The index of the option.
     */
    scrollInView: (index?: number) => void;
    /**
     * Updates the listbox model with a new value.
     * @param {React.SyntheticEvent} event - The event.
     * @param {unknown} value - The new value.
     */
    updateModel: (event: React.SyntheticEvent, value: unknown) => void;
    /**
     * Automatically updates the model based on option selection.
     */
    autoUpdateModel: () => void;
    /**
     * Property name used for equality comparison.
     */
    equalityKey: string | undefined;
    /**
     * Checks if the listbox has a value.
     * @returns {boolean} True if there is a value.
     */
    hasValue: () => boolean;
    /**
     * Checks if two values are equal using the equality key.
     * @param {unknown} value1 - The first value.
     * @param {unknown} value2 - The second value.
     * @returns {boolean} True if the values are equal.
     */
    isEquals: (value1: unknown, value2: unknown) => boolean;
}

/**
 * Instance of useListbox headless.
 */
export type useListboxInstance = HeadlessInstance<useListboxProps, useListboxState, useListboxExposes>;
