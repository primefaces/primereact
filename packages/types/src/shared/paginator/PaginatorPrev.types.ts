/**
 *
 * PaginatorPrev is a component that displays a previous page button in a paginator.
 *
 * [Live Demo](https://www.primereact.org/paginator/)
 *
 * @module paginatorprev
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { PaginatorInstance, PaginatorPassThroughType } from './Paginator.types';

/**
 * Defines passthrough(pt) options type in PaginatorPrev component.
 */
export type PaginatorPrevPassThroughType<E> = PassThroughType<PaginatorPrevInstance, E>;

/**
 * Defines passthrough(pt) options of PaginatorPrev component.
 */
export interface PaginatorPrevPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: PaginatorPassThroughType<React.HTMLAttributes<HTMLButtonElement>>;
}

/**
 * Defines valid properties in PaginatorPrev component.
 */
export interface PaginatorPrevProps extends BaseComponentProps<PaginatorPrevInstance, unknown, PaginatorPrevPassThrough> {
    /**
     * Used to disable the previous button.
     */
    disabled?: boolean;
}

/**
 * Defines valid state in PaginatorPrev component.
 */
export interface PaginatorPrevState {}

/**
 * Defines the methods and properties exposed by PaginatorPrev component.
 */
export interface PaginatorPrevExposes {
    paginator: PaginatorInstance | undefined | null;
}

/**
 * Instance of PaginatorPrev component.
 */
export type PaginatorPrevInstance = ComponentInstance<PaginatorPrevProps, PaginatorPrevState, PaginatorPrevExposes>;
