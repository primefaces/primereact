/**
 *
 * InputTagsOptions is the options container component for the InputTags dropdown list.
 *
 * [Live Demo](https://www.primereact.org/inputtags/)
 *
 * @module inputtagsoptions
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import { ListboxRootInstance } from '@primereact/types/shared/listbox';
import type { BaseComponentProps, PassThroughType } from '..';
import type { InputTagsRootInstance } from './InputTagsRoot.types';

/**
 * Defines passthrough(pt) options type in InputTagsOptions component.
 */
export type InputTagsOptionsPassThroughType<E> = PassThroughType<InputTagsOptionsInstance, E>;

/**
 * Defines passthrough(pt) options of InputTagsOptions component.
 */
export interface InputTagsOptionsPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: InputTagsOptionsPassThroughType<React.HTMLAttributes<HTMLUListElement>>;
}

/**
 * Defines valid properties in InputTagsOptions component.
 */
export interface InputTagsOptionsProps extends BaseComponentProps<InputTagsOptionsInstance, unknown, InputTagsOptionsPassThrough> {}

/**
 * Defines valid state in InputTagsOptions component.
 */
export interface InputTagsOptionsState {}

/**
 * Defines the methods and properties exposed by InputTagsOptions component.
 */
export interface InputTagsOptionsExposes {
    /**
     * The InputTags component instance.
     */
    inputtags: InputTagsRootInstance | undefined | null;
    /**
     * The Listbox component instance.
     */
    listbox: ListboxRootInstance | undefined | null;
}

/**
 * Instance of InputTagsOptions component.
 */
export type InputTagsOptionsInstance = ComponentInstance<InputTagsOptionsProps, InputTagsOptionsState, InputTagsOptionsExposes>;
