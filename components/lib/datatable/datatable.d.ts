/**
 *
 * DataTable displays data in tabular format.
 *
 * [Live Demo](https://www.primefaces.org/primereact/datatable/)
 *
 * @module datatable
 *
 */
import * as React from 'react';
import { Column, ColumnProps } from '../column';
import { PaginatorTemplate } from '../paginator';
import { VirtualScroller, VirtualScrollerProps } from '../virtualscroller/virtualscroller';

type DataTableHeaderTemplateType<TValue extends DataTableValueArray> = React.ReactNode | ((options: DataTableHeaderTemplateOptions<TValue>) => React.ReactNode);

type DataTableFooterTemplateType<TValue extends DataTableValueArray> = React.ReactNode | ((options: DataTableFooterTemplateOptions<TValue>) => React.ReactNode);

type DataTableRowGroupHeaderTemplateType<TValue extends DataTableValueArray> = React.ReactNode | ((data: any, options: DataTableRowGroupHeaderTemplateOptions<TValue>) => React.ReactNode);

type DataTableRowGroupFooterTemplateType<TValue extends DataTableValueArray> = React.ReactNode | ((data: any, options: DataTableRowGroupFooterTemplateOptions<TValue>) => React.ReactNode);

/**
 * @todo Write a description.
 */
interface DataTableHeaderTemplateOptions<TValue extends DataTableValueArray> {
    /**
     * @todo Write a description.
     */
    props: DataTableProps<TValue>;
}

interface DataTableFooterTemplateOptions<TValue extends DataTableValueArray> extends DataTableHeaderTemplateOptions<TValue> {}

/**
 * @todo Write a description.
 */
interface DataTableRowGroupHeaderTemplateOptions<TValue extends DataTableValueArray> {
    /**
     * @todo Write a description.
     */
    index: number;
    /**
     * @todo Write a description.
     */
    props: DataTableProps<TValue>;
    /**
     * @todo Write a description.
     */
    customRendering: boolean;
}

/**
 * @todo Write a description.
 */
interface DataTableRowGroupFooterTemplateOptions<T extends DataTableValueArray> extends DataTableRowGroupHeaderTemplateOptions<T> {
    /**
     * @todo Write a description.
     */
    colSpan: number;
}

interface DataTableSortMeta {
    field: string;
    order: 1 | 0 | -1 | null | undefined;
}

interface DataTableFilterMetaData {
    value: any;
    matchMode: 'startsWith' | 'contains' | 'notContains' | 'endsWith' | 'equals' | 'notEquals' | 'in' | 'lt' | 'lte' | 'gt' | 'gte' | 'between' | 'dateIs' | 'dateIsNot' | 'dateBefore' | 'dateAfter' | 'custom' | undefined;
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

/**
 * Custom row toggle event.
 * @see {@link DataTableProps.onRowToggle}
 * @event
 */
interface DataTableRowToggleEvent {
    /**
     * Expanded rows.
     */
    data: any[] | DataTableExpandedRows;
}

/**
 * Custom resize end event.
 * @see {@link DataTableProps.onColumnResizeEnd}
 * @event
 */
interface DataTableColumnResizeEndEvent {
    /**
     * DOM element of the resized column.
     */
    element: HTMLElement;
    /**
     * Properties of the resized column.
     */
    column: Column;
    /**
     * Change in column width.
     */
    delta: number;
}

/**
 * Custom column resizer click event.
 * @see {@link DataTableProps.onColumnResizerClick}, {@link DataTableProps.onColumnResizerDoubleClick}
 * @event
 */
interface DataTableColumnResizerClickEvent {
    /**
     * Browser event.
     */
    originalEvent: React.MouseEvent<HTMLElement>;
    /**
     * DOM element of the column.
     */
    element: HTMLElement;
    /**
     * Properties of the column.
     */
    column: Column;
}

/**
 * Custom pagination event
 */
interface DataTablePageEvent {
    /**
     * Index of the first row.
     */
    first: number;
    /**
     * Rows per page.
     */
    rows: number;
    /**
     * @todo Write a description.
     */
    page?: number;
    /**
     * @todo Write a description.
     */
    pageCount?: number;
}

/**
 * Custom sort event.
 */
interface DataTableSortEvent {
    /**
     * Field to sort against.
     */
    sortField: string;
    /**
     * Sort order as integer.
     */
    sortOrder: 1 | 0 | -1 | null | undefined;
    /**
     * MultiSort metadata.
     */
    multiSortMeta: DataTableSortMeta[] | null | undefined;
}

/**
 * Custom filter event.
 * @see {@link DataTableProps.onFilter}
 * @event
 */
interface DataTableFilterEvent {
    /**
     * Collection of active filters.
     */
    filters: DataTableFilterMeta;
}

/**
 * @todo Write a description.
 * @see {@link DataTableProps.onPage}, {@link DataTableProps.onSort}, {@link DataTableProps.onFilter}
 * @extends @todo Write the extends.
 * @event
 */
interface DataTablePFSEvent extends DataTablePageEvent, DataTableSortEvent, DataTableFilterEvent {
    [key: string]: any;
}

interface DataTableDataSelectableEvent<TValue extends DataTableValueArray> {
    data: DataTableRowDataArray<TValue>;
    index: number;
}

/**
 * Custom selection change event.
 * @see {@link DataTableProps.onContextMenuSelectionChange}, {@link DataTableProps.onSelectionChange}
 * @event
 */
interface DataTableSelectionChangeEvent<TValue extends DataTableValueArray> {
    /**
     * Browser event.
     */
    originalEvent: React.SyntheticEvent;
    /**
     * Selection object.
     */
    value: DataTableSelection<TValue>;
    /**
     * @todo Write a description.
     */
    type?: string;
    /**
     * @todo Write a description.
     */
    [key: string]: any;
}

/**
 * Custom select all change event.
 * @see {@link DataTableProps.onSelectAllChange}
 */
interface DataTableSelectAllChangeEvent {
    originalEvent: React.SyntheticEvent;
    checked: boolean;
}

/**
 * Custom context menu event.
 * @see {@link DataTableProps.onContextMenu}, {@link DataTableProps.onRowCollapse}, {@link DataTableProps.onRowExpand}
 * @event
 */
interface DataTableRowEvent {
    /**
     * Original event instance.
     */
    originalEvent: React.SyntheticEvent;
    /**
     * Original rows data.
     */
    data: DataTableValue;
}

/**
 * Custom row mouse event.
 * @see {@link DataTableProps.onRowMouseEnter}, {@link DataTableProps.onRowMouseLeave}
 * @extends DataTableRowEvent
 */
interface DataTableRowMouseEvent extends Omit<DataTableRowEvent, 'originalEvent'> {
    /**
     * Browser event.
     */
    originalEvent: React.MouseEvent<HTMLElement>;
    /**
     * Clicked row data index
     */
    index: number;
}

/**
 * Custom row click event.
 * @see {@link DataTableProps.onRowClick}, {@link DataTableProps.onRowDoubleClick}
 * @extends DataTableRowMouseEvent
 * @event
 */
interface DataTableRowClickEvent extends DataTableRowMouseEvent {}

/**
 * @todo Write a description.
 */
interface DataTableCellClickEventEvent<TValue extends DataTableValueArray> {
    /**
     * @todo Write a description.
     */
    originalEvent: React.MouseEvent<HTMLElement>;
    /**
     * @todo Write a description.
     */
    value: any;
    /**
     * @todo Write a description.
     */
    field: string;
    /**
     * @todo Write a description.
     */
    rowData: DataTableRowData<TValue>;
    /**
     * @todo Write a description.
     */
    rowIndex: number;
    /**
     * @todo Write a description.
     */
    cellIndex: number;
    /**
     * @todo Write a description.
     */
    selected: boolean;
}

/**
 * Custom row edit event.
 * @see {@link DataTableProps.onRowEditInit}, {@link DataTableProps.onRowEditChange}, {@link DataTableProps.onRowEditCancel}
 * @extends DataTableRowEvent
 * @event
 */
interface DataTableRowEditEvent extends DataTableRowEvent {
    index: number;
}

/**
 * Custom row edit save event.
 * @see {@link DataTableProps.onRowEditSave}
 * @extends DataTableRowEditEvent
 */
interface DataTableRowEditSaveEvent extends DataTableRowEditEvent {
    /**
     * @todo Write a description.
     */
    valid: boolean;
}

/**
 * Custom row edit complete event.
 * @see {@link DataTableProps.onRowEditComplete}
 * @extends DataTableRowEvent
 * @event
 */
interface DataTableRowEditCompleteEvent extends DataTableRowEvent {
    /**
     * Editing rows data.
     */
    newData: DataTableValue;
    /**
     * Column field.
     */
    field: string;
    /**
     * Current editing row data index.
     */
    index: number;
}

/**
 * Custom select event.
 * @see {@link DataTableProps.onAllRowsSelect}, {@link DataTableProps.onRowSelect}
 * @event
 */
interface DataTableSelectEvent {
    /**
     * Browser event.
     */
    originalEvent: React.SyntheticEvent;
    /**
     * Selected rows data.
     */
    data: any;
    /**
     * Type of the selection, valid value is "all".
     */
    type: 'row' | 'cell' | 'checkbox' | 'radio' | 'all' | undefined;
}

/**
 * Custom unselect event.
 * @see {@link DataTableProps.onAllRowsUnselect}, {@link DataTableProps.onRowUnselect}
 * @extends DataTableSelectEvent
 * @event
 */
interface DataTableUnselectEvent extends DataTableSelectEvent {}

/**
 * Custom export function event.
 * @see {@link DataTableProps.exportFunction}
 * @event
 */
interface DataTableExportFunctionEvent<TValue extends DataTableValueArray> {
    /**
     * Field data.
     */
    data: DataTableRowDataArray<TValue>;
    /**
     * Column field.
     */
    field: string;
    /**
     * Row data.
     */
    rowData: DataTableRowData<TValue>;
    /**
     * Column.
     */
    column: Column;
}

/**
 * Custom column reorder event.
 * @see {@link DataTableProps.onColReorder}
 * @event
 */
interface DataTableColReorderEvent {
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
 * Custom column reorder event.
 * @see {@link DataTableProps.onRowReorder}
 * @event
 */
interface DataTableRowReorderEvent<TValue extends DataTableValueArray> {
    /**
     * @todo Write a description.
     */
    originalEvent: React.DragEvent<HTMLElement>;
    /**
     * @todo Write a description.
     */
    value: DataTableRowDataArray<TValue>;
    /**
     * @todo Write a description.
     */
    dragIndex: number;
    /**
     * @todo Write a description.
     */
    dropIndex: number;
}

/**
 * @todo Write a description.
 * @see {@link DataTableProps.rowExpansionTemplate}
 */
interface DataTableRowExpansionTemplate {
    /**
     * @todo Write a description.
     */
    index: number;
    /**
     * @todo Write a description.
     */
    customRendering: boolean;
}

/**
 * @todo Write a description.
 */
interface DataTableRowClassNameOptions<TValue extends DataTableValueArray> {
    /**
     * @todo Write a description.
     */
    props: DataTableProps<TValue>;
}

/**
 * @todo Write a description.
 */
interface DataTableCellClassNameOptions<TValue extends DataTableValueArray> {
    /**
     * @todo Write a description.
     */
    props: DataTableProps<TValue>;
    /**
     * @todo Write a description.
     */
    column: Column;
    /**
     * @todo Write a description.
     */
    field: string;
    /**
     * @todo Write a description.
     */
    frozenRow: boolean;
    /**
     * @todo Write a description.
     */
    rowIndex: number;
}

/**
 * @todo Write a description.
 * @see {@link DataTableProps.showSelectionElement}
 */
interface DataTableShowSelectionElementOptions<TValue extends DataTableValueArray> {
    rowIndex: number;
    props: DataTableProps<TValue>;
}

/**
 * @todo Write a description.
 * @see {@link DataTableProps.showRowReorderElement}
 */
interface DataTableShowRowReorderElementOptions<TValue extends DataTableValueArray> {
    /**
     * @todo Write a description.
     */
    rowIndex: number;
    /**
     * @todo Write a description.
     */
    props: DataTableProps<TValue>;
}

/**
 * @todo Write a description.
 */
interface DataTableRowEditValidatorOptions<TValue extends DataTableValueArray> {
    /**
     * @todo Write a description.
     */
    props: DataTableProps<TValue>;
}

interface DataTableValue extends Record<string, any> {}

interface DataTableValueArray extends Array<DataTableValue> {}

/**
 * @todo Write a description.
 * @see {@link DataTableProps.rowClassName}, {@link DataTableProps.rowEditValidator}, {@link DataTableProps.showSelectionElement}, {@link DataTableProps.showRowReorderElement}
 */
type DataTableRowData<TValue extends DataTableValueArray> = {
    [K in keyof TValue]: TValue[K];
};

/**
 * @todo Write a description.
 */
type DataTableRowDataArray<TValue extends DataTableValueArray> = DataTableRowData<TValue>[];

/**
 * @todo Write a description.
 */
type DataTableCellSelection<TValue extends DataTableValueArray> = {
    cellIndex: number;
    column: Column;
    field: string;
    props: ColumnProps;
    rowData: DataTableRowData<TValue>;
    rowIndex: number;
    selected: boolean;
    value: TValue[keyof TValue];
};

/**
 * @todo Write a description.
 */
type DataTableSelection<TValue extends DataTableValueArray> = DataTableRowData<TValue> | DataTableRowDataArray<TValue> | DataTableCellSelection<TValue>;

/**
 * Defines valid properties in DataTable component. In addition to these, all properties of HTMLDivElement can be used in this component.
 * @group Properties
 */
export interface DataTableProps<TValue extends DataTableValueArray> extends Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'size' | 'onContextMenu' | 'ref' | 'value'> {
    /**
     * Unique identifier of the element.
     */
    id?: string | undefined;
    /**
     * An array of objects to display.
     */
    value?: TValue | undefined;
    /**
     * Whether to show it even there is only one page.
     * @defaultValue true
     */
    alwaysShowPaginator?: boolean | undefined;
    /**
     * Whether the cell widths scale according to their content or not.
     * @defaultValue false
     */
    autoLayout?: boolean | undefined;
    /**
     * The breakpoint to define the maximum width boundary when using stack responsive layout.
     * @defaultValue 960px
     */
    breakpoint?: string | undefined;
    /**
     * @todo Write the description
     * @defaultValue false
     */
    cellSelection?: boolean | undefined;
    /**
     * Style class of the component.
     */
    className?: string | undefined;
    /**
     * Icon of the row toggler to display the row as collapsed.
     * @defaultValue pi pi-chevron-up
     */
    collapsedRowIcon?: string | undefined;
    /**
     * @todo Write the description
     */
    columnResizeMode?: 'fit' | 'expand' | undefined;
    /**
     * Algorithm to define if a row is selected, valid values are "equals" that compares by reference and "deepEquals" that compares all fields.
     * @defaultValue deepEquals
     */
    compareSelectionBy?: 'deepEquals' | 'equals' | undefined;
    /**
     * Selected row in single mode or an array of values in multiple mode.
     */
    contextMenuSelection?: object | undefined;
    /**
     * Character to use as the csv separator.
     * @defaultValue ,
     */
    csvSeparator?: string | undefined;
    /**
     * Template of the current page report element. Available placeholders are &#123;currentPage&#125;, &#123;totalPages&#125;, &#123;rows&#125;, &#123;first&#125;, &#123;last&#125; and &#123;totalRecords&#125;
     * @defaultValue (&#123;currentPage&#125; of &#123;totalPages&#125;)
     */
    currentPageReportTemplate?: string | undefined;
    /**
     * Name of the field that uniquely identifies a record in the data. Should be a unique business key to prevent re-rendering.
     * @defaultValue (&#123;currentPage&#125; of &#123;totalPages&#125;)
     */
    dataKey?: string | undefined;
    /**
     * Default sort order of an unsorted column.
     * @defaultValue (&#123;currentPage&#125; of &#123;totalPages&#125;)
     */
    defaultSortOrder?: 1 | 0 | -1 | null | undefined;
    /**
     * When enabled, a rectangle that can be dragged can be used to make a range selection.
     * @defaultValue false
     */
    dragSelection?: boolean | undefined;
    /**
     * Defines editing mode, options are "cell" and "row".
     * @defaultValue cell
     */
    editMode?: string | undefined;
    /**
     * A collection of rows to represent the current editing data in row edit mode.
     */
    editingRows?: DataTableValueArray | DataTableEditingRows | undefined;
    /**
     * @todo Write the description
     */
    emptyMessage?: React.ReactNode | ((frozen: boolean) => React.ReactNode);
    /**
     * Makes row groups toggleable, default is false.
     * @defaultValue false
     */
    expandableRowGroups?: boolean | undefined;
    /**
     * Icon of the row toggler to display the row as expanded.
     * @defaultValue pi pi-chevron-down
     */
    expandedRowIcon?: string | undefined;
    /**
     * A collection of rows or a map object row data keys that are expanded.
     */
    expandedRows?: DataTableValueArray | DataTableExpandedRows | undefined;
    /**
     * Name of the exported file.
     * @defaultValue download
     */
    exportFilename?: string | undefined;
    /**
     * Delay in milliseconds before filtering the data.
     * @defaultValue 300
     */
    filterDelay?: number | undefined;
    /**
     * Layout of the filter elements, valid values are "row" and "menu".
     * @defaultValue menu
     */
    filterDisplay?: 'menu' | 'row' | undefined;
    /**
     * Locale to use in filtering. The default locale is the host environment's current locale.
     * @defaultValue undefined
     */
    filterLocale?: string | undefined;
    /**
     * An array of FilterMetadata objects to provide external filters.
     */
    filters?: DataTableFilterMeta | undefined;
    /**
     * Index of the first row to be displayed.
     * @defaultValue 0
     */
    first?: number | undefined;
    /**
     * Custom footer content of the table.
     */
    footer?: DataTableFooterTemplateType<TValue>;
    /**
     * ColumnGroup component for footer.
     */
    footerColumnGroup?: React.ReactNode | undefined;
    /**
     * Items of the frozen part in scrollable DataTable.
     */
    frozenValue?: DataTableRowDataArray<TValue>;
    /**
     * Width of the frozen part in scrollable DataTable.
     */
    frozenWidth?: string | undefined;
    /**
     * Value of the global filter to use in filtering.
     */
    globalFilter?: string | null | undefined;
    /**
     * Define fields to be filtered globally.
     */
    globalFilterFields?: string[] | undefined;
    /**
     * Defines filterMatchMode; "startsWith", "contains", "endsWith", "equals", "notEquals", "in", "lt", "lte", "gt", "gte" and "custom".
     * @defaultValue contains
     */
    globalFilterMatchMode?: 'startsWith' | 'contains' | 'endsWith' | 'equals' | 'notEquals' | 'in' | 'lt' | 'lte' | 'gt' | 'gte' | 'custom' | undefined;
    /**
     * @todo Write the description
     */
    groupRowsBy?: string | undefined;
    /**
     * Custom header content of the table.
     */
    header?: DataTableHeaderTemplateType<TValue> | undefined;
    /**
     * ColumnGroup component for header.
     */
    headerColumnGroup?: React.ReactNode | undefined;
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
    multiSortMeta?: DataTableSortMeta[] | null | undefined;
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
    paginatorDropdownAppendTo?: 'self' | HTMLElement | null | undefined;
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
     * When enabled, rows can be reordered using drag and drop.
     * @defaultValue false
     */
    reorderableRows?: boolean | undefined;
    /**
     * When enabled, columns can be resized using drag and drop.
     * @defaultValue false
     */
    resizableColumns?: boolean | undefined;
    /**
     * Defines the responsive mode, valid options are "stack" and "scroll".
     * @defaultValue stack
     */
    responsiveLayout?: 'scroll' | 'stack' | undefined;
    /**
     * Function to provide the content of row group footer.
     */
    rowGroupFooterTemplate?: DataTableRowGroupFooterTemplateType<TValue> | undefined;
    /**
     * Function to provide the content of row group header.
     */
    rowGroupHeaderTemplate?: DataTableRowGroupHeaderTemplateType<TValue> | undefined;
    /**
     * Defines the row grouping mode, valid values are "subheader" and "rowgroup".
     */
    rowGroupMode?: string | undefined;
    /**
     * When enabled, background of the rows change on hover.
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
     * Orientation of the scrolling, options are "vertical", "horizontal" and "both".
     * @defaultValue vertical|horizontal
     */
    scrollDirection?: 'vertical' | 'horizontal' | 'both' | undefined;
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
     * When specified, selects all rows on page.
     * @defaultValue false
     */
    selectAll?: boolean | undefined;
    /**
     * Determines whether the cell editor will be opened when clicking to select any row on Selection and Cell Edit modes.
     * @defaultValue true
     */
    selectOnEdit?: boolean | undefined;
    /**
     * Selected row in single mode or an array of values in multiple mode.
     * @defaultValue true
     */
    selection?: DataTableSelection<TValue> | undefined;
    /**
     * When a selectable row is clicked on RadioButton and Checkbox selection, it automatically decides whether to focus on elements such as checkbox or radio.
     * @defaultValue true
     */
    selectionAutoFocus?: boolean | undefined;
    /**
     * A field property from the row to add Select &#123;field&#125; and Unselect &#123;field&#125; ARIA labels to checkbox/radio buttons.
     */
    selectionAriaLabel?: string | undefined;
    /**
     * Specifies the selection mode, valid values are "single", "multiple", "radiobutton" and "checkbox".
     */
    selectionMode?: 'single' | 'multiple' | 'checkbox' | 'radiobutton' | undefined;
    /**
     * When enabled with paginator and checkbox selection mode, the select all checkbox in the header will select all rows on the current page.
     * @defaultValue false
     */
    selectionPageOnly?: boolean | undefined;
    /**
     * Whether to show grid lines between cells.
     * @defaultValue false
     */
    showGridlines?: boolean | undefined;
    /**
     * @todo Write the description
     */
    showSelectAll?: boolean | undefined;
    /**
     * Define to set alternative sizes. Valid values: "small", "normal" and "large".
     * @defaultValue normal
     */
    size?: 'small' | 'normal' | 'large' | undefined;
    /**
     * Property of a row data used for sorting, defaults to field.
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
    sortOrder?: 1 | 0 | -1 | null | undefined;
    /**
     * Unique identifier of a stateful table to use in state storage.
     */
    stateKey?: string | undefined;
    /**
     * Defines where a stateful table keeps its state, valid values are "session" for sessionStorage, "local" for localStorage and "custom".
     * @defaultValue session
     */
    stateStorage?: 'session' | 'local' | 'custom' | undefined;
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
     * Whether to use the virtualScroller feature. The properties of VirtualScroller component can be used like an object in it.
     *
     * Note: Currently only vertical orientation mode is supported.
     */
    virtualScrollerOptions?: VirtualScrollerProps | undefined;
    /**
     * Function that takes the cell data and returns an object in &#123;'styleclass' : condition&#125; format to define a classname for a particular now.
     * @param {any} value - Value of the cell.
     * @param {DataTableCellClassNameOptions<TValue>} options - ClassName options.
     * @return {object | string | undefined} @todo Write the description
     */
    cellClassName?(value: any, options: DataTableCellClassNameOptions<TValue>): object | string | undefined;
    /**
     * A function to implement custom restoreState with stateStorage="custom". Need to return state object.
     * @return {object | undefined} @todo Write the description
     */
    customRestoreState?(): object | undefined;
    /**
     * A function to implement custom saveState with stateStorage="custom".
     * @param {object} state - The object to be stored.
     */
    customSaveState?(state: object): void;
    /**
     * A function to implement custom export. Need to return string value.
     * @param {DataTableExportFunctionEvent<TValue>} event - Custom export function event.
     */
    exportFunction?(event: DataTableExportFunctionEvent<TValue>): any;
    /**
     * Function that returns a boolean to decide whether the data should be selectable.
     * @param {DataTableDataSelectableEvent<TValue>} event - Custom data selectable event.
     */
    isDataSelectable?(event: DataTableDataSelectableEvent<TValue>): boolean | undefined | null;
    /**
     * Callback to invoke when all rows are selected using the header checkbox.
     * @param {DataTableSelectEvent} event - Custom select event.
     */
    onAllRowsSelect?(event: DataTableSelectEvent): void;
    /**
     * Callback to invoke when all rows are unselected using the header checkbox.
     * @param {DataTableUnselectEvent} event - Custom unselect event.
     */
    onAllRowsUnselect?(event: DataTableUnselectEvent): void;
    /**
     * @todo Write the description
     * @param {DataTableCellClickEventEvent<TValue>} event - Custom cell click event.
     */
    onCellClick?(event: DataTableCellClickEventEvent<TValue>): void;
    /**
     * @todo Write the description
     * @param {DataTableSelectEvent} event - Custom select event.
     */
    onCellSelect?(event: DataTableSelectEvent): void;
    /**
     * @todo Write the description
     * @param {DataTableUnselectEvent} event - Custom unselect event.
     */
    onCellUnselect?(event: DataTableUnselectEvent): void;
    /**
     * Callback to invoke when a column is reordered.
     * @param {DataTableColReorderEvent} event - Custom column reorder event.
     */
    onColReorder?(event: DataTableColReorderEvent): void;
    /**
     * Callback to invoke when a column is resized.
     * @param {DataTableColumnResizeEndEvent} event - Custom column resize end event.
     */
    onColumnResizeEnd?(event: DataTableColumnResizeEndEvent): void;
    /**
     * Callback to invoke when a resizer element is clicked.
     * @param {DataTableColumnResizerClickEvent} event - Custom column resizer click event.
     */
    onColumnResizerClick?(event: DataTableColumnResizerClickEvent): void;
    /**
     * Callback to invoke when a resizer element is double clicked.
     * @param {DataTableColumnResizerClickEvent} event - Custom column resizer double click event.
     */
    onColumnResizerDoubleClick?(event: DataTableColumnResizerClickEvent): void;
    /**
     * Callback to invoke when a context menu is clicked.
     * @param {DataTableRowEvent} event - Custom row event.
     */
    onContextMenu?(event: DataTableRowEvent): void;
    /**
     * Callback to invoke when a row selected with right click.
     * @param {DataTableRowEvent} event - Custom row event.
     */
    onContextMenuSelectionChange?(event: DataTableSelectionChangeEvent<TValue>): void;
    /**
     * Callback to invoke on filtering.
     * @param {DataTablePFSEvent} event - Custom filter event.
     */
    onFilter?(event: DataTablePFSEvent): void;
    /**
     * Callback to invoke on pagination.
     * @param {DataTablePFSEvent} event - Custom pagination event.
     */
    onPage?(event: DataTablePFSEvent): void;
    /**
     * Callback to invoke when a row is clicked.
     * @param {DataTableRowClickEvent} event - Custom row click event.
     */
    onRowClick?(event: DataTableRowClickEvent): void;
    /**
     * Callback to invoke when a row is collapsed.
     * @param {DataTableRowEvent} event - Custom row event.
     */
    onRowCollapse?(event: DataTableRowEvent): void;
    /**
     * Callback to invoke when a row is double clicked.
     * @param {DataTableRowClickEvent} event - Custom click event.
     */
    onRowDoubleClick?(event: DataTableRowClickEvent): void;
    /**
     * Callback to invoke when the cancel icon is clicked on row editing mode.
     * @param {DataTableRowEditEvent} event - Custom row edit event.
     */
    onRowEditCancel?(event: DataTableRowEditEvent): void;
    /**
     * Callback to invoke when the cancel icon is clicked on row editing mode.
     * @param {DataTableRowEditEvent} event - Custom row edit event.
     */
    onRowEditChange?(event: DataTableRowEditEvent): void;
    /**
     * Callback to invoke when row edit is completed.
     * @param {DataTableRowEditCompleteEvent} event - Custom row edit complete event.
     */
    onRowEditComplete?(event: DataTableRowEditCompleteEvent): void;
    /**
     * Callback to invoke when the editing icon is clicked on row editing mode.
     * @param {DataTableRowEditEvent} event - Custom row edit event.
     */
    onRowEditInit?(event: DataTableRowEditEvent): void;
    /**
     * Callback to invoke when the save icon is clicked on row editing mode.
     * @param {DataTableRowEditSaveEvent} event - Custom row edit save event.
     */
    onRowEditSave?(event: DataTableRowEditSaveEvent): void;
    /**
     * Callback to invoke when a row is expanded.
     * @param {DataTableRowEvent} event - Custom row event.
     */
    onRowExpand?(event: DataTableRowEvent): void;
    /**
     * @todo Write the description
     * @param {DataTableRowMouseEvent} event - Custom row mouse event.
     */
    onRowMouseEnter?(event: DataTableRowMouseEvent): void;
    /**
     * @todo Write the description
     * @param {DataTableRowMouseEvent} event - Custom row mouse event.
     */
    onRowMouseLeave?(event: DataTableRowMouseEvent): void;
    /**
     * Callback to update the new order.
     * @param {DataTableRowReorderEvent<TValue>} event - Custom row reorder event.
     */
    onRowReorder?(event: DataTableRowReorderEvent<TValue>): void;
    /**
     * Callback to invoke when a row is selected.
     * @param {DataTableSelectEvent} event - Custom select event.
     */
    onRowSelect?(event: DataTableSelectEvent): void;
    /**
     * Callback to invoke when a row is toggled or collapsed.
     * @param {DataTableRowToggleEvent} event - Custom row toggle event.
     */
    onRowToggle?(event: DataTableRowToggleEvent): void;
    /**
     * Callback to invoke when a row is unselected.
     * @param {DataTableUnselectEvent} event - Custom unselect event.
     */
    onRowUnselect?(event: DataTableUnselectEvent): void;
    /**
     * @todo Write the description
     * @param {DataTableSelectAllChangeEvent} event - Custom select all change event.
     */
    onSelectAllChange?(event: DataTableSelectAllChangeEvent): void;
    /**
     * Callback to invoke when selection changes.
     * @param {DataTableSelectionChangeEvent<TValue>} event - Custom selection change event.
     */
    onSelectionChange?(event: DataTableSelectionChangeEvent<TValue>): void;
    /**
     * Callback to invoke on sort.
     * @param {DataTablePFSEvent} event - Custom sort event.
     */
    onSort?(event: DataTablePFSEvent): void;
    /**
     * Callback to invoke table state is restored.
     * @param {object} state - Table state.
     */
    onStateRestore?(state: object): void;
    /**
     * Callback to invoke table state is saved.
     * @param {object} state - Table state.
     */
    onStateSave?(state: object): void;
    /**
     * Callback to invoke after filtering and sorting to pass the rendered value.
     * @param {DataTableRowDataArray<TValue>} value - Value displayed by the table.
     */
    onValueChange?(value: DataTableRowDataArray<TValue>): void;
    /**
     * Function that takes the row data and returns an object in &#123;'styleclass' : condition&#125; format to define a classname for a particular now.
     * @param {DataTableRowData<TValue>} data - Value displayed by the table.
     */
    rowClassName?(data: DataTableRowData<TValue>, options: DataTableRowClassNameOptions<TValue>): object | string | undefined;
    /**
     * Callback to invoke to validate the editing row when the save icon is clicked on row editing mode.
     * @param {DataTableRowData<TValue>} data - Editing row data.
     */
    rowEditValidator?(data: DataTableRowData<TValue>, options: DataTableRowEditValidatorOptions<TValue>): boolean | undefined;
    /**
     * Function that receives the row data as the parameter and returns the expanded row content. You can override the rendering of the content by setting options.customRendering = true.
     * @param {DataTableRowData<TValue>} data - Editing row data.
     * @param {DataTableRowExpansionTemplate} options - Options for the row expansion template.
     */
    rowExpansionTemplate?(data: DataTableRowData<TValue>, options: DataTableRowExpansionTemplate): React.ReactNode;
    /**
     * Function that returns a boolean by passing the row data to decide if the row reorder element should be displayed per row.
     * @param {DataTableRowData<TValue>} data - Editing row data.
     * @param {DataTableShowRowReorderElementOptions} options - Options for the row reorder element.
     */
    showRowReorderElement?(data: DataTableRowData<TValue>, options: DataTableShowRowReorderElementOptions<TValue>): boolean | undefined | null;
    /**
     * Function that returns a boolean by passing the row data to decide if the radio or checkbox should be displayed per row.
     * @param {DataTableRowData<TValue>} data - Editing row data.
     * @param {DataTableShowSelectionElementOptions} options - Options for the row reorder element.
     */
    showSelectionElement?(data: DataTableRowData<TValue>, options: DataTableShowSelectionElementOptions<TValue>): boolean | undefined | null;
    /**
     * Used to get the child elements of the component.
     * @readonly
     */
    children?: React.ReactNode | undefined;
}

/**
 * @group Component
 */
export declare class DataTable<TValue extends DataTableValueArray> extends React.Component<DataTableProps<TValue>, any> {
    /**
     * @todo Write the description
     */
    public clearState(): void;
    /**
     * Closes the current editing cell when incell editing is enabled.
     */
    public closeEditingCell(): void;
    /**
     * Exports the data to CSV format.
     * @param {object} options - Options to export
     */
    public exportCSV(options?: { selectionOnly: boolean }): void;
    /**
     * Filters the data.
     * @param {T} value - The filter value
     * @param {string} field - The filter field
     * @param {'startsWith' | 'contains' | 'notContains' | 'endsWith' | 'equals' | 'notEquals' | 'in' | 'lt' | 'lte' | 'gt' | 'gte' | 'between' | 'dateIs' | 'dateIsNot' | 'dateBefore' | 'dateAfter' | 'custom'} mode - Filter match mode
     * @param  {number} index - @todo Write the description
     */
    public filter<T>(
        value: T,
        field: string,
        mode: 'startsWith' | 'contains' | 'notContains' | 'endsWith' | 'equals' | 'notEquals' | 'in' | 'lt' | 'lte' | 'gt' | 'gte' | 'between' | 'dateIs' | 'dateIsNot' | 'dateBefore' | 'dateAfter' | 'custom',
        index?: number
    ): void;
    /**
     * Resets sort, filter, paginator and columnorder state.
     */
    public reset(): void;
    /**
     * Resets column order when reorderableColumns is enabled.
     */
    public resetColumnOrder(): void;
    /**
     * Resets scroll position.
     */
    public resetScroll(): void;
    /**
     * @todo Write the description
     */
    public restoreColumnWidths(): void;
    /**
     * @todo Write the description
     */
    public restoreState(): void;
    /**
     * Stored states can be loaded at any time using this method if there is a stateStorage property.
     * @param {any} state - The state to restore
     */
    public restoreTableState(state: any): void;
    /**
     * @todo Write the description
     */
    public saveState(): void;
    /**
     * Used to get container element.
     * @return {HTMLDivElement} Container element
     */
    public getElement(): HTMLDivElement;
    /**
     * Used to get container element.
     * @return {HTMLDivElement} Container element
     */
    public getTable(): HTMLTableElement;
    /**
     * @todo Write the description
     */
    public getVirtualScroller(): VirtualScroller;
}
