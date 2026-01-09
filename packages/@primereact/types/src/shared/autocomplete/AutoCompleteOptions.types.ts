/**
 *
 * AutoCompleteOptions is the options container component for the AutoComplete dropdown list.
 *
 * [Live Demo](https://www.primereact.org/autocomplete/)
 *
 * @module autocompleteoptions
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import { ListboxRootInstance } from '@primereact/types/shared/listbox';
import type { BaseComponentProps, PassThroughType } from '..';
import type { AutoCompleteRootInstance } from './AutoCompleteRoot.types';

/**
 * Defines passthrough(pt) options type in AutoCompleteOptions component.
 */
export type AutoCompleteOptionsPassThroughType<E> = PassThroughType<AutoCompleteOptionsInstance, E>;

/**
 * Defines passthrough(pt) options of AutoCompleteOptions component.
 */
export interface AutoCompleteOptionsPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: AutoCompleteOptionsPassThroughType<React.HTMLAttributes<HTMLUListElement>>;
}

/**
 * Defines valid properties in AutoCompleteOptions component.
 */
export interface AutoCompleteOptionsProps extends BaseComponentProps<AutoCompleteOptionsInstance, unknown, AutoCompleteOptionsPassThrough> {}

/**
 * Defines valid state in AutoCompleteOptions component.
 */
export interface AutoCompleteOptionsState {}

/**
 * Defines the methods and properties exposed by AutoCompleteOptions component.
 */
export interface AutoCompleteOptionsExposes {
    /**
     * The AutoComplete component instance.
     */
    autocomplete: AutoCompleteRootInstance | undefined | null;
    /**
     * The Listbox component instance.
     */
    listbox: ListboxRootInstance | undefined | null;
}

/**
 * Instance of AutoCompleteOptions component.
 */
export type AutoCompleteOptionsInstance = ComponentInstance<AutoCompleteOptionsProps, AutoCompleteOptionsState, AutoCompleteOptionsExposes>;
