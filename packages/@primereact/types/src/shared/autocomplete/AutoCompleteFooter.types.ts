/**
 *
 * AutoCompleteFooter is the footer component for the AutoComplete dropdown panel.
 *
 * [Live Demo](https://www.primereact.org/autocomplete/)
 *
 * @module autocompletefooter
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { AutoCompleteRootInstance } from './AutoCompleteRoot.types';

/**
 * Defines passthrough(pt) options type in AutoCompleteFooter component.
 */
export type AutoCompleteFooterPassThroughType<E> = PassThroughType<AutoCompleteFooterInstance, E>;

/**
 * Defines passthrough(pt) options of AutoCompleteFooter component.
 */
export interface AutoCompleteFooterPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: AutoCompleteFooterPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in AutoCompleteFooter component.
 */
export interface AutoCompleteFooterProps extends BaseComponentProps<AutoCompleteFooterInstance, unknown, AutoCompleteFooterPassThrough> {}

/**
 * Defines valid state in AutoCompleteFooter component.
 */
export interface AutoCompleteFooterState {}

/**
 * Defines the methods and properties exposed by AutoCompleteFooter component.
 */
export interface AutoCompleteFooterExposes {
    /**
     * The AutoComplete component instance.
     */
    autocomplete: AutoCompleteRootInstance | undefined | null;
}

/**
 * Instance of AutoCompleteFooter component.
 */
export type AutoCompleteFooterInstance = ComponentInstance<AutoCompleteFooterProps, AutoCompleteFooterState, AutoCompleteFooterExposes>;
