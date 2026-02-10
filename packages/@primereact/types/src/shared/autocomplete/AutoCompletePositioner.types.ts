/**
 *
 * AutoCompletePositioner is a component that positions the autocomplete dropdown relative to its trigger.
 *
 * [Live Demo](https://www.primereact.org/autocomplete/)
 *
 * @module autocompletepositioner
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import { usePositionerProps } from '../positioner';
import type { AutoCompleteRootInstance } from './AutoCompleteRoot.types';

/**
 * Defines passthrough(pt) options type in AutoCompletePositioner component.
 */
export type AutoCompletePositionerPassThroughType<E> = PassThroughType<AutoCompletePositionerInstance, E>;

/**
 * Defines passthrough(pt) options of AutoCompletePositioner component.
 */
export interface AutoCompletePositionerPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: AutoCompletePositionerPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in AutoCompletePositioner component.
 */
export interface AutoCompletePositionerProps extends BaseComponentProps<AutoCompletePositionerInstance, usePositionerProps, AutoCompletePositionerPassThrough> {}

/**
 * Defines valid state in AutoCompletePositioner component.
 */
export interface AutoCompletePositionerState {}

/**
 * Defines the methods and properties exposed by AutoCompletePositioner component.
 */
export interface AutoCompletePositionerExposes {
    /**
     * The AutoComplete component instance.
     */
    autocomplete: AutoCompleteRootInstance | undefined | null;
}

/**
 * Instance of AutoCompletePositioner component.
 */
export type AutoCompletePositionerInstance = ComponentInstance<AutoCompletePositionerProps, AutoCompletePositionerState, AutoCompletePositionerExposes>;
