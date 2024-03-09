import { FilterMatchMode } from '../api/Api';
import { ComponentBase } from '../componentbase/ComponentBase';
import { classNames } from '../utils/Utils';

const styles = `
@layer primereact {
    .p-treetable {
        position: relative;
    }
    
    .p-treetable > .p-treetable-wrapper {
        overflow: auto;
    }
    
    .p-treetable table {
        border-collapse: collapse;
        width: 100%;
        table-layout: fixed;
    }
    
    .p-treetable .p-sortable-column {
        cursor: pointer;
        user-select: none;
    }
    
    .p-treetable-selectable .p-treetable-tbody > tr {
        cursor: pointer;
    }
    
    .p-treetable-toggler {
        cursor: pointer;
        user-select: none;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        vertical-align: middle;
        overflow: hidden;
        position: relative;
    }
    
    .p-treetable-toggler + .p-checkbox {
        vertical-align: middle;
    }
    
    .p-treetable-toggler + .p-checkbox + span {
        vertical-align: middle;
    }
    
    /* Resizable */
    .p-treetable-resizable > .p-treetable-wrapper {
        overflow-x: auto;
    }
    
    .p-treetable-resizable .p-treetable-thead > tr > th,
    .p-treetable-resizable .p-treetable-tfoot > tr > td,
    .p-treetable-resizable .p-treetable-tbody > tr > td {
        overflow: hidden;
    }
    
    .p-treetable-resizable .p-resizable-column {
        background-clip: padding-box;
        position: relative;
    }
    
    .p-treetable-resizable-fit .p-resizable-column:last-child .p-column-resizer {
        display: none;
    }
    
    .p-treetable .p-column-resizer {
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
    
    .p-treetable .p-column-resizer-helper {
        width: 1px;
        position: absolute;
        z-index: 10;
        display: none;
    }
    
    /* Scrollable */
    .p-treetable-scrollable-wrapper {
        position: relative;
    }
    .p-treetable-scrollable-header,
    .p-treetable-scrollable-footer {
        overflow: hidden;
        border: 0 none;
    }
    
    .p-treetable-scrollable-body {
        overflow: auto;
        position: relative;
    }
    
    .p-treetable-virtual-table {
        position: absolute;
    }
    
    /* Frozen Columns */
    .p-treetable-frozen-view .p-treetable-scrollable-body {
        overflow: hidden;
    }
    
    .p-treetable-unfrozen-view {
        position: absolute;
        top: 0px;
        left: 0px;
    }
    
    /* Reorder */
    .p-treetable-reorder-indicator-up,
    .p-treetable-reorder-indicator-down {
        position: absolute;
        display: none;
    }
    
    /* Loader */
    .p-treetable .p-treetable-loading-overlay {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 2;
    }

    /* Alignment */
    .p-treetable .p-treetable-thead > tr > th.p-align-left > .p-column-header-content,
    .p-treetable .p-treetable-tbody > tr > td.p-align-left,
    .p-treetable .p-treetable-tfoot > tr > td.p-align-left {
        text-align: left;
        justify-content: flex-start;
    }
    .p-treetable .p-treetable-thead > tr > th.p-align-right > .p-column-header-content,
    .p-treetable .p-treetable-tbody > tr > td.p-align-right,
    .p-treetable .p-treetable-tfoot > tr > td.p-align-right {
        text-align: right;
        justify-content: flex-end;
    }
    .p-treetable .p-treetable-thead > tr > th.p-align-center > .p-column-header-content,
    .p-treetable .p-treetable-tbody > tr > td.p-align-center,
    .p-treetable .p-treetable-tfoot > tr > td.p-align-center {
        text-align: center;
        justify-content: center;
    }
}
`;

const classes = {
    root: ({ props, isRowSelectionMode }) =>
        classNames('p-treetable p-component', {
            'p-treetable-hoverable-rows': props.rowHover,
            'p-treetable-selectable': isRowSelectionMode(),
            'p-treetable-resizable': props.resizableColumns,
            'p-treetable-resizable-fit': props.resizableColumns && props.columnResizeMode === 'fit',
            'p-treetable-striped': props.stripedRows,
            'p-treetable-gridlines': props.showGridlines
        }),
    loadingIcon: 'p-treetable-loading-icon',
    loadingWrapper: 'p-treetable-loading',
    loadingOverlay: 'p-treetable-loading-overlay p-component-overlay',
    header: 'p-treetable-header',
    footer: 'p-treetable-footer',
    resizeHelper: 'p-column-resizer-helper',
    reorderIndicatorUp: 'p-treetable-reorder-indicator-up',
    reorderIndicatorDown: 'p-treetable-reorder-indicator-down',
    wrapper: 'p-treetable-wrapper',
    table: ({ props }) =>
        classNames('p-treetable-table', {
            'p-treetable-scrollable-table': props.scrollable,
            'p-treetable-resizable-table': props.resizableColumns,
            'p-treetable-resizable-table-fit': props.resizableColumns && props.columnResizeMode === 'fit'
        }),
    scrollableWrapper: 'p-treetable-wrapper p-treetable-scrollable-wrapper',
    thead: 'p-treetable-thead',
    tbody: 'p-treetable-tbody',
    tfoot: 'p-treetable-tfoot',
    emptyMessage: 'p-treetable-emptymessage',
    bodyCell: ({ bodyProps: props, editingState, align }) =>
        classNames({
            'p-editable-column': props.editor,
            'p-cell-editing': props.editor ? editingState : false,
            [`p-align-${align}`]: !!align
        }),
    sortBadge: 'p-sortable-column-badge',
    headerTitle: 'p-column-title',
    headerContent: 'p-column-header-content',
    headerCell: ({ headerProps: props, frozen, column, options, getColumnProp, sorted, align }) =>
        options.filterOnly
            ? classNames('p-filter-column', { 'p-frozen-column': frozen })
            : classNames({
                  'p-sortable-column': getColumnProp(column, 'sortable'),
                  'p-highlight': sorted,
                  'p-frozen-column': frozen,
                  'p-resizable-column': props.resizableColumns && getColumnProp(column, 'resizeable'),
                  'p-reorderable-column': props.reorderableColumns && getColumnProp(column, 'reorderable') && !frozen,
                  [`p-align-${align}`]: !!align
              }),
    columnResizer: 'p-column-resizer p-clickable',
    sortIcon: 'p-sortable-column-icon',
    row: ({ isSelected, rowProps: props }) => ({
        'p-highlight': isSelected(),
        'p-highlight-contextmenu': props.contextMenuSelectionKey && props.contextMenuSelectionKey === props.node.key,
        'p-row-odd': props.rowIndex % 2 !== 0
    }),
    checkboxWrapper: 'p-checkbox p-treetable-checkbox p-component',
    checkbox: ({ checked, partialChecked }) => classNames('p-checkbox-box', { 'p-highlight': checked, 'p-indeterminate': partialChecked }),
    checkboxIcon: 'p-checkbox-icon p-c',
    rowToggler: 'p-treetable-toggler p-link p-unselectable-text',
    rowTogglerIcon: 'p-treetable-toggler-icon',
    scrollableBody: 'p-treetable-scrollable-body',
    scrollableHeaderTable: 'p-treetable-scrollable-header-table',
    scrollableHeaderBox: 'p-treetable-scrollable-header-box',
    scrollableHeader: 'p-treetable-scrollable-header',
    scrollableBodyTable: 'p-treetable-scrollable-body-table',
    scrollableFooter: 'p-treetable-scrollable-footer',
    scrollableFooterBox: 'p-treetable-scrollable-footer-box',
    scrollableFooterTable: 'p-treetable-scrollable-footer-table',
    scrollable: ({ scrolaableProps: props }) => classNames('p-treetable-scrollable-view', { 'p-treetable-frozen-view': props.frozen, 'p-treetable-unfrozen-view': !props.frozen && props.frozenWidth }),
    scrollableColgroup: 'p-treetable-scrollable-colgroup'
};

export const TreeTableBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'TreeTable',
        alwaysShowPaginator: true,
        checkboxIcon: null,
        className: null,
        columnResizeMode: 'fit',
        contextMenuSelectionKey: null,
        currentPageReportTemplate: '({currentPage} of {totalPages})',
        defaultSortOrder: 1,
        emptyMessage: null,
        expandedKeys: null,
        filterDelay: 300,
        filterLocale: undefined,
        filterMode: 'lenient',
        filters: null,
        first: null,
        footer: null,
        footerColumnGroup: null,
        frozenFooterColumnGroup: null,
        frozenHeaderColumnGroup: null,
        frozenWidth: null,
        globalFilter: null,
        globalFilterMatchMode: FilterMatchMode.CONTAINS,
        header: null,
        headerColumnGroup: null,
        id: null,
        lazy: false,
        loading: false,
        loadingIcon: null,
        metaKeySelection: false,
        multiSortMeta: null,
        onColReorder: null,
        onCollapse: null,
        onColumnResizeEnd: null,
        onContextMenu: null,
        onContextMenuSelectionChange: null,
        onExpand: null,
        onFilter: null,
        onPage: null,
        onRowClick: null,
        onRowMouseEnter: null,
        onRowMouseLeave: null,
        onSelect: null,
        onSelectionChange: null,
        onSort: null,
        onToggle: null,
        onUnselect: null,
        onValueChange: null,
        pageLinkSize: 5,
        paginator: false,
        paginatorClassName: null,
        paginatorDropdownAppendTo: null,
        paginatorLeft: null,
        paginatorPosition: 'bottom',
        paginatorRight: null,
        paginatorTemplate: 'FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown',
        propagateSelectionDown: true,
        propagateSelectionUp: true,
        removableSort: false,
        reorderIndicatorDownIcon: null,
        reorderIndicatorUpIcon: null,
        reorderableColumns: false,
        resizableColumns: false,
        rowClassName: null,
        rowHover: false,
        rows: null,
        rowsPerPageOptions: null,
        scrollHeight: null,
        scrollable: false,
        selectOnEdit: true,
        selectionKeys: null,
        selectionMode: null,
        showGridlines: false,
        sortField: null,
        sortIcon: null,
        sortMode: 'single',
        sortOrder: null,
        stripedRows: false,
        style: null,
        tabIndex: 0,
        tableClassName: null,
        tableStyle: null,
        totalRecords: null,
        value: null,
        children: undefined
    },
    css: {
        classes,
        styles
    }
});
