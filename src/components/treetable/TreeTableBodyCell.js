import React, { Component } from 'react';
import { classNames } from '../utils/ClassNames';
import ObjectUtils from '../utils/ObjectUtils';
import DomHandler from '../utils/DomHandler';
import OverlayEventBus from '../overlayeventbus/OverlayEventBus';

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
        if (this.props.editor && !this.state.editing && (this.props.selectOnEdit || (!this.props.selectOnEdit && this.props.selected))) {
            this.selfClick = true;

            this.setState({
                editing: true
            }, () => {
                this.bindDocumentEditListener();

                this.overlayEventListener = (e) => {
                    if (!this.isOutsideClicked(e.target)) {
                        this.selfClick = true;
                    }
                };

                OverlayEventBus.on('overlay-click', this.overlayEventListener);
            });
        }
    }

    onKeyDown(event) {
        if (event.which === 13 || event.which === 9) {
            this.switchCellToViewMode(event);
        }
    }

    bindDocumentEditListener() {
        if (!this.documentEditListener) {
            this.documentEditListener = (e) => {
                if (!this.selfClick && this.isOutsideClicked(e.target)) {
                    this.switchCellToViewMode(e);
                }

                this.selfClick = false;
            };

            document.addEventListener('click', this.documentEditListener);
        }
    }

    isOutsideClicked(target) {
        return this.container && !(this.container.isSameNode(target) || this.container.contains(target));
    }

    unbindDocumentEditListener() {
        if(this.documentEditListener) {
            document.removeEventListener('click', this.documentEditListener);
            this.documentEditListener = null;
            this.selfClick = false;
        }
    }

    closeCell() {
        /* When using the 'tab' key, the focus event of the next cell is not called in IE. */
        setTimeout(() => {
            this.setState({
                editing: false
            }, () => {
                this.unbindDocumentEditListener();
                OverlayEventBus.off('overlay-click', this.overlayEventListener);
                this.overlayEventListener = null;
            });
        }, 1);
    }

    onEditorFocus(event) {
        this.onClick(event);
    }

    switchCellToViewMode(event) {
        if (this.props.editorValidator) {
            let valid = this.props.editorValidator({
                originalEvent: event,
                columnProps: this.props
            });

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
            clearTimeout(this.tabindexTimeout);
            if (this.state && this.state.editing) {
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

        if (this.overlayEventListener) {
            OverlayEventBus.off('overlay-click', this.overlayEventListener);
            this.overlayEventListener = null;
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
                content = this.props.body(this.props.node, this.props);
            else
                content = ObjectUtils.resolveFieldData(this.props.node.data, this.props.field);
        }

        /* eslint-disable */
        const editorKeyHelper = this.props.editor && <a tabIndex={0} ref={(el) => {this.keyHelper = el;}} className="p-cell-editor-key-helper p-hidden-accessible" onFocus={this.onEditorFocus}><span></span></a>;
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
