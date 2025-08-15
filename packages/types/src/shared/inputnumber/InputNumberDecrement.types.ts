/**
 *
 * InputNumberIncrement is a component that displays a increment button.
 *
 * [Live Demo](https://www.primereact.org/inputnumber/)
 *
 * @module inputnumberincrement
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { InputNumberInstance } from './InputNumber.types';

/**
 * Defines passthrough(pt) options type in InputNumberIncrement component.
 */
export type InputNumberIncrementPassThroughType<E> = PassThroughType<InputNumberIncrementInstance, E>;

/**
 * Defines passthrough(pt) options of InputNumberIncrement component.
 */
export interface InputNumberIncrementPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: InputNumberIncrementPassThroughType<React.HTMLAttributes<HTMLButtonElement>>;
}

/**
 * Defines valid properties in InputNumberIncrement component.
 */
export interface InputNumberIncrementProps extends BaseComponentProps<InputNumberIncrementInstance, unknown, InputNumberIncrementPassThrough> {}

/**
 * Defines valid state in InputNumberIncrement component.
 */
export interface InputNumberIncrementState {}

/**
 * Defines the methods and properties exposed by InputNumberIncrement component.
 */
export interface InputNumberIncrementExposes {
    /**
     * Instance of the InputNumber component.
     */
    inputnumber: InputNumberInstance | undefined | null;
}

/**
 * Instance of InputNumberIncrement component.
 */
export type InputNumberIncrementInstance = ComponentInstance<InputNumberIncrementProps, InputNumberIncrementState, InputNumberIncrementExposes>;
