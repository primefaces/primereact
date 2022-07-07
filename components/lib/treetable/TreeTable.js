import * as React from 'react';
import PrimeReact, { FilterService } from '../api/Api';
import { useEventListener } from '../hooks/Hooks';
import { Paginator } from '../paginator/Paginator';
import { classNames, DomHandler, ObjectUtils } from '../utils/Utils';
import { TreeTableBody } from './TreeTableBody';
import { TreeTableFooter } from './TreeTableFooter';
import { TreeTableHeader } from './TreeTableHeader';
import { TreeTableScrollableView } from './TreeTableScrollableView';

export const TreeTable = React.forwardRef((props, ref) => {
    const [expandedKeysState, setExpandedKeysState] = React.useState(props.expandedKeys);
    const [firstState, setFirstState] = React.useState(props.first);
    const [rowsState, setRowsState] = React.useState(props.rows);
    const [sortFieldState, setSortFieldState] = React.useState(props.sortField);
    const [sortOrderState, setSortOrderState] = React.useState(props.sortOrder);
    const [multiSortMetaState, setMultiSortMetaState] = React.useState(props.multiSortMeta);
    const [filtersState, setFiltersState] = React.useState(props.filters);
    const [columnOrderState, setColumnOrderState] = React.useState([]);
    const elementRef = React.useRef(null);
    const resizerHelperRef = React.useRef(null);
    const reorderIndicatorUpRef = React.useRef(null);
    const reorderIndicatorDownRef = React.useRef(null);
    const columnResizing = React.useRef(null);
    const resizeColumn = React.useRef(null);
    const resizeColumnProps = React.useRef(null);
    const lastResizerHelperX = React.useRef(0);
    const iconWidth = React.useRef(0);
    const iconHeight = React.useRef(0);
    const draggedColumnEl = React.useRef(null);
    const draggedColumn = React.useRef(null);
    const dropPosition = React.useRef(null);
    const columnSortable = React.useRef(null);
    const columnSortFunction = React.useRef(null);
    const columnField = React.useRef(null);

    const [bindDocumentMouseMoveListener, unbindDocumentMouseMoveListener] = useEventListener({
        type: 'mousemove', listener: (event) => {
            if (columnResizing.current) {
                onColumnResize(event);
            }
        }
    });

    const [bindDocumentMouseUpListener, unbindDocumentMouseUpListener] = useEventListener({
        type: 'mouseup', listener: (event) => {
            if (columnResizing.current) {
                columnResizing.current = false;
                onColumnResizeEnd(event);
            }
        }
    });

    const onToggle = (event) => {
        if (props.onToggle) {
            props.onToggle(event);
        }
        else {
            setExpandedKeysState(event.value);
        }
    }

    const onPageChange = (event) => {
        if (props.onPage) {
            props.onPage(event);
        }
        else {
            setFirstState(event.first);
            setRowsState(event.rows);
        }
    }

    const onSort = (event) => {
        let sortField = event.sortField;
        let sortOrder = props.defaultSortOrder;
        let multiSortMeta;
        let eventMeta;

        columnSortable.current = event.sortable;
        columnSortFunction.current = event.sortFunction;
        columnField.current = event.sortField;

        if (props.sortMode === 'multiple') {
            const metaKey = event.originalEvent.metaKey || event.originalEvent.ctrlKey;
            multiSortMeta = [...getMultiSortMeta()];

            if (multiSortMeta && multiSortMeta instanceof Array) {
                const sortMeta = multiSortMeta.find(sortMeta => sortMeta.field === sortField);
                sortOrder = sortMeta ? getCalculatedSortOrder(sortMeta.order) : sortOrder;
            }

            const newMetaData = { field: sortField, order: sortOrder };

            if (sortOrder) {
                if (!multiSortMeta || !metaKey) {
                    multiSortMeta = [];
                }

                addSortMeta(newMetaData, multiSortMeta);
            }
            else if (props.removableSort && multiSortMeta) {
                removeSortMeta(newMetaData, multiSortMeta);
            }

            eventMeta = {
                multiSortMeta
            };
        }
        else {
            sortOrder = (getSortField() === sortField) ? getCalculatedSortOrder(getSortOrder()) : sortOrder;

            if (props.removableSort) {
                sortField = sortOrder ? sortField : null;
            }

            eventMeta = {
                sortField,
                sortOrder
            };
        }

        if (props.onSort) {
            props.onSort(eventMeta);
        }
        else {
            setFirstState(0);
            setSortFieldState(eventMeta.sortField);
            setSortOrderState(eventMeta.sortOrder);
            setMultiSortMetaState(eventMeta.multiSortMeta);
        }
    }

    const getCalculatedSortOrder = (currentOrder) => {
        return props.removableSort ? (props.defaultSortOrder === currentOrder ? currentOrder * -1 : 0) : currentOrder * -1;
    }

    const addSortMeta = (meta, multiSortMeta) => {
        let index = -1;
        for (let i = 0; i < multiSortMeta.length; i++) {
            if (multiSortMeta[i].field === meta.field) {
                index = i;
                break;
            }
        }

        if (index >= 0)
            multiSortMeta[index] = meta;
        else
            multiSortMeta.push(meta);
    }

    const removeSortMeta = (meta, multiSortMeta) => {
        let index = -1;
        for (let i = 0; i < multiSortMeta.length; i++) {
            if (multiSortMeta[i].field === meta.field) {
                index = i;
                break;
            }
        }

        if (index >= 0) {
            multiSortMeta.splice(index, 1);
        }

        multiSortMeta = multiSortMeta.length > 0 ? multiSortMeta : null;
    }

    const sortSingle = (data) => {
        return sortNodes(data);
    }

    const sortNodes = (data) => {
        let value = [...data];

        if (columnSortable.current && columnSortable.current === 'custom' && columnSortFunction.current) {
            value = columnSortFunction.current({
                rowData: value,
                field: getSortField(),
                order: getSortOrder()
            });
        }
        else {
            value.sort((node1, node2) => {
                const sortField = getSortField();
                const value1 = ObjectUtils.resolveFieldData(node1.data, sortField);
                const value2 = ObjectUtils.resolveFieldData(node2.data, sortField);
                return ObjectUtils.sort(value1, value2, getSortOrder(), PrimeReact.locale);
            });

            for (let i = 0; i < value.length; i++) {
                if (value[i].children && value[i].children.length) {
                    value[i].children = sortNodes(value[i].children);
                }
            }
        }

        return value;
    }

    const sortMultiple = (data) => {
        let multiSortMeta = getMultiSortMeta();

        if (multiSortMeta)
            return sortMultipleNodes(data, multiSortMeta);
        else
            return data;
    }

    const sortMultipleNodes = (data, multiSortMeta) => {
        let value = [...data];
        value.sort((node1, node2) => {
            return multisortField(node1, node2, multiSortMeta, 0);
        });

        for (let i = 0; i < value.length; i++) {
            if (value[i].children && value[i].children.length) {
                value[i].children = sortMultipleNodes(value[i].children, multiSortMeta);
            }
        }

        return value;
    }

    const multisortField = (node1, node2, multiSortMeta, index) => {
        const value1 = ObjectUtils.resolveFieldData(node1.data, multiSortMeta[index].field);
        const value2 = ObjectUtils.resolveFieldData(node2.data, multiSortMeta[index].field);
        let result = null;

        if (value1 == null && value2 != null)
            result = -1;
        else if (value1 != null && value2 == null)
            result = 1;
        else if (value1 == null && value2 == null)
            result = 0;
        else {
            if (value1 === value2) {
                return (multiSortMeta.length - 1) > (index) ? (multisortField(node1, node2, multiSortMeta, index + 1)) : 0;
            }
            else {
                if ((typeof value1 === 'string' || value1 instanceof String) && (typeof value2 === 'string' || value2 instanceof String))
                    return (multiSortMeta[index].order * value1.localeCompare(value2, PrimeReact.locale, { numeric: true }));
                else
                    result = (value1 < value2) ? -1 : 1;
            }
        }

        return (multiSortMeta[index].order * result);
    }

    const filter = (value, field, mode) => {
        onFilter({
            value: value,
            field: field,
            matchMode: mode
        });
    }

    const onFilter = (event) => {
        let filters = getFilters();
        let newFilters = filters ? { ...filters } : {};

        if (!isFilterBlank(event.value))
            newFilters[event.field] = { value: event.value, matchMode: event.matchMode };
        else if (newFilters[event.field])
            delete newFilters[event.field];

        if (props.onFilter) {
            props.onFilter({
                filters: newFilters
            });
        }
        else {
            setFirstState(0);
            setFiltersState(newFilters);
        }
    }

    const hasFilter = () => {
        return ObjectUtils.isNotEmpty(getFilters());
    }

    const isFilterBlank = (filter) => {
        if (filter !== null && filter !== undefined) {
            if ((typeof filter === 'string' && filter.trim().length === 0) || (filter instanceof Array && filter.length === 0))
                return true;
            else
                return false;
        }
        return true;
    }

    const onColumnResizeStart = (event) => {
        let containerLeft = DomHandler.getOffset(elementRef.current).left;
        resizeColumn.current = event.columnEl;
        resizeColumnProps.current = event.column;
        columnResizing.current = true;
        lastResizerHelperX.current = (event.originalEvent.pageX - containerLeft + elementRef.current.scrollLeft);

        bindColumnResizeEvents();
    }

    const onColumnResize = (event) => {
        let containerLeft = DomHandler.getOffset(elementRef.current).left;
        DomHandler.addClass(elementRef.current, 'p-unselectable-text');
        resizerHelperRef.current.style.height = elementRef.current.offsetHeight + 'px';
        resizerHelperRef.current.style.top = 0 + 'px';
        resizerHelperRef.current.style.left = (event.pageX - containerLeft + elementRef.current.scrollLeft) + 'px';

        resizerHelperRef.current.style.display = 'block';
    }

    const onColumnResizeEnd = (event) => {
        let delta = resizerHelperRef.current.offsetLeft - lastResizerHelperX.current;
        let columnWidth = resizeColumn.current.offsetWidth;
        let newColumnWidth = columnWidth + delta;
        let minWidth = resizeColumn.current.style.minWidth || 15;

        if (columnWidth + delta > parseInt(minWidth, 10)) {
            if (props.columnResizeMode === 'fit') {
                let nextColumn = resizeColumn.current.nextElementSibling;
                let nextColumnWidth = nextColumn.offsetWidth - delta;

                if (newColumnWidth > 15 && nextColumnWidth > 15) {
                    if (props.scrollable) {
                        let scrollableView = findParentScrollableView(resizeColumn.current);
                        let scrollableBodyTable = DomHandler.findSingle(scrollableView, 'table.p-treetable-scrollable-body-table');
                        let scrollableHeaderTable = DomHandler.findSingle(scrollableView, 'table.p-treetable-scrollable-header-table');
                        let scrollableFooterTable = DomHandler.findSingle(scrollableView, 'table.p-treetable-scrollable-footer-table');
                        let resizeColumnIndex = DomHandler.index(resizeColumn.current);

                        resizeColGroup(scrollableHeaderTable, resizeColumnIndex, newColumnWidth, nextColumnWidth);
                        resizeColGroup(scrollableBodyTable, resizeColumnIndex, newColumnWidth, nextColumnWidth);
                        resizeColGroup(scrollableFooterTable, resizeColumnIndex, newColumnWidth, nextColumnWidth);
                    }
                    else {
                        resizeColumn.current.style.width = newColumnWidth + 'px';
                        if (nextColumn) {
                            nextColumn.style.width = nextColumnWidth + 'px';
                        }
                    }
                }
            }
            else if (props.columnResizeMode === 'expand') {
                if (props.scrollable) {
                    let scrollableView = findParentScrollableView(resizeColumn.current);
                    let scrollableBodyTable = DomHandler.findSingle(scrollableView, 'table.p-treetable-scrollable-body-table');
                    let scrollableHeaderTable = DomHandler.findSingle(scrollableView, 'table.p-treetable-scrollable-header-table');
                    let scrollableFooterTable = DomHandler.findSingle(scrollableView, 'table.p-treetable-scrollable-footer-table');
                    scrollableBodyTable.style.width = scrollableBodyTable.offsetWidth + delta + 'px';
                    scrollableHeaderTable.style.width = scrollableHeaderTable.offsetWidth + delta + 'px';
                    if (scrollableFooterTable) {
                        scrollableFooterTable.style.width = scrollableHeaderTable.offsetWidth + delta + 'px';
                    }
                    let resizeColumnIndex = DomHandler.index(resizeColumn.current);

                    resizeColGroup(scrollableHeaderTable, resizeColumnIndex, newColumnWidth, null);
                    resizeColGroup(scrollableBodyTable, resizeColumnIndex, newColumnWidth, null);
                    resizeColGroup(scrollableFooterTable, resizeColumnIndex, newColumnWidth, null);
                }
                else {
                    table.style.width = table.offsetWidth + delta + 'px';
                    resizeColumn.current.style.width = newColumnWidth + 'px';
                }
            }

            if (props.onColumnResizeEnd) {
                props.onColumnResizeEnd({
                    element: resizeColumn.current,
                    column: resizeColumnProps.current,
                    delta: delta
                });
            }
        }

        resizerHelperRef.current.style.display = 'none';
        resizeColumn.current = null;
        resizeColumnProps.current = null;
        DomHandler.removeClass(elementRef.current, 'p-unselectable-text');

        unbindColumnResizeEvents();
    }

    const findParentScrollableView = (column) => {
        if (column) {
            let parent = column.parentElement;
            while (parent && !DomHandler.hasClass(parent, 'p-treetable-scrollable-view')) {
                parent = parent.parentElement;
            }

            return parent;
        }
        else {
            return null;
        }
    }

    const resizeColGroup = (table, resizeColumnIndex, newColumnWidth, nextColumnWidth) => {
        if (table) {
            let colGroup = table.children[0].nodeName === 'COLGROUP' ? table.children[0] : null;

            if (colGroup) {
                let col = colGroup.children[resizeColumnIndex];
                let nextCol = col.nextElementSibling;
                col.style.width = newColumnWidth + 'px';

                if (nextCol && nextColumnWidth) {
                    nextCol.style.width = nextColumnWidth + 'px';
                }
            }
            else {
                throw new Error("Scrollable tables require a colgroup to support resizable columns");
            }
        }
    }

    const bindColumnResizeEvents = () => {
        bindDocumentMouseMoveListener();
        bindDocumentMouseUpListener();
    }

    const unbindColumnResizeEvents = () => {
        unbindDocumentMouseMoveListener();
        unbindDocumentMouseUpListener();
    }

    const onColumnDragStart = (e) => {
        const { originalEvent: event, column } = e;

        if (columnResizing.current) {
            event.preventDefault();
            return;
        }

        iconWidth.current = DomHandler.getHiddenElementOuterWidth(reorderIndicatorUpRef.current);
        iconHeight.current = DomHandler.getHiddenElementOuterHeight(reorderIndicatorUpRef.current);

        draggedColumnEl.current = findParentHeader(event.currentTarget);
        draggedColumn.current = column;
        event.dataTransfer.setData('text', 'b'); // Firefox requires this to make dragging possible
    }

    const onColumnDragOver = (e) => {
        const event = e.originalEvent;
        const dropHeader = findParentHeader(event.currentTarget);
        if (props.reorderableColumns && draggedColumnEl.current && dropHeader) {
            event.preventDefault();
            let containerOffset = DomHandler.getOffset(elementRef.current);
            let dropHeaderOffset = DomHandler.getOffset(dropHeader);

            if (draggedColumnEl.current !== dropHeader) {
                let targetLeft = dropHeaderOffset.left - containerOffset.left;
                //let targetTop =  containerOffset.top - dropHeaderOffset.top;
                let columnCenter = dropHeaderOffset.left + dropHeader.offsetWidth / 2;

                reorderIndicatorUpRef.current.style.top = dropHeaderOffset.top - containerOffset.top - (iconHeight.current - 1) + 'px';
                reorderIndicatorDownRef.current.style.top = dropHeaderOffset.top - containerOffset.top + dropHeader.offsetHeight + 'px';

                if (event.pageX > columnCenter) {
                    reorderIndicatorUpRef.current.style.left = (targetLeft + dropHeader.offsetWidth - Math.ceil(iconWidth.current / 2)) + 'px';
                    reorderIndicatorDownRef.current.style.left = (targetLeft + dropHeader.offsetWidth - Math.ceil(iconWidth.current / 2)) + 'px';
                    dropPosition.current = 1;
                }
                else {
                    reorderIndicatorUpRef.current.style.left = (targetLeft - Math.ceil(iconWidth.current / 2)) + 'px';
                    reorderIndicatorDownRef.current.style.left = (targetLeft - Math.ceil(iconWidth.current / 2)) + 'px';
                    dropPosition.current = -1;
                }

                reorderIndicatorUpRef.current.style.display = 'block';
                reorderIndicatorDownRef.current.style.display = 'block';
            }
        }
    }

    const onColumnDragLeave = (e) => {
        const event = e.originalEvent;
        if (props.reorderableColumns && draggedColumnEl.current) {
            event.preventDefault();
            reorderIndicatorUpRef.current.style.display = 'none';
            reorderIndicatorDownRef.current.style.display = 'none';
        }
    }

    const onColumnDrop = (e) => {
        const { originalEvent: event, column } = e;

        event.preventDefault();
        if (draggedColumnEl.current) {
            let dragIndex = DomHandler.index(draggedColumnEl.current);
            let dropIndex = DomHandler.index(findParentHeader(event.currentTarget));
            let allowDrop = (dragIndex !== dropIndex);
            if (allowDrop && ((dropIndex - dragIndex === 1 && dropPosition.current === -1) || (dragIndex - dropIndex === 1 && dropPosition.current === 1))) {
                allowDrop = false;
            }

            if (allowDrop) {
                let columns = columnOrderState ? getColumns() : React.Children.toArray(props.children);
                let isSameColumn = (col1, col2) => (col1.props.columnKey || col2.props.columnKey) ? ObjectUtils.equals(col1, col2, 'props.columnKey') : ObjectUtils.equals(col1, col2, 'props.field');
                let dragColIndex = columns.findIndex((child) => isSameColumn(child, draggedColumn.current));
                let dropColIndex = columns.findIndex((child) => isSameColumn(child, column));

                if (dropColIndex < dragColIndex && dropPosition.current === 1) {
                    dropColIndex++;
                }

                if (dropColIndex > dragColIndex && dropPosition.current === -1) {
                    dropColIndex--;
                }

                ObjectUtils.reorderArray(columns, dragColIndex, dropColIndex);

                let columnOrder = [];
                for (let column of columns) {
                    columnOrder.push(column.props.columnKey || column.props.field);
                }

                setColumnOrderState(columnOrder);

                if (props.onColReorder) {
                    props.onColReorder({
                        dragIndex: dragColIndex,
                        dropIndex: dropColIndex,
                        columns: columns
                    });
                }
            }

            reorderIndicatorUpRef.current.style.display = 'none';
            reorderIndicatorDownRef.current.style.display = 'none';
            draggedColumnEl.current.draggable = false;
            draggedColumnEl.current = null;
            dropPosition.current = null;
        }
    }

    const findParentHeader = (element) => {
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

    const getExpandedKeys = () => {
        return props.onToggle ? props.expandedKeys : expandedKeysState;
    }

    const getFirst = () => {
        return props.onPage ? props.first : firstState;
    }

    const getRows = () => {
        return props.onPage ? props.rows : rowsState;
    }

    const getSortField = () => {
        return props.onSort ? props.sortField : sortFieldState;
    }

    const getSortOrder = () => {
        return props.onSort ? props.sortOrder : sortOrderState;
    }

    const getMultiSortMeta = () => {
        return (props.onSort ? props.multiSortMeta : multiSortMetaState) || [];
    }

    const getFilters = () => {
        return props.onFilter ? props.filters : filtersState;
    }

    const findColumnByKey = (columns, key) => {
        if (columns && columns.length) {
            for (let i = 0; i < columns.length; i++) {
                let child = columns[i];
                if (child.props.columnKey === key || child.props.field === key) {
                    return child;
                }
            }
        }

        return null;
    }

    const getColumns = () => {
        let columns = React.Children.toArray(props.children);

        if (columns && columns.length) {
            if (props.reorderableColumns && columnOrderState) {
                let orderedColumns = [];
                for (let columnKey of columnOrderState) {
                    let column = findColumnByKey(columns, columnKey);
                    if (column) {
                        orderedColumns.push(column);
                    }
                }

                return [...orderedColumns, ...columns.filter((item) => {
                    return orderedColumns.indexOf(item) < 0;
                })];
            }
            else {
                return columns;
            }
        }

        return null;
    }

    const getTotalRecords = (data) => {
        return props.lazy ? props.totalRecords : data ? data.length : 0;
    }

    const isSingleSelectionMode = () => {
        return props.selectionMode && props.selectionMode === 'single';
    }

    const isMultipleSelectionMode = () => {
        return props.selectionMode && props.selectionMode === 'multiple';
    }

    const isRowSelectionMode = () => {
        return isSingleSelectionMode() || isMultipleSelectionMode();
    }

    const getFrozenColumns = (columns) => {
        let frozenColumns = null;

        for (let col of columns) {
            if (col.props.frozen) {
                frozenColumns = frozenColumns || [];
                frozenColumns.push(col);
            }
        }

        return frozenColumns;
    }

    const getScrollableColumns = (columns) => {
        let scrollableColumns = null;

        for (let col of columns) {
            if (!col.props.frozen) {
                scrollableColumns = scrollableColumns || [];
                scrollableColumns.push(col);
            }
        }

        return scrollableColumns;
    }

    const filterLocal = (value) => {
        let filteredNodes = [];
        let filters = getFilters();
        let columns = React.Children.toArray(props.children);
        const isStrictMode = props.filterMode === 'strict';

        for (let node of value) {
            let copyNode = { ...node };
            let localMatch = true;
            let globalMatch = false;

            for (let j = 0; j < columns.length; j++) {
                let col = columns[j];
                let filterMeta = filters ? filters[col.props.field] : null;
                let filterField = col.props.field;
                let filterValue, filterConstraint, paramsWithoutNode, options;

                //local
                if (filterMeta) {
                    let filterMatchMode = filterMeta.matchMode || col.props.filterMatchMode || 'startsWith';
                    filterValue = filterMeta.value;
                    filterConstraint = filterMatchMode === 'custom' ? col.props.filterFunction : FilterService.filters[filterMatchMode];
                    options = {
                        rowData: node,
                        filters,
                        props,
                        column: {
                            filterMeta,
                            filterField,
                            props: col.props
                        }
                    };

                    paramsWithoutNode = { filterField, filterValue, filterConstraint, isStrictMode, options };
                    if ((isStrictMode && !(findFilteredNodes(copyNode, paramsWithoutNode) || isFilterMatched(copyNode, paramsWithoutNode))) ||
                        (!isStrictMode && !(isFilterMatched(copyNode, paramsWithoutNode) || findFilteredNodes(copyNode, paramsWithoutNode)))) {
                        localMatch = false;
                    }

                    if (!localMatch) {
                        break;
                    }
                }

                //global
                if (props.globalFilter && !globalMatch) {
                    let copyNodeForGlobal = { ...copyNode };
                    filterValue = props.globalFilter;
                    filterConstraint = FilterService.filters['contains'];
                    paramsWithoutNode = { filterField, filterValue, filterConstraint, isStrictMode };
                    if ((isStrictMode && (findFilteredNodes(copyNodeForGlobal, paramsWithoutNode) || isFilterMatched(copyNodeForGlobal, paramsWithoutNode))) ||
                        (!isStrictMode && (isFilterMatched(copyNodeForGlobal, paramsWithoutNode) || findFilteredNodes(copyNodeForGlobal, paramsWithoutNode)))) {
                        globalMatch = true;
                        copyNode = copyNodeForGlobal;
                    }
                }
            }

            let matches = localMatch;
            if (props.globalFilter) {
                matches = localMatch && globalMatch;
            }

            if (matches) {
                filteredNodes.push(copyNode);
            }
        }

        return filteredNodes;
    }

    const findFilteredNodes = (node, paramsWithoutNode) => {
        if (node) {
            let matched = false;
            if (node.children) {
                let childNodes = [...node.children];
                node.children = [];
                for (let childNode of childNodes) {
                    let copyChildNode = { ...childNode };
                    if (isFilterMatched(copyChildNode, paramsWithoutNode)) {
                        matched = true;
                        node.children.push(copyChildNode);
                    }
                }
            }

            if (matched) {
                return true;
            }
        }
    }

    const isFilterMatched = (node, { filterField, filterValue, filterConstraint, isStrictMode, options }) => {
        let matched = false;
        let dataFieldValue = ObjectUtils.resolveFieldData(node.data, filterField);
        if (filterConstraint(dataFieldValue, filterValue, props.filterLocale, options)) {
            matched = true;
        }

        if (!matched || (isStrictMode && !isNodeLeaf(node))) {
            matched = findFilteredNodes(node, { filterField, filterValue, filterConstraint, isStrictMode }) || matched;
        }

        return matched;
    }

    const isNodeLeaf = (node) => {
        return node.leaf === false ? false : !(node.children && node.children.length);
    }

    const processData = () => {
        let data = props.value || [];

        if (!props.lazy) {
            if (data && data.length) {
                const filters = getFilters();
                const sortField = getSortField();
                const multiSortMeta = getMultiSortMeta();

                if (ObjectUtils.isNotEmpty(filters) || props.globalFilter) {
                    data = filterLocal(data, filters);
                }

                if (sortField || ObjectUtils.isNotEmpty(multiSortMeta)) {
                    if (props.sortMode === 'single')
                        data = sortSingle(data);
                    else if (props.sortMode === 'multiple')
                        data = sortMultiple(data);
                }
            }
        }

        return data;
    }

    React.useImperativeHandle(ref, () => ({
        filter,
        ...props
    }));

    const createTableHeader = (columns, columnGroup) => {
        const sortField = getSortField();
        const sortOrder = getSortOrder();
        const multiSortMeta = [...getMultiSortMeta()];
        const filters = getFilters();

        return (
            <TreeTableHeader columns={columns} columnGroup={columnGroup} tabIndex={props.tabIndex}
                onSort={onSort} sortField={sortField} sortOrder={sortOrder} multiSortMeta={multiSortMeta}
                resizableColumns={props.resizableColumns} onResizeStart={onColumnResizeStart}
                reorderableColumns={props.reorderableColumns} onDragStart={onColumnDragStart}
                onDragOver={onColumnDragOver} onDragLeave={onColumnDragLeave} onDrop={onColumnDrop}
                onFilter={onFilter} filters={filters} filterDelay={props.filterDelay} />
        )
    }

    const createTableFooter = (columns, columnGroup) => {
        return (
            <TreeTableFooter columns={columns} columnGroup={columnGroup} />
        )
    }

    const createTableBody = (value, columns) => {
        return (
            <TreeTableBody value={value} columns={columns} expandedKeys={getExpandedKeys()} selectOnEdit={props.selectOnEdit}
                onToggle={onToggle} onExpand={props.onExpand} onCollapse={props.onCollapse}
                paginator={props.paginator} first={getFirst()} rows={getRows()}
                selectionMode={props.selectionMode} selectionKeys={props.selectionKeys} onSelectionChange={props.onSelectionChange}
                metaKeySelection={props.metaKeySelection} onRowClick={props.onRowClick} onSelect={props.onSelect} onUnselect={props.onUnselect}
                propagateSelectionUp={props.propagateSelectionUp} propagateSelectionDown={props.propagateSelectionDown}
                lazy={props.lazy} rowClassName={props.rowClassName} emptyMessage={props.emptyMessage} loading={props.loading}
                contextMenuSelectionKey={props.contextMenuSelectionKey} onContextMenuSelectionChange={props.onContextMenuSelectionChange} onContextMenu={props.onContextMenu} />
        )
    }

    const createPaginator = (position, totalRecords) => {
        const className = classNames('p-paginator-' + position, props.paginatorClassName);

        return (
            <Paginator first={getFirst()} rows={getRows()} pageLinkSize={props.pageLinkSize} className={className}
                onPageChange={onPageChange} template={props.paginatorTemplate}
                totalRecords={totalRecords} rowsPerPageOptions={props.rowsPerPageOptions} currentPageReportTemplate={props.currentPageReportTemplate}
                leftContent={props.paginatorLeft} rightContent={props.paginatorRight} alwaysShow={props.alwaysShowPaginator} dropdownAppendTo={props.paginatorDropdownAppendTo} />
        )
    }

    const createScrollableView = (value, columns, frozen, headerColumnGroup, footerColumnGroup) => {
        const header = createTableHeader(columns, headerColumnGroup);
        const footer = createTableFooter(columns, footerColumnGroup);
        const body = createTableBody(value, columns);

        return (
            <TreeTableScrollableView columns={columns} header={header} body={body} footer={footer}
                scrollHeight={props.scrollHeight} frozen={frozen} frozenWidth={props.frozenWidth} />
        )
    }

    const createScrollableTable = (value) => {
        const columns = getColumns();
        const frozenColumns = getFrozenColumns(columns);
        const scrollableColumns = frozenColumns ? getScrollableColumns(columns) : columns;
        let frozenView, scrollableView;
        if (frozenColumns) {
            frozenView = createScrollableView(value, frozenColumns, true, props.frozenHeaderColumnGroup, props.frozenFooterColumnGroup);
        }

        scrollableView = createScrollableView(value, scrollableColumns, false, props.headerColumnGroup, props.footerColumnGroup);

        return (
            <div className="p-treetable-scrollable-wrapper">
                {frozenView}
                {scrollableView}
            </div>
        )
    }

    const createRegularTable = (value) => {
        const columns = getColumns();
        const header = createTableHeader(columns, props.headerColumnGroup);
        const footer = createTableFooter(columns, props.footerColumnGroup);
        const body = createTableBody(value, columns);

        return (
            <div className="p-treetable-wrapper">
                <table style={props.tableStyle} className={props.tableClassName}>
                    {header}
                    {footer}
                    {body}
                </table>
            </div>
        )
    }

    const createTable = (value) => {
        return props.scrollable ? createScrollableTable(value) : createRegularTable(value);
    }

    const createLoader = () => {
        if (props.loading) {
            const iconClassName = classNames('p-treetable-loading-icon pi-spin', props.loadingIcon);

            return (
                <div className="p-treetable-loading">
                    <div className="p-treetable-loading-overlay p-component-overlay">
                        <i className={iconClassName}></i>
                    </div>
                </div>
            )
        }

        return null;
    }

    const data = processData();

    const otherProps = ObjectUtils.findDiffKeys(props, TreeTable.defaultProps);
    const className = classNames('p-treetable p-component', {
        'p-treetable-hoverable-rows': props.rowHover,
        'p-treetable-selectable': isRowSelectionMode(),
        'p-treetable-resizable': props.resizableColumns,
        'p-treetable-resizable-fit': (props.resizableColumns && props.columnResizeMode === 'fit'),
        'p-treetable-auto-layout': props.autoLayout,
        'p-treetable-striped': props.stripedRows,
        'p-treetable-gridlines': props.showGridlines
    }, props.className);
    const table = createTable(data);
    const totalRecords = getTotalRecords(data);
    const headerFacet = props.header && <div className="p-treetable-header">{props.header}</div>;
    const footerFacet = props.footer && <div className="p-treetable-footer">{props.footer}</div>;
    const paginatorTop = props.paginator && props.paginatorPosition !== 'bottom' && createPaginator('top', totalRecords);
    const paginatorBottom = props.paginator && props.paginatorPosition !== 'top' && createPaginator('bottom', totalRecords);
    const loader = createLoader();
    const resizeHelper = props.resizableColumns && <div ref={resizerHelperRef} className="p-column-resizer-helper" style={{ display: 'none' }}></div>;
    const reorderIndicatorUp = props.reorderableColumns && <span ref={reorderIndicatorUpRef} className="pi pi-arrow-down p-datatable-reorder-indicator-up" style={{ position: 'absolute', display: 'none' }} />
    const reorderIndicatorDown = props.reorderableColumns && <span ref={reorderIndicatorDownRef} className="pi pi-arrow-up p-datatable-reorder-indicator-down" style={{ position: 'absolute', display: 'none' }} />;

    return (
        <div ref={elementRef} id={props.id} className={className} style={props.style} data-scrollselectors=".p-treetable-scrollable-body" {...otherProps}>
            {loader}
            {headerFacet}
            {paginatorTop}
            {table}
            {paginatorBottom}
            {footerFacet}
            {resizeHelper}
            {reorderIndicatorUp}
            {reorderIndicatorDown}
        </div>
    )
});

TreeTable.displayName = 'TreeTable';
TreeTable.defaultProps = {
    __TYPE: 'TreeTable',
    id: null,
    value: null,
    header: null,
    footer: null,
    style: null,
    className: null,
    tableStyle: null,
    tableClassName: null,
    expandedKeys: null,
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
    first: null,
    rows: null,
    totalRecords: null,
    lazy: false,
    sortField: null,
    sortOrder: null,
    multiSortMeta: null,
    sortMode: 'single',
    defaultSortOrder: 1,
    removableSort: false,
    selectionMode: null,
    selectionKeys: null,
    contextMenuSelectionKey: null,
    metaKeySelection: true,
    selectOnEdit: true,
    propagateSelectionUp: true,
    propagateSelectionDown: true,
    autoLayout: false,
    rowClassName: null,
    loading: false,
    loadingIcon: 'pi pi-spinner',
    tabIndex: 0,
    scrollable: false,
    scrollHeight: null,
    reorderableColumns: false,
    headerColumnGroup: null,
    footerColumnGroup: null,
    frozenHeaderColumnGroup: null,
    frozenFooterColumnGroup: null,
    frozenWidth: null,
    resizableColumns: false,
    columnResizeMode: 'fit',
    emptyMessage: null,
    filters: null,
    globalFilter: null,
    filterMode: 'lenient',
    filterDelay: 300,
    filterLocale: undefined,
    rowHover: false,
    showGridlines: false,
    stripedRows: false,
    onFilter: null,
    onExpand: null,
    onCollapse: null,
    onToggle: null,
    onPage: null,
    onSort: null,
    onSelect: null,
    onUnselect: null,
    onRowClick: null,
    onSelectionChange: null,
    onContextMenuSelectionChange: null,
    onColumnResizeEnd: null,
    onColReorder: null,
    onContextMenu: null
}
