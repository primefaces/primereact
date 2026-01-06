/**
 *
 * InputNumber is an input component to provide numerical input.
 *
 * [Live Demo](https://www.primereact.org/inputnumber/)
 *
 * @module inputnumber
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { useInputNumberExposes, useInputNumberProps, useInputNumberState, useInputNumberValueChangeEvent } from './useInputNumber.types';

/**
 * Defines passthrough(pt) options type in InputNumber component.
 */
export type InputNumberPassThroughType<E> = PassThroughType<InputNumberInstance, E>;

/**
 * Defines passthrough(pt) options of InputNumber component.
 */
export interface InputNumberPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: InputNumberPassThroughType<React.InputHTMLAttributes<HTMLSpanElement>>;
    /**
     * Used to pass attributes to the input's DOM element.
     */
    pcInputText?: InputNumberPassThroughType<React.InputHTMLAttributes<HTMLInputElement>>;
}

/**
 * Event fired when the input number's state changes.
 * @extends useInputNumberValueChangeEvent
 */
export interface InputNumberValueChangeEvent extends useInputNumberValueChangeEvent {
    /**
     * Value of the input number.
     */
    value: number;
}

/**
 * Defines valid properties in InputNumber component.
 */
export interface InputNumberProps extends BaseComponentProps<InputNumberInstance, useInputNumberProps, InputNumberPassThrough> {
    /**
     * Defines the size of the component.
     */
    size?: 'small' | 'large' | undefined;
    /**
     * When present, it specifies that the component should have invalid state style.
     * @default false
     */
    invalid?: boolean | undefined;
    /**
     * When present, it specifies that the component should be disabled.
     * @default false
     */
    disabled?: boolean | undefined;
    /**
     * Specifies the input variant of the component.
     * @default null
     */
    variant?: 'outlined' | 'filled' | undefined | null;
    /**
     * When present, it specifies that an input field is read-only.
     * @default false
     */
    readOnly?: boolean | undefined;
    /**
     * Placeholder text for the input.
     */
    placeholder?: string | undefined;
    /**
     * Spans 100% width of the container when enabled.
     * @default null
     */
    fluid?: boolean | undefined;
    /**
     * Callback fired when the input number's value changes.
     * @param event The event that triggered the change.
     * @param event.originalEvent The original event that triggered the change.
     * @param event.value The new value of the input number.
     * @returns void
     */
    onValueChange?: (event: InputNumberValueChangeEvent) => void;
}

/**
 * Defines valid state in InputNumber component.
 * @extends useInputNumberState
 */
export interface InputNumberState extends useInputNumberState {}

/**
 * Defines the methods and properties exposed by InputNumber component.
 * @extends useInputNumberExposes
 */
export interface InputNumberExposes extends useInputNumberExposes {}

/**
 * Defines the CSS class names used in the InputNumber component.
 */
export const InputNumberClassNames = {
    /**
     * Class name of the root element
     */
    root: 'p-inputnumber',
    /**
     * Class name of the text element
     */
    text: 'p-inputnumber-text'
} as const;

/**
 * Type representing the CSS class names used in the InputNumber component.
 */
export type InputNumberClassNamesType = (typeof InputNumberClassNames)[keyof typeof InputNumberClassNames];

/**
 * Instance of InputNumber component.
 */
export type InputNumberInstance = ComponentInstance<InputNumberProps, InputNumberState, InputNumberExposes>;
