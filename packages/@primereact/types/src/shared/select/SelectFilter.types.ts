/**
 *
 * SelectFilter is the filter input for the Select component.
 *
 * [Live Demo](https://www.primereact.org/select/)
 *
 * @module selectfilter
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { SelectRootInstance } from './SelectRoot.types';

/**
 * Defines passthrough(pt) options type in SelectFilter component.
 */
export type SelectFilterPassThroughType<E> = PassThroughType<SelectFilterInstance, E>;

/**
 * Defines passthrough(pt) options of SelectFilter component.
 */
export interface SelectFilterPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: SelectFilterPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the input's DOM element.
     */
    input?: SelectFilterPassThroughType<React.HTMLAttributes<HTMLInputElement>>;
}

/**
 * Defines valid properties in SelectFilter component.
 */
export interface SelectFilterProps extends BaseComponentProps<SelectFilterInstance, unknown, SelectFilterPassThrough> {
    /**
     * Placeholder text for the filter input.
     */
    placeholder?: string | undefined;
}

/**
 * Defines valid state in SelectFilter component.
 */
export interface SelectFilterState {}

/**
 * Defines the methods and properties exposed by SelectFilter component.
 */
export interface SelectFilterExposes {
    /**
     * The Select component instance.
     */
    select: SelectRootInstance | undefined | null;
}

/**
 * Instance of SelectFilter component.
 */
export type SelectFilterInstance = ComponentInstance<SelectFilterProps, SelectFilterState, SelectFilterExposes>;
