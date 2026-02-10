/**
 *
 * SelectHeader is the header container for the Select header.
 *
 * [Live Demo](https://www.primereact.org/select/)
 *
 * @module selectheader
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { SelectRootInstance } from './SelectRoot.types';

/**
 * Defines passthrough(pt) options type in SelectHeader component.
 */
export type SelectHeaderPassThroughType<E> = PassThroughType<SelectHeaderInstance, E>;

/**
 * Defines passthrough(pt) options of SelectHeader component.
 */
export interface SelectHeaderPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: SelectHeaderPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in SelectHeader component.
 */
export interface SelectHeaderProps extends BaseComponentProps<SelectHeaderInstance, unknown, SelectHeaderPassThrough> {}

/**
 * Defines valid state in SelectHeader component.
 */
export interface SelectHeaderState {}

/**
 * Defines the methods and properties exposed by SelectHeader component.
 */
export interface SelectHeaderExposes {
    /**
     * The Select component instance.
     */
    select: SelectRootInstance | undefined | null;
}

/**
 * Instance of SelectHeader component.
 */
export type SelectHeaderInstance = ComponentInstance<SelectHeaderProps, SelectHeaderState, SelectHeaderExposes>;
