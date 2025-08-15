/**
 *
 * InputGroup displays text, icon, buttons and other content can be grouped next to an input.
 *
 * [Live Demo](https://www.primereact.org/inputgroup/)
 *
 * @module inputgroup
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { useInputGroupExposes, useInputGroupProps, useInputGroupState } from './useInputGroup.types';

/**
 * Defines passthrough(pt) options type in InputGroup component.
 */
export type InputGroupPassThroughType<E> = PassThroughType<InputGroupInstance, E>;

/**
 * Defines passthrough(pt) options of InputGroup component.
 */
export interface InputGroupPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: InputGroupPassThroughType<React.InputHTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the addon's DOM element.
     */
    addon?: InputGroupPassThroughType<React.InputHTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in InputGroup component.
 */
export interface InputGroupProps extends BaseComponentProps<InputGroupInstance, useInputGroupProps, InputGroupPassThrough> {}

/**
 * Defines valid state in InputGroup component.
 * @extends useInputGroupState
 */
export interface InputGroupState extends useInputGroupState {}

/**
 * Defines the methods and properties exposed by InputGroup component.
 * @extends useInputGroupExposes
 */
export interface InputGroupExposes extends useInputGroupExposes {}

/**
 * Defines the CSS class names used in the InputGroup component.
 */
export const InputGroupClassNames = {
    /**
     * Class name of the root element
     */
    root: 'p-inputgroup'
} as const;

/**
 * Type representing the CSS class names used in the InputGroup component.
 */
export type InputGroupClassNamesType = (typeof InputGroupClassNames)[keyof typeof InputGroupClassNames];

/**
 * Instance of InputGroup component.
 */
export type InputGroupInstance = ComponentInstance<InputGroupProps, InputGroupState, InputGroupExposes>;
