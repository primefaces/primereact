/**
 *
 * InputNumberDecrement is a component that displays a decrement button.
 *
 * [Live Demo](https://www.primereact.org/inputnumber/)
 *
 * @module inputnumberdecrement
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { InputNumberInstance } from './InputNumber.types';

/**
 * Defines passthrough(pt) options type in InputNumberDecrement component.
 */
export type InputNumberDecrementPassThroughType<E> = PassThroughType<InputNumberDecrementInstance, E>;

/**
 * Defines passthrough(pt) options of InputNumberDecrement component.
 */
export interface InputNumberDecrementPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: InputNumberDecrementPassThroughType<React.HTMLAttributes<HTMLButtonElement>>;
}

/**
 * Defines valid properties in InputNumberDecrement component.
 */
export interface InputNumberDecrementProps extends BaseComponentProps<InputNumberDecrementInstance, unknown, InputNumberDecrementPassThrough> {}

/**
 * Defines valid state in InputNumberDecrement component.
 */
export interface InputNumberDecrementState {}

/**
 * Defines the methods and properties exposed by InputNumberDecrement component.
 */
export interface InputNumberDecrementExposes {
    /**
     * Instance of the InputNumber component.
     */
    inputnumber: InputNumberInstance | undefined | null;
}

/**
 * Instance of InputNumberDecrement component.
 */
export type InputNumberDecrementInstance = ComponentInstance<InputNumberDecrementProps, InputNumberDecrementState, InputNumberDecrementExposes>;
