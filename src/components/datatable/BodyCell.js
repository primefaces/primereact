import React, { Component } from 'react';
import { classNames } from '../utils/ClassNames';
import OverlayEventBus from '../overlayeventbus/OverlayEventBus';
import ObjectUtils from '../utils/ObjectUtils';
import DomHandler from '../utils/DomHandler';
import { RowRadioButton } from './RowRadioButton';
import { RowCheckbox } from './RowCheckbox';
import { Ripple } from '../ripple/Ripple';

export class BodyCell extends Component {

    constructor(props) {
        super(props);
        this.state = {
            editing: this.props.editing
        };

        this.onExpanderClick = this.onExpanderClick.bind(this);
        this.onClick = this.onClick.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
        this.onMouseDown = this.onMouseDown.bind(this);
        this.onMouseUp = this.onMouseUp.bind(this);
        this.onEditorFocus = this.onEditorFocus.bind(this);

        this.eventBusKey = `${this.props.field}_${this.props.rowIndex}`;
    }

    onExpanderClick(event) {
        if (this.props.onRowToggle) {
            this.props.onRowToggle({
                originalEvent: event,
                data: this.props.rowData
            });
        }

        event.preventDefault();
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

        if (this.props.cellSelection) {
            const cell = event.currentTarget;

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

                //enter or space
                case 13: // @deprecated
                case 32:
                    this.onClick(event);
                    event.preventDefault();
                    break;

                default:
                    //no op
                    break;
            }
        }
    }

    onClick(event) {
        if (this.props.editMode !== 'row' && this.props.editor && !this.state.editing && (this.props.selectOnEdit || (!this.props.selectOnEdit && this.props.selected))) {
            this.selfClick = true;

            if (this.props.onBeforeEditorShow) {
                this.props.onBeforeEditorShow({
                    originalEvent: event,
                    columnProps: this.props
                });
            }

            this.setState({
                editing: true
            }, () => {
                if (this.props.onEditorInit) {
                    this.props.onEditorInit({
                        originalEvent: event,
                        columnProps: this.props
                    });
                }

                if (this.props.editorValidatorEvent === 'click') {
                    this.bindDocumentEditListener();

                    OverlayEventBus.on('overlay-click', (e) => {
                        if (!this.isOutsideClicked(e.target)) {
                            this.selfClick = true;
                        }
                    }, this.eventBusKey);
                }
            });
        }

        if (this.props.cellSelection && this.props.onClick) {
            this.props.onClick({
                originalEvent: event,
                value: ObjectUtils.resolveFieldData(this.props.rowData, this.props.field),
                field: this.props.field,
                rowData: this.props.rowData,
                rowIndex: this.props.rowIndex,
                cellIndex: this.props.index,
                selected: this.isSelected()
            });
        }
    }

    onBlur(event) {
        this.selfClick = false;

        if (this.props.editMode !== 'row' && this.state.editing && this.props.editorValidatorEvent === 'blur') {
            this.switchCellToViewMode(event, true);
        }
    }

    onMouseDown(event) {
        if (this.props.onMouseDown) {
            this.props.onMouseDown({
                originalEvent: event,
                value: ObjectUtils.resolveFieldData(this.props.rowData, this.props.field),
                field: this.props.field,
                rowData: this.props.rowData,
                rowIndex: this.props.rowIndex,
                cellIndex: this.props.index,
                selected: this.isSelected()
            });
        }
    }

    onMouseUp(event) {
        if (this.props.onMouseUp) {
            this.props.onMouseUp({
                originalEvent: event,
                value: ObjectUtils.resolveFieldData(this.props.rowData, this.props.field),
                field: this.props.field,
                rowData: this.props.rowData,
                rowIndex: this.props.rowIndex,
                cellIndex: this.props.index,
                selected: this.isSelected()
            });
        }
    }

    onEditorFocus(event) {
        this.onClick(event);
    }

    bindDocumentEditListener() {
        if (!this.documentEditListener) {
            this.documentEditListener = (e) => {
                if (!this.selfClick && this.isOutsideClicked(e.target)) {
                    this.switchCellToViewMode(e, true);
                }

                this.selfClick = false;
            };

            document.addEventListener('click', this.documentEditListener);
        }
    }

    isOutsideClicked(target) {
        return this.container && !(this.container.isSameNode(target) || this.container.contains(target));
    }

    closeCell(event) {
        if (this.props.onBeforeEditorHide) {
            this.props.onBeforeEditorHide({
                originalEvent: event,
                columnProps: this.props
            });
        }

        /* When using the 'tab' key, the focus event of the next cell is not called in IE. */
        setTimeout(() => {
            this.setState({
                editing: false
            }, () => {
                this.unbindDocumentEditListener();
                OverlayEventBus.off('overlay-click', this.eventBusKey);
            });
        }, 1);
    }

    switchCellToViewMode(event, submit) {
        const params = {
            originalEvent: event,
            columnProps: this.props
        };

        if (!submit && this.props.onEditorCancel) {
            this.props.onEditorCancel(params);
        }

        let valid = true;
        if (this.props.editorValidator) {
            valid = this.props.editorValidator(params);
        }

        if (valid) {
            if (submit && this.props.onEditorSubmit) {
                this.props.onEditorSubmit(params);
            }

            this.closeCell(event);
        }
    }

    findNextSelectableCell(cell) {
        let nextCell = cell.nextElementSibling;
        if (nextCell) {
            if (DomHandler.hasClass(nextCell, 'p-selectable-cell'))
                return nextCell;
            else
                return this.findNextSelectableRow(nextCell);
        }
        else {
            return null;
        }
    }

    findPrevSelectableCell(cell) {
        let prevCell = cell.previousElementSibling;
        if (prevCell) {
            if (DomHandler.hasClass(prevCell, 'p-selectable-cell'))
                return prevCell;
            else
                return this.findPrevSelectableRow(prevCell);
        }
        else {
            return null;
        }
    }

    findNextSelectableRow(row) {
        let nextRow = row.nextElementSibling;
        if (nextRow) {
            if (DomHandler.hasClass(nextRow, 'p-selectable-row'))
                return nextRow;
            else
                return this.findNextSelectableRow(nextRow);
        }
        else {
            return null;
        }
    }

    findPrevSelectableRow(row) {
        let prevRow = row.previousElementSibling;
        if (prevRow) {
            if (DomHandler.hasClass(prevRow, 'p-selectable-row'))
                return prevRow;
            else
                return this.findPrevSelectableRow(prevRow);
        }
        else {
            return null;
        }
    }

    changeTabIndex(currentCell, nextCell) {
        if (currentCell && nextCell) {
            currentCell.tabIndex = -1;
            nextCell.tabIndex = 0;
        }
    }

    getTabIndex(cellSelected) {
        return this.props.cellSelection ? (cellSelected ? 0 : (this.props.rowIndex === 0 && this.props.index === 0 ? 0 : -1)) : null;
    }

    isSelected() {
        if (this.props.selection) {
            if (this.props.selection instanceof Array)
                return this.findIndexInSelection() > -1;
            else
                return this.equals(this.props.selection);
        }

        return false;
    }

    equals(selectedCell) {
        return selectedCell.rowIndex === this.props.rowIndex && (selectedCell.field === this.props.field || selectedCell.cellIndex === this.props.index);
    }

    findIndexInSelection() {
        let index = -1;
        if (this.props.selection) {
            for (let i = 0; i < this.props.selection.length; i++) {
                if (this.equals(this.props.selection[i])) {
                    index = i;
                    break;
                }
            }
        }

        return index;
    }

    unbindDocumentEditListener() {
        if (this.documentEditListener) {
            document.removeEventListener('click', this.documentEditListener);
            this.documentEditListener = null;
            this.selfClick = false;
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

    componentDidUpdate() {
        if (this.props.editMode !== 'row' && this.container && this.props.editor) {
            clearTimeout(this.tabindexTimeout);
            if (this.state.editing) {
                let focusable = DomHandler.findSingle(this.container, 'input');
                if (focusable && document.activeElement !== focusable && !focusable.hasAttribute('data-isCellEditing')) {
                    focusable.setAttribute('data-isCellEditing', true);
                    focusable.focus();
                }

                this.keyHelper.tabIndex = -1;
            }
            else {
                this.tabindexTimeout = setTimeout(() => {
                    if (this.keyHelper) {
                        this.keyHelper.setAttribute('tabindex', 0);
                    }
                }, 50);
            }
        }
    }

    componentWillUnmount() {
        this.unbindDocumentEditListener();
    }

    render() {
        let content, header, editorKeyHelper;
        let cellSelected = this.props.cellSelection && this.isSelected()
        let cellClassName = classNames(this.props.bodyClassName || this.props.className, {
            'p-selection-column': this.props.selectionMode,
            'p-selectable-cell': this.props.cellSelection,
            'p-highlight': cellSelected,
            'p-editable-column': this.props.editor,
            'p-cell-editing': this.state.editing && this.props.editor
        });

        const tabIndex = this.getTabIndex(cellSelected);

        if (this.props.expander) {
            const iconClassName = classNames('p-row-toggler-icon pi pi-fw p-clickable', { 'pi-chevron-down': this.props.expanded, 'pi-chevron-right': !this.props.expanded });
            const ariaControls = `${this.props.tableId ? this.props.tableId + '_' : ''}content_${this.props.rowIndex}_expanded`;
            let expanderProps = {
                onClick: this.onExpanderClick,
                className: 'p-row-toggler p-link',
                iconClassName
            };

            content = (
                <button type="button" onClick={expanderProps.onClick} className={expanderProps.className} aria-expanded={this.props.expanded} aria-controls={ariaControls}>
                    <span className={expanderProps.iconClassName}></span>
                    <Ripple />
                </button>
            );

            if (this.props.body) {
                expanderProps['element'] = content;
                content = this.props.body(this.props.rowData, { ...this.props, ...{ expander: expanderProps } });
            }
        }
        else if (this.props.selectionMode) {
            let showSelection = true;
            if (this.props.showSelectionElement) {
                showSelection = this.props.showSelectionElement(this.props.rowData);
            }

            if (showSelection) {
                if (this.props.selectionMode === 'single')
                    content = <RowRadioButton onClick={this.props.onRadioClick} rowData={this.props.rowData} selected={this.props.selected} tableId={this.props.tableId} />;
                else
                    content = <RowCheckbox onClick={this.props.onCheckboxClick} rowData={this.props.rowData} selected={this.props.selected} />;
            }
        }
        else if (this.props.rowReorder) {
            let showReorder = true;
            if (this.props.showRowReorderElement) {
                showReorder = this.props.showRowReorderElement(this.props.rowData);
            }

            if (showReorder) {
                let reorderIcon = classNames('p-datatable-reorderablerow-handle', this.props.rowReorderIcon);
                content = (
                    <i className={reorderIcon}></i>
                );
            }
        }
        else if (this.props.rowEditor) {
            let rowEditorProps = {};

            if (this.state.editing) {
                rowEditorProps = {
                    editing: true,
                    onSaveClick: this.props.onRowEditSave,
                    saveClassName: 'p-row-editor-save p-link',
                    saveIconClassName: 'p-row-editor-save-icon pi pi-fw pi-check p-clickable',
                    onCancelClick: this.props.onRowEditCancel,
                    cancelClassName: 'p-row-editor-cancel p-link',
                    cancelIconClassName: 'p-row-editor-cancel-icon pi pi-fw pi-times p-clickable'
                };

                content = (
                    <>
                        <button type="button" onClick={rowEditorProps.onSaveClick} className={rowEditorProps.saveClassName}>
                            <span className={rowEditorProps.saveIconClassName}></span>
                            <Ripple />
                        </button>
                        <button type="button" onClick={rowEditorProps.onCancelClick} className={rowEditorProps.cancelClassName}>
                            <span className={rowEditorProps.cancelIconClassName}></span>
                            <Ripple />
                        </button>
                    </>
                );
            }
            else {
                rowEditorProps = {
                    editing: false,
                    onInitClick: this.props.onRowEditInit,
                    initClassName: 'p-row-editor-init p-link',
                    initIconClassName: 'p-row-editor-init-icon pi pi-fw pi-pencil p-clickable'
                };

                content = (
                    <button type="button" onClick={rowEditorProps.onInitClick} className={rowEditorProps.initClassName}>
                        <span className={rowEditorProps.initIconClassName}></span>
                        <Ripple />
                    </button>
                );
            }

            if (this.props.body) {
                rowEditorProps['element'] = content;
                content = this.props.body(this.props.rowData, { ...this.props, ...{ rowEditor: rowEditorProps } });
            }
        }
        else {
            if (this.state.editing && this.props.editor) {
                content = this.props.editor(this.props);
            }
            else {
                if (this.props.body)
                    content = this.props.body(this.props.rowData, this.props);
                else
                    content = ObjectUtils.resolveFieldData(this.props.rowData, this.props.field);
            }
        }

        if (this.props.editMode !== 'row') {
            /* eslint-disable */
            editorKeyHelper = this.props.editor && <a tabIndex="0" ref={(el) => { this.keyHelper = el; }} className="p-cell-editor-key-helper p-hidden-accessible" onFocus={this.onEditorFocus}><span></span></a>;
            /* eslint-enable */
        }

        return (
            <td ref={(el) => { this.container = el; }} role="cell" tabIndex={tabIndex} className={cellClassName} style={this.props.bodyStyle || this.props.style} onClick={this.onClick} onKeyDown={this.onKeyDown}
                rowSpan={this.props.rowSpan} onBlur={this.onBlur} onMouseDown={this.onMouseDown} onMouseUp={this.onMouseUp}>
                {header}
                {editorKeyHelper}
                {content}
            </td>
        );
    }
}
