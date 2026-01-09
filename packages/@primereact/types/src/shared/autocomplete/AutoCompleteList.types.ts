/**
 *
 * AutoCompleteList is the list container for the AutoComplete component that wraps Listbox.
 *
 * [Live Demo](https://www.primereact.org/autocomplete/)
 *
 * @module autocompletelist
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { AutoCompleteRootInstance } from './AutoCompleteRoot.types';

/**
 * Defines passthrough(pt) options type in AutoCompleteList component.
 */
export type AutoCompleteListPassThroughType<E> = PassThroughType<AutoCompleteListInstance, E>;

/**
 * Defines passthrough(pt) options of AutoCompleteList component.
 */
export interface AutoCompleteListPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: AutoCompleteListPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in AutoCompleteList component.
 */
export interface AutoCompleteListProps extends BaseComponentProps<AutoCompleteListInstance, unknown, AutoCompleteListPassThrough> {}

/**
 * Defines valid state in AutoCompleteList component.
 */
export interface AutoCompleteListState {}

/**
 * Defines the methods and properties exposed by AutoCompleteList component.
 */
export interface AutoCompleteListExposes {
    /**
     * The AutoComplete component instance.
     */
    autocomplete: AutoCompleteRootInstance | undefined | null;
}

/**
 * Instance of AutoCompleteList component.
 */
export type AutoCompleteListInstance = ComponentInstance<AutoCompleteListProps, AutoCompleteListState, AutoCompleteListExposes>;
