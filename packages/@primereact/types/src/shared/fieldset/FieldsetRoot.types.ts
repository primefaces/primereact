/**
 *
 * Fieldset component is used to select a boolean value.
 *
 * [Live Demo](https://www.primereact.org/fieldset/)
 *
 * @module fieldsetroot
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { useFieldsetExposes, useFieldsetProps, useFieldsetState } from './useFieldset.types';

/**
 * Defines passthrough(pt) options type in Fieldset component.
 */
export type FieldsetRootPassThroughType<E> = PassThroughType<FieldsetRootInstance, E>;

/**
 * Defines passthrough(pt) options of Fieldset component.
 */
export interface FieldsetRootPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: FieldsetRootPassThroughType<React.HTMLAttributes<HTMLFieldSetElement>>;
    /**
     * Used to pass attributes to the legend's DOM element.
     */
    legend?: FieldsetRootPassThroughType<React.HTMLAttributes<HTMLLegendElement>>;
    /**
     * Used to pass attributes to the content's DOM element.
     */
    content?: FieldsetRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in Fieldset component.
 */
export interface FieldsetRootProps extends BaseComponentProps<FieldsetRootInstance, useFieldsetProps, FieldsetRootPassThrough> {}

/**
 * Defines valid state in Fieldset component.
 * @extends useFieldsetState
 */
export interface FieldsetRootState extends useFieldsetState {}

/**
 * Defines the methods and properties exposed by Fieldset component.
 * @extends useFieldsetExposes
 */
export interface FieldsetRootExposes extends useFieldsetExposes {}

/**
 * Instance of Fieldset component.
 */
export type FieldsetRootInstance = ComponentInstance<FieldsetRootProps, FieldsetRootState, FieldsetRootExposes>;
