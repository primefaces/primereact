/**
 *
 * ListboxFooter is a component that represents the footer section of the listbox.
 *
 * [Live Demo](https://www.primereact.org/listbox/)
 *
 * @module listboxfooter
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { ListboxInstance } from './Listbox.types';

/**
 * Defines passthrough(pt) options type in ListboxFooter component.
 */
export type ListboxFooterPassThroughType<E> = PassThroughType<ListboxFooterInstance, E>;

/**
 * Defines passthrough(pt) options of ListboxFooter component.
 */
export interface ListboxFooterPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: ListboxFooterPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in ListboxFooter component.
 */
export interface ListboxFooterProps extends BaseComponentProps<ListboxFooterInstance, unknown, ListboxFooterPassThrough> {}

/**
 * Defines valid state in ListboxFooter component.
 */
export interface ListboxFooterState {}

/**
 * Defines the methods and properties exposed by ListboxFooter component.
 */
export interface ListboxFooterExposes {
    /**
     * The ListboxFooter component instance.
     */
    listbox: ListboxInstance | undefined | null;
}

/**
 * Instance of ListboxFooter component.
 */
export type ListboxFooterInstance = ComponentInstance<ListboxFooterProps, ListboxFooterState, ListboxFooterExposes>;
