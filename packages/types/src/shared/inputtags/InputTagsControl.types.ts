/**
 *
 * InputTagsControl is a component that displays a control.
 *
 * [Live Demo](https://www.primereact.org/inputtags/)
 *
 * @module inputtagscontrol
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { InputTagsInstance } from './InputTags.types';

/**
 * Defines passthrough(pt) options type in InputTagsControlcomponent.
 */
export type InputTagsControlPassThroughType<E> = PassThroughType<InputTagsControlInstance, E>;

/**
 * Defines passthrough(pt) options of InputTagsControlcomponent.
 */
export interface InputTagsControlPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: InputTagsControlPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in InputTagsControlcomponent.
 */
export interface InputTagsControlProps extends BaseComponentProps<InputTagsControlInstance, unknown, InputTagsControlPassThrough> {}

/**
 * Defines valid state in InputTagsControlcomponent.
 */
export interface InputTagsControlState {}

/**
 * Defines the methods and properties exposed by InputTagsControlcomponent.
 */
export interface InputTagsControlExposes {
    /**
     * Instance of the InputTags component.
     */
    inputtags: InputTagsInstance | undefined | null;
}

/**
 * Instance of InputTagsControlcomponent.
 */
export type InputTagsControlInstance = ComponentInstance<InputTagsControlProps, InputTagsControlState, InputTagsControlExposes>;
