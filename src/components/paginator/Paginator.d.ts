import * as React from 'react';

interface PageState {
    first: number;
    rows: number;
    page: number;
    pageCount: number;
}

interface PaginatorProps {
    totalRecords?: number;
    rows?: number;
    first?: number;
    pageLinkSize?: number;
    rowsPerPageOptions?: number[];
    alwaysShow?: boolean;
    style?: object;
    className?: string;
    template?: string | object;
    leftContent?: React.ReactNode;
    rightContent?: React.ReactNode;
    currentPageReportTemplate?: string;
    dropdownAppendTo?: HTMLElement;
    onPageChange?(event: PageState): void;
}

export class Paginator extends React.Component<PaginatorProps, any> { }
