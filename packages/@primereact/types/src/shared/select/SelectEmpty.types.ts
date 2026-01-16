/**
 *
 * SelectEmpty is displayed when no options match in the Select component.
 *
 * [Live Demo](https://www.primereact.org/select/)
 *
 * @module selectempty
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { SelectRootInstance } from './SelectRoot.types';

/**
 * Defines passthrough(pt) options type in SelectEmpty component.
 */
export type SelectEmptyPassThroughType<E> = PassThroughType<SelectEmptyInstance, E>;

/**
 * Defines passthrough(pt) options of SelectEmpty component.
 */
export interface SelectEmptyPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: SelectEmptyPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in SelectEmpty component.
 */
export interface SelectEmptyProps extends BaseComponentProps<SelectEmptyInstance, unknown, SelectEmptyPassThrough> {}

/**
 * Defines valid state in SelectEmpty component.
 */
export interface SelectEmptyState {}

/**
 * Defines the methods and properties exposed by SelectEmpty component.
 */
export interface SelectEmptyExposes {
    /**
     * The Select component instance.
     */
    select: SelectRootInstance | undefined | null;
}

/**
 * Instance of SelectEmpty component.
 */
export type SelectEmptyInstance = ComponentInstance<SelectEmptyProps, SelectEmptyState, SelectEmptyExposes>;
