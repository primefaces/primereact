/**
 *
 * InputTagsOption is a single option item in the InputTags dropdown list.
 *
 * [Live Demo](https://www.primereact.org/inputtags/)
 *
 * @module inputtagsoption
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import { ListboxOptionInstance, ListboxRootInstance } from '@primereact/types/shared/listbox';
import type { BaseComponentProps, PassThroughType } from '..';
import type { InputTagsRootInstance } from './InputTagsRoot.types';

/**
 * Defines passthrough(pt) options type in InputTagsOption component.
 */
export type InputTagsOptionPassThroughType<E> = PassThroughType<InputTagsOptionInstance, E>;

/**
 * Defines passthrough(pt) options of InputTagsOption component.
 */
export interface InputTagsOptionPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: InputTagsOptionPassThroughType<React.HTMLAttributes<HTMLLIElement>>;
}

/**
 * Defines valid properties in InputTagsOption component.
 */
export interface InputTagsOptionProps extends BaseComponentProps<InputTagsOptionInstance, unknown, InputTagsOptionPassThrough> {
    /**
     * The option data.
     */
    option?: unknown;
    /**
     * The index of the option.
     */
    index?: number;
    /**
     * Whether the option is selected.
     * @defaultValue false
     */
    selected?: boolean;
    /**
     * Whether the option is focused.
     * @defaultValue false
     */
    focused?: boolean;
    /**
     * Whether the option is disabled.
     * @defaultValue false
     */
    disabled?: boolean;
}

/**
 * Defines valid state in InputTagsOption component.
 */
export interface InputTagsOptionState {}

/**
 * Defines the methods and properties exposed by InputTagsOption component.
 */
export interface InputTagsOptionExposes {
    /**
     * The InputTags component instance.
     */
    inputtags: InputTagsRootInstance | undefined | null;
    /**
     * The Listbox component instance.
     */
    listbox: ListboxRootInstance | undefined | null;
    /**
     * The ListboxOption component instance.
     */
    optionInstance: ListboxOptionInstance | undefined | null;
    /**
     * The option data object.
     */
    option: unknown;
    /**
     * The index of the option in the list.
     */
    index: number | undefined;
    /**
     * Whether this option is a group header.
     */
    group: boolean | undefined;
    /**
     * Whether this option is currently selected.
     */
    selected: boolean | undefined;
}

/**
 * Instance of InputTagsOption component.
 */
export type InputTagsOptionInstance = ComponentInstance<InputTagsOptionProps, InputTagsOptionState, InputTagsOptionExposes>;
