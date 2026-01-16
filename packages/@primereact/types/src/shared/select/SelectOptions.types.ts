/**
 *
 * SelectOptions is the options container for the Select component.
 *
 * [Live Demo](https://www.primereact.org/select/)
 *
 * @module selectoptions
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { ListboxRootInstance } from '@primereact/types/shared/listbox';
import type { BaseComponentProps, PassThroughType } from '..';
import type { SelectRootInstance } from './SelectRoot.types';

/**
 * Defines passthrough(pt) options type in SelectOptions component.
 */
export type SelectOptionsPassThroughType<E> = PassThroughType<SelectOptionsInstance, E>;

/**
 * Defines passthrough(pt) options of SelectOptions component.
 */
export interface SelectOptionsPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: SelectOptionsPassThroughType<React.HTMLAttributes<HTMLUListElement>>;
}

/**
 * Defines valid properties in SelectOptions component.
 */
export interface SelectOptionsProps extends BaseComponentProps<SelectOptionsInstance, unknown, SelectOptionsPassThrough> {}

/**
 * Defines valid state in SelectOptions component.
 */
export interface SelectOptionsState {}

/**
 * Defines the methods and properties exposed by SelectOptions component.
 */
export interface SelectOptionsExposes {
    /**
     * The Select component instance.
     */
    select: SelectRootInstance | undefined | null;
    /**
     * The Listbox component instance.
     */
    listbox: ListboxRootInstance | undefined | null;
}

/**
 * Instance of SelectOptions component.
 */
export type SelectOptionsInstance = ComponentInstance<SelectOptionsProps, SelectOptionsState, SelectOptionsExposes>;
