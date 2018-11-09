import * as React from 'react';

export interface PageState{
    first: number,
    rows: number,
    page: number,
    pageCount: number
}

interface PaginatorProps {
    totalRecords?: number;
    rows?: number;
    first?: number;
    pageLinkSize?: number;
    rowsPerPageOptions?: any[];
    style?: object;
    className?: string;
    template?: string;
	currentPageReportTemplate?: string; 
    leftContent?: JSX.Element | undefined;
    rightContent?: JSX.Element | undefined;
    onPageChange?(event: PageState): void;
}

export class Paginator extends React.Component<PaginatorProps,any> {}
