/**
 *
 * PaginatorContent is a component that displays the content of a paginator.
 *
 * [Live Demo](https://www.primereact.org/paginator/)
 *
 * @module paginatorcontent
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { PaginatorInstance, PaginatorPassThroughType } from './Paginator.types';

/**
 * Defines passthrough(pt) options type in PaginatorContent component.
 */
export type PaginatorContentPassThroughType<E> = PassThroughType<PaginatorContentInstance, E>;

/**
 * Defines passthrough(pt) options of PaginatorContent component.
 */
export interface PaginatorContentPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: PaginatorPassThroughType<React.HTMLAttributes<HTMLButtonElement>>;
}

/**
 * Defines valid properties in PaginatorContent component.
 */
export interface PaginatorContentProps extends BaseComponentProps<PaginatorContentInstance, unknown, PaginatorContentPassThrough> {}

/**
 * Defines valid state in PaginatorContent component.
 */
export interface PaginatorContentState {}

/**
 * Defines the methods and properties exposed by PaginatorContent component.
 */
export interface PaginatorContentExposes {
    paginator: PaginatorInstance | undefined | null;
}

/**
 * Instance of PaginatorContent component.
 */
export type PaginatorContentInstance = ComponentInstance<PaginatorContentProps, PaginatorContentState, PaginatorContentExposes>;
