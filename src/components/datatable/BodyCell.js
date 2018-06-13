import React, { Component } from 'react';
import classNames from 'classnames';
import ObjectUtils from '../utils/ObjectUtils';
import DomHandler from '../utils/DomHandler';
import {RowRadioButton} from './RowRadioButton';
import {RowCheckbox} from './RowCheckbox';

export class BodyCell extends Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.onExpanderClick = this.onExpanderClick.bind(this);
        this.onClick = this.onClick.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
        this.onEditorFocus = this.onEditorFocus.bind(this);
    }
    
    onExpanderClick(event) {
        if(this.props.onRowToggle) {
            this.props.onRowToggle({
                originalEvent: event,
                data: this.props.rowData
            });
        }
        
        event.preventDefault();
    }
    
    onKeyDown(event) {
        if(event.which === 13 || event.which === 9) {
            this.switchCellToViewMode();
        }
    }
    
    onClick(event) {
        if(this.props.editor) {
            this.setState({
                editing: true
            });
            
            if(this.documentEditListener)
                this.cellClick = true;
            else
                this.bindDocumentEditListener();
        }
    }
    
    onEditorFocus(event) {
        this.onClick(event);
    }
    
    bindDocumentEditListener() {
        if(!this.documentEditListener) {
            this.documentEditListener = (event) => {
                if(!this.cellClick) {
                    this.switchCellToViewMode();
                }
                
                this.cellClick = false;
            };
            
            document.addEventListener('click', this.documentEditListener);
        }
    }
    
    closeCell() {
        this.setState({
            editing: false
        });
        this.unbindDocumentEditListener();
    }
    
    switchCellToViewMode() {
        if(this.props.editorValidator) {
            let valid = this.props.editorValidator(this.props);
            if(valid) {
                this.closeCell();
            }
        }
        else {
            this.closeCell();
        }
    }
    
    unbindDocumentEditListener() {
        if(this.documentEditListener) {
            document.removeEventListener('click', this.documentEditListener);
            this.documentEditListener = null;
        }
    }
        
    componentDidUpdate() {
        if(this.container && this.props.editor) {
            if(this.state.editing) {
                let focusable = DomHandler.findSingle(this.container, 'input');
                if(focusable) {
                    focusable.setAttribute('data-isCellEditing', true);
                    focusable.focus();
                }
                
                this.keyHelper.tabIndex = -1;
            }
            else {
                setTimeout(() => {
                    this.keyHelper.removeAttribute('tabindex');
                }, 50);
                
            }    
        }
    }

    render() {
        let content, header;
        let cellClassName = classNames(this.props.bodyClassName||this.props.className, {
                                'ui-selection-column': this.props.selectionMode,
                                'ui-editable-column': this.props.editor,
                                'ui-cell-editing': this.state.editing
                            });

        if(this.props.expander) {
            let iconClassName = classNames('ui-row-toggler pi pi-fw ui-clickable', {'pi-chevron-circle-down': this.props.expanded, 'pi-chevron-circle-right': !this.props.expanded});
            content = <a onClick={this.onExpanderClick}>
                        <span className={iconClassName}></span>
                      </a>;
        }
        else if(this.props.selectionMode) {
            if(this.props.selectionMode === 'single')
                content = <RowRadioButton onClick={this.props.onRadioClick} rowData={this.props.rowData} selected={this.props.selected}/>;
            else
                content = <RowCheckbox onClick={this.props.onCheckboxClick} rowData={this.props.rowData} selected={this.props.selected}/>;
        }
        else if(this.props.rowReorder) {
            let reorderIcon = classNames('ui-table-reorderablerow-handle', this.props.rowReorderIcon);

            content = (
                <i className={reorderIcon}></i>
            );
        }
        else {
            if(this.state.editing) {
                if(this.props.editor)
                    content = this.props.editor(this.props);
                else
                    throw new Error("Editor is not found on column.");
            }
            else {
                if(this.props.body)
                    content = this.props.body(this.props.rowData, this.props);
                else
                    content = ObjectUtils.resolveFieldData(this.props.rowData, this.props.field);
            }
        }
        
        if(this.props.responsive) {
            header = <span className="ui-column-title">{this.props.header}</span>;
        }

        /* eslint-disable */
        let editorKeyHelper = this.props.editor && <a href="#" ref={(el) => {this.keyHelper = el;}} className="ui-cell-editor-key-helper ui-helper-hidden-accessible" onFocus={this.onEditorFocus}><span></span></a>;
        /* eslint-enable */
                       
        return (
            <td ref={(el) => {this.container = el;}} className={cellClassName} style={this.props.bodyStyle||this.props.style} onClick={this.onClick} onKeyDown={this.onKeyDown}
                rowSpan={this.props.rowSpan}>
                {header}
                {editorKeyHelper}
                <span className="ui-cell-data">{content}</span>
            </td>
        );
    }
}