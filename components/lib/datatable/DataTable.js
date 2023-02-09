import * as React from 'react';
import PrimeReact, { FilterMatchMode, FilterOperator, FilterService } from '../api/Api';
import { ColumnBase } from '../column/ColumnBase';
import { useEventListener, useMountEffect, useUnmountEffect, useUpdateEffect } from '../hooks/Hooks';
import { Paginator } from '../paginator/Paginator';
import { classNames, DomHandler, ObjectUtils, UniqueComponentId } from '../utils/Utils';
import { VirtualScroller } from '../virtualscroller/VirtualScroller';
import { DataTableBase } from './DataTableBase';
import { TableBody } from './TableBody';
import { TableFooter } from './TableFooter';
import { TableHeader } from './TableHeader';

export const DataTable = React.forwardRef((inProps, ref) => {
    const props = DataTableBase.getProps(inProps);

    const [firstState, setFirstState] = React.useState(props.first);
    const [rowsState, setRowsState] = React.useState(props.rows);
    const [sortFieldState, setSortFieldState] = React.useState(props.sortField);
    const [sortOrderState, setSortOrderState] = React.useState(props.sortOrder);
    const [multiSortMetaState, setMultiSortMetaState] = React.useState(props.multiSortMeta);
    const [filtersState, setFiltersState] = React.useState(props.filters);
    const [columnOrderState, setColumnOrderState] = React.useState([]);
    const [groupRowsSortMetaState, setGroupRowsSortMetaState] = React.useState(null);
    const [editingMetaState, setEditingMetaState] = React.useState({});
    const [attributeSelectorState, setAttributeSelectorState] = React.useState(null);
    const [d_rowsState, setD_rowsState] = React.useState(props.rows);
    const [d_filtersState, setD_filtersState] = React.useState({});
    const elementRef = React.useRef(null);
    const tableRef = React.useRef(null);
    const wrapperRef = React.useRef(null);
    const bodyRef = React.useRef(null);
    const frozenBodyRef = React.useRef(null);
    const virtualScrollerRef = React.useRef(null);
    const reorderIndicatorUpRef = React.useRef(null);
    const reorderIndicatorDownRef = React.useRef(null);
    const colReorderIconWidth = React.useRef(null);
    const colReorderIconHeight = React.useRef(null);
    const resizeHelperRef = React.useRef(null);
    const draggedColumnElement = React.useRef(null);
    const draggedColumn = React.useRef(null);
    const dropPosition = React.useRef(null);
    const styleElement = React.useRef(null);
    const responsiveStyleElement = React.useRef(null);
    const columnWidthsState = React.useRef(null);
    const tableWidthState = React.useRef(null);
    const resizeColumn = React.useRef(null);
    const resizeColumnElement = React.useRef(null);
    const columnResizing = React.useRef(false);
    const lastResizeHelperX = React.useRef(null);
    const columnSortable = React.useRef(false);
    const columnSortFunction = React.useRef(null);
    const columnField = React.useRef(null);
    const filterTimeout = React.useRef(null);

    if (props.rows !== d_rowsState && !props.onPage) {
        setRowsState(props.rows);
        setD_rowsState(props.rows);
    }

    const [bindDocumentMouseMoveListener, unbindDocumentMouseMoveListener] = useEventListener({
        type: 'mousemove',
        listener: (event) => {
            if (columnResizing.current) {
                onColumnResize(event);
            }
        }
    });

    const [bindDocumentMouseUpListener, unbindDocumentMouseUpListener] = useEventListener({
        type: 'mouseup',
        listener: () => {
            if (columnResizing.current) {
                columnResizing.current = false;
                onColumnResizeEnd();
            }
        }
    });

    const isCustomStateStorage = () => {
        return props.stateStorage === 'custom';
    };

    const isStateful = () => {
        return props.stateKey != null || isCustomStateStorage();
    };

    const isVirtualScrollerDisabled = () => {
        return ObjectUtils.isEmpty(props.virtualScrollerOptions) || !props.scrollable;
    };

    const isEquals = (data1, data2) => {
        return props.compareSelectionBy === 'equals' ? data1 === data2 : ObjectUtils.equals(data1, data2, props.dataKey);
    };

    const hasFilter = () => {
        return ObjectUtils.isNotEmpty(getFilters()) || props.globalFilter;
    };

    const getFirst = () => {
        return props.onPage ? props.first : firstState;
    };

    const getRows = () => {
        return props.onPage ? props.rows : rowsState;
    };

    const getSortField = () => {
        return props.onSort ? props.sortField : sortFieldState;
    };

    const getSortOrder = () => {
        return props.onSort ? props.sortOrder : sortOrderState;
    };

    const getMultiSortMeta = () => {
        return (props.onSort ? props.multiSortMeta : multiSortMetaState) || [];
    };

    const getFilters = () => {
        return props.onFilter ? props.filters : filtersState;
    };

    const getColumnProp = (column, name) => {
        return ColumnBase.getCProp(column, name);
    };

    const getColumns = (ignoreReorderable) => {
        const columns = React.Children.toArray(props.children);

        if (!columns) {
            return null;
        }

        if (!ignoreReorderable && props.reorderableColumns && columnOrderState) {
            let orderedColumns = columnOrderState.reduce((arr, columnKey) => {
                const column = findColumnByKey(columns, columnKey);

                column && arr.push(column);

                return arr;
            }, []);

            return [...orderedColumns, ...columns.filter((col) => orderedColumns.indexOf(col) < 0)];
        }

        return columns;
    };

    const getStorage = () => {
        switch (props.stateStorage) {
            case 'local':
                return window.localStorage;

            case 'session':
                return window.sessionStorage;

            case 'custom':
                return null;

            default:
                throw new Error(props.stateStorage + ' is not a valid value for the state storage, supported values are "local", "session" and "custom".');
        }
    };

    const saveState = () => {
        let state = {};

        if (props.paginator) {
            state.first = getFirst();
            state.rows = getRows();
        }

        const sortField = getSortField();

        if (sortField) {
            state.sortField = sortField;
            state.sortOrder = getSortOrder();
        }

        const multiSortMeta = getMultiSortMeta();

        if (multiSortMeta) {
            state.multiSortMeta = multiSortMeta;
        }

        if (hasFilter()) {
            state.filters = getFilters();
        }

        if (props.resizableColumns) {
            saveColumnWidths(state);
        }

        if (props.reorderableColumns) {
            state.columnOrder = columnOrderState;
        }

        if (props.expandedRows) {
            state.expandedRows = props.expandedRows;
        }

        if (props.selection && props.onSelectionChange) {
            state.selection = props.selection;
        }

        if (isCustomStateStorage()) {
            if (props.customSaveState) {
                props.customSaveState(state);
            }
        } else {
            const storage = getStorage();

            if (ObjectUtils.isNotEmpty(state)) {
                storage.setItem(props.stateKey, JSON.stringify(state));
            }
        }

        if (props.onStateSave) {
            props.onStateSave(state);
        }
    };

    const clearState = () => {
        const storage = getStorage();

        if (storage && props.stateKey) {
            storage.removeItem(props.stateKey);
        }
    };

    const restoreState = () => {
        let restoredState = {};

        if (isCustomStateStorage()) {
            if (props.customRestoreState) {
                restoredState = props.customRestoreState();
            }
        } else {
            const storage = getStorage();
            const stateString = storage.getItem(props.stateKey);
            const dateFormat = /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/;

            const reviver = function (key, value) {
                return typeof value === 'string' && dateFormat.test(value) ? new Date(value) : value;
            };

            if (stateString) {
                restoredState = JSON.parse(stateString, reviver);
            }
        }

        _restoreState(restoredState);
    };

    const restoreTableState = (restoredState) => {
        _restoreState(restoredState);
    };

    const _restoreState = (restoredState = {}) => {
        if (ObjectUtils.isNotEmpty(restoredState)) {
            if (props.paginator) {
                if (props.onPage) {
                    const getOnPageParams = (first, rows) => {
                        const totalRecords = getTotalRecords(processedData());
                        const pageCount = Math.ceil(totalRecords / rows) || 1;
                        const page = Math.floor(first / rows);

                        return { first, rows, page, pageCount };
                    };

                    props.onPage(createEvent(getOnPageParams(restoredState.first, restoredState.rows)));
                } else {
                    setFirstState(restoredState.first);
                    setRowsState(restoredState.rows);
                }
            }

            if (restoredState.sortField) {
                if (props.onSort) {
                    props.onSort(
                        createEvent({
                            sortField: restoredState.sortField,
                            sortOrder: restoredState.sortOrder
                        })
                    );
                } else {
                    setSortFieldState(restoredState.sortField);
                    setSortOrderState(restoredState.sortOrder);
                }
            }

            if (restoredState.multiSortMeta) {
                if (props.onSort) {
                    props.onSort(
                        createEvent({
                            multiSortMeta: restoredState.multiSortMeta
                        })
                    );
                } else {
                    setMultiSortMetaState(restoredState.multiSortMeta);
                }
            }

            if (restoredState.filters) {
                setD_filtersState(cloneFilters(restoredState.filters));

                if (props.onFilter) {
                    props.onFilter(
                        createEvent({
                            filters: restoredState.filters
                        })
                    );
                } else {
                    setFiltersState(cloneFilters(restoredState.filters));
                }
            }

            if (props.resizableColumns) {
                columnWidthsState.current = restoredState.columnWidths;
                tableWidthState.current = restoredState.tableWidth;
                restoreColumnWidths();
            }

            if (props.reorderableColumns) {
                setColumnOrderState(restoredState.columnOrder);
            }

            if (restoredState.expandedRows && props.onRowToggle) {
                props.onRowToggle({
                    data: restoredState.expandedRows
                });
            }

            if (restoredState.selection && props.onSelectionChange) {
                props.onSelectionChange({
                    value: restoredState.selection
                });
            }

            if (props.onStateRestore) {
                props.onStateRestore(restoredState);
            }
        }
    };

    const saveColumnWidths = (state) => {
        let widths = [];
        let headers = DomHandler.find(elementRef.current, '.p-datatable-thead > tr > th');

        headers.forEach((header) => widths.push(DomHandler.getOuterWidth(header)));
        state.columnWidths = widths.join(',');

        if (props.columnResizeMode === 'expand') {
            state.tableWidth = DomHandler.getOuterWidth(tableRef.current) + 'px';
        }
    };

    const restoreColumnWidths = () => {
        if (columnWidthsState.current) {
            let widths = columnWidthsState.current.split(',');

            if (props.columnResizeMode === 'expand' && tableWidthState.current) {
                tableRef.current.style.width = tableWidthState.current;
                tableRef.current.style.minWidth = tableWidthState.current;
                elementRef.current.style.width = tableWidthState.current;
            }

            if (ObjectUtils.isNotEmpty(widths)) {
                createStyleElement();

                let innerHTML = '';

                widths.forEach((width, index) => {
                    let style = props.scrollable ? `flex: 1 1 ${width}px !important` : `width: ${width}px !important`;

                    innerHTML += `
                        .p-datatable[${attributeSelectorState}] .p-datatable-thead > tr > th:nth-child(${index + 1}),
                        .p-datatable[${attributeSelectorState}] .p-datatable-tbody > tr > td:nth-child(${index + 1}),
                        .p-datatable[${attributeSelectorState}] .p-datatable-tfoot > tr > td:nth-child(${index + 1}) {
                            ${style}
                        }
                    `;
                });

                styleElement.current.innerHTML = innerHTML;
            }
        }
    };

    const findParentHeader = (element) => {
        if (element.nodeName === 'TH') {
            return element;
        } else {
            let parent = element.parentElement;

            while (parent.nodeName !== 'TH') {
                parent = parent.parentElement;
                if (!parent) break;
            }

            return parent;
        }
    };

    const getGroupRowSortField = () => {
        return props.sortMode === 'single' ? props.sortField : groupRowsSortMetaState ? groupRowsSortMetaState.field : null;
    };

    const getSelectableData = (val) => {
        if (props.showSelectionElement || props.isDataSelectable) {
            return val.filter((data, index) => {
                let isSelectable = true;

                if (props.showSelectionElement) isSelectable = props.showSelectionElement({ rowIndex: index, props });
                if (props.isDataSelectable && isSelectable) isSelectable = props.isDataSelectable({ data, index });

                return isSelectable;
            });
        }

        return val;
    };

    const allRowsSelected = (processedData) => {
        if (props.onSelectAllChange) {
            return props.selectAll;
        } else {
            const data = props.selectionPageOnly ? dataToRender(processedData) : processedData;
            const val = ObjectUtils.isNotEmpty(props.frozenValue) ? [...props.frozenValue, ...data] : data;
            const selectableVal = getSelectableData(val);

            return selectableVal && props.selection && selectableVal.every((sv) => props.selection.some((s) => isEquals(s, sv)));
        }
    };

    const getSelectionModeInColumn = (columns) => {
        if (columns) {
            const col = columns.find((c) => !!getColumnProp(c, 'selectionMode'));

            return col ? getColumnProp(col, 'selectionMode') : null;
        }

        return null;
    };

    const findColumnByKey = (columns, key) => {
        return ObjectUtils.isNotEmpty(columns) ? columns.find((col) => getColumnProp(col, 'columnKey') === key || getColumnProp(col, 'field') === key) : null;
    };

    const getTotalRecords = (data) => {
        return props.lazy ? props.totalRecords : data ? data.length : 0;
    };

    const onEditingMetaChange = (e) => {
        const { rowData, field, editingKey, rowIndex, editing } = e;
        let editingMeta = { ...editingMetaState };
        let meta = editingMeta[editingKey];

        if (editing) {
            !meta && (meta = editingMeta[editingKey] = { data: { ...rowData }, fields: [] });
            meta['fields'].push(field);
        } else if (meta) {
            const fields = meta['fields'].filter((f) => f !== field);

            !fields.length ? delete editingMeta[editingKey] : (meta['fields'] = fields);
        }

        setEditingMetaState(editingMeta);
    };

    const clearEditingMetaData = () => {
        if (props.editMode && ObjectUtils.isNotEmpty(editingMetaState)) {
            setEditingMetaState({});
        }
    };

    const onColumnResizeStart = (e) => {
        const { originalEvent: event, column } = e;
        const containerLeft = DomHandler.getOffset(elementRef.current).left;

        resizeColumn.current = column;
        resizeColumnElement.current = event.currentTarget.parentElement;
        columnResizing.current = true;
        lastResizeHelperX.current = event.pageX - containerLeft + elementRef.current.scrollLeft;

        bindColumnResizeEvents();
    };

    const onColumnResize = (event) => {
        const containerLeft = DomHandler.getOffset(elementRef.current).left;

        DomHandler.addClass(elementRef.current, 'p-unselectable-text');
        resizeHelperRef.current.style.height = elementRef.current.offsetHeight + 'px';
        resizeHelperRef.current.style.top = 0 + 'px';
        resizeHelperRef.current.style.left = event.pageX - containerLeft + elementRef.current.scrollLeft + 'px';

        resizeHelperRef.current.style.display = 'block';
    };

    const onColumnResizeEnd = () => {
        let delta = resizeHelperRef.current.offsetLeft - lastResizeHelperX.current;
        let columnWidth = resizeColumnElement.current.offsetWidth;
        let newColumnWidth = columnWidth + delta;
        let minWidth = resizeColumnElement.current.style.minWidth || 15;

        if (columnWidth + delta > parseInt(minWidth, 10)) {
            if (props.columnResizeMode === 'fit') {
                let nextColumn = resizeColumnElement.current.nextElementSibling;
                let nextColumnWidth = nextColumn.offsetWidth - delta;

                if (newColumnWidth > 15 && nextColumnWidth > 15) {
                    resizeTableCells(newColumnWidth, nextColumnWidth);
                }
            } else if (props.columnResizeMode === 'expand') {
                const tableWidth = tableRef.current.offsetWidth + delta + 'px';

                const updateTableWidth = (el) => {
                    !!el && (el.style.width = el.style.minWidth = tableWidth);
                };

                updateTableWidth(tableRef.current);

                if (!isVirtualScrollerDisabled()) {
                    updateTableWidth(bodyRef.current);
                    updateTableWidth(frozenBodyRef.current);

                    if (wrapperRef.current) {
                        updateTableWidth(DomHandler.findSingle(wrapperRef.current, '.p-virtualscroller-content'));
                    }
                }

                resizeTableCells(newColumnWidth);
            }

            if (props.onColumnResizeEnd) {
                props.onColumnResizeEnd({
                    element: resizeColumnElement.current,
                    column: resizeColumn.current,
                    delta: delta
                });
            }

            if (isStateful()) {
                saveState();
            }
        }

        resizeHelperRef.current.style.display = 'none';
        resizeColumn.current = null;
        resizeColumnElement.current = null;
        DomHandler.removeClass(elementRef.current, 'p-unselectable-text');

        unbindColumnResizeEvents();
    };

    const resizeTableCells = (newColumnWidth, nextColumnWidth) => {
        let widths = [];
        let colIndex = DomHandler.index(resizeColumnElement.current);
        let headers = DomHandler.find(tableRef.current, '.p-datatable-thead > tr > th');

        headers.forEach((header) => widths.push(DomHandler.getOuterWidth(header)));

        destroyStyleElement();
        createStyleElement();

        let innerHTML = '';

        widths.forEach((width, index) => {
            let colWidth = index === colIndex ? newColumnWidth : nextColumnWidth && index === colIndex + 1 ? nextColumnWidth : width;
            let style = props.scrollable ? `flex: 1 1 ${colWidth}px !important` : `width: ${colWidth}px !important`;

            innerHTML += `
                .p-datatable[${attributeSelectorState}] .p-datatable-thead > tr > th:nth-child(${index + 1}),
                .p-datatable[${attributeSelectorState}] .p-datatable-tbody > tr > td:nth-child(${index + 1}),
                .p-datatable[${attributeSelectorState}] .p-datatable-tfoot > tr > td:nth-child(${index + 1}) {
                    ${style}
                }
            `;
        });

        styleElement.current.innerHTML = innerHTML;
    };

    const bindColumnResizeEvents = () => {
        bindDocumentMouseMoveListener();
        bindDocumentMouseUpListener();
    };

    const unbindColumnResizeEvents = () => {
        unbindDocumentMouseMoveListener();
        unbindDocumentMouseUpListener();
    };

    const onColumnHeaderMouseDown = (e) => {
        DomHandler.clearSelection();

        const { originalEvent: event, column } = e;

        if (props.reorderableColumns && getColumnProp(column, 'reorderable') !== false && !getColumnProp(column, 'frozen')) {
            if (event.target.nodeName === 'INPUT' || event.target.nodeName === 'TEXTAREA' || DomHandler.hasClass(event.target, 'p-column-resizer')) event.currentTarget.draggable = false;
            else event.currentTarget.draggable = true;
        }
    };

    const onColumnHeaderCheckboxChange = (e, processedData) => {
        if (props.onSelectAllChange) {
            props.onSelectAllChange(e);
        } else {
            const { originalEvent, checked } = e;
            const data = props.selectionPageOnly ? dataToRender(processedData) : processedData;
            let selection = props.selectionPageOnly && props.selection ? props.selection.filter((s) => !data.some((d) => isEquals(s, d))) : [];

            if (checked) {
                selection = ObjectUtils.isNotEmpty(props.frozenValue) ? [...selection, ...props.frozenValue, ...data] : [...selection, ...data];
                selection = getSelectableData(selection);

                props.onAllRowsSelect && props.onAllRowsSelect({ originalEvent, data: selection, type: 'all' });
            } else {
                props.onAllRowsUnselect && props.onAllRowsUnselect({ originalEvent, data: selection, type: 'all' });
            }

            if (props.onSelectionChange) {
                props.onSelectionChange({
                    originalEvent,
                    value: selection,
                    type: 'all'
                });
            }
        }
    };

    const onColumnHeaderDragStart = (e) => {
        const { originalEvent: event, column } = e;

        if (columnResizing.current) {
            event.preventDefault();

            return;
        }

        if (!props.reorderableColumns) return;

        colReorderIconWidth.current = DomHandler.getHiddenElementOuterWidth(reorderIndicatorUpRef.current);
        colReorderIconHeight.current = DomHandler.getHiddenElementOuterHeight(reorderIndicatorUpRef.current);

        draggedColumn.current = column;
        draggedColumnElement.current = findParentHeader(event.currentTarget);
        event.dataTransfer.setData('text', 'b'); // Firefox requires this to make dragging possible
    };

    const onColumnHeaderDragOver = (e) => {
        const { originalEvent: event, column } = e;
        const dropHeader = findParentHeader(event.currentTarget);

        if (props.reorderableColumns && draggedColumnElement.current && dropHeader && !getColumnProp(column, 'frozen')) {
            event.preventDefault();

            if (draggedColumnElement.current !== dropHeader) {
                const containerOffset = DomHandler.getOffset(elementRef.current);
                const dropHeaderOffset = DomHandler.getOffset(dropHeader);
                const targetLeft = dropHeaderOffset.left - containerOffset.left;
                const columnCenter = dropHeaderOffset.left + dropHeader.offsetWidth / 2;

                reorderIndicatorUpRef.current.style.top = dropHeaderOffset.top - containerOffset.top - (colReorderIconHeight.current - 1) + 'px';
                reorderIndicatorDownRef.current.style.top = dropHeaderOffset.top - containerOffset.top + dropHeader.offsetHeight + 'px';

                if (event.pageX > columnCenter) {
                    reorderIndicatorUpRef.current.style.left = targetLeft + dropHeader.offsetWidth - Math.ceil(colReorderIconWidth.current / 2) + 'px';
                    reorderIndicatorDownRef.current.style.left = targetLeft + dropHeader.offsetWidth - Math.ceil(colReorderIconWidth.current / 2) + 'px';
                    dropPosition.current = 1;
                } else {
                    reorderIndicatorUpRef.current.style.left = targetLeft - Math.ceil(colReorderIconWidth.current / 2) + 'px';
                    reorderIndicatorDownRef.current.style.left = targetLeft - Math.ceil(colReorderIconWidth.current / 2) + 'px';
                    dropPosition.current = -1;
                }

                reorderIndicatorUpRef.current.style.display = 'block';
                reorderIndicatorDownRef.current.style.display = 'block';
            }
        }
    };

    const onColumnHeaderDragLeave = (e) => {
        const { originalEvent: event } = e;

        if (props.reorderableColumns && draggedColumnElement.current) {
            event.preventDefault();
            reorderIndicatorUpRef.current.style.display = 'none';
            reorderIndicatorDownRef.current.style.display = 'none';
        }
    };

    const onColumnHeaderDrop = (e) => {
        const { originalEvent: event, column } = e;

        event.preventDefault();

        if (draggedColumnElement.current) {
            let dragIndex = DomHandler.index(draggedColumnElement.current);
            let dropIndex = DomHandler.index(findParentHeader(event.currentTarget));
            let allowDrop = dragIndex !== dropIndex;

            if (allowDrop && ((dropIndex - dragIndex === 1 && dropPosition.current === -1) || (dragIndex - dropIndex === 1 && dropPosition.current === 1))) {
                allowDrop = false;
            }

            if (allowDrop) {
                let columns = getColumns();
                let isSameColumn = (col1, col2) => (getColumnProp(col1, 'columnKey') || getColumnProp(col2, 'columnKey') ? ObjectUtils.equals(col1.props, col2.props, 'columnKey') : ObjectUtils.equals(col1.props, col2.props, 'field'));
                let dragColIndex = columns.findIndex((child) => isSameColumn(child, draggedColumn.current));
                let dropColIndex = columns.findIndex((child) => isSameColumn(child, column));

                if (dropColIndex < dragColIndex && dropPosition.current === 1) {
                    dropColIndex++;
                }

                if (dropColIndex > dragColIndex && dropPosition.current === -1) {
                    dropColIndex--;
                }

                ObjectUtils.reorderArray(columns, dragColIndex, dropColIndex);

                const columnOrder = columns.reduce((orders, col) => {
                    orders.push(getColumnProp(col, 'columnKey') || getColumnProp(col, 'field'));

                    return orders;
                }, []);

                setColumnOrderState(columnOrder);

                if (props.onColReorder) {
                    props.onColReorder({
                        originalEvent: event,
                        dragIndex: dragColIndex,
                        dropIndex: dropColIndex,
                        columns
                    });
                }
            }

            reorderIndicatorUpRef.current.style.display = 'none';
            reorderIndicatorDownRef.current.style.display = 'none';
            draggedColumnElement.current.draggable = false;
            draggedColumnElement.current = null;
            draggedColumn.current = null;
            dropPosition.current = null;
        }
    };

    const createStyleElement = () => {
        styleElement.current = DomHandler.createInlineStyle(PrimeReact.nonce);
    };

    const createResponsiveStyle = () => {
        if (!responsiveStyleElement.current) {
            responsiveStyleElement.current = DomHandler.createInlineStyle(PrimeReact.nonce);

            let innerHTML = `
@media screen and (max-width: ${props.breakpoint}) {
    .p-datatable[${attributeSelectorState}] .p-datatable-thead > tr > th,
    .p-datatable[${attributeSelectorState}] .p-datatable-tfoot > tr > td {
        display: none !important;
    }

    .p-datatable[${attributeSelectorState}] .p-datatable-tbody > tr > td {
        display: flex;
        width: 100% !important;
        align-items: center;
        justify-content: space-between;
    }

    .p-datatable[${attributeSelectorState}] .p-datatable-tbody > tr > td:not(:last-child) {
        border: 0 none;
    }

    .p-datatable[${attributeSelectorState}].p-datatable-gridlines .p-datatable-tbody > tr > td:last-child {
        border-top: 0;
        border-right: 0;
        border-left: 0;
    }

    .p-datatable[${attributeSelectorState}] .p-datatable-tbody > tr > td > .p-column-title {
        display: block;
    }
}
`;

            responsiveStyleElement.current.innerHTML = innerHTML;
        }
    };

    const destroyResponsiveStyle = () => {
        responsiveStyleElement.current = DomHandler.removeInlineStyle(responsiveStyleElement.current);
    };

    const destroyStyleElement = () => {
        styleElement.current = DomHandler.removeInlineStyle(styleElement.current);
    };

    const onPageChange = (e) => {
        clearEditingMetaData();

        if (props.onPage) {
            props.onPage(createEvent(e));
        } else {
            setFirstState(e.first);
            setRowsState(e.rows);
        }

        if (props.onValueChange) {
            props.onValueChange(processedData());
        }
    };

    const onSortChange = (e) => {
        clearEditingMetaData();

        const { originalEvent: event, column, sortableDisabledFields } = e;
        let sortField = getColumnProp(column, 'sortField') || getColumnProp(column, 'field');
        let sortOrder = props.defaultSortOrder;
        let multiSortMeta;
        let eventMeta;

        columnSortable.current = getColumnProp(column, 'sortable');
        columnSortFunction.current = getColumnProp(column, 'sortFunction');
        columnField.current = sortField;

        if (props.sortMode === 'multiple') {
            let metaKey = event.metaKey || event.ctrlKey;

            multiSortMeta = [...getMultiSortMeta()];

            const sortMeta = multiSortMeta.find((sortMeta) => sortMeta.field === sortField);

            sortOrder = sortMeta ? getCalculatedSortOrder(sortMeta.order) : sortOrder;

            const newMetaData = { field: sortField, order: sortOrder };

            if (sortOrder) {
                multiSortMeta = metaKey ? multiSortMeta : multiSortMeta.filter((meta) => sortableDisabledFields.some((field) => field === meta.field));

                addSortMeta(newMetaData, multiSortMeta);
            } else if (props.removableSort) {
                removeSortMeta(newMetaData, multiSortMeta);
            }

            eventMeta = {
                multiSortMeta
            };
        } else {
            sortOrder = getSortField() === sortField ? getCalculatedSortOrder(getSortOrder()) : sortOrder;

            if (props.removableSort) {
                sortField = sortOrder ? sortField : null;
            }

            eventMeta = {
                sortField,
                sortOrder
            };
        }

        if (props.onSort) {
            props.onSort(createEvent(eventMeta));
        } else {
            setFirstState(0);
            setSortFieldState(eventMeta.sortField);
            setSortOrderState(eventMeta.sortOrder);
            setMultiSortMetaState(eventMeta.multiSortMeta);
        }

        if (props.onValueChange) {
            props.onValueChange(
                processedData({
                    sortField,
                    sortOrder,
                    multiSortMeta
                })
            );
        }
    };

    const getCalculatedSortOrder = (currentOrder) => {
        return props.removableSort ? (props.defaultSortOrder === currentOrder ? currentOrder * -1 : 0) : currentOrder * -1;
    };

    const compareValuesOnSort = (value1, value2, order) => {
        return ObjectUtils.sort(value1, value2, order, PrimeReact.locale, PrimeReact.nullSortOrder);
    };

    const addSortMeta = (meta, multiSortMeta) => {
        const index = multiSortMeta.findIndex((sortMeta) => sortMeta.field === meta.field);

        if (index >= 0) multiSortMeta[index] = meta;
        else multiSortMeta.push(meta);
    };

    const removeSortMeta = (meta, multiSortMeta) => {
        const index = multiSortMeta.findIndex((sortMeta) => sortMeta.field === meta.field);

        if (index >= 0) {
            multiSortMeta.splice(index, 1);
        }

        multiSortMeta = multiSortMeta.length > 0 ? multiSortMeta : null;
    };

    const sortSingle = (data, field, order) => {
        if (props.groupRowsBy && props.groupRowsBy === props.sortField) {
            const multiSortMeta = [{ field: props.sortField, order: props.sortOrder || props.defaultSortOrder }];

            props.sortField !== field && multiSortMeta.push({ field, order });

            return sortMultiple(data, multiSortMeta);
        }

        let value = [...data];

        if (columnSortable.current && columnSortFunction.current) {
            value = columnSortFunction.current({ data, field, order });
        } else {
            value.sort((data1, data2) => {
                const value1 = ObjectUtils.resolveFieldData(data1, field);
                const value2 = ObjectUtils.resolveFieldData(data2, field);

                return compareValuesOnSort(value1, value2, order);
            });
        }

        return value;
    };

    const sortMultiple = (data, multiSortMeta = []) => {
        if (props.groupRowsBy && (groupRowsSortMetaState || (multiSortMeta.length && props.groupRowsBy === multiSortMeta[0].field))) {
            let groupRowsSortMeta = groupRowsSortMetaState;
            const firstSortMeta = multiSortMeta[0];

            if (!groupRowsSortMeta) {
                groupRowsSortMeta = firstSortMeta;
                setGroupRowsSortMetaState(groupRowsSortMeta);
            }

            if (firstSortMeta.field !== groupRowsSortMeta.field) {
                multiSortMeta = [groupRowsSortMeta, ...multiSortMeta];
            }
        }

        let value = [...data];

        if (columnSortable.current && columnSortFunction.current) {
            const meta = multiSortMeta.find((meta) => meta.field === columnField.current);
            const field = columnField.current;
            const order = meta ? meta.order : props.defaultSortOrder;

            value = columnSortFunction.current({ data, field, order, multiSortMeta });
        } else {
            value.sort((data1, data2) => {
                return multisortField(data1, data2, multiSortMeta, 0);
            });
        }

        return value;
    };

    const multisortField = (data1, data2, multiSortMeta, index) => {
        const value1 = ObjectUtils.resolveFieldData(data1, multiSortMeta[index].field);
        const value2 = ObjectUtils.resolveFieldData(data2, multiSortMeta[index].field);

        // check if they are equal handling dates and locales
        if (ObjectUtils.compare(value1, value2, PrimeReact.locale) === 0) {
            return multiSortMeta.length - 1 > index ? multisortField(data1, data2, multiSortMeta, index + 1) : 0;
        }

        return compareValuesOnSort(value1, value2, multiSortMeta[index].order);
    };

    const onFilterChange = (filters) => {
        clearEditingMetaData();

        setD_filtersState(filters);
    };

    const onFilterApply = (filtersToApply) => {
        clearTimeout(filterTimeout.current);
        filterTimeout.current = setTimeout(() => {
            const filters = cloneFilters(filtersToApply || d_filtersState);

            if (props.onFilter) {
                props.onFilter(createEvent({ filters }));
            } else {
                setFirstState(0);
                setFiltersState(filters);
            }

            if (props.onValueChange) {
                props.onValueChange(processedData({ filters }));
            }
        }, props.filterDelay);
    };

    const filterLocal = (data, filters) => {
        if (!data) return;

        filters = filters || {};

        let columns = getColumns();
        let filteredValue = [];

        let isGlobalFilter = filters['global'] || props.globalFilter;
        let globalFilterFieldsArray;

        if (isGlobalFilter) {
            globalFilterFieldsArray = props.globalFilterFields || columns.filter((col) => !getColumnProp(col, 'excludeGlobalFilter')).map((col) => getColumnProp(col, 'filterField') || getColumnProp(col, 'field'));
        }

        for (let i = 0; i < data.length; i++) {
            let localMatch = true;
            let globalMatch = false;
            let localFiltered = false;

            for (let prop in filters) {
                if (prop === 'null') {
                    continue;
                }

                if (Object.prototype.hasOwnProperty.call(filters, prop) && prop !== 'global') {
                    localFiltered = true;
                    let filterField = prop;
                    let filterMeta = filters[filterField];

                    if (filterMeta.operator) {
                        for (let j = 0; j < filterMeta.constraints.length; j++) {
                            let filterConstraint = filterMeta.constraints[j];

                            localMatch = executeLocalFilter(filterField, data[i], filterConstraint, j);

                            if ((filterMeta.operator === FilterOperator.OR && localMatch) || (filterMeta.operator === FilterOperator.AND && !localMatch)) {
                                break;
                            }
                        }
                    } else {
                        localMatch = executeLocalFilter(filterField, data[i], filterMeta, 0);
                    }

                    if (!localMatch) {
                        break;
                    }
                }
            }

            if (isGlobalFilter && !globalMatch && globalFilterFieldsArray) {
                for (let j = 0; j < globalFilterFieldsArray.length; j++) {
                    let globalFilterField = globalFilterFieldsArray[j];
                    let matchMode = filters['global'] ? filters['global'].matchMode : props.globalFilterMatchMode;
                    let value = filters['global'] ? filters['global'].value : props.globalFilter;

                    globalMatch = FilterService.filters[matchMode](ObjectUtils.resolveFieldData(data[i], globalFilterField), value, props.filterLocale);

                    if (globalMatch) {
                        break;
                    }
                }
            }

            let matches;

            if (isGlobalFilter) {
                matches = localFiltered ? localFiltered && localMatch && globalMatch : globalMatch;
            } else {
                matches = localFiltered && localMatch;
            }

            if (matches) {
                filteredValue.push(data[i]);
            }
        }

        if (filteredValue.length === props.value.length) {
            filteredValue = data;
        }

        return filteredValue;
    };

    const executeLocalFilter = (field, rowData, filterMeta, index) => {
        let filterValue = filterMeta.value;
        let filterMatchMode = filterMeta.matchMode === 'custom' ? `custom_${field}` : filterMeta.matchMode || FilterMatchMode.STARTS_WITH;
        let dataFieldValue = ObjectUtils.resolveFieldData(rowData, field);
        let filterConstraint = FilterService.filters[filterMatchMode];

        return ObjectUtils.isFunction(filterConstraint) && filterConstraint(dataFieldValue, filterValue, props.filterLocale, index);
    };

    const cloneFilters = (filters) => {
        filters = filters || props.filters;
        let cloned = {};

        if (filters) {
            Object.entries(filters).forEach(([prop, value]) => {
                cloned[prop] = value.operator
                    ? {
                          operator: value.operator,
                          constraints: value.constraints.map((constraint) => {
                              return { ...constraint };
                          })
                      }
                    : { ...value };
            });
        } else {
            const columns = getColumns();

            cloned = columns.reduce((filters, col) => {
                const field = getColumnProp(col, 'filterField') || getColumnProp(col, 'field');
                const filterFunction = getColumnProp(col, 'filterFunction');
                const dataType = getColumnProp(col, 'dataType');
                const matchMode = getColumnProp(col, 'filterMatchMode') || (PrimeReact.filterMatchModeOptions[dataType] ? PrimeReact.filterMatchModeOptions[dataType][0] : FilterMatchMode.STARTS_WITH);
                let constraint = { value: null, matchMode };

                if (filterFunction) {
                    FilterService.register(`custom_${field}`, (...args) => filterFunction(...args, { column: col }));
                }

                filters[field] = props.filterDisplay === 'menu' ? { operator: FilterOperator.AND, constraints: [constraint] } : constraint;

                return filters;
            }, {});
        }

        return cloned;
    };

    const filter = (value, field, matchMode, index = 0) => {
        let filters = { ...d_filtersState };
        let meta = filters[field];
        let constraint = meta && meta.operator ? meta.constraints[index] : meta;

        constraint = meta ? { value, matchMode: matchMode || constraint.matchMode } : { value, matchMode };
        props.filterDisplay === 'menu' && meta && meta.operator ? (filters[field].constraints[index] = constraint) : (filters[field] = constraint);

        setD_filtersState(filters);
        onFilterApply(filters);
    };

    const reset = () => {
        setD_rowsState(props.rows);
        setD_filtersState(cloneFilters(props.filters));
        setGroupRowsSortMetaState(null);
        setEditingMetaState({});

        if (!props.onPage) {
            setFirstState(props.first);
            setRowsState(props.rows);
        }

        if (!props.onSort) {
            setSortFieldState(props.sortField);
            setSortOrderState(props.sortOrder);
            setMultiSortMetaState(props.multiSortMeta);
        }

        if (!props.onFilter) {
            setFiltersState(props.filters);
        }

        resetColumnOrder();
    };

    const resetScroll = () => {
        if (wrapperRef.current) {
            const scrollableContainer = !isVirtualScrollerDisabled() ? DomHandler.findSingle(wrapperRef.current, '.p-virtualscroller') : wrapperRef.current;

            scrollableContainer.scrollTo(0, 0);
        }
    };

    const resetColumnOrder = () => {
        const columns = getColumns(true);
        let columnOrder = [];

        if (columns) {
            columnOrder = columns.reduce((orders, col) => {
                orders.push(getColumnProp(col, 'columnKey') || getColumnProp(col, 'field'));

                return orders;
            }, []);
        }

        setColumnOrderState(columnOrder);
    };

    const exportCSV = (options) => {
        let data;
        let csv = '\ufeff';
        let columns = getColumns();

        if (options && options.selectionOnly) {
            data = props.selection || [];
        } else {
            data = [...(props.frozenValue || []), ...(processedData() || [])];
        }

        //headers
        columns.forEach((column, i) => {
            const [field, header, exportable] = [getColumnProp(column, 'field'), getColumnProp(column, 'header'), getColumnProp(column, 'exportable')];

            if (exportable && field) {
                const columnHeader = String(header || field)
                    .replace(/"/g, '""')
                    .replace(/\n/g, '\u2028');

                csv += '"' + columnHeader + '"';

                if (i < columns.length - 1) {
                    csv += props.csvSeparator;
                }
            }
        });

        //body
        data.forEach((record) => {
            csv += '\n';
            columns.forEach((column, i) => {
                const [colField, exportField, exportable] = [getColumnProp(column, 'field'), getColumnProp(column, 'exportField'), getColumnProp(column, 'exportable')];
                const field = exportField || colField;

                if (exportable && field) {
                    let cellData = ObjectUtils.resolveFieldData(record, field);

                    if (cellData != null) {
                        if (props.exportFunction) {
                            cellData = props.exportFunction({ data: cellData, field, rowData: record, column });
                        } else {
                            cellData = String(cellData).replace(/"/g, '""').replace(/\n/g, '\u2028');
                        }
                    } else cellData = '';

                    csv += '"' + cellData + '"';

                    if (i < columns.length - 1) {
                        csv += props.csvSeparator;
                    }
                }
            });
        });

        DomHandler.exportCSV(csv, props.exportFilename);
    };

    const closeEditingCell = () => {
        if (props.editMode !== 'row') {
            document.body.click();
        }
    };

    const createEvent = (event) => {
        return {
            first: getFirst(),
            rows: getRows(),
            sortField: getSortField(),
            sortOrder: getSortOrder(),
            multiSortMeta: getMultiSortMeta(),
            filters: getFilters(),
            ...event
        };
    };

    const processedData = (localState) => {
        let data = props.value || [];

        if (!props.lazy) {
            if (data && data.length) {
                const filters = (localState && localState.filters) || getFilters();
                const sortField = (localState && localState.sortField) || getSortField();
                const sortOrder = (localState && localState.sortOrder) || getSortOrder();
                const multiSortMeta = (localState && localState.multiSortMeta) || getMultiSortMeta();
                const columns = getColumns();
                const sortColumn = columns.find((col) => getColumnProp(col, 'field') === sortField);

                if (sortColumn) {
                    columnSortable.current = getColumnProp(sortColumn, 'sortable');
                    columnSortFunction.current = getColumnProp(sortColumn, 'sortFunction');
                }

                if (ObjectUtils.isNotEmpty(filters) || props.globalFilter) {
                    data = filterLocal(data, filters);
                }

                if (sortField || ObjectUtils.isNotEmpty(multiSortMeta)) {
                    if (props.sortMode === 'single') data = sortSingle(data, sortField, sortOrder);
                    else if (props.sortMode === 'multiple') data = sortMultiple(data, multiSortMeta);
                }
            }
        }

        return data;
    };

    const dataToRender = (data) => {
        if (data && props.paginator) {
            const first = props.lazy ? 0 : getFirst();

            return data.slice(first, first + getRows());
        }

        return data;
    };

    useMountEffect(() => {
        setAttributeSelectorState(UniqueComponentId());

        setFiltersState(cloneFilters(props.filters));
        setD_filtersState(cloneFilters(props.filters));

        if (isStateful()) {
            restoreState();

            if (props.resizableColumns) {
                restoreColumnWidths();
            }
        }
    });

    useUpdateEffect(() => {
        elementRef.current.setAttribute(attributeSelectorState, '');

        if (props.responsiveLayout === 'stack' && !props.scrollable) {
            createResponsiveStyle();
        }
    }, [attributeSelectorState]);

    useUpdateEffect(() => {
        const filters = cloneFilters(props.filters);

        setFiltersState(filters);
        setD_filtersState(cloneFilters(props.filters));

        if (props.onValueChange) {
            props.onValueChange(processedData({ filters }));
        }
    }, [props.filters]);

    useUpdateEffect(() => {
        if (isStateful()) {
            saveState();
        }
    });

    useUpdateEffect(() => {
        destroyResponsiveStyle();

        if (props.responsiveLayout === 'stack' && !props.scrollable) {
            createResponsiveStyle();
        }
    }, [props.responsiveLayout, props.scrollable]);

    useUpdateEffect(() => {
        if (props.globalFilter) {
            filter(props.globalFilter, 'global', props.globalFilterMatchMode);
        } else {
            // #3819 was filtering but now reset filter state
            setFiltersState(props.filters);
        }
    }, [props.globalFilter, props.globalFilterMatchMode]);

    useUnmountEffect(() => {
        unbindColumnResizeEvents();
        destroyStyleElement();
        destroyResponsiveStyle();
    });

    React.useImperativeHandle(ref, () => ({
        props,
        clearState,
        closeEditingCell,
        exportCSV,
        filter,
        reset,
        resetColumnOrder,
        resetScroll,
        restoreColumnWidths,
        restoreState,
        restoreTableState,
        saveState,
        getElement: () => elementRef.current,
        getTable: () => tableRef.current,
        getVirtualScroller: () => virtualScrollerRef.current
    }));

    const createLoader = () => {
        if (props.loading) {
            const iconClassName = classNames('p-datatable-loading-icon pi-spin', props.loadingIcon);

            return (
                <div className="p-datatable-loading-overlay p-component-overlay">
                    <i className={iconClassName} />
                </div>
            );
        }

        return null;
    };

    const createHeader = () => {
        if (props.header) {
            const content = ObjectUtils.getJSXElement(props.header, { props });

            return <div className="p-datatable-header">{content}</div>;
        }

        return null;
    };

    const createTableHeader = (options, empty) => {
        const sortField = getSortField();
        const sortOrder = getSortOrder();
        const multiSortMeta = [...getMultiSortMeta()];
        const groupRowSortField = getGroupRowSortField();
        const filters = d_filtersState;
        const filtersStore = (!props.onFilter && props.filters) || getFilters();
        const { items: processedData, columns } = options;

        return (
            <TableHeader
                value={processedData}
                tableProps={props}
                columns={columns}
                tabIndex={props.tabIndex}
                empty={empty}
                headerColumnGroup={props.headerColumnGroup}
                resizableColumns={props.resizableColumns}
                onColumnResizeStart={onColumnResizeStart}
                onColumnResizerClick={props.onColumnResizerClick}
                onColumnResizerDoubleClick={props.onColumnResizerDoubleClick}
                sortMode={props.sortMode}
                sortField={sortField}
                sortOrder={sortOrder}
                multiSortMeta={multiSortMeta}
                groupRowsBy={props.groupRowsBy}
                groupRowSortField={groupRowSortField}
                onSortChange={onSortChange}
                filterDisplay={props.filterDisplay}
                filters={filters}
                filtersStore={filtersStore}
                onFilterChange={onFilterChange}
                onFilterApply={onFilterApply}
                showSelectAll={props.showSelectAll}
                allRowsSelected={allRowsSelected}
                onColumnCheckboxChange={onColumnHeaderCheckboxChange}
                onColumnMouseDown={onColumnHeaderMouseDown}
                onColumnDragStart={onColumnHeaderDragStart}
                onColumnDragOver={onColumnHeaderDragOver}
                onColumnDragLeave={onColumnHeaderDragLeave}
                onColumnDrop={onColumnHeaderDrop}
                rowGroupMode={props.rowGroupMode}
                reorderableColumns={props.reorderableColumns}
            />
        );
    };

    const createTableBody = (options, selectionModeInColumn, empty, isVirtualScrollerDisabled) => {
        const first = getFirst();
        const { rows, columns, contentRef, className, itemSize } = options;

        const frozenBody = ObjectUtils.isNotEmpty(props.frozenValue) && (
            <TableBody
                ref={frozenBodyRef}
                value={props.frozenValue}
                className="p-datatable-frozen-tbody"
                frozenRow
                tableProps={props}
                tableSelector={attributeSelectorState}
                columns={columns}
                selectionModeInColumn={selectionModeInColumn}
                first={first}
                editingMeta={editingMetaState}
                onEditingMetaChange={onEditingMetaChange}
                tabIndex={props.tabIndex}
                onRowClick={props.onRowClick}
                onRowDoubleClick={props.onRowDoubleClick}
                onRowMouseEnter={props.onRowMouseEnter}
                onRowMouseLeave={props.onRowMouseLeave}
                onCellClick={props.onCellClick}
                selection={props.selection}
                onSelectionChange={props.onSelectionChange}
                lazy={props.lazy}
                paginator={props.paginator}
                onCellSelect={props.onCellSelect}
                onCellUnselect={props.onCellUnselect}
                onRowSelect={props.onRowSelect}
                onRowUnselect={props.onRowUnselect}
                dragSelection={props.dragSelection}
                onContextMenu={props.onContextMenu}
                onContextMenuSelectionChange={props.onContextMenuSelectionChange}
                metaKeySelection={props.metaKeySelection}
                selectionMode={props.selectionMode}
                cellSelection={props.cellSelection}
                contextMenuSelection={props.contextMenuSelection}
                dataKey={props.dataKey}
                expandedRows={props.expandedRows}
                onRowCollapse={props.onRowCollapse}
                onRowExpand={props.onRowExpand}
                onRowToggle={props.onRowToggle}
                editMode={props.editMode}
                editingRows={props.editingRows}
                onRowReorder={props.onRowReorder}
                reorderableRows={props.reorderableRows}
                scrollable={props.scrollable}
                rowGroupMode={props.rowGroupMode}
                groupRowsBy={props.groupRowsBy}
                expandableRowGroups={props.expandableRowGroups}
                loading={props.loading}
                emptyMessage={props.emptyMessage}
                rowGroupHeaderTemplate={props.rowGroupHeaderTemplate}
                rowExpansionTemplate={props.rowExpansionTemplate}
                rowGroupFooterTemplate={props.rowGroupFooterTemplate}
                onRowEditChange={props.onRowEditChange}
                compareSelectionBy={props.compareSelectionBy}
                selectOnEdit={props.selectOnEdit}
                onRowEditInit={props.onRowEditInit}
                rowEditValidator={props.rowEditValidator}
                onRowEditSave={props.onRowEditSave}
                onRowEditComplete={props.onRowEditComplete}
                onRowEditCancel={props.onRowEditCancel}
                cellClassName={props.cellClassName}
                responsiveLayout={props.responsiveLayout}
                selectionAutoFocus={props.selectionAutoFocus}
                isDataSelectable={props.isDataSelectable}
                showSelectionElement={props.showSelectionElement}
                showRowReorderElement={props.showRowReorderElement}
                expandedRowIcon={props.expandedRowIcon}
                collapsedRowIcon={props.collapsedRowIcon}
                rowClassName={props.rowClassName}
                virtualScrollerOptions={options}
                isVirtualScrollerDisabled={true}
            />
        );
        const body = (
            <TableBody
                ref={bodyRef}
                value={dataToRender(rows)}
                className={className}
                empty={empty}
                frozenRow={false}
                tableProps={props}
                tableSelector={attributeSelectorState}
                columns={columns}
                selectionModeInColumn={selectionModeInColumn}
                first={first}
                editingMeta={editingMetaState}
                onEditingMetaChange={onEditingMetaChange}
                tabIndex={props.tabIndex}
                onRowClick={props.onRowClick}
                onRowDoubleClick={props.onRowDoubleClick}
                onRowMouseEnter={props.onRowMouseEnter}
                onRowMouseLeave={props.onRowMouseLeave}
                onCellClick={props.onCellClick}
                selection={props.selection}
                onSelectionChange={props.onSelectionChange}
                lazy={props.lazy}
                paginator={props.paginator}
                onCellSelect={props.onCellSelect}
                onCellUnselect={props.onCellUnselect}
                onRowSelect={props.onRowSelect}
                onRowUnselect={props.onRowUnselect}
                dragSelection={props.dragSelection}
                onContextMenu={props.onContextMenu}
                onContextMenuSelectionChange={props.onContextMenuSelectionChange}
                metaKeySelection={props.metaKeySelection}
                selectionMode={props.selectionMode}
                cellSelection={props.cellSelection}
                contextMenuSelection={props.contextMenuSelection}
                dataKey={props.dataKey}
                expandedRows={props.expandedRows}
                onRowCollapse={props.onRowCollapse}
                onRowExpand={props.onRowExpand}
                onRowToggle={props.onRowToggle}
                editMode={props.editMode}
                editingRows={props.editingRows}
                onRowReorder={props.onRowReorder}
                reorderableRows={props.reorderableRows}
                scrollable={props.scrollable}
                rowGroupMode={props.rowGroupMode}
                groupRowsBy={props.groupRowsBy}
                expandableRowGroups={props.expandableRowGroups}
                loading={props.loading}
                emptyMessage={props.emptyMessage}
                rowGroupHeaderTemplate={props.rowGroupHeaderTemplate}
                rowExpansionTemplate={props.rowExpansionTemplate}
                rowGroupFooterTemplate={props.rowGroupFooterTemplate}
                onRowEditChange={props.onRowEditChange}
                compareSelectionBy={props.compareSelectionBy}
                selectOnEdit={props.selectOnEdit}
                onRowEditInit={props.onRowEditInit}
                rowEditValidator={props.rowEditValidator}
                onRowEditSave={props.onRowEditSave}
                onRowEditComplete={props.onRowEditComplete}
                onRowEditCancel={props.onRowEditCancel}
                cellClassName={props.cellClassName}
                responsiveLayout={props.responsiveLayout}
                selectionAutoFocus={props.selectionAutoFocus}
                isDataSelectable={props.isDataSelectable}
                showSelectionElement={props.showSelectionElement}
                showRowReorderElement={props.showRowReorderElement}
                expandedRowIcon={props.expandedRowIcon}
                collapsedRowIcon={props.collapsedRowIcon}
                rowClassName={props.rowClassName}
                virtualScrollerContentRef={contentRef}
                virtualScrollerOptions={options}
                isVirtualScrollerDisabled={isVirtualScrollerDisabled}
            />
        );

        return (
            <>
                {frozenBody}
                {body}
            </>
        );
    };

    const createTableFooter = (options) => {
        const { columns } = options;

        return <TableFooter tableProps={props} columns={columns} footerColumnGroup={props.footerColumnGroup} />;
    };

    const createContent = (processedData, columns, selectionModeInColumn, empty) => {
        if (!columns) return;

        const _isVirtualScrollerDisabled = isVirtualScrollerDisabled();
        const virtualScrollerOptions = props.virtualScrollerOptions || {};

        return (
            <div ref={wrapperRef} className="p-datatable-wrapper" style={{ maxHeight: _isVirtualScrollerDisabled ? props.scrollHeight : null }}>
                <VirtualScroller
                    ref={virtualScrollerRef}
                    {...virtualScrollerOptions}
                    items={processedData}
                    columns={columns}
                    style={{ ...virtualScrollerOptions.style, ...{ height: props.scrollHeight !== 'flex' ? props.scrollHeight : undefined } }}
                    scrollHeight={props.scrollHeight !== 'flex' ? undefined : '100%'}
                    disabled={_isVirtualScrollerDisabled}
                    loaderDisabled
                    showSpacer={false}
                    contentTemplate={(options) => {
                        const ref = (el) => {
                            tableRef.current = el;
                            options.spacerRef && options.spacerRef(el);
                        };

                        const tableClassName = classNames('p-datatable-table', props.tableClassName);
                        const tableHeader = createTableHeader(options, empty);
                        const tableBody = createTableBody(options, selectionModeInColumn, empty, _isVirtualScrollerDisabled);
                        const tableFooter = createTableFooter(options);

                        return (
                            <table ref={ref} style={props.tableStyle} className={tableClassName} role="table">
                                {tableHeader}
                                {tableBody}
                                {tableFooter}
                            </table>
                        );
                    }}
                />
            </div>
        );
    };

    const createFooter = () => {
        if (props.footer) {
            const content = ObjectUtils.getJSXElement(props.footer, { props });

            return <div className="p-datatable-footer">{content}</div>;
        }

        return null;
    };

    const createPaginator = (position, totalRecords) => {
        const className = classNames('p-paginator-' + position, props.paginatorClassName);

        return (
            <Paginator
                first={getFirst()}
                rows={getRows()}
                pageLinkSize={props.pageLinkSize}
                className={className}
                onPageChange={onPageChange}
                template={props.paginatorTemplate}
                totalRecords={totalRecords}
                rowsPerPageOptions={props.rowsPerPageOptions}
                currentPageReportTemplate={props.currentPageReportTemplate}
                leftContent={props.paginatorLeft}
                rightContent={props.paginatorRight}
                alwaysShow={props.alwaysShowPaginator}
                dropdownAppendTo={props.paginatorDropdownAppendTo}
            />
        );
    };

    const createPaginatorTop = (totalRecords) => {
        if (props.paginator && props.paginatorPosition !== 'bottom') {
            return createPaginator('top', totalRecords);
        }

        return null;
    };

    const createPaginatorBottom = (totalRecords) => {
        if (props.paginator && props.paginatorPosition !== 'top') {
            return createPaginator('bottom', totalRecords);
        }

        return null;
    };

    const createResizeHelper = () => {
        if (props.resizableColumns) {
            return <div ref={resizeHelperRef} className="p-column-resizer-helper" style={{ display: 'none' }}></div>;
        }

        return null;
    };

    const createReorderIndicators = () => {
        if (props.reorderableColumns) {
            const style = { position: 'absolute', display: 'none' };

            return (
                <>
                    <span ref={reorderIndicatorUpRef} className="pi pi-arrow-down p-datatable-reorder-indicator-up" style={style}></span>
                    <span ref={reorderIndicatorDownRef} className="pi pi-arrow-up p-datatable-reorder-indicator-down" style={style}></span>
                </>
            );
        }

        return null;
    };

    const data = processedData();
    const columns = getColumns();
    const totalRecords = getTotalRecords(data);
    const empty = ObjectUtils.isEmpty(data);
    const selectionModeInColumn = getSelectionModeInColumn(columns);
    const selectable = props.selectionMode || selectionModeInColumn;
    const otherProps = DataTableBase.getOtherProps(props);
    const className = classNames(
        'p-datatable p-component',
        {
            'p-datatable-hoverable-rows': props.rowHover,
            'p-datatable-selectable': selectable && !props.cellSelection,
            'p-datatable-selectable-cell': selectable && props.cellSelection,
            'p-datatable-auto-layout': props.autoLayout,
            'p-datatable-resizable': props.resizableColumns,
            'p-datatable-resizable-fit': props.resizableColumns && props.columnResizeMode === 'fit',
            'p-datatable-scrollable': props.scrollable,
            'p-datatable-scrollable-vertical': props.scrollable && props.scrollDirection === 'vertical',
            'p-datatable-scrollable-horizontal': props.scrollable && props.scrollDirection === 'horizontal',
            'p-datatable-scrollable-both': props.scrollable && props.scrollDirection === 'both',
            'p-datatable-flex-scrollable': props.scrollable && props.scrollHeight === 'flex',
            'p-datatable-responsive-stack': props.responsiveLayout === 'stack',
            'p-datatable-responsive-scroll': props.responsiveLayout === 'scroll',
            'p-datatable-striped': props.stripedRows,
            'p-datatable-gridlines': props.showGridlines,
            'p-datatable-grouped-header': props.headerColumnGroup != null,
            'p-datatable-grouped-footer': props.footerColumnGroup != null,
            'p-datatable-sm': props.size === 'small',
            'p-datatable-lg': props.size === 'large'
        },
        props.className
    );

    const loader = createLoader();
    const header = createHeader();
    const paginatorTop = createPaginatorTop(totalRecords);
    const content = createContent(data, columns, selectionModeInColumn, empty);
    const paginatorBottom = createPaginatorBottom(totalRecords);
    const footer = createFooter();
    const resizeHelper = createResizeHelper();
    const reorderIndicators = createReorderIndicators();

    return (
        <div ref={elementRef} id={props.id} className={className} style={props.style} {...otherProps} data-scrollselectors=".p-datatable-wrapper">
            {loader}
            {header}
            {paginatorTop}
            {content}
            {paginatorBottom}
            {footer}
            {resizeHelper}
            {reorderIndicators}
        </div>
    );
});

DataTable.displayName = 'DataTable';
