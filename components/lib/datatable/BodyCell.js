import * as React from 'react';
import { ariaLabel } from '../api/Api';
import { ColumnBase } from '../column/ColumnBase';
import { useEventListener, useMergeProps, useUnmountEffect, useUpdateEffect } from '../hooks/Hooks';
import { BarsIcon } from '../icons/bars';
import { CheckIcon } from '../icons/check';
import { ChevronDownIcon } from '../icons/chevrondown';
import { ChevronRightIcon } from '../icons/chevronright';
import { PencilIcon } from '../icons/pencil';
import { TimesIcon } from '../icons/times';
import { OverlayService } from '../overlayservice/OverlayService';
import { Ripple } from '../ripple/Ripple';
import { DomHandler, IconUtils, ObjectUtils, classNames } from '../utils/Utils';
import { RowCheckbox } from './RowCheckbox';
import { RowRadioButton } from './RowRadioButton';

export const BodyCell = React.memo((props) => {
    const mergeProps = useMergeProps();
    const [editingState, setEditingState] = React.useState(props.editing);
    const [editingRowDataState, setEditingRowDataState] = React.useState(props.rowData);
    const [styleObjectState, setStyleObjectState] = React.useState({});
    const elementRef = React.useRef(null);
    const keyHelperRef = React.useRef(null);
    const overlayEventListener = React.useRef(null);
    const selfClick = React.useRef(false);
    const tabindexTimeout = React.useRef(null);
    const initFocusTimeout = React.useRef(null);
    const { ptm, ptmo, cx } = props.ptCallbacks;

    const getColumnProp = (name) => ColumnBase.getCProp(props.column, name);
    const getColumnProps = () => ColumnBase.getCProps(props.column);

    const getColumnPTOptions = (key) => {
        const cProps = getColumnProps();
        const columnMetaData = {
            props: cProps,
            parent: props.metaData,
            hostName: props.hostName,
            state: {
                styleObject: styleObjectState,
                editing: editingState,
                editingRowData: editingRowDataState
            },
            context: {
                index: props.index,
                size: props.metaData.props.size,
                showGridlines: props.metaData.props.showGridlines
            }
        };

        return mergeProps(ptm(`column.${key}`, { column: columnMetaData }), ptm(`column.${key}`, columnMetaData), ptmo(cProps, key, columnMetaData));
    };

    const field = getColumnProp('field') || `field_${props.index}`;
    const editingKey = props.dataKey ? (props.rowData && props.rowData[props.dataKey]) || props.rowIndex : props.rowIndex;

    const [bindDocumentClickListener, unbindDocumentClickListener] = useEventListener({
        type: 'click',
        listener: (e) => {
            if (!selfClick.current && isOutsideClicked(e.target)) {
                // #2666 for overlay components and outside is clicked
                setTimeout(() => {
                    switchCellToViewMode(e, true);
                }, 0);
            }

            selfClick.current = false;
        },
        options: true
    });

    const isEditable = () => {
        return getColumnProp('editor');
    };

    const isSelected = () => {
        return props.selection ? (props.selection instanceof Array ? findIndex(props.selection) > -1 : equals(props.selection)) : false;
    };

    const equalsData = (data) => {
        return props.compareSelectionBy === 'equals' ? data === props.rowData : ObjectUtils.equals(data, props.rowData, props.dataKey);
    };

    const equals = (selectedCell) => {
        return selectedCell && (selectedCell.rowIndex === props.rowIndex || equalsData(selectedCell.rowData)) && (selectedCell.field === field || selectedCell.cellIndex === props.index);
    };

    const isOutsideClicked = (target) => {
        return elementRef.current && !(elementRef.current.isSameNode(target) || elementRef.current.contains(target));
    };

    const getVirtualScrollerOption = (option) => {
        return props.virtualScrollerOptions ? props.virtualScrollerOptions[option] : null;
    };

    const getStyle = () => {
        const bodyStyle = getColumnProp('bodyStyle');
        const columnStyle = getColumnProp('style');

        return getColumnProp('frozen') ? Object.assign({}, columnStyle, bodyStyle, styleObjectState) : Object.assign({}, columnStyle, bodyStyle);
    };

    const getCellParams = () => {
        return {
            value: resolveFieldData(),
            field: field,
            rowData: props.rowData,
            rowIndex: props.rowIndex,
            cellIndex: props.index,
            selected: isSelected(),
            column: props.column,
            props
        };
    };

    const getCellCallbackParams = (event) => {
        const params = getCellParams();

        return {
            originalEvent: event,
            ...params
        };
    };

    const resolveFieldData = (data) => {
        return ObjectUtils.resolveFieldData(data || props.rowData, field);
    };

    const getEditingRowData = () => {
        return props.editingMeta && props.editingMeta[editingKey] ? props.editingMeta[editingKey].data : props.rowData;
    };

    const getTabIndex = (cellSelected) => {
        return props.allowCellSelection ? (cellSelected ? 0 : props.rowIndex === 0 && props.index === 0 ? props.tabIndex : -1) : null;
    };

    const findIndex = (collection) => {
        return (collection || []).findIndex((data) => equals(data));
    };

    const closeCell = (event) => {
        const params = getCellCallbackParams(event);
        const onBeforeCellEditHide = getColumnProp('onBeforeCellEditHide');

        if (onBeforeCellEditHide) {
            onBeforeCellEditHide(params);
        }

        /* When using the 'tab' key, the focus event of the next cell is not called in IE. */
        setTimeout(() => {
            setEditingState(false);
            unbindDocumentClickListener();
            OverlayService.off('overlay-click', overlayEventListener.current);
            overlayEventListener.current = null;
            selfClick.current = false;
        }, 1);
    };

    const switchCellToViewMode = (event, submit) => {
        const callbackParams = getCellCallbackParams(event);

        setEditingRowDataState((prev) => {
            const newRowData = prev;
            const newValue = resolveFieldData(newRowData);
            const params = { ...callbackParams, newRowData, newValue };
            const onCellEditCancel = getColumnProp('onCellEditCancel');
            const cellEditValidator = getColumnProp('cellEditValidator');
            const onCellEditComplete = getColumnProp('onCellEditComplete');

            if (!submit && onCellEditCancel) {
                onCellEditCancel(params);
            }

            let valid = true;

            if (!submit && cellEditValidator) {
                valid = cellEditValidator(params);
            }

            if (valid) {
                if (submit && onCellEditComplete) {
                    setTimeout(() => onCellEditComplete(params));
                }

                closeCell(event);
            } else {
                event.preventDefault();
            }

            return newRowData;
        });
    };

    const findNextSelectableCell = (cell) => {
        const nextCell = cell.nextElementSibling;

        return nextCell ? (DomHandler.getAttribute(nextCell, 'data-p-selectable-cell') ? nextCell : findNextSelectableCell(nextCell)) : null;
    };

    const findPrevSelectableCell = (cell) => {
        const prevCell = cell.previousElementSibling;

        return prevCell ? (DomHandler.getAttribute(prevCell, 'data-p-selectable-cell') ? prevCell : findPrevSelectableCell(prevCell)) : null;
    };

    const findDownSelectableCell = (cell) => {
        const downRow = cell.parentElement.nextElementSibling;
        const downCell = downRow ? downRow.children[props.index] : null;

        return downRow && downCell ? (DomHandler.getAttribute(downRow, 'data-p-selectable-row') && DomHandler.getAttribute(downCell, 'data-p-selectable-cell') ? downCell : findDownSelectableCell(downCell)) : null;
    };

    const findUpSelectableCell = (cell) => {
        const upRow = cell.parentElement.previousElementSibling;
        const upCell = upRow ? upRow.children[props.index] : null;

        return upRow && upCell ? (DomHandler.getAttribute(upRow, 'data-p-selectable-row') && DomHandler.getAttribute(upCell, 'data-p-selectable-cell') ? upCell : findUpSelectableCell(upCell)) : null;
    };

    const changeTabIndex = (currentCell, nextCell) => {
        if (currentCell && nextCell) {
            currentCell.tabIndex = -1;
            nextCell.tabIndex = props.tabIndex;
        }
    };

    const focusOnElement = () => {
        clearTimeout(tabindexTimeout.current);
        tabindexTimeout.current = setTimeout(() => {
            if (editingState) {
                const focusableEl = props.editMode === 'cell' ? DomHandler.getFirstFocusableElement(elementRef.current, ':not([data-pc-section="editorkeyhelperlabel"])') : DomHandler.findSingle(elementRef.current, '[data-p-row-editor-save="true"]');

                focusableEl && focusableEl.focus();
            }

            keyHelperRef.current && (keyHelperRef.current.tabIndex = editingState ? -1 : 0);
        }, 1);
    };

    const focusOnInit = () => {
        clearTimeout(initFocusTimeout.current);
        initFocusTimeout.current = setTimeout(() => {
            const focusableEl = props.editMode === 'row' ? DomHandler.findSingle(elementRef.current, '[data-p-row-editor-init="true"]') : null;

            focusableEl && focusableEl.focus();
        }, 1);
    };

    const updateStickyPosition = () => {
        if (getColumnProp('frozen')) {
            let styleObject = { ...styleObjectState };
            let align = getColumnProp('alignFrozen');

            if (align === 'right') {
                let right = 0;
                let next = elementRef.current && elementRef.current.nextElementSibling;

                if (next) {
                    right = DomHandler.getOuterWidth(next) + parseFloat(next.style.right || 0);
                }

                styleObject['right'] = right + 'px';
            } else {
                let left = 0;
                let prev = elementRef.current && elementRef.current.previousElementSibling;

                if (prev) {
                    left = DomHandler.getOuterWidth(prev) + parseFloat(prev.style.left || 0);
                }

                styleObject['left'] = left + 'px';
            }

            const isSameStyle = styleObjectState['left'] === styleObject['left'] && styleObjectState['right'] === styleObject['right'];

            !isSameStyle && setStyleObjectState(styleObject);
        }
    };

    const editorCallback = (val) => {
        let editingRowData = { ...editingRowDataState };

        ObjectUtils.mutateFieldData(editingRowData, field, val);
        setEditingRowDataState(editingRowData);

        // update editing meta for complete methods on row mode
        const currentData = getEditingRowData();

        if (currentData) {
            ObjectUtils.mutateFieldData(currentData, field, val);
        }
    };

    const onClick = (event) => {
        const params = getCellCallbackParams(event);

        if (props.editMode !== 'row' && isEditable() && !editingState && (props.selectOnEdit || (!props.selectOnEdit && props.selected))) {
            selfClick.current = true;

            const onBeforeCellEditShow = getColumnProp('onBeforeCellEditShow');
            const onCellEditInit = getColumnProp('onCellEditInit');
            const cellEditValidatorEvent = getColumnProp('cellEditValidatorEvent');

            if (onBeforeCellEditShow) {
                // if user returns false do not show the editor
                if (onBeforeCellEditShow(params) === false) {
                    return;
                }

                // if user prevents default stop the editor
                if (event && event.defaultPrevented) {
                    return;
                }
            }

            // If the data is sorted using sort icon, it has been added to wait for the sort operation when any cell is wanted to be opened.
            setTimeout(() => {
                setEditingState(true);

                if (onCellEditInit) {
                    if (onCellEditInit(params) === false) {
                        return;
                    }

                    // if user prevents default stop the editor
                    if (event && event.defaultPrevented) {
                        return;
                    }
                }

                if (cellEditValidatorEvent === 'click') {
                    bindDocumentClickListener();

                    overlayEventListener.current = (e) => {
                        if (!isOutsideClicked(e.target)) {
                            selfClick.current = true;
                        }
                    };

                    OverlayService.on('overlay-click', overlayEventListener.current);
                }
            }, 1);
        }

        if (props.allowCellSelection && props.onClick) {
            props.onClick(params);
        }
    };

    const onMouseDown = (event) => {
        const params = getCellCallbackParams(event);

        props.onMouseDown && props.onMouseDown(params);
    };

    const onMouseUp = (event) => {
        const params = getCellCallbackParams(event);

        props.onMouseUp && props.onMouseUp(params);
    };

    const onKeyDown = (event) => {
        if (props.editMode !== 'row') {
            if (event.code === 'Enter' || event.code === 'Tab') {
                switchCellToViewMode(event, true);
            }

            if (event.code === 'Escape') {
                switchCellToViewMode(event, false);
            }
        }

        if (props.allowCellSelection) {
            const { target, currentTarget: cell } = event;

            switch (event.code) {
                case 'ArrowLeft':
                    let prevCell = findPrevSelectableCell(cell);

                    if (prevCell) {
                        changeTabIndex(cell, prevCell);
                        prevCell.focus();
                    }

                    event.preventDefault();
                    break;

                case 'ArrowRight':
                    let nextCell = findNextSelectableCell(cell);

                    if (nextCell) {
                        changeTabIndex(cell, nextCell);
                        nextCell.focus();
                    }

                    event.preventDefault();
                    break;

                case 'ArrowUp':
                    let upCell = findUpSelectableCell(cell);

                    if (upCell) {
                        changeTabIndex(cell, upCell);
                        upCell.focus();
                    }

                    event.preventDefault();
                    break;

                case 'ArrowDown':
                    let downCell = findDownSelectableCell(cell);

                    if (downCell) {
                        changeTabIndex(cell, downCell);
                        downCell.focus();
                    }

                    event.preventDefault();
                    break;

                case 'Enter':
                case 'NumpadEnter':
                    if (event.shiftKey || event.ctrlKey) {
                        // #5192 allow TextArea to add new lines
                    } else if (!DomHandler.isClickable(target)) {
                        onClick(event);
                        event.preventDefault();
                    }

                    break;

                case 'Space':
                    if (!DomHandler.isClickable(target) && !target.readOnly) {
                        onClick(event);
                        event.preventDefault();
                    }

                    break;

                default:
                    //no op
                    break;
            }
        }
    };

    const onBlur = (event) => {
        selfClick.current = false;

        if (props.editMode !== 'row' && editingState && getColumnProp('cellEditValidatorEvent') === 'blur') {
            switchCellToViewMode(event, true);
        }
    };

    const onEditorFocus = (event) => {
        onClick(event);
    };

    const onRadioChange = (event) => {
        props.onRadioChange({
            originalEvent: event,
            data: props.rowData,
            index: props.rowIndex
        });
    };

    const onCheckboxChange = (event) => {
        props.onCheckboxChange({
            originalEvent: event,
            data: props.rowData,
            index: props.rowIndex
        });
    };

    const onRowToggle = (event) => {
        props.onRowToggle({
            originalEvent: event,
            data: props.rowData
        });

        event.preventDefault();
        event.stopPropagation();
    };

    const onRowEditInit = (event) => {
        props.onRowEditInit({ originalEvent: event, data: props.rowData, newData: getEditingRowData(), field: field, index: props.rowIndex });
    };

    const onRowEditSave = (event) => {
        props.onRowEditSave({ originalEvent: event, data: props.rowData, newData: getEditingRowData(), field: field, index: props.rowIndex });
        focusOnInit();
    };

    const onRowEditCancel = (event) => {
        props.onRowEditCancel({ originalEvent: event, data: props.rowData, newData: getEditingRowData(), field: field, index: props.rowIndex });
        focusOnInit();
    };

    React.useEffect(() => {
        if (getColumnProp('frozen')) {
            updateStickyPosition();
        }

        if (props.editMode === 'cell' || props.editMode === 'row') {
            focusOnElement();
        }
    });

    React.useEffect(() => {
        if (props.editMode === 'row' && props.editing !== editingState) {
            setEditingState(props.editing);
        }
    }, [props.editMode, props.editing, editingState]);

    useUpdateEffect(() => {
        if (props.editMode === 'cell' || props.editMode === 'row') {
            setEditingRowDataState(getEditingRowData());
        }
    }, [props.editingMeta]);

    React.useEffect(() => {
        if (props.editMode === 'cell' || props.editMode === 'row') {
            const callbackParams = getCellCallbackParams();
            const params = { ...callbackParams, editing: editingState, editingKey };

            props.onEditingMetaChange(params);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [editingState]);

    useUnmountEffect(() => {
        if (overlayEventListener.current) {
            OverlayService.off('overlay-click', overlayEventListener.current);
            overlayEventListener.current = null;
        }
    });

    const createLoading = () => {
        const options = getVirtualScrollerOption('getLoaderOptions')(props.rowIndex, {
            cellIndex: props.index,
            cellFirst: props.index === 0,
            cellLast: props.index === getVirtualScrollerOption('columns').length - 1,
            cellEven: props.index % 2 === 0,
            cellOdd: props.index % 2 !== 0,
            column: props.column,
            field: field
        });
        const content = ObjectUtils.getJSXElement(getVirtualScrollerOption('loadingTemplate'), options);
        const bodyCellProps = mergeProps(getColumnPTOptions('bodyCell'), {
            role: 'cell'
        });

        return <td {...bodyCellProps}>{content}</td>;
    };

    const createElement = () => {
        let content, editorKeyHelper;
        const cellSelected = props.allowCellSelection && isSelected();
        const isRowEditor = props.editMode === 'row';
        const tabIndex = getTabIndex(cellSelected);
        const selectionMode = getColumnProp('selectionMode');
        const rowReorder = getColumnProp('rowReorder');
        const header = getColumnProp('header');
        const body = getColumnProp('body');
        const editor = getColumnProp('editor');
        const frozen = getColumnProp('frozen');
        const align = getColumnProp('align');
        const value = resolveFieldData();
        const columnBodyOptions = { column: props.column, field: field, rowIndex: props.rowIndex, frozenRow: props.frozenRow, props: props.tableProps };
        const rowEditor = ObjectUtils.getPropValue(getColumnProp('rowEditor'), props.rowData, columnBodyOptions);
        const expander = ObjectUtils.getPropValue(getColumnProp('expander'), props.rowData, columnBodyOptions);
        const cellClassName = ObjectUtils.getPropValue(props.cellClassName, value, columnBodyOptions);
        const bodyClassName = ObjectUtils.getPropValue(getColumnProp('bodyClassName'), props.rowData, columnBodyOptions);
        const style = getStyle();
        const columnTitleProps = mergeProps(
            {
                className: cx('columnTitle')
            },
            getColumnPTOptions('columnTitle')
        );

        const title = props.responsiveLayout === 'stack' && <span {...columnTitleProps}>{ObjectUtils.getJSXElement(header, { props: props.tableProps })}</span>;

        if (selectionMode) {
            const showSelection = props.showSelectionElement ? props.showSelectionElement(props.rowData, { rowIndex: props.rowIndex, props: props.tableProps }) : true;
            let label;

            if (showSelection) {
                const ariaLabelField = props.selectionAriaLabel || props.tableProps.dataKey;
                const ariaLabelText = ObjectUtils.resolveFieldData(props.rowData, ariaLabelField);

                label = `${props.selected ? ariaLabel('unselectLabel') : ariaLabel('selectLabel')} ${ariaLabelText}`;
            }

            content = showSelection && (
                <>
                    {selectionMode === 'single' && (
                        <RowRadioButton
                            hostName={props.hostName}
                            column={props.column}
                            checked={props.selected}
                            disabled={!props.isSelectable({ data: props.rowData, index: props.rowIndex })}
                            onChange={onRadioChange}
                            tabIndex={props.tabIndex}
                            tableSelector={props.tableSelector}
                            ariaLabel={label}
                            ptCallbacks={props.ptCallbacks}
                            metaData={props.metaData}
                        />
                    )}
                    {selectionMode === 'multiple' && (
                        <RowCheckbox
                            hostName={props.hostName}
                            column={props.column}
                            checked={props.selected}
                            disabled={!props.isSelectable({ data: props.rowData, index: props.rowIndex })}
                            onChange={onCheckboxChange}
                            tabIndex={props.tabIndex}
                            ariaLabel={label}
                            checkIcon={props.checkIcon}
                            ptCallbacks={props.ptCallbacks}
                            metaData={props.metaData}
                        />
                    )}
                </>
            );
        } else if (rowReorder) {
            const showReorder = props.showRowReorderElement ? props.showRowReorderElement(props.rowData, { rowIndex: props.rowIndex, props: props.tableProps }) : true;
            const rowReorderIconProps = mergeProps(
                {
                    className: cx('rowReorderIcon')
                },
                getColumnPTOptions('rowReorderIcon')
            );
            const rowReorderIcon = getColumnProp('rowReorderIcon') || <BarsIcon {...rowReorderIconProps} />;

            content = showReorder ? IconUtils.getJSXIcon(rowReorderIcon, { ...rowReorderIconProps }, { props }) : null;
        } else if (expander) {
            const rowTogglerIconProps = mergeProps(
                {
                    className: cx('rowTogglerIcon'),
                    'aria-hidden': true
                },
                getColumnPTOptions('rowTogglerIcon')
            );
            const icon = props.expanded ? props.expandedRowIcon || <ChevronDownIcon {...rowTogglerIconProps} /> : props.collapsedRowIcon || <ChevronRightIcon {...rowTogglerIconProps} />;
            const togglerIcon = IconUtils.getJSXIcon(icon, { ...rowTogglerIconProps }, { props });
            const ariaControls = `${props.tableSelector}_content_${props.rowIndex}_expanded`;
            const ariaLabelField = props.selectionAriaLabel || props.tableProps.dataKey;
            const ariaLabelText = ObjectUtils.resolveFieldData(props.rowData, ariaLabelField);
            const label = `${props.expanded ? ariaLabel('collapseLabel') : ariaLabel('expandLabel')} ${ariaLabelText}`;
            const expanderProps = {
                onClick: onRowToggle,
                className: cx('rowToggler')
            };
            const rowTogglerProps = mergeProps(
                {
                    ...expanderProps,
                    type: 'button',
                    'aria-expanded': props.expanded,
                    'aria-controls': ariaControls,
                    tabIndex: props.tabIndex,
                    'aria-label': label
                },
                getColumnPTOptions('rowToggler')
            );

            content = (
                <button {...rowTogglerProps}>
                    {togglerIcon}
                    <Ripple />
                </button>
            );

            if (body) {
                expanderProps['element'] = content;
                content = ObjectUtils.getJSXElement(body, props.rowData, { column: props.column, field: field, rowIndex: props.rowIndex, frozenRow: props.frozenRow, props: props.tableProps, expander: expanderProps });
            }
        } else if (isRowEditor && rowEditor) {
            let rowEditorProps = {};
            const rowEditorSaveIconProps = mergeProps({ className: cx('rowEditorSaveIcon') }, getColumnPTOptions('rowEditorSaveIcon'));
            const rowEditorCancelIconProps = mergeProps({ className: cx('rowEditorCancelIcon') }, getColumnPTOptions('rowEditorCancelIcon'));
            const rowEditorInitIconProps = mergeProps({ className: cx('rowEditorInitIcon') }, getColumnPTOptions('rowEditorInitIcon'));
            const rowEditorSaveIcon = IconUtils.getJSXIcon(props.rowEditorSaveIcon || <CheckIcon {...rowEditorSaveIconProps} />, { ...rowEditorSaveIconProps }, { props });
            const rowEditorCancelIcon = IconUtils.getJSXIcon(props.rowEditorCancelIcon || <TimesIcon {...rowEditorCancelIconProps} />, { ...rowEditorCancelIconProps }, { props });
            const rowEditorInitIcon = IconUtils.getJSXIcon(props.rowEditorInitIcon || <PencilIcon {...rowEditorInitIconProps} />, { ...rowEditorInitIconProps }, { props });

            if (editingState) {
                rowEditorProps = {
                    editing: true,
                    onSaveClick: onRowEditSave,
                    saveClassName: cx('rowEditorSaveButton'),
                    onCancelClick: onRowEditCancel,
                    cancelClassName: cx('rowEditorCancelButton')
                };

                const rowEditorSaveButtonProps = mergeProps(
                    {
                        type: 'button',
                        name: 'row-save',
                        'aria-label': ariaLabel('saveEdit'),
                        onClick: rowEditorProps.onSaveClick,
                        className: rowEditorProps.saveClassName,
                        tabIndex: props.tabIndex,
                        'aria-label': ariaLabel('saveEdit'),
                        'data-p-row-editor-save': true
                    },
                    getColumnPTOptions('rowEditorSaveButton')
                );

                const rowEditorCancelButtonProps = mergeProps(
                    {
                        type: 'button',
                        name: 'row-cancel',
                        'aria-label': ariaLabel('cancelEdit'),
                        onClick: rowEditorProps.onCancelClick,
                        className: rowEditorProps.cancelClassName,
                        tabIndex: props.tabIndex,
                        'aria-label': ariaLabel('cancelEdit')
                    },
                    getColumnPTOptions('rowEditorCancelButton')
                );

                content = (
                    <>
                        <button {...rowEditorSaveButtonProps}>
                            {rowEditorSaveIcon}
                            <Ripple />
                        </button>
                        <button {...rowEditorCancelButtonProps}>
                            {rowEditorCancelIcon}
                            <Ripple />
                        </button>
                    </>
                );
            } else {
                rowEditorProps = {
                    editing: false,
                    onInitClick: onRowEditInit,
                    initClassName: cx('rowEditorInitButton')
                };

                const rowEditorInitButtonProps = mergeProps(
                    {
                        type: 'button',
                        name: 'row-edit',
                        'aria-label': ariaLabel('editRow'),
                        onClick: rowEditorProps.onInitClick,
                        className: rowEditorProps.initClassName,
                        tabIndex: props.tabIndex,
                        'aria-label': ariaLabel('editRow'),
                        'data-p-row-editor-init': true
                    },
                    getColumnPTOptions('rowEditorInitButton')
                );

                content = (
                    <button {...rowEditorInitButtonProps}>
                        {rowEditorInitIcon}
                        <Ripple />
                    </button>
                );
            }

            if (body) {
                rowEditorProps['element'] = content;
                content = ObjectUtils.getJSXElement(body, props.rowData, { column: props.column, field: field, rowIndex: props.rowIndex, frozenRow: props.frozenRow, props: props.tableProps, rowEditor: rowEditorProps });
            }
        } else if (body && (!editingState || !editor)) {
            content = body ? ObjectUtils.getJSXElement(body, props.rowData, { column: props.column, field: field, rowIndex: props.rowIndex, frozenRow: props.frozenRow, props: props.tableProps }) : value;
        } else if (editor && editingState) {
            content = ObjectUtils.getJSXElement(editor, {
                rowData: editingRowDataState,
                value: resolveFieldData(editingRowDataState),
                column: props.column,
                field: field,
                rowIndex: props.rowIndex,
                frozenRow: props.frozenRow,
                props: props.tableProps,
                editorCallback
            });
        } else {
            content = value;
        }

        content = typeof content == 'boolean' ? content.toString() : content;

        if (!isRowEditor && editor) {
            const editorKeyHelperProps = mergeProps(
                {
                    tabIndex: '0',
                    className: 'p-cell-editor-key-helper p-hidden-accessible',
                    onFocus: (e) => onEditorFocus(e)
                },
                getColumnPTOptions('editorKeyHelperLabel')
            );

            const editorKeyHelperLabelProps = mergeProps(getColumnPTOptions('editorKeyHelper'));
            /* eslint-disable */
            editorKeyHelper = (
                <a ref={keyHelperRef} {...editorKeyHelperProps}>
                    <span {...editorKeyHelperLabelProps}></span>
                </a>
            );
            /* eslint-enable */
        }

        const bodyCellProps = mergeProps(
            {
                style,
                className: classNames(bodyClassName, getColumnProp('className'), cellClassName, cx('bodyCell', { selectionMode, editor, editingState, frozen, cellSelected, align, bodyProps: props, getCellParams })),
                rowSpan: props.rowSpan,
                tabIndex,
                role: 'cell',
                onClick: (e) => onClick(e),
                onKeyDown: (e) => onKeyDown(e),
                onBlur: (e) => onBlur(e),
                onMouseDown: (e) => onMouseDown(e),
                onMouseUp: (e) => onMouseUp(e),
                'data-p-selectable-cell': props.allowCellSelection && props.isSelectable({ data: getCellParams(), index: props.rowIndex }),
                'data-p-selection-column': getColumnProp('selectionMode') != null,
                'data-p-editable-column': isEditable() != null,
                'data-p-cell-editing': editingState,
                'data-p-frozen-column': frozen
            },
            getColumnPTOptions('root'),
            getColumnPTOptions('bodyCell')
        );

        return (
            <td ref={elementRef} {...bodyCellProps}>
                {editorKeyHelper}
                {title}
                {content}
            </td>
        );
    };

    return getVirtualScrollerOption('loading') ? createLoading() : createElement();
});

BodyCell.displayName = 'BodyCell';
