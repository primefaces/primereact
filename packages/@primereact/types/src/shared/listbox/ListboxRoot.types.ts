/**
 *
 * ListBox is used to select one or more values from a list of items.
 *
 * [Live Demo](https://www.primereact.org/listbox/)
 *
 * @module listboxroot
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { useListboxExposes, useListboxProps, useListboxState, useListboxValueChangeEvent } from './useListbox.types';

/**
 * Defines passthrough(pt) options type in Listbox component.
 */
export type ListboxRootPassThroughType<E> = PassThroughType<ListboxRootInstance, E>;

/**
 * Defines passthrough(pt) options of Listbox component.
 */
export interface ListboxRootPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: ListboxRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the first hidden focusable element's DOM element.
     */
    firstHiddenFocusable?: ListboxRootPassThroughType<React.HTMLAttributes<HTMLSpanElement>>;
    /**
     * Used to pass attributes to the last hidden focusable element's DOM element.
     */
    lastHiddenFocusable?: ListboxRootPassThroughType<React.HTMLAttributes<HTMLSpanElement>>;
    /**
     * Used to pass attributes to the header's DOM element.
     */
    header?: ListboxRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the footer's DOM element.
     */
    footer?: ListboxRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the list's DOM element.
     */
    list?: ListboxRootPassThroughType<React.HTMLAttributes<HTMLUListElement>>;
    /**
     * Used to pass attributes to the empty message's DOM element.
     */
    empty?: ListboxRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the option group's DOM element.
     */
    optionGroup?: ListboxRootPassThroughType<React.HTMLAttributes<HTMLLIElement>>;
    /**
     * Used to pass attributes to the option's DOM element.
     */
    option?: ListboxRootPassThroughType<React.HTMLAttributes<HTMLLIElement>>;
    /**
     * Used to pass attributes to the selection's DOM element.
     */
    selection?: ListboxRootPassThroughType<React.HTMLAttributes<HTMLElement>>;
    /**
     * Used to pass attributes to the filter's DOM element.
     */
    filter?: ListboxRootPassThroughType<React.HTMLAttributes<HTMLElement>>;
}

/**
 * Event fired when the listbox's value changes.
 * @extends useListboxValueChangeEvent
 */
export interface ListboxRootValueChangeEvent extends useListboxValueChangeEvent {}

/**
 * Defines valid properties in Listbox component.
 */
export interface ListboxRootProps extends BaseComponentProps<ListboxRootInstance, useListboxProps, ListboxRootPassThrough> {
    /**
     * When enabled, displays a checkmark icon next to the selected option.
     * @defaultValue false
     */
    checkmark?: boolean;
    /**
     * When enabled, displays checkboxes for multiple selection mode.
     * @defaultValue false
     */
    checkbox?: boolean;
    /**
     * When present, it specifies that the component should have invalid state style.
     * @defaultValue false
     */
    invalid?: boolean;
    /**
     * Index of the element in tabbing order.
     * @defaultValue 0
     */
    tabIndex?: number;
}

/**
 * Defines valid state in Listbox component.
 * @extends useListboxState
 */
export interface ListboxRootState extends useListboxState {}

/**
 * Defines the methods and properties exposed by Listbox component.
 * @extends useListboxExposes
 */
export interface ListboxRootExposes extends useListboxExposes {}

/**
 * Instance of Listbox component.
 */
export type ListboxRootInstance = ComponentInstance<ListboxRootProps, ListboxRootState, ListboxRootExposes>;
