/**
 *
 * InputIcon is a component that displays an icon.
 *
 * [Live Demo](https://www.primereact.org/iconfield/)
 *
 * @module inputicon
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { useInputIconExposes, useInputIconProps, useInputIconState } from './useInputIcon.types';

/**
 * Defines passthrough(pt) options type in InputIcon component.
 */
export type InputIconPassThroughType<E> = PassThroughType<InputIconInstance, E>;

/**
 * Defines passthrough(pt) options of InputIcon component.
 */
export interface InputIconPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: InputIconPassThroughType<React.HTMLAttributes<HTMLSpanElement>>;
}

/**
 * Defines valid properties in InputIcon component.
 */
export interface InputIconProps extends BaseComponentProps<InputIconInstance, useInputIconProps, InputIconPassThrough> {}

/**
 * Defines valid state in InputIcon component.
 * @extends useInputIconState
 */
export interface InputIconState extends useInputIconState {}

/**
 * Defines the methods and properties exposed by InputIcon component.
 * @extends useInputIconExposes
 */
export interface InputIconExposes extends useInputIconExposes {}

/**
 * Defines the CSS class names used in the InputIcon component.
 */
export const InputIconClassNames = {
    /**
     * Class name of the root element
     */
    root: 'p-inputicon'
} as const;

/**
 * Type representing the CSS class names used in the InputIcon component.
 */
export type InputIconClassNamesType = (typeof InputIconClassNames)[keyof typeof InputIconClassNames];

/**
 * Instance of InputIcon component.
 */
export type InputIconInstance = ComponentInstance<InputIconProps, InputIconState, InputIconExposes>;
