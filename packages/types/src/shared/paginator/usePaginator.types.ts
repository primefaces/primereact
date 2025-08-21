/**
 *
 * The usePaginator manages the state and functionality of a Paginator component.
 *
 * [Live Demo](https://www.primereact.org/paginator/)
 *
 * @module usepaginator
 * @group headless
 *
 */
import type { HeadlessInstance } from '@primereact/types/core';

/**
 * Represents a page item in paginator
 */
export interface PaginatorPageItem {
    /**
     * Type of the page item
     */
    type: 'page' | 'ellipsis';
    /**
     * Page number value (only for 'page' type)
     */
    value?: number;
}

/**
 * Defines the change event object for usePaginator.
 */
export interface usePaginatorChangeEvent {
    /**
     * The original event that triggered the change.
     */
    originalEvent: React.SyntheticEvent | null;
    /**
     * The new page number.
     */
    value: number;
}

/**
 * Defines valid properties in usePaginator.
 */
export interface usePaginatorProps {
    /**
     * Default page number.
     * @default 1
     */
    defaultPage?: number;
    /**
     * Current page number (controlled).
     */
    page?: number;
    /**
     * Total number of items.
     * @default 0
     */
    total?: number;
    /**
     * Number of items per page.
     * @default 10
     */
    itemsPerPage?: number;
    /**
     * Callback fired when the page changes.
     * @param event The event that triggered the change.
     */
    onPageChange?: (event: usePaginatorChangeEvent) => void;
    /**
     * Number of sibling pages to show on each side of current page.
     * @default 2
     */
    siblings?: number;
    /**
     * Number of edge pages to show at the beginning and end.
     * @default 1
     */
    edges?: number;
    /**
     * Whether the paginator is disabled.
     * @default false
     */
    disabled?: boolean;
    /**
     * Whether to show ellipsis.
     * @default true
     */
    showEllipsis?: boolean;
}

/**
 * Defines valid state in usePaginator.
 */
export interface usePaginatorState {
    /**
     * Current active page number.
     */
    activePage: number;
    /**
     * Whether the previous page is available.
     */
    canPrev: boolean;
    /**
     * Whether the next page is available.
     */
    canNext: boolean;
    /**
     * Total number of pages.
     */
    totalPages: number;
}

/**
 * Defines the return type of usePaginator.
 */
export interface usePaginatorExposes {
    /**
     * Go to previous page.
     */
    prev: () => void;
    /**
     * Go to next page.
     */
    next: () => void;
    /**
     * Go to first page.
     */
    first: () => void;
    /**
     * Go to last page.
     */
    last: () => void;
    /**
     * Set the current page.
     */
    handlePage: (page?: number) => void;
    /**
     * Pages array.
     */
    pages: PaginatorPageItem[];
}

/**
 * Instance of usePaginator headless.
 */
export type usePaginatorInstance = HeadlessInstance<usePaginatorProps, usePaginatorState, usePaginatorExposes>;
