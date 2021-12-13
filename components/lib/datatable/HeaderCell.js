import React, { Component } from 'react';
import { DomHandler, classNames, ObjectUtils } from '../utils/Utils';
import { HeaderCheckbox } from './HeaderCheckbox';
import { ColumnFilter } from './ColumnFilter';

export class HeaderCell extends Component {

    constructor(props) {
        super(props);

        this.state = {
            styleObject: {}
        }

        this.onClick = this.onClick.bind(this);
        this.onMouseDown = this.onMouseDown.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);

        // drag
        this.onDragStart = this.onDragStart.bind(this);
        this.onDragOver = this.onDragOver.bind(this);
        this.onDragLeave = this.onDragLeave.bind(this);
        this.onDrop = this.onDrop.bind(this);

        // resize
        this.onResizerMouseDown = this.onResizerMouseDown.bind(this);
        this.onResizerClick = this.onResizerClick.bind(this);
        this.onResizerDoubleClick = this.onResizerDoubleClick.bind(this);
    }

    isBadgeVisible() {
        return this.props.multiSortMeta && this.props.multiSortMeta.length > 1;
    }

    isSortableDisabled() {
        return !this.getColumnProp('sortable') || (this.getColumnProp('sortable') && (this.props.allSortableDisabled || this.getColumnProp('sortableDisabled')));
    }

    getColumnProp(...args) {
        return this.props.column ? typeof args[0] === 'string' ? this.props.column.props[args[0]] : (args[0] || this.props.column).props[args[1]] : null;
    }

    getStyle() {
        const headerStyle = this.getColumnProp('headerStyle');
        const columnStyle = this.getColumnProp('style');

        return this.getColumnProp('frozen') ? Object.assign({}, columnStyle, headerStyle, this.state.styleObject) : Object.assign({}, columnStyle, headerStyle);
    }

    getMultiSortMetaIndex() {
        return this.props.multiSortMeta.findIndex(meta => (meta.field === this.getColumnProp('field') || meta.field === this.getColumnProp('sortField')));
    }

    getSortMeta() {
        let sorted = false;
        let sortOrder = 0;
        let metaIndex = -1;

        if (this.props.sortMode === 'single') {
            sorted = this.props.sortField && (this.props.sortField === this.getColumnProp('field') || this.props.sortField === this.getColumnProp('sortField'));
            sortOrder = sorted ? this.props.sortOrder : 0;
        }
        else if (this.props.sortMode === 'multiple') {
            metaIndex = this.getMultiSortMetaIndex();
            if (metaIndex > -1) {
                sorted = true;
                sortOrder = this.props.multiSortMeta[metaIndex].order;
            }
        }

        return { sorted, sortOrder, metaIndex };
    }

    getAriaSort({ sorted, sortOrder }) {
        if (this.getColumnProp('sortable')) {
            let sortIcon = sorted ? sortOrder < 0 ? 'pi-sort-amount-down' : 'pi-sort-amount-up-alt' : 'pi-sort-alt';
            if (sortIcon === 'pi-sort-amount-down')
                return 'descending';
            else if (sortIcon === 'pi-sort-amount-up-alt')
                return 'ascending';
            else
                return 'none';
        }

        return null;
    }

    updateStickyPosition() {
        if (this.getColumnProp('frozen')) {
            let styleObject = { ...this.state.styleObject };
            let align = this.getColumnProp('alignFrozen');
            if (align === 'right') {
                let right = 0;
                let next = this.el.nextElementSibling;
                if (next) {
                    right = DomHandler.getOuterWidth(next) + parseFloat(next.style.right || 0);
                }
                styleObject['right'] = right + 'px';
            }
            else {
                let left = 0;
                let prev = this.el.previousElementSibling;
                if (prev) {
                    left = DomHandler.getOuterWidth(prev) + parseFloat(prev.style.left || 0);
                }
                styleObject['left'] = left + 'px';
            }

            let filterRow = this.el.parentElement.nextElementSibling;
            if (filterRow) {
                let index = DomHandler.index(this.el);
                filterRow.children[index].style.left = styleObject['left'];
                filterRow.children[index].style.right = styleObject['right'];
            }

            const isSameStyle = this.state.styleObject['left'] === styleObject['left'] && this.state.styleObject['right'] === styleObject['right'];
            !isSameStyle && this.setState({ styleObject });
        }
    }

    updateSortableDisabled(prevColumn) {
        if (this.getColumnProp(prevColumn, 'sortableDisabled') !== this.getColumnProp('sortableDisabled') || this.getColumnProp(prevColumn, 'sortable') !== this.getColumnProp('sortable')) {
            this.props.onSortableChange();
        }
    }

    onClick(event) {
        if (!this.isSortableDisabled()) {
            let targetNode = event.target;
            if (DomHandler.hasClass(targetNode, 'p-sortable-column') || DomHandler.hasClass(targetNode, 'p-column-title') || DomHandler.hasClass(targetNode, 'p-column-header-content')
                || DomHandler.hasClass(targetNode, 'p-sortable-column-icon') || DomHandler.hasClass(targetNode.parentElement, 'p-sortable-column-icon')) {
                DomHandler.clearSelection();

                this.props.onSortChange({
                    originalEvent: event,
                    column: this.props.column,
                    sortableDisabledFields: this.props.sortableDisabledFields
                });
            }
        }
    }

    onMouseDown(event) {
        this.props.onColumnMouseDown({ originalEvent: event, column: this.props.column });
    }

    onKeyDown(event) {
        if (event.key === 'Enter' && event.currentTarget === this.el && DomHandler.hasClass(event.currentTarget, 'p-sortable-column')) {
            this.onClick(event);

            event.preventDefault();
        }
    }

    onDragStart(event) {
        this.props.onColumnDragStart({ originalEvent: event, column: this.props.column });
    }

    onDragOver(event) {
        this.props.onColumnDragOver({ originalEvent: event, column: this.props.column });
    }

    onDragLeave(event) {
        this.props.onColumnDragLeave({ originalEvent: event, column: this.props.column });
    }

    onDrop(event) {
        this.props.onColumnDrop({ originalEvent: event, column: this.props.column });
    }

    onResizerMouseDown(event) {
        this.props.onColumnResizeStart({ originalEvent: event, column: this.props.column });
    }

    onResizerClick(event) {
        if (this.props.onColumnResizerClick) {
            this.props.onColumnResizerClick({
                originalEvent: event,
                element: event.currentTarget.parentElement,
                column: this.props.column
            });

            event.preventDefault();
        }
    }

    onResizerDoubleClick(event) {
        if (this.props.onColumnResizerDoubleClick) {
            this.props.onColumnResizerDoubleClick({
                originalEvent: event,
                element: event.currentTarget.parentElement,
                column: this.props.column
            });

            event.preventDefault();
        }
    }

    componentDidMount() {
        if (this.getColumnProp('frozen')) {
            this.updateStickyPosition();
        }
    }

    componentDidUpdate(prevProps) {
        if (this.getColumnProp('frozen')) {
            this.updateStickyPosition();
        }

        this.updateSortableDisabled(prevProps.column);
    }

    renderResizer() {
        if (this.props.resizableColumns && !this.getColumnProp('frozen')) {
            return (
                <span className="p-column-resizer" onMouseDown={this.onResizerMouseDown} onClick={this.onResizerClick} onDoubleClick={this.onResizerDoubleClick}></span>
            )
        }

        return null;
    }

    renderTitle() {
        const title = ObjectUtils.getJSXElement(this.getColumnProp('header'), { props: this.props.tableProps });

        return <span className="p-column-title">{title}</span>;
    }

    renderSortIcon({ sorted, sortOrder }) {
        if (this.getColumnProp('sortable')) {
            let sortIcon = sorted ? sortOrder < 0 ? 'pi-sort-amount-down' : 'pi-sort-amount-up-alt' : 'pi-sort-alt';
            let className = classNames('p-sortable-column-icon pi pi-fw', sortIcon);

            return (
                <span className={className}></span>
            )
        }

        return null;
    }

    renderBadge({ metaIndex }) {
        if (metaIndex !== -1 && this.isBadgeVisible()) {
            const value = (this.props.groupRowsBy && this.props.groupRowsBy === this.props.groupRowSortField) ? metaIndex : metaIndex + 1;

            return <span className="p-sortable-column-badge">{value}</span>;
        }

        return null;
    }

    renderCheckbox() {
        if (this.props.showSelectAll && this.getColumnProp('selectionMode') === 'multiple' && this.props.filterDisplay !== 'row') {
            const allRowsSelected = this.props.allRowsSelected(this.props.value);

            return (
                <HeaderCheckbox checked={allRowsSelected} onChange={this.props.onColumnCheckboxChange} disabled={this.props.empty} />
            )
        }

        return null;
    }

    renderFilter() {
        if (this.props.filterDisplay === 'menu' && this.getColumnProp('filter')) {
            return (
                <ColumnFilter display="menu" column={this.props.column} filters={this.props.filters} onFilterChange={this.props.onFilterChange} onFilterApply={this.props.onFilterApply} filtersStore={this.props.filtersStore} />
            )
        }

        return null;
    }

    renderHeader(sortMeta) {
        const title = this.renderTitle();
        const sortIcon = this.renderSortIcon(sortMeta);
        const badge = this.renderBadge(sortMeta);
        const checkbox = this.renderCheckbox();
        const filter = this.renderFilter();

        return (
            <div className="p-column-header-content">
                {title}
                {sortIcon}
                {badge}
                {checkbox}
                {filter}
            </div>
        )
    }

    renderElement() {
        const isSortableDisabled = this.isSortableDisabled();
        const sortMeta = this.getSortMeta();
        const style = this.getStyle();
        const className = classNames(this.getColumnProp('headerClassName'), this.getColumnProp('className'), {
            'p-sortable-column': this.getColumnProp('sortable'),
            'p-resizable-column': this.props.resizableColumns,
            'p-highlight': sortMeta.sorted,
            'p-frozen-column': this.getColumnProp('frozen'),
            'p-selection-column': this.getColumnProp('selectionMode'),
            'p-sortable-disabled': this.getColumnProp('sortable') && isSortableDisabled,
            'p-reorderable-column': this.props.reorderableColumns && this.getColumnProp('reorderable')
        });
        const tabIndex = this.getColumnProp('sortable') && !isSortableDisabled ? this.props.tabIndex : null;
        const colSpan = this.getColumnProp('colSpan');
        const rowSpan = this.getColumnProp('rowSpan');
        const ariaSort = this.getAriaSort(sortMeta);

        const resizer = this.renderResizer();
        const header = this.renderHeader(sortMeta);

        return (
            <th ref={(el) => this.el = el} style={style} className={className} tabIndex={tabIndex} role="columnheader"
                onClick={this.onClick} onKeyDown={this.onKeyDown} onMouseDown={this.onMouseDown}
                onDragStart={this.onDragStart} onDragOver={this.onDragOver} onDragLeave={this.onDragLeave} onDrop={this.onDrop}
                colSpan={colSpan} rowSpan={rowSpan} aria-sort={ariaSort}>
                {resizer}
                {header}
            </th>
        )
    }

    render() {
        return this.renderElement();
    }
}
