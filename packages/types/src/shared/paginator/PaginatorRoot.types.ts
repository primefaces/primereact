/**
 *
 * Paginator is a component that displays a paginator for a list of items.
 *
 * [Live Demo](https://www.primereact.org/paginator/)
 *
 * @module paginatorroot
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { usePaginatorExposes, usePaginatorProps, usePaginatorState } from './usePaginator.types';

/**
 * Defines passthrough(pt) options type in Paginator component.
 */
export type PaginatorRootPassThroughType<E> = PassThroughType<PaginatorRootInstance, E>;

/**
 * Defines passthrough(pt) options of Paginator component.
 */
export interface PaginatorRootPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: PaginatorRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the content's DOM element.
     */
    content?: PaginatorRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the first's DOM element.
     */
    first?: PaginatorRootPassThroughType<React.HTMLAttributes<HTMLButtonElement>>;
    /**
     * Used to pass attributes to the prev's DOM element.
     */
    prev?: PaginatorRootPassThroughType<React.HTMLAttributes<HTMLButtonElement>>;
    /**
     * Used to pass attributes to the next's DOM element.
     */
    next?: PaginatorRootPassThroughType<React.HTMLAttributes<HTMLButtonElement>>;
    /**
     * Used to pass attributes to the last's DOM element.
     */
    last?: PaginatorRootPassThroughType<React.HTMLAttributes<HTMLButtonElement>>;
}

/**
 * Defines valid properties in Paginator component.
 */
export interface PaginatorRootProps extends BaseComponentProps<PaginatorRootInstance, usePaginatorProps, PaginatorRootPassThrough> {}

/**
 * Defines valid state in Paginator component.
 * @extends usePaginatorState
 */
export interface PaginatorRootState extends usePaginatorState {}

/**
 * Defines the methods and properties exposed by Paginator component.
 * @extends usePaginatorExposes
 */
export interface PaginatorRootExposes extends usePaginatorExposes {
    /**
     * Get the aria label for the given label type.
     * @param labelType - The type of label to get.
     * @returns The aria label for the given label type.
     */
    getAriaLabel: (labelType: string) => string;
}

/**
 * Instance of Paginator component.
 */
export type PaginatorRootInstance = ComponentInstance<PaginatorRootProps, PaginatorRootState, PaginatorRootExposes>;
