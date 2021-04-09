import * as React from 'react';

type LayoutType = 'list' | 'grid';

interface OnChangeParams {
    originalEvent: React.MouseEvent<HTMLButtonElement>;
    value: LayoutType;
}

interface DataViewLayoutOptionsProps {
    id?: string;
    layout?: LayoutType;
    style?: object;
    className?: string;
    onChange(e: OnChangeParams): void;
}

export class DataViewLayoutOptions extends React.Component<DataViewLayoutOptionsProps, any> { }

type PaginatorPositionType = 'top' | 'bottom' | 'both';

type SortOrderType = 1 | 0 | -1 | undefined | null;

interface OnPageParams {
    originalEvent: Event;
    first: number;
    rows: number;
}

interface DataViewProps {
    id?: string;
    header?: React.ReactNode;
    footer?: React.ReactNode;
    value?: any[];
    layout?: LayoutType;
    rows?: number;
    first?: number;
    totalRecords?: number;
    paginator?: boolean;
    paginatorPosition?: PaginatorPositionType;
    alwaysShowPaginator?: boolean;
    paginatorClassName?: string;
    paginatorTemplate?: string | object;
    paginatorLeft?: React.ReactNode;
    paginatorRight?: React.ReactNode;
    pageLinkSize?: number;
    paginatorDropdownAppendTo?: HTMLElement;
    rowsPerPageOptions?: number[];
    currentPageReportTemplate?: string;
    emptyMessage?: string;
    sortField?: string;
    sortOrder?: SortOrderType;
    style?: object;
    className?: string;
    lazy?: boolean;
    loading?: boolean;
    loadingIcon?: string;
    onPage?(e: OnPageParams): void;
    itemTemplate?(item: any, layout: LayoutType): React.ReactNode;
}

// tslint:disable-next-line:max-classes-per-file
export class DataView extends React.Component<DataViewProps, any> { }
