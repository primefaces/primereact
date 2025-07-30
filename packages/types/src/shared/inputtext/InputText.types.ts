/**
 *
 * InputText is an extension to standard input element with theming.
 *
 * [Live Demo](https://www.primereact.org/inputtext/)
 *
 * @module inputtext
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { useInputTextExposes, useInputTextProps, useInputTextState } from './useInputText.types';

/**
 * Defines passthrough(pt) options type in InputText component.
 */
export type InputTextPassThroughType<E> = PassThroughType<InputTextInstance, E>;

/**
 * Defines passthrough(pt) options of InputText component.
 */
export interface InputTextPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: InputTextPassThroughType<React.InputHTMLAttributes<HTMLInputElement>>;
}

/**
 * Defines valid properties in InputText component.
 */
export interface InputTextProps extends BaseComponentProps<InputTextInstance, useInputTextProps, InputTextPassThrough> {
    /**
     * Defines the size of the InputText.
     */
    size?: 'small' | 'normal' | 'large' | undefined;
    /**
     * Specifies the input variant of the component.
     */
    variant?: 'outlined' | 'filled' | undefined;
    /**
     * When enabled, the component will stretch to occupy the full width of its container.
     */
    fluid?: boolean | undefined;
    /**
     * When present, it specifies that the component should have invalid state style.
     * @default false
     */
    invalid?: boolean | undefined;
}

/**
 * Defines valid state in InputText component.
 * @extends useInputTextState
 */
export interface InputTextState extends useInputTextState {}

/**
 * Defines the methods and properties exposed by InputText component.
 * @extends useInputTextExposes
 */
export interface InputTextExposes extends useInputTextExposes {}

/**
 * Defines the CSS class names used in the InputText component.
 */
export const InputTextClassNames = {
    /**
     * Class name of the root element
     */
    root: 'p-inputtext'
} as const;

/**
 * Type representing the CSS class names used in the InputText component.
 */
export type InputTextClassNamesType = (typeof InputTextClassNames)[keyof typeof InputTextClassNames];

/**
 * Instance of InputText component.
 */
export type InputTextInstance = ComponentInstance<InputTextProps, InputTextState, InputTextExposes>;
