/**
 *
 * The useSelect manages the state and functionality of a select component.
 *
 * [Live Demo](https://www.primereact.org/select/)
 *
 * @module useselect
 * @group headless
 *
 */
import type { usePresence } from '@primereact/hooks/use-presence';
import type { HeadlessInstance } from '@primereact/types/core';
import type { useListboxInstance } from '@primereact/types/shared/listbox';
import * as React from 'react';

/**
 * Event fired when the select's value changes.
 */
export interface useSelectValueChangeEvent<E = React.SyntheticEvent> {
    /**
     * The original event that triggered the change.
     */
    originalEvent: E;
    /**
     * The selected value.
     */
    value: unknown;
    /**
     * The selected option object.
     */
    option?: unknown;
}

/**
 * Event object for the onOpenChange callback.
 */
export interface useSelectOpenChangeEvent {
    /**
     * The new value of the select's open state.
     */
    value: boolean;
}

/**
 * Event fired when the select's filter value changes.
 */
export interface useSelectFilterValueChangeEvent<E = React.SyntheticEvent> {
    /**
     * The original event that triggered the change.
     */
    originalEvent: E;
    /**
     * The current filter query.
     */
    query: string;
}

/**
 * Props for the useSelect hook.
 */
export interface useSelectProps {
    /**
     * The current selected value of the select.
     */
    value?: unknown;
    /**
     * The default selected value when used in uncontrolled mode.
     */
    defaultValue?: unknown;
    /**
     * The current filter text value (controlled).
     */
    filterValue?: string;
    /**
     * The default filter text value when used in uncontrolled mode.
     * @defaultValue ''
     */
    defaultFilterValue?: string;
    /**
     * Controlled open state of the select overlay.
     */
    open?: boolean;
    /**
     * Default open state for uncontrolled mode.
     */
    defaultOpen?: boolean;
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
     * When enabled, allows multiple items to be selected.
     * @defaultValue false
     */
    multiple?: boolean;
    /**
     * When enabled, displays a filter input in the dropdown.
     * @defaultValue false
     */
    filter?: boolean;
    /**
     * Defines how the filter should match options.
     * @defaultValue 'contains'
     */
    filterMatchMode?: 'contains' | 'startsWith' | 'endsWith' | 'equals';
    /**
     * A valid query selector or an HTMLElement to specify where the overlay gets attached.
     * @defaultValue 'body'
     */
    appendTo?: 'body' | 'self' | HTMLElement;
    /**
     * Used to define a string that labels the input element.
     */
    ariaLabel?: string;
    /**
     * Identifier of the underlying input element.
     */
    ariaLabelledBy?: string;
    /**
     * Callback to invoke when the selected value changes.
     * @param {useSelectValueChangeEvent} event - Custom change event.
     */
    onValueChange?: (event: useSelectValueChangeEvent) => void;
    /**
     * Callback when the filter value changes.
     * @param {useSelectFilterValueChangeEvent} event - The filter value change event.
     */
    onFilterValueChange?: (event: useSelectFilterValueChangeEvent) => void;
    /**
     * Callback to invoke when the open state changes.
     * @param {useSelectOpenChangeEvent} event - Custom change event.
     */
    onOpenChange?: (event: useSelectOpenChangeEvent) => void;
}

/**
 * Defines valid state in useSelect.
 */
export interface useSelectState {
    /**
     * The current selected value.
     */
    value: unknown | undefined;
    /**
     * Whether the overlay is open.
     */
    opened: boolean | undefined;
    /**
     * Whether the trigger is focused.
     */
    focused: boolean;
    /**
     * The index of the currently focused option. -1 if no option is focused.
     */
    focusedOptionIndex: number;
    /**
     * The anchor (trigger) element.
     */
    anchorEl: HTMLElement | null;
    /**
     * The positioner element.
     */
    positionerEl: HTMLDivElement | null;
}

/**
 * Defines the methods and properties exposed by useSelect.
 */
export interface useSelectExposes {
    /**
     * The state of the useSelect.
     */
    state: useSelectState;
    /**
     * The listbox instance used internally for option management.
     */
    listbox: useListboxInstance;
    /**
     * The presence state for managing mount/unmount transitions.
     */
    presence: ReturnType<typeof usePresence>;
    /**
     * Reference to the trigger element.
     */
    triggerRef: React.RefObject<HTMLElement | null>;
    /**
     * Sets the anchor (trigger) element reference.
     */
    setAnchorRef: (node: HTMLElement | null) => void;
    /**
     * Sets the positioner element reference.
     */
    setPositionerRef: (node: HTMLDivElement | null) => void;
    /**
     * Callback when the container is clicked.
     * @param {React.MouseEvent<HTMLDivElement>} event - The mouse event.
     */
    onContainerClick: (event: React.MouseEvent<HTMLDivElement>) => void;
    /**
     * Callback when a key is pressed on the trigger.
     * @param {React.KeyboardEvent<HTMLButtonElement>} event - The keyboard event.
     */
    onKeyDown: (event: React.KeyboardEvent<HTMLElement>) => void;
    /**
     * Callback when a key is pressed in the filter input.
     * @param {React.KeyboardEvent<HTMLInputElement>} event - The keyboard event.
     */
    onFilterKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    /**
     * Callback when the clear button is clicked.
     * @param {React.MouseEvent<HTMLButtonElement>} event - The mouse event.
     */
    onClearClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    /**
     * Callback when an option is selected.
     * @param {object} event - The selection event from Listbox.
     */
    onOptionSelect: (event: { originalEvent: React.SyntheticEvent; value: unknown }) => void;
    /**
     * Gets the ID of the currently focused option for aria-activedescendant.
     * @returns {string | null} The focused option ID or null if no option is focused.
     */
    getFocusedOptionId: () => string | null;
    /**
     * Gets the label of the currently selected option.
     * @returns {unknown} The selected option label or null.
     */
    getSelectedOptionLabel: () => unknown;
    /**
     * Checks if there is a selected value.
     * @returns {boolean} True if there is a value.
     */
    hasValue: () => boolean;
    /**
     * Shows the overlay.
     */
    show: () => void;
    /**
     * Hides the overlay.
     */
    hide: () => void;
    /**
     * Toggles the overlay visibility.
     * @param {React.SyntheticEvent} event - The triggering event.
     */
    toggle: (event: React.SyntheticEvent) => void;
}

/**
 * Instance of useSelect headless.
 */
export type useSelectInstance = HeadlessInstance<useSelectProps, useSelectState, useSelectExposes>;
