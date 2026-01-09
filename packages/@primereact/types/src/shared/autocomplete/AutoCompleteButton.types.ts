/**
 *
 * AutoCompleteButton is the dropdown button for the AutoComplete component.
 *
 * [Live Demo](https://www.primereact.org/autocomplete/)
 *
 * @module autocompletebutton
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { AutoCompleteRootInstance } from './AutoCompleteRoot.types';

/**
 * Defines passthrough(pt) options type in AutoCompleteButton component.
 */
export type AutoCompleteButtonPassThroughType<E> = PassThroughType<AutoCompleteButtonInstance, E>;

/**
 * Defines passthrough(pt) options of AutoCompleteButton component.
 */
export interface AutoCompleteButtonPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: AutoCompleteButtonPassThroughType<React.HTMLAttributes<HTMLButtonElement>>;
}

/**
 * Defines valid properties in AutoCompleteButton component.
 */
export interface AutoCompleteButtonProps extends BaseComponentProps<AutoCompleteButtonInstance, unknown, AutoCompleteButtonPassThrough> {}

/**
 * Defines valid state in AutoCompleteButton component.
 */
export interface AutoCompleteButtonState {}

/**
 * Defines the methods and properties exposed by AutoCompleteButton component.
 */
export interface AutoCompleteButtonExposes {
    /**
     * The AutoComplete component instance.
     */
    autocomplete: AutoCompleteRootInstance | undefined | null;
}

/**
 * Instance of AutoCompleteButton component.
 */
export type AutoCompleteButtonInstance = ComponentInstance<AutoCompleteButtonProps, AutoCompleteButtonState, AutoCompleteButtonExposes>;
