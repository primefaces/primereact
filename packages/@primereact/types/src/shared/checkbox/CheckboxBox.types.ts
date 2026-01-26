/**
 *
 * CheckboxBox is a component that displays a box inside a Checkbox.
 *
 * [Live Demo](https://www.primereact.org/radiobutton/)
 *
 * @module radiobuttonbox
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { CheckboxRootInstance } from './CheckboxRoot.types';

/**
 * Defines passthrough(pt) options type in CheckboxBox component.
 */
export type CheckboxBoxPassThroughType<E> = PassThroughType<CheckboxBoxInstance, E>;

/**
 * Defines passthrough(pt) options of CheckboxBox component.
 */
export interface CheckboxBoxPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: CheckboxBoxPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in CheckboxBox component.
 */
export interface CheckboxBoxProps extends BaseComponentProps<CheckboxBoxInstance, unknown, CheckboxBoxPassThrough> {}

/**
 * Defines valid state in CheckboxBox component.
 */
export interface CheckboxBoxState {}

/**
 * Defines the methods and properties exposed by CheckboxBox component.
 */
export interface CheckboxBoxExposes {
    /**
     * The Carousel component instance.
     */
    checkbox: CheckboxRootInstance | undefined | null;
}

/**
 * Instance of CheckboxBox component.
 */
export type CheckboxBoxInstance = ComponentInstance<CheckboxBoxProps, CheckboxBoxState, CheckboxBoxExposes>;
