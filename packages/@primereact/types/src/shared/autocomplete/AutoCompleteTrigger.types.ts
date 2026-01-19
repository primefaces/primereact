/**
 *
 * AutoCompleteTrigger is the dropdown trigger for the AutoComplete component.
 *
 * [Live Demo](https://www.primereact.org/autocomplete/)
 *
 * @module autocompletetrigger
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { AutoCompleteRootInstance } from './AutoCompleteRoot.types';

/**
 * Defines passthrough(pt) options type in AutoCompleteTrigger component.
 */
export type AutoCompleteTriggerPassThroughType<E> = PassThroughType<AutoCompleteTriggerInstance, E>;

/**
 * Defines passthrough(pt) options of AutoCompleteTrigger component.
 */
export interface AutoCompleteTriggerPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: AutoCompleteTriggerPassThroughType<React.HTMLAttributes<HTMLButtonElement>>;
}

/**
 * Defines valid properties in AutoCompleteTrigger component.
 */
export interface AutoCompleteTriggerProps extends BaseComponentProps<AutoCompleteTriggerInstance, unknown, AutoCompleteTriggerPassThrough> {}

/**
 * Defines valid state in AutoCompleteTrigger component.
 */
export interface AutoCompleteTriggerState {}

/**
 * Defines the methods and properties exposed by AutoCompleteTrigger component.
 */
export interface AutoCompleteTriggerExposes {
    /**
     * The AutoComplete component instance.
     */
    autocomplete: AutoCompleteRootInstance | undefined | null;
}

/**
 * Instance of AutoCompleteTrigger component.
 */
export type AutoCompleteTriggerInstance = ComponentInstance<AutoCompleteTriggerProps, AutoCompleteTriggerState, AutoCompleteTriggerExposes>;
