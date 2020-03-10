import React, { Component } from 'react';
import {InputText} from '../inputtext/InputText';
import classNames from 'classnames';
import {RowCheckbox} from './RowCheckbox';
import DomHandler from '../utils/DomHandler';

export class HeaderCell extends Component {

    constructor(props) {
        super(props);

        this.state = {
            badgeVisible: false
        }

        this.onClick = this.onClick.bind(this);
        this.onFilterInput = this.onFilterInput.bind(this);
        this.onMouseDown = this.onMouseDown.bind(this);
        this.onResizerMouseDown = this.onResizerMouseDown.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
    }

    onClick(event) {
        if (this.props.columnProps.sortable) {
            let targetNode = event.target;
            if(DomHandler.hasClass(targetNode, 'p-sortable-column') || DomHandler.hasClass(targetNode, 'p-column-title')
                || DomHandler.hasClass(targetNode, 'p-sortable-column-icon') || DomHandler.hasClass(targetNode.parentElement, 'p-sortable-column-icon')) {
                this.props.onSort({
                    originalEvent: event,
                    sortField: this.props.columnProps.sortField || this.props.columnProps.field,
                    sortFunction: this.props.columnProps.sortFunction,
                    sortable: this.props.columnProps.sortable
                });

                DomHandler.clearSelection();
            }
        }
    }

    onFilterInput(e) {
        if(this.props.columnProps.filter && this.props.onFilter) {
            if(this.filterTimeout) {
                clearTimeout(this.filterTimeout);
            }

            let filterValue = e.target.value;
            this.filterTimeout = setTimeout(() => {
                this.props.onFilter({
                    value: filterValue,
                    field: this.props.columnProps.filterField || this.props.columnProps.field,
                    matchMode: this.props.columnProps.filterMatchMode
                });
                this.filterTimeout = null;
            }, this.filterDelay);
        }
    }

    onResizerMouseDown(event) {
        if(this.props.resizableColumns && this.props.onColumnResizeStart) {
            this.props.onColumnResizeStart({
                originalEvent: event,
                columnEl: event.target.parentElement,
                columnProps: this.props.columnProps
            });

            event.preventDefault();
        }
    }

    onMouseDown(event) {
        if (this.props.reorderableColumns && this.props.columnProps.reorderable) {
            if (event.target.nodeName !== 'INPUT')
                this.el.draggable = true;
            else if (event.target.nodeName === 'INPUT')
                this.el.draggable = false;
        }
    }

    onKeyDown(event) {
        if (event.key === 'Enter' && event.currentTarget === this.el) {
            this.onClick(event);
            event.preventDefault();
        }
    }

    getMultiSortMetaDataIndex() {
        if(this.props.multiSortMeta) {
            let columnSortField = this.props.columnProps.field || this.props.columnProps.sortField;
            for(let i = 0; i < this.props.multiSortMeta.length; i++) {
                if(this.props.multiSortMeta[i].field === columnSortField) {
                    return i;
                }
            }
        }

        return -1;
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        return {
            badgeVisible: nextProps.multiSortMeta && nextProps.multiSortMeta.length > 1
        }
    }

    getAriaSort(sorted, sortOrder) {
        if (this.props.columnProps.sortable) {
            let sortIcon = sorted ? sortOrder < 0 ? 'pi-sort-down' : 'pi-sort-up': 'pi-sort';
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

    renderSortIcon(sorted, sortOrder) {
        if (this.props.columnProps.sortable) {
            let sortIcon = sorted ? sortOrder < 0 ? 'pi-sort-down' : 'pi-sort-up': 'pi-sort';
            let sortIconClassName = classNames('p-sortable-column-icon pi pi-fw', sortIcon);

            return (
                <span className={sortIconClassName}></span>
            );
        }
        else {
            return null;
        }
    }

    renderSortBadge(sortMetaDataIndex) {
        if (sortMetaDataIndex !== -1 && this.state.badgeVisible) {
            return <span className="p-sortable-column-badge">{sortMetaDataIndex + 1}</span>;
        }

        return null;
    }

    render() {
        let filterElement, headerCheckbox;

        if (this.props.columnProps.filter && this.props.renderOptions.renderFilter) {
            let filterField = this.props.columnProps.filterField || this.props.columnProps.field;
            filterElement = this.props.columnProps.filterElement||<InputText onInput={this.onFilterInput} type={this.props.columnProps.filterType} defaultValue={this.props.filters && this.props.filters[filterField] ? this.props.filters[filterField].value : null}
                        className="p-column-filter" placeholder={this.props.columnProps.filterPlaceholder} maxLength={this.props.columnProps.filterMaxLength} />;
        }

        if (this.props.columnProps.selectionMode === 'multiple' && this.props.renderOptions.renderHeaderCheckbox) {
            headerCheckbox = <RowCheckbox onClick={this.props.onHeaderCheckboxClick} selected={this.props.headerCheckboxSelected} disabled={!this.props.value || this.props.value.length === 0} />;
        }

        if (this.props.renderOptions.filterOnly) {
            return (
                <th ref={(el) => this.el = el} className={classNames('p-filter-column', this.props.columnProps.filterHeaderClassName)} style={this.props.columnProps.filterHeaderStyle||this.props.columnProps.style}
                    colSpan={this.props.columnProps.colSpan} rowSpan={this.props.columnProps.rowSpan}>
                    {filterElement}
                    {headerCheckbox}
                </th>
            );
        }
        else {
            let sortMetaDataIndex = this.getMultiSortMetaDataIndex();
            let multiSortMetaData = sortMetaDataIndex !== -1 ? this.props.multiSortMeta[sortMetaDataIndex] : null;
            let singleSorted = this.props.sortField !== null ? (this.props.columnProps.field === this.props.sortField || this.props.columnProps.sortField === this.props.sortField) : false;
            let multipleSorted = multiSortMetaData !== null;
            let sortOrder = 0;
            let resizer = this.props.resizableColumns && <span className="p-column-resizer p-clickable" onMouseDown={this.onResizerMouseDown}></span>;

            if(singleSorted)
                sortOrder = this.props.sortOrder;
            else if(multipleSorted)
                sortOrder = multiSortMetaData.order;

            let sorted = this.props.columnProps.sortable && (singleSorted || multipleSorted);
            let className = classNames({'p-sortable-column': this.props.columnProps.sortable,
                            'p-highlight': sorted,
                            'p-resizable-column': this.props.resizableColumns,
                            'p-selection-column': this.props.columnProps.selectionMode}, this.props.columnProps.headerClassName||this.props.columnProps.className);

            let sortIconElement = this.renderSortIcon(sorted, sortOrder);
            let ariaSortData = this.getAriaSort(sorted, sortOrder);
            let sortBadge = this.renderSortBadge(sortMetaDataIndex);

            return (
                <th ref={(el) => this.el = el} tabIndex={this.props.columnProps.sortable ? this.props.columnProps.tabIndex : null}
                    className={className} style={this.props.columnProps.headerStyle||this.props.columnProps.style} onClick={this.onClick} onMouseDown={this.onMouseDown} onKeyDown={this.onKeyDown}
                    colSpan={this.props.columnProps.colSpan} rowSpan={this.props.columnProps.rowSpan} aria-sort={ariaSortData}
                    onDragStart={this.props.onDragStart} onDragOver={this.props.onDragOver} onDragLeave={this.props.onDragLeave} onDrop={this.props.onDrop}>
                    {resizer}
                    <span className="p-column-title">{this.props.columnProps.header}</span>
                    {sortIconElement}
                    {sortBadge}
                    {filterElement}
                    {headerCheckbox}
                </th>
            );
        }
    }
}
