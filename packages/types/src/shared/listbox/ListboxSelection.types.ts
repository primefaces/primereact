/**
 *
 * ListboxSelection is a component that displays the selection indicator (checkmark or checkbox) for each option in the Listbox component.
 *
 * [Live Demo](https://www.primereact.org/listbox/)
 *
 * @module listboxselection
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { ListboxInstance } from './Listbox.types';

/**
 * Defines passthrough(pt) options type in ListboxSelection component.
 */
export type ListboxSelectionPassThroughType<E> = PassThroughType<ListboxSelectionInstance, E>;

/**
 * Defines passthrough(pt) options of ListboxSelection component.
 */
export interface ListboxSelectionPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: ListboxSelectionPassThroughType<React.HTMLAttributes<HTMLElement>>;
}

/**
 * Defines valid properties in ListboxSelection component.
 */
export interface ListboxSelectionProps extends BaseComponentProps<ListboxSelectionInstance, unknown, ListboxSelectionPassThrough> {}

/**
 * Defines valid state in ListboxSelection component.
 */
export interface ListboxSelectionState {}

/**
 * Defines the methods and properties exposed by ListboxSelection component.
 */
export interface ListboxSelectionExposes {
    /**
     * The ListboxSelection component instance.
     */
    listbox: ListboxInstance | undefined | null;
}

/**
 * Instance of ListboxSelection component.
 */
export type ListboxSelectionInstance = ComponentInstance<ListboxSelectionProps, ListboxSelectionState, ListboxSelectionExposes>;
