import React, { Component } from 'react';
import { classNames } from '../utils/Utils';
import { HeaderCell } from './HeaderCell';
import { HeaderCheckbox } from './HeaderCheckbox';
import { ColumnFilter } from './ColumnFilter';

export class TableHeader extends Component {

    constructor(props) {
        super(props);

        this.state = {
            sortableDisabledFields: [],
            allSortableDisabled: false,
            styleObject: {}
        }

        this.onSortableChange = this.onSortableChange.bind(this);
        this.onCheckboxChange = this.onCheckboxChange.bind(this);
    }

    isSingleSort() {
        return this.props.sortMode === 'single';
    }

    isMultipleSort() {
        return this.props.sortMode === 'multiple';
    }

    isAllSortableDisabled() {
        return this.isSingleSort() && this.state.allSortableDisabled;
    }

    isColumnSorted(column) {
        return this.props.sortField !== null ? (column.props.field === this.props.sortField || column.props.sortField === this.props.sortField) : false;
    }

    updateSortableDisabled() {
        if (this.isSingleSort() || (this.isMultipleSort() && this.props.onSortChange)) {
            let sortableDisabledFields = [];
            let allSortableDisabled = false;
            this.props.columns.forEach((column) => {
                if (column.props.sortableDisabled) {
                    sortableDisabledFields.push(column.props.sortField || column.props.field);

                    if (!allSortableDisabled && this.isColumnSorted(column)) {
                        allSortableDisabled = true;
                    }
                }
            });

            this.setState({ sortableDisabledFields, allSortableDisabled });
        }
    }

    onSortableChange() {
        this.updateSortableDisabled();
    }

    onCheckboxChange(e) {
        this.props.onColumnCheckboxChange(e, this.props.value);
    }

    componentDidMount() {
        this.updateSortableDisabled();
    }

    renderGroupHeaderCells(row) {
        const columns = React.Children.toArray(row.props.children);

        return this.renderHeaderCells(columns);
    }

    renderHeaderCells(columns) {
        return React.Children.map(columns, (col, i) => {
            const isVisible = !col.props.hidden;

            return isVisible && (
                <HeaderCell key={col.props.columnKey || col.props.field || i} value={this.props.value} tableProps={this.props.tableProps} column={col} tabIndex={this.props.tabIndex} empty={this.props.empty} resizableColumns={this.props.resizableColumns} groupRowsBy={this.props.groupRowsBy} groupRowSortField={this.props.groupRowSortField}
                    sortMode={this.props.sortMode} sortField={this.props.sortField} sortOrder={this.props.sortOrder} multiSortMeta={this.props.multiSortMeta} allSortableDisabled={this.isAllSortableDisabled()} onSortableChange={this.onSortableChange} sortableDisabledFields={this.state.sortableDisabledFields}
                    filterDisplay={this.props.filterDisplay} filters={this.props.filters} filtersStore={this.props.filtersStore} onFilterChange={this.props.onFilterChange} onFilterApply={this.props.onFilterApply}
                    onColumnMouseDown={this.props.onColumnMouseDown} onColumnDragStart={this.props.onColumnDragStart} onColumnDragOver={this.props.onColumnDragOver} onColumnDragLeave={this.props.onColumnDragLeave} onColumnDrop={this.props.onColumnDrop}
                    onColumnResizeStart={this.props.onColumnResizeStart} onColumnResizerClick={this.props.onColumnResizerClick} onColumnResizerDoubleClick={this.props.onColumnResizerDoubleClick}
                    allRowsSelected={this.props.allRowsSelected} onColumnCheckboxChange={this.onCheckboxChange} reorderableColumns={this.props.reorderableColumns} onSortChange={this.props.onSortChange} />
            );
        });
    }

    renderFilterCells() {
        return React.Children.map(this.props.columns, (col, i) => {
            const isVisible = !col.props.hidden;

            if (isVisible) {
                const { filterHeaderStyle, style, filterHeaderClassName, className, frozen, columnKey, field, selectionMode, filter } = col.props;
                const colStyle = { ...(filterHeaderStyle || {}), ...(style || {}) };
                const colClassName = classNames('p-filter-column', filterHeaderClassName, className, { 'p-frozen-column': frozen });
                const colKey = columnKey || field || i;
                const allRowsSelected = selectionMode === 'multiple' && this.props.allRowsSelected(this.props.value);

                return (
                    <th key={colKey} style={colStyle} className={colClassName}>
                        {selectionMode === 'multiple' && <HeaderCheckbox checked={allRowsSelected} onChange={this.onCheckboxChange} disabled={this.props.empty} />}
                        {filter && <ColumnFilter display="row" column={col} filters={this.props.filters} filtersStore={this.props.filtersStore} onFilterChange={this.props.onFilterChange} onFilterApply={this.props.onFilterApply} />}
                    </th>
                )
            }

            return null;
        });
    }

    renderContent() {
        if (this.props.headerColumnGroup) {
            const rows = React.Children.toArray(this.props.headerColumnGroup.props.children);

            return rows.map((row, i) => <tr key={i} role="row">{this.renderGroupHeaderCells(row)}</tr>);
        }
        else {
            const headerRow = <tr role="row">{this.renderHeaderCells(this.props.columns)}</tr>;
            const filterRow = this.props.filterDisplay === 'row' && <tr role="row">{this.renderFilterCells()}</tr>;

            return (
                <>
                    {headerRow}
                    {filterRow}
                </>
            );
        }
    }

    render() {
        let content = this.renderContent();

        return (
            <thead className="p-datatable-thead">
                {content}
            </thead>
        );
    }
}
