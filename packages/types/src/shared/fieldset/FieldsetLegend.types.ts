/**
 *
 * FieldsetLegend is a component that displays a container for legend.
 *
 * [Live Demo](https://www.primereact.org/fieldset/)
 *
 * @module fieldsetlegend
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { FieldsetInstance } from './Fieldset.types';

/**
 * Defines passthrough(pt) options type in FieldsetLegend component.
 */
export type FieldsetLegendPassThroughType<E> = PassThroughType<FieldsetLegendInstance, E>;

/**
 * Defines passthrough(pt) options of FieldsetLegend component.
 */
export interface FieldsetLegendPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: FieldsetLegendPassThroughType<React.HTMLAttributes<HTMLLegendElement>>;
}

/**
 * Defines valid properties in FieldsetLegend component.
 */
export interface FieldsetLegendProps extends BaseComponentProps<FieldsetLegendInstance> {}

/**
 * Defines valid state in FieldsetLegend component.
 */
export interface FieldsetLegendState {}

/**
 * Defines the methods and properties exposed by FieldsetLegend component.
 */
export interface FieldsetLegendExposes {
    /**
     * The Fieldset component instance.
     */
    fieldset: FieldsetInstance | undefined | null;
}

/**
 * Instance of FieldsetLegend component.
 */
export type FieldsetLegendInstance = ComponentInstance<FieldsetLegendProps, FieldsetLegendState, FieldsetLegendExposes, FieldsetLegendPassThrough>;
