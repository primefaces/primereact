import * as React from 'react';
import { ColumnBase } from '../column/ColumnBase';
import { ColumnGroupBase } from '../columngroup/ColumnGroupBase';
import { useMergeProps, useMountEffect } from '../hooks/Hooks';
import { RowBase } from '../row/RowBase';
import { classNames } from '../utils/Utils';
import { ColumnFilter } from './ColumnFilter';
import { HeaderCell } from './HeaderCell';
import { HeaderCheckbox } from './HeaderCheckbox';

export const TableHeader = React.memo((props) => {
    const [sortableDisabledFieldsState, setSortableDisabledFieldsState] = React.useState([]);
    const [allSortableDisabledState, setAllSortableDisabledState] = React.useState(false);
    const mergeProps = useMergeProps();
    const isSingleSort = props.sortMode === 'single';
    const isMultipleSort = props.sortMode === 'multiple';
    const isAllSortableDisabled = isSingleSort && allSortableDisabledState;
    const { ptm, ptmo, cx } = props.ptCallbacks;

    const getColumnProp = (column, name) => {
        return ColumnBase.getCProp(column, name);
    };

    const getColumnProps = (column) => ColumnBase.getCProps(column);
    const getRowProps = (row) => ColumnGroupBase.getCProps(row);

    const getColumnGroupProps = () => {
        return props.headerColumnGroup ? ptmo(ColumnGroupBase.getCProps(props.headerColumnGroup)) : undefined;
    };

    const getColumnGroupPTOptions = (key) => {
        const cGProps = getColumnGroupProps();

        const columnGroupMetaData = {
            props: cGProps,
            parent: props.metaData,
            hostName: props.hostName,
            state: {
                sortableDisabledFields: sortableDisabledFieldsState,
                allSortableDisabled: allSortableDisabledState
            }
        };

        return mergeProps(ptm(`columnGroup.${key}`, { columnGroup: columnGroupMetaData }), ptm(`columnGroup.${key}`, columnGroupMetaData), ptmo(cGProps, key, columnGroupMetaData));
    };

    const getColumnPTOptions = (column, key) => {
        const cProps = getColumnProps(column);
        const columnMetaData = {
            props: cProps,
            parent: props.metaData,
            hostName: props.hostName,
            state: {
                sortableDisabledFields: sortableDisabledFieldsState,
                allSortableDisabled: allSortableDisabledState
            }
        };

        return mergeProps(ptm(`column.${key}`, { column: columnMetaData }), ptm(`column.${key}`, columnMetaData), ptmo(cProps, key, columnMetaData));
    };

    const getRowPTOptions = (row, key) => {
        const rProps = getRowProps(row);
        const rowMetaData = {
            props: rProps,
            parent: props.metaData,
            hostName: props.hostName
        };

        return mergeProps(ptm(`row.${key}`, { row: rowMetaData }), ptm(`row.${key}`, rowMetaData), ptmo(rProps, key, rowMetaData));
    };

    const isColumnSorted = (column) => {
        return props.sortField !== null ? getColumnProp(column, 'field') === props.sortField || getColumnProp(column, 'sortField') === props.sortField : false;
    };

    const updateSortableDisabled = () => {
        if (isSingleSort || (isMultipleSort && props.onSortChange)) {
            let sortableDisabledFields = [];
            let allSortableDisabled = false;

            props.columns.forEach((column) => {
                if (getColumnProp(column, 'sortableDisabled')) {
                    sortableDisabledFields.push(getColumnProp(column, 'sortField') || getColumnProp(column, 'field'));

                    if (!allSortableDisabled && isColumnSorted(column)) {
                        allSortableDisabled = true;
                    }
                }
            });

            setSortableDisabledFieldsState(sortableDisabledFields);
            setAllSortableDisabledState(allSortableDisabled);
        }
    };

    const onSortableChange = () => {
        updateSortableDisabled();
    };

    const onCheckboxChange = (e) => {
        props.onColumnCheckboxChange(e, props.value);
    };

    useMountEffect(() => {
        updateSortableDisabled();
    });

    const createGroupHeaderCells = (row) => {
        const columns = React.Children.toArray(RowBase.getCProp(row, 'children'));

        return createHeaderCells(columns);
    };

    const createHeaderCells = (columns) => {
        return React.Children.map(columns, (col, i) => {
            const isVisible = col ? !getColumnProp(col, 'hidden') : true;
            const key = col ? getColumnProp(col, 'columnKey') || getColumnProp(col, 'field') || i : i;

            return (
                isVisible && (
                    <HeaderCell
                        hostName={props.hostName}
                        allRowsSelected={props.allRowsSelected}
                        allSortableDisabled={isAllSortableDisabled}
                        column={col}
                        index={i}
                        empty={props.empty}
                        filterClearIcon={props.filterClearIcon}
                        filterDisplay={props.filterDisplay}
                        filterIcon={props.filterIcon}
                        filters={props.filters}
                        filtersStore={props.filtersStore}
                        groupRowSortField={props.groupRowSortField}
                        groupRowsBy={props.groupRowsBy}
                        key={key}
                        multiSortMeta={props.multiSortMeta}
                        onColumnCheckboxChange={onCheckboxChange}
                        onColumnDragLeave={props.onColumnDragLeave}
                        onColumnDragOver={props.onColumnDragOver}
                        onColumnDragStart={props.onColumnDragStart}
                        onColumnDrop={props.onColumnDrop}
                        onColumnMouseDown={props.onColumnMouseDown}
                        onColumnResizeStart={props.onColumnResizeStart}
                        onColumnResizerClick={props.onColumnResizerClick}
                        onColumnResizerDoubleClick={props.onColumnResizerDoubleClick}
                        onFilterApply={props.onFilterApply}
                        onFilterChange={props.onFilterChange}
                        onSortChange={props.onSortChange}
                        onSortableChange={onSortableChange}
                        reorderableColumns={props.reorderableColumns}
                        resizableColumns={props.resizableColumns}
                        showSelectAll={props.showSelectAll}
                        sortField={props.sortField}
                        sortIcon={props.sortIcon}
                        sortMode={props.sortMode}
                        sortOrder={props.sortOrder}
                        sortableDisabledFields={sortableDisabledFieldsState}
                        tabIndex={props.tabIndex}
                        tableProps={props.tableProps}
                        value={props.value}
                        ptCallbacks={props.ptCallbacks}
                        metaData={props.metaData}
                        unstyled={props.unstyled}
                    />
                )
            );
        });
    };

    const createCheckbox = (selectionMode) => {
        if (props.showSelectAll && selectionMode === 'multiple') {
            const allRowsSelected = props.allRowsSelected(props.value);

            return <HeaderCheckbox hostName={props.hostName} checked={allRowsSelected} onChange={onCheckboxChange} disabled={props.empty} ptCallbacks={props.ptCallbacks} metaData={props.metaData} />;
        }

        return null;
    };

    const createFilter = (column, filter) => {
        if (filter) {
            return (
                <ColumnFilter
                    hostName={props.hostName}
                    display="row"
                    column={column}
                    filterClearIcon={props.filterClearIcon}
                    filterIcon={props.filterIcon}
                    filters={props.filters}
                    filtersStore={props.filtersStore}
                    metaData={props.metaData}
                    onFilterApply={props.onFilterApply}
                    onFilterChange={props.onFilterChange}
                    ptCallbacks={props.ptCallbacks}
                    unstyled={props.unstyled}
                />
            );
        }

        return null;
    };

    const createFilterCells = () => {
        return React.Children.map(props.columns, (col, i) => {
            const isVisible = !getColumnProp(col, 'hidden');

            if (isVisible) {
                const { filterHeaderStyle, style, filterHeaderClassName, className, frozen, columnKey, field, selectionMode, filter } = ColumnBase.getCProps(col);
                const colStyle = { ...(filterHeaderStyle || {}), ...(style || {}) };
                const colKey = columnKey || field || i;
                const checkbox = createCheckbox(selectionMode);
                const filterRow = createFilter(col, filter);
                const headerCellProps = mergeProps(
                    {
                        style: colStyle,
                        className: classNames(filterHeaderClassName, className, cx('headerCell', { frozen, column: col })),
                        key: colKey
                    },
                    getColumnPTOptions(col, 'root'),
                    getColumnPTOptions(col, 'headerCell')
                );

                return (
                    <th {...headerCellProps}>
                        {checkbox}
                        {filterRow}
                    </th>
                );
            }

            return null;
        });
    };

    const createContent = () => {
        if (props.headerColumnGroup) {
            const rows = React.Children.toArray(ColumnGroupBase.getCProp(props.headerColumnGroup, 'children'));

            return rows.map((row, i) => {
                const headerRowProps = mergeProps(
                    {
                        role: 'row'
                    },
                    getRowPTOptions(row, 'root')
                );

                return (
                    <tr {...headerRowProps} key={i}>
                        {createGroupHeaderCells(row)}
                    </tr>
                );
            });
        } else {
            const headerRowProps = mergeProps(
                {
                    role: 'row'
                },
                ptm('headerRow', { hostName: props.hostName })
            );
            const headerRow = <tr {...headerRowProps}>{createHeaderCells(props.columns)}</tr>;
            const filterRow = props.filterDisplay === 'row' && <tr {...headerRowProps}>{createFilterCells()}</tr>;

            return (
                <>
                    {headerRow}
                    {filterRow}
                </>
            );
        }
    };

    const content = createContent();
    const theadProps = mergeProps(
        {
            className: cx('thead'),
            role: 'rowgroup'
        },
        getColumnGroupPTOptions('root'),
        ptm('thead', { hostName: props.hostName })
    );

    return <thead {...theadProps}>{content}</thead>;
});

TableHeader.displayName = 'TableHeader';
