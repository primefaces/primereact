import * as React from 'react';
import { ColumnBase } from '../column/ColumnBase';
import { useMergeProps, usePrevious } from '../hooks/Hooks';
import { SortAltIcon } from '../icons/sortalt';
import { SortAmountDownIcon } from '../icons/sortamountdown';
import { SortAmountUpAltIcon } from '../icons/sortamountupalt';
import { Tooltip } from '../tooltip/Tooltip';
import { DomHandler, IconUtils, ObjectUtils, classNames } from '../utils/Utils';
import { ColumnFilter } from './ColumnFilter';
import { HeaderCheckbox } from './HeaderCheckbox';

export const HeaderCell = React.memo((props) => {
    const [styleObjectState, setStyleObjectState] = React.useState({});
    const elementRef = React.useRef(null);
    const prevColumn = usePrevious(props.column);
    const mergeProps = useMergeProps();
    const { metaData: parentMetaData, ptCallbacks, index } = props;
    const { ptm, ptmo, cx } = props.ptCallbacks;

    const params = { index };
    const parentParams = { ...parentMetaData, ...params };
    const getColumnProps = () => ColumnBase.getCProps(props.column);

    const getColumnPTOptions = (key) => {
        const cProps = getColumnProps();
        const columnMetaData = {
            props: cProps,
            parent: parentParams,
            hostName: props.hostName,
            state: {
                styleObject: styleObjectState
            },
            context: {
                index: props.index,
                sorted: getSortMeta().sorted,
                resizable: props.resizableColumns,
                size: props.metaData.props.size,
                showGridlines: props.metaData.props.showGridlines
            }
        };

        return mergeProps(ptm(`column.${key}`, { column: columnMetaData }), ptm(`column.${key}`, columnMetaData), ptmo(cProps, key, columnMetaData));
    };

    const isBadgeVisible = () => {
        return props.multiSortMeta && props.multiSortMeta.length > 1;
    };

    const isSortableDisabled = () => {
        return !getColumnProp('sortable') || (getColumnProp('sortable') && (props.allSortableDisabled || getColumnProp('sortableDisabled')));
    };

    const getColumnProp = (...args) => {
        return props.column ? (typeof args[0] === 'string' ? ColumnBase.getCProp(props.column, args[0]) : ColumnBase.getCProp(args[0] || props.column, args[1])) : null;
    };

    const getStyle = () => {
        const headerStyle = getColumnProp('headerStyle');
        const columnStyle = getColumnProp('style');

        return getColumnProp('frozen') ? Object.assign({}, columnStyle, headerStyle, styleObjectState) : Object.assign({}, columnStyle, headerStyle);
    };

    const getMultiSortMetaIndex = () => {
        return props.multiSortMeta.findIndex((meta) => meta.field === getColumnProp('field') || meta.field === getColumnProp('sortField'));
    };

    const getSortMeta = () => {
        let sorted = false;
        let sortOrder = 0;
        let metaIndex = -1;

        if (props.sortMode === 'single') {
            sorted = props.sortField && (props.sortField === getColumnProp('field') || props.sortField === getColumnProp('sortField'));
            sortOrder = sorted ? props.sortOrder : 0;
        } else if (props.sortMode === 'multiple') {
            metaIndex = getMultiSortMetaIndex();

            if (metaIndex > -1) {
                sorted = true;
                sortOrder = props.multiSortMeta[metaIndex].order;
            }
        }

        return { sorted, sortOrder, metaIndex };
    };

    const getAriaSort = ({ sorted, sortOrder }) => {
        if (getColumnProp('sortable')) {
            if (sorted && sortOrder < 0) {
                return 'descending';
            } else if (sorted && sortOrder > 0) {
                return 'ascending';
            }

            return 'none';
        }

        return null;
    };

    const updateStickyPosition = () => {
        if (getColumnProp('frozen')) {
            let styleObject = { ...styleObjectState };
            let align = getColumnProp('alignFrozen');

            if (align === 'right') {
                let right = 0;
                let next = elementRef.current && elementRef.current.nextElementSibling;

                if (next && next.classList.contains('p-frozen-column')) {
                    right = DomHandler.getOuterWidth(next) + parseFloat(next.style.right || 0);
                }

                styleObject.right = right + 'px';
            } else {
                let left = 0;
                let prev = elementRef.current && elementRef.current.previousElementSibling;

                while (prev) {
                    if (prev && prev.classList.contains('p-frozen-column')) {
                        left = DomHandler.getOuterWidth(prev) + parseFloat(prev.style.left || 0);
                        elementRef.current.style.left = left + 'px';
                        break;
                    }

                    prev = prev.previousElementSibling;
                }

                styleObject.left = left + 'px';
            }

            let filterRow = elementRef.current.parentElement.nextElementSibling;

            if (filterRow) {
                let index = DomHandler.index(elementRef.current);

                filterRow.children[index].style.left = styleObject.left;
                filterRow.children[index].style.right = styleObject.right;
            }

            const isSameStyle = styleObjectState.left === styleObject.left && styleObjectState.right === styleObject.right;

            !isSameStyle && setStyleObjectState(styleObject);
        }
    };

    const updateSortableDisabled = (prevColumn) => {
        if (getColumnProp(prevColumn, 'sortableDisabled') !== getColumnProp('sortableDisabled') || getColumnProp(prevColumn, 'sortable') !== getColumnProp('sortable')) {
            props.onSortableChange();
        }
    };

    const onClick = (event) => {
        if (!isSortableDisabled()) {
            let targetNode = event.target;

            if (
                DomHandler.getAttribute(targetNode, 'data-p-sortable-column') === true ||
                DomHandler.getAttribute(targetNode, 'data-pc-section') === 'headertitle' ||
                DomHandler.getAttribute(targetNode, 'data-pc-section') === 'headercontent' ||
                DomHandler.getAttribute(targetNode, 'data-pc-section') === 'sortIcon' ||
                DomHandler.getAttribute(targetNode.parentElement, 'data-pc-section') === 'sortIcon' ||
                (targetNode.closest('[data-p-sortable-column="true"]') && !targetNode.closest('[data-pc-section="filtermenubutton"]'))
            ) {
                DomHandler.clearSelection();

                props.onSortChange({
                    originalEvent: event,
                    column: props.column,
                    sortableDisabledFields: props.sortableDisabledFields
                });
            }
        }
    };

    const onMouseDown = (event) => {
        props.onColumnMouseDown({ originalEvent: event, column: props.column });
    };

    const onKeyDown = (event) => {
        if ((event.code == 'Enter' || event.code === 'NumpadEnter' || event.code == 'Space') && event.target === elementRef.current && DomHandler.getAttribute(event.currentTarget, 'data-p-sortable-column') === true) {
            onClick(event);

            event.preventDefault();
        }
    };

    const onDragStart = (event) => {
        props.onColumnDragStart({ originalEvent: event, column: props.column });
    };

    const onDragOver = (event) => {
        props.onColumnDragOver({ originalEvent: event, column: props.column });
    };

    const onDragLeave = (event) => {
        props.onColumnDragLeave({ originalEvent: event, column: props.column });
    };

    const onDrop = (event) => {
        props.onColumnDrop({ originalEvent: event, column: props.column });
    };

    const onResizeStart = (event) => {
        props.onColumnResizeStart({ originalEvent: event, column: props.column });
    };

    const onResizerClick = (event) => {
        if (props.onColumnResizerClick) {
            props.onColumnResizerClick({
                originalEvent: event,
                element: event.currentTarget.parentElement,
                column: props.column
            });

            event.preventDefault();
        }
    };

    const onResizerDoubleClick = (event) => {
        if (props.onColumnResizerDoubleClick) {
            props.onColumnResizerDoubleClick({
                originalEvent: event,
                element: event.currentTarget.parentElement,
                column: props.column
            });

            event.preventDefault();
        }
    };

    React.useEffect(() => {
        if (getColumnProp('frozen')) {
            updateStickyPosition();
        }

        updateSortableDisabled(prevColumn);
    });

    const createResizer = () => {
        if (props.resizableColumns && !getColumnProp('frozen')) {
            const columnResizerProps = mergeProps(
                {
                    className: cx('columnResizer'),
                    onMouseDown: (e) => onResizeStart(e),
                    onTouchStart: (e) => onResizeStart(e),
                    onClick: (e) => onResizerClick(e),
                    onDoubleClick: (e) => onResizerDoubleClick(e)
                },
                getColumnPTOptions('columnResizer')
            );

            return <span {...columnResizerProps} />;
        }

        return null;
    };

    const createTitle = () => {
        const title = ObjectUtils.getJSXElement(getColumnProp('header'), { props: props.tableProps });
        const headerTitleProps = mergeProps(
            {
                className: cx('headerTitle')
            },
            getColumnPTOptions('headerTitle')
        );

        return <span {...headerTitleProps}>{title}</span>;
    };

    const createSortIcon = ({ sorted, sortOrder }) => {
        if (getColumnProp('sortable')) {
            const sortIconProps = mergeProps(
                {
                    className: cx('sortIcon')
                },
                getColumnPTOptions('sortIcon')
            );

            const sortProps = mergeProps(getColumnPTOptions('sort'));

            let icon = sorted ? sortOrder < 0 ? <SortAmountDownIcon {...sortIconProps} /> : <SortAmountUpAltIcon {...sortIconProps} /> : <SortAltIcon {...sortIconProps} />;
            let sortIcon = IconUtils.getJSXIcon(props.sortIcon || icon, { ...sortIconProps }, { props, sorted, sortOrder });

            return <span {...sortProps}>{sortIcon}</span>;
        }

        return null;
    };

    const createBadge = ({ metaIndex }) => {
        if (metaIndex !== -1 && isBadgeVisible()) {
            const value = props.groupRowsBy && props.groupRowsBy === props.groupRowSortField ? metaIndex : metaIndex + 1;
            const sortBadgeProps = mergeProps(
                {
                    className: cx('sortBadge')
                },
                getColumnPTOptions('root'),
                getColumnPTOptions('sortBadge')
            );

            return <span {...sortBadgeProps}>{value}</span>;
        }

        return null;
    };

    const createCheckbox = () => {
        if (props.showSelectAll && getColumnProp('selectionMode') === 'multiple' && props.filterDisplay !== 'row') {
            const allRowsSelected = props.allRowsSelected(props.value);

            return (
                <HeaderCheckbox hostName={props.hostName} column={props.column} checked={allRowsSelected} onChange={props.onColumnCheckboxChange} disabled={props.empty} ptCallbacks={ptCallbacks} metaData={parentMetaData} unstyled={props.unstyled} />
            );
        }

        return null;
    };

    const createFilter = () => {
        if (props.filterDisplay === 'menu' && getColumnProp('filter')) {
            return (
                <ColumnFilter
                    hostName={props.hostName}
                    display="menu"
                    column={props.column}
                    filters={props.filters}
                    onFilterChange={props.onFilterChange}
                    onFilterApply={props.onFilterApply}
                    filtersStore={props.filtersStore}
                    filterIcon={props.filterIcon}
                    filterClearIcon={props.filterClearIcon}
                    ptCallbacks={ptCallbacks}
                    metaData={parentMetaData}
                    unstyled={props.unstyled}
                />
            );
        }

        return null;
    };

    const createHeader = (sortMeta) => {
        const title = createTitle();
        const sortIcon = createSortIcon(sortMeta);
        const badge = createBadge(sortMeta);
        const checkbox = createCheckbox();
        const filter = createFilter();
        const headerContentProps = mergeProps(
            {
                className: cx('headerContent')
            },
            getColumnPTOptions('headerContent')
        );

        return (
            <div {...headerContentProps}>
                {title}
                {sortIcon}
                {badge}
                {checkbox}
                {filter}
            </div>
        );
    };

    const createElement = () => {
        const _isSortableDisabled = isSortableDisabled();
        const sortMeta = getSortMeta();
        const style = getStyle();
        const align = getColumnProp('alignHeader') || getColumnProp('align');
        const frozen = getColumnProp('frozen');
        const tabIndex = getColumnProp('sortable') && !_isSortableDisabled ? props.tabIndex : null;
        const colSpan = getColumnProp('colSpan');
        const rowSpan = getColumnProp('rowSpan');
        const ariaSort = getAriaSort(sortMeta);
        const headerTooltip = getColumnProp('headerTooltip');
        const headerClassName = getColumnProp('headerClassName');
        const hasTooltip = ObjectUtils.isNotEmpty(headerTooltip);
        const headerTooltipOptions = getColumnProp('headerTooltipOptions');

        const resizer = createResizer();
        const header = createHeader(sortMeta);
        const headerCellProps = mergeProps(
            {
                className: classNames(headerClassName, cx('headerCell', { headerProps: props, frozen, sortMeta, align, _isSortableDisabled, getColumnProp })),
                style,
                role: 'columnheader',
                onClick: (e) => onClick(e),
                onKeyDown: (e) => onKeyDown(e),
                onMouseDown: (e) => onMouseDown(e),
                onDragStart: (e) => onDragStart(e),
                onDragOver: (e) => onDragOver(e),
                onDragLeave: (e) => onDragLeave(e),
                onDrop: (e) => onDrop(e),
                tabIndex,
                colSpan,
                rowSpan,
                'aria-sort': ariaSort,
                'data-p-sortable-column': getColumnProp('sortable'),
                'data-p-resizable-column': props.resizableColumns,
                'data-p-highlight': sortMeta.sorted,
                'data-p-filter-column': !props.metaData.props.headerColumnGroup && props.filterDisplay === 'row',
                'data-p-frozen-column': getColumnProp('frozen'),
                'data-p-reorderable-column': props.reorderableColumns
            },
            getColumnPTOptions('root'),
            getColumnPTOptions('headerCell')
        );

        return (
            <>
                <th ref={elementRef} {...headerCellProps}>
                    {resizer}
                    {header}
                </th>
                {hasTooltip && <Tooltip target={elementRef} content={headerTooltip} pt={getColumnPTOptions('tooltip')} unstyled={props.unstyled} {...headerTooltipOptions} />}
            </>
        );
    };

    const element = createElement();

    return element;
});

HeaderCell.displayName = 'HeaderCell';
