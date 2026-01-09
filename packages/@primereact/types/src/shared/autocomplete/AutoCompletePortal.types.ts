/**
 *
 * AutoCompletePortal is the overlay container for the AutoComplete component.
 *
 * [Live Demo](https://www.primereact.org/autocomplete/)
 *
 * @module autocompleteportal
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { AutoCompleteRootInstance } from './AutoCompleteRoot.types';

/**
 * Defines passthrough(pt) options type in AutoCompletePortal component.
 */
export type AutoCompletePortalPassThroughType<E> = PassThroughType<AutoCompletePortalInstance, E>;

/**
 * Defines passthrough(pt) options of AutoCompletePortal component.
 */
export interface AutoCompletePortalPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: AutoCompletePortalPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the panel's DOM element.
     */
    panel?: AutoCompletePortalPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in AutoCompletePortal component.
 */
export interface AutoCompletePortalProps extends BaseComponentProps<AutoCompletePortalInstance, unknown, AutoCompletePortalPassThrough> {}

/**
 * Defines valid state in AutoCompletePortal component.
 */
export interface AutoCompletePortalState {}

/**
 * Defines the methods and properties exposed by AutoCompletePortal component.
 */
export interface AutoCompletePortalExposes {
    /**
     * The AutoComplete component instance.
     */
    autocomplete: AutoCompleteRootInstance | undefined | null;
}

/**
 * Instance of AutoCompletePortal component.
 */
export type AutoCompletePortalInstance = ComponentInstance<AutoCompletePortalProps, AutoCompletePortalState, AutoCompletePortalExposes>;
