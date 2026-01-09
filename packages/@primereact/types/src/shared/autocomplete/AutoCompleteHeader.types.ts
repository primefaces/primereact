/**
 *
 * AutoCompleteHeader is the header component for the AutoComplete dropdown panel.
 *
 * [Live Demo](https://www.primereact.org/autocomplete/)
 *
 * @module autocompleteheader
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { AutoCompleteRootInstance } from './AutoCompleteRoot.types';

/**
 * Defines passthrough(pt) options type in AutoCompleteHeader component.
 */
export type AutoCompleteHeaderPassThroughType<E> = PassThroughType<AutoCompleteHeaderInstance, E>;

/**
 * Defines passthrough(pt) options of AutoCompleteHeader component.
 */
export interface AutoCompleteHeaderPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: AutoCompleteHeaderPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in AutoCompleteHeader component.
 */
export interface AutoCompleteHeaderProps extends BaseComponentProps<AutoCompleteHeaderInstance, unknown, AutoCompleteHeaderPassThrough> {}

/**
 * Defines valid state in AutoCompleteHeader component.
 */
export interface AutoCompleteHeaderState {}

/**
 * Defines the methods and properties exposed by AutoCompleteHeader component.
 */
export interface AutoCompleteHeaderExposes {
    /**
     * The AutoComplete component instance.
     */
    autocomplete: AutoCompleteRootInstance | undefined | null;
}

/**
 * Instance of AutoCompleteHeader component.
 */
export type AutoCompleteHeaderInstance = ComponentInstance<AutoCompleteHeaderProps, AutoCompleteHeaderState, AutoCompleteHeaderExposes>;
