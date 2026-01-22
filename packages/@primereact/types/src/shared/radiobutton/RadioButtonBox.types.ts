/**
 *
 * RadioButtonBox is a component that displays a box inside a RadioButton.
 *
 * [Live Demo](https://www.primereact.org/radiobutton/)
 *
 * @module radiobuttonbox
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { RadioButtonRootInstance } from './RadioButtonRoot.types';

/**
 * Defines passthrough(pt) options type in RadioButtonBox component.
 */
export type RadioButtonBoxPassThroughType<E> = PassThroughType<RadioButtonBoxInstance, E>;

/**
 * Defines passthrough(pt) options of RadioButtonBox component.
 */
export interface RadioButtonBoxPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: RadioButtonBoxPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in RadioButtonBox component.
 */
export interface RadioButtonBoxProps extends BaseComponentProps<RadioButtonBoxInstance, unknown, RadioButtonBoxPassThrough> {}

/**
 * Defines valid state in RadioButtonBox component.
 */
export interface RadioButtonBoxState {}

/**
 * Defines the methods and properties exposed by RadioButtonBox component.
 */
export interface RadioButtonBoxExposes {
    /**
     * The Carousel component instance.
     */
    radiobutton: RadioButtonRootInstance | undefined | null;
}

/**
 * Instance of RadioButtonBox component.
 */
export type RadioButtonBoxInstance = ComponentInstance<RadioButtonBoxProps, RadioButtonBoxState, RadioButtonBoxExposes>;
