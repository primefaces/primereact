/**
 *
 * FloatLabel visually integrates a label with its form element.
 *
 * [Live Demo](https://www.primereact.org/floatlabel/)
 *
 * @module FloatLabel
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { useFloatLabelExposes, useFloatLabelProps, useFloatLabelState } from './useFloatLabel.types';

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
export interface FloatLabelProps extends BaseComponentProps<FloatLabelInstance, useFloatLabelProps, FloatLabelPassThrough> {
    /**
     * Defines the positioning of the label relative to the input.
     * @default over
     */
    variant?: 'over' | 'in' | 'on' | undefined;
}

/**
 * Defines valid state in FloatLabel component.
 * @extends useFloatLabelState
 */
export interface FloatLabelState extends useFloatLabelState {}

/**
 * Defines the methods and properties exposed by FloatLabel component.
 * @extends useFloatLabelExposes
 */
export interface FloatLabelExposes extends useFloatLabelExposes {}

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
export type FloatLabelInstance = ComponentInstance<FloatLabelProps, FloatLabelState, FloatLabelExposes>;
