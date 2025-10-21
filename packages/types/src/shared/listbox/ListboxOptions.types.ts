/**
 *
 * ListboxOptions is a component that renders the list of options within the Listbox component.
 *
 * [Live Demo](https://www.primereact.org/listbox/)
 *
 * @module listboxoptions
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { ListboxInstance } from './Listbox.types';

/**
 * Defines passthrough(pt) options type in ListboxOptions component.
 */
export type ListboxOptionsPassThroughType<E> = PassThroughType<ListboxOptionsInstance, E>;

/**
 * Defines passthrough(pt) options of ListboxOptions component.
 */
export interface ListboxOptionsPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: ListboxOptionsPassThroughType<React.HTMLAttributes<HTMLSpanElement>>;
}

/**
 * Defines valid properties in ListboxOptions component.
 */
export interface ListboxOptionsProps extends BaseComponentProps<ListboxOptionsInstance, unknown, ListboxOptionsPassThrough> {}

/**
 * Defines valid state in ListboxOptions component.
 */
export interface ListboxOptionsState {}

/**
 * Defines the methods and properties exposed by ListboxOptions component.
 */
export interface ListboxOptionsExposes {
    /**
     * The ListboxOptions component instance.
     */
    listbox: ListboxInstance | undefined | null;
    /**
     * The options available in the Listbox.
     */
    options: unknown[] | undefined | null;
}

/**
 * Instance of ListboxOptions component.
 */
export type ListboxOptionsInstance = ComponentInstance<ListboxOptionsProps, ListboxOptionsState, ListboxOptionsExposes>;
