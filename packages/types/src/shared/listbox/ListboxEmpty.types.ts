/**
 *
 * ListboxEmpty is a component that displays a message when the listbox is empty.
 *
 * [Live Demo](https://www.primereact.org/listbox/)
 *
 * @module listboxempty
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { ListboxInstance } from './Listbox.types';

/**
 * Defines passthrough(pt) options type in ListboxEmpty component.
 */
export type ListboxEmptyPassThroughType<E> = PassThroughType<ListboxEmptyInstance, E>;

/**
 * Defines passthrough(pt) options of ListboxEmpty component.
 */
export interface ListboxEmptyPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: ListboxEmptyPassThroughType<React.HTMLAttributes<HTMLSpanElement>>;
}

/**
 * Defines valid properties in ListboxEmpty component.
 */
export interface ListboxEmptyProps extends BaseComponentProps<ListboxEmptyInstance, unknown, ListboxEmptyPassThrough> {}

/**
 * Defines valid state in ListboxEmpty component.
 */
export interface ListboxEmptyState {}

/**
 * Defines the methods and properties exposed by ListboxEmpty component.
 */
export interface ListboxEmptyExposes {
    /**
     * The ListboxEmpty component instance.
     */
    listbox: ListboxInstance | undefined | null;
}

/**
 * Instance of ListboxEmpty component.
 */
export type ListboxEmptyInstance = ComponentInstance<ListboxEmptyProps, ListboxEmptyState, ListboxEmptyExposes>;
