/**
 *
 * PaginatorPages is a component that displays a pages in a paginator.
 *
 * [Live Demo](https://www.primereact.org/paginator/)
 *
 * @module paginatorpages
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { PaginatorInstance, PaginatorPassThroughType } from './Paginator.types';

/**
 * Defines passthrough(pt) options type in PaginatorPages component.
 */
export type PaginatorPagesPassThroughType<E> = PassThroughType<PaginatorPagesInstance, E>;

/**
 * Defines passthrough(pt) options of PaginatorPages component.
 */
export interface PaginatorPagesPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: PaginatorPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in PaginatorPages component.
 */
export interface PaginatorPagesProps extends BaseComponentProps<PaginatorPagesInstance, unknown, PaginatorPagesPassThrough> {}

/**
 * Defines valid state in PaginatorPages component.
 */
export interface PaginatorPagesState {}

/**
 * Defines the methods and properties exposed by PaginatorPages component.
 */
export interface PaginatorPagesExposes {
    paginator: PaginatorInstance | undefined | null;
}

/**
 * Instance of PaginatorPages component.
 */
export type PaginatorPagesInstance = ComponentInstance<PaginatorPagesProps, PaginatorPagesState, PaginatorPagesExposes>;
