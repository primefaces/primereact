/**
 *
 * ListboxOption is a component that displays an option in the listbox.
 *
 * [Live Demo](https://www.primereact.org/listbox/)
 *
 * @module listboxoption
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { ListboxInstance } from './Listbox.types';

/**
 * Defines passthrough(pt) options type in ListboxOption component.
 */
export type ListboxOptionPassThroughType<E> = PassThroughType<ListboxOptionInstance, E>;

/**
 * Defines passthrough(pt) options of ListboxOption component.
 */
export interface ListboxOptionPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: ListboxOptionPassThroughType<React.HTMLAttributes<HTMLSpanElement>>;
}

/**
 * Defines valid properties in ListboxOption component.
 */
export interface ListboxOptionProps extends BaseComponentProps<ListboxOptionInstance, unknown, ListboxOptionPassThrough> {
    /**
     * When enabled, renders the option as a group header.
     * @defaultValue false
     */
    group?: boolean;
    /**
     * Unique key for the option. Used for identification and selection.
     */
    uKey?: PropertyKey;
    /**
     * Index of the option in the list.
     */
    index?: number;
}

/**
 * Defines valid state in ListboxOption component.
 */
export interface ListboxOptionState {}

/**
 * Defines the methods and properties exposed by ListboxOption component.
 */
export interface ListboxOptionExposes {
    /**
     * Reference to the parent Listbox component instance.
     */
    listbox: ListboxInstance | undefined | null;
    /**
     * The option data object.
     */
    option: unknown;
    /**
     * The index of the option in the list.
     */
    index: number | undefined;
    /**
     * Whether this option is a group header.
     */
    group: boolean | undefined;
    /**
     * Whether this option is currently selected.
     */
    selected: boolean | undefined;
}

/**
 * Instance of ListboxOption component.
 */
export type ListboxOptionInstance = ComponentInstance<ListboxOptionProps, ListboxOptionState, ListboxOptionExposes>;
