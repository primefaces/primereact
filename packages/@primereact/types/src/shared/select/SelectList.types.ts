/**
 *
 * SelectList is the list container for the Select component options.
 *
 * [Live Demo](https://www.primereact.org/select/)
 *
 * @module selectlist
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { SelectRootInstance } from './SelectRoot.types';

/**
 * Defines passthrough(pt) options type in SelectList component.
 */
export type SelectListPassThroughType<E> = PassThroughType<SelectListInstance, E>;

/**
 * Defines passthrough(pt) options of SelectList component.
 */
export interface SelectListPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: SelectListPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in SelectList component.
 */
export interface SelectListProps extends BaseComponentProps<SelectListInstance, unknown, SelectListPassThrough> {}

/**
 * Defines valid state in SelectList component.
 */
export interface SelectListState {}

/**
 * Defines the methods and properties exposed by SelectList component.
 */
export interface SelectListExposes {
    /**
     * The Select component instance.
     */
    select: SelectRootInstance | undefined | null;
}

/**
 * Instance of SelectList component.
 */
export type SelectListInstance = ComponentInstance<SelectListProps, SelectListState, SelectListExposes>;
