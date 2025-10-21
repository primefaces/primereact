/**
 *
 * ListboxHeader is a component that represents the header section of the listbox.
 *
 * [Live Demo](https://www.primereact.org/listbox/)
 *
 * @module listboxheader
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { ListboxInstance } from './Listbox.types';

/**
 * Defines passthrough(pt) options type in ListboxHeader component.
 */
export type ListboxHeaderPassThroughType<E> = PassThroughType<ListboxHeaderInstance, E>;

/**
 * Defines passthrough(pt) options of ListboxHeader component.
 */
export interface ListboxHeaderPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: ListboxHeaderPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in ListboxHeader component.
 */
export interface ListboxHeaderProps extends BaseComponentProps<ListboxHeaderInstance, unknown, ListboxHeaderPassThrough> {}

/**
 * Defines valid state in ListboxHeader component.
 */
export interface ListboxHeaderState {}

/**
 * Defines the methods and properties exposed by ListboxHeader component.
 */
export interface ListboxHeaderExposes {
    /**
     * The ListboxHeader component instance.
     */
    listbox: ListboxInstance | undefined | null;
}

/**
 * Instance of ListboxHeader component.
 */
export type ListboxHeaderInstance = ComponentInstance<ListboxHeaderProps, ListboxHeaderState, ListboxHeaderExposes>;
