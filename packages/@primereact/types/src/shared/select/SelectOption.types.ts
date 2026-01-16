/**
 *
 * SelectOption is an individual option item in the Select component.
 *
 * [Live Demo](https://www.primereact.org/select/)
 *
 * @module selectoption
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { ListboxOptionInstance, ListboxRootInstance } from '@primereact/types/shared/listbox';
import type { BaseComponentProps, PassThroughType } from '..';
import type { SelectRootInstance } from './SelectRoot.types';

/**
 * Defines passthrough(pt) options type in SelectOption component.
 */
export type SelectOptionPassThroughType<E> = PassThroughType<SelectOptionInstance, E>;

/**
 * Defines passthrough(pt) options of SelectOption component.
 */
export interface SelectOptionPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: SelectOptionPassThroughType<React.HTMLAttributes<HTMLLIElement>>;
}

/**
 * Defines valid properties in SelectOption component.
 */
export interface SelectOptionProps extends BaseComponentProps<SelectOptionInstance, unknown, SelectOptionPassThrough> {
    /**
     * The option data object.
     */
    option?: unknown;
    /**
     * The index of the option in the list.
     */
    index?: number;
    /**
     * Whether the option is selected.
     */
    selected?: boolean;
    /**
     * Whether the option is focused.
     */
    focused?: boolean;
    /**
     * Whether the option is disabled.
     */
    disabled?: boolean;
}

/**
 * Defines valid state in SelectOption component.
 */
export interface SelectOptionState {}

/**
 * Defines the methods and properties exposed by SelectOption component.
 */
export interface SelectOptionExposes {
    /**
     * The Select component instance.
     */
    select: SelectRootInstance | undefined | null;
    /**
     * The Listbox component instance.
     */
    listbox: ListboxRootInstance | undefined | null;
    /**
     * The ListboxOption component instance.
     */
    optionInstance: ListboxOptionInstance | undefined | null;
    /**
     * The option data object.
     */
    option: unknown;
    /**
     * The index of the option.
     */
    index: number | undefined;
    /**
     * Whether this is a group header option.
     */
    group: boolean | undefined;
    /**
     * Whether the option is selected.
     */
    selected: boolean | undefined;
}

/**
 * Instance of SelectOption component.
 */
export type SelectOptionInstance = ComponentInstance<SelectOptionProps, SelectOptionState, SelectOptionExposes>;
