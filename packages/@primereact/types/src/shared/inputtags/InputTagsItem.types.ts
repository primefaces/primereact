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
import type { InputTagsRootInstance } from './InputTagsRoot.types';

/**
 * Defines passthrough(pt) options type in InputTagsItem component.
 */
export type InputTagsItemPassThroughType<E> = PassThroughType<InputTagsItemInstance, E>;

/**
 * Defines passthrough(pt) options of InputTagsItem component.
 */
export interface InputTagsItemPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: InputTagsItemPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in InputTagsItem component.
 */
export interface InputTagsItemProps extends BaseComponentProps<InputTagsItemInstance, unknown, InputTagsItemPassThrough> {}

/**
 * Defines valid state in InputTagsItem component.
 */
export interface InputTagsItemState {}

/**
 * Defines the methods and properties exposed by InputTagsItem component.
 */
export interface InputTagsItemExposes {
    /**
     * Instance of the InputTags component.
     */
    inputtags: InputTagsRootInstance | undefined | null;
}

/**
 * Instance of InputTagsItem component.
 */
export type InputTagsItemInstance = ComponentInstance<InputTagsItemProps, InputTagsItemState, InputTagsItemExposes>;
