/**
 *
 * AutoCompleteEmpty is the empty state component for the AutoComplete component.
 *
 * [Live Demo](https://www.primereact.org/autocomplete/)
 *
 * @module autocompleteempty
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { AutoCompleteRootInstance } from './AutoCompleteRoot.types';

/**
 * Defines passthrough(pt) options type in AutoCompleteEmpty component.
 */
export type AutoCompleteEmptyPassThroughType<E> = PassThroughType<AutoCompleteEmptyInstance, E>;

/**
 * Defines passthrough(pt) options of AutoCompleteEmpty component.
 */
export interface AutoCompleteEmptyPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: AutoCompleteEmptyPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in AutoCompleteEmpty component.
 */
export interface AutoCompleteEmptyProps extends BaseComponentProps<AutoCompleteEmptyInstance, unknown, AutoCompleteEmptyPassThrough> {}

/**
 * Defines valid state in AutoCompleteEmpty component.
 */
export interface AutoCompleteEmptyState {}

/**
 * Defines the methods and properties exposed by AutoCompleteEmpty component.
 */
export interface AutoCompleteEmptyExposes {
    /**
     * The AutoComplete component instance.
     */
    autocomplete: AutoCompleteRootInstance | undefined | null;
}

/**
 * Instance of AutoCompleteEmpty component.
 */
export type AutoCompleteEmptyInstance = ComponentInstance<AutoCompleteEmptyProps, AutoCompleteEmptyState, AutoCompleteEmptyExposes>;
