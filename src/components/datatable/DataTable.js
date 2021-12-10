import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Paginator } from '../paginator/Paginator';
import { classNames, DomHandler, ObjectUtils, UniqueComponentId } from '../utils/Utils';
import PrimeReact, { FilterService, FilterOperator, FilterMatchMode } from '../api/Api';
import { TableBody } from './TableBody';
import { TableFooter } from './TableFooter';
import { TableHeader } from './TableHeader';
import { VirtualScroller } from '../virtualscroller/VirtualScroller';

export class DataTable extends Component {

    static defaultProps = {
        id: null,
        value: null,
        header: null,
        footer: null,
        style: null,
        className: null,
        tableStyle: null,
        tableClassName: null,
        paginator: false,
        paginatorPosition: 'bottom',
        alwaysShowPaginator: true,
        paginatorClassName: null,
        paginatorTemplate: 'FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown',
        paginatorLeft: null,
        paginatorRight: null,
        paginatorDropdownAppendTo: null,
        pageLinkSize: 5,
        rowsPerPageOptions: null,
        currentPageReportTemplate: '({currentPage} of {totalPages})',
        first: 0,
        rows: null,
        totalRecords: null,
        lazy: false,
        sortField: null,
        sortOrder: null,
        multiSortMeta: null,
        sortMode: 'single',
        defaultSortOrder: 1,
        removableSort: false,
        emptyMessage: null,
        selectionMode: null,
        dragSelection: false,
        cellSelection: false,
        selection: null,
        onSelectionChange: null,
        contextMenuSelection: null,
        onContextMenuSelectionChange: null,
        compareSelectionBy: 'deepEquals',
        dataKey: null,
        metaKeySelection: true,
        selectOnEdit: true,
        selectionPageOnly: false,
        showSelectAll: true,
        selectAll: false,
        onSelectAllChange: null,
        headerColumnGroup: null,
        footerColumnGroup: null,
        rowExpansionTemplate: null,
        expandedRows: null,
        onRowToggle: null,
        resizableColumns: false,
        columnResizeMode: 'fit',
        reorderableColumns: false,
        filters: null,
        globalFilter: null,
        filterDelay: 300,
        filterLocale: undefined,
        scrollable: false,
        scrollHeight: null,
        scrollDirection: 'vertical',
        virtualScrollerOptions: null,
        frozenWidth: null,
        frozenValue: null,
        csvSeparator: ',',
        exportFilename: 'download',
        rowGroupMode: null,
        autoLayout: false,
        rowClassName: null,
        cellClassName: null,
        rowGroupHeaderTemplate: null,
        rowGroupFooterTemplate: null,
        loading: false,
        loadingIcon: 'pi pi-spinner',
        tabIndex: 0,
        stateKey: null,
        stateStorage: 'session',
        groupRowsBy: null,
        editMode: 'cell',
        editingRows: null,
        expandableRowGroups: false,
        rowHover: false,
        showGridlines: false,
        stripedRows: false,
        size: 'normal',
        responsiveLayout: 'stack',
        breakpoint: '960px',
        filterDisplay: 'menu',
        expandedRowIcon: 'pi pi-chevron-down',
        collapsedRowIcon: 'pi pi-chevron-right',
        onRowEditComplete: null,
        globalFilterFields: null,
        showSelectionElement: null,
        showRowReorderElement: null,
        onColumnResizeEnd: null,
        onColumnResizerClick: null,
        onColumnResizerDoubleClick: null,
        onSort: null,
        onPage: null,
        onFilter: null,
        onAllRowsSelect: null,
        onAllRowsUnselect: null,
        onRowClick: null,
        onRowDoubleClick: null,
        onRowSelect: null,
        onRowUnselect: null,
        onRowExpand: null,
        onRowCollapse: null,
        onContextMenu: null,
        onColReorder: null,
        onCellClick: null,
        onCellSelect: null,
        onCellUnselect: null,
        onRowReorder: null,
        onValueChange: null,
        rowEditValidator: null,
        onRowEditInit: null,
        onRowEditSave: null,
        onRowEditCancel: null,
        onRowEditChange: null,
        exportFunction: null,
        customSaveState: null,
        customRestoreState: null,
        onStateSave: null,
        onStateRestore: null
    }

    static propTypes = {
        id: PropTypes.string,
        value: PropTypes.array,
        header: PropTypes.any,
        footer: PropTypes.any,
        style: PropTypes.object,
        className: PropTypes.string,
        tableStyle: PropTypes.any,
        tableClassName: PropTypes.string,
        paginator: PropTypes.bool,
        paginatorPosition: PropTypes.string,
        alwaysShowPaginator: PropTypes.bool,
        paginatorClassName: PropTypes.string,
        paginatorTemplate: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
        paginatorLeft: PropTypes.any,
        paginatorRight: PropTypes.any,
        paginatorDropdownAppendTo: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
        pageLinkSize: PropTypes.number,
        rowsPerPageOptions: PropTypes.array,
        currentPageReportTemplate: PropTypes.string,
        first: PropTypes.number,
        rows: PropTypes.number,
        totalRecords: PropTypes.number,
        lazy: PropTypes.bool,
        sortField: PropTypes.string,
        sortOrder: PropTypes.number,
        multiSortMeta: PropTypes.array,
        sortMode: PropTypes.string,
        defaultSortOrder: PropTypes.number,
        removableSort: PropTypes.bool,
        emptyMessage: PropTypes.any,
        selectionMode: PropTypes.string,
        dragSelection: PropTypes.bool,
        cellSelection: PropTypes.bool,
        selection: PropTypes.any,
        onSelectionChange: PropTypes.func,
        contextMenuSelection: PropTypes.object,
        onContextMenuSelectionChange: PropTypes.func,
        compareSelectionBy: PropTypes.string,
        dataKey: PropTypes.string,
        metaKeySelection: PropTypes.bool,
        selectOnEdit: PropTypes.bool,
        selectionPageOnly: PropTypes.bool,
        showSelectAll: PropTypes.bool,
        selectAll: PropTypes.bool,
        onSelectAllChange: PropTypes.func,
        headerColumnGroup: PropTypes.any,
        footerColumnGroup: PropTypes.any,
        rowExpansionTemplate: PropTypes.func,
        expandedRows: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
        onRowToggle: PropTypes.func,
        resizableColumns: PropTypes.bool,
        columnResizeMode: PropTypes.string,
        reorderableColumns: PropTypes.bool,
        filters: PropTypes.object,
        globalFilter: PropTypes.any,
        filterDelay: PropTypes.number,
        filterLocale: PropTypes.string,
        scrollable: PropTypes.bool,
        scrollHeight: PropTypes.string,
        scrollDirection: PropTypes.string,
        virtualScrollerOptions: PropTypes.object,
        frozenWidth: PropTypes.string,
        frozenValue: PropTypes.array,
        csvSeparator: PropTypes.string,
        exportFilename: PropTypes.string,
        rowGroupMode: PropTypes.string,
        autoLayout: PropTypes.bool,
        rowClassName: PropTypes.func,
        cellClassName: PropTypes.func,
        rowGroupHeaderTemplate: PropTypes.func,
        rowGroupFooterTemplate: PropTypes.func,
        loading: PropTypes.bool,
        loadingIcon: PropTypes.string,
        tabIndex: PropTypes.number,
        stateKey: PropTypes.string,
        stateStorage: PropTypes.string,
        groupRowsBy: PropTypes.string,
        editMode: PropTypes.string,
        editingRows: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
        expandableRowGroups: PropTypes.bool,
        rowHover: PropTypes.bool,
        showGridlines: PropTypes.bool,
        stripedRows: PropTypes.bool,
        size: PropTypes.string,
        responsiveLayout: PropTypes.string,
        breakpoint: PropTypes.string,
        filterDisplay: PropTypes.string,
        expandedRowIcon: PropTypes.string,
        collapsedRowIcon: PropTypes.string,
        globalFilterFields: PropTypes.array,
        onRowEditComplete: PropTypes.func,
        showSelectionElement: PropTypes.func,
        showRowReorderElement: PropTypes.func,
        onColumnResizeEnd: PropTypes.func,
        onColumnResizerClick: PropTypes.func,
        onColumnResizerDoubleClick: PropTypes.func,
        onSort: PropTypes.func,
        onPage: PropTypes.func,
        onFilter: PropTypes.func,
        onAllRowsSelect: PropTypes.func,
        onAllRowsUnselect: PropTypes.func,
        onRowClick: PropTypes.func,
        onRowDoubleClick: PropTypes.func,
        onRowSelect: PropTypes.func,
        onRowUnselect: PropTypes.func,
        onRowExpand: PropTypes.func,
        onRowCollapse: PropTypes.func,
        onCellClick: PropTypes.func,
        onCellSelect: PropTypes.func,
        onCellUnselect: PropTypes.func,
        onContextMenu: PropTypes.func,
        onColReorder: PropTypes.func,
        onRowReorder: PropTypes.func,
        onValueChange: PropTypes.func,
        rowEditValidator: PropTypes.func,
        onRowEditInit: PropTypes.func,
        onRowEditSave: PropTypes.func,
        onRowEditCancel: PropTypes.func,
        onRowEditChange: PropTypes.func,
        exportFunction: PropTypes.func,
        customSaveState: PropTypes.func,
        customRestoreState: PropTypes.func,
        onStateSave: PropTypes.func,
        onStateRestore: PropTypes.func
    };

    constructor(props) {
        super(props);

        this.state = {
            d_rows: props.rows,
            columnOrder: [],
            groupRowsSortMeta: null,
            editingMeta: {}
        };

        if (!this.props.onPage) {
            this.state.first = props.first;
            this.state.rows = props.rows;
        }

        if (!this.props.onSort) {
            this.state.sortField = props.sortField;
            this.state.sortOrder = props.sortOrder;
            this.state.multiSortMeta = props.multiSortMeta;
        }

        this.state.d_filters = this.cloneFilters(props.filters);
        if (!this.props.onFilter) {
            this.state.filters = props.filters;
        }

        this.attributeSelector = UniqueComponentId();

        // header
        this.onSortChange = this.onSortChange.bind(this);
        this.onFilterChange = this.onFilterChange.bind(this);
        this.onFilterApply = this.onFilterApply.bind(this);
        this.onColumnHeaderMouseDown = this.onColumnHeaderMouseDown.bind(this);
        this.onColumnHeaderDragStart = this.onColumnHeaderDragStart.bind(this);
        this.onColumnHeaderDragOver = this.onColumnHeaderDragOver.bind(this);
        this.onColumnHeaderDragLeave = this.onColumnHeaderDragLeave.bind(this);
        this.onColumnHeaderDrop = this.onColumnHeaderDrop.bind(this);
        this.onColumnResizeStart = this.onColumnResizeStart.bind(this);
        this.onColumnHeaderCheckboxChange = this.onColumnHeaderCheckboxChange.bind(this);
        this.allRowsSelected = this.allRowsSelected.bind(this);

        // body
        this.onEditingMetaChange = this.onEditingMetaChange.bind(this);

        //paginator
        this.onPageChange = this.onPageChange.bind(this);
    }

    isCustomStateStorage() {
        return this.props.stateStorage === 'custom';
    }

    isStateful() {
        return this.props.stateKey != null || this.isCustomStateStorage();
    }

    isVirtualScrollerDisabled() {
        return ObjectUtils.isEmpty(this.props.virtualScrollerOptions) || !this.props.scrollable;
    }

    isEquals(data1, data2) {
        return this.props.compareSelectionBy === 'equals' ? (data1 === data2) : ObjectUtils.equals(data1, data2, this.props.dataKey);
    }

    hasFilter() {
        return ObjectUtils.isNotEmpty(this.getFilters()) || this.props.globalFilter;
    }

    getFirst() {
        return this.props.onPage ? this.props.first : this.state.first;
    }

    getRows() {
        return this.props.onPage ? this.props.rows : this.state.rows;
    }

    getSortField() {
        return this.props.onSort ? this.props.sortField : this.state.sortField;
    }

    getSortOrder() {
        return this.props.onSort ? this.props.sortOrder : this.state.sortOrder;
    }

    getMultiSortMeta() {
        return (this.props.onSort ? this.props.multiSortMeta : this.state.multiSortMeta) || [];
    }

    getFilters() {
        return this.props.onFilter ? this.props.filters : this.state.filters;
    }

    getColumnProp(col, prop) {
        return col.props[prop];
    }

    getColumns(ignoreReorderable) {
        const columns = React.Children.toArray(this.props.children);

        if (!columns) {
            return null;
        }

        if (!ignoreReorderable && this.props.reorderableColumns && this.state.columnOrder) {
            let orderedColumns = this.state.columnOrder.reduce((arr, columnKey) => {
                const column = this.findColumnByKey(columns, columnKey);
                column && arr.push(column);
                return arr;
            }, []);

            return [...orderedColumns, ...columns.filter(col => orderedColumns.indexOf(col) < 0)];
        }

        return columns;
    }

    getStorage() {
        switch (this.props.stateStorage) {
            case 'local':
                return window.localStorage;

            case 'session':
                return window.sessionStorage;

            case 'custom':
                return null;

            default:
                throw new Error(this.props.stateStorage + ' is not a valid value for the state storage, supported values are "local", "session" and "custom".');
        }
    }

    saveState() {
        let state = {};

        if (this.props.paginator) {
            state.first = this.getFirst();
            state.rows = this.getRows();
        }

        let sortField = this.getSortField();
        if (sortField) {
            state.sortField = sortField;
            state.sortOrder = this.getSortOrder();
        }

        let multiSortMeta = this.getMultiSortMeta();
        if (multiSortMeta) {
            state.multiSortMeta = multiSortMeta;
        }

        if (this.hasFilter()) {
            state.filters = this.getFilters();
        }

        if (this.props.resizableColumns) {
            this.saveColumnWidths(state);
        }

        if (this.props.reorderableColumns) {
            state.columnOrder = this.state.columnOrder;
        }

        if (this.props.expandedRows) {
            state.expandedRows = this.props.expandedRows;
        }

        if (this.props.selection && this.props.onSelectionChange) {
            state.selection = this.props.selection;
        }

        if (this.isCustomStateStorage()) {
            if (this.props.customSaveState) {
                this.props.customSaveState(state);
            }
        }
        else {
            const storage = this.getStorage();
            if (ObjectUtils.isNotEmpty(state)) {
                storage.setItem(this.props.stateKey, JSON.stringify(state));
            }
        }

        if (this.props.onStateSave) {
            this.props.onStateSave(state);
        }
    }

    clearState() {
        const storage = this.getStorage();

        if (storage && this.props.stateKey) {
            storage.removeItem(this.props.stateKey);
        }
    }

    restoreState(state) {
        let restoredState = {};

        if (this.isCustomStateStorage()) {
            if (this.props.customRestoreState) {
                restoredState = this.props.customRestoreState();
            }
        }
        else {
            const storage = this.getStorage();
            const stateString = storage.getItem(this.props.stateKey);
            const dateFormat = /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/;
            const reviver = function (key, value) {
                return (typeof value === "string" && dateFormat.test(value)) ? new Date(value) : value;
            }

            if (stateString) {
                restoredState = JSON.parse(stateString, reviver);
            }
        }

        this._restoreState(restoredState, state);
    }

    restoreTableState(restoredState) {
        const state = this._restoreState(restoredState);
        if (ObjectUtils.isNotEmpty(state)) {
            this.setState(state);
        }
    }

    _restoreState(restoredState, state = {}) {
        if (ObjectUtils.isNotEmpty(restoredState)) {
            if (this.props.paginator) {
                if (this.props.onPage) {
                    const getOnPageParams = (first, rows) => {
                        const totalRecords = this.getTotalRecords(this.processedData());
                        const pageCount = Math.ceil(totalRecords / rows) || 1;
                        const page = Math.floor(first / rows);

                        return { first, rows, page, pageCount };
                    }

                    this.props.onPage(this.createEvent(getOnPageParams(restoredState.first, restoredState.rows)));
                }
                else {
                    state.first = restoredState.first;
                    state.rows = restoredState.rows;
                }
            }

            if (restoredState.sortField) {
                if (this.props.onSort) {
                    this.props.onSort(this.createEvent({
                        sortField: restoredState.sortField,
                        sortOrder: restoredState.sortOrder
                    }));
                }
                else {
                    state.sortField = restoredState.sortField;
                    state.sortOrder = restoredState.sortOrder;
                }
            }

            if (restoredState.multiSortMeta) {
                if (this.props.onSort) {
                    this.props.onSort(this.createEvent({
                        multiSortMeta: restoredState.multiSortMeta
                    }));
                }
                else {
                    state.multiSortMeta = restoredState.multiSortMeta;
                }
            }

            if (restoredState.filters) {
                state.d_filters = this.cloneFilters(restoredState.filters);

                if (this.props.onFilter) {
                    this.props.onFilter(this.createEvent({
                        filters: restoredState.filters
                    }));
                }
                else {
                    state.filters = this.cloneFilters(restoredState.filters);
                }
            }

            if (this.props.resizableColumns) {
                this.columnWidthsState = restoredState.columnWidths;
                this.tableWidthState = restoredState.tableWidth;
            }

            if (this.props.reorderableColumns) {
                state.columnOrder = restoredState.columnOrder;
            }

            if (restoredState.expandedRows && this.props.onRowToggle) {
                this.props.onRowToggle({
                    data: restoredState.expandedRows
                });
            }

            if (restoredState.selection && this.props.onSelectionChange) {
                this.props.onSelectionChange({
                    value: restoredState.selection
                });
            }

            if (this.props.onStateRestore) {
                this.props.onStateRestore(restoredState);
            }
        }

        return state;
    }

    saveColumnWidths(state) {
        let widths = [];
        let headers = DomHandler.find(this.el, '.p-datatable-thead > tr > th');
        headers.forEach(header => widths.push(DomHandler.getOuterWidth(header)));
        state.columnWidths = widths.join(',');

        if (this.props.columnResizeMode === 'expand') {
            state.tableWidth = DomHandler.getOuterWidth(this.table) + 'px';
        }
    }

    restoreColumnWidths() {
        if (this.columnWidthsState) {
            let widths = this.columnWidthsState.split(',');

            if (this.props.columnResizeMode === 'expand' && this.tableWidthState) {
                this.table.style.width = this.tableWidthState;
                this.table.style.minWidth = this.tableWidthState;
                this.el.style.width = this.tableWidthState;
            }

            this.createStyleElement();

            if (this.props.scrollable && widths && widths.length > 0) {
                let innerHTML = '';
                widths.forEach((width, index) => {
                    innerHTML += `
                        .p-datatable[${this.attributeSelector}] .p-datatable-thead > tr > th:nth-child(${index + 1}) {
                            flex: 0 0 ${width}px;
                        }

                        .p-datatable[${this.attributeSelector}] .p-datatable-tbody > tr > td:nth-child(${index + 1}) {
                            flex: 0 0 ${width}px;
                        }
                    `
                });

                this.styleElement.innerHTML = innerHTML;
            }
            else {
                DomHandler.find(this.table, '.p-datatable-thead > tr > th').forEach((header, index) => header.style.width = widths[index] + 'px');
            }
        }
    }

    findParentHeader(element) {
        if (element.nodeName === 'TH') {
            return element;
        }
        else {
            let parent = element.parentElement;
            while (parent.nodeName !== 'TH') {
                parent = parent.parentElement;
                if (!parent) break;
            }
            return parent;
        }
    }

    getGroupRowSortField() {
        return this.props.sortMode === 'single' ? this.props.sortField : (this.state.groupRowsSortMeta ? this.state.groupRowsSortMeta.field : null);
    }

    allRowsSelected(processedData) {
        if (this.props.onSelectAllChange) {
            return this.props.selectAll;
        }
        else {
            const data = this.props.selectionPageOnly ? this.dataToRender(processedData) : processedData;
            const val = this.props.frozenValue ? [...this.props.frozenValue, ...data] : data;
            const selectableVal = this.props.showSelectionElement ? val.filter((data, index) => this.props.showSelectionElement(data, { rowIndex: index, props: this.props })) : val;

            return selectableVal && this.props.selection && selectableVal.every(sv => this.props.selection.some(s => this.isEquals(s, sv)));
        }
    }

    getSelectionModeInColumn(columns) {
        if (columns) {
            const col = columns.find(c => !!c.props.selectionMode);
            return col ? col.props.selectionMode : null;
        }

        return null;
    }

    findColumnByKey(columns, key) {
        return ObjectUtils.isNotEmpty(columns) ? columns.find(col => col.props.columnKey === key || col.props.field === key) : null;
    }

    getTotalRecords(data) {
        return this.props.lazy ? this.props.totalRecords : data ? data.length : 0;
    }

    onEditingMetaChange(e) {
        const { rowData, field, rowIndex, editing } = e;
        let editingMeta = { ...this.state.editingMeta };
        let meta = editingMeta[rowIndex];

        if (editing) {
            !meta && (meta = editingMeta[rowIndex] = { data: { ...rowData }, fields: [] });
            meta['fields'].push(field);
        }
        else if (meta) {
            const fields = meta['fields'].filter(f => f !== field);
            !fields.length ? (delete editingMeta[rowIndex]) : (meta['fields'] = fields);
        }

        this.setState({ editingMeta });
    }

    clearEditingMetaData() {
        if (this.props.editMode && ObjectUtils.isNotEmpty(this.state.editingMeta)) {
            this.setState({ editingMeta: {} });
        }
    }

    onColumnResizeStart(e) {
        const { originalEvent: event, column } = e;
        const containerLeft = DomHandler.getOffset(this.el).left;
        this.resizeColumn = column;
        this.resizeColumnElement = event.currentTarget.parentElement;
        this.columnResizing = true;
        this.lastResizeHelperX = (event.pageX - containerLeft + this.el.scrollLeft);

        this.bindColumnResizeEvents();
    }

    onColumnResize(event) {
        const containerLeft = DomHandler.getOffset(this.el).left;

        DomHandler.addClass(this.el, 'p-unselectable-text');
        this.resizeHelper.style.height = this.el.offsetHeight + 'px';
        this.resizeHelper.style.top = 0 + 'px';
        this.resizeHelper.style.left = (event.pageX - containerLeft + this.el.scrollLeft) + 'px';

        this.resizeHelper.style.display = 'block';
    }

    onColumnResizeEnd() {
        let delta = this.resizeHelper.offsetLeft - this.lastResizeHelperX;
        let columnWidth = this.resizeColumnElement.offsetWidth;
        let newColumnWidth = columnWidth + delta;
        let minWidth = this.resizeColumnElement.style.minWidth || 15;

        if (columnWidth + delta > parseInt(minWidth, 10)) {
            if (this.props.columnResizeMode === 'fit') {
                let nextColumn = this.resizeColumnElement.nextElementSibling;
                let nextColumnWidth = nextColumn.offsetWidth - delta;

                if (newColumnWidth > 15 && nextColumnWidth > 15) {
                    this.resizeTableCells(newColumnWidth, nextColumnWidth);
                }
            }
            else if (this.props.columnResizeMode === 'expand') {
                const tableWidth = this.table.offsetWidth + delta + 'px';
                this.table.style.width = tableWidth;
                this.table.style.minWidth = tableWidth;

                this.resizeTableCells(newColumnWidth);
            }

            if (this.props.onColumnResizeEnd) {
                this.props.onColumnResizeEnd({
                    element: this.resizeColumnElement,
                    column: this.resizeColumn,
                    delta: delta
                });
            }

            if (this.isStateful()) {
                this.saveState();
            }
        }

        this.resizeHelper.style.display = 'none';
        this.resizeColumn = null;
        this.resizeColumnElement = null;
        DomHandler.removeClass(this.el, 'p-unselectable-text');

        this.unbindColumnResizeEvents();
    }

    resizeTableCells(newColumnWidth, nextColumnWidth) {
        let widths = [];
        let colIndex = DomHandler.index(this.resizeColumnElement);
        let headers = DomHandler.find(this.table, '.p-datatable-thead > tr > th');
        headers.forEach(header => widths.push(DomHandler.getOuterWidth(header)));

        this.destroyStyleElement();
        this.createStyleElement();

        let innerHTML = '';
        widths.forEach((width, index) => {
            let colWidth = index === colIndex ? newColumnWidth : (nextColumnWidth && index === colIndex + 1) ? nextColumnWidth : width;
            let style = this.props.scrollable ? `flex: 0 0 ${colWidth}px !important` : `width: ${colWidth}px !important`;
            innerHTML += `
                .p-datatable[${this.attributeSelector}] .p-datatable-thead > tr > th:nth-child(${index + 1}),
                .p-datatable[${this.attributeSelector}] .p-datatable-tbody > tr > td:nth-child(${index + 1}),
                .p-datatable[${this.attributeSelector}] .p-datatable-tfoot > tr > td:nth-child(${index + 1}) {
                    ${style}
                }
            `
        });
        this.styleElement.innerHTML = innerHTML;
    }

    bindColumnResizeEvents() {
        if (!this.documentColumnResizeListener) {
            this.documentColumnResizeListener = document.addEventListener('mousemove', (event) => {
                if (this.columnResizing) {
                    this.onColumnResize(event);
                }
            });
        }

        if (!this.documentColumnResizeEndListener) {
            this.documentColumnResizeEndListener = document.addEventListener('mouseup', () => {
                if (this.columnResizing) {
                    this.columnResizing = false;
                    this.onColumnResizeEnd();
                }
            });
        }
    }

    unbindColumnResizeEvents() {
        if (this.documentColumnResizeListener) {
            document.removeEventListener('document', this.documentColumnResizeListener);
            this.documentColumnResizeListener = null;
        }

        if (this.documentColumnResizeEndListener) {
            document.removeEventListener('document', this.documentColumnResizeEndListener);
            this.documentColumnResizeEndListener = null;
        }
    }

    onColumnHeaderMouseDown(e) {
        DomHandler.clearSelection();

        const { originalEvent: event, column } = e;

        if (this.props.reorderableColumns && this.getColumnProp(column, 'reorderable') !== false) {
            if (event.target.nodeName === 'INPUT' || event.target.nodeName === 'TEXTAREA' || DomHandler.hasClass(event.target, 'p-column-resizer'))
                event.currentTarget.draggable = false;
            else
                event.currentTarget.draggable = true;
        }
    }

    onColumnHeaderCheckboxChange(e, processedData) {
        if (this.props.onSelectAllChange) {
            this.props.onSelectAllChange(e);
        }
        else {
            const { originalEvent, checked } = e;
            const data = this.props.selectionPageOnly ? this.dataToRender(processedData) : processedData;
            let selection = this.props.selectionPageOnly && this.props.selection ? this.props.selection.filter(s => !data.some(d => this.isEquals(s, d))) : [];

            if (checked) {
                selection = this.props.frozenValue ? [...selection, ...this.props.frozenValue, ...data] : [...selection, ...data];
                selection = this.props.showSelectionElement ? selection.filter((data, index) => this.props.showSelectionElement(data, { rowIndex: index, props: this.props })) : selection;

                this.props.onAllRowsSelect && this.props.onAllRowsSelect({ originalEvent, data: selection, type: 'all' });
            }
            else {
                this.props.onAllRowsUnselect && this.props.onAllRowsUnselect({ originalEvent, data: selection, type: 'all' });
            }

            if (this.props.onSelectionChange) {
                this.props.onSelectionChange({
                    originalEvent,
                    value: selection,
                    type: 'all'
                });
            }
        }
    }

    onColumnHeaderDragStart(e) {
        const { originalEvent: event, column } = e;

        if (this.columnResizing) {
            event.preventDefault();
            return;
        }

        this.colReorderIconWidth = DomHandler.getHiddenElementOuterWidth(this.reorderIndicatorUp);
        this.colReorderIconHeight = DomHandler.getHiddenElementOuterHeight(this.reorderIndicatorUp);

        this.draggedColumn = column;
        this.draggedColumnElement = this.findParentHeader(event.currentTarget);
        event.dataTransfer.setData('text', 'b'); // Firefox requires this to make dragging possible
    }

    onColumnHeaderDragOver(e) {
        const { originalEvent: event } = e;
        const dropHeader = this.findParentHeader(event.currentTarget);
        if (this.props.reorderableColumns && this.draggedColumnElement && dropHeader) {
            event.preventDefault();

            if (this.draggedColumnElement !== dropHeader) {
                const containerOffset = DomHandler.getOffset(this.el);
                const dropHeaderOffset = DomHandler.getOffset(dropHeader);
                const targetLeft = dropHeaderOffset.left - containerOffset.left;
                const columnCenter = dropHeaderOffset.left + dropHeader.offsetWidth / 2;

                this.reorderIndicatorUp.style.top = dropHeaderOffset.top - containerOffset.top - (this.colReorderIconHeight - 1) + 'px';
                this.reorderIndicatorDown.style.top = dropHeaderOffset.top - containerOffset.top + dropHeader.offsetHeight + 'px';

                if (event.pageX > columnCenter) {
                    this.reorderIndicatorUp.style.left = (targetLeft + dropHeader.offsetWidth - Math.ceil(this.colReorderIconWidth / 2)) + 'px';
                    this.reorderIndicatorDown.style.left = (targetLeft + dropHeader.offsetWidth - Math.ceil(this.colReorderIconWidth / 2)) + 'px';
                    this.dropPosition = 1;
                }
                else {
                    this.reorderIndicatorUp.style.left = (targetLeft - Math.ceil(this.colReorderIconWidth / 2)) + 'px';
                    this.reorderIndicatorDown.style.left = (targetLeft - Math.ceil(this.colReorderIconWidth / 2)) + 'px';
                    this.dropPosition = -1;
                }

                this.reorderIndicatorUp.style.display = 'block';
                this.reorderIndicatorDown.style.display = 'block';
            }
        }
    }

    onColumnHeaderDragLeave(e) {
        const { originalEvent: event } = e;

        if (this.props.reorderableColumns && this.draggedColumnElement) {
            event.preventDefault();
            this.reorderIndicatorUp.style.display = 'none';
            this.reorderIndicatorDown.style.display = 'none';
        }
    }

    onColumnHeaderDrop(e) {
        const { originalEvent: event, column } = e;

        event.preventDefault();
        if (this.draggedColumnElement) {
            let dragIndex = DomHandler.index(this.draggedColumnElement);
            let dropIndex = DomHandler.index(this.findParentHeader(event.currentTarget));
            let allowDrop = (dragIndex !== dropIndex);
            if (allowDrop && ((dropIndex - dragIndex === 1 && this.dropPosition === -1) || (dragIndex - dropIndex === 1 && this.dropPosition === 1))) {
                allowDrop = false;
            }

            if (allowDrop) {
                let columns = this.getColumns();
                let isSameColumn = (col1, col2) => (col1.props.columnKey || col2.props.columnKey) ? ObjectUtils.equals(col1.props, col2.props, 'columnKey') : ObjectUtils.equals(col1.props, col2.props, 'field');
                let dragColIndex = columns.findIndex((child) => isSameColumn(child, this.draggedColumn));
                let dropColIndex = columns.findIndex((child) => isSameColumn(child, column));

                if (dropColIndex < dragColIndex && this.dropPosition === 1) {
                    dropColIndex++;
                }

                if (dropColIndex > dragColIndex && this.dropPosition === -1) {
                    dropColIndex--;
                }

                ObjectUtils.reorderArray(columns, dragColIndex, dropColIndex);

                const columnOrder = columns.reduce((orders, col) => {
                    orders.push(col.props.columnKey || col.props.field);

                    return orders;
                }, []);

                this.setState({ columnOrder });

                if (this.props.onColReorder) {
                    this.props.onColReorder({
                        originalEvent: event,
                        dragIndex: dragColIndex,
                        dropIndex: dropColIndex,
                        columns
                    });
                }
            }

            this.reorderIndicatorUp.style.display = 'none';
            this.reorderIndicatorDown.style.display = 'none';
            this.draggedColumnElement.draggable = false;
            this.draggedColumnElement = null;
            this.draggedColumn = null;
            this.dropPosition = null;
        }
    }

    createStyleElement() {
        this.styleElement = DomHandler.createInlineStyle();
    }

    createResponsiveStyle() {
        if (!this.responsiveStyleElement) {
            this.responsiveStyleElement = DomHandler.createInlineStyle();

            let innerHTML = `
@media screen and (max-width: ${this.props.breakpoint}) {
    .p-datatable[${this.attributeSelector}] .p-datatable-thead > tr > th,
    .p-datatable[${this.attributeSelector}] .p-datatable-tfoot > tr > td {
        display: none !important;
    }

    .p-datatable[${this.attributeSelector}] .p-datatable-tbody > tr > td {
        display: flex;
        width: 100% !important;
        align-items: center;
        justify-content: space-between;
    }

    .p-datatable[${this.attributeSelector}] .p-datatable-tbody > tr > td:not(:last-child) {
        border: 0 none;
    }

    .p-datatable[${this.attributeSelector}].p-datatable-gridlines .p-datatable-tbody > tr > td:last-child {
        border-top: 0;
        border-right: 0;
        border-left: 0;
    }

    .p-datatable[${this.attributeSelector}] .p-datatable-tbody > tr > td > .p-column-title {
        display: block;
    }
}
`;

            this.responsiveStyleElement.innerHTML = innerHTML;
        }
    }

    destroyResponsiveStyle() {
        this.responsiveStyleElement = DomHandler.removeInlineStyle(this.responsiveStyleElement);
    }

    destroyStyleElement() {
        this.styleElement = DomHandler.removeInlineStyle(this.styleElement);
    }

    onPageChange(e) {
        this.clearEditingMetaData();

        if (this.props.onPage)
            this.props.onPage(this.createEvent(e));
        else
            this.setState({ first: e.first, rows: e.rows });

        if (this.props.onValueChange) {
            this.props.onValueChange(this.processedData());
        }
    }

    onSortChange(e) {
        this.clearEditingMetaData();

        const { originalEvent: event, column, sortableDisabledFields } = e;
        let sortField = column.props.sortField || column.props.field;
        let sortOrder = this.props.defaultSortOrder;
        let multiSortMeta;
        let eventMeta;

        this.columnSortable = column.props.sortable;
        this.columnSortFunction = column.props.sortFunction;
        this.columnField = column.props.sortField;

        if (this.props.sortMode === 'multiple') {
            let metaKey = event.metaKey || event.ctrlKey;
            multiSortMeta = [...this.getMultiSortMeta()];

            const sortMeta = multiSortMeta.find(sortMeta => sortMeta.field === sortField);
            sortOrder = sortMeta ? this.getCalculatedSortOrder(sortMeta.order) : sortOrder;

            const newMetaData = { field: sortField, order: sortOrder };

            if (sortOrder) {
                multiSortMeta = metaKey ? multiSortMeta : multiSortMeta.filter((meta) => sortableDisabledFields.some((field) => field === meta.field));

                this.addSortMeta(newMetaData, multiSortMeta);
            }
            else if (this.props.removableSort) {
                this.removeSortMeta(newMetaData, multiSortMeta);
            }

            eventMeta = {
                multiSortMeta
            };
        }
        else {
            sortOrder = (this.getSortField() === sortField) ? this.getCalculatedSortOrder(this.getSortOrder()) : sortOrder;
            if (this.props.removableSort) {
                sortField = sortOrder ? sortField : null;
            }

            eventMeta = {
                sortField,
                sortOrder
            };
        }

        if (this.props.onSort) {
            this.props.onSort(this.createEvent(eventMeta));
        }
        else {
            eventMeta.first = 0;
            this.setState(eventMeta);
        }

        if (this.props.onValueChange) {
            this.props.onValueChange(this.processedData({
                sortField: sortField,
                sortOrder: sortOrder,
                multiSortMeta: multiSortMeta
            }));
        }
    }

    getCalculatedSortOrder(currentOrder) {
        return this.props.removableSort ? (this.props.defaultSortOrder === currentOrder ? currentOrder * -1 : 0) : currentOrder * -1;
    }

    compareValuesOnSort(value1, value2) {
        let result = null;

        if (value1 == null && value2 != null)
            result = -1;
        else if (value1 != null && value2 == null)
            result = 1;
        else if (value1 == null && value2 == null)
            result = 0;
        else if (typeof value1 === 'string' && typeof value2 === 'string')
            result = value1.localeCompare(value2, undefined, { numeric: true });
        else
            result = (value1 < value2) ? -1 : (value1 > value2) ? 1 : 0;

        return result;
    }

    addSortMeta(meta, multiSortMeta) {
        const index = multiSortMeta.findIndex(sortMeta => sortMeta.field === meta.field);

        if (index >= 0)
            multiSortMeta[index] = meta;
        else
            multiSortMeta.push(meta);
    }

    removeSortMeta(meta, multiSortMeta) {
        const index = multiSortMeta.findIndex(sortMeta => sortMeta.field === meta.field);

        if (index >= 0) {
            multiSortMeta.splice(index, 1);
        }

        multiSortMeta = multiSortMeta.length > 0 ? multiSortMeta : null;
    }

    sortSingle(data, field, order) {
        if (this.props.groupRowsBy && this.props.groupRowsBy === this.props.sortField) {
            const multiSortMeta = [
                { field: this.props.sortField, order: this.props.sortOrder || this.props.defaultSortOrder }
            ];

            this.props.sortField !== field && multiSortMeta.push({ field, order });

            return this.sortMultiple(data, multiSortMeta);
        }

        let value = [...data];

        if (this.columnSortable && this.columnSortFunction) {
            value = this.columnSortFunction({ field, order });
        }
        else {
            value.sort((data1, data2) => {
                const value1 = ObjectUtils.resolveFieldData(data1, field);
                const value2 = ObjectUtils.resolveFieldData(data2, field);
                const result = this.compareValuesOnSort(value1, value2);

                return (order * result);
            });
        }

        return value;
    }

    sortMultiple(data, multiSortMeta = []) {
        if (this.props.groupRowsBy && (this.groupRowsSortMeta || (multiSortMeta.length && this.props.groupRowsBy === multiSortMeta[0].field))) {
            const firstSortMeta = multiSortMeta[0];
            !this.groupRowsSortMeta && (this.groupRowsSortMeta = firstSortMeta);

            if (firstSortMeta.field !== this.groupRowsSortMeta.field) {
                multiSortMeta = [this.groupRowsSortMeta, ...multiSortMeta];
            }
        }

        let value = [...data];

        if (this.columnSortable && this.columnSortFunction) {
            const meta = multiSortMeta.find(meta => meta.field === this.columnField);
            const field = this.columnField;
            const order = meta ? meta.order : this.defaultSortOrder;

            value = this.columnSortFunction({ field, order });
        }
        else {
            value.sort((data1, data2) => {
                return this.multisortField(data1, data2, multiSortMeta, 0);
            });
        }

        return value;
    }

    multisortField(data1, data2, multiSortMeta, index) {
        const value1 = ObjectUtils.resolveFieldData(data1, multiSortMeta[index].field);
        const value2 = ObjectUtils.resolveFieldData(data2, multiSortMeta[index].field);

        if (value1 === value2) {
            return (multiSortMeta.length - 1) > (index) ? (this.multisortField(data1, data2, multiSortMeta, index + 1)) : 0;
        }

        const result = this.compareValuesOnSort(value1, value2);

        return (multiSortMeta[index].order * result);
    }

    onFilterChange(filters) {
        this.clearEditingMetaData();

        this.setState({ d_filters: filters });
    }

    onFilterApply() {
        clearTimeout(this.filterTimeout);
        this.filterTimeout = setTimeout(() => {
            let filters = this.cloneFilters(this.state.d_filters);

            if (this.props.onFilter) {
                this.props.onFilter(this.createEvent({ filters }));
            }
            else {
                this.setState({
                    first: 0,
                    filters
                });
            }

            if (this.props.onValueChange) {
                this.props.onValueChange(this.processedData({ filters }));
            }
        }, this.props.filterDelay);
    }

    filterLocal(data, filters) {
        if (!data) return;

        filters = filters || {};

        let columns = this.getColumns();
        let filteredValue = [];

        let isGlobalFilter = filters['global'] || this.props.globalFilter;
        let globalFilterFieldsArray;
        if (isGlobalFilter) {
            globalFilterFieldsArray = this.props.globalFilterFields || columns.filter(col => !col.props.excludeGlobalFilter).map(col => col.props.filterField || col.props.field);
        }

        for (let i = 0; i < data.length; i++) {
            let localMatch = true;
            let globalMatch = false;
            let localFiltered = false;

            for (let prop in filters) {
                if (Object.prototype.hasOwnProperty.call(filters, prop) && prop !== 'global') {
                    localFiltered = true;
                    let filterField = prop;
                    let filterMeta = filters[filterField];

                    if (filterMeta.operator) {
                        for (let j = 0; j < filterMeta.constraints.length; j++) {
                            let filterConstraint = filterMeta.constraints[j];
                            localMatch = this.executeLocalFilter(filterField, data[i], filterConstraint, j);

                            if ((filterMeta.operator === FilterOperator.OR && localMatch) || (filterMeta.operator === FilterOperator.AND && !localMatch)) {
                                break;
                            }
                        }
                    }
                    else {
                        localMatch = this.executeLocalFilter(filterField, data[i], filterMeta, 0);
                    }

                    if (!localMatch) {
                        break;
                    }
                }
            }

            if (isGlobalFilter && !globalMatch && globalFilterFieldsArray) {
                for (let j = 0; j < globalFilterFieldsArray.length; j++) {
                    let globalFilterField = globalFilterFieldsArray[j];
                    let matchMode = filters['global'] ? filters['global'].matchMode : FilterMatchMode.CONTAINS;
                    let value = filters['global'] ? filters['global'].value : this.props.globalFilter;
                    globalMatch = FilterService.filters[matchMode](ObjectUtils.resolveFieldData(data[i], globalFilterField), value, this.props.filterLocale);

                    if (globalMatch) {
                        break;
                    }
                }
            }

            let matches;
            if (isGlobalFilter) {
                matches = localFiltered ? (localFiltered && localMatch && globalMatch) : globalMatch;
            }
            else {
                matches = localFiltered && localMatch;
            }

            if (matches) {
                filteredValue.push(data[i]);
            }
        }

        if (filteredValue.length === this.props.value.length) {
            filteredValue = data;
        }

        return filteredValue;
    }

    executeLocalFilter(field, rowData, filterMeta, index) {
        let filterValue = filterMeta.value;
        let filterMatchMode = filterMeta.matchMode === 'custom' ? `custom_${field}` : filterMeta.matchMode || FilterMatchMode.STARTS_WITH;
        let dataFieldValue = ObjectUtils.resolveFieldData(rowData, field);
        let filterConstraint = FilterService.filters[filterMatchMode];

        return filterConstraint(dataFieldValue, filterValue, this.props.filterLocale, index);
    }

    cloneFilters(filters) {
        filters = filters || this.props.filters;
        let cloned = {};

        if (filters) {
            Object.entries(filters).forEach(([prop, value]) => {
                cloned[prop] = value.operator ? { operator: value.operator, constraints: value.constraints.map(constraint => { return { ...constraint } }) } : { ...value };
            });
        }
        else {
            const columns = this.getColumns();

            cloned = columns.reduce((_filters, col) => {
                if (col.props.filter) {
                    const field = col.props.filterField || col.props.field;
                    const filterFunction = col.props.filterFunction;
                    const dataType = col.props.dataType;
                    const matchMode = col.props.filterMatchMode || (PrimeReact.filterMatchModeOptions[dataType] ? PrimeReact.filterMatchModeOptions[dataType][0] : FilterMatchMode.STARTS_WITH);
                    let constraint = { value: null, matchMode };

                    if (filterFunction) {
                        FilterService.register(`custom_${field}`, (...args) => filterFunction(...args, { column: col }));
                    }

                    _filters[field] = this.props.filterDisplay === 'menu' ? { operator: FilterOperator.AND, constraints: [constraint] } : constraint;
                }

                return _filters;
            }, {});
        }

        return cloned;
    }

    filter(value, field, matchMode, index = 0) {
        let filters = { ...this.state.d_filters };
        let meta = filters[field];
        let constraint = meta && meta.operator ? meta.constraints[index] : meta;

        constraint = meta ? { value, matchMode: matchMode || constraint.matchMode } : { value, matchMode };
        this.props.filterDisplay === 'menu' && meta && meta.operator ? (filters[field].constraints[index] = constraint) : (filters[field] = constraint);

        this.setState({ d_filters: filters }, this.onFilterApply);
    }

    reset() {
        let state = {
            d_rows: this.props.rows,
            d_filters: this.cloneFilters(this.props.filters),
            groupRowsSortMeta: null,
            editingMeta: {}
        };

        if (!this.props.onPage) {
            state.first = this.props.first;
            state.rows = this.props.rows;
        }

        if (!this.props.onSort) {
            state.sortField = this.props.sortField;
            state.sortOrder = this.props.sortOrder;
            state.multiSortMeta = this.props.multiSortMeta;
        }

        if (!this.props.onFilter) {
            state.filters = this.props.filters;
        }

        this.resetColumnOrder();

        this.setState(state);
    }

    resetColumnOrder() {
        const columns = this.getColumns(true);
        let columnOrder = [];

        if (columns) {
            columnOrder = columns.reduce((orders, col) => {
                orders.push(col.props.columnKey || col.props.field);
                return orders;
            }, []);
        }

        this.setState({ columnOrder });
    }

    exportCSV(options) {
        let data;
        let csv = '\ufeff';
        let columns = this.getColumns();

        if (options && options.selectionOnly) {
            data = this.props.selection || [];
        }
        else {
            data = [...(this.props.frozenValue || []), ...(this.processedData() || [])];
        }

        //headers
        columns.forEach((column, i) => {
            const { field, header, exportable } = column.props;

            if (exportable && field) {
                csv += '"' + (header || field) + '"';

                if (i < (columns.length - 1)) {
                    csv += this.props.csvSeparator;
                }
            }
        });

        //body
        data.forEach((record) => {
            csv += '\n';
            columns.forEach((column, i) => {
                const { field, exportable } = column.props;

                if (exportable && field) {
                    let cellData = ObjectUtils.resolveFieldData(record, field);

                    if (cellData != null) {
                        cellData = this.props.exportFunction ? this.props.exportFunction({ data: cellData, field, rowData: record, column }) : String(cellData).replace(/"/g, '""');
                    }
                    else
                        cellData = '';

                    csv += '"' + cellData + '"';

                    if (i < (columns.length - 1)) {
                        csv += this.props.csvSeparator;
                    }
                }
            });
        });

        DomHandler.exportCSV(csv, this.props.exportFilename);
    }

    closeEditingCell() {
        if (this.props.editMode !== "row") {
            document.body.click();
        }
    }

    createEvent(event) {
        return {
            first: this.getFirst(),
            rows: this.getRows(),
            sortField: this.getSortField(),
            sortOrder: this.getSortOrder(),
            multiSortMeta: this.getMultiSortMeta(),
            filters: this.getFilters(),
            ...event
        }
    }

    processedData(localState) {
        let data = this.props.value || [];

        if (!this.props.lazy) {
            if (data && data.length) {
                const filters = (localState && localState.filters) || this.getFilters();
                const sortField = (localState && localState.sortField) || this.getSortField();
                const sortOrder = (localState && localState.sortOrder) || this.getSortOrder();
                const multiSortMeta = (localState && localState.multiSortMeta) || this.getMultiSortMeta();

                if (ObjectUtils.isNotEmpty(filters) || this.props.globalFilter) {
                    data = this.filterLocal(data, filters);
                }

                if (sortField || ObjectUtils.isNotEmpty(multiSortMeta)) {
                    if (this.props.sortMode === 'single')
                        data = this.sortSingle(data, sortField, sortOrder);
                    else if (this.props.sortMode === 'multiple')
                        data = this.sortMultiple(data, multiSortMeta);
                }
            }
        }

        return data;
    }

    dataToRender(data) {
        if (data && this.props.paginator) {
            const first = this.props.lazy ? 0 : this.getFirst();
            return data.slice(first, first + this.getRows());
        }

        return data;
    }

    componentDidMount() {
        this.el.setAttribute(this.attributeSelector, '');

        if (this.props.responsiveLayout === 'stack' && !this.props.scrollable) {
            this.createResponsiveStyle();
        }

        if (this.isStateful()) {
            this.setState(this.restoreState(this.state));

            if (this.props.resizableColumns) {
                this.restoreColumnWidths();
            }
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.rows !== prevState.d_rows && !nextProps.onPage) {
            return {
                rows: nextProps.rows,
                d_rows: nextProps.rows
            }
        }

        return null;
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.isStateful()) {
            this.saveState();
        }

        if (prevProps.responsiveLayout !== this.props.responsiveLayout) {
            this.destroyResponsiveStyle();

            if (this.props.responsiveLayout === 'stack' && !this.props.scrollable) {
                this.createResponsiveStyle();
            }
        }

        if (prevProps.filters !== this.props.filters) {
            this.setState({
                filters: this.cloneFilters(this.props.filters),
                d_filters: this.cloneFilters(this.props.filters)
            });
        }

        if (prevProps.globalFilter !== this.props.globalFilter) {
            this.filter(this.props.globalFilter, 'global', 'contains');
        }
    }

    componentWillUnmount() {
        this.unbindColumnResizeEvents();
        this.destroyStyleElement();
        this.destroyResponsiveStyle();
    }

    renderLoader() {
        if (this.props.loading) {
            const iconClassName = classNames('p-datatable-loading-icon pi-spin', this.props.loadingIcon);

            return (
                <div className="p-datatable-loading-overlay p-component-overlay">
                    <i className={iconClassName} />
                </div>
            )
        }

        return null;
    }

    renderHeader() {
        if (this.props.header) {
            const content = ObjectUtils.getJSXElement(this.props.header, { props: this.props });
            return (
                <div className="p-datatable-header">{content}</div>
            )
        }

        return null;
    }

    renderTableHeader(options, empty) {
        const sortField = this.getSortField();
        const sortOrder = this.getSortOrder();
        const multiSortMeta = [...this.getMultiSortMeta()];
        const groupRowSortField = this.getGroupRowSortField();
        const filters = this.state.d_filters;
        const filtersStore = this.getFilters();
        const { items: processedData, columns } = options;

        return (
            <TableHeader value={processedData} tableProps={this.props} columns={columns} tabIndex={this.props.tabIndex} empty={empty} headerColumnGroup={this.props.headerColumnGroup} resizableColumns={this.props.resizableColumns}
                onColumnResizeStart={this.onColumnResizeStart} onColumnResizerClick={this.props.onColumnResizerClick} onColumnResizerDoubleClick={this.props.onColumnResizerDoubleClick}
                sortMode={this.props.sortMode} sortField={sortField} sortOrder={sortOrder} multiSortMeta={multiSortMeta} groupRowsBy={this.props.groupRowsBy} groupRowSortField={groupRowSortField} onSortChange={this.onSortChange}
                filterDisplay={this.props.filterDisplay} filters={filters} filtersStore={filtersStore} onFilterChange={this.onFilterChange} onFilterApply={this.onFilterApply}
                showSelectAll={this.props.showSelectAll} allRowsSelected={this.allRowsSelected} onColumnCheckboxChange={this.onColumnHeaderCheckboxChange}
                onColumnMouseDown={this.onColumnHeaderMouseDown} onColumnDragStart={this.onColumnHeaderDragStart} onColumnDragOver={this.onColumnHeaderDragOver} onColumnDragLeave={this.onColumnHeaderDragLeave} onColumnDrop={this.onColumnHeaderDrop}
                rowGroupMode={this.props.rowGroupMode} reorderableColumns={this.props.reorderableColumns} />
        )
    }

    renderTableBody(options, selectionModeInColumn, empty, isVirtualScrollerDisabled) {
        const tableSelector = this.attributeSelector;
        const first = this.getFirst();
        const editingMeta = this.state.editingMeta;
        const { rows, columns, contentRef, className } = options;

        const frozenBody = this.props.frozenValue && (
            <TableBody value={this.props.frozenValue} className="p-datatable-frozen-tbody" frozenRow
                tableProps={this.props} tableSelector={tableSelector} columns={columns} selectionModeInColumn={selectionModeInColumn}
                first={first} editingMeta={editingMeta} onEditingMetaChange={this.onEditingMetaChange} tabIndex={this.props.tabIndex}
                onRowClick={this.props.onRowClick} onRowDoubleClick={this.props.onRowDoubleClick} onCellClick={this.props.onCellClick}
                selection={this.props.selection} onSelectionChange={this.props.onSelectionChange} lazy={this.props.lazy} paginator={this.props.paginator}
                onCellSelect={this.props.onCellSelect} onCellUnselect={this.props.onCellUnselect} onRowSelect={this.props.onRowSelect} onRowUnselect={this.props.onRowUnselect}
                dragSelection={this.props.dragSelection} onContextMenu={this.props.onContextMenu} onContextMenuSelectionChange={this.props.onContextMenuSelectionChange}
                metaKeySelection={this.props.metaKeySelection} selectionMode={this.props.selectionMode} cellSelection={this.props.cellSelection} contextMenuSelection={this.props.contextMenuSelection}
                dataKey={this.props.dataKey} expandedRows={this.props.expandedRows} onRowCollapse={this.props.onRowCollapse} onRowExpand={this.props.onRowExpand} onRowToggle={this.props.onRowToggle}
                editMode={this.props.editMode} editingRows={this.props.editingRows} onRowReorder={this.props.onRowReorder} scrollable={this.props.scrollable} rowGroupMode={this.props.rowGroupMode}
                groupRowsBy={this.props.groupRowsBy} expandableRowGroups={this.props.expandableRowGroups} loading={this.props.loading} emptyMessage={this.props.emptyMessage}
                rowGroupHeaderTemplate={this.props.rowGroupHeaderTemplate} rowExpansionTemplate={this.props.rowExpansionTemplate} rowGroupFooterTemplate={this.props.rowGroupFooterTemplate}
                onRowEditChange={this.props.onRowEditChange} compareSelectionBy={this.props.compareSelectionBy} selectOnEdit={this.props.selectOnEdit}
                onRowEditInit={this.props.onRowEditInit} rowEditValidator={this.props.rowEditValidator} onRowEditSave={this.props.onRowEditSave} onRowEditComplete={this.props.onRowEditComplete} onRowEditCancel={this.props.onRowEditCancel}
                cellClassName={this.props.cellClassName} responsiveLayout={this.props.responsiveLayout}
                showSelectionElement={this.props.showSelectionElement} showRowReorderElement={this.props.showRowReorderElement}
                expandedRowIcon={this.props.expandedRowIcon} collapsedRowIcon={this.props.collapsedRowIcon} rowClassName={this.props.rowClassName}
                isVirtualScrollerDisabled={true} />
        );
        const body = (
            <TableBody value={this.dataToRender(rows)} className={className} empty={empty} frozenRow={false}
                tableProps={this.props} tableSelector={tableSelector} columns={columns} selectionModeInColumn={selectionModeInColumn}
                first={first} editingMeta={editingMeta} onEditingMetaChange={this.onEditingMetaChange} tabIndex={this.props.tabIndex}
                onRowClick={this.props.onRowClick} onRowDoubleClick={this.props.onRowDoubleClick} onCellClick={this.props.onCellClick}
                selection={this.props.selection} onSelectionChange={this.props.onSelectionChange} lazy={this.props.lazy} paginator={this.props.paginator}
                onCellSelect={this.props.onCellSelect} onCellUnselect={this.props.onCellUnselect} onRowSelect={this.props.onRowSelect} onRowUnselect={this.props.onRowUnselect}
                dragSelection={this.props.dragSelection} onContextMenu={this.props.onContextMenu} onContextMenuSelectionChange={this.props.onContextMenuSelectionChange}
                metaKeySelection={this.props.metaKeySelection} selectionMode={this.props.selectionMode} cellSelection={this.props.cellSelection} contextMenuSelection={this.props.contextMenuSelection}
                dataKey={this.props.dataKey} expandedRows={this.props.expandedRows} onRowCollapse={this.props.onRowCollapse} onRowExpand={this.props.onRowExpand} onRowToggle={this.props.onRowToggle}
                editMode={this.props.editMode} editingRows={this.props.editingRows} onRowReorder={this.props.onRowReorder} scrollable={this.props.scrollable} rowGroupMode={this.props.rowGroupMode}
                groupRowsBy={this.props.groupRowsBy} expandableRowGroups={this.props.expandableRowGroups} loading={this.props.loading} emptyMessage={this.props.emptyMessage}
                rowGroupHeaderTemplate={this.props.rowGroupHeaderTemplate} rowExpansionTemplate={this.props.rowExpansionTemplate} rowGroupFooterTemplate={this.props.rowGroupFooterTemplate}
                onRowEditChange={this.props.onRowEditChange} compareSelectionBy={this.props.compareSelectionBy} selectOnEdit={this.props.selectOnEdit}
                onRowEditInit={this.props.onRowEditInit} rowEditValidator={this.props.rowEditValidator} onRowEditSave={this.props.onRowEditSave} onRowEditComplete={this.props.onRowEditComplete} onRowEditCancel={this.props.onRowEditCancel}
                cellClassName={this.props.cellClassName} responsiveLayout={this.props.responsiveLayout}
                showSelectionElement={this.props.showSelectionElement} showRowReorderElement={this.props.showRowReorderElement}
                expandedRowIcon={this.props.expandedRowIcon} collapsedRowIcon={this.props.collapsedRowIcon} rowClassName={this.props.rowClassName}
                virtualScrollerContentRef={contentRef} virtualScrollerOptions={options} isVirtualScrollerDisabled={isVirtualScrollerDisabled} />
        );

        return (
            <>
                {frozenBody}
                {body}
            </>
        );
    }

    renderTableFooter(options) {
        const { columns } = options;

        return (
            <TableFooter tableProps={this.props} columns={columns} footerColumnGroup={this.props.footerColumnGroup} />
        );
    }

    renderContent(processedData, columns, selectionModeInColumn, empty) {
        if (!columns) return;

        const isVirtualScrollerDisabled = this.isVirtualScrollerDisabled();
        const virtualScrollerOptions = this.props.virtualScrollerOptions || {};

        return (
            <div className="p-datatable-wrapper" style={{ maxHeight: isVirtualScrollerDisabled ? this.props.scrollHeight : '' }}>
                <VirtualScroller {...virtualScrollerOptions} items={processedData} columns={columns} scrollHeight={this.props.scrollHeight}
                    disabled={isVirtualScrollerDisabled} loaderDisabled showSpacer={false}
                    contentTemplate={(options) => {
                        const ref = (el) => { this.table = el; options.spacerRef && options.spacerRef(el) };
                        const tableClassName = classNames('p-datatable-table', this.props.tableClassName);
                        const tableHeader = this.renderTableHeader(options, empty);
                        const tableBody = this.renderTableBody(options, selectionModeInColumn, empty, isVirtualScrollerDisabled);
                        const tableFooter = this.renderTableFooter(options);

                        return (
                            <table ref={ref} style={this.props.tableStyle} className={tableClassName} role="table">
                                {tableHeader}
                                {tableBody}
                                {tableFooter}
                            </table>
                        )
                    }} />
            </div>
        );
    }

    renderFooter() {
        if (this.props.footer) {
            const content = ObjectUtils.getJSXElement(this.props.footer, { props: this.props });
            return (
                <div className="p-datatable-footer">{content}</div>
            )
        }

        return null;
    }

    renderPaginator(position, totalRecords) {
        const className = classNames('p-paginator-' + position, this.props.paginatorClassName);

        return (
            <Paginator first={this.getFirst()} rows={this.getRows()} pageLinkSize={this.props.pageLinkSize} className={className} onPageChange={this.onPageChange} template={this.props.paginatorTemplate}
                totalRecords={totalRecords} rowsPerPageOptions={this.props.rowsPerPageOptions} currentPageReportTemplate={this.props.currentPageReportTemplate}
                leftContent={this.props.paginatorLeft} rightContent={this.props.paginatorRight} alwaysShow={this.props.alwaysShowPaginator} dropdownAppendTo={this.props.paginatorDropdownAppendTo} />
        );
    }

    renderPaginatorTop(totalRecords) {
        if (this.props.paginator && this.props.paginatorPosition !== 'bottom') {
            return this.renderPaginator('top', totalRecords);
        }

        return null;
    }

    renderPaginatorBottom(totalRecords) {
        if (this.props.paginator && this.props.paginatorPosition !== 'top') {
            return this.renderPaginator('bottom', totalRecords);
        }

        return null;
    }

    renderResizeHelper() {
        if (this.props.resizableColumns) {
            return (
                <div ref={el => this.resizeHelper = el} className="p-column-resizer-helper" style={{ display: 'none' }}></div>
            )
        }

        return null;
    }

    renderReorderIndicators() {
        if (this.props.reorderableColumns) {
            const style = { position: 'absolute', display: 'none' };
            return (
                <>
                    <span ref={el => this.reorderIndicatorUp = el} className="pi pi-arrow-down p-datatable-reorder-indicator-up" style={style}></span>
                    <span ref={el => this.reorderIndicatorDown = el} className="pi pi-arrow-up p-datatable-reorder-indicator-down" style={style}></span>
                </>
            )
        }

        return null;
    }

    render() {
        const processedData = this.processedData();
        const columns = this.getColumns();
        const totalRecords = this.getTotalRecords(processedData);
        const empty = ObjectUtils.isEmpty(processedData);
        const selectionModeInColumn = this.getSelectionModeInColumn(columns);
        const className = classNames('p-datatable p-component', {
            'p-datatable-hoverable-rows': this.props.rowHover || this.props.selectionMode || selectionModeInColumn,
            'p-datatable-auto-layout': this.props.autoLayout,
            'p-datatable-resizable': this.props.resizableColumns,
            'p-datatable-resizable-fit': this.props.resizableColumns && this.props.columnResizeMode === 'fit',
            'p-datatable-scrollable': this.props.scrollable,
            'p-datatable-scrollable-vertical': this.props.scrollable && this.props.scrollDirection === 'vertical',
            'p-datatable-scrollable-horizontal': this.props.scrollable && this.props.scrollDirection === 'horizontal',
            'p-datatable-scrollable-both': this.props.scrollable && this.props.scrollDirection === 'both',
            'p-datatable-flex-scrollable': (this.props.scrollable && this.props.scrollHeight === 'flex'),
            'p-datatable-responsive-stack': this.props.responsiveLayout === 'stack',
            'p-datatable-responsive-scroll': this.props.responsiveLayout === 'scroll',
            'p-datatable-striped': this.props.stripedRows,
            'p-datatable-gridlines': this.props.showGridlines,
            'p-datatable-grouped-header': this.props.headerColumnGroup != null,
            'p-datatable-grouped-footer': this.props.footerColumnGroup != null,
            'p-datatable-sm': this.props.size === 'small',
            'p-datatable-lg': this.props.size === 'large'
        }, this.props.className);

        const loader = this.renderLoader();
        const header = this.renderHeader();
        const paginatorTop = this.renderPaginatorTop(totalRecords);
        const content = this.renderContent(processedData, columns, selectionModeInColumn, empty);
        const paginatorBottom = this.renderPaginatorBottom(totalRecords);
        const footer = this.renderFooter();
        const resizeHelper = this.renderResizeHelper();
        const reorderIndicators = this.renderReorderIndicators();

        return (
            <div ref={el => this.el = el} id={this.props.id} className={className} style={this.props.style} data-scrollselectors=".p-datatable-wrapper">
                {loader}
                {header}
                {paginatorTop}
                {content}
                {paginatorBottom}
                {footer}
                {resizeHelper}
                {reorderIndicators}
            </div>
        )
    }
}
