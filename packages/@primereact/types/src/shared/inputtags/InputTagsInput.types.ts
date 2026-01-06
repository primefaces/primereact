/**
 *
 * InputTagsInput is a component that displays a input.
 *
 * [Live Demo](https://www.primereact.org/inputtags/)
 *
 * @module inputtagsinput
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { InputTagsRootInstance } from './InputTagsRoot.types';

/**
 * Defines passthrough(pt) options type in InputTagsInput component.
 */
export type InputTagsInputPassThroughType<E> = PassThroughType<InputTagsInputInstance, E>;

/**
 * Defines passthrough(pt) options of InputTagsInput component.
 */
export interface InputTagsInputPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: InputTagsInputPassThroughType<React.HTMLAttributes<HTMLInputElement>>;
}

/**
 * Defines valid properties in InputTagsInput component.
 */
export interface InputTagsInputProps extends BaseComponentProps<InputTagsInputInstance, unknown, InputTagsInputPassThrough> {}

/**
 * Defines valid state in InputTagsInputcomponent.
 */
export interface InputTagsInputState {}

/**
 * Defines the methods and properties exposed by InputTagsInput component.
 */
export interface InputTagsInputExposes {
    /**
     * Instance of the InputTags component.
     */
    inputtags: InputTagsRootInstance | undefined | null;
}

/**
 * Instance of InputTagsInput component.
 */
export type InputTagsInputInstance = ComponentInstance<InputTagsInputProps, InputTagsInputState, InputTagsInputExposes>;
