import PrimeReact, { FilterMatchMode } from '../api/Api';
import { ComponentBase } from '../componentbase/ComponentBase';
import { ObjectUtils, classNames } from '../utils/Utils';

const styles = `
@layer primereact {
    .p-datatable {
        position: relative;
    }

    .p-datatable > .p-datatable-wrapper {
        overflow: auto;
    }

    .p-datatable-table {
        border-spacing: 0px;
        width: 100%;
    }

    .p-datatable .p-sortable-disabled {
        cursor: auto;
    }

    .p-datatable .p-sortable-column {
        cursor: pointer;
        user-select: none;
    }

    .p-datatable .p-sortable-column .p-column-title,
    .p-datatable .p-sortable-column .p-sortable-column-icon,
    .p-datatable .p-sortable-column .p-sortable-column-badge {
        vertical-align: middle;
    }

    .p-datatable .p-sortable-column .p-sortable-column-badge {
        display: inline-flex;
        align-items: center;
        justify-content: center;
    }

    .p-datatable-selectable .p-selectable-row,
    .p-datatable-selectable-cell .p-selectable-cell {
        cursor: pointer;
    }

    .p-datatable-drag-selection-helper {
        position: absolute;
        z-index: 99999999;
    }

    /* Scrollable */
    .p-datatable-scrollable > .p-datatable-wrapper {
        position: relative;
    }

    .p-datatable-scrollable-table > .p-datatable-thead {
        position: sticky;
        top: 0;
        z-index: 1;
    }

    .p-datatable-scrollable-table > .p-datatable-frozen-tbody {
        position: sticky;
        z-index: 1;
    }

    .p-datatable-scrollable-table > .p-datatable-tfoot {
        position: sticky;
        bottom: 0;
        z-index: 1;
    }

    .p-datatable-scrollable .p-frozen-column {
        position: sticky;
        background: inherit;
    }

    .p-datatable-scrollable th.p-frozen-column {
        z-index: 1;
    }

    .p-datatable-flex-scrollable {
        display: flex;
        flex-direction: column;
        height: 100%;
    }

    .p-datatable-flex-scrollable > .p-datatable-wrapper {
        display: flex;
        flex-direction: column;
        flex: 1;
        height: 100%;
    }

    .p-datatable-scrollable-table > .p-datatable-tbody > .p-rowgroup-header {
        position: sticky;
        z-index: 1;
    }

    /* Resizable */
    .p-datatable-resizable-table > .p-datatable-thead > tr > th,
    .p-datatable-resizable-table > .p-datatable-tfoot > tr > td,
    .p-datatable-resizable-table > .p-datatable-tbody > tr > td {
        overflow: hidden;
        white-space: nowrap;
    }

    .p-datatable-resizable-table > .p-datatable-thead > tr > th.p-resizable-column:not(.p-frozen-column) {
        background-clip: padding-box;
        position: relative;
    }

    .p-datatable-resizable-table-fit > .p-datatable-thead > tr > th.p-resizable-column:last-child .p-column-resizer {
        display: none;
    }

    .p-datatable .p-column-resizer {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        margin: 0;
        width: 0.5rem;
        height: 100%;
        padding: 0px;
        cursor: col-resize;
        border: 1px solid transparent;
    }

    .p-datatable .p-column-header-content {
        display: flex;
        align-items: center;
    }

    .p-datatable .p-column-resizer-helper {
        width: 1px;
        position: absolute;
        z-index: 10;
        display: none;
    }

    .p-datatable .p-row-editor-init,
    .p-datatable .p-row-editor-save,
    .p-datatable .p-row-editor-cancel {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
    }

    /* Expand */
    .p-datatable .p-row-toggler {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
    }

    /* Reorder */
    .p-datatable-reorder-indicator-up,
    .p-datatable-reorder-indicator-down {
        position: absolute;
        display: none;
    }

    .p-reorderable-column,
    .p-datatable-reorderablerow-handle {
        cursor: move;
    }

    /* Loader */
    .p-datatable .p-datatable-loading-overlay {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 2;
    }

    /* Filter */
    .p-column-filter-row {
        display: flex;
        align-items: center;
        width: 100%;
    }

    .p-column-filter-menu {
        display: inline-flex;
        margin-left: auto;
    }

    .p-column-filter-row .p-column-filter-element {
        flex: 1 1 auto;
        width: 1%;
    }

    .p-column-filter-menu-button,
    .p-column-filter-clear-button {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        text-decoration: none;
        overflow: hidden;
        position: relative;
    }

    .p-column-filter-overlay {
        position: absolute;
        top: 0;
        left: 0;
    }

    .p-column-filter-row-items {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .p-column-filter-row-item {
        cursor: pointer;
    }

    .p-column-filter-add-button,
    .p-column-filter-remove-button {
        justify-content: center;
    }

    .p-column-filter-add-button .p-button-label,
    .p-column-filter-remove-button .p-button-label {
        flex-grow: 0;
    }

    .p-column-filter-buttonbar {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .p-column-filter-buttonbar .p-button:not(.p-button-icon-only) {
        width: auto;
    }

    /* Responsive */
    .p-datatable .p-datatable-tbody > tr > td > .p-column-title {
        display: none;
    }

    /* VirtualScroller */
    .p-datatable-virtualscroller-spacer {
        display: flex;
    }

    .p-datatable .p-virtualscroller .p-virtualscroller-loading {
        transform: none;
        min-height: 0;
        position: sticky;
        top: 0;
        left: 0;
    }

    /* Alignment */
    .p-datatable .p-datatable-thead > tr > th.p-align-left > .p-column-header-content,
    .p-datatable .p-datatable-tbody > tr > td.p-align-left,
    .p-datatable .p-datatable-tfoot > tr > td.p-align-left {
        text-align: left;
        justify-content: flex-start;
    }

    .p-datatable .p-datatable-thead > tr > th.p-align-right > .p-column-header-content,
    .p-datatable .p-datatable-tbody > tr > td.p-align-right,
    .p-datatable .p-datatable-tfoot > tr > td.p-align-right {
        text-align: right;
        justify-content: flex-end;
    }

    .p-datatable .p-datatable-thead > tr > th.p-align-center > .p-column-header-content,
    .p-datatable .p-datatable-tbody > tr > td.p-align-center,
    .p-datatable .p-datatable-tfoot > tr > td.p-align-center {
        text-align: center;
        justify-content: center;
    }
}
`;

const classes = {
    root: ({ props, selectable }) =>
        classNames('p-datatable p-component', {
            'p-datatable-hoverable-rows': props.rowHover,
            'p-datatable-selectable': selectable && !props.cellSelection,
            'p-datatable-selectable-cell': selectable && props.cellSelection,
            'p-datatable-resizable': props.resizableColumns,
            'p-datatable-resizable-fit': props.resizableColumns && props.columnResizeMode === 'fit',
            'p-datatable-scrollable': props.scrollable,
            'p-datatable-flex-scrollable': props.scrollable && props.scrollHeight === 'flex',
            'p-datatable-responsive-stack': props.responsiveLayout === 'stack',
            'p-datatable-responsive-scroll': props.responsiveLayout === 'scroll',
            'p-datatable-striped': props.stripedRows,
            'p-datatable-gridlines': props.showGridlines,
            'p-datatable-grouped-header': props.headerColumnGroup != null,
            'p-datatable-grouped-footer': props.footerColumnGroup != null,
            'p-datatable-sm': props.size === 'small',
            'p-datatable-lg': props.size === 'large'
        }),
    loadingIcon: 'p-datatable-loading-icon',
    loadingOverlay: 'p-datatable-loading-overlay p-component-overlay',
    header: 'p-datatable-header',
    wrapper: 'p-datatable-wrapper',
    table: ({ props }) =>
        classNames('p-datatable-table', {
            'p-datatable-scrollable-table': props.scrollable,
            'p-datatable-resizable-table': props.resizableColumns,
            'p-datatable-resizable-table-fit': props.resizableColumns && props.columnResizeMode === 'fit'
        }),
    thead: 'p-datatable-thead',
    tfoot: 'p-datatable-tfoot',
    footer: 'p-datatable-footer',
    resizeHelper: 'p-column-resizer-helper',
    reorderIndicatorUp: 'p-datatable-reorder-indicator-up',
    reorderIndicatorDown: 'p-datatable-reorder-indicator-down',
    paginator: ({ position }) => classNames('p-paginator-' + position),
    bodyCell: ({ selectionMode, editor, editingState, frozen, cellSelected, align, bodyProps: props, getCellParams }) =>
        classNames({
            'p-selection-column': selectionMode !== null,
            'p-editable-column': editor,
            'p-cell-editing': editor && editingState,
            'p-frozen-column': frozen,
            'p-selectable-cell': props.allowCellSelection && props.isSelectable({ data: getCellParams(), index: props.rowIndex }),
            'p-highlight': cellSelected,
            [`p-align-${align}`]: !!align
        }),
    columnTitle: 'p-column-title',
    bodyRow: ({ rowProps: props }) =>
        classNames({
            'p-highlight': (!props.allowCellSelection && props.selected) || props.contextMenuSelected,
            'p-highlight-contextmenu': props.contextMenuSelected,
            'p-selectable-row': props.allowRowSelection && props.isSelectable({ data: props.rowData, index: props.rowIndex }),
            'p-row-odd': props.rowIndex % 2 !== 0
        }),
    rowGroupTogglerIcon: 'p-row-toggler-icon',
    rowGroupToggler: 'p-row-toggler p-link',
    rowGroupHeader: 'p-rowgroup-header',
    rowGroupHeaderName: 'p-rowgroup-header-name',
    rowGroupFooter: 'p-rowgroup-footer',
    rowReorderIcon: 'p-datatable-reorderablerow-handle',
    rowTogglerIcon: 'p-row-toggler-icon',
    rowToggler: 'p-row-toggler p-link',
    rowEditorSaveIcon: 'p-row-editor-save-icon',
    rowEditorSaveButton: 'p-row-editor-save p-link',
    rowEditorCancelIcon: 'p-row-editor-cancel-icon',
    rowEditorCancelButton: 'p-row-editor-cancel p-link',
    rowEditorInitIcon: 'p-row-editor-init-icon',
    rowEditorInitButton: 'p-row-editor-init p-link',
    rowExpansion: 'p-datatable-row-expansion',
    virtualScrollerSpacer: ({ className }) => className,
    tbody: ({ className }) => className,
    filterInput: 'p-fluid p-column-filter-element',
    filterMenuButton: ({ overlayVisibleState, hasFilter }) =>
        classNames('p-column-filter-menu-button p-link', {
            'p-column-filter-menu-button-open': overlayVisibleState,
            'p-column-filter-menu-button-active': hasFilter()
        }),
    headerFilterClearButton: ({ hasRowFilter }) =>
        classNames('p-column-filter-clear-button p-link', {
            'p-hidden-space': !hasRowFilter()
        }),
    filterSeparator: 'p-column-filter-separator',
    filterRowItem: ({ isRowMatchModeSelected, isShowMatchModes, value }) => (isShowMatchModes() ? classNames('p-column-filter-row-item', { 'p-highlight': value && isRowMatchModeSelected(value) }) : undefined),
    filterRowItems: 'p-column-filter-row-items',
    filterOperator: 'p-column-filter-operator',
    filterConstraints: 'p-column-filter-constraints',
    filterConstraint: 'p-column-filter-constraint',
    filterAddRule: 'p-column-filter-add-rule',
    filterButtonBar: 'p-column-filter-buttonbar',
    filterOverlay: ({ columnFilterProps: props, context, getColumnProp }) =>
        classNames('p-column-filter-overlay p-component p-fluid', getColumnProp('filterMenuClassName'), {
            'p-column-filter-overlay-menu': props.display === 'menu',
            'p-input-filled': (context && context.inputStyle === 'filled') || PrimeReact.inputStyle === 'filled',
            'p-ripple-disabled': (context && context.ripple === false) || PrimeReact.ripple === false
        }),
    columnFilter: ({ columnFilterProps: props }) =>
        classNames('p-column-filter p-fluid', {
            'p-column-filter-row': props.display === 'row',
            'p-column-filter-menu': props.display === 'menu'
        }),
    columnResizer: 'p-column-resizer',
    emptyMessage: 'p-datatable-emptymessage',
    sortBadge: 'p-sortable-column-badge',
    sortIcon: 'p-sortable-column-icon',
    checkboxWrapper: ({ rowProps: props, focusedState }) => classNames('p-checkbox p-component', { 'p-checkbox-focused': focusedState, 'p-disabled': props.disabled }),
    checkbox: ({ rowProps: props, focusedState }) => classNames('p-checkbox-box p-component', { 'p-highlight': props.checked, 'p-focus': focusedState }),
    checkboxIcon: 'p-checkbox-icon',
    radiobuttonWrapper: ({ rowProps: props, focusedState }) => classNames('p-radiobutton p-component', { 'p-radiobutton-focused': focusedState, 'p-disabled': props.disabled }),
    radiobutton: ({ rowProps: props, focusedState }) => classNames('p-radiobutton-box p-component', { 'p-highlight': props.checked, 'p-focus': focusedState }),
    radiobuttonIcon: 'p-radiobutton-icon',
    headerTitle: 'p-column-title',
    headerCheckboxWrapper: 'p-checkbox p-component',
    headerCheckbox: ({ headerProps: props, focusedState }) =>
        classNames('p-checkbox-box p-component', {
            'p-highlight': props.checked,
            'p-disabled': props.disabled,
            'p-focus': focusedState
        }),
    headerCheckboxIcon: 'p-checkbox-icon',
    headerContent: 'p-column-header-content',
    headerCell: ({ headerProps: props, frozen, sortMeta, align, _isSortableDisabled, getColumnProp }) =>
        ObjectUtils.isEmpty(props)
            ? classNames('p-filter-column', { 'p-frozen-column': frozen })
            : classNames({
                  'p-filter-column': !props.headerColumnGroup && props.filterDisplay === 'row',
                  'p-sortable-column': getColumnProp('sortable'),
                  'p-resizable-column': props.resizableColumns && getColumnProp('resizeable'),
                  'p-highlight': sortMeta.sorted,
                  'p-frozen-column': frozen,
                  'p-selection-column': getColumnProp('selectionMode'),
                  'p-sortable-disabled': getColumnProp('sortable') && _isSortableDisabled,
                  'p-reorderable-column': props.reorderableColumns && getColumnProp('reorderable') && !frozen,
                  [`p-align-${align}`]: !!align
              }),
    footerCell: ({ getColumnProp, align }) =>
        classNames({
            'p-frozen-column': getColumnProp('frozen'),
            [`p-align-${align}`]: !!align
        }),
    transition: 'p-connected-overlay'
};

const inlineStyles = {
    wrapper: { overflow: 'auto' },
    resizeHelper: { display: 'none' },
    reorderIndicatorUp: ({ style }) => ({ ...style }),
    reorderIndicatorDown: ({ style }) => ({ ...style })
};

export const DataTableBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'DataTable',
        alwaysShowPaginator: true,
        breakpoint: '960px',
        cellClassName: null,
        cellSelection: false,
        checkIcon: null,
        className: null,
        collapsedRowIcon: null,
        columnResizeMode: 'fit',
        compareSelectionBy: 'deepEquals',
        contextMenuSelection: null,
        csvSeparator: ',',
        currentPageReportTemplate: '({currentPage} of {totalPages})',
        customRestoreState: null,
        customSaveState: null,
        dataKey: null,
        defaultSortOrder: 1,
        dragSelection: false,
        editMode: null,
        editingRows: null,
        emptyMessage: null,
        expandableRowGroups: false,
        expandedRowIcon: null,
        expandedRows: null,
        exportFilename: 'download',
        exportFunction: null,
        filterClearIcon: null,
        filterDelay: 300,
        filterDisplay: 'menu',
        filterIcon: null,
        filterLocale: undefined,
        filters: null,
        first: 0,
        footer: null,
        footerColumnGroup: null,
        frozenRow: false,
        frozenValue: null,
        frozenWidth: null,
        globalFilter: null,
        globalFilterFields: null,
        globalFilterMatchMode: FilterMatchMode.CONTAINS,
        groupRowsBy: null,
        header: null,
        headerColumnGroup: null,
        id: null,
        isDataSelectable: null,
        lazy: false,
        loading: false,
        loadingIcon: null,
        metaKeySelection: false,
        multiSortMeta: null,
        onAllRowsSelect: null,
        onAllRowsUnselect: null,
        onCellClick: null,
        onCellSelect: null,
        onCellUnselect: null,
        onColReorder: null,
        onColumnResizeEnd: null,
        onColumnResizerClick: null,
        onColumnResizerDoubleClick: null,
        onContextMenu: null,
        onContextMenuSelectionChange: null,
        onFilter: null,
        onPage: null,
        onRowClick: null,
        onRowCollapse: null,
        onRowDoubleClick: null,
        onRowEditCancel: null,
        onRowEditChange: null,
        onRowEditComplete: null,
        onRowEditInit: null,
        onRowEditSave: null,
        onRowExpand: null,
        onRowMouseEnter: null,
        onRowMouseLeave: null,
        onRowPointerDown: null,
        onRowPointerUp: null,
        onRowReorder: null,
        onRowSelect: null,
        onRowToggle: null,
        onRowUnselect: null,
        onSelectAllChange: null,
        onSelectionChange: null,
        onSort: null,
        onStateRestore: null,
        onStateSave: null,
        onValueChange: null,
        pageLinkSize: 5,
        paginator: false,
        paginatorClassName: null,
        paginatorDropdownAppendTo: null,
        paginatorLeft: null,
        paginatorPosition: 'bottom',
        paginatorRight: null,
        paginatorTemplate: 'FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown',
        removableSort: false,
        reorderIndicatorDownIcon: null,
        reorderIndicatorUpIcon: null,
        reorderableColumns: false,
        reorderableRows: false,
        resizableColumns: false,
        responsiveLayout: 'scroll',
        rowClassName: null,
        rowEditValidator: null,
        rowEditorCancelIcon: null,
        rowEditorInitIcon: null,
        rowEditorSaveIcon: null,
        rowExpansionTemplate: null,
        rowGroupFooterTemplate: null,
        rowGroupHeaderTemplate: null,
        rowGroupMode: null,
        rowHover: false,
        rows: null,
        rowsPerPageOptions: null,
        scrollHeight: null,
        scrollable: false,
        selectAll: false,
        selectOnEdit: true,
        selection: null,
        selectionAriaLabel: null,
        selectionAutoFocus: true,
        selectionMode: null,
        selectionPageOnly: false,
        showGridlines: false,
        showHeaders: true,
        showRowReorderElement: null,
        showSelectAll: true,
        showSelectionElement: null,
        size: 'normal',
        sortField: null,
        sortIcon: null,
        sortMode: 'single',
        sortOrder: null,
        stateKey: null,
        stateStorage: 'session',
        stripedRows: false,
        style: null,
        tabIndex: 0,
        tableClassName: null,
        tableStyle: null,
        totalRecords: null,
        value: null,
        virtualScrollerOptions: null,
        children: undefined
    },
    css: {
        styles,
        classes,
        inlineStyles
    }
});
