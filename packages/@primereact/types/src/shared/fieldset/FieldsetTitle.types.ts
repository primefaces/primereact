/**
 *
 * FieldsetTitle is a component that displays a title.
 *
 * [Live Demo](https://www.primereact.org/fieldset/)
 *
 * @module fieldsetTitle
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';

/**
 * Defines passthrough(pt) options type in FieldsetTitle component.
 */
export type FieldsetTitlePassThroughType<E> = PassThroughType<FieldsetTitleInstance, E>;

/**
 * Defines passthrough(pt) options of FieldsetTitle component.
 */
export interface FieldsetTitlePassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: FieldsetTitlePassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in FieldsetTitle component.
 */
export interface FieldsetTitleProps extends BaseComponentProps<FieldsetTitleInstance, unknown, FieldsetTitlePassThrough> {}

/**
 * Defines valid state in FieldsetTitle component.
 */
export interface FieldsetTitleState {}

/**
 * Defines the methods and properties exposed by FieldsetTitle component.
 */
export interface FieldsetTitleExposes {}

/**
 * Instance of FieldsetTitle component.
 */
export type FieldsetTitleInstance = ComponentInstance<FieldsetTitleProps, FieldsetTitleState, FieldsetTitleExposes>;
