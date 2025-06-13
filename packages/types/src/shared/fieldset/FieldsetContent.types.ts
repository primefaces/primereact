/**
 *
 * FieldsetContent is a component that displays content.
 *
 * [Live Demo](https://www.primereact.org/fieldset/)
 *
 * @module fieldsetcontent
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { FieldsetInstance } from './Fieldset.types';

/**
 * Defines passthrough(pt) options type in FieldsetContent component.
 */
export type FieldsetContentPassThroughType<E> = PassThroughType<FieldsetContentInstance, E>;

/**
 * Defines passthrough(pt) options of FieldsetContent component.
 */
export interface FieldsetContentPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: FieldsetContentPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in FieldsetContent component.
 */
export interface FieldsetContentProps extends BaseComponentProps<FieldsetContentInstance> {}

/**
 * Defines valid state in FieldsetContent component.
 */
export interface FieldsetContentState {}

/**
 * Defines the methods and properties exposed by FieldsetContent component.
 */
export interface FieldsetContentExposes {
    /**
     * The Switch component instance.
     */
    fieldset: FieldsetInstance | undefined | null;
}

/**
 * Instance of FieldsetContent component.
 */
export type FieldsetContentInstance = ComponentInstance<FieldsetContentProps, FieldsetContentState, FieldsetContentExposes, FieldsetContentPassThrough>;
