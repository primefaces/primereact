/**
 *
 * TreeTable is used to display hierarchical data in tabular format.
 *
 * [Live Demo](https://www.primefaces.org/primereact/treetable/)
 *
 * @module treetable
 *
 */
import * as React from 'react';
import { ColumnFilterMatchModeType, ColumnProps } from '../column';
import { PaginatorTemplate } from '../paginator';
import TreeNode from '../treenode';

/**
 * @todo Write the documentation.
 */
interface TreeTableSelectionKeysType {
    /**
     * @todo Write the documentation.
     */
    [key: string]: boolean | TreeTableCheckboxSelectionKeyType | undefined;
}

/**
 * @todo Write the documentation.
 */
interface TreeTableCheckboxSelectionKeyType {
    /**
     * @todo Write the documentation.
     */
    checked?: boolean;
    /**
     * @todo Write the documentation.
     */
    partialChecked?: boolean;
}

/**
 * @todo Write the documentation.
 */
type TreeTableExpandedKeysType = {
    /**
     * @todo Write the documentation.
     */
    [key: string]: boolean;
};

/**
 * @todo Write the documentation.
 */
interface TreeTableSortMeta {
    /**
     * @todo Write the documentation.
     */
    field: string;
    /**
     * @todo Write the documentation.
     */
    order: 1 | 0 | -1 | undefined | null;
}

/**
 * @todo Write the documentation.
 */
interface TreeTableFilterMetaData {
    /**
     * @todo Write the documentation.
     */
    value: any;
    /**
     * @todo Write the documentation.
     */
    matchMode: 'startsWith' | 'contains' | 'endsWith' | 'equals' | 'notEquals' | 'in' | 'lt' | 'lte' | 'gt' | 'gte' | 'custom' | undefined;
}

/**
 * @todo Write the documentation.
 */
interface TreeTableFilterMeta {
    /**
     * @todo Write the documentation.
     */
    [key: string]: TreeTableFilterMetaData;
}

/**
 * Custom treetable event.
 * @see {@link TreeTableProps.onCollapse},{@link TreeTableProps.onContextMenu},{@link TreeTableProps.onExpand},{@link TreeTableProps.onRowClick},{@link TreeTableProps.onSelect},{@link TreeTableProps.onUnselect}
 * @event
 */
interface TreeTableEvent {
    /**
     * Browser event.
     */
    originalEvent: React.SyntheticEvent;
    /**
     * Expanded node instance.
     */
    node: TreeNode;
}

/**
 * Custom toggle event.
 * @see {@link TreeTableProps.onToggle}
 * @event
 */
interface TreeTableToggleEvent {
    /**
     * Browser event.
     */
    originalEvent: React.SyntheticEvent;
    /**
     * @todo Write the documentation.
     */
    value: TreeTableExpandedKeysType;
}

/**
 * Custom page event.
 * @see {@link TreeTableProps.onPage}
 * @event
 */
interface TreeTablePageEvent {
    /**
     * Index of the first row.
     */
    first: number;
    /**
     * Rows per page.
     */
    rows: number;
    /**
     * @todo Write the documentation.
     */
    page: number;
    /**
     * @todo Write the documentation.
     */
    pageCount: number;
}

/**
 * Custom sort event.
 * @see {@link TreeTableProps.onSort}
 * @event
 */
interface TreeTableSortEvent {
    /**
     * Field to sort against.
     */
    sortField: string;
    /**
     * Sort order as integer.
     */
    sortOrder: 1 | 0 | -1 | undefined | null;
    /**
     * MultiSort metadata.
     */
    multiSortMeta: TreeTableSortMeta[] | undefined | null;
}

/**
 * Custom selection event.
 * @see {@link TreeTableProps.onContextMenuSelectionChange},{@link TreeTableProps.onSelectionChange}
 * @event
 */
interface TreeTableSelectionEvent {
    /**
     * Browser event.
     */
    originalEvent: React.SyntheticEvent;
    /**
     * Selected node key.
     */
    value: TreeTableSelectionKeysType;
}

/**
 * Custom resize event.
 * @see {@link TreeTableProps.onColumnResizeEnd}
 * @event
 */
interface TreeTableColumnResizeEndEvent {
    /**
     * DOM element of the resized.
     */
    element: HTMLElement;
    /**
     * Properties of the resized column.
     */
    column: ColumnProps;
    /**
     * Change in column width.
     */
    delta: number;
}

/**
 * Custom column reorder event.
 * @see {@link TreeTableProps.onColReorder}
 * @event
 */
interface TreeTableColReorderEvent {
    /**
     * Browser event.
     */
    originalEvent: React.DragEvent<HTMLElement>;
    /**
     * Index of the dragged column.
     */
    dragIndex: number;
    /**
     * Index of the dropped column.
     */
    dropIndex: number;
    /**
     * Columns array after reorder.
     */
    columns: React.ReactElement;
}

/**
 * Defines valid properties in TreeTable component. In addition to these, all properties of HTMLDivElement can be used in this component.
 * @group Properties
 */
export interface TreeTableProps extends Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'onContextMenu' | 'onSelect' | 'ref' | 'value'> {
    /**
     * Mode for filtering valid values are lenient and strict. Default is lenient.
     * @defaultValue lenient
     */
    filterMode?: 'lenient' | 'strict' | undefined;
    /**
     * An array of FilterMetadata objects to provide external filters.
     */
    filters?: TreeTableFilterMeta;
    /**
     * Index of the first row to be displayed.
     * @defaultValue 0
     */
    first?: number | undefined;
    /**
     * Footer content of the table.
     */
    footer?: React.ReactNode | undefined;
    /**
     * ColumnCroup component for footer.
     */
    footerColumnGroup?: React.ReactElement | undefined;
    /**
     * ColumnCroup component for footer of frozen columns.
     */
    frozenFooterColumnGroup?: React.ReactElement | undefined;
    /**
     * ColumnCroup component for header of frozen columns.
     */
    frozenHeaderColumnGroup?: React.ReactElement | undefined;
    /**
     * Width of the frozen part in scrollable DataTable.
     */
    frozenWidth?: string | undefined;
    /**
     * Value of the global filter to use in filtering.
     */
    globalFilter?: string | undefined | null;
    /**
     * Defines filterMatchMode; "startsWith", "contains", "endsWith", "equals", "notEquals", "in", "lt", "lte", "gt", "gte" and "custom".
     * @defaultValue contains
     */
    globalFilterMatchMode?: ColumnFilterMatchModeType;
    /**
     * Header content of the table.
     */
    header?: React.ReactNode | undefined;
    /**
     * ColumnCroup component for header.
     */
    headerColumnGroup?: React.ReactElement | undefined;
    /**
     * Unique identifier of the element.
     */
    id?: string | undefined;
    /**
     * Defines if data is loaded and interacted with in lazy manner.
     * @defaultValue false
     */
    lazy?: boolean | undefined;
    /**
     * Displays a loader to indicate data load is in progress.
     * @defaultValue false
     */
    loading?: boolean | undefined;
    /**
     * The icon to show while indicating data load is in progress.
     * @defaultValue pi pi-spinner
     */
    loadingIcon?: string | undefined;
    /**
     * Defines whether metaKey is requred or not for the selection. When true metaKey needs to be pressed to select or unselect an item and when set to false selection of each item can be toggled individually. On touch enabled devices, metaKeySelection is turned off automatically.
     * @defaultValue true
     */
    metaKeySelection?: boolean | undefined;
    /**
     * An array of SortMeta objects to sort the data by default in multiple sort mode.
     */
    multiSortMeta?: TreeTableSortMeta[] | undefined | null;
    /**
     * Number of page links to display.
     * @defaultValue 5
     */
    pageLinkSize?: number | undefined;
    /**
     * When specified as true, enables the pagination.
     * @defaultValue false
     */
    paginator?: boolean | undefined;
    /**
     * Style class of the paginator element.
     */
    paginatorClassName?: string | undefined;
    /**
     * DOM element instance where the overlay panel should be mounted. Valid values are any DOM Element and 'self'. The self value is used to render a component where it is located.
     * @defaultValue document.body
     */
    paginatorDropdownAppendTo?: 'self' | HTMLElement | undefined | null;
    /**
     * Content for the left side of the paginator.
     */
    paginatorLeft?: React.ReactNode | undefined;
    /**
     * Position of the paginator, options are "top","bottom" or "both".
     * @defaultValue bottom
     */
    paginatorPosition?: 'top' | 'bottom' | 'both' | undefined;
    /**
     * Content for the right side of the paginator.
     */
    paginatorRight?: React.ReactNode | undefined;
    /**
     * Template of the paginator. For details, refer to the template section of the paginator documentation for further options.
     * @defaultValue FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown
     */
    paginatorTemplate?: PaginatorTemplate | undefined;
    /**
     * Whether checkbox selections propagate to descendant nodes.
     * @defaultValue true
     */
    propagateSelectionDown?: boolean | undefined;
    /**
     * Whether checkbox selections propagate to ancestor nodes.
     * @defaultValue true
     */
    propagateSelectionUp?: boolean | undefined;
    /**
     * When enabled, columns can have an un-sorted state.
     * @defaultValue false
     */
    removableSort?: boolean | undefined;
    /**
     * When enabled, columns can be reordered using drag and drop.
     * @defaultValue false
     */
    reorderableColumns?: boolean | undefined;
    /**
     * When enabled, columns can be resized using drag and drop.
     * @defaultValue false
     */
    resizableColumns?: boolean | undefined;
    /**
     * When enabled, background of the rows change on hover.
     * @defaultValue false
     */
    rowHover?: boolean | undefined;
    /**
     * Number of rows to display per page.
     */
    rows?: number | undefined;
    /**
     * Array of integer values to display inside rows per page dropdown.
     */
    rowsPerPageOptions?: number[] | undefined;
    /**
     * Height of the scroll viewport.
     */
    scrollHeight?: string | undefined;
    /**
     * When specified, enables horizontal and/or vertical scrolling.
     * @defaultValue false
     */
    scrollable?: boolean | undefined;
    /**
     * Determines whether the cell editor will be opened when clicking to select any row on Selection and Cell Edit modes.
     * @defaultValue true
     */
    selectOnEdit?: boolean | undefined;
    /**
     * A single or an array of keys to control the selection state.
     */
    selectionKeys?: string | TreeTableSelectionKeysType | TreeTableSelectionKeysType[] | undefined | null;
    /**
     * Defines the selection mode, valid values "single", "multiple", and "checkbox".
     */
    selectionMode?: 'single' | 'multiple' | 'checkbox' | undefined;
    /**
     * Whether to show grid lines between cells.
     * @defaultValue false
     */
    showGridlines?: boolean | undefined;
    /**
     * Name of the field to sort data by default.
     */
    sortField?: string | undefined;
    /**
     * Defines whether sorting works on single column or on multiple columns.
     * @defaultValue single
     */
    sortMode?: 'single' | 'multiple' | undefined;
    /**
     * Order to sort the data by default.
     */
    sortOrder?: 1 | 0 | -1 | undefined | null;
    /**
     * Whether to displays rows with alternating colors.
     * @defaultValue false
     */
    stripedRows?: boolean | undefined;
    /**
     * Inline style of the component.
     */
    style?: React.CSSProperties | undefined;
    /**
     * Index of the element in tabbing order.
     */
    tabIndex?: number | undefined;
    /**
     * Style class of the table element.
     */
    tableClassName?: string | undefined;
    /**
     * Inline style of the table element.
     */
    tableStyle?: React.CSSProperties | undefined;
    /**
     * Number of total records, defaults to length of value when not defined.
     */
    totalRecords?: number | undefined;
    /**
     * An array of treenodes to display.
     */
    value?: TreeNode[] | undefined;
    /**
     * Callback to invoke when a column is reordered.
     * @param {TreeTableColReorderEvent} event - Custom column reorder event.
     */
    onColReorder?(event: TreeTableColReorderEvent): void;
    /**
     * Callback to invoke when a node is collapsed.
     * @param {TreeTableEvent} event - Custom treetable event.
     */
    onCollapse?(event: TreeTableEvent): void;
    /**
     * Callback to invoke when a column is resized.
     * @param {TreeTableColumnResizeEndEvent} event - Custom resize event.
     */
    onColumnResizeEnd?(event: TreeTableColumnResizeEndEvent): void;
    /**
     * Callback to invoke when a context menu is clicked.
     * @param {TreeTableEvent} event - Custom treetable event.
     */
    onContextMenu?(event: TreeTableEvent): void;
    /**
     * Callback to invoke when selection changes with a context menu.
     * @param {TreeTableSelectionEvent} event - Custom selection event.
     */
    onContextMenuSelectionChange?(event: TreeTableSelectionEvent): void;
    /**
     * Callback to invoke when a node is expanded.
     * @param {TreeTableEvent} event - Custom treetable event.
     */
    onExpand?(event: TreeTableEvent): void;
    /**
     * Callback to invoke on filtering.
     * @param {TreeTableFilterMeta[]} filters - Custom treetable event.
     */
    onFilter?(filters: TreeTableFilterMeta[]): void;
    /**
     * Callback to invoke on pagination.
     * @param {TreeTablePageEvent} event - Custom page event.
     */
    onPage?(event: TreeTablePageEvent): void;
    /**
     * Callback to invoke when a row is clicked.
     * @param {TreeTableEvent} event - Custom treetable event.
     */
    onRowClick?(event: TreeTableEvent): void;
    /**
     * Callback to invoke when a node is selected.
     * @param {TreeTableEvent} event - Custom treetable event.
     */
    onSelect?(event: TreeTableEvent): void;
    /**
     * Callback to invoke when selection changes.
     * @param {TreeTableSelectionEvent} event - Custom selection event.
     */
    onSelectionChange?(event: TreeTableSelectionEvent): void;
    /**
     * Callback to invoke on sort.
     * @param {TreeTableSortEvent} event - Custom sort event.
     */
    onSort?(event: TreeTableSortEvent): void;
    /**
     * Callback to invoke when a node is toggled.
     * @param {TreeTableToggleEvent} event - Custom toggle event.
     */
    onToggle?(event: TreeTableToggleEvent): void;
    /**
     * Callback to invoke when a node is unselected.
     * @param {TreeTableEvent} event - Custom treetable event.
     */
    onUnselect?(event: TreeTableEvent): void;
    /**
     * Function that takes the row data and returns an object in "{'styleclass' : condition}" format to define a classname for a particular now.
     * @param {TreeNode} data - @todo Write the documentation.
     */
    rowClassName?(data: TreeNode): object;
}

/**
 * @group Component
 */
export declare class TreeTable extends React.Component<TreeTableProps, any> {
    /**
     * @todo Write the documentation.
     * @param {T} value - @todo Write the documentation.
     * @param {string} field - @todo Write the documentation.
     * @param {string} mode - @todo Write the documentation.
     */
    public filter<T>(value: T, field: string, mode: 'startsWith' | 'contains' | 'endsWith' | 'equals' | 'notEquals' | 'in' | 'lt' | 'lte' | 'gt' | 'gte' | 'custom' | undefined): void;
    /**
     * Used to get container element.
     * @return {HTMLDivElement} Container element
     */
    public getElement(): HTMLDivElement;
}
