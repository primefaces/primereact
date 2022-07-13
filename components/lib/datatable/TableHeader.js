import * as React from 'react';
import { useMountEffect } from '../hooks/Hooks';
import { classNames } from '../utils/Utils';
import { ColumnFilter } from './ColumnFilter';
import { HeaderCell } from './HeaderCell';
import { HeaderCheckbox } from './HeaderCheckbox';

export const TableHeader = React.memo((props) => {
    const [sortableDisabledFieldsState, setSortableDisabledFieldsState] = React.useState([]);
    const [allSortableDisabledState, setAllSortableDisabledState] = React.useState(false);
    const isSingleSort = props.sortMode === 'single';
    const isMultipleSort = props.sortMode === 'multiple';
    const isAllSortableDisabled = isSingleSort && allSortableDisabledState;

    const isColumnSorted = (column) => {
        return props.sortField !== null ? (column.props.field === props.sortField || column.props.sortField === props.sortField) : false;
    }

    const updateSortableDisabled = () => {
        if (isSingleSort || (isMultipleSort && props.onSortChange)) {
            let sortableDisabledFields = [];
            let allSortableDisabled = false;
            props.columns.forEach((column) => {
                if (column.props.sortableDisabled) {
                    sortableDisabledFields.push(column.props.sortField || column.props.field);

                    if (!allSortableDisabled && isColumnSorted(column)) {
                        allSortableDisabled = true;
                    }
                }
            });

            setSortableDisabledFieldsState(sortableDisabledFields);
            setAllSortableDisabledState(allSortableDisabled);
        }
    }

    const onSortableChange = () => {
        updateSortableDisabled();
    }

    const onCheckboxChange = (e) => {
        props.onColumnCheckboxChange(e, props.value);
    }

    useMountEffect(() => {
        updateSortableDisabled();
    });

    const createGroupHeaderCells = (row) => {
        const columns = React.Children.toArray(row.props.children);

        return createHeaderCells(columns);
    }

    const createHeaderCells = (columns) => {
        return React.Children.map(columns, (col, i) => {
            const isVisible = col ? !col.props.hidden : true;
            const key = col ? col.props.columnKey || col.props.field || i : i;

            return isVisible && (
                <HeaderCell key={key} value={props.value} tableProps={props.tableProps} column={col} tabIndex={props.tabIndex} empty={props.empty} resizableColumns={props.resizableColumns} groupRowsBy={props.groupRowsBy} groupRowSortField={props.groupRowSortField}
                    sortMode={props.sortMode} sortField={props.sortField} sortOrder={props.sortOrder} multiSortMeta={props.multiSortMeta} allSortableDisabled={isAllSortableDisabled} onSortableChange={onSortableChange} sortableDisabledFields={sortableDisabledFieldsState}
                    filterDisplay={props.filterDisplay} filters={props.filters} filtersStore={props.filtersStore} onFilterChange={props.onFilterChange} onFilterApply={props.onFilterApply}
                    onColumnMouseDown={props.onColumnMouseDown} onColumnDragStart={props.onColumnDragStart} onColumnDragOver={props.onColumnDragOver} onColumnDragLeave={props.onColumnDragLeave} onColumnDrop={props.onColumnDrop}
                    onColumnResizeStart={props.onColumnResizeStart} onColumnResizerClick={props.onColumnResizerClick} onColumnResizerDoubleClick={props.onColumnResizerDoubleClick}
                    showSelectAll={props.showSelectAll} allRowsSelected={props.allRowsSelected} onColumnCheckboxChange={onCheckboxChange} reorderableColumns={props.reorderableColumns} onSortChange={props.onSortChange} />
            )
        });
    }

    const createCheckbox = (selectionMode) => {
        if (props.showSelectAll && selectionMode === 'multiple') {
            const allRowsSelected = props.allRowsSelected(props.value);

            return (
                <HeaderCheckbox checked={allRowsSelected} onChange={onCheckboxChange} disabled={props.empty} />
            )
        }

        return null;
    }

    const createFilter = (column, filter) => {
        if (filter) {
            return (
                <ColumnFilter display="row" column={column} filters={props.filters} filtersStore={props.filtersStore} onFilterChange={props.onFilterChange} onFilterApply={props.onFilterApply} />
            )
        }

        return null;
    }

    const createFilterCells = () => {
        return React.Children.map(props.columns, (col, i) => {
            const isVisible = !col.props.hidden;

            if (isVisible) {
                const { filterHeaderStyle, style, filterHeaderClassName, className, frozen, columnKey, field, selectionMode, filter } = col.props;
                const colStyle = { ...(filterHeaderStyle || {}), ...(style || {}) };
                const colClassName = classNames('p-filter-column', filterHeaderClassName, className, { 'p-frozen-column': frozen });
                const colKey = columnKey || field || i;
                const checkbox = createCheckbox(selectionMode);
                const filterRow = createFilter(col, filter);

                return (
                    <th key={colKey} style={colStyle} className={colClassName}>
                        {checkbox}
                        {filterRow}
                    </th>
                )
            }

            return null;
        });
    }

    const createContent = () => {
        if (props.headerColumnGroup) {
            const rows = React.Children.toArray(props.headerColumnGroup.props.children);

            return rows.map((row, i) => <tr key={i} role="row">{createGroupHeaderCells(row)}</tr>);
        }
        else {
            const headerRow = <tr role="row">{createHeaderCells(props.columns)}</tr>;
            const filterRow = props.filterDisplay === 'row' && <tr role="row">{createFilterCells()}</tr>;

            return (
                <>
                    {headerRow}
                    {filterRow}
                </>
            )
        }
    }

    const content = createContent();

    return (
        <thead className="p-datatable-thead">
            {content}
        </thead>
    )
});

TableHeader.displayName = 'TableHeader';
