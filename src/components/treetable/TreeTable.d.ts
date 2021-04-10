import * as React from 'react';
import { PaginatorTemplate } from '../paginator/Paginator';
import TreeNode from '../treenode/TreeNode';

type PaginatorPositionType = 'top' | 'bottom' | 'both';

type SortModeType = 'single' | 'multiple';

type SortOrderType = 1 | 0 | -1 | undefined | null;

type MultiSortMetaType = SortMeta[] | undefined | null;

type SelectionModeType = 'single' | 'multiple';

type ColumnResizeModeType = 'fit' | 'expand';

type FilterMatchModeType = 'startsWith' | 'contains' | 'endsWith' | 'equals' | 'notEquals' | 'in' | 'lt' | 'lte' | 'gt' | 'gte' | 'custom';

type GlobalFilterType = string | undefined | null;

type SelectionKeys = string | SelectionKeysType;

type FilterModeType = 'lenient' | 'strict';

interface SelectionKeysType {
    [key: string]: boolean;
}

type ExpandedKeysType = {
    [key: string]: boolean
}

interface SortMeta {
    sortField: string;
    sortOrder: SortOrderType;
}

interface FilterMetaData {
    value: any;
    matchMode: FilterMatchModeType;
}

interface FilterMeta {
    [key: string]: FilterMetaData;
}

interface EventParams {
    originalEvent: Event;
    node: TreeNode;
}

interface OnToggleParams {
    originalEvent: Event;
    value: ExpandedKeysType;
}

interface OnPageParams {
    first: number;
    rows: number;
}

interface OnSortParams {
    sortField: string;
    sortOrder: SortOrderType;
    multiSortMeta: MultiSortMetaType;
}

interface SelectionParams {
    originalEvent: Event;
    value: TreeNode | TreeNode[];
}

interface OnColumnResizeEndParams {
    element: HTMLElement;
    column: ColumnProps;
    delta: number;
}

interface OnColReorderParams {
    originalEvent: React.DragEvent<HTMLElement>;
    dragIndex: number;
    dropIndex: number;
    columns: React.ReactElement;
}

interface TreeTableProps {
    id?: string;
    value?: TreeNode[];
    header?: React.ReactNode;
    footer?: React.ReactNode;
    style?: object;
    className?: string;
    tableStyle?: object;
    tableClassName?: string;
    expandedKeys?: ExpandedKeysType;
    paginator?: boolean;
    paginatorPosition?: PaginatorPositionType;
    alwaysShowPaginator?: boolean;
    paginatorClassName?: string;
    paginatorTemplate?: PaginatorTemplate;
    paginatorLeft?: React.ReactNode;
    paginatorRight?: React.ReactNode;
    pageLinkSize?: number;
    paginatorDropdownAppendTo?: HTMLElement;
    rowsPerPageOptions?: number[];
    currentPageReportTemplate?: string;
    first?: number;
    rows?: number;
    totalRecords?: number;
    lazy?: boolean;
    sortField?: string;
    sortOrder?: SortOrderType;
    multiSortMeta?: MultiSortMetaType;
    sortMode?: SortModeType;
    defaultSortOrder?: SortOrderType;
    removableSort?: boolean;
    selectionMode?: SelectionModeType;
    selectionKeys?: SelectionKeys;
    contextMenuSelectionKey?: string;
    metaKeySelection?: boolean;
    selectOnEdit?: boolean;
    propagateSelectionUp?: boolean;
    propagateSelectionDown?: boolean;
    autoLayout?: boolean;
    loading?: boolean;
    loadingIcon?: string;
    tabIndex?: number;
    scrollable?: boolean;
    scrollHeight?: string;
    reorderableColumns?: boolean;
    headerColumnGroup?: React.ReactElement;
    footerColumnGroup?: React.ReactElement;
    frozenHeaderColumnGroup?: React.ReactElement;
    frozenFooterColumnGroup?: React.ReactElement;
    frozenWidth?: string;
    resizableColumns?: boolean;
    columnResizeMode?: ColumnResizeModeType;
    emptyMessage?: string;
    filters?: FilterMeta;
    globalFilter?: GlobalFilterType;
    filterMode?: string;
    filterDelay?: number;
    filterLocale?: string;
    rowClassName?(data: TreeNode): object;
    onFilter?(filters: FilterMeta[]): void;
    onExpand?(e: EventParams): void;
    onCollapse?(e: EventParams): void;
    onToggle?(e: OnToggleParams): void;
    onPage?(e: OnPageParams): void;
    onSort?(e: OnSortParams): void;
    onSelect?(e: EventParams): void;
    onUnselect?(e: EventParams): void;
    onRowClick?(e: EventParams): void;
    onSelectionChange?(e: SelectionParams): void;
    onContextMenuSelectionChange?(e: SelectionParams): void;
    onColumnResizeEnd?(e: OnColumnResizeEndParams): void;
    onColReorder?(e: OnColReorderParams): void;
    onContextMenu?(e: EventParams): void;
}

export class TreeTable extends React.Component<TreeTableProps, any> {
    public filter<T>(value: T, field: string, mode: FilterMatchModeType): void;
}
