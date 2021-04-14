import React, { Component } from 'react';
import { classNames } from '../utils/ClassNames';
import { BodyCell } from './BodyCell';
import DomHandler from '../utils/DomHandler';

export class BodyRow extends Component {

    constructor(props) {
        super(props);

        if (!this.props.isRowEditingControlled) {
            this.state = {
                editing: false
            };
        }

        this.onClick = this.onClick.bind(this);
        this.onDoubleClick = this.onDoubleClick.bind(this);
        this.onTouchEnd = this.onTouchEnd.bind(this);
        this.onRightClick = this.onRightClick.bind(this);
        this.onMouseDown = this.onMouseDown.bind(this);
        this.onMouseUp = this.onMouseUp.bind(this);
        this.onDragEnd = this.onDragEnd.bind(this);
        this.onDragOver = this.onDragOver.bind(this);
        this.onDragLeave = this.onDragLeave.bind(this);
        this.onDrop = this.onDrop.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
        this.onRowEditInit = this.onRowEditInit.bind(this);
        this.onRowEditSave = this.onRowEditSave.bind(this);
        this.onRowEditCancel = this.onRowEditCancel.bind(this);
        this.updateEditingState = this.updateEditingState.bind(this);
    }

    getEditing() {
        return this.props.isRowEditingControlled ? this.props.editing : this.state.editing;
    }

    onClick(event) {
        if (this.props.onClick) {
            this.props.onClick({
                originalEvent: event,
                data: this.props.rowData,
                index: this.props.rowIndex
            });
        }
    }

    onDoubleClick(event) {
        if (this.props.onDoubleClick) {
            this.props.onDoubleClick({
                originalEvent: event,
                data: this.props.rowData,
                index: this.props.rowIndex
            });
        }
    }

    onTouchEnd(event) {
        if (this.props.onTouchEnd) {
            this.props.onTouchEnd(event);
        }
    }

    onRightClick(event) {
        if (this.props.onRightClick) {
            this.props.onRightClick({
                originalEvent: event,
                data: this.props.rowData,
                index: this.props.rowIndex
            });
        }
    }

    onMouseDown(event) {
        if (DomHandler.hasClass(event.target, 'p-datatable-reorderablerow-handle'))
            event.currentTarget.draggable = true;
        else
            event.currentTarget.draggable = false;

        if (this.props.onMouseDown) {
            this.props.onMouseDown({
                originalEvent: event,
                data: this.props.rowData,
                index: this.props.rowIndex
            });
        }
    }

    onMouseUp(event) {
        if (this.props.onMouseUp) {
            this.props.onMouseUp({
                originalEvent: event,
                data: this.props.rowData,
                index: this.props.rowIndex
            });
        }
    }

    onDragEnd(event) {
        if (this.props.onDragEnd) {
            this.props.onDragEnd(event);
        }
        event.currentTarget.draggable = false;
    }

    onDragOver(event) {
        if (this.props.onDragOver) {
            this.props.onDragOver({
                originalEvent: event,
                rowElement: this.container
            });
        }
        event.preventDefault();
    }

    onDragLeave(event) {
        if (this.props.onDragLeave) {
            this.props.onDragLeave({
                originalEvent: event,
                rowElement: this.container
            });
        }
    }

    onDrop(event) {
        if (this.props.onDrop) {
            this.props.onDrop({
                originalEvent: event,
                rowElement: this.container
            });
        }
        event.preventDefault();
    }

    onKeyDown(event) {
        if (this.props.selectionMode && !this.props.cellSelection) {
            const row = event.currentTarget;

            switch (event.which) {
                //down arrow
                case 40:
                    let nextRow = this.findNextSelectableRow(row);
                    if (nextRow) {
                        this.changeTabIndex(row, nextRow);
                        nextRow.focus();
                    }

                    event.preventDefault();
                    break;

                //up arrow
                case 38:
                    let prevRow = this.findPrevSelectableRow(row);
                    if (prevRow) {
                        this.changeTabIndex(row, prevRow);
                        prevRow.focus();
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

    changeTabIndex(currentRow, nextRow) {
        if (currentRow && nextRow) {
            currentRow.tabIndex = -1;
            nextRow.tabIndex = 0;
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

    updateEditingState(event, editing) {
        if (this.props.isRowEditingControlled) {
            this.props.onRowEditingToggle({
                originalEvent: event,
                data: this.props.rowData,
                index: this.props.rowIndex
            });
        }
        else {
            this.setState({ editing });
        }
    }

    onRowEditInit(event) {
        if (this.props.onRowEditInit) {
            this.props.onRowEditInit({
                originalEvent: event,
                data: this.props.rowData,
                index: this.props.rowIndex
            });
        }

        this.updateEditingState(event, true);

        event.preventDefault();
    }

    onRowEditSave(event) {
        let valid = true;

        if (this.props.rowEditorValidator) {
            valid = this.props.rowEditorValidator(this.props.rowData);
        }

        if (this.props.onRowEditSave) {
            this.props.onRowEditSave({
                originalEvent: event,
                data: this.props.rowData,
                index: this.props.rowIndex,
                valid
            });
        }

        if (valid) {
            this.updateEditingState(event, false);
        }

        event.preventDefault();
    }

    onRowEditCancel(event) {
        if (this.props.onRowEditCancel) {
            this.props.onRowEditCancel({
                originalEvent: event,
                data: this.props.rowData,
                index: this.props.rowIndex
            });
        }

        this.updateEditingState(event, false);

        event.preventDefault();
    }

    getTabIndex() {
        return this.props.selectionMode && !this.props.cellSelection ? (this.props.rowIndex === 0 ? 0 : -1) : null;
    }

    render() {
        let columns = React.Children.toArray(this.props.children);
        let conditionalClassNames = {
            'p-highlight': !this.props.cellSelection && this.props.selected,
            'p-highlight-contextmenu': this.props.contextMenuSelected,
            'p-selectable-row': this.props.selectionMode
        };

        if (this.props.rowClassName) {
            let rowClassNameCondition = this.props.rowClassName(this.props.rowData);
            conditionalClassNames = { ...conditionalClassNames, ...rowClassNameCondition };
        }
        let className = classNames(conditionalClassNames);
        let style = this.props.virtualScroll ? { height: this.props.virtualRowHeight } : {};
        let hasRowSpanGrouping = this.props.rowGroupMode === 'rowspan';
        let tabIndex = this.getTabIndex();
        let cells = [];

        for (let i = 0; i < columns.length; i++) {
            let column = columns[i];
            let rowSpan;
            if (hasRowSpanGrouping) {
                if (this.props.sortField === column.props.field) {
                    if (this.props.groupRowSpan) {
                        rowSpan = this.props.groupRowSpan;
                        className += ' p-datatable-rowspan-group'
                    }
                    else {
                        continue;
                    }
                }
            }

            let editing = this.getEditing();
            let cell = <BodyCell tableId={this.props.tableId} key={i} {...column.props} value={this.props.value} rowSpan={rowSpan} rowData={this.props.rowData} index={i} rowIndex={this.props.rowIndex} onRowToggle={this.props.onRowToggle} expanded={this.props.expanded}
                onRadioClick={this.props.onRadioClick} onCheckboxClick={this.props.onCheckboxClick} selected={this.props.selected} selection={this.props.selection} selectOnEdit={this.props.selectOnEdit}
                editMode={this.props.editMode} editing={editing} onRowEditInit={this.onRowEditInit} onRowEditSave={this.onRowEditSave} onRowEditCancel={this.onRowEditCancel} onMouseDown={this.props.onCellMouseDown} onMouseUp={this.props.onCellMouseUp}
                showRowReorderElement={this.props.showRowReorderElement} showSelectionElement={this.props.showSelectionElement} cellSelection={this.props.cellSelection} onClick={this.props.onCellClick} />;

            cells.push(cell);
        }

        return (
            <tr role="row" tabIndex={tabIndex} ref={(el) => { this.container = el; }} className={className} onClick={this.onClick} onDoubleClick={this.onDoubleClick} onTouchEnd={this.onTouchEnd} onContextMenu={this.onRightClick} onMouseDown={this.onMouseDown} onMouseUp={this.onMouseUp}
                onDragStart={this.props.onDragStart} onDragEnd={this.onDragEnd} onDragOver={this.onDragOver} onDragLeave={this.onDragLeave} onDrop={this.onDrop} style={style} onKeyDown={this.onKeyDown}>
                {cells}
            </tr>
        );
    }
}
