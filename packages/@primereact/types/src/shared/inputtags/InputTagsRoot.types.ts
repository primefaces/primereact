/**
 *
 * InputTags groups a collection of contents in items.
 *
 * [Live Demo](https://www.primereact.org/inputtags/)
 *
 * @module inputtagsroot
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { useInputTagsExposes, useInputTagsOpenChangeEvent, useInputTagsProps, useInputTagsState, useInputTagsValueChangeEvent } from './useInputTags.types';

/**
 * Defines passthrough(pt) options type in InputTags component.
 */
export type InputTagsRootPassThroughType<E> = PassThroughType<InputTagsRootInstance, E>;

/**
 * Defines passthrough(pt) options of InputTags component.
 */
export interface InputTagsRootPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: InputTagsRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the item's DOM element.
     */
    item?: InputTagsRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the input's DOM element.
     */
    pcInputText?: InputTagsRootPassThroughType<React.InputHTMLAttributes<HTMLInputElement>>;
    /**
     * Used to pass attributes to the hidden input's DOM element.
     */
    hiddenInput?: InputTagsRootPassThroughType<React.InputHTMLAttributes<HTMLInputElement>>;
    /**
     * Used to pass attributes to the list's DOM element.
     */
    list?: InputTagsRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the pcListbox's DOM element.
     */
    pcListbox?: InputTagsRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the panel's DOM element.
     */
    panel?: InputTagsRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the options' DOM element.
     */
    options?: InputTagsRootPassThroughType<React.HTMLAttributes<HTMLUListElement>>;
    /**
     * Used to pass attributes to the option's DOM element.
     */
    option?: InputTagsRootPassThroughType<React.HTMLAttributes<HTMLLIElement>>;
}

/**
 * Event fired when the inputtags's value changes.
 * @extends useInputTagsValueChangeEvent
 */
export interface InputTagsRootValueChangeEvent extends useInputTagsValueChangeEvent {
    /**
     * Value of the inputtags.
     */
    value: string[] | undefined;
}

/**
 * Event object for the onOpenChange callback.
 * @extends useInputTagsOpenChangeEvent
 */
export interface InputTagsOpenChangeEvent extends useInputTagsOpenChangeEvent {
    /**
     * The new value of the input tags overlay's open state.
     */
    value: boolean;
}

/**
 * Defines valid properties in InputTags component.
 */
export interface InputTagsRootProps extends BaseComponentProps<InputTagsRootInstance, useInputTagsProps, InputTagsRootPassThrough> {
    /**
     * When present, it specifies that the component should be disabled.
     */
    disabled?: boolean | undefined;
    /**
     * Name of the input element.
     */
    name?: string | undefined;
    /**
     * When present, it specifies that the component should have invalid state style.
     */
    invalid?: boolean | undefined;
    /**
     * Specifies the input variant of the component.
     */
    variant?: 'outlined' | 'filled' | undefined;
    /**
     * When enabled, the component spans the full width of its parent.
     */
    fluid?: boolean | undefined;
    /**
     * Callback fired when the inputtags's value changes.
     * @param event The event that triggered the change.
     * @param event.value The value of the inputtags.
     * @returns void
     */
    onValueChange?: (event: InputTagsRootValueChangeEvent) => void;
}

/**
 * Defines valid state in InputTags component.
 * @extends useInputTagsState
 */
export interface InputTagsRootState extends useInputTagsState {}

/**
 * Defines the methods and properties exposed by InputTags component.
 * @extends useInputTagsExposes
 */
export interface InputTagsRootExposes extends useInputTagsExposes {}

/**
 * Instance of InputTags component.
 */
export type InputTagsRootInstance = ComponentInstance<InputTagsRootProps, InputTagsRootState, InputTagsRootExposes>;
