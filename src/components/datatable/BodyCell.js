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
    
    onClick(event) {
        if(this.props.editable) {
            this.setState({
                editing: true
            });
            
            if(this.documentEditListener)
                this.editorClick = true;
            else
                this.bindDocumentEditListener();
        }
    }
    
    bindDocumentEditListener() {
        if(!this.documentEditListener) {
            this.documentEditListener = (event) => {
                if(!this.editorClick) {
                    this.setState({
                        editing: false
                    });
                    this.unbindDocumentEditListener();
                }
                
                this.editorClick = false;    
            };
            
            document.addEventListener('click', this.documentEditListener);
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
            let focusable = DomHandler.findSingle(this.container, 'input');
            if(focusable) {
                focusable.focus();
            }
        }
    }

    render() {
        let content, header;
        let cellClassName = classNames(this.props.className, {
                                'ui-selection-column': this.props.selectionMode,
                                'ui-editable-column': this.props.editor,
                                'ui-cell-editing': this.state.editing
                            });

        if(this.props.expander) {
            let iconClassName = classNames('ui-row-toggler fa fa-fw ui-clickable', {'fa-chevron-circle-down': this.props.expanded, 'fa-chevron-circle-right': !this.props.expanded});
            content = <a href="#" onClick={this.onExpanderClick}>
                        <span className={iconClassName}></span>
                      </a>;
        }
        else if(this.props.selectionMode) {
            if(this.props.selectionMode === 'single')
                content = <RowRadioButton onClick={this.props.onRadioClick} rowData={this.props.rowData} selected={this.props.selected}/>;
            else
                content = <RowCheckbox onClick={this.props.onCheckboxClick} rowData={this.props.rowData} selected={this.props.selected}/>;
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
               
        return (
            <td ref={(el) => {this.container = el;}} className={cellClassName} style={this.props.style} onClick={this.onClick}>
                {header}
                <span className="ui-cell-data">{content}</span>
            </td>
        );
    }
}