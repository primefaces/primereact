import React, { Component } from 'react';
import classNames from 'classnames';
import ObjectUtils from '../utils/ObjectUtils';
import DomHandler from '../utils/DomHandler';

export class TreeTableBodyCell extends Component {
    
    constructor(props) {
        super(props);

        if (this.props.editor) {
            this.state = {};
        }

        this.onClick = this.onClick.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
        this.onEditorFocus = this.onEditorFocus.bind(this);
    }

    onClick() {
        if (this.props.editor) {
            this.setState({
                editing: true
            });
            
            if(this.documentEditListener)
                this.cellClick = true;
            else
                this.bindDocumentEditListener();
        }
    }

    onKeyDown(event) {
        if(event.which === 13 || event.which === 9) {
            this.switchCellToViewMode();
        }
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

    unbindDocumentEditListener() {
        if(this.documentEditListener) {
            document.removeEventListener('click', this.documentEditListener);
            this.documentEditListener = null;
        }
    }

    closeCell() {
        this.setState({
            editing: false
        });
        this.unbindDocumentEditListener();
    }

    onEditorFocus(event) {
        this.onClick(event);
    }

    switchCellToViewMode() {
        if (this.props.editorValidator) {
            let valid = this.props.editorValidator(this.props);
            if(valid) {
                this.closeCell();
            }
        }
        else {
            this.closeCell();
        }
    }

    componentDidUpdate() {
        if (this.container && this.props.editor) {
            if (this.state && this.state.editing) {
                let focusable = DomHandler.findSingle(this.container, 'input');
                if(focusable) {
                    focusable.setAttribute('data-isCellEditing', true);
                    focusable.focus();
                }
                
                this.keyHelper.tabIndex = -1;
            }
            else {
                setTimeout(() => {
                    if (this.keyHelper) {
                        this.keyHelper.removeAttribute('tabindex');
                    }
                }, 50);
            }    
        }
    }

    render() {
        const className = classNames(this.props.bodyClassName||this.props.className, {
            'p-editable-column': this.props.editor,
            'p-cell-editing': this.props.editor ? this.state.editing : false
        });
        const style = this.props.bodyStyle || this.props.style
        let content;

        if(this.state && this.state.editing) {
            if(this.props.editor)
                content = this.props.editor(this.props);
            else
                throw new Error("Editor is not found on column.");
        }
        else {
            if (this.props.body)
                content = this.props.body(this.props.node, this.props.column);
            else
                content = ObjectUtils.resolveFieldData(this.props.node.data, this.props.field);
        }

        /* eslint-disable */
        const editorKeyHelper = this.props.editor && <a tabIndex="0" ref={(el) => {this.keyHelper = el;}} className="p-cell-editor-key-helper p-hidden-accessible" onFocus={this.onEditorFocus}><span></span></a>;
        /* eslint-enable */

        return (
            <td ref={el => this.container = el} className={className} style={style} onClick={this.onClick} onKeyDown={this.onKeyDown}>
                {this.props.children}
                {editorKeyHelper}
                {content}
            </td>
        );
    }
}