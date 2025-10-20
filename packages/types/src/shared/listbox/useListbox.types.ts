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
export interface useListboxChangeEvent {
    /**
     * The original event that triggered the change.
     */
    originalEvent: React.SyntheticEvent;
    /**
     * The value state of the listbox.
     */
    value: any;
}

/**
 * Props for the useListbox hook.
 */
export interface useListboxProps {
    value: undefined;
    defaultValue: undefined;
    options?: unknown[];
    optionKey?: string;
    optionLabel?: string;
    optionValue?: string;
    optionDisabled?: string;
    optionGroupLabel?: string;
    optionGroupChildren?: string;
    disabled?: boolean;
    locale?: string;
    multiple?: boolean;
    metaKeySelection?: boolean;
    autoOptionFocus?: boolean;
    selectOnFocus?: boolean;
    focusOnHover?: boolean;
    onValueChange?: (event: useListboxChangeEvent) => void;
}

/**
 * Defines valid state in useListbox.
 */
export interface useListboxState {
    value?: unknown;
    focused?: boolean;
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
     * Reference to the content element of the listbox.
     */
    contentRef: React.RefObject<HTMLDivElement | null>;
    getOptionId?: (index: number) => string;
    getOptionLabel?: (option: unknown) => string | null;
    getOptionValue?: (option: unknown) => unknown;
    isOptionDisabled?: (option: unknown) => boolean;
    isOptionGroup?: (option: unknown) => boolean;
    getOptionGroupLabel?: (optionGroup: unknown) => string | null;
    getOptionGroupChildren?: (optionGroup: unknown) => unknown[] | null;
    getFocusedOptionId?: () => string | null;
    getAriaSetSize?: () => number;
    getAriaPosInset?: (index: number) => number;
    onFirstHiddenFocus?: (event: FocusEvent) => void;
    onLastHiddenFocus?: (event: FocusEvent) => void;
    onFocusOut?: (event: FocusEvent) => void;
    onListFocus?: () => void;
    onListBlur?: (event: FocusEvent) => void;
    onListKeyDown?: (event: KeyboardEvent) => void;
    onOptionSelect?: (event: MouseEvent | KeyboardEvent, option: unknown, index?: number) => void;
    onOptionMouseDown?: (event: MouseEvent, index: number) => void;
    onOptionMouseMove?: (event: MouseEvent, index: number) => void;
    onOptionTouchEnd?: (event: TouchEvent, index: number) => void;
    onFilterChange?: (event: Event) => void;
    onFilterBlur?: (event: FocusEvent) => void;
    onFilterKeyDown?: (event: KeyboardEvent) => void;
    isOptionMatched?: (option: unknown, searchValue: string) => boolean;
    isValidOption?: (option: unknown) => boolean;
    isValidSelectedOption?: (option: unknown) => boolean;
    isSelected?: (option: unknown) => boolean;
    changeFocusedOptionIndex?: (event: MouseEvent | KeyboardEvent, index: number) => void;
    scrollInView?: (index: number) => void;
    updateModel?: (event: MouseEvent | KeyboardEvent, value: unknown) => void;
    equalityKey?: () => string | undefined;
    hasValue?: () => boolean;
}

/**
 * Instance of useListbox headless.
 */
export type useListboxInstance = HeadlessInstance<useListboxProps, useListboxState, useListboxExposes>;
