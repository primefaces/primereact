/**
 *
 * PaginatorEllipsis is a component that displays an ellipsis in a paginator.
 *
 * [Live Demo](https://www.primereact.org/paginator/)
 *
 * @module paginatorellipsis
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { PaginatorInstance, PaginatorPassThroughType } from './Paginator.types';

/**
 * Defines passthrough(pt) options type in PaginatorEllipsis component.
 */
export type PaginatorEllipsisPassThroughType<E> = PassThroughType<PaginatorEllipsisInstance, E>;

/**
 * Defines passthrough(pt) options of PaginatorEllipsis component.
 */
export interface PaginatorEllipsisPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: PaginatorPassThroughType<React.HTMLAttributes<HTMLButtonElement>>;
}

/**
 * Defines valid properties in PaginatorEllipsis component.
 */
export interface PaginatorEllipsisProps extends BaseComponentProps<PaginatorEllipsisInstance, unknown, PaginatorEllipsisPassThrough> {}

/**
 * Defines valid state in PaginatorEllipsis component.
 */
export interface PaginatorEllipsisState {}

/**
 * Defines the methods and properties exposed by PaginatorEllipsis component.
 */
export interface PaginatorEllipsisExposes {
    paginator: PaginatorInstance | undefined | null;
}

/**
 * Instance of PaginatorEllipsis component.
 */
export type PaginatorEllipsisInstance = ComponentInstance<PaginatorEllipsisProps, PaginatorEllipsisState, PaginatorEllipsisExposes>;
