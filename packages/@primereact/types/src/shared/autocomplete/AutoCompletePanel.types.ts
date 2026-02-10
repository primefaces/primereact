/**
 *
 * AutoCompletePanel is the panel container that wraps the dropdown content inside the positioner.
 *
 * [Live Demo](https://www.primereact.org/autocomplete/)
 *
 * @module autocompletepanel
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { AutoCompleteRootInstance } from './AutoCompleteRoot.types';

/**
 * Defines passthrough(pt) options type in AutoCompletePanel component.
 */
export type AutoCompletePanelPassThroughType<E> = PassThroughType<AutoCompletePanelInstance, E>;

/**
 * Defines passthrough(pt) options of AutoCompletePanel component.
 */
export interface AutoCompletePanelPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: AutoCompletePanelPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in AutoCompletePanel component.
 */
export interface AutoCompletePanelProps extends BaseComponentProps<AutoCompletePanelInstance, unknown, AutoCompletePanelPassThrough> {}

/**
 * Defines valid state in AutoCompletePanel component.
 */
export interface AutoCompletePanelState {}

/**
 * Defines the methods and properties exposed by AutoCompletePanel component.
 */
export interface AutoCompletePanelExposes {
    /**
     * The AutoComplete component instance.
     */
    autocomplete: AutoCompleteRootInstance | undefined | null;
}

/**
 * Instance of AutoCompletePanel component.
 */
export type AutoCompletePanelInstance = ComponentInstance<AutoCompletePanelProps, AutoCompletePanelState, AutoCompletePanelExposes>;
