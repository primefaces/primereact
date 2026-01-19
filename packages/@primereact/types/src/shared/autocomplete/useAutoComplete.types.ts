/**
 *
 * The useAutoComplete manages the state and functionality of an autocomplete component.
 *
 * [Live Demo](https://www.primereact.org/autocomplete/)
 *
 * @module useautocomplete
 * @group headless
 *
 */
import type { HeadlessInstance } from '@primereact/types/core';
import type { useListboxInstance } from '@primereact/types/shared/listbox';
import * as React from 'react';

/**
 * Event fired when the autocomplete's value changes.
 */
export interface useAutoCompleteValueChangeEvent<E = React.SyntheticEvent> {
    /**
     * The original event that triggered the change.
     */
    originalEvent: E;
    /**
     * The selected value.
     */
    value: string;
    /**
     * The selected option object.
     */
    option?: unknown;
}

/**
 * Event fired when the autocomplete's input value changes.
 */
export interface useAutoCompleteInputValueChangeEvent<E = React.SyntheticEvent> {
    /**
     * The original event that triggered the change.
     */
    originalEvent: E;
    /**
     * The current input value.
     */
    query: string;
}

/**
 * Event fired when the autocomplete triggers a search/complete action.
 */
export interface useAutoCompleteCompleteEvent<E = React.SyntheticEvent> {
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
 * Props for the useAutoComplete hook.
 */
export interface useAutoCompleteProps {
    /**
     * The current selected value of the autocomplete.
     */
    value?: unknown;
    /**
     * The default selected value when used in uncontrolled mode.
     */
    defaultValue?: unknown;
    /**
     * The current input text value (controlled).
     */
    inputValue?: string;
    /**
     * The default input text value when used in uncontrolled mode.
     * @defaultValue ''
     */
    defaultInputValue?: string;
    /**
     * An array of options to display.
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
     * When present, it specifies that the component should be disabled.
     * @defaultValue false
     */
    disabled?: boolean;
    /**
     * The locale to use for localization.
     */
    locale?: string;
    /**
     * When present, allows selecting multiple options.
     * @defaultValue false
     */
    multiple?: boolean;
    /**
     * When enabled, requires holding the meta key to select/deselect.
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
     * Minimum number of characters to initiate a search.
     * @defaultValue 1
     */
    minLength?: number;
    /**
     * Delay between keystrokes to wait before sending a query.
     * @defaultValue 300
     */
    delay?: number;
    /**
     * A valid query selector or an HTMLElement to specify where the overlay gets attached.
     * @defaultValue 'body'
     */
    appendTo?: 'body' | 'self' | HTMLElement;
    /**
     * When present, it specifies that an input field must be filled out before submitting the form.
     * @defaultValue false
     */
    forceSelection?: boolean;
    /**
     * When enabled, a search query is sent on focus.
     * @defaultValue false
     */
    completeOnFocus?: boolean;
    /**
     * Index of the element in tabbing order.
     * @defaultValue 0
     */
    tabIndex?: number;
    /**
     * Name of the input element.
     */
    name?: string;
    /**
     * When present, it specifies that an input field is required.
     */
    required?: boolean;
    /**
     * Specifies the behavior of the dropdown button.
     * @defaultValue 'blank'
     */
    dropdownMode?: 'blank' | 'current';
    /**
     * Callback to invoke when the selected value changes.
     * @param {useAutoCompleteValueChangeEvent} event - Custom change event.
     */
    onValueChange?: (event: useAutoCompleteValueChangeEvent) => void;
    /**
     * Callback when the input value changes.
     * @param {useAutoCompleteInputValueChangeEvent} event - The input value change event.
     */
    onInputValueChange?: (event: useAutoCompleteInputValueChangeEvent) => void;
    /**
     * Callback to invoke to search for suggestions.
     * @param {useAutoCompleteCompleteEvent} event - Custom complete event.
     */
    onComplete?: (event: useAutoCompleteCompleteEvent) => void;
}

/**
 * Defines valid state in useAutoComplete.
 */
export interface useAutoCompleteState {
    /**
     * The current selected value.
     */
    value?: unknown;
    /**
     * The current input text value.
     */
    inputValue?: string;
    /**
     * Whether the overlay is visible.
     */
    overlayVisible?: boolean;
    /**
     * Whether the clear icon should be shown.
     */
    showClearIcon?: boolean;
    /**
     * Whether the input is focused.
     */
    focused?: boolean;
    /**
     * The index of the currently focused option. -1 if no option is focused.
     */
    focusedOptionIndex?: number;
    /**
     * Whether a search is in progress.
     */
    searching?: boolean;
}

/**
 * Defines the methods and properties exposed by useAutoComplete.
 */
export interface useAutoCompleteExposes {
    /**
     * The state of the useAutoComplete.
     */
    state: useAutoCompleteState;
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
     * Callback when the input value changes.
     * @param {React.ChangeEvent<HTMLInputElement>} event - The change event.
     */
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    /**
     * Callback when the input receives focus.
     * @param {React.FocusEvent<HTMLInputElement>} event - The focus event.
     */
    onFocus: (event: React.FocusEvent<HTMLInputElement>) => void;
    /**
     * Callback when the input loses focus.
     * @param {React.FocusEvent<HTMLInputElement>} event - The focus event.
     */
    onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
    /**
     * Callback when a key is pressed in the input.
     * @param {React.KeyboardEvent<HTMLInputElement>} event - The keyboard event.
     */
    onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    /**
     * Callback when the dropdown trigger is clicked.
     * @param {React.MouseEvent<HTMLButtonElement>} event - The mouse event.
     */
    onTriggerClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    /**
     * Callback when the clear button is clicked.
     * @param {React.MouseEvent<HTMLButtonElement>} event - The mouse event.
     */
    onClearClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    /**
     * Callback when the overlay enters.
     */
    onOverlayEnter: () => void;
    /**
     * Callback after the overlay has entered.
     */
    onOverlayAfterEnter: () => void;
    /**
     * Callback when an option is selected.
     * @param {object} event - The selection event from Listbox.
     */
    onOptionSelect: (event: { originalEvent: React.SyntheticEvent; value: unknown }) => void;
    /**
     * Changes the visibility state of the overlay.
     * @param {boolean} isVisible - The new visibility state.
     */
    changeVisibleState: (isVisible: boolean) => void;
    /**
     * Gets the ID of the currently focused option for aria-activedescendant.
     * @returns {string | null} The focused option ID or null if no option is focused.
     */
    getFocusedOptionId: () => string | null;
}

/**
 * Instance of useAutoComplete headless.
 */
export type useAutoCompleteInstance = HeadlessInstance<useAutoCompleteProps, useAutoCompleteState, useAutoCompleteExposes>;
