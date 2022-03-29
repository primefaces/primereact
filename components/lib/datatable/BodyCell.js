import React, { memo, useEffect, useRef, useState } from 'react';
import { RowRadioButton } from './RowRadioButton';
import { RowCheckbox } from './RowCheckbox';
import { Ripple } from '../ripple/Ripple';
import { OverlayService } from '../overlayservice/OverlayService';
import { ObjectUtils, DomHandler, classNames } from '../utils/Utils';
import { useEventListener, useUpdateEffect, useUnmountEffect } from '../hooks/Hooks';

export const BodyCell = memo((props) => {
    const [editingState, setEditingState] = useState(props.editing);
    const [editingRowDataState, setEditingRowDataState] = useState(props.rowData);
    const [styleObjectState, setStyleObjectState] = useState({});
    const elementRef = useRef(null);
    const keyHelperRef = useRef(null);
    const overlayEventListener = useRef(null);
    const selfClick = useRef(false);
    const tabindexTimeout = useRef(null);
    const initFocusTimeout = useRef(null);

    const getColumnProp = (prop) => (props.column ? props.column.props[prop] : null);
    const field = getColumnProp('field') || `field_${props.index}`;

    const [bindDocumentClickListener, unbindDocumentClickListener] = useEventListener({
        type: 'click', listener: (e) => {
            if (!selfClick.current && isOutsideClicked(e.target)) {
                switchCellToViewMode(e, true);
            }

            selfClick.current = false;
        }, options: true
    });

    if (props.editMode === 'row' && props.editing !== editingState) {
        setEditingState(props.editing);
    }

    const isEditable = () => {
        return getColumnProp('editor');
    }

    const isSelected = () => {
        return props.selection ? (props.selection instanceof Array ? findIndex(props.selection) > -1 : equals(props.selection)) : false
    }

    const equalsData = (data) => {
        return props.compareSelectionBy === 'equals' ? (data === props.rowData) : ObjectUtils.equals(data, props.rowData, props.dataKey);
    }

    const equals = (selectedCell) => {
        return (selectedCell.rowIndex === props.rowIndex || equalsData(selectedCell.rowData)) && (selectedCell.field === field || selectedCell.cellIndex === props.index);
    }

    const isOutsideClicked = (target) => {
        return elementRef.current && !(elementRef.current.isSameNode(target) || elementRef.current.contains(target));
    }

    const getVirtualScrollerOption = (option) => {
        return props.virtualScrollerOptions ? props.virtualScrollerOptions[option] : null;
    }

    const getStyle = () => {
        const bodyStyle = getColumnProp('bodyStyle');
        const columnStyle = getColumnProp('style');

        return getColumnProp('frozen') ? Object.assign({}, columnStyle, bodyStyle, styleObjectState) : Object.assign({}, columnStyle, bodyStyle);
    }

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
        }
    }

    const getCellCallbackParams = (event) => {
        const params = getCellParams();
        return {
            originalEvent: event,
            ...params
        }
    }

    const resolveFieldData = (data) => {
        return ObjectUtils.resolveFieldData(data || props.rowData, field);
    }

    const getEditingRowData = () => {
        return props.editingMeta && props.editingMeta[props.rowIndex] ? props.editingMeta[props.rowIndex].data : props.rowData;
    }

    const getTabIndex = (cellSelected) => {
        return props.allowCellSelection ? (cellSelected ? 0 : (props.rowIndex === 0 && props.index === 0 ? props.tabIndex : -1)) : null;
    }

    const findIndex = (collection) => {
        return (collection || []).findIndex(data => equals(data));
    }

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
    }

    const switchCellToViewMode = (event, submit) => {
        const callbackParams = getCellCallbackParams(event);
        const newRowData = editingRowDataState;
        const newValue = resolveFieldData(newRowData);
        const params = { ...callbackParams, newRowData, newValue };

        const onCellEditCancel = getColumnProp('onCellEditCancel');
        const cellEditValidator = getColumnProp('cellEditValidator');
        const onCellEditComplete = getColumnProp('onCellEditComplete');

        if (!submit && onCellEditCancel) {
            onCellEditCancel(params);
        }

        let valid = true;
        if (cellEditValidator) {
            valid = cellEditValidator(params);
        }

        if (valid) {
            if (submit && onCellEditComplete) {
                onCellEditComplete(params);
            }

            closeCell(event);
        }
        else {
            event.preventDefault();
        }
    }

    const findNextSelectableCell = (cell) => {
        const nextCell = cell.nextElementSibling;

        return nextCell ? (DomHandler.hasClass(nextCell, 'p-selectable-cell') ? nextCell : findNextSelectableCell(nextCell)) : null;
    }

    const findPrevSelectableCell = (cell) => {
        const prevCell = cell.previousElementSibling;

        return prevCell ? (DomHandler.hasClass(prevCell, 'p-selectable-cell') ? prevCell : findPrevSelectableCell(prevCell)) : null;
    }

    const findDownSelectableCell = (cell) => {
        const downRow = cell.parentElement.nextElementSibling;
        const downCell = downRow ? downRow.children[props.index] : null;

        return downRow && downCell ? (DomHandler.hasClass(downRow, 'p-selectable-row') && DomHandler.hasClass(downCell, 'p-selectable-cell') ? downCell : findDownSelectableCell(downCell)) : null;
    }

    const findUpSelectableCell = (cell) => {
        const upRow = cell.parentElement.previousElementSibling;
        const upCell = upRow ? upRow.children[props.index] : null;

        return upRow && upCell ? (DomHandler.hasClass(upRow, 'p-selectable-row') && DomHandler.hasClass(upCell, 'p-selectable-cell') ? upCell : findUpSelectableCell(upCell)) : null;
    }

    const changeTabIndex = (currentCell, nextCell) => {
        if (currentCell && nextCell) {
            currentCell.tabIndex = -1;
            nextCell.tabIndex = props.tabIndex;
        }
    }

    const focusOnElement = () => {
        clearTimeout(tabindexTimeout.current);
        tabindexTimeout.current = setTimeout(() => {
            if (editingState) {
                const focusableEl = props.editMode === 'cell' ? DomHandler.getFirstFocusableElement(elementRef.current, ':not(.p-cell-editor-key-helper)') : DomHandler.findSingle(elementRef.current, '.p-row-editor-save');
                focusableEl && focusableEl.focus();
            }

            keyHelperRef.current && (keyHelperRef.current.tabIndex = editingState ? -1 : 0);
        }, 1);
    }

    const focusOnInit = () => {
        clearTimeout(initFocusTimeout.current);
        initFocusTimeout.current = setTimeout(() => {
            const focusableEl = props.editMode === 'row' ? DomHandler.findSingle(elementRef.current, '.p-row-editor-init') : null;
            focusableEl && focusableEl.focus();
        }, 1);
    }

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
            }
            else {
                let left = 0;
                let prev = elementRef.current.previousElementSibling;
                if (prev) {
                    left = DomHandler.getOuterWidth(prev) + parseFloat(prev.style.left || 0);
                }
                styleObject['left'] = left + 'px';
            }

            const isSameStyle = styleObjectState['left'] === styleObject['left'] && styleObjectState['right'] === styleObject['right'];
            !isSameStyle && setStyleObjectState(styleObject);
        }
    }

    const editorCallback = (val) => {
        let editingRowData = { ...editingRowDataState };
        editingRowData[field] = val;

        setEditingRowDataState(editingRowData);

        // update editing meta for complete methods on row mode
        props.editingMeta[props.rowIndex].data[field] = val;
    }

    const onClick = (event) => {
        const params = getCellCallbackParams(event);

        if (props.editMode !== 'row' && isEditable() && !editingState && (props.selectOnEdit || (!props.selectOnEdit && props.selected))) {
            selfClick.current = true;

            const onBeforeCellEditShow = getColumnProp('onBeforeCellEditShow');
            const onCellEditInit = getColumnProp('onCellEditInit');
            const cellEditValidatorEvent = getColumnProp('cellEditValidatorEvent');

            if (onBeforeCellEditShow) {
                onBeforeCellEditShow(params);
            }

            // If the data is sorted using sort icon, it has been added to wait for the sort operation when any cell is wanted to be opened.
            setTimeout(() => {
                setEditingState(true);

                if (onCellEditInit) {
                    onCellEditInit(params);
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
    }

    const onMouseDown = (event) => {
        const params = getCellCallbackParams(event);
        props.onMouseDown && props.onMouseDown(params);
    }

    const onMouseUp = (event) => {
        const params = getCellCallbackParams(event);
        props.onMouseUp && props.onMouseUp(params);
    }

    const onKeyDown = (event) => {
        if (props.editMode !== 'row') {
            if (event.which === 13 || event.which === 9) { // tab || enter
                switchCellToViewMode(event, true);
            }

            if (event.which === 27) { // escape
                switchCellToViewMode(event, false);
            }
        }

        if (props.allowCellSelection) {
            const { target, currentTarget: cell } = event;

            switch (event.which) {
                //left arrow
                case 37:
                    let prevCell = findPrevSelectableCell(cell);
                    if (prevCell) {
                        changeTabIndex(cell, prevCell);
                        prevCell.focus();
                    }

                    event.preventDefault();
                    break;

                //right arrow
                case 39:
                    let nextCell = findNextSelectableCell(cell);
                    if (nextCell) {
                        changeTabIndex(cell, nextCell);
                        nextCell.focus();
                    }

                    event.preventDefault();
                    break;

                //up arrow
                case 38:
                    let upCell = findUpSelectableCell(cell);
                    if (upCell) {
                        changeTabIndex(cell, upCell);
                        upCell.focus();
                    }

                    event.preventDefault();
                    break;

                //down arrow
                case 40:
                    let downCell = findDownSelectableCell(cell);
                    if (downCell) {
                        changeTabIndex(cell, downCell);
                        downCell.focus();
                    }

                    event.preventDefault();
                    break;

                //enter
                case 13: // @deprecated
                    if (!DomHandler.isClickable(target)) {
                        onClick(event);
                        event.preventDefault();
                    }
                    break;

                //space
                case 32:
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
    }

    const onBlur = (event) => {
        selfClick.current = false;

        if (props.editMode !== 'row' && editingState && getColumnProp('cellEditValidatorEvent') === 'blur') {
            switchCellToViewMode(event, true);
        }
    }

    const onEditorFocus = (event) => {
        onClick(event);
    }

    const onRadioChange = (event) => {
        props.onRadioChange({
            originalEvent: event,
            data: props.rowData,
            index: props.rowIndex
        });
    }

    const onCheckboxChange = (event) => {
        props.onCheckboxChange({
            originalEvent: event,
            data: props.rowData,
            index: props.rowIndex
        });
    }

    const onRowToggle = (event) => {
        props.onRowToggle({
            originalEvent: event,
            data: props.rowData
        });

        event.preventDefault();
    }

    const onRowEditInit = (event) => {
        props.onRowEditInit({ originalEvent: event, data: props.rowData, newData: getEditingRowData(), field: field, index: props.rowIndex });
    }

    const onRowEditSave = (event) => {
        props.onRowEditSave({ originalEvent: event, data: props.rowData, newData: getEditingRowData(), field: field, index: props.rowIndex });
        focusOnInit();
    }

    const onRowEditCancel = (event) => {
        props.onRowEditCancel({ originalEvent: event, data: props.rowData, newData: getEditingRowData(), field: field, index: props.rowIndex });
        focusOnInit();
    }

    useEffect(() => {
        if (getColumnProp('frozen')) {
            updateStickyPosition();
        }

        if (props.editMode === 'cell' || props.editMode === 'row') {
            focusOnElement();
        }
    });

    useUpdateEffect(() => {
        if (props.editMode === 'cell' || props.editMode === 'row') {
            setEditingRowDataState(getEditingRowData());
        }
    }, [props.editingMeta]);

    useUpdateEffect(() => {
        if (props.editMode === 'cell' || props.editMode === 'row') {
            const callbackParams = getCellCallbackParams();
            const params = { ...callbackParams, editing: editingState };

            props.onEditingMetaChange(params);
        }
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
            cellLast: props.index === (getVirtualScrollerOption('columns').length - 1),
            cellEven: props.index % 2 === 0,
            cellOdd: props.index % 2 !== 0,
            column: props.column,
            field: field
        });
        const content = ObjectUtils.getJSXElement(getVirtualScrollerOption('loadingTemplate'), options);

        return (
            <td>
                {content}
            </td>
        )
    }

    const createElement = () => {
        let content, editorKeyHelper;
        const cellSelected = props.allowCellSelection && isSelected();
        const isRowEditor = props.editMode === 'row';
        const tabIndex = getTabIndex(cellSelected);
        const selectionMode = getColumnProp('selectionMode');
        const rowReorder = getColumnProp('rowReorder');
        const expander = getColumnProp('expander');
        const rowEditor = getColumnProp('rowEditor');
        const header = getColumnProp('header');
        const body = getColumnProp('body');
        const editor = getColumnProp('editor');
        const frozen = getColumnProp('frozen');
        const align = getColumnProp('align');
        const value = resolveFieldData();
        const cellClassName = ObjectUtils.getPropValue(props.cellClassName, value, { props: props.tableProps, rowData: props.rowData, column: props.column });
        const className = classNames(getColumnProp('bodyClassName'), getColumnProp('className'), cellClassName, {
            'p-selection-column': selectionMode !== null,
            'p-editable-column': editor,
            'p-cell-editing': editor && editingState,
            'p-frozen-column': frozen,
            'p-selectable-cell': props.allowCellSelection && props.isSelectable({ data: getCellParams(), index: props.rowIndex }),
            'p-highlight': cellSelected,
            [`p-align-${align}`]: !!align
        });
        const style = getStyle();
        const title = props.responsiveLayout === 'stack' && <span className="p-column-title">{ObjectUtils.getJSXElement(header, { props: props.tableProps })}</span>;

        if (selectionMode) {
            const showSelection = props.showSelectionElement ? props.showSelectionElement(props.rowData, { rowIndex: props.rowIndex, props: props.tableProps }) : true;

            content = showSelection && (
                <>
                    {selectionMode === 'single' && <RowRadioButton checked={props.selected} onChange={onRadioChange} tabIndex={props.tabIndex} tableSelector={props.tableSelector} />}
                    {selectionMode === 'multiple' && <RowCheckbox checked={props.selected} onChange={onCheckboxChange} tabIndex={props.tabIndex} />}
                </>
            )
        }
        else if (rowReorder) {
            const showReorder = props.showRowReorderElement ? props.showRowReorderElement(props.rowData, { rowIndex: props.rowIndex, props: props.tableProps }) : true;
            content = showReorder && <i className={classNames('p-datatable-reorderablerow-handle', getColumnProp('rowReorderIcon'))}></i>;
        }
        else if (expander) {
            const iconClassName = classNames('p-row-toggler-icon', props.expanded ? props.expandedRowIcon : props.collapsedRowIcon);
            const ariaControls = `${props.tableSelector}_content_${props.rowIndex}_expanded`;
            const expanderProps = {
                onClick: onRowToggle,
                className: 'p-row-toggler p-link',
                iconClassName
            };

            content = (
                <button className={expanderProps.className} onClick={expanderProps.onClick} type="button" aria-expanded={props.expanded} aria-controls={ariaControls} tabIndex={props.tabIndex}>
                    <span className={expanderProps.iconClassName}></span>
                    <Ripple />
                </button>
            );

            if (body) {
                expanderProps['element'] = content;
                content = ObjectUtils.getJSXElement(body, props.rowData, { column: props.column, field: field, rowIndex: props.rowIndex, frozenRow: props.frozenRow, props: props.tableProps, expander: expanderProps });
            }
        }
        else if (isRowEditor && rowEditor) {
            let rowEditorProps = {};

            if (editingState) {
                rowEditorProps = {
                    editing: true,
                    onSaveClick: onRowEditSave,
                    saveClassName: 'p-row-editor-save p-link',
                    saveIconClassName: 'p-row-editor-save-icon pi pi-fw pi-check',
                    onCancelClick: onRowEditCancel,
                    cancelClassName: 'p-row-editor-cancel p-link',
                    cancelIconClassName: 'p-row-editor-cancel-icon pi pi-fw pi-times'
                };

                content = (
                    <>
                        <button type="button" onClick={rowEditorProps.onSaveClick} className={rowEditorProps.saveClassName} tabIndex={props.tabIndex}>
                            <span className={rowEditorProps.saveIconClassName}></span>
                            <Ripple />
                        </button>
                        <button type="button" onClick={rowEditorProps.onCancelClick} className={rowEditorProps.cancelClassName} tabIndex={props.tabIndex}>
                            <span className={rowEditorProps.cancelIconClassName}></span>
                            <Ripple />
                        </button>
                    </>
                );
            }
            else {
                rowEditorProps = {
                    editing: false,
                    onInitClick: onRowEditInit,
                    initClassName: 'p-row-editor-init p-link',
                    initIconClassName: 'p-row-editor-init-icon pi pi-fw pi-pencil'
                };

                content = (
                    <button type="button" onClick={rowEditorProps.onInitClick} className={rowEditorProps.initClassName} tabIndex={props.tabIndex}>
                        <span className={rowEditorProps.initIconClassName}></span>
                        <Ripple />
                    </button>
                );
            }

            if (body) {
                rowEditorProps['element'] = content;
                content = ObjectUtils.getJSXElement(body, props.rowData, { column: props.column, field: field, rowIndex: props.rowIndex, frozenRow: props.frozenRow, props: props.tableProps, rowEditor: rowEditorProps });
            }
        }
        else if (body && !editingState) {
            content = body ? ObjectUtils.getJSXElement(body, props.rowData, { column: props.column, field: field, rowIndex: props.rowIndex, frozenRow: props.frozenRow, props: props.tableProps }) : value;
        }
        else if (editor && editingState) {
            content = ObjectUtils.getJSXElement(editor, { rowData: editingRowDataState, value: resolveFieldData(editingRowDataState), column: props.column, field: field, rowIndex: props.rowIndex, frozenRow: props.frozenRow, props: props.tableProps, editorCallback });
        }
        else {
            content = value;
        }

        if (!isRowEditor && editor) {
            /* eslint-disable */
            editorKeyHelper = <a tabIndex="0" ref={keyHelperRef} className="p-cell-editor-key-helper p-hidden-accessible" onFocus={onEditorFocus}><span></span></a>;
            /* eslint-enable */
        }

        return (
            <td ref={elementRef} style={style} className={className} rowSpan={props.rowSpan} tabIndex={tabIndex} role="cell" onClick={onClick} onKeyDown={onKeyDown}
                onBlur={onBlur} onMouseDown={onMouseDown} onMouseUp={onMouseUp}>
                {editorKeyHelper}
                {title}
                {content}
            </td>
        )
    }

    return getVirtualScrollerOption('loading') ? createLoading() : createElement();
});
