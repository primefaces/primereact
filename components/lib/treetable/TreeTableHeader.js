import * as React from 'react';
import { InputText } from '../inputtext/InputText';
import { classNames, DomHandler } from '../utils/Utils';

export const TreeTableHeader = React.memo((props) => {
    const filterTimeout = React.useRef(null);

    const onHeaderClick = (event, column) => {
        if (column.props.sortable) {
            const targetNode = event.target;
            if (DomHandler.hasClass(targetNode, 'p-sortable-column') || DomHandler.hasClass(targetNode, 'p-column-title')
                || DomHandler.hasClass(targetNode, 'p-sortable-column-icon') || DomHandler.hasClass(targetNode.parentElement, 'p-sortable-column-icon')) {

                props.onSort({
                    originalEvent: event,
                    sortField: column.props.sortField || column.props.field,
                    sortFunction: column.props.sortFunction,
                    sortable: column.props.sortable
                });

                DomHandler.clearSelection();
            }
        }
    }

    const onHeaderMouseDown = (event, column) => {
        if (props.reorderableColumns && column.props.reorderable) {
            if (event.target.nodeName !== 'INPUT')
                event.currentTarget.draggable = true;
            else if (event.target.nodeName === 'INPUT')
                event.currentTarget.draggable = false;
        }
    }

    const onHeaderKeyDown = (event, column) => {
        if (event.key === 'Enter') {
            onHeaderClick(event, column);
            event.preventDefault();
        }
    }

    const getMultiSortMetaDataIndex = (column) => {
        if (props.multiSortMeta) {
            for (let i = 0; i < props.multiSortMeta.length; i++) {
                if (props.multiSortMeta[i].field === column.props.field) {
                    return i;
                }
            }
        }

        return -1;
    }

    const onResizerMouseDown = (event, column) => {
        if (props.resizableColumns && props.onResizeStart) {
            props.onResizeStart({
                originalEvent: event,
                columnEl: event.target.parentElement,
                column: column
            });
        }
    }

    const onDragStart = (event, column) => {
        if (props.onDragStart) {
            props.onDragStart({
                originalEvent: event,
                column
            });
        }
    }

    const onDragOver = (event, column) => {
        if (props.onDragOver) {
            props.onDragOver({
                originalEvent: event,
                column
            });
        }
    }

    const onDragLeave = (event, column) => {
        if (props.onDragLeave) {
            props.onDragLeave({
                originalEvent: event,
                column
            });
        }
    }

    const onDrop = (event, column) => {
        if (props.onDrop) {
            props.onDrop({
                originalEvent: event,
                column
            });
        }
    }

    const onFilterInput = (e, column) => {
        if (column.props.filter && props.onFilter) {
            if (filterTimeout.current) {
                clearTimeout(filterTimeout.current);
            }

            let filterValue = e.target.value;
            filterTimeout.current = setTimeout(() => {
                props.onFilter({
                    value: filterValue,
                    field: column.props.field,
                    matchMode: column.props.filterMatchMode || 'startsWith'
                });
                filterTimeout.current = null;
            }, props.filterDelay);
        }
    }

    const hasColumnFilter = (columns) => {
        if (columns) {
            for (let col of columns) {
                if (col.props.filter) {
                    return true;
                }
            }
        }

        return false;
    }

    const getAriaSort = (column, sorted, sortOrder) => {
        if (column.props.sortable) {
            let sortIcon = sorted ? sortOrder < 0 ? 'pi-sort-down' : 'pi-sort-up' : 'pi-sort';
            if (sortIcon === 'pi-sort-down')
                return 'descending';
            else if (sortIcon === 'pi-sort-up')
                return 'ascending';
            else
                return 'none';
        }
        else {
            return null;
        }
    }

    const getColumnProp = (column, ...args) => {
        return column ? typeof args[0] === 'string' ? column.props[args[0]] : (args[0] || column).props[args[1]] : null;
    }

    const createSortIcon = (column, sorted, sortOrder) => {
        if (column.props.sortable) {
            const sortIcon = sorted ? sortOrder < 0 ? 'pi-sort-amount-down' : 'pi-sort-amount-up-alt' : 'pi-sort-alt';
            const sortIconClassName = classNames('p-sortable-column-icon', 'pi pi-fw', sortIcon);

            return (
                <span className={sortIconClassName}></span>
            )
        }
        else {
            return null;
        }
    }

    const createResizer = (column) => {
        if (props.resizableColumns) {
            return (
                <span className="p-column-resizer p-clickable" onMouseDown={e => onResizerMouseDown(e, column)} />
            )
        }
        else {
            return null;
        }
    }

    const createSortBadge = (sortMetaDataIndex) => {
        if (sortMetaDataIndex !== -1 && props.multiSortMeta && props.multiSortMeta.length > 1) {
            return <span className="p-sortable-column-badge">{sortMetaDataIndex + 1}</span>;
        }

        return null;
    }

    const createHeaderCell = (column, options) => {
        let filterElement;

        if (column.props.filter && options.renderFilter) {
            filterElement = column.props.filterElement || <InputText onInput={(e) => onFilterInput(e, column)} type={props.filterType} defaultValue={props.filters && props.filters[column.props.field] ? props.filters[column.props.field].value : null}
                className="p-column-filter" placeholder={column.props.filterPlaceholder} maxLength={column.props.filterMaxLength} />;
        }

        if (options.filterOnly) {
            return (
                <th key={column.props.columnKey || column.props.field || options.index} className={classNames('p-filter-column', column.props.filterHeaderClassName)} style={column.props.filterHeaderStyle || column.props.style}
                    rowSpan={column.props.rowSpan} colSpan={column.props.colSpan}>
                    {filterElement}
                </th>
            )
        }
        else {
            const sortMetaDataIndex = getMultiSortMetaDataIndex(column);
            const multiSortMetaData = sortMetaDataIndex !== -1 ? props.multiSortMeta[sortMetaDataIndex] : null;
            const singleSorted = (column.props.field === props.sortField);
            const multipleSorted = multiSortMetaData !== null;
            const sorted = column.props.sortable && (singleSorted || multipleSorted);
            let sortOrder = 0;

            if (singleSorted)
                sortOrder = props.sortOrder;
            else if (multipleSorted)
                sortOrder = multiSortMetaData.order;

            const sortIconElement = createSortIcon(column, sorted, sortOrder);
            const ariaSortData = getAriaSort(column, sorted, sortOrder);
            const sortBadge = createSortBadge(sortMetaDataIndex);

            const className = classNames(column.props.headerClassName || column.props.className, {
                'p-sortable-column': column.props.sortable,
                'p-highlight': sorted,
                'p-resizable-column': props.resizableColumns && getColumnProp(column, 'resizeable')
            });

            const resizer = createResizer(column);

            return (
                <th key={column.columnKey || column.field || options.index} className={className} style={column.props.headerStyle || column.props.style} tabIndex={column.props.sortable ? props.tabIndex : null}
                    onClick={e => onHeaderClick(e, column)} onMouseDown={e => onHeaderMouseDown(e, column)} onKeyDown={e => onHeaderKeyDown(e, column)}
                    rowSpan={column.props.rowSpan} colSpan={column.props.colSpan} aria-sort={ariaSortData}
                    onDragStart={e => onDragStart(e, column)} onDragOver={e => onDragOver(e, column)} onDragLeave={e => onDragLeave(e, column)} onDrop={e => onDrop(e, column)}>
                    {resizer}
                    <span className="p-column-title">{column.props.header}</span>
                    {sortIconElement}
                    {sortBadge}
                    {filterElement}
                </th>
            )
        }
    }

    const createHeaderRow = (row, index) => {
        const rowColumns = React.Children.toArray(row.props.children);
        const rowHeaderCells = rowColumns.map((col, i) => createHeaderCell(col, { index: i, filterOnly: false, renderFilter: true }));

        return (
            <tr key={index}>{rowHeaderCells}</tr>
        )
    }

    const createColumnGroup = () => {
        const rows = React.Children.toArray(props.columnGroup.props.children);

        return rows.map(createHeaderRow);
    }

    const createColumns = (columns) => {
        if (columns) {
            if (hasColumnFilter(columns)) {
                return (
                    <>
                        <tr>{columns.map((col, i) => createHeaderCell(col, { index: i, filterOnly: false, renderFilter: false }))}</tr>
                        <tr>{columns.map((col, i) => createHeaderCell(col, { index: i, filterOnly: true, renderFilter: true }))}</tr>
                    </>
                )
            }
            else {
                return (
                    <tr>{columns.map((col, i) => createHeaderCell(col, { index: i, filterOnly: false, renderFilter: false }))}</tr>
                )
            }
        }
        else {
            return null;
        }
    }

    const content = props.columnGroup ? createColumnGroup() : createColumns(props.columns);

    return (
        <thead className="p-treetable-thead">
            {content}
        </thead>
    )
});

TreeTableHeader.displayName = 'TreeTableHeader';
