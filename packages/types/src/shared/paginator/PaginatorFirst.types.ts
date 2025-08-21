/**
 *
 * PaginatorFirst is a component that displays a first page button in a paginator.
 *
 * [Live Demo](https://www.primereact.org/paginator/)
 *
 * @module paginatorfirst
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { PaginatorInstance, PaginatorPassThroughType } from './Paginator.types';

/**
 * Defines passthrough(pt) options type in PaginatorFirst component.
 */
export type PaginatorFirstPassThroughType<E> = PassThroughType<PaginatorFirstInstance, E>;

/**
 * Defines passthrough(pt) options of PaginatorFirst component.
 */
export interface PaginatorFirstPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: PaginatorPassThroughType<React.HTMLAttributes<HTMLButtonElement>>;
}

/**
 * Defines valid properties in PaginatorFirst component.
 */
export interface PaginatorFirstProps extends BaseComponentProps<PaginatorFirstInstance, unknown, PaginatorFirstPassThrough> {
    /**
     * Used to disable the first button.
     */
    disabled?: boolean;
}

/**
 * Defines valid state in PaginatorFirst component.
 */
export interface PaginatorFirstState {}

/**
 * Defines the methods and properties exposed by PaginatorFirst component.
 */
export interface PaginatorFirstExposes {
    paginator: PaginatorInstance | undefined | null;
}

/**
 * Instance of PaginatorFirst component.
 */
export type PaginatorFirstInstance = ComponentInstance<PaginatorFirstProps, PaginatorFirstState, PaginatorFirstExposes>;
