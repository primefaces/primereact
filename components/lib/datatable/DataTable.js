import * as React from 'react';
import PrimeReact, { FilterMatchMode, FilterOperator, FilterService, PrimeReactContext } from '../api/Api';
import { ColumnBase } from '../column/ColumnBase';
import { useHandleStyle } from '../componentbase/ComponentBase';
import { useEventListener, useMergeProps, useMountEffect, useUnmountEffect, useUpdateEffect } from '../hooks/Hooks';
import { ArrowDownIcon } from '../icons/arrowdown';
import { ArrowUpIcon } from '../icons/arrowup';
import { SpinnerIcon } from '../icons/spinner';
import { Paginator } from '../paginator/Paginator';
import { DomHandler, IconUtils, ObjectUtils, UniqueComponentId, classNames } from '../utils/Utils';
import { VirtualScroller } from '../virtualscroller/VirtualScroller';
import { DataTableBase } from './DataTableBase';
import { TableBody } from './TableBody';
import { TableFooter } from './TableFooter';
import { TableHeader } from './TableHeader';

export const DataTable = React.forwardRef((inProps, ref) => {
    const context = React.useContext(PrimeReactContext);
    const mergeProps = useMergeProps();
    const props = DataTableBase.getProps(inProps, context);
    const [firstState, setFirstState] = React.useState(props.first);
    const [rowsState, setRowsState] = React.useState(props.rows);
    const [sortFieldState, setSortFieldState] = React.useState(props.sortField);
    const [sortOrderState, setSortOrderState] = React.useState(props.sortOrder);
    const [multiSortMetaState, setMultiSortMetaState] = React.useState(props.multiSortMeta);
    const [filtersState, setFiltersState] = React.useState(props.filters);
    const [columnOrderState, setColumnOrderState] = React.useState([]);
    const [groupRowsSortMetaState, setGroupRowsSortMetaState] = React.useState(null);
    const [editingMetaState, setEditingMetaState] = React.useState({});
    const [d_rowsState, setD_rowsState] = React.useState(props.rows);
    const [d_filtersState, setD_filtersState] = React.useState({});
    const metaData = {
        props,
        state: {
            first: firstState,
            rows: rowsState,
            sortField: sortFieldState,
            sortOrder: sortOrderState,
            multiSortMeta: multiSortMetaState,
            filters: filtersState,
            columnOrder: columnOrderState,
            groupRowsSortMeta: groupRowsSortMetaState,
            editingMeta: editingMetaState,
            d_rows: d_rowsState,
            d_filters: d_filtersState
        },
        context: {
            scrollable: props.scrollable
        }
    };
    const ptCallbacks = DataTableBase.setMetaData(metaData);

    useHandleStyle(DataTableBase.css.styles, ptCallbacks.isUnstyled, { name: 'datatable' });
    const attributeSelector = React.useRef('');
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
    const beforeResizeStyleElement = React.useRef(null);

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
        let headers = DomHandler.find(elementRef.current, '[data-pc-section="thead"] > tr > th');

        headers.forEach((header) => widths.push(DomHandler.getOuterWidth(header)));
        state.columnWidths = widths.join(',');

        if (props.columnResizeMode === 'expand') {
            state.tableWidth = DomHandler.getOuterWidth(tableRef.current) + 'px';
        }
    };

    const addColumnWidthStyles = (widths) => {
        createStyleElement();
        let innerHTML = '';
        let selector = `[data-pc-name="datatable"][${attributeSelector.current}] > [data-pc-section="wrapper"] ${isVirtualScrollerDisabled() ? '' : '> [data-pc-name="virtualscroller"]'} > [data-pc-section="table"]`;

        widths.forEach((width, index) => {
            let style = `width: ${width}px !important; max-width: ${width}px !important`;

            innerHTML += `
                ${selector} > [data-pc-section="thead"] > tr > th:nth-child(${index + 1}),
                ${selector} > [data-pc-section="tbody"] > tr > td:nth-child(${index + 1}),
                ${selector} > [data-pc-section="tfoot"] > tr > td:nth-child(${index + 1}) {
                    ${style}
                }
            `;
        });

        styleElement.current.innerHTML = innerHTML;
    };

    const restoreColumnWidths = () => {
        if (columnWidthsState.current) {
            let widths = columnWidthsState.current.split(',');

            if (props.columnResizeMode === 'expand' && tableWidthState.current) {
                tableRef.current.style.width = tableWidthState.current;
                tableRef.current.style.minWidth = tableWidthState.current;
            }

            if (ObjectUtils.isNotEmpty(widths)) {
                addColumnWidthStyles(widths);
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

            return ObjectUtils.isNotEmpty(selectableVal) && props.selection && selectableVal.every((sv) => ObjectUtils.isArray(props.selection) && props.selection.some((s) => isEquals(s, sv)));
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
        createBeforeResizeStyleElement();
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

        elementRef.current.setAttribute('data-p-unselectable-text', true);

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

                // https://github.com/primefaces/primereact/issues/3970 Reasoning: resize table cells before updating the table width so that it can use existing computed cell widths and adjust only the one column.
                resizeTableCells(newColumnWidth);
                updateTableWidth(tableRef.current);

                if (!isVirtualScrollerDisabled()) {
                    updateTableWidth(bodyRef.current);
                    updateTableWidth(frozenBodyRef.current);

                    if (wrapperRef.current) {
                        updateTableWidth(DomHandler.findSingle(wrapperRef.current, '[data-pc-name="virtualscroller"] > table > tbody'));
                    }
                }
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
        elementRef.current.setAttribute('data-p-unselectable-text', 'true');
        destroyBeforeResizeStyleElement();
        unbindColumnResizeEvents();
    };

    const resizeTableCells = (newColumnWidth, nextColumnWidth) => {
        let widths = [];
        let colIndex = DomHandler.index(resizeColumnElement.current);
        let headers = DomHandler.find(tableRef.current, '[data-pc-section="thead"] > tr > th');

        headers.forEach((header) => widths.push(DomHandler.getOuterWidth(header)));

        destroyStyleElement();
        createStyleElement();

        let innerHTML = '';
        let selector = `[data-pc-name="datatable"][${attributeSelector.current}] > [data-pc-section="wrapper"] ${isVirtualScrollerDisabled() ? '' : '> [data-pc-name="virtualscroller"]'} > [data-pc-section="table"]`;

        widths.forEach((width, index) => {
            let colWidth = index === colIndex ? newColumnWidth : nextColumnWidth && index === colIndex + 1 ? nextColumnWidth : width;
            let style = `width: ${colWidth}px !important; max-width: ${colWidth}px !important`;

            innerHTML += `
                 ${selector} > [data-pc-section="thead"] > tr > th:nth-child(${index + 1}),
                ${selector} > [data-pc-section="tbody"] > tr > td:nth-child(${index + 1}),
                ${selector} > [data-pc-section="tfoot"] > tr > td:nth-child(${index + 1}) {
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
            if (event.target.nodeName === 'INPUT' || event.target.nodeName === 'TEXTAREA' || DomHandler.getAttribute(event.target, '[data-pc-section="columnresizer"]')) event.currentTarget.draggable = false;
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
                let dragIndex = DomHandler.index(draggedColumnElement.current);
                let dropIndex = DomHandler.index(findParentHeader(event.currentTarget));

                reorderIndicatorUpRef.current.style.top = dropHeaderOffset.top - containerOffset.top - (colReorderIconHeight.current - 1) + 'px';
                reorderIndicatorDownRef.current.style.top = dropHeaderOffset.top - containerOffset.top + dropHeader.offsetHeight + 'px';

                if (event.pageX > columnCenter && dragIndex < dropIndex) {
                    reorderIndicatorUpRef.current.style.left = targetLeft + dropHeader.offsetWidth - Math.ceil(colReorderIconWidth.current / 2) + 'px';
                    reorderIndicatorDownRef.current.style.left = targetLeft + dropHeader.offsetWidth - Math.ceil(colReorderIconWidth.current / 2) + 'px';
                    dropPosition.current = 1;
                } else if (dragIndex > dropIndex) {
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
                let widths = [];
                let headers = DomHandler.find(tableRef.current, '[data-pc-section="thead"] > tr > th');

                headers.forEach((header) => widths.push(DomHandler.getOuterWidth(header)));
                const movedItem = widths.find((items, index) => index === dragColIndex);
                const remainingItems = widths.filter((items, index) => index !== dragColIndex);
                const reorderedWidths = [...remainingItems.slice(0, dropColIndex), movedItem, ...remainingItems.slice(dropColIndex)];

                addColumnWidthStyles(reorderedWidths);

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

    const createBeforeResizeStyleElement = () => {
        beforeResizeStyleElement.current = DomHandler.createInlineStyle((context && context.nonce) || PrimeReact.nonce, context && context.styleContainer);
        let innerHTML = `
[data-pc-name="datatable"][${attributeSelector.current}] {
    user-select:none;
}
        `;

        beforeResizeStyleElement.current.innerHTML = innerHTML;
    };

    const createStyleElement = () => {
        styleElement.current = DomHandler.createInlineStyle((context && context.nonce) || PrimeReact.nonce, context && context.styleContainer);
    };

    const createResponsiveStyle = () => {
        if (!responsiveStyleElement.current) {
            responsiveStyleElement.current = DomHandler.createInlineStyle((context && context.nonce) || PrimeReact.nonce, context && context.styleContainer);

            let tableSelector = `.p-datatable-wrapper ${isVirtualScrollerDisabled() ? '' : '> .p-virtualscroller'} > .p-datatable-table`;
            let selector = `.p-datatable[${attributeSelector.current}] > ${tableSelector}`;
            let gridLinesSelector = `.p-datatable[${attributeSelector.current}].p-datatable-gridlines > ${tableSelector}`;
            let innerHTML = `
@media screen and (max-width: ${props.breakpoint}) {
    ${selector} > .p-datatable-thead > tr > th,
    ${selector} > .p-datatable-tfoot > tr > td {
        display: none;
    }

    ${selector} > .p-datatable-tbody > tr > td {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: space-between;
    }

    ${selector} > .p-datatable-tbody > tr > td:not(:last-child) {
        border: 0 none;
    }

    ${gridLinesSelector} > .p-datatable-tbody > tr > td:last-child {
        border-top: 0;
        border-right: 0;
        border-left: 0;
    }

    ${selector} > .p-datatable-tbody > tr > td > .p-column-title {
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

    const destroyBeforeResizeStyleElement = () => {
        beforeResizeStyleElement.current = DomHandler.removeInlineStyle(beforeResizeStyleElement.current);
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

    const compareValuesOnSort = (value1, value2, comparator, order) => {
        return ObjectUtils.sort(value1, value2, order, comparator, (context && context.nullSortOrder) || PrimeReact.nullSortOrder);
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
            // performance optimization to prevent resolving field data in each loop
            const lookupMap = new Map();
            const comparator = ObjectUtils.localeComparator((context && context.locale) || PrimeReact.locale);

            for (let item of data) {
                lookupMap.set(item, ObjectUtils.resolveFieldData(item, field));
            }

            value.sort((data1, data2) => {
                const value1 = lookupMap.get(data1);
                const value2 = lookupMap.get(data2);

                return compareValuesOnSort(value1, value2, comparator, order);
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
            const comparator = ObjectUtils.localeComparator((context && context.locale) || PrimeReact.locale);

            value.sort((data1, data2) => {
                return multisortField(data1, data2, multiSortMeta, 0, comparator);
            });
        }

        return value;
    };

    const multisortField = (data1, data2, multiSortMeta, index, comparator) => {
        if (!multiSortMeta || !multiSortMeta[index]) {
            return;
        }

        const value1 = ObjectUtils.resolveFieldData(data1, multiSortMeta[index].field);
        const value2 = ObjectUtils.resolveFieldData(data2, multiSortMeta[index].field);

        // check if they are equal handling dates and locales
        if (ObjectUtils.compare(value1, value2, comparator) === 0) {
            return multiSortMeta.length - 1 > index ? multisortField(data1, data2, multiSortMeta, index + 1, comparator) : 0;
        }

        return compareValuesOnSort(value1, value2, comparator, multiSortMeta[index].order);
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

    const getActiveFilters = (filters) => {
        const removeEmptyFilters = ([key, value]) => {
            if (value.constraints) {
                const filteredConstraints = value.constraints.filter((constraint) => constraint.value !== null);

                if (filteredConstraints.length > 0) {
                    return [key, { ...value, constraints: filteredConstraints }];
                }
            } else if (value.value !== null) {
                return [key, value];
            }

            return undefined;
        };

        const filterValidEntries = (entry) => entry !== undefined;
        const entries = Object.entries(filters).map(removeEmptyFilters).filter(filterValidEntries);

        return Object.fromEntries(entries);
    };

    const filterLocal = (data, filters) => {
        if (!data) return;

        let activeFilters = filters ? getActiveFilters(filters) : {};

        let columns = getColumns();
        let filteredValue = [];

        let isGlobalFilter = activeFilters['global'] || props.globalFilter;
        let globalFilterFieldsArray;

        if (isGlobalFilter) {
            globalFilterFieldsArray = props.globalFilterFields || columns.filter((col) => !getColumnProp(col, 'excludeGlobalFilter')).map((col) => getColumnProp(col, 'filterField') || getColumnProp(col, 'field'));
        }

        for (let i = 0; i < data.length; i++) {
            let localMatch = true;
            let globalMatch = false;
            let localFiltered = false;

            for (let prop in activeFilters) {
                if (prop === 'null') {
                    continue;
                }

                if (Object.prototype.hasOwnProperty.call(activeFilters, prop) && prop !== 'global') {
                    localFiltered = true;
                    let filterField = prop;
                    let filterMeta = activeFilters[filterField];

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

            if (localMatch && isGlobalFilter && !globalMatch && globalFilterFieldsArray) {
                for (let j = 0; j < globalFilterFieldsArray.length; j++) {
                    let globalFilterField = globalFilterFieldsArray[j];
                    let matchMode = activeFilters['global'] ? activeFilters['global'].matchMode : props.globalFilterMatchMode;
                    let value = activeFilters['global'] ? activeFilters['global'].value : props.globalFilter;

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

        if (filteredValue.length === props.value.length || Object.keys(activeFilters).length === 0) {
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
                const matchMode =
                    getColumnProp(col, 'filterMatchMode') ||
                    ((context && context.filterMatchModeOptions[dataType]) || PrimeReact.filterMatchModeOptions[dataType]
                        ? (context && context.filterMatchModeOptions[dataType][0]) || PrimeReact.filterMatchModeOptions[dataType][0]
                        : FilterMatchMode.STARTS_WITH);
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
            const scrollableContainer = !isVirtualScrollerDisabled() ? DomHandler.findSingle(wrapperRef.current, '[data-pc-name="virtualscroller"]') : wrapperRef.current;

            scrollableContainer.scrollTo(0, 0);
        }
    };

    const resetResizeColumnsWidth = () => {
        destroyStyleElement();
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
            const [field, header, exportHeader, exportable] = [getColumnProp(column, 'field'), getColumnProp(column, 'header'), getColumnProp(column, 'exportHeader'), getColumnProp(column, 'exportable')];

            if (exportable && field) {
                const columnHeader = String(exportHeader || header || field)
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

    const closeEditingRows = () => {
        DomHandler.find(document.body, '[data-pc-section="roweditorcancelbuttonprops"]').forEach((button, index) => {
            setTimeout(() => {
                button.click();
            }, index * 5);
        });
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
        if (elementRef.current) {
            attributeSelector.current = UniqueComponentId();
            elementRef.current.setAttribute(attributeSelector.current, '');
        }

        //setFiltersState(cloneFilters(props.filters)); // Github #4248
        setD_filtersState(cloneFilters(props.filters));

        if (isStateful()) {
            restoreState();

            if (props.resizableColumns) {
                restoreColumnWidths();
            }
        }
    });

    useUpdateEffect(() => {
        if (props.responsiveLayout === 'stack' && !props.scrollable) {
            createResponsiveStyle();
        }

        return () => {
            destroyResponsiveStyle();
        };
    }, [props.breakpoint]);

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
        destroyBeforeResizeStyleElement();
    });

    React.useImperativeHandle(ref, () => ({
        props,
        clearState,
        closeEditingCell,
        closeEditingRows,
        exportCSV,
        filter,
        reset,
        resetColumnOrder,
        resetScroll,
        resetResizeColumnsWidth,
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
            const loadingIconProps = mergeProps(
                {
                    className: ptCallbacks.cx('loadingIcon')
                },
                ptCallbacks.ptm('loadingIcon')
            );
            const icon = props.loadingIcon || <SpinnerIcon {...loadingIconProps} spin />;
            const loadingIcon = IconUtils.getJSXIcon(icon, { ...loadingIconProps }, { props });
            const loadingOverlayProps = mergeProps(
                {
                    className: ptCallbacks.cx('loadingOverlay')
                },
                ptCallbacks.ptm('loadingOverlay')
            );

            return <div {...loadingOverlayProps}>{loadingIcon}</div>;
        }

        return null;
    };

    const createHeader = () => {
        if (props.header) {
            const content = ObjectUtils.getJSXElement(props.header, { props });
            const headerProps = mergeProps(
                {
                    className: ptCallbacks.cx('header')
                },
                ptCallbacks.ptm('header')
            );

            return <div {...headerProps}>{content}</div>;
        }

        return null;
    };

    const createTableHeader = (options, empty, _isVirtualScrollerDisabled) => {
        if (props.showHeaders === false) {
            return null;
        }

        const sortField = getSortField();
        const sortOrder = getSortOrder();
        const multiSortMeta = [...getMultiSortMeta()];
        const groupRowSortField = getGroupRowSortField();
        const filters = d_filtersState;
        const filtersStore = (!props.onFilter && props.filters) || getFilters();
        const { items: processedData, props: virtualScrollerProps, columns } = options;
        const data = _isVirtualScrollerDisabled || virtualScrollerProps.lazy ? processedData : virtualScrollerProps.items;

        return (
            <TableHeader
                hostName="DataTable"
                value={data}
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
                sortIcon={props.sortIcon}
                sortOrder={sortOrder}
                multiSortMeta={multiSortMeta}
                groupRowsBy={props.groupRowsBy}
                groupRowSortField={groupRowSortField}
                onSortChange={onSortChange}
                filterDisplay={props.filterDisplay}
                filters={filters}
                filtersStore={filtersStore}
                filterIcon={props.filterIcon}
                filterClearIcon={props.filterClearIcon}
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
                ptCallbacks={ptCallbacks}
                metaData={metaData}
                unstyled={props.unstyled}
            />
        );
    };

    const createTableBody = (options, selectionModeInColumn, empty, isVirtualScrollerDisabled) => {
        const first = getFirst();
        const { rows, columns, contentRef, style, className, spacerStyle, itemSize } = options;

        const frozenBody = ObjectUtils.isNotEmpty(props.frozenValue) && (
            <TableBody
                hostName="DataTable"
                ref={frozenBodyRef}
                cellClassName={props.cellClassName}
                cellSelection={props.cellSelection}
                checkIcon={props.checkIcon}
                className="p-datatable-tbody p-datatable-frozen-tbody"
                collapsedRowIcon={props.collapsedRowIcon}
                columns={columns}
                compareSelectionBy={props.compareSelectionBy}
                contextMenuSelection={props.contextMenuSelection}
                dataKey={props.dataKey}
                dragSelection={props.dragSelection}
                editMode={props.editMode}
                editingMeta={editingMetaState}
                editingRows={props.editingRows}
                emptyMessage={props.emptyMessage}
                expandableRowGroups={props.expandableRowGroups}
                expandedRowIcon={props.expandedRowIcon}
                expandedRows={props.expandedRows}
                first={first}
                frozenRow
                groupRowsBy={props.groupRowsBy}
                isDataSelectable={props.isDataSelectable}
                isVirtualScrollerDisabled={true}
                lazy={props.lazy}
                loading={props.loading}
                metaKeySelection={props.metaKeySelection}
                onCellClick={props.onCellClick}
                onCellSelect={props.onCellSelect}
                onCellUnselect={props.onCellUnselect}
                onContextMenu={props.onContextMenu}
                onContextMenuSelectionChange={props.onContextMenuSelectionChange}
                onEditingMetaChange={onEditingMetaChange}
                onRowClick={props.onRowClick}
                onRowCollapse={props.onRowCollapse}
                onRowDoubleClick={props.onRowDoubleClick}
                onRowPointerDown={props.onRowPointerDown}
                onRowPointerUp={props.onRowPointerUp}
                onRowEditCancel={props.onRowEditCancel}
                onRowEditChange={props.onRowEditChange}
                onRowEditComplete={props.onRowEditComplete}
                onRowEditInit={props.onRowEditInit}
                onRowEditSave={props.onRowEditSave}
                onRowExpand={props.onRowExpand}
                onRowMouseEnter={props.onRowMouseEnter}
                onRowMouseLeave={props.onRowMouseLeave}
                onRowReorder={props.onRowReorder}
                onRowSelect={props.onRowSelect}
                onRowToggle={props.onRowToggle}
                onRowUnselect={props.onRowUnselect}
                onSelectionChange={props.onSelectionChange}
                paginator={props.paginator}
                reorderableRows={props.reorderableRows}
                responsiveLayout={props.responsiveLayout}
                rowClassName={props.rowClassName}
                rowEditValidator={props.rowEditValidator}
                rowEditorCancelIcon={props.rowEditorCancelIcon}
                rowEditorInitIcon={props.rowEditorInitIcon}
                rowEditorSaveIcon={props.rowEditorSaveIcon}
                rowExpansionTemplate={props.rowExpansionTemplate}
                rowGroupFooterTemplate={props.rowGroupFooterTemplate}
                rowGroupHeaderTemplate={props.rowGroupHeaderTemplate}
                rowGroupMode={props.rowGroupMode}
                scrollable={props.scrollable}
                selectOnEdit={props.selectOnEdit}
                selection={props.selection}
                selectionAutoFocus={props.selectionAutoFocus}
                selectionMode={props.selectionMode}
                selectionModeInColumn={selectionModeInColumn}
                showRowReorderElement={props.showRowReorderElement}
                showSelectionElement={props.showSelectionElement}
                tabIndex={props.tabIndex}
                tableProps={props}
                tableSelector={attributeSelector.current}
                value={props.frozenValue}
                virtualScrollerOptions={options}
                ptCallbacks={ptCallbacks}
                metaData={metaData}
            />
        );
        const body = (
            <TableBody
                hostName="DataTable"
                ref={bodyRef}
                cellClassName={props.cellClassName}
                cellSelection={props.cellSelection}
                checkIcon={props.checkIcon}
                className={classNames('p-datatable-tbody', className)}
                collapsedRowIcon={props.collapsedRowIcon}
                columns={columns}
                compareSelectionBy={props.compareSelectionBy}
                contextMenuSelection={props.contextMenuSelection}
                dataKey={props.dataKey}
                dragSelection={props.dragSelection}
                editMode={props.editMode}
                editingMeta={editingMetaState}
                editingRows={props.editingRows}
                empty={empty}
                emptyMessage={props.emptyMessage}
                expandableRowGroups={props.expandableRowGroups}
                expandedRowIcon={props.expandedRowIcon}
                expandedRows={props.expandedRows}
                first={first}
                frozenRow={false}
                groupRowsBy={props.groupRowsBy}
                isDataSelectable={props.isDataSelectable}
                isVirtualScrollerDisabled={isVirtualScrollerDisabled}
                lazy={props.lazy}
                loading={props.loading}
                metaKeySelection={props.metaKeySelection}
                onCellClick={props.onCellClick}
                onCellSelect={props.onCellSelect}
                onCellUnselect={props.onCellUnselect}
                onContextMenu={props.onContextMenu}
                onContextMenuSelectionChange={props.onContextMenuSelectionChange}
                onEditingMetaChange={onEditingMetaChange}
                onRowClick={props.onRowClick}
                onRowCollapse={props.onRowCollapse}
                onRowDoubleClick={props.onRowDoubleClick}
                onRowEditCancel={props.onRowEditCancel}
                onRowEditChange={props.onRowEditChange}
                onRowEditComplete={props.onRowEditComplete}
                onRowEditInit={props.onRowEditInit}
                onRowEditSave={props.onRowEditSave}
                onRowExpand={props.onRowExpand}
                onRowMouseEnter={props.onRowMouseEnter}
                onRowMouseLeave={props.onRowMouseLeave}
                onRowPointerDown={props.onRowPointerDown}
                onRowPointerUp={props.onRowPointerUp}
                onRowReorder={props.onRowReorder}
                onRowSelect={props.onRowSelect}
                onRowToggle={props.onRowToggle}
                onRowUnselect={props.onRowUnselect}
                onSelectionChange={props.onSelectionChange}
                paginator={props.paginator}
                reorderableRows={props.reorderableRows}
                responsiveLayout={props.responsiveLayout}
                rowClassName={props.rowClassName}
                rowEditValidator={props.rowEditValidator}
                rowEditorCancelIcon={props.rowEditorCancelIcon}
                rowEditorInitIcon={props.rowEditorInitIcon}
                rowEditorSaveIcon={props.rowEditorSaveIcon}
                rowExpansionTemplate={props.rowExpansionTemplate}
                rowGroupFooterTemplate={props.rowGroupFooterTemplate}
                rowGroupHeaderTemplate={props.rowGroupHeaderTemplate}
                rowGroupMode={props.rowGroupMode}
                scrollable={props.scrollable}
                selectOnEdit={props.selectOnEdit}
                selection={props.selection}
                selectionAutoFocus={props.selectionAutoFocus}
                selectionMode={props.selectionMode}
                selectionModeInColumn={selectionModeInColumn}
                showRowReorderElement={props.showRowReorderElement}
                showSelectionElement={props.showSelectionElement}
                style={style}
                tabIndex={props.tabIndex}
                tableProps={props}
                tableSelector={attributeSelector.current}
                value={dataToRender(rows)}
                virtualScrollerContentRef={contentRef}
                virtualScrollerOptions={options}
                ptCallbacks={ptCallbacks}
                metaData={metaData}
            />
        );
        const spacerBody = ObjectUtils.isNotEmpty(spacerStyle) ? (
            <TableBody hostName="DataTable" style={{ height: `calc(${spacerStyle.height} - ${rows.length * itemSize}px)` }} className="p-datatable-virtualscroller-spacer" ptCallbacks={ptCallbacks} metaData={metaData} />
        ) : null;

        return (
            <>
                {frozenBody}
                {body}
                {spacerBody}
            </>
        );
    };

    const createTableFooter = (options) => {
        const { columns } = options;

        return <TableFooter hostName="DataTable" tableProps={props} columns={columns} footerColumnGroup={props.footerColumnGroup} ptCallbacks={ptCallbacks} metaData={metaData} />;
    };

    const createContent = (processedData, columns, selectionModeInColumn, empty) => {
        if (!columns) return;

        const _isVirtualScrollerDisabled = isVirtualScrollerDisabled();
        const virtualScrollerOptions = props.virtualScrollerOptions || {};
        const wrapperProps = mergeProps(
            {
                className: ptCallbacks.cx('wrapper'),
                style: { ...ptCallbacks.sx('wrapper'), maxHeight: _isVirtualScrollerDisabled ? props.scrollHeight : null }
            },
            ptCallbacks.ptm('wrapper')
        );

        return (
            <div ref={wrapperRef} {...wrapperProps}>
                <VirtualScroller
                    ref={virtualScrollerRef}
                    {...virtualScrollerOptions}
                    items={processedData}
                    columns={columns}
                    style={{ ...virtualScrollerOptions.style, ...{ height: props.scrollHeight !== 'flex' ? props.scrollHeight : undefined } }}
                    scrollHeight={props.scrollHeight !== 'flex' ? undefined : '100%'}
                    disabled={_isVirtualScrollerDisabled}
                    loaderDisabled
                    inline
                    autoSize
                    pt={ptCallbacks.ptm('virtualScroller')}
                    __parentMetadata={{ parent: metaData }}
                    showSpacer={false}
                    contentTemplate={(options) => {
                        const ref = (el) => {
                            tableRef.current = el;
                            options.spacerRef && options.spacerRef(el);
                        };

                        const tableHeader = createTableHeader(options, empty, _isVirtualScrollerDisabled);
                        const tableBody = createTableBody(options, selectionModeInColumn, empty, _isVirtualScrollerDisabled);
                        const tableFooter = createTableFooter(options);
                        const tableProps = mergeProps(
                            {
                                className: classNames(props.tableClassName, ptCallbacks.cx('table')),
                                style: props.tableStyle,
                                role: 'table'
                            },
                            ptCallbacks.ptm('table')
                        );

                        return (
                            <table ref={ref} {...tableProps}>
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
            const footerProps = mergeProps(
                {
                    className: ptCallbacks.cx('footer')
                },
                ptCallbacks.ptm('footer')
            );

            return <div {...footerProps}>{content}</div>;
        }

        return null;
    };

    const createPaginator = (position, totalRecords) => {
        return (
            <Paginator
                first={getFirst()}
                rows={getRows()}
                pageLinkSize={props.pageLinkSize}
                className={classNames(props.paginatorClassName, ptCallbacks.cx('paginator', { position }))}
                onPageChange={onPageChange}
                template={props.paginatorTemplate}
                totalRecords={totalRecords}
                rowsPerPageOptions={props.rowsPerPageOptions}
                currentPageReportTemplate={props.currentPageReportTemplate}
                leftContent={props.paginatorLeft}
                rightContent={props.paginatorRight}
                alwaysShow={props.alwaysShowPaginator}
                dropdownAppendTo={props.paginatorDropdownAppendTo}
                pt={ptCallbacks.ptm('paginator')}
                unstyled={props.unstyled}
                __parentMetadata={{ parent: metaData }}
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
            const resizeHelperProps = mergeProps(
                {
                    className: ptCallbacks.cx('resizeHelper'),
                    style: ptCallbacks.sx('resizeHelper')
                },
                ptCallbacks.ptm('resizeHelper')
            );

            return <div ref={resizeHelperRef} {...resizeHelperProps}></div>;
        }

        return null;
    };

    const createReorderIndicators = () => {
        if (props.reorderableColumns) {
            const style = { position: 'absolute', display: 'none' };
            const reorderIndicatorUpProps = mergeProps(
                {
                    className: ptCallbacks.cx('reorderIndicatorUp'),
                    style: ptCallbacks.sx('reorderIndicatorUp', { style })
                },
                ptCallbacks.ptm('reorderIndicatorUp')
            );
            const reorderIndicatorUpIconProps = mergeProps(ptCallbacks.ptm('reorderIndicatorUpIcon'));
            const reorderIndicatorUpIcon = IconUtils.getJSXIcon(props.reorderIndicatorUpIcon || <ArrowDownIcon {...reorderIndicatorUpIconProps} />, { ...reorderIndicatorUpIconProps }, { props });
            const reorderIndicatorDownProps = mergeProps(
                {
                    className: ptCallbacks.cx('reorderIndicatorDown'),
                    style: ptCallbacks.sx('reorderIndicatorDown', { style })
                },
                ptCallbacks.ptm('reorderIndicatorDown')
            );
            const reorderIndicatorDownIconProps = mergeProps(ptCallbacks.ptm('reorderIndicatorDownIcon'));
            const reorderIndicatorDownIcon = IconUtils.getJSXIcon(props.reorderIndicatorDownIcon || <ArrowUpIcon {...reorderIndicatorDownIconProps} />, { ...reorderIndicatorDownIconProps }, { props });

            return (
                <>
                    <span ref={reorderIndicatorUpRef} {...reorderIndicatorUpProps}>
                        {reorderIndicatorUpIcon}
                    </span>
                    <span ref={reorderIndicatorDownRef} {...reorderIndicatorDownProps}>
                        {reorderIndicatorDownIcon}
                    </span>
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

    const loader = createLoader();
    const header = createHeader();
    const paginatorTop = createPaginatorTop(totalRecords);
    const content = createContent(data, columns, selectionModeInColumn, empty);
    const paginatorBottom = createPaginatorBottom(totalRecords);
    const footer = createFooter();
    const resizeHelper = createResizeHelper();
    const reorderIndicators = createReorderIndicators();
    const rootProps = mergeProps(
        {
            id: props.id,
            className: classNames(props.className, ptCallbacks.cx('root', { selectable })),
            style: props.style,
            'data-scrollselectors': '.p-datatable-wrapper',
            'data-showgridlines': props.showGridlines
        },
        DataTableBase.getOtherProps(props),
        ptCallbacks.ptm('root')
    );

    return (
        <div ref={elementRef} {...rootProps}>
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
