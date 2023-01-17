/**
 *
 * Paginator is a generic widget to display content in paged format.
 *
 * [Live Demo](https://www.primefaces.org/primereact/paginator/)
 *
 * @module paginator
 *
 */
import * as React from 'react';

/**
 * Custom page change event.
 * @see {@link PaginatorProps.onPageChange}
 * @event
 */
interface PaginatorPageStateEvent {
    /**
     * New page number
     */
    first: number;
    /**
     * Index of first record
     */
    rows: number;
    /**
     * Number of rows to display in new page
     */
    page: number;
    /**
     * Total number of pages
     */
    pageCount: number;
}

/**
 * @todo Write the documentation
 */
interface PaginatorFirstPageLinkOptions {
    /**
     * @todo Write the documentation
     */
    onClick(event: React.SyntheticEvent): void;
    /**
     * @todo Write the documentation
     */
    className: string;
    /**
     * @todo Write the documentation
     */
    iconClassName: string;
    /**
     * @todo Write the documentation
     */
    disabled: boolean;
    /**
     * @todo Write the documentation
     */
    element: JSX.Element;
    /**
     * @todo Write the documentation
     */
    props: PaginatorProps;
}

/**
 * @todo Write the documentation
 */
interface PaginatorPrevPageLinkOptions {
    /**
     * @todo Write the documentation
     */
    onClick(event: React.SyntheticEvent): void;
    /**
     * @todo Write the documentation
     */
    className: string;
    /**
     * @todo Write the documentation
     */
    iconClassName: string;
    /**
     * @todo Write the documentation
     */
    disabled: boolean;
    /**
     * @todo Write the documentation
     */
    element: JSX.Element;
    /**
     * @todo Write the documentation
     */
    props: PaginatorProps;
}

/**
 * @todo Write the documentation
 */
interface PaginatorViewOptions {
    /**
     * @todo Write the documentation
     */
    startPage: number;
    /**
     * @todo Write the documentation
     */
    endPage: number;
}

/**
 * @todo Write the documentation
 */
interface PaginatorPageLinksOptions {
    /**
     * @todo Write the documentation
     */
    onClick(event: React.SyntheticEvent): void;
    /**
     * @todo Write the documentation
     */
    className: string;
    /**
     * @todo Write the documentation
     */
    view: PaginatorViewOptions;
    /**
     * @todo Write the documentation
     */
    page: number;
    /**
     * @todo Write the documentation
     */
    currentPage: number;
    /**
     * @todo Write the documentation
     */
    totalPages: number;
    /**
     * @todo Write the documentation
     */
    element: JSX.Element;
    /**
     * @todo Write the documentation
     */
    props: PaginatorProps;
}

/**
 * @todo Write the documentation
 */
interface PaginatorNextPageLinkOptions {
    /**
     * @todo Write the documentation
     */
    onClick(event: React.SyntheticEvent): void;
    /**
     * @todo Write the documentation
     */
    className: string;
    /**
     * @todo Write the documentation
     */
    iconClassName: string;
    /**
     * @todo Write the documentation
     */
    disabled: boolean;
    /**
     * @todo Write the documentation
     */
    element: JSX.Element;
    /**
     * @todo Write the documentation
     */
    props: PaginatorProps;
}

/**
 * @todo Write the documentation
 */
interface PaginatorLastPageLinkOptions {
    /**
     * @todo Write the documentation
     */
    onClick(event: React.SyntheticEvent): void;
    /**
     * @todo Write the documentation
     */
    className: string;
    /**
     * @todo Write the documentation
     */
    iconClassName: string;
    /**
     * @todo Write the documentation
     */
    disabled: boolean;
    /**
     * @todo Write the documentation
     */
    element: JSX.Element;
    /**
     * @todo Write the documentation
     */
    props: PaginatorProps;
}

/**
 * @todo Write the documentation
 */
interface PaginatorChangeTargetOptions {
    /**
     * @todo Write the documentation
     */
    name: string;
    /**
     * @todo Write the documentation
     */
    id: string;
    /**
     * @todo Write the documentation
     */
    value: string | undefined | null;
}

/**
 * Custom change event.
 * @see {@link PaginatorRowsPerPageDropdownOptions.onChange}
 * @event
 */
interface PaginatorChangeEvent {
    /**
     * @todo Write the documentation
     */
    originalEvent: React.SyntheticEvent;
    /**
     * @todo Write the documentation
     */
    value: string | undefined | null;
    /**
     * @todo Write the documentation
     */
    stopPropagation(): void;
    /**
     * @todo Write the documentation
     */
    preventDefault(): void;
    /**
     * @todo Write the documentation
     */
    target: PaginatorChangeTargetOptions;
}

/**
 * @todo Write the documentation
 */
interface PaginatorRowsPerPageDropdownOptions {
    /**
     * @todo Write the documentation
     */
    value: any;
    /**
     * @todo Write the documentation
     */
    options: any[];
    /**
     * @todo Write the documentation
     * @param {PaginatorChangeEvent} event - Custom change event.
     */
    onChange(event: PaginatorChangeEvent): void;
    /**
     * @todo Write the documentation
     */
    appendTo: 'self' | HTMLElement | null | undefined;
    /**
     * @todo Write the documentation
     */
    currentPage: number;
    /**
     * @todo Write the documentation
     */
    totalPages: number;
    /**
     * @todo Write the documentation
     */
    totalRecords: number;
    /**
     * @todo Write the documentation
     */
    element: JSX.Element;
    /**
     * @todo Write the documentation
     */
    props: PaginatorProps;
    /**
     * @todo Write the documentation
     */
    disabled: boolean;
}

/**
 * @todo Write the documentation
 */
interface PaginatorCurrentPageReportOptions {
    /**
     * @todo Write the documentation
     */
    currentPage: number;
    /**
     * @todo Write the documentation
     */
    totalPages: number;
    /**
     * @todo Write the documentation
     */
    first: number;
    /**
     * @todo Write the documentation
     */
    last: number;
    /**
     * @todo Write the documentation
     */
    rows: number;
    /**
     * @todo Write the documentation
     */
    totalRecords: number;
    /**
     * @todo Write the documentation
     */
    className: string;
    /**
     * @todo Write the documentation
     */
    element: JSX.Element;
    /**
     * @todo Write the documentation
     */
    props: PaginatorProps;
}

/**
 * @todo Write the documentation
 */
interface PaginatorJumpToPageInputOptions {
    /**
     * @todo Write the documentation
     */
    value: number;
    /**
     * @todo Write the documentation
     */
    onChange(first: number, rows: number): void;
    /**
     * @todo Write the documentation
     */
    disabled: boolean;
    /**
     * @todo Write the documentation
     */
    className: string;
    /**
     * @todo Write the documentation
     */
    element: JSX.Element;
    /**
     * @todo Write the documentation
     */
    props: PaginatorProps;
}

/**
 * @todo Write the documentation
 */
interface PaginatorTemplateOptions {
    /**
     * @todo Write the documentation
     */
    layout?: string;
    /**
     * @todo Write the documentation
     */
    FirstPageLink?: React.ReactNode | ((options: PaginatorFirstPageLinkOptions) => React.ReactNode);
    /**
     * @todo Write the documentation
     */
    PrevPageLink?: React.ReactNode | ((options: PaginatorPrevPageLinkOptions) => React.ReactNode);
    /**
     * @todo Write the documentation
     */
    PageLinks?: React.ReactNode | ((options: PaginatorPageLinksOptions) => React.ReactNode);
    /**
     * @todo Write the documentation
     */
    NextPageLink?: React.ReactNode | ((options: PaginatorNextPageLinkOptions) => React.ReactNode);
    /**
     * @todo Write the documentation
     */
    LastPageLink?: React.ReactNode | ((options: PaginatorLastPageLinkOptions) => React.ReactNode);
    /**
     * @todo Write the documentation
     */
    RowsPerPageDropdown?: React.ReactNode | ((options: PaginatorRowsPerPageDropdownOptions) => React.ReactNode);
    /**
     * @todo Write the documentation
     */
    CurrentPageReport?: React.ReactNode | ((options: PaginatorCurrentPageReportOptions) => React.ReactNode);
    /**
     * @todo Write the documentation
     */
    JumpToPageInput?: React.ReactNode | ((options: PaginatorJumpToPageInputOptions) => React.ReactNode);
}

export type PaginatorTemplate = PaginatorTemplateOptions | string;

/**
 * Defines valid properties in Paginator component. In addition to these, all properties of HTMLDivElement can be used in this component.
 * @group Properties
 */
export interface PaginatorProps extends Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'ref'> {
    /**
     * Number of total records.
     * @defaultValue 0
     */
    totalRecords?: number | undefined;
    /**
     * Data count to display per page.
     * @defaultValue 0
     */
    rows?: number | undefined;
    /**
     * Zero-relative number of the first row to be displayed.
     * @defaultValue 0
     */
    first?: number | undefined;
    /**
     * Number of page links to display.
     * @defaultValue 5
     */
    pageLinkSize?: number | undefined;
    /**
     * Array of integer values to display inside rows per page dropdown.
     */
    rowsPerPageOptions?: number[] | undefined;
    /**
     * @todo Write the documentation
     */
    alwaysShow?: boolean | undefined;
    /**
     * Custom template of the paginator.
     * @defaultValue FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown
     */
    template?: PaginatorTemplate | undefined;
    /**
     * Content to inject into the left side of the paginator.
     */
    leftContent?: React.ReactNode | undefined;
    /**
     * Content to inject into the right side of the paginator.
     */
    rightContent?: React.ReactNode | undefined;
    /**
     * Template of the current page report element. Available placeholders are {currentPage},{totalPages},{rows},{first},{last} and {totalRecords}
     * @defaultValue ({currentPage} of {totalPages})
     */
    currentPageReportTemplate?: string | undefined;
    /**
     * DOM element instance where the overlay panel should be mounted. Valid values are any DOM Element and 'self'. The self value is used to render a component where it is located.
     * @defaultValue document.body
     */
    dropdownAppendTo?: 'self' | HTMLElement | null | undefined;
    /**
     * Callback to invoke when page changes, the event object contains information about the new state.
     * @param {PaginatorPageStateEvent} event - Custom page change event.
     */
    onPageChange?(event: PaginatorPageStateEvent): void;
    /**
     * Used to get the child elements of the component.
     * @readonly
     */
    children?: React.ReactNode | undefined;
}

/**
 * @group Component
 */
export declare class Paginator extends React.Component<PaginatorProps, any> {
    /**
     * Used to get container element.
     * @return {HTMLDivElement} Container element
     */
    public getElement(): HTMLDivElement;
}
