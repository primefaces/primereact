/**
 *
 * ListBox is used to select one or more values from a list of items.
 *
 * [Live Demo](https://www.primereact.org/listbox/)
 *
 * @module listbox
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { useListboxExposes, useListboxProps, useListboxState, useListboxValueChangeEvent } from './useListbox.types';

/**
 * Defines passthrough(pt) options type in Listbox component.
 */
export type ListboxPassThroughType<E> = PassThroughType<ListboxInstance, E>;

/**
 * Defines passthrough(pt) options of Listbox component.
 */
export interface ListboxPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: ListboxPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the first hidden focusable element's DOM element.
     */
    firstHiddenFocusable?: ListboxPassThroughType<React.HTMLAttributes<HTMLSpanElement>>;
    /**
     * Used to pass attributes to the last hidden focusable element's DOM element.
     */
    lastHiddenFocusable?: ListboxPassThroughType<React.HTMLAttributes<HTMLSpanElement>>;
    /**
     * Used to pass attributes to the header's DOM element.
     */
    header?: ListboxPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the footer's DOM element.
     */
    footer?: ListboxPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the list's DOM element.
     */
    list?: ListboxPassThroughType<React.HTMLAttributes<HTMLUListElement>>;
    /**
     * Used to pass attributes to the empty message's DOM element.
     */
    empty?: ListboxPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the option group's DOM element.
     */
    optionGroup?: ListboxPassThroughType<React.HTMLAttributes<HTMLLIElement>>;
    /**
     * Used to pass attributes to the option's DOM element.
     */
    option?: ListboxPassThroughType<React.HTMLAttributes<HTMLLIElement>>;
    /**
     * Used to pass attributes to the selection's DOM element.
     */
    selection?: ListboxPassThroughType<React.HTMLAttributes<HTMLElement>>;
    /**
     * Used to pass attributes to the filter's DOM element.
     */
    filter?: ListboxPassThroughType<React.HTMLAttributes<HTMLElement>>;
}

/**
 * Event fired when the listbox's value changes.
 * @extends useListboxValueChangeEvent
 */
export interface ListboxValueChangeEvent extends useListboxValueChangeEvent {}

/**
 * Defines valid properties in Listbox component.
 */
export interface ListboxProps extends BaseComponentProps<ListboxInstance, useListboxProps, ListboxPassThrough> {
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
export interface ListboxState extends useListboxState {}

/**
 * Defines the methods and properties exposed by Listbox component.
 * @extends useListboxExposes
 */
export interface ListboxExposes extends useListboxExposes {}

/**
 * Defines the CSS class names used in the Listbox component.
 */
export const ListboxClassNames = {
    /**
     * Class name of the root element.
     */
    root: 'p-listbox',
    /**
     * Class name of the header element.
     */
    header: 'p-listbox-header',
    /**
     * Class name of the footer element.
     */
    footer: 'p-listbox-footer',
    /**
     * Class name of the filter element.
     */
    pcFilter: 'p-listbox-filter',
    /**
     * Class name of the list element.
     */
    list: 'p-listbox-list',
    /**
     * Class name of the option group element.
     */
    optionGroup: 'p-listbox-option-group',
    /**
     * Class name of the option element.
     */
    option: 'p-listbox-option',
    /**
     * Class name of the selection element.
     */
    selection: 'p-listbox-selection',
    /**
     * Class name of the option check icon element.
     */
    optionCheckIcon: 'p-listbox-option-check-icon',
    /**
     * Class name of the option blank icon element.
     */
    optionBlankIcon: 'p-listbox-option-blank-icon',
    /**
     * Class name of the empty message element.
     */
    empty: 'p-listbox-empty-message'
} as const;

/**
 * Type representing the CSS class names used in the Listbox component.
 */
export type ListboxClassNamesType = (typeof ListboxClassNames)[keyof typeof ListboxClassNames];

/**
 * Instance of Listbox component.
 */
export type ListboxInstance = ComponentInstance<ListboxProps, ListboxState, ListboxExposes>;
