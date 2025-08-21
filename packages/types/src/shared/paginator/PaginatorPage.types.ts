/**
 *
 * PaginatorPage is a component that displays a page in a paginator.
 *
 * [Live Demo](https://www.primereact.org/paginator/)
 *
 * @module paginatorpage
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { PaginatorInstance, PaginatorPassThroughType } from './Paginator.types';

/**
 * Defines passthrough(pt) options type in PaginatorPage component.
 */
export type PaginatorPagePassThroughType<E> = PassThroughType<PaginatorPageInstance, E>;

/**
 * Defines passthrough(pt) options of PaginatorPage component.
 */
export interface PaginatorPagePassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: PaginatorPassThroughType<React.HTMLAttributes<HTMLButtonElement>>;
}

/**
 * Defines valid properties in PaginatorPage component.
 */
export interface PaginatorPageProps extends BaseComponentProps<PaginatorPageInstance, unknown, PaginatorPagePassThrough> {
    /**
     * Used to disable the page button.
     */
    disabled?: boolean;
    /**
     * Used to set the value of the page button.
     */
    value?: number;
}

/**
 * Defines valid state in PaginatorPage component.
 */
export interface PaginatorPageState {}

/**
 * Defines the methods and properties exposed by PaginatorPage component.
 */
export interface PaginatorPageExposes {
    paginator: PaginatorInstance | undefined | null;
}

/**
 * Instance of PaginatorPage component.
 */
export type PaginatorPageInstance = ComponentInstance<PaginatorPageProps, PaginatorPageState, PaginatorPageExposes>;
