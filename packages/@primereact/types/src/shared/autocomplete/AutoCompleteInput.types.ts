/**
 *
 * AutoCompleteInput is the input element for the AutoComplete component.
 *
 * [Live Demo](https://www.primereact.org/autocomplete/)
 *
 * @module autocompleteinput
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { AutoCompleteRootInstance } from './AutoCompleteRoot.types';

/**
 * Defines passthrough(pt) options type in AutoCompleteInput component.
 */
export type AutoCompleteInputPassThroughType<E> = PassThroughType<AutoCompleteInputInstance, E>;

/**
 * Defines passthrough(pt) options of AutoCompleteInput component.
 */
export interface AutoCompleteInputPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: AutoCompleteInputPassThroughType<React.HTMLAttributes<HTMLInputElement>>;
}

/**
 * Defines valid properties in AutoCompleteInput component.
 */
export interface AutoCompleteInputProps extends BaseComponentProps<AutoCompleteInputInstance, unknown, AutoCompleteInputPassThrough> {}

/**
 * Defines valid state in AutoCompleteInput component.
 */
export interface AutoCompleteInputState {}

/**
 * Defines the methods and properties exposed by AutoCompleteInput component.
 */
export interface AutoCompleteInputExposes {
    /**
     * The AutoComplete component instance.
     */
    autocomplete: AutoCompleteRootInstance | undefined | null;
}

/**
 * Instance of AutoCompleteInput component.
 */
export type AutoCompleteInputInstance = ComponentInstance<AutoCompleteInputProps, AutoCompleteInputState, AutoCompleteInputExposes>;
