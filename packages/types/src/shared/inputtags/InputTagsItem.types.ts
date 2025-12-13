/**
 *
 * InputTagsItem is a component that displays a item.
 *
 * [Live Demo](https://www.primereact.org/inputtags/)
 *
 * @module inputtagsitem
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { InputTagsInstance } from './InputTags.types';

/**
 * Defines passthrough(pt) options type in InputTagsItemcomponent.
 */
export type InputTagsItemPassThroughType<E> = PassThroughType<InputTagsItemInstance, E>;

/**
 * Defines passthrough(pt) options of InputTagsItemcomponent.
 */
export interface InputTagsItemPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: InputTagsItemPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in InputTagsItemcomponent.
 */
export interface InputTagsItemProps extends BaseComponentProps<InputTagsItemInstance, unknown, InputTagsItemPassThrough> {}

/**
 * Defines valid state in InputTagsItemcomponent.
 */
export interface InputTagsItemState {}

/**
 * Defines the methods and properties exposed by InputTagsItemcomponent.
 */
export interface InputTagsItemExposes {
    /**
     * Instance of the InputTags component.
     */
    inputtags: InputTagsInstance | undefined | null;
}

/**
 * Instance of InputTagsItemcomponent.
 */
export type InputTagsItemInstance = ComponentInstance<InputTagsItemProps, InputTagsItemState, InputTagsItemExposes>;
