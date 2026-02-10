/**
 *
 * AutoCompleteValue is the value element for the AutoComplete component.
 *
 * [Live Demo](https://www.primereact.org/autocomplete/)
 *
 * @module autocompletevalue
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { AutoCompleteRootInstance } from './AutoCompleteRoot.types';

/**
 * Defines passthrough(pt) options type in AutoCompleteValue component.
 */
export type AutoCompleteValuePassThroughType<E> = PassThroughType<AutoCompleteValueInstance, E>;

/**
 * Defines passthrough(pt) options of AutoCompleteValue component.
 */
export interface AutoCompleteValuePassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: AutoCompleteValuePassThroughType<React.HTMLAttributes<HTMLInputElement>>;
}

/**
 * Defines valid properties in AutoCompleteValue component.
 */
export interface AutoCompleteValueProps extends BaseComponentProps<AutoCompleteValueInstance, unknown, AutoCompleteValuePassThrough> {}

/**
 * Defines valid state in AutoCompleteValue component.
 */
export interface AutoCompleteValueState {}

/**
 * Defines the methods and properties exposed by AutoCompleteValue component.
 */
export interface AutoCompleteValueExposes {
    /**
     * The AutoComplete component instance.
     */
    autocomplete: AutoCompleteRootInstance | undefined | null;
}

/**
 * Instance of AutoCompleteValue component.
 */
export type AutoCompleteValueInstance = ComponentInstance<AutoCompleteValueProps, AutoCompleteValueState, AutoCompleteValueExposes>;
