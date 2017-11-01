import React = require("react");

interface DataTableLazyLoadEvent {
    first: number;
    rows: number;
    sortField: string;
    sortOrder: number;
    multiSortMeta: Array<any>;
}

interface DataTableProps {
    id?: string;
    value?: Array<any>;
    header?: any;
    footer?: any;
    style?: object;
    className?: string;
    tableStyle?: any;
    tableClassName?: string;
    paginator?: boolean;
    paginatorPosition?: string;
    alwaysShowPaginator?: boolean;
    paginatorTemplate?: string;
    first?: number;
    rows?: number;
    totalRecords?: number;
    lazy?: boolean;
    sortField?: string;
    sortOrder?: number;
    multiSortMeta?: Array<any>;
    sortMode?: string;
    emptyMessage?: string;
    selectionMode?: string;
    selection?: any;
    onSelectionChange?(originalEvent: Event, data: Array<any>): void;
    compareSelectionBy?: string;
    dataKey?: string;
    metaKeySelection?: boolean;
    headerColumnGroup?: object;
    footerColumnGroup?: object;
    rowExpansionTemplate?(): void;
    expandedRows?: Array<any>;
    onRowToggle?(): void;
    responsive?: boolean;
    resizableColumns?: boolean;
    columnResizeMode?: string;
    reorderableColumns?: boolean;
    filters?: object;
    globalFilter?: any;
    scrollable?: boolean;
    scrollHeight?: string;
    virtualScroll?: boolean;
    virtualScrollDelay?: number;
    frozenWidth?: string;
    unfrozenWidth?: string;
    frozenValue?: Array<any>;
    csvSeparator?: string;
    exportFilename?: string;
    contextMenu?: any;
    rowGroupMode?: string;
    rowClassName?(): void;
    rowGroupHeaderTemplate?(): void;
    rowGroupFooterTemplate?(): void;
    onColumnResizeEnd?(element: any, delta: number): void;
    onSort?(sortField: string, sortOrder: number, multiSortMeta: Array<any>): void;
    onPage?(): void;
    onFilter?(filters: Array<any>): void;
    onLazyLoad?(event: DataTableLazyLoadEvent): void;
    onRowClick?(originalEvent: Event, data: any, index: number): void;
    onRowSelect?(originalEvent: Event, data: any, index: number): void;
    onRowUnselect?(originalEvent: Event, data: any, index: number): void;
    onRowExpand?(originalEvent: Event, data: any): void;
    onRowCollapse?(originalEvent: Event, data: any): void;
    onContextMenuSelect?(originalEvent: Event, data: any): void;
    onColReorder?(dragIndex: number, dropIndex: number, columns: Array<any>): void;
}

export class DataTable extends React.Component<DataTableProps,any> {}