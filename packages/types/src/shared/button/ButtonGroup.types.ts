/**
 *
 * ButtonGroup is a component that groups multiple buttons together.
 *
 * [Live Demo](https://www.primereact.org/button/)
 *
 * @module buttongroup
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughOptionType } from '..';

/**
 * Defines passthrough(pt) options type in Button component.
 */
export type ButtonGroupPassThroughOptionType<E> = PassThroughOptionType<ButtonGroupInstance, E>;

/**
 * Defines passthrough(pt) options of Button component.
 */
export interface ButtonGroupPassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: ButtonGroupPassThroughOptionType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in ButtonGroup component.
 */
export interface ButtonGroupProps extends BaseComponentProps {}

/**
 * Defines valid state in ButtonGroup component.
 */
export interface ButtonGroupState {}

/**
 * Defines the methods and properties exposed by ButtonGroup component.
 */
export interface ButtonGroupExposes {}

/**
 * Instance of ButtonGroup component.
 */
export type ButtonGroupInstance = ComponentInstance<ButtonGroupProps, ButtonGroupState, ButtonGroupExposes>;
