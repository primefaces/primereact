import { string } from 'prop-types';
import * as React from 'react';

interface PageState {
    first: number;
    rows: number;
    page: number;
    pageCount: number;
}

type FirstPageLinkType = React.ReactNode | ((options: FirstPageLinkOptions) => React.ReactNode);

type PrevPageLinkType = React.ReactNode | ((options: PrevPageLinkOptions) => React.ReactNode);

type PageLinksType = React.ReactNode | ((options: PageLinksOptions) => React.ReactNode);

type NextPageLinkType = React.ReactNode | ((options: NextPageLinkOptions) => React.ReactNode);

type LastPageLinkType = React.ReactNode | ((options: LastPageLinkOptions) => React.ReactNode);

type RowsPerPageDropdownType = React.ReactNode | ((options: RowsPerPageDropdownOptions) => React.ReactNode);

type CurrentPageReportType = React.ReactNode | ((options: CurrentPageReportOptions) => React.ReactNode);

interface FirstPageLinkOptions {
    onClick(event: Event): void;
    className: string;
    iconClassName: string;
    disabled: boolean;
    element: JSX.Element;
    props: PaginatorProps;
}

interface PrevPageLinkOptions {
    onClick(event: Event): void;
    className: string;
    iconClassName: string;
    disabled: boolean;
    element: JSX.Element;
    props: PaginatorProps;
}

interface ViewOptions {
    startPage: number;
    endPage: number;
}
interface PageLinksOptions {
    onClick(event: Event): void;
    className: string;
    view: ViewOptions;
    page: number;
    currentPage: number;
    totalPages: number;
    element: JSX.Element;
    props: PaginatorProps;
}

interface NextPageLinkOptions {
    onClick(event: Event): void;
    className: string;
    iconClassName: string;
    disabled: boolean;
    element: JSX.Element;
    props: PaginatorProps;
}

interface LastPageLinkOptions {
    onClick(event: Event): void;
    className: string;
    iconClassName: string;
    disabled: boolean;
    element: JSX.Element;
    props: PaginatorProps;
}

interface OnChangeTargetOptions {
    name: string;
    id: string;
    value: string | undefined | null;
}

interface OnChangeParams {
    originalEvent: Event;
    value: string | undefined | null;
    stopPropagation(): void;
    preventDefault(): void;
    target: OnChangeTargetOptions;
}

interface RowsPerPageDropdownOptions {
    value: any;
    options: any[];
    onChange(e: OnChangeParams): void;
    appendTo: HTMLElement;
    currentPage: number;
    totalPages: number;
    totalRecords: number;
    element: JSX.Element;
    props: PaginatorProps;
}

interface CurrentPageReportOptions {
    className: string;
    element: JSX.Element;
    props: PaginatorProps;
}

interface PaginatorTemplateOptions {
    layout: string;
    FirstPageLink: FirstPageLinkType;
    PrevPageLink: PrevPageLinkType;
    PageLinks: PageLinksType;
    NextPageLink: NextPageLinkType;
    LastPageLink: LastPageLinkType;
    RowsPerPageDropdown: RowsPerPageDropdownType;
    CurrentPageReport: CurrentPageReportType;
}

export type PaginatorTemplate = string | PaginatorTemplateOptions;

interface PaginatorProps {
    totalRecords?: number;
    rows?: number;
    first?: number;
    pageLinkSize?: number;
    rowsPerPageOptions?: number[];
    alwaysShow?: boolean;
    style?: object;
    className?: string;
    template?: PaginatorTemplate;
    leftContent?: React.ReactNode;
    rightContent?: React.ReactNode;
    currentPageReportTemplate?: string;
    dropdownAppendTo?: HTMLElement;
    onPageChange?(event: PageState): void;
}

export class Paginator extends React.Component<PaginatorProps, any> { }
