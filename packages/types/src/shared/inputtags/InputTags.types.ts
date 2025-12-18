/**
 *
 * InputTags groups a collection of contents in items.
 *
 * [Live Demo](https://www.primereact.org/inputtags/)
 *
 * @module inputtags
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { useInputTagsExposes, useInputTagsProps, useInputTagsState, useInputTagsValueChangeEvent } from './useInputTags.types';

/**
 * Defines passthrough(pt) options type in InputTags component.
 */
export type InputTagsPassThroughType<E> = PassThroughType<InputTagsInstance, E>;

/**
 * Defines passthrough(pt) options of InputTags component.
 */
export interface InputTagsPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: InputTagsPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the item's DOM element.
     */
    item?: InputTagsPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the input's DOM element.
     */
    input?: InputTagsPassThroughType<React.InputHTMLAttributes<HTMLInputElement>>;
    /**
     * Used to pass attributes to the hidden input's DOM element.
     */
    hiddenInput?: InputTagsPassThroughType<React.InputHTMLAttributes<HTMLInputElement>>;
}

/**
 * Event fired when the inputtags's value changes.
 * @extends useInputTagsValueChangeEvent
 */
export interface InputTagsValueChangeEvent extends useInputTagsValueChangeEvent {
    /**
     * Value of the inputtags.
     */
    value: string[] | undefined;
}

/**
 * Defines valid properties in InputTags component.
 */
export interface InputTagsProps extends BaseComponentProps<InputTagsInstance, useInputTagsProps, InputTagsPassThrough> {
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
    onValueChange?: (event: InputTagsValueChangeEvent) => void;
}

/**
 * Defines valid state in InputTags component.
 * @extends useInputTagsState
 */
export interface InputTagsState extends useInputTagsState {}

/**
 * Defines the methods and properties exposed by InputTags component.
 * @extends useInputTagsExposes
 */
export interface InputTagsExposes extends useInputTagsExposes {}

/**
 * Defines the CSS class names used in the InputTags component.
 */
export const InputTagsClassNames = {
    /**
     * Class name of the root element
     */
    root: 'p-inputtags',
    /**
     * Class name of the item element
     */
    item: 'p-inputtags-item',
    /**
     * Class name of the input element
     */
    input: 'p-inputtags-input'
} as const;

/**
 * Type representing the CSS class names used in the InputTags component.
 */
export type InputTagsClassNamesType = (typeof InputTagsClassNames)[keyof typeof InputTagsClassNames];

/**
 * Instance of InputTags component.
 */
export type InputTagsInstance = ComponentInstance<InputTagsProps, InputTagsState, InputTagsExposes>;
