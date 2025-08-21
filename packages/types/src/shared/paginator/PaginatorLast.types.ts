/**
 *
 * PaginatorLast is a component that displays a last page button in a paginator.
 *
 * [Live Demo](https://www.primereact.org/paginator/)
 *
 * @module paginatorlast
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { PaginatorInstance, PaginatorPassThroughType } from './Paginator.types';

/**
 * Defines passthrough(pt) options type in PaginatorLast component.
 */
export type PaginatorLastPassThroughType<E> = PassThroughType<PaginatorLastInstance, E>;

/**
 * Defines passthrough(pt) options of PaginatorLast component.
 */
export interface PaginatorLastPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: PaginatorPassThroughType<React.HTMLAttributes<HTMLButtonElement>>;
}

/**
 * Defines valid properties in PaginatorLast component.
 */
export interface PaginatorLastProps extends BaseComponentProps<PaginatorLastInstance, unknown, PaginatorLastPassThrough> {
    /**
     * Used to disable the last button.
     */
    disabled?: boolean;
}

/**
 * Defines valid state in PaginatorLast component.
 */
export interface PaginatorLastState {}

/**
 * Defines the methods and properties exposed by PaginatorLast component.
 */
export interface PaginatorLastExposes {
    paginator: PaginatorInstance | undefined | null;
}

/**
 * Instance of PaginatorLast component.
 */
export type PaginatorLastInstance = ComponentInstance<PaginatorLastProps, PaginatorLastState, PaginatorLastExposes>;
