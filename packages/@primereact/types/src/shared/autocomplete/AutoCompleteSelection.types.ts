/**
 *
 * AutoCompleteSelection is the clear button icon for the AutoComplete component.
 *
 * [Live Demo](https://www.primereact.org/autocomplete/)
 *
 * @module autocompleteselection
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import { ListboxRootInstance } from '@primereact/types/shared/listbox';
import type { BaseComponentProps, PassThroughType } from '..';
import type { AutoCompleteRootInstance } from './AutoCompleteRoot.types';

/**
 * Defines passthrough(pt) options type in AutoCompleteSelection component.
 */
export type AutoCompleteSelectionPassThroughType<E> = PassThroughType<AutoCompleteSelectionInstance, E>;

/**
 * Defines passthrough(pt) options of AutoCompleteSelection component.
 */
export interface AutoCompleteSelectionPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: AutoCompleteSelectionPassThroughType<React.HTMLAttributes<HTMLSpanElement>>;
}

/**
 * Defines valid properties in AutoCompleteSelection component.
 */
export interface AutoCompleteSelectionProps extends BaseComponentProps<AutoCompleteSelectionInstance, unknown, AutoCompleteSelectionPassThrough> {}

/**
 * Defines valid state in AutoCompleteSelection component.
 */
export interface AutoCompleteSelectionState {}

/**
 * Defines the methods and properties exposed by AutoCompleteSelection component.
 */
export interface AutoCompleteSelectionExposes {
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
 * Instance of AutoCompleteSelection component.
 */
export type AutoCompleteSelectionInstance = ComponentInstance<AutoCompleteSelectionProps, AutoCompleteSelectionState, AutoCompleteSelectionExposes>;
