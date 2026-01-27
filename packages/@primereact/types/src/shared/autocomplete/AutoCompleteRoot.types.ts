/**
 *
 * AutoComplete is an input component that provides real-time suggestions when being typed.
 *
 * [Live Demo](https://www.primereact.org/autocomplete/)
 *
 * @module autocompleteroot
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps } from '..';
import type { useAutoCompleteCompleteEvent, useAutoCompleteExposes, useAutoCompleteInputValueChangeEvent, useAutoCompleteOpenChangeEvent, useAutoCompleteProps, useAutoCompleteState, useAutoCompleteValueChangeEvent } from './useAutoComplete.types';
import type { PassThroughType } from '..';

/**
 * Defines passthrough(pt) options type in AutoComplete component.
 */
export type AutoCompleteRootPassThroughType<E> = PassThroughType<AutoCompleteRootInstance, E>;

/**
 * Defines passthrough(pt) options of AutoComplete component.
 */
export interface AutoCompleteRootPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: AutoCompleteRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the trigger's DOM element.
     */
    trigger?: AutoCompleteRootPassThroughType<React.HTMLAttributes<HTMLButtonElement>>;
    /**
     * Used to pass attributes to the pcInputText's DOM element.
     */
    pcInputText?: AutoCompleteRootPassThroughType<React.HTMLAttributes<HTMLInputElement>>;
    /**
     * Used to pass attributes to the portal's DOM element.
     */
    portal?: AutoCompleteRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the panel's DOM element.
     */
    panel?: AutoCompleteRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the pcListbox's DOM element.
     */
    pcListbox?: AutoCompleteRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the options' DOM element.
     */
    options?: AutoCompleteRootPassThroughType<React.HTMLAttributes<HTMLUListElement>>;
    /**
     * Used to pass attributes to the option's DOM element.
     */
    option?: AutoCompleteRootPassThroughType<React.HTMLAttributes<HTMLLIElement>>;
    /**
     * Used to pass attributes to the clearIcon's DOM element.
     */
    clearIcon?: AutoCompleteRootPassThroughType<React.HTMLAttributes<HTMLSpanElement>>;
    /**
     * Used to pass attributes to the selection's DOM element.
     */
    selection?: AutoCompleteRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the header's DOM element.
     */
    header?: AutoCompleteRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the footer's DOM element.
     */
    footer?: AutoCompleteRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the empty's DOM element.
     */
    empty?: AutoCompleteRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Event fired when the autocomplete's value changes.
 * @extends useAutoCompleteValueChangeEvent
 */
export interface AutoCompleteValueChangeEvent extends useAutoCompleteValueChangeEvent {
    /**
     * The new value of the autocomplete.
     */
    value: string;
    /**
     * The selected option.
     */
    option?: unknown;
}

/**
 * Event fired when the autocomplete's input value changes.
 * @extends useAutoCompleteInputValueChangeEvent
 */
export interface AutoCompleteInputValueChangeEvent extends useAutoCompleteInputValueChangeEvent {
    /**
     * The current input value.
     */
    query: string;
}

/**
 * Event fired when the autocomplete's search is completed.
 * @extends useAutoCompleteCompleteEvent
 */
export interface AutoCompleteCompleteEvent extends useAutoCompleteCompleteEvent {
    /**
     * The current query string.
     */
    query: string;
}

/**
 * Event object for the onOpenChange callback.
 * @extends useAutoCompleteOpenChangeEvent
 */
export interface AutoCompleteOpenChangeEvent extends useAutoCompleteOpenChangeEvent {
    /**
     * The new value of the autocomplete's open state.
     */
    value: boolean;
}

/**
 * Defines valid properties in AutoComplete component.
 */
export interface AutoCompleteRootProps extends BaseComponentProps<AutoCompleteRootInstance, Omit<useAutoCompleteProps, 'onValueChange' | 'onInputValueChange' | 'onComplete'>, AutoCompleteRootPassThrough> {
    /**
     * When present, it specifies that the component should have invalid state style.
     */
    invalid?: boolean | undefined;
    /**
     * Specifies the input variant of the component.
     */
    variant?: 'outlined' | 'filled' | undefined;
    /**
     * Spans 100% width of the container when enabled.
     */
    fluid?: boolean | undefined;
    /**
     * When present, it specifies that the element should be disabled.
     * @default false
     */
    disabled?: boolean | undefined;
    /**
     * Defines the size of the checkbox.
     */
    size?: 'small' | 'large' | undefined;
    /**
     * Style class of the input field.
     */
    inputClassName?: string | undefined;
    /**
     * Inline style of the input field.
     */
    inputStyle?: React.CSSProperties | undefined;
    /**
     * Callback fired when the autocomplete's input value is changed.
     * @param event The event that triggered the change.
     * @param event.originalEvent The original event that triggered the change.
     * @param event.value The new value of the autocomplete.
     * @param event.option The selected option.
     * @returns void
     */
    onValueChange?: (event: AutoCompleteValueChangeEvent) => void;
    /**
     * Callback fired when the autocomplete's input value is changed.
     * @param event The event that triggered the change.
     * @param event.originalEvent The original event that triggered the change.
     * @param event.query The query string of the autocomplete.
     * @returns void
     */
    onInputValueChange?: (event: AutoCompleteInputValueChangeEvent) => void;
    /**
     * Callback fired when the autocomplete's search is completed.
     * @param event The event that triggered the change.
     * @param event.originalEvent The original event that triggered the change.
     * @param event.query The query string of the autocomplete.
     * @returns void
     */
    onComplete?: (event: AutoCompleteCompleteEvent) => void;
}

/**
 * Defines valid state in AutoComplete component.
 * @extends useAutoCompleteState
 */
export interface AutoCompleteRootState extends useAutoCompleteState {}

/**
 * Defines the methods and properties exposed by AutoComplete component.
 * @extends useAutoCompleteExposes
 */
export interface AutoCompleteRootExposes extends useAutoCompleteExposes {}

/**
 * Instance of AutoCompleteRoot component.
 */
export type AutoCompleteRootInstance = ComponentInstance<AutoCompleteRootProps, AutoCompleteRootState, AutoCompleteRootExposes>;
