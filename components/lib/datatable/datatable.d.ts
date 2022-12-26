import * as React from 'react';
import { Column, ColumnFilterMatchModeType, ColumnProps } from '../column';
import { PaginatorTemplate } from '../paginator';
import { VirtualScroller, VirtualScrollerProps } from '../virtualscroller/virtualscroller';

type DataTableHeaderTemplateType<TValue extends DataTableValues> = React.ReactNode | ((options: DataTableHeaderTemplateOptions<TValue>) => React.ReactNode);

type DataTableFooterTemplateType<TValue extends DataTableValues> = React.ReactNode | ((options: DataTableFooterTemplateOptions<TValue>) => React.ReactNode);

type DataTableRowGroupHeaderTemplateType<TValue extends DataTableValues> = React.ReactNode | ((data: DataTableValue, options: DataTableRowGroupHeaderTemplateOptions<TValue>) => React.ReactNode);

type DataTableRowGroupFooterTemplateType<TValue extends DataTableValues> = React.ReactNode | ((data: DataTableValue, options: DataTableRowGroupFooterTemplateOptions<TValue>) => React.ReactNode);

type DataTablePaginatorPositionType = 'top' | 'bottom' | 'both';

type DataTableSortModeType = 'single' | 'multiple';

type DataTableSortOrderType = 1 | 0 | -1 | undefined | null;

type DataTableEmptyMessageType = React.ReactNode | ((frozen: boolean) => React.ReactNode);

type DataTableSelectionModeType = 'single' | 'multiple' | 'checkbox' | 'radiobutton';

type DataTableColumnResizeModeType = 'fit' | 'expand';

type DataTableFilterMatchModeType = 'startsWith' | 'contains' | 'notContains' | 'endsWith' | 'equals' | 'notEquals' | 'in' | 'lt' | 'lte' | 'gt' | 'gte' | 'between' | 'dateIs' | 'dateIsNot' | 'dateBefore' | 'dateAfter' | 'custom';

type DataTableGlobalFilterType = string | undefined | null;

type DataTableMultiSortMetaType = DataTableSortMeta[] | undefined | null;

type DataTableCompareSelectionByType = 'deepEquals' | 'equals';

type DataTableStateStorageType = 'session' | 'local' | 'custom';

type DataTableAppendToType = 'self' | HTMLElement | undefined | null;

type DataTableSelectType = 'row' | 'cell' | 'checkbox' | 'radio' | 'all';

type DataTableResponsiveLayoutType = 'scroll' | 'stack';

type DataTableFilterDisplayType = 'menu' | 'row';

type DataTableSizeType = 'small' | 'normal' | 'large';

type DataTableScrollDirectionType = 'vertical' | 'horizontal' | 'both';

interface DataTableHeaderTemplateOptions<TValue extends DataTableValues> {
    props: DataTableProps<TValue>;
}

interface DataTableFooterTemplateOptions<TValue extends DataTableValues> extends DataTableHeaderTemplateOptions<TValue> {}

interface DataTableRowGroupHeaderTemplateOptions<TValue extends DataTableValues> {
    index: number;
    props: DataTableProps<TValue>;
    customRendering: boolean;
}

interface DataTableRowGroupFooterTemplateOptions<T extends DataTableValues> extends DataTableRowGroupHeaderTemplateOptions<T> {
    colSpan: number;
}

interface DataTableSortMeta {
    field: string;
    order: DataTableSortOrderType;
}

interface DataTableFilterMetaData {
    value: any;
    matchMode: DataTableFilterMatchModeType;
}

interface DataTableOperatorFilterMetaData {
    operator: string;
    constraints: DataTableFilterMetaData[];
}

interface DataTableFilterMeta {
    [key: string]: DataTableFilterMetaData | DataTableOperatorFilterMetaData;
}

interface DataTableExpandedRows {
    [key: string]: boolean;
}

interface DataTableEditingRows {
    [key: string]: boolean;
}

interface DataTableRowToggleParams {
    data: any[] | DataTableExpandedRows;
}

interface DataTableColumnResizeEndParams {
    element: HTMLElement;
    column: Column;
    delta: number;
}

interface DataTableColumnResizerClickParams {
    originalEvent: React.MouseEvent<HTMLElement>;
    element: HTMLElement;
    column: Column;
}

interface DataTablePageParams {
    first: number;
    rows: number;
    page?: number;
    pageCount?: number;
}

interface DataTableSortParams {
    sortField: string;
    sortOrder: DataTableSortOrderType;
    multiSortMeta: DataTableMultiSortMetaType;
}

interface DataTableFilterParams {
    filters: DataTableFilterMeta;
}

interface DataTablePFSEvent extends DataTablePageParams, DataTableSortParams, DataTableFilterParams {
    [key: string]: any;
}

interface DataTableDataSelectableParams {
    data: DataTableValues;
    index: number;
}

interface DataTableSelectionChangeParams<TValue extends DataTableValues> {
    originalEvent: React.SyntheticEvent;
    value: DataTableSelection<TValue>;
    type?: string;
    [key: string]: any;
}

interface DataTableSelectAllChangeParams {
    originalEvent: React.SyntheticEvent;
    checked: boolean;
}

interface DataTableRowEventParams {
    originalEvent: React.SyntheticEvent;
    data: DataTableValue;
}

interface DataTableRowMouseEventParams extends Omit<DataTableRowEventParams, 'originalEvent'> {
    originalEvent: React.MouseEvent<HTMLElement>;
    index: number;
}

interface DataTableRowClickEventParams extends DataTableRowMouseEventParams {}

interface DataTableCellClickEventParams {
    originalEvent: React.MouseEvent<HTMLElement>;
    value: any;
    field: string;
    rowData: DataTableValue;
    rowIndex: number;
    cellIndex: number;
    selected: boolean;
}

interface DataTableRowEditParams extends DataTableRowEventParams {
    index: number;
}

interface DataTableRowEditSaveParams extends DataTableRowEditParams {
    valid: boolean;
}

interface DataTableRowEditCompleteParams extends DataTableRowEventParams {
    newData: DataTableValue;
    field: string;
    index: number;
}

interface DataTableSelectParams {
    originalEvent: React.SyntheticEvent;
    data: any;
    type: DataTableSelectType;
}

interface DataTableUnselectParams extends DataTableSelectParams {}

interface DataTableExportFunctionParams {
    data: any;
    field: string;
    rowData: DataTableValue;
    column: Column;
}

interface DataTableColReorderParams {
    originalEvent: React.DragEvent<HTMLElement>;
    dragIndex: number;
    dropIndex: number;
    columns: React.ReactElement;
}

interface DataTableRowReorderParams {
    originalEvent: React.DragEvent<HTMLElement>;
    value: DataTableValues;
    dragIndex: number;
    dropIndex: number;
}

interface DataTableRowExpansionTemplate {
    index: number;
    customRendering: boolean;
}

interface DataTableRowClassNameOptions<TValue extends DataTableValues> {
    props: DataTableProps<TValue>;
}

interface DataTableCellClassNameOptions<TValue extends DataTableValues> {
    props: DataTableProps<TValue>;
    column: Column;
    field: string;
    frozenRow: boolean;
    rowIndex: number;
}

interface DataTableShowSelectionElementOptions<TValue extends DataTableValues> {
    rowIndex: number;
    props: DataTableProps<TValue>;
}

interface DataTableShowRowReorderElementOptions<TValue extends DataTableValues> {
    rowIndex: number;
    props: DataTableProps<TValue>;
}

interface DataTableRowEditValidatorOptions<TValue extends DataTableValues> {
    props: DataTableProps<TValue>;
}

interface DataTableValue extends Record<string, any> {}

interface DataTableValues extends Array<DataTableValue> {}

type DataTableRowSelection<TValue extends DataTableValues> = {
    [K in keyof TValue]: TValue[K];
};

type DataTableRowSelections<TValue extends DataTableValues> = DataTableRowSelection<TValue>[];

type DataTableCellSelection<TValue extends DataTableValues> = {
    cellIndex: number;
    column: Column;
    field: string;
    props: ColumnProps;
    rowData: DataTableRowSelection<TValue>;
    rowIndex: number;
    selected: boolean;
    value: TValue[keyof TValue];
};

type DataTableSelection<TValue extends DataTableValues> = DataTableRowSelection<TValue> | DataTableRowSelections<TValue> | DataTableCellSelection<TValue>;

export interface DataTableProps<TValue extends DataTableValues> extends Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'size' | 'onContextMenu' | 'ref' | 'value'> {
    id?: string;
    value?: TValue;
    alwaysShowPaginator?: boolean;
    autoLayout?: boolean;
    breakpoint?: string;
    cellSelection?: boolean;
    className?: string;
    collapsedRowIcon?: string;
    columnResizeMode?: DataTableColumnResizeModeType;
    compareSelectionBy?: DataTableCompareSelectionByType;
    contextMenuSelection?: object;
    csvSeparator?: string;
    currentPageReportTemplate?: string;
    dataKey?: string;
    defaultSortOrder?: DataTableSortOrderType;
    dragSelection?: boolean;
    editMode?: string;
    editingRows?: any[] | DataTableEditingRows;
    emptyMessage?: DataTableEmptyMessageType;
    expandableRowGroups?: boolean;
    expandedRowIcon?: string;
    expandedRows?: any[] | DataTableExpandedRows;
    exportFilename?: string;
    filterDelay?: number;
    filterDisplay?: DataTableFilterDisplayType;
    filterLocale?: string;
    filters?: DataTableFilterMeta;
    first?: number;
    footer?: DataTableFooterTemplateType<TValue>;
    footerColumnGroup?: React.ReactNode;
    frozenValue?: DataTableRowSelection<TValue>[];
    frozenWidth?: string;
    globalFilter?: DataTableGlobalFilterType;
    globalFilterFields?: string[];
    globalFilterMatchMode?: ColumnFilterMatchModeType;
    groupRowsBy?: string;
    header?: DataTableHeaderTemplateType<TValue>;
    headerColumnGroup?: React.ReactNode;
    lazy?: boolean;
    loading?: boolean;
    loadingIcon?: string;
    metaKeySelection?: boolean;
    multiSortMeta?: DataTableMultiSortMetaType;
    pageLinkSize?: number;
    paginator?: boolean;
    paginatorClassName?: string;
    paginatorDropdownAppendTo?: DataTableAppendToType;
    paginatorLeft?: React.ReactNode;
    paginatorPosition?: DataTablePaginatorPositionType;
    paginatorRight?: React.ReactNode;
    paginatorTemplate?: PaginatorTemplate;
    removableSort?: boolean;
    reorderableColumns?: boolean;
    reorderableRows?: boolean;
    resizableColumns?: boolean;
    responsiveLayout?: DataTableResponsiveLayoutType;
    rowGroupFooterTemplate?: DataTableRowGroupFooterTemplateType<TValue>;
    rowGroupHeaderTemplate?: DataTableRowGroupHeaderTemplateType<TValue>;
    rowGroupMode?: string;
    rowHover?: boolean;
    rows?: number;
    rowsPerPageOptions?: number[];
    scrollDirection?: DataTableScrollDirectionType;
    scrollHeight?: string;
    scrollable?: boolean;
    selectAll?: boolean;
    selectOnEdit?: boolean;
    selection?: DataTableSelection<TValue>;
    selectionAutoFocus?: boolean;
    selectionAriaLabel?: string;
    selectionMode?: DataTableSelectionModeType;
    selectionPageOnly?: boolean;
    showGridlines?: boolean;
    showSelectAll?: boolean;
    size?: DataTableSizeType;
    sortField?: string;
    sortMode?: DataTableSortModeType;
    sortOrder?: DataTableSortOrderType;
    stateKey?: string;
    stateStorage?: DataTableStateStorageType;
    stripedRows?: boolean;
    style?: React.CSSProperties;
    tabIndex?: number;
    tableClassName?: string;
    tableStyle?: React.CSSProperties;
    totalRecords?: number;
    virtualScrollerOptions?: VirtualScrollerProps;
    cellClassName?(value: any, options: DataTableCellClassNameOptions<TValue>): object | string;
    customRestoreState?(): object;
    customSaveState?(state: object): void;
    exportFunction?(e: DataTableExportFunctionParams): any;
    isDataSelectable?(e: DataTableDataSelectableParams): boolean | undefined | null;
    onAllRowsSelect?(e: DataTableSelectParams): void;
    onAllRowsUnselect?(e: DataTableUnselectParams): void;
    onCellClick?(e: DataTableCellClickEventParams): void;
    onCellSelect?(e: DataTableSelectParams): void;
    onCellUnselect?(e: DataTableUnselectParams): void;
    onColReorder?(e: DataTableColReorderParams): void;
    onColumnResizeEnd?(e: DataTableColumnResizeEndParams): void;
    onColumnResizerClick?(e: DataTableColumnResizerClickParams): void;
    onColumnResizerDoubleClick?(e: DataTableColumnResizerClickParams): void;
    onContextMenu?(e: DataTableRowEventParams): void;
    onContextMenuSelectionChange?(e: DataTableSelectionChangeParams<TValue>): void;
    onFilter?(e: DataTablePFSEvent): void;
    onPage?(e: DataTablePFSEvent): void;
    onRowClick?(e: DataTableRowClickEventParams): void;
    onRowCollapse?(e: DataTableRowEventParams): void;
    onRowDoubleClick?(e: DataTableRowClickEventParams): void;
    onRowEditCancel?(e: DataTableRowEditParams): void;
    onRowEditChange?(e: DataTableRowEditParams): void;
    onRowEditComplete?(e: DataTableRowEditCompleteParams): void;
    onRowEditInit?(e: DataTableRowEditParams): void;
    onRowEditSave?(e: DataTableRowEditSaveParams): void;
    onRowExpand?(e: DataTableRowEventParams): void;
    onRowMouseEnter?(e: DataTableRowMouseEventParams): void;
    onRowMouseLeave?(e: DataTableRowMouseEventParams): void;
    onRowReorder?(e: DataTableRowReorderParams): void;
    onRowSelect?(e: DataTableSelectParams): void;
    onRowToggle?(e: DataTableRowToggleParams): void;
    onRowUnselect?(e: DataTableUnselectParams): void;
    onSelectAllChange?(e: DataTableSelectAllChangeParams): void;
    onSelectionChange?(e: DataTableSelectionChangeParams<TValue>): void;
    onSort?(e: DataTablePFSEvent): void;
    onStateRestore?(state: object): void;
    onStateSave?(state: object): void;
    onValueChange?(value: DataTableValues): void;
    rowClassName?(data: DataTableValue, options: DataTableRowClassNameOptions<TValue>): object | string;
    rowEditValidator?(data: DataTableValue, options: DataTableRowEditValidatorOptions<TValue>): boolean;
    rowExpansionTemplate?(data: DataTableValue, options: DataTableRowExpansionTemplate): React.ReactNode;
    showRowReorderElement?(data: DataTableValue, options: DataTableShowRowReorderElementOptions<TValue>): boolean | undefined | null;
    showSelectionElement?(data: DataTableValue, options: DataTableShowSelectionElementOptions<TValue>): boolean | undefined | null;
    children?: React.ReactNode;
}

export declare class DataTable<TValue extends DataTableValues> extends React.Component<DataTableProps<TValue>, any> {
    public clearState(): void;
    public closeEditingCell(): void;
    public exportCSV(options?: { selectionOnly: boolean }): void;
    public filter<T>(value: T, field: string, mode: DataTableFilterMatchModeType, index?: number): void;
    public reset(): void;
    public resetColumnOrder(): void;
    public resetScroll(): void;
    public restoreColumnWidths(): void;
    public restoreState(): void;
    public restoreTableState(state: any): void;
    public saveState(): void;
    public getElement(): HTMLDivElement;
    public getTable(): HTMLTableElement;
    public getVirtualScroller(): VirtualScroller;
}
