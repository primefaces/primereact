/**
 *
 * Paginator is a component that displays a paginator for a list of items.
 *
 * [Live Demo](https://www.primereact.org/paginator/)
 *
 * @module paginator
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { usePaginatorExposes, usePaginatorProps, usePaginatorState } from './usePaginator.types';

/**
 * Defines passthrough(pt) options type in Paginator component.
 */
export type PaginatorPassThroughType<E> = PassThroughType<PaginatorInstance, E>;

/**
 * Defines passthrough(pt) options of Paginator component.
 */
export interface PaginatorPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: PaginatorPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the content's DOM element.
     */
    content?: PaginatorPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the first's DOM element.
     */
    first?: PaginatorPassThroughType<React.HTMLAttributes<HTMLButtonElement>>;
    /**
     * Used to pass attributes to the prev's DOM element.
     */
    prev?: PaginatorPassThroughType<React.HTMLAttributes<HTMLButtonElement>>;
    /**
     * Used to pass attributes to the next's DOM element.
     */
    next?: PaginatorPassThroughType<React.HTMLAttributes<HTMLButtonElement>>;
    /**
     * Used to pass attributes to the last's DOM element.
     */
    last?: PaginatorPassThroughType<React.HTMLAttributes<HTMLButtonElement>>;
}

/**
 * Defines valid properties in Paginator component.
 */
export interface PaginatorProps extends BaseComponentProps<PaginatorInstance, usePaginatorProps, PaginatorPassThrough> {}

/**
 * Defines valid state in Paginator component.
 * @extends usePaginatorState
 */
export interface PaginatorState extends usePaginatorState {}

/**
 * Defines the methods and properties exposed by Paginator component.
 * @extends usePaginatorExposes
 */
export interface PaginatorExposes extends usePaginatorExposes {
    /**
     * Get the aria label for the given label type.
     * @param labelType - The type of label to get.
     * @returns The aria label for the given label type.
     */
    getAriaLabel: (labelType: string) => string;
}

/**
 * Defines the CSS class names used in the Paginator component.
 */
export const PaginatorClassNames = {
    /**
     * Class name of the paginator element
     */
    paginator: 'p-paginator',
    /**
     * Class name of the content start element
     */
    contentStart: 'p-paginator-content-start',
    /**
     * Class name of the content end element
     */
    contentEnd: 'p-paginator-content-end',
    /**
     * Class name of the first element
     */
    first: 'p-paginator-first',
    /**
     * Class name of the first icon element
     */
    firstIcon: 'p-paginator-first-icon',
    /**
     * Class name of the prev element
     */
    prev: 'p-paginator-prev',
    /**
     * Class name of the prev icon element
     */
    prevIcon: 'p-paginator-prev-icon',
    /**
     * Class name of the next element
     */
    next: 'p-paginator-next',
    /**
     * Class name of the next icon element
     */
    nextIcon: 'p-paginator-next-icon',
    /**
     * Class name of the last element
     */
    last: 'p-paginator-last',
    /**
     * Class name of the last icon element
     */
    lastIcon: 'p-paginator-last-icon',
    /**
     * Class name of the pages element
     */
    pages: 'p-paginator-pages',
    /**
     * Class name of the page element
     */
    page: 'p-paginator-page',
    /**
     * Class name of the current element
     */
    current: 'p-paginator-current',
    /**
     * Class name of the row per page dropdown element
     */
    pcRowPerPageDropdown: 'p-paginator-rpp-dropdown',
    /**
     * Class name of the jump to page dropdown element
     */
    pcJumpToPageDropdown: 'p-paginator-jtp-dropdown',
    /**
     * Class name of the jump to page input element
     */
    pcJumpToPageInputText: 'p-paginator-jtp-input'
} as const;

/**
 * Type representing the CSS class names used in the Paginator component.
 */
export type PaginatorClassNamesType = (typeof PaginatorClassNames)[keyof typeof PaginatorClassNames];

/**
 * Instance of Paginator component.
 */
export type PaginatorInstance = ComponentInstance<PaginatorProps, PaginatorState, PaginatorExposes>;
