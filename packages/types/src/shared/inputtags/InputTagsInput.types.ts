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
import type { InputTagsInstance } from './InputTags.types';

/**
 * Defines passthrough(pt) options type in InputTagsInputcomponent.
 */
export type InputTagsInputPassThroughType<E> = PassThroughType<InputTagsInputInstance, E>;

/**
 * Defines passthrough(pt) options of InputTagsInputcomponent.
 */
export interface InputTagsInputPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: InputTagsInputPassThroughType<React.HTMLAttributes<HTMLInputElement>>;
}

/**
 * Defines valid properties in InputTagsInputcomponent.
 */
export interface InputTagsInputProps extends BaseComponentProps<InputTagsInputInstance, unknown, InputTagsInputPassThrough> {}

/**
 * Defines valid state in InputTagsInputcomponent.
 */
export interface InputTagsInputState {}

/**
 * Defines the methods and properties exposed by InputTagsInputcomponent.
 */
export interface InputTagsInputExposes {
    /**
     * Instance of the InputTags component.
     */
    inputtags: InputTagsInstance | undefined | null;
}

/**
 * Instance of InputTagsInputcomponent.
 */
export type InputTagsInputInstance = ComponentInstance<InputTagsInputProps, InputTagsInputState, InputTagsInputExposes>;
