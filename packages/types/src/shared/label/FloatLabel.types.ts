/**
 *
 * FloatLabel visually integrates a label with its form element.
 *
 * [Live Demo](https://www.primereact.org/label/)
 *
 * @module floatlabel
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';

/**
 * Defines passthrough(pt) options type in FloatLabel component.
 */
export type FloatLabelPassThroughType<E> = PassThroughType<FloatLabelInstance, E>;

/**
 * Defines passthrough(pt) options of FloatLabel component.
 */
export interface FloatLabelPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: FloatLabelPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in FloatLabel component.
 */
export interface FloatLabelProps extends BaseComponentProps<FloatLabelInstance> {
    /**
     * Defines the positioning of the label relative to the input.
     * @defaultValue over
     */
    variant?: 'over' | 'in' | 'on' | undefined;
}

/**
 * Defines valid state in FloatLabel component.
 */
export interface FloatLabelState {}

/**
 * Defines the methods and properties exposed by FloatLabel component.
 */
export interface FloatLabelExposes {}

/**
 * Defines the CSS class names used in the FloatLabel component.
 */
export const FloatLabelClassNames = {
    /**
     * Class name of the root element
     */
    root: 'p-floatlabel'
} as const;

/**
 * Type representing the CSS class names used in the FloatLabel component.
 */
export type FloatLabelClassNamesType = (typeof FloatLabelClassNames)[keyof typeof FloatLabelClassNames];

/**
 * Instance of FloatLabel component.
 */
export type FloatLabelInstance = ComponentInstance<FloatLabelProps, FloatLabelState, FloatLabelExposes, FloatLabelPassThrough>;
