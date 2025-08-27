/**
 *
 * Textarea is a multi-line text input element.
 *
 * [Live Demo](https://www.primereact.org/textarea/)
 *
 * @module textarea
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import { FluidInstance } from '../fluid/Fluid.types';
import type { useTextareaExposes, useTextareaProps, useTextareaState } from './useTextarea.types';

/**
 * Defines passthrough(pt) options type in Textarea component.
 */
export type TextareaPassThroughType<E> = PassThroughType<TextareaInstance, E>;

/**
 * Defines passthrough(pt) options of Textarea component.
 */
export interface TextareaPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: TextareaPassThroughType<React.InputHTMLAttributes<HTMLInputElement>>;
}

/**
 * Defines valid properties in Textarea component.
 */
export interface TextareaProps extends BaseComponentProps<TextareaInstance, useTextareaProps, TextareaPassThrough> {
    /**
     * Defines the size of the Textarea.
     */
    size?: 'small' | 'large' | undefined;
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
 * Defines valid state in Textarea component.
 * @extends useTextareaState
 */
export interface TextareaState extends useTextareaState {}

/**
 * Defines the methods and properties exposed by Textarea component.
 * @extends useTextareaExposes
 */
export interface TextareaExposes extends useTextareaExposes {
    /**
     * The Fluid component instance.
     */
    fluid: FluidInstance | undefined | null;
}

/**
 * Defines the CSS class names used in the Textarea component.
 */
export const TextareaClassNames = {
    /**
     * Class name of the root element
     */
    root: 'p-textarea'
} as const;

/**
 * Type representing the CSS class names used in the Textarea component.
 */
export type TextareaClassNamesType = (typeof TextareaClassNames)[keyof typeof TextareaClassNames];

/**
 * Instance of Textarea component.
 */
export type TextareaInstance = ComponentInstance<TextareaProps, TextareaState, TextareaExposes>;
