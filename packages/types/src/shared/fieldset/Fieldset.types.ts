/**
 *
 * Fieldset component is used to select a boolean value.
 *
 * [Live Demo](https://www.primereact.org/fieldset/)
 *
 * @module fieldset
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { useFieldsetExposes, useFieldsetProps, useFieldsetState } from './useFieldset.types';

/**
 * Defines passthrough(pt) options type in Fieldset component.
 */
export type FieldsetPassThroughType<E> = PassThroughType<FieldsetInstance, E>;

/**
 * Defines passthrough(pt) options of Fieldset component.
 */
export interface FieldsetPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: FieldsetPassThroughType<React.HTMLAttributes<HTMLFieldSetElement>>;
    /**
     * Used to pass attributes to the legend's DOM element.
     */
    legend?: FieldsetPassThroughType<React.HTMLAttributes<HTMLLegendElement>>;
    /**
     * Used to pass attributes to the content's DOM element.
     */
    content?: FieldsetPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in Fieldset component.
 */
export interface FieldsetProps extends BaseComponentProps<FieldsetInstance, useFieldsetProps, FieldsetPassThrough> {}

/**
 * Defines valid state in Fieldset component.
 * @extends useFieldsetState
 */
export interface FieldsetState extends useFieldsetState {}

/**
 * Defines the methods and properties exposed by Fieldset component.
 * @extends useFieldsetExposes
 */
export interface FieldsetExposes extends useFieldsetExposes {}

/**
 * Defines the CSS class names used in the Fieldset component.
 */
export const FieldsetClassNames = {
    /**
     * Class name of the root element
     */
    root: 'p-fieldset',
    /**
     * Class name of the legend element
     */
    legend: 'p-fieldset-legend',
    /**
     * Class name of the content element
     */
    content: 'p-fieldset-content'
} as const;

/**
 * Type representing the CSS class names used in the Fieldset component.
 */
export type FieldsetClassNamesType = (typeof FieldsetClassNames)[keyof typeof FieldsetClassNames];

/**
 * Instance of Fieldset component.
 */
export type FieldsetInstance = ComponentInstance<FieldsetProps, FieldsetState, FieldsetExposes>;
