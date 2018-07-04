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
    paginatorLeft?: any;
    paginatorRight?: any;
    pageLinkSize?: number;
    rowsPerPageOptions?: number[];
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
    onSelectionChange?(e: {originalEvent: Event, data: any}): void;
    compareSelectionBy?: string;
    dataKey?: string;
    metaKeySelection?: boolean;
    headerColumnGroup?: object;
    footerColumnGroup?: object;
    rowExpansionTemplate?(data: any): void;
    expandedRows?: Array<any>;
    onRowToggle?(data: Array<any>): void;
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
    autoLayout?:boolean;
    rowClassName?(rowData: any): object;
    rowGroupHeaderTemplate?(data: any, index: number): void;
    rowGroupFooterTemplate?(data: any, index: number): void;
    groupField?: string;
    loading?:boolean;
    loadingIcon?:string;
    onColumnResizeEnd?(e: {element: any, delta: number}): void;
    onSort?(e: {sortField: string, sortOrder: number, multiSortMeta: any}): void;
    onPage?(e: {first: number, rows: number}): void;
    onFilter?(filters: Array<any>): void;
    onVirtualScroll?(e: {first: number, rows: number}): void;
    onRowClick?(e: {originalEvent: Event, data: any, index: number}): void;
    onRowDoubleClick?(e: {originalEvent: Event, data: any, index: number}): void;
    onRowSelect?(e: {originalEvent: Event, data: any, index: number}): void;
    onRowUnselect?(e: {originalEvent: Event, data: any, index: number}): void;
    onRowExpand?(e: {originalEvent: Event, data: any}): void;
    onRowCollapse?(e: {originalEvent: Event, data: any}): void;
    onContextMenuSelect?(e: {originalEvent: Event, data: any}): void;
    onColReorder?(e: {dragIndex: number, dropIndex: number, columns: any}): void;
    onColReorder?(e: {originalEvent: Event, value: any, dragIndex: number, dropIndex: number}): void;
    onRowReorder?(e: {originalEvent: Event, value: any, dragIndex: number, dropIndex: number}): void;
}

export class DataTable extends React.Component<DataTableProps,any> {}
