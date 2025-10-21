/**
 *
 * ListboxFilter is a component that provides filtering capabilities to the Listbox component.
 *
 * [Live Demo](https://www.primereact.org/listbox/)
 *
 * @module listboxfilter
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { ListboxInstance } from './Listbox.types';

/**
 * Defines passthrough(pt) options type in ListboxFilter component.
 */
export type ListboxFilterPassThroughType<E> = PassThroughType<ListboxFilterInstance, E>;

/**
 * Defines passthrough(pt) options of ListboxFilter component.
 */
export interface ListboxFilterPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: ListboxFilterPassThroughType<React.HTMLAttributes<HTMLSpanElement>>;
}

/**
 * Defines valid properties in ListboxFilter component.
 */
export interface ListboxFilterProps extends BaseComponentProps<ListboxFilterInstance, unknown, ListboxFilterPassThrough> {}

/**
 * Defines valid state in ListboxFilter component.
 */
export interface ListboxFilterState {}

/**
 * Defines the methods and properties exposed by ListboxFilter component.
 */
export interface ListboxFilterExposes {
    /**
     * The ListboxFilter component instance.
     */
    listbox: ListboxInstance | undefined | null;
}

/**
 * Instance of ListboxFilter component.
 */
export type ListboxFilterInstance = ComponentInstance<ListboxFilterProps, ListboxFilterState, ListboxFilterExposes>;
