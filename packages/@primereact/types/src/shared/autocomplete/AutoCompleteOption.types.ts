/**
 *
 * AutoCompleteOption is a single option item in the AutoComplete dropdown list.
 *
 * [Live Demo](https://www.primereact.org/autocomplete/)
 *
 * @module autocompleteoption
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import { ListboxOptionInstance, ListboxRootInstance } from '@primereact/types/shared/listbox';
import type { BaseComponentProps, PassThroughType } from '..';
import type { AutoCompleteRootInstance } from './AutoCompleteRoot.types';

/**
 * Defines passthrough(pt) options type in AutoCompleteOption component.
 */
export type AutoCompleteOptionPassThroughType<E> = PassThroughType<AutoCompleteOptionInstance, E>;

/**
 * Defines passthrough(pt) options of AutoCompleteOption component.
 */
export interface AutoCompleteOptionPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: AutoCompleteOptionPassThroughType<React.HTMLAttributes<HTMLLIElement>>;
}

/**
 * Defines valid properties in AutoCompleteOption component.
 */
export interface AutoCompleteOptionProps extends BaseComponentProps<AutoCompleteOptionInstance, unknown, AutoCompleteOptionPassThrough> {
    /**
     * The option data.
     */
    option?: unknown;
    /**
     * The index of the option.
     */
    index?: number;
    /**
     * Whether the option is selected.
     * @defaultValue false
     */
    selected?: boolean;
    /**
     * Whether the option is focused.
     * @defaultValue false
     */
    focused?: boolean;
    /**
     * Whether the option is disabled.
     * @defaultValue false
     */
    disabled?: boolean;
}

/**
 * Defines valid state in AutoCompleteOption component.
 */
export interface AutoCompleteOptionState {}

/**
 * Defines the methods and properties exposed by AutoCompleteOption component.
 */
export interface AutoCompleteOptionExposes {
    /**
     * The AutoComplete component instance.
     */
    autocomplete: AutoCompleteRootInstance | undefined | null;
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
 * Instance of AutoCompleteOption component.
 */
export type AutoCompleteOptionInstance = ComponentInstance<AutoCompleteOptionProps, AutoCompleteOptionState, AutoCompleteOptionExposes>;
