/**
 *
 * PaginatorNext is a component that displays a next page button in a paginator.
 *
 * [Live Demo](https://www.primereact.org/paginator/)
 *
 * @module paginatornext
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { PaginatorInstance, PaginatorPassThroughType } from './Paginator.types';

/**
 * Defines passthrough(pt) options type in PaginatorNext component.
 */
export type PaginatorNextPassThroughType<E> = PassThroughType<PaginatorNextInstance, E>;

/**
 * Defines passthrough(pt) options of PaginatorNext component.
 */
export interface PaginatorNextPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: PaginatorPassThroughType<React.HTMLAttributes<HTMLButtonElement>>;
}

/**
 * Defines valid properties in PaginatorNext component.
 */
export interface PaginatorNextProps extends BaseComponentProps<PaginatorNextInstance, unknown, PaginatorNextPassThrough> {
    /**
     * Used to disable the next button.
     */
    disabled?: boolean;
}

/**
 * Defines valid state in PaginatorNext component.
 */
export interface PaginatorNextState {}

/**
 * Defines the methods and properties exposed by PaginatorNext component.
 */
export interface PaginatorNextExposes {
    paginator: PaginatorInstance | undefined | null;
}

/**
 * Instance of PaginatorNext component.
 */
export type PaginatorNextInstance = ComponentInstance<PaginatorNextProps, PaginatorNextState, PaginatorNextExposes>;
