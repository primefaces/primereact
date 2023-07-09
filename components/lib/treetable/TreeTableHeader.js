import * as React from 'react';
import { ColumnBase } from '../column/ColumnBase';
import { ColumnGroupBase } from '../columngroup/ColumnGroupBase';
import { SortAltIcon } from '../icons/sortalt';
import { SortAmountDownIcon } from '../icons/sortamountdown';
import { SortAmountUpAltIcon } from '../icons/sortamountupalt';
import { InputText } from '../inputtext/InputText';
import { RowBase } from '../row/RowBase';
import { Tooltip } from '../tooltip/Tooltip';
import { classNames, DomHandler, IconUtils, mergeProps, ObjectUtils } from '../utils/Utils';

export const TreeTableHeader = React.memo((props) => {
    const filterTimeout = React.useRef(null);

    const getColumnProps = (column) => {
        return props.ptCallbacks.ptmo(ColumnBase.getCProps(column));
    };

    const getColumnPTOptions = (column, key) => {
        return props.ptCallbacks.ptmo(ColumnBase.getCProp(column, 'pt'), key, {
            props: getColumnProps(column),
            parent: props.metaData
        });
    };

    const onHeaderClick = (event, column) => {
        if (getColumnProp(column, 'sortable')) {
            const targetNode = event.target;

            if (
                DomHandler.hasClass(targetNode, 'p-sortable-column') ||
                DomHandler.hasClass(targetNode, 'p-column-title') ||
                DomHandler.hasClass(targetNode, 'p-sortable-column-icon') ||
                DomHandler.hasClass(targetNode.parentElement, 'p-sortable-column-icon')
            ) {
                props.onSort({
                    originalEvent: event,
                    sortField: getColumnProp(column, 'sortField') || getColumnProp(column, 'field'),
                    sortFunction: getColumnProp(column, 'sortFunction'),
                    sortable: getColumnProp(column, 'sortable')
                });

                DomHandler.clearSelection();
            }
        }
    };

    const onHeaderMouseDown = (event, column) => {
        if (props.reorderableColumns && getColumnProp(column, 'reorderable')) {
            if (event.target.nodeName !== 'INPUT') event.currentTarget.draggable = true;
            else if (event.target.nodeName === 'INPUT') event.currentTarget.draggable = false;
        }
    };

    const onHeaderKeyDown = (event, column) => {
        if (event.key === 'Enter') {
            onHeaderClick(event, column);
            event.preventDefault();
        }
    };

    const getMultiSortMetaDataIndex = (column) => {
        if (props.multiSortMeta) {
            for (let i = 0; i < props.multiSortMeta.length; i++) {
                if (props.multiSortMeta[i].field === getColumnProp(column, 'field')) {
                    return i;
                }
            }
        }

        return -1;
    };

    const onResizerMouseDown = (event, column) => {
        if (props.resizableColumns && props.onResizeStart) {
            props.onResizeStart({
                originalEvent: event,
                columnEl: event.target.parentElement,
                column: column
            });
        }
    };

    const onDragStart = (event, column) => {
        if (props.onDragStart) {
            props.onDragStart({
                originalEvent: event,
                column
            });
        }
    };

    const onDragOver = (event, column) => {
        if (props.onDragOver) {
            props.onDragOver({
                originalEvent: event,
                column
            });
        }
    };

    const onDragLeave = (event, column) => {
        if (props.onDragLeave) {
            props.onDragLeave({
                originalEvent: event,
                column
            });
        }
    };

    const onDrop = (event, column) => {
        if (props.onDrop) {
            props.onDrop({
                originalEvent: event,
                column
            });
        }
    };

    const onFilterInput = (e, column) => {
        if (getColumnProp(column, 'filter') && props.onFilter) {
            if (filterTimeout.current) {
                clearTimeout(filterTimeout.current);
            }

            let filterValue = e.target.value;

            filterTimeout.current = setTimeout(() => {
                props.onFilter({
                    value: filterValue,
                    field: getColumnProp(column, 'field'),
                    matchMode: getColumnProp(column, 'filterMatchMode') || 'startsWith'
                });
                filterTimeout.current = null;
            }, props.filterDelay);
        }
    };

    const hasColumnFilter = (columns) => {
        if (columns) {
            for (let col of columns) {
                if (getColumnProp(col, 'filter')) {
                    return true;
                }
            }
        }

        return false;
    };

    const getAriaSort = (column, sorted, sortOrder) => {
        if (getColumnProp(column, 'sortable')) {
            if (sorted && sortOrder < 0) return 'descending';
            else if (sorted && sortOrder > 0) return 'ascending';
            else return 'none';
        } else {
            return null;
        }
    };

    const getColumnProp = (column, ...args) => {
        return column ? (typeof args[0] === 'string' ? ColumnBase.getCProp(column, args[0]) : ColumnBase.getCProp(args[0] || column, args[1])) : null;
    };

    const createSortIcon = (column, sorted, sortOrder) => {
        if (getColumnProp(column, 'sortable')) {
            let iconClassName = 'p-sortable-column-icon';
            const sortIconProps = mergeProps(
                {
                    className: iconClassName
                },
                getColumnPTOptions(column, 'sortIcon')
            );
            let icon = sorted ? sortOrder < 0 ? <SortAmountDownIcon {...sortIconProps} /> : <SortAmountUpAltIcon {...sortIconProps} /> : <SortAltIcon {...sortIconProps} />;
            let sortIcon = IconUtils.getJSXIcon(props.sortIcon || icon, { className: iconClassName }, { props, sorted, sortOrder });

            return sortIcon;
        } else {
            return null;
        }
    };

    const createResizer = (column) => {
        if (props.resizableColumns) {
            const columnResizerProps = mergeProps(
                {
                    className: 'p-column-resizer p-clickable',
                    onMouseDown: (e) => onResizerMouseDown(e, column)
                },
                getColumnPTOptions(column, 'columnResizer')
            );

            return <span {...columnResizerProps} />;
        } else {
            return null;
        }
    };

    const createSortBadge = (column, sortMetaDataIndex) => {
        if (sortMetaDataIndex !== -1 && props.multiSortMeta && props.multiSortMeta.length > 1) {
            const sortBadgeProps = mergeProps(
                {
                    className: 'p-sortable-column-badge'
                },
                getColumnPTOptions(column, 'sortBadge')
            );

            return <span {...sortBadgeProps}>{sortMetaDataIndex + 1}</span>;
        }

        return null;
    };

    const createTitle = (column, options) => {
        const title = ObjectUtils.getJSXElement(getColumnProp(column, 'header'), { props: options });
        const headerTitleProps = mergeProps(
            {
                className: 'p-column-title'
            },
            getColumnPTOptions(column, 'headerTitle')
        );

        return <span {...headerTitleProps}>{title}</span>;
    };

    const createHeaderCell = (column, options) => {
        let filterElement;

        if (getColumnProp(column, 'filter') && options.renderFilter) {
            filterElement = getColumnProp(column, 'filterElement') || (
                <InputText
                    onInput={(e) => onFilterInput(e, column)}
                    type={props.filterType}
                    defaultValue={props.filters && props.filters[getColumnProp(column, 'field')] ? props.filters[getColumnProp(column, 'field')].value : null}
                    className="p-column-filter"
                    placeholder={getColumnProp(column, 'filterPlaceholder')}
                    maxLength={getColumnProp(column, 'filterMaxLength')}
                    pt={getColumnPTOptions(column, 'filterInput')}
                />
            );
        }

        if (options.filterOnly) {
            const headerCellProps = mergeProps(
                {
                    key: getColumnProp(column, 'columnKey') || getColumnProp(column, 'field') || options.index,
                    className: classNames('p-filter-column', getColumnProp(column, 'filterHeaderClassName')),
                    style: getColumnProp(column, 'filterHeaderStyle') || getColumnProp(column, 'style'),
                    rowSpan: getColumnProp(column, 'rowSpan'),
                    colSpan: getColumnProp(column, 'colSpan')
                },
                getColumnPTOptions(column, 'headerCell'),
                getColumnPTOptions(column, 'root')
            );

            return <th {...headerCellProps}>{filterElement}</th>;
        } else {
            const headerCellRef = React.createRef(null);
            const sortMetaDataIndex = getMultiSortMetaDataIndex(column);
            const multiSortMetaData = sortMetaDataIndex !== -1 ? props.multiSortMeta[sortMetaDataIndex] : null;
            const singleSorted = getColumnProp(column, 'field') === props.sortField;
            const multipleSorted = multiSortMetaData !== null;
            const sorted = getColumnProp(column, 'sortable') && (singleSorted || multipleSorted);
            const frozen = getColumnProp(column, 'frozen');
            let sortOrder = 0;

            if (singleSorted) sortOrder = props.sortOrder;
            else if (multipleSorted) sortOrder = multiSortMetaData.order;

            const sortIconElement = createSortIcon(column, sorted, sortOrder);
            const ariaSortData = getAriaSort(column, sorted, sortOrder);
            const sortBadge = createSortBadge(column, sortMetaDataIndex);

            const className = classNames(getColumnProp(column, 'headerClassName') || getColumnProp(column, 'className'), {
                'p-sortable-column': getColumnProp(column, 'sortable'),
                'p-highlight': sorted,
                'p-frozen-column': frozen,
                'p-resizable-column': props.resizableColumns && getColumnProp(column, 'resizeable'),
                'p-reorderable-column': props.reorderableColumns && getColumnProp(column, 'reorderable') && !frozen
            });

            const headerTooltip = getColumnProp(column, 'headerTooltip');
            const hasTooltip = ObjectUtils.isNotEmpty(headerTooltip);
            const title = createTitle(column, options);
            const resizer = createResizer(column);
            const headerCellProps = mergeProps(
                {
                    ref: headerCellRef,
                    className: className,
                    style: getColumnProp(column, 'headerStyle') || getColumnProp(column, 'style'),
                    tabIndex: getColumnProp(column, 'sortable') ? props.tabIndex : null,
                    onClick: (e) => onHeaderClick(e, column),
                    onMouseDown: (e) => onHeaderMouseDown(e, column),
                    onKeyDown: (e) => onHeaderKeyDown(e, column),
                    rowSpan: getColumnProp(column, 'rowSpan'),
                    colSpan: getColumnProp(column, 'colSpan'),
                    'aria-sort': ariaSortData,
                    onDragStart: (e) => onDragStart(e, column),
                    onDragOver: (e) => onDragOver(e, column),
                    onDragLeave: (e) => onDragLeave(e, column),
                    onDrop: (e) => onDrop(e, column)
                },
                getColumnPTOptions(column, 'headerCell'),
                getColumnPTOptions(column, 'root')
            );

            return (
                <React.Fragment key={column.columnKey || column.field || options.index}>
                    <th {...headerCellProps}>
                        {resizer}
                        {title}
                        {sortIconElement}
                        {sortBadge}
                        {filterElement}
                    </th>
                    {hasTooltip && <Tooltip target={headerCellRef} content={headerTooltip} {...getColumnProp(column, 'headerTooltipOptions')} />}
                </React.Fragment>
            );
        }
    };

    const createHeaderRow = (row, index) => {
        const rowColumns = React.Children.toArray(RowBase.getCProp(row, 'children'));
        const rowHeaderCells = rowColumns.map((col, i) => createHeaderCell(col, { index: i, filterOnly: false, renderFilter: true }));
        const headerRowProps = mergeProps(props.ptCallbacks.ptm('headerRow'));

        return (
            <tr {...headerRowProps} key={index}>
                {rowHeaderCells}
            </tr>
        );
    };

    const createColumnGroup = () => {
        const rows = React.Children.toArray(ColumnGroupBase.getCProp(props.columnGroup, 'children'));

        return rows.map(createHeaderRow);
    };

    const createColumns = (columns) => {
        if (columns) {
            const headerRowProps = mergeProps(props.ptCallbacks.ptm('headerRow'));

            if (hasColumnFilter(columns)) {
                return (
                    <>
                        <tr {...headerRowProps}>{columns.map((col, i) => createHeaderCell(col, { index: i, filterOnly: false, renderFilter: false }))}</tr>
                        <tr {...headerRowProps}>{columns.map((col, i) => createHeaderCell(col, { index: i, filterOnly: true, renderFilter: true }))}</tr>
                    </>
                );
            } else {
                return <tr {...headerRowProps}>{columns.map((col, i) => createHeaderCell(col, { index: i, filterOnly: false, renderFilter: false }))}</tr>;
            }
        } else {
            return null;
        }
    };

    const content = props.columnGroup ? createColumnGroup() : createColumns(props.columns);
    const theadProps = mergeProps(
        {
            className: 'p-treetable-thead'
        },
        props.ptCallbacks.ptm('thead')
    );

    return <thead {...theadProps}>{content}</thead>;
});

TreeTableHeader.displayName = 'TreeTableHeader';
