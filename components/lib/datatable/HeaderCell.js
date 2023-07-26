import * as React from 'react';
import { ColumnBase } from '../column/ColumnBase';
import { usePrevious } from '../hooks/Hooks';
import { SortAltIcon } from '../icons/sortalt';
import { SortAmountDownIcon } from '../icons/sortamountdown';
import { SortAmountUpAltIcon } from '../icons/sortamountupalt';
import { Tooltip } from '../tooltip/Tooltip';
import { classNames, DomHandler, IconUtils, mergeProps, ObjectUtils } from '../utils/Utils';
import { ColumnFilter } from './ColumnFilter';
import { HeaderCheckbox } from './HeaderCheckbox';

export const HeaderCell = React.memo((props) => {
    const [styleObjectState, setStyleObjectState] = React.useState({});
    const elementRef = React.useRef(null);
    const prevColumn = usePrevious(props.column);
    const { metaData: parentMetaData, ptCallbacks, index } = props;

    const params = { index };
    const parentParams = { ...parentMetaData, ...params };
    const getColumnProps = () => ColumnBase.getCProps(props.column);

    const getColumnPTOptions = (key) => {
        return ptCallbacks.ptmo(ColumnBase.getCProp(props.column, 'pt'), key, {
            props: getColumnProps(),
            parent: parentParams,
            state: {
                styleObject: styleObjectState
            }
        });
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
            if (sorted && sortOrder < 0) return 'descending';
            else if (sorted && sortOrder > 0) return 'ascending';
            else return 'none';
        }

        return null;
    };

    const updateStickyPosition = () => {
        if (getColumnProp('frozen')) {
            let styleObject = { ...styleObjectState };
            let align = getColumnProp('alignFrozen');

            if (align === 'right') {
                let right = 0;
                let next = elementRef.current.nextElementSibling;

                if (next) {
                    right = DomHandler.getOuterWidth(next) + parseFloat(next.style.right || 0);
                }

                styleObject['right'] = right + 'px';
            } else {
                let left = 0;
                let prev = elementRef.current.previousElementSibling;

                if (prev) {
                    left = DomHandler.getOuterWidth(prev) + parseFloat(prev.style.left || 0);
                }

                styleObject['left'] = left + 'px';
            }

            let filterRow = elementRef.current.parentElement.nextElementSibling;

            if (filterRow) {
                let index = DomHandler.index(elementRef.current);

                filterRow.children[index].style.left = styleObject['left'];
                filterRow.children[index].style.right = styleObject['right'];
            }

            const isSameStyle = styleObjectState['left'] === styleObject['left'] && styleObjectState['right'] === styleObject['right'];

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
                DomHandler.hasClass(targetNode, 'p-sortable-column') ||
                DomHandler.hasClass(targetNode, 'p-column-title') ||
                DomHandler.hasClass(targetNode, 'p-column-header-content') ||
                DomHandler.hasClass(targetNode, 'p-sortable-column-icon') ||
                DomHandler.hasClass(targetNode.parentElement, 'p-sortable-column-icon')
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
        if (event.key === 'Enter' && event.currentTarget === elementRef.current && DomHandler.hasClass(event.currentTarget, 'p-sortable-column')) {
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

    const onResizerMouseDown = (event) => {
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
                    className: 'p-column-resizer',
                    onMouseDown: (e) => onResizerMouseDown(e),
                    onClick: (e) => onResizerClick(e),
                    onDoubleClick: (e) => onResizerDoubleClick(e)
                },
                getColumnPTOptions('columnResizer')
            );

            return <span {...columnResizerProps}></span>;
        }

        return null;
    };

    const createTitle = () => {
        const title = ObjectUtils.getJSXElement(getColumnProp('header'), { props: props.tableProps });
        const headerTitleProps = mergeProps(
            {
                className: 'p-column-title'
            },
            getColumnPTOptions('headerTitle')
        );

        return <span {...headerTitleProps}>{title}</span>;
    };

    const createSortIcon = ({ sorted, sortOrder }) => {
        if (getColumnProp('sortable')) {
            let iconClassName = 'p-sortable-column-icon';
            const sortIconProps = mergeProps(
                {
                    className: iconClassName
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
                    className: 'p-sortable-column-badge'
                },
                getColumnPTOptions('sortBadge'),
                getColumnPTOptions('root')
            );

            return <span {...sortBadgeProps}>{value}</span>;
        }

        return null;
    };

    const createCheckbox = () => {
        if (props.showSelectAll && getColumnProp('selectionMode') === 'multiple' && props.filterDisplay !== 'row') {
            const allRowsSelected = props.allRowsSelected(props.value);

            return <HeaderCheckbox checked={allRowsSelected} onChange={props.onColumnCheckboxChange} disabled={props.empty} ptCallbacks={ptCallbacks} metaData={parentMetaData} />;
        }

        return null;
    };

    const createFilter = () => {
        if (props.filterDisplay === 'menu' && getColumnProp('filter')) {
            return (
                <ColumnFilter
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
                className: 'p-column-header-content'
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
        const className = classNames(getColumnProp('headerClassName'), getColumnProp('className'), {
            'p-sortable-column': getColumnProp('sortable'),
            'p-resizable-column': props.resizableColumns && getColumnProp('resizeable'),
            'p-highlight': sortMeta.sorted,
            'p-frozen-column': frozen,
            'p-selection-column': getColumnProp('selectionMode'),
            'p-sortable-disabled': getColumnProp('sortable') && _isSortableDisabled,
            'p-reorderable-column': props.reorderableColumns && getColumnProp('reorderable') && !frozen,
            [`p-align-${align}`]: !!align
        });
        const tabIndex = getColumnProp('sortable') && !_isSortableDisabled ? props.tabIndex : null;
        const colSpan = getColumnProp('colSpan');
        const rowSpan = getColumnProp('rowSpan');
        const ariaSort = getAriaSort(sortMeta);
        const headerTooltip = getColumnProp('headerTooltip');
        const hasTooltip = ObjectUtils.isNotEmpty(headerTooltip);
        const headerTooltipOptions = getColumnProp('headerTooltipOptions');

        const resizer = createResizer();
        const header = createHeader(sortMeta);
        const headerCellProps = mergeProps(
            {
                className,
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
                'aria-sort': ariaSort
            },
            getColumnPTOptions('headerCell'),
            getColumnPTOptions('root')
        );

        return (
            <>
                <th ref={elementRef} {...headerCellProps}>
                    {resizer}
                    {header}
                </th>
                {hasTooltip && <Tooltip target={elementRef} content={headerTooltip} {...headerTooltipOptions} pt={getColumnPTOptions('tooltip')} />}
            </>
        );
    };

    const element = createElement();

    return element;
});

HeaderCell.displayName = 'HeaderCell';
