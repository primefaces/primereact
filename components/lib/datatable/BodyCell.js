import React, { Component } from 'react';
import { ObjectUtils, DomHandler, classNames } from '../utils/Utils';
import { OverlayService } from '../overlayservice/OverlayService';
import { RowRadioButton } from './RowRadioButton';
import { RowCheckbox } from './RowCheckbox';
import { Ripple } from '../ripple/Ripple';

export class BodyCell extends Component {

    constructor(props) {
        super(props);
        this.state = {
            editing: props.editing,
            editingRowData: props.rowData,
            styleObject: {}
        };

        this.onClick = this.onClick.bind(this);
        this.onMouseDown = this.onMouseDown.bind(this);
        this.onMouseUp = this.onMouseUp.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.onEditorFocus = this.onEditorFocus.bind(this);
        this.onRowToggle = this.onRowToggle.bind(this);

        this.onRowEditSave = this.onRowEditSave.bind(this);
        this.onRowEditCancel = this.onRowEditCancel.bind(this);
        this.onRowEditInit = this.onRowEditInit.bind(this);

        this.editorCallback = this.editorCallback.bind(this);
    }

    get field() {
        return this.getColumnProp('field') || `field_${this.props.index}`;
    }

    isEditable() {
        return this.getColumnProp('editor');
    }

    isSelected() {
        return this.props.selection ? (this.props.selection instanceof Array ? this.findIndex(this.props.selection) > -1 : this.equals(this.props.selection)) : false
    }

    equalsData(data) {
        return this.props.compareSelectionBy === 'equals' ? (data === this.props.rowData) : ObjectUtils.equals(data, this.props.rowData, this.props.dataKey);
    }

    equals(selectedCell) {
        return (selectedCell.rowIndex === this.props.rowIndex || this.equalsData(selectedCell.rowData)) && (selectedCell.field === this.field || selectedCell.cellIndex === this.props.index);
    }

    isOutsideClicked(target) {
        return this.el && !(this.el.isSameNode(target) || this.el.contains(target));
    }

    getColumnProp(prop) {
        return this.props.column ? this.props.column.props[prop] : null;
    }

    getVirtualScrollerOption(option) {
        return this.props.virtualScrollerOptions ? this.props.virtualScrollerOptions[option] : null;
    }

    getStyle() {
        const bodyStyle = this.getColumnProp('bodyStyle');
        const columnStyle = this.getColumnProp('style');

        return this.getColumnProp('frozen') ? Object.assign({}, columnStyle, bodyStyle, this.state.styleObject) : Object.assign({}, columnStyle, bodyStyle);
    }

    getCellCallbackParams(event) {
        return {
            originalEvent: event,
            value: this.resolveFieldData(),
            field: this.field,
            rowData: this.props.rowData,
            rowIndex: this.props.rowIndex,
            cellIndex: this.props.index,
            selected: this.isSelected(),
            column: this.props.column,
            props: this.props
        }
    }

    resolveFieldData(data) {
        return ObjectUtils.resolveFieldData(data || this.props.rowData, this.field);
    }

    getEditingRowData() {
        return this.props.editingMeta && this.props.editingMeta[this.props.rowIndex] ? this.props.editingMeta[this.props.rowIndex].data : this.props.rowData;
    }

    getTabIndex(cellSelected) {
        return this.props.allowCellSelection ? (cellSelected ? 0 : (this.props.rowIndex === 0 && this.props.index === 0 ? this.props.tabIndex : -1)) : null;
    }

    findIndex(collection) {
        return (collection || []).findIndex(data => this.equals(data));
    }

    closeCell(event) {
        const params = this.getCellCallbackParams(event);
        const onBeforeCellEditHide = this.getColumnProp('onBeforeCellEditHide');

        if (onBeforeCellEditHide) {
            onBeforeCellEditHide(params);
        }

        /* When using the 'tab' key, the focus event of the next cell is not called in IE. */
        setTimeout(() => {
            this.setState({
                editing: false
            }, () => {
                this.unbindDocumentEditListener();
                OverlayService.off('overlay-click', this.overlayEventListener);
                this.overlayEventListener = null;
            });
        }, 1);
    }

    switchCellToViewMode(event, submit) {
        const callbackParams = this.getCellCallbackParams(event);
        const newRowData = this.state.editingRowData;
        const newValue = this.resolveFieldData(newRowData);
        const params = { ...callbackParams, newRowData, newValue };

        const onCellEditCancel = this.getColumnProp('onCellEditCancel');
        const cellEditValidator = this.getColumnProp('cellEditValidator');
        const onCellEditComplete = this.getColumnProp('onCellEditComplete');

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

            this.closeCell(event);
        }
        else {
            event.preventDefault();
        }
    }

    findNextSelectableCell(cell) {
        let nextCell = cell.nextElementSibling;

        return nextCell ? (DomHandler.hasClass(nextCell, 'p-selectable-cell') ? nextCell : this.findNextSelectableRow(nextCell)) : null;
    }

    findPrevSelectableCell(cell) {
        let prevCell = cell.previousElementSibling;

        return prevCell ? (DomHandler.hasClass(prevCell, 'p-selectable-cell') ? prevCell : this.findPrevSelectableRow(prevCell)) : null;
    }

    findNextSelectableRow(row) {
        let nextRow = row.nextElementSibling;

        return nextRow ? (DomHandler.hasClass(nextRow, 'p-selectable-row') ? nextRow : this.findNextSelectableRow(nextRow)) : null;
    }

    findPrevSelectableRow(row) {
        let prevRow = row.previousElementSibling;
        if (prevRow) {
            return DomHandler.hasClass(prevRow, 'p-selectable-row') ? prevRow : this.findPrevSelectableRow(prevRow);
        }

        return null;
    }

    changeTabIndex(currentCell, nextCell) {
        if (currentCell && nextCell) {
            currentCell.tabIndex = -1;
            nextCell.tabIndex = this.props.tabIndex;
        }
    }

    focusOnElement() {
        clearTimeout(this.tabindexTimeout);
        this.tabindexTimeout = setTimeout(() => {
            if (this.state.editing) {
                const focusableEl = DomHandler.getFirstFocusableElement(this.el, ':not(.p-cell-editor-key-helper)');
                focusableEl && focusableEl.focus();
            }

            this.keyHelper && (this.keyHelper.tabIndex = this.state.editing ? -1 : 0);
        }, 1);
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

            const isSameStyle = this.state.styleObject['left'] === styleObject['left'] && this.state.styleObject['right'] === styleObject['right'];
            !isSameStyle && this.setState({ styleObject });
        }
    }

    editorCallback(val) {
        let editingRowData = { ...this.state.editingRowData };
        editingRowData[this.field] = val;

        this.setState({ editingRowData });

        // update editing meta for complete methods on row mode
        this.props.editingMeta[this.props.rowIndex].data[this.field] = val;
    }

    onClick(event) {
        const params = this.getCellCallbackParams(event);

        if (this.props.editMode !== 'row' && this.isEditable() && !this.state.editing && (this.props.selectOnEdit || (!this.props.selectOnEdit && this.props.selected))) {
            this.selfClick = true;

            const onBeforeCellEditShow = this.getColumnProp('onBeforeCellEditShow');
            const onCellEditInit = this.getColumnProp('onCellEditInit');
            const cellEditValidatorEvent = this.getColumnProp('cellEditValidatorEvent');

            if (onBeforeCellEditShow) {
                onBeforeCellEditShow(params);
            }

            // If the data is sorted using sort icon, it has been added to wait for the sort operation when any cell is wanted to be opened.
            setTimeout(() => {
                this.setState({
                    editing: true
                }, () => {
                    if (onCellEditInit) {
                        onCellEditInit(params);
                    }

                    if (cellEditValidatorEvent === 'click') {
                        this.bindDocumentEditListener();

                        this.overlayEventListener = (e) => {
                            if (!this.isOutsideClicked(e.target)) {
                                this.selfClick = true;
                            }
                        };

                        OverlayService.on('overlay-click', this.overlayEventListener);
                    }
                });
            }, 1);
        }

        if (this.props.allowCellSelection && this.props.onClick) {
            this.props.onClick(params);
        }
    }

    onMouseDown(event) {
        const params = this.getCellCallbackParams(event);

        if (this.props.onMouseDown) {
            this.props.onMouseDown(params);
        }
    }

    onMouseUp(event) {
        const params = this.getCellCallbackParams(event);

        if (this.props.onMouseUp) {
            this.props.onMouseUp(params);
        }
    }

    onKeyDown(event) {
        if (this.props.editMode !== 'row') {
            if (event.which === 13 || event.which === 9) { // tab || enter
                this.switchCellToViewMode(event, true);
            }

            if (event.which === 27) { // escape
                this.switchCellToViewMode(event, false);
            }
        }

        if (this.props.allowCellSelection) {
            const { target, currentTarget: cell } = event;

            switch (event.which) {
                //left arrow
                case 37:
                    let prevCell = this.findPrevSelectableCell(cell);
                    if (prevCell) {
                        this.changeTabIndex(cell, prevCell);
                        prevCell.focus();
                    }

                    event.preventDefault();
                    break;

                //right arrow
                case 39:
                    let nextCell = this.findNextSelectableCell(cell);
                    if (nextCell) {
                        this.changeTabIndex(cell, nextCell);
                        nextCell.focus();
                    }

                    event.preventDefault();
                    break;

                //up arrow
                case 38:
                    let prevRow = this.findPrevSelectableRow(cell.parentElement);
                    if (prevRow) {
                        let upCell = prevRow.children[this.props.index];
                        this.changeTabIndex(cell, upCell);
                        upCell.focus();
                    }

                    event.preventDefault();
                    break;

                //down arrow
                case 40:
                    let nextRow = this.findNextSelectableRow(cell.parentElement);
                    if (nextRow) {
                        let downCell = nextRow.children[this.props.index];
                        this.changeTabIndex(cell, downCell);
                        downCell.focus();
                    }

                    event.preventDefault();
                    break;

                //enter
                case 13: // @deprecated
                    if (!DomHandler.isClickable(target)) {
                        this.onClick(event);
                        event.preventDefault();
                    }
                    break;

                //space
                case 32:
                    if (!DomHandler.isClickable(target) && !target.readOnly) {
                        this.onClick(event);
                        event.preventDefault();
                    }
                    break;

                default:
                    //no op
                    break;
            }
        }
    }

    onBlur(event) {
        this.selfClick = false;

        if (this.props.editMode !== 'row' && this.state.editing && this.getColumnProp('cellEditValidatorEvent') === 'blur') {
            this.switchCellToViewMode(event, true);
        }
    }

    onEditorFocus(event) {
        this.onClick(event);
    }

    onRowToggle(event) {
        this.props.onRowToggle({
            originalEvent: event,
            data: this.props.rowData
        });

        event.preventDefault();
    }

    onRowEditInit(event) {
        this.props.onRowEditInit({ originalEvent: event, data: this.props.rowData, newData: this.getEditingRowData(), field: this.field, index: this.props.rowIndex });
    }

    onRowEditSave(event) {
        this.props.onRowEditSave({ originalEvent: event, data: this.props.rowData, newData: this.getEditingRowData(), field: this.field, index: this.props.rowIndex });
    }

    onRowEditCancel(event) {
        this.props.onRowEditCancel({ originalEvent: event, data: this.props.rowData, newData: this.getEditingRowData(), field: this.field, index: this.props.rowIndex });
    }

    bindDocumentEditListener() {
        if (!this.documentEditListener) {
            this.documentEditListener = (e) => {
                if (!this.selfClick && this.isOutsideClicked(e.target)) {
                    this.switchCellToViewMode(e, true);
                }

                this.selfClick = false;
            };

            document.addEventListener('click', this.documentEditListener, true);
        }
    }

    unbindDocumentEditListener() {
        if (this.documentEditListener) {
            document.removeEventListener('click', this.documentEditListener, true);
            this.documentEditListener = null;
            this.selfClick = false;
        }
    }

    componentDidMount() {
        if (this.getColumnProp('frozen')) {
            this.updateStickyPosition();
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.editMode === 'row' && nextProps.editing !== prevState.editing) {
            return {
                editing: nextProps.editing
            }
        }

        return null;
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.getColumnProp('frozen')) {
            this.updateStickyPosition();
        }

        if (this.props.editMode === 'cell' || this.props.editMode === 'row') {
            this.focusOnElement();

            if (prevProps.editingMeta !== this.props.editingMeta) {
                this.setState({ editingRowData: this.getEditingRowData() });
            }

            if (prevState.editing !== this.state.editing) {
                const callbackParams = this.getCellCallbackParams();
                const params = { ...callbackParams, editing: this.state.editing };

                this.props.onEditingMetaChange(params);
            }
        }
    }

    componentWillUnmount() {
        this.unbindDocumentEditListener();

        if (this.overlayEventListener) {
            OverlayService.off('overlay-click', this.overlayEventListener);
            this.overlayEventListener = null;
        }
    }

    renderLoading() {
        const options = this.getVirtualScrollerOption('getLoaderOptions')(this.props.rowIndex, {
            cellIndex: this.props.index,
            cellFirst: this.props.index === 0,
            cellLast: this.props.index === (this.getVirtualScrollerOption('columns').length - 1),
            cellEven: this.props.index % 2 === 0,
            cellOdd: this.props.index % 2 !== 0,
            column: this.props.column,
            field: this.field
        });
        const content = ObjectUtils.getJSXElement(this.getVirtualScrollerOption('loadingTemplate'), options);

        return (
            <td>
                {content}
            </td>
        )
    }

    renderElement() {
        let content, editorKeyHelper;
        const cellSelected = this.props.allowCellSelection && this.isSelected();
        const isRowEditor = this.props.editMode === 'row';
        const tabIndex = this.getTabIndex(cellSelected);
        const selectionMode = this.getColumnProp('selectionMode');
        const rowReorder = this.getColumnProp('rowReorder');
        const expander = this.getColumnProp('expander');
        const rowEditor = this.getColumnProp('rowEditor');
        const header = this.getColumnProp('header');
        const body = this.getColumnProp('body');
        const editor = this.getColumnProp('editor');
        const frozen = this.getColumnProp('frozen');
        const value = this.resolveFieldData();
        const cellClassName = ObjectUtils.getPropValue(this.props.cellClassName, value, { props: this.props.tableProps, rowData: this.props.rowData, column: this.props.column });
        const className = classNames(this.getColumnProp('bodyClassName'), this.getColumnProp('class'), cellClassName, {
            'p-selection-column': selectionMode !== null,
            'p-editable-column': editor,
            'p-cell-editing': editor && this.state.editing,
            'p-frozen-column': frozen,
            'p-selectable-cell': this.props.allowCellSelection,
            'p-highlight': cellSelected,
        });
        const style = this.getStyle();
        const title = this.props.responsiveLayout === 'stack' && <span className="p-column-title">{ObjectUtils.getJSXElement(header, { props: this.props.tableProps })}</span>;

        if (selectionMode) {
            const showSelection = this.props.showSelectionElement ? this.props.showSelectionElement(this.props.rowData, { rowIndex: this.props.rowIndex, props: this.props.tableProps }) : true;

            content = showSelection && (
                <>
                    {selectionMode === 'single' && <RowRadioButton value={this.props.rowData} checked={this.props.selected} onChange={this.props.onRadioChange} tabIndex={this.props.tabIndex} tableSelector={this.props.tableSelector} />}
                    {selectionMode === 'multiple' && <RowCheckbox value={this.props.rowData} checked={this.props.selected} onChange={this.props.onCheckboxChange} tabIndex={this.props.tabIndex} />}
                </>
            )
        }
        else if (rowReorder) {
            const showReorder = this.props.showRowReorderElement ? this.props.showRowReorderElement(this.props.rowData, { rowIndex: this.props.rowIndex, props: this.props.tableProps }) : true;
            content = showReorder && <i className={classNames('p-datatable-reorderablerow-handle', this.getColumnProp('rowReorderIcon'))}></i>;
        }
        else if (expander) {
            const iconClassName = classNames('p-row-toggler-icon', this.props.expanded ? this.props.expandedRowIcon : this.props.collapsedRowIcon);
            const ariaControls = `${this.props.tableSelector}_content_${this.props.rowIndex}_expanded`;
            const expanderProps = {
                onClick: this.onRowToggle,
                className: 'p-row-toggler p-link',
                iconClassName
            };

            content = (
                <button className={expanderProps.className} onClick={expanderProps.onClick} type="button" aria-expanded={this.props.expanded} aria-controls={ariaControls} tabIndex={this.props.tabIndex}>
                    <span className={expanderProps.iconClassName}></span>
                    <Ripple />
                </button>
            );

            if (body) {
                expanderProps['element'] = content;
                content = ObjectUtils.getJSXElement(body, this.props.rowData, { column: this.props.column, field: this.field, rowIndex: this.props.rowIndex, frozenRow: this.props.frozenRow, props: this.props.tableProps, expander: expanderProps });
            }
        }
        else if (isRowEditor && rowEditor) {
            let rowEditorProps = {};

            if (this.state.editing) {
                rowEditorProps = {
                    editing: true,
                    onSaveClick: this.onRowEditSave,
                    saveClassName: 'p-row-editor-save p-link',
                    saveIconClassName: 'p-row-editor-save-icon pi pi-fw pi-check',
                    onCancelClick: this.onRowEditCancel,
                    cancelClassName: 'p-row-editor-cancel p-link',
                    cancelIconClassName: 'p-row-editor-cancel-icon pi pi-fw pi-times'
                };

                content = (
                    <>
                        <button type="button" onClick={rowEditorProps.onSaveClick} className={rowEditorProps.saveClassName} tabIndex={this.props.tabIndex}>
                            <span className={rowEditorProps.saveIconClassName}></span>
                            <Ripple />
                        </button>
                        <button type="button" onClick={rowEditorProps.onCancelClick} className={rowEditorProps.cancelClassName} tabIndex={this.props.tabIndex}>
                            <span className={rowEditorProps.cancelIconClassName}></span>
                            <Ripple />
                        </button>
                    </>
                );
            }
            else {
                rowEditorProps = {
                    editing: false,
                    onInitClick: this.onRowEditInit,
                    initClassName: 'p-row-editor-init p-link',
                    initIconClassName: 'p-row-editor-init-icon pi pi-fw pi-pencil'
                };

                content = (
                    <button type="button" onClick={rowEditorProps.onInitClick} className={rowEditorProps.initClassName} tabIndex={this.props.tabIndex}>
                        <span className={rowEditorProps.initIconClassName}></span>
                        <Ripple />
                    </button>
                );
            }

            if (body) {
                rowEditorProps['element'] = content;
                content = ObjectUtils.getJSXElement(body, this.props.rowData, { column: this.props.column, field: this.field, rowIndex: this.props.rowIndex, frozenRow: this.props.frozenRow, props: this.props.tableProps, rowEditor: rowEditorProps });
            }
        }
        else if (body && !this.state.editing) {
            content = body ? ObjectUtils.getJSXElement(body, this.props.rowData, { column: this.props.column, field: this.field, rowIndex: this.props.rowIndex, frozenRow: this.props.frozenRow, props: this.props.tableProps }) : value;
        }
        else if (editor && this.state.editing) {
            content = ObjectUtils.getJSXElement(editor, { rowData: this.state.editingRowData, value: this.resolveFieldData(this.state.editingRowData), column: this.props.column, field: this.field, rowIndex: this.props.rowIndex, frozenRow: this.props.frozenRow, props: this.props.tableProps, editorCallback: this.editorCallback  });
        }
        else {
            content = value;
        }

        if (!isRowEditor && editor) {
            /* eslint-disable */
            editorKeyHelper = <a tabIndex="0" ref={(el) => this.keyHelper = el} className="p-cell-editor-key-helper p-hidden-accessible" onFocus={this.onEditorFocus}><span></span></a>;
            /* eslint-enable */
        }

        return (
            <td ref={(el) => this.el = el} style={style} className={className} rowSpan={this.props.rowSpan} tabIndex={tabIndex} role="cell" onClick={this.onClick} onKeyDown={this.onKeyDown}
                onBlur={this.onBlur} onMouseDown={this.onMouseDown} onMouseUp={this.onMouseUp}>
                {editorKeyHelper}
                {title}
                {content}
            </td>
        )
    }

    render() {
        return this.getVirtualScrollerOption('loading') ? this.renderLoading() : this.renderElement();
    }
}
