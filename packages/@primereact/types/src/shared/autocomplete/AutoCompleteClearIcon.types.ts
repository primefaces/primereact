/**
 *
 * AutoCompleteClearIcon is the clear button icon for the AutoComplete component.
 *
 * [Live Demo](https://www.primereact.org/autocomplete/)
 *
 * @module autocompleteclearicon
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { AutoCompleteRootInstance } from './AutoCompleteRoot.types';

/**
 * Defines passthrough(pt) options type in AutoCompleteClearIcon component.
 */
export type AutoCompleteClearIconPassThroughType<E> = PassThroughType<AutoCompleteClearIconInstance, E>;

/**
 * Defines passthrough(pt) options of AutoCompleteClearIcon component.
 */
export interface AutoCompleteClearIconPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: AutoCompleteClearIconPassThroughType<React.HTMLAttributes<HTMLSpanElement>>;
}

/**
 * Defines valid properties in AutoCompleteClearIcon component.
 */
export interface AutoCompleteClearIconProps extends BaseComponentProps<AutoCompleteClearIconInstance, unknown, AutoCompleteClearIconPassThrough> {}

/**
 * Defines valid state in AutoCompleteClearIcon component.
 */
export interface AutoCompleteClearIconState {}

/**
 * Defines the methods and properties exposed by AutoCompleteClearIcon component.
 */
export interface AutoCompleteClearIconExposes {
    /**
     * The AutoComplete component instance.
     */
    autocomplete: AutoCompleteRootInstance | undefined | null;
}

/**
 * Instance of AutoCompleteClearIcon component.
 */
export type AutoCompleteClearIconInstance = ComponentInstance<AutoCompleteClearIconProps, AutoCompleteClearIconState, AutoCompleteClearIconExposes>;
