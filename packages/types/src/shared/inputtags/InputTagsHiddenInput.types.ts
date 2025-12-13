/**
 *
 * InputTagsHiddenInput is a component that displays a hidden input.
 *
 * [Live Demo](https://www.primereact.org/inputtags/)
 *
 * @module inputtagshiddeninput
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { InputTagsInstance } from './InputTags.types';

/**
 * Defines passthrough(pt) options type in InputTagsHiddenInputcomponent.
 */
export type InputTagsHiddenInputPassThroughType<E> = PassThroughType<InputTagsHiddenInputInstance, E>;

/**
 * Defines passthrough(pt) options of InputTagsHiddenInputcomponent.
 */
export interface InputTagsHiddenInputPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: InputTagsHiddenInputPassThroughType<React.HTMLAttributes<HTMLInputElement>>;
}

/**
 * Defines valid properties in InputTagsHiddenInputcomponent.
 */
export interface InputTagsHiddenInputProps extends BaseComponentProps<InputTagsHiddenInputInstance, unknown, InputTagsHiddenInputPassThrough> {
    /**
     * Name of the hidden input field.
     */
    name?: string | undefined;
}

/**
 * Defines valid state in InputTagsHiddenInputcomponent.
 */
export interface InputTagsHiddenInputState {}

/**
 * Defines the methods and properties exposed by InputTagsHiddenInputcomponent.
 */
export interface InputTagsHiddenInputExposes {
    /**
     * Instance of the InputTags component.
     */
    inputtags: InputTagsInstance | undefined | null;
}

/**
 * Instance of InputTagsHiddenInputcomponent.
 */
export type InputTagsHiddenInputInstance = ComponentInstance<InputTagsHiddenInputProps, InputTagsHiddenInputState, InputTagsHiddenInputExposes>;
