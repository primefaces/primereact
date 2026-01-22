/**
 *
 * InputTagsList is the list container for the InputTags component that wraps Listbox.
 *
 * [Live Demo](https://www.primereact.org/inputtags/)
 *
 * @module inputtagslist
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { InputTagsRootInstance } from './InputTagsRoot.types';

/**
 * Defines passthrough(pt) options type in InputTagsList component.
 */
export type InputTagsListPassThroughType<E> = PassThroughType<InputTagsListInstance, E>;

/**
 * Defines passthrough(pt) options of InputTagsList component.
 */
export interface InputTagsListPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: InputTagsListPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in InputTagsList component.
 */
export interface InputTagsListProps extends BaseComponentProps<InputTagsListInstance, unknown, InputTagsListPassThrough> {}

/**
 * Defines valid state in InputTagsList component.
 */
export interface InputTagsListState {}

/**
 * Defines the methods and properties exposed by InputTagsList component.
 */
export interface InputTagsListExposes {
    /**
     * The InputTags component instance.
     */
    inputtags: InputTagsRootInstance | undefined | null;
}

/**
 * Instance of InputTagsList component.
 */
export type InputTagsListInstance = ComponentInstance<InputTagsListProps, InputTagsListState, InputTagsListExposes>;
