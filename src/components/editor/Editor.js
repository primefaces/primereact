import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Quill from "quill";
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';

export class Editor extends Component {

    static defaultProps = {
        id: null,
        value: null,
        style: null,
        className: null,
        placeholder: null,
        readonly: false,
        formats: null,
        headerTemplate: null,
        onTextChange: null,
        onSelectionChange: null
    };

    static propsTypes = {
        id: PropTypes.string,
        value: PropTypes.string,
        style: PropTypes.object,
        className: PropTypes.string,
        placeholder: PropTypes.string,
        readonly: PropTypes.bool,
        formats: PropTypes.array,
        headerTemplate: PropTypes.any,
        onTextChange: PropTypes.func,
        onSelectionChange: PropTypes.func
    };

    componentDidMount() {
        this.quill = new Quill(this.editorElement, {
            modules: {
                toolbar: this.toolbarElement
            },
            placeholder: this.props.placeholder,
            readOnly: this.props.readOnly,
            theme: 'snow',
            formats: this.props.formats
        });


        if(this.props.value) {
            this.value = [...this.props.value];
            this.quill.pasteHTML(this.props.value);
        }

        this.handleTextChange = (delta, source) => {
            let html = this.editorElement.children[0].innerHTML;
            let text = this.quill.getText();
            if(html === '<p><br></p>') {
                html = null;
            }
            if(this.props.onTextChange) {
                this.props.onTextChange({
                    htmlValue: html,
                    textValue: text,
                    delta: delta,
                    source: source
                });
            }
            this.value = html;
        };

        this.handleSelectionChange = (range, oldRange, source) => {
            if(this.props.onSelectionChange) {
                this.props.onSelectionChange({
                    range: range,
                    oldRange: oldRange,
                    source: source
                });
            }
        };

        this.quill.on('text-change', this.handleTextChange);
        this.quill.on('selection-change', this.handleSelectionChange);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.value !== this.value) {
            this.value = this.props.value;
            let sel = this.quill.getSelection();
            if(sel) {
                var length = this.quill.getLength();
                sel.index = Math.max(0, Math.min(sel.index, length-1));
                sel.length = Math.max(0, Math.min(sel.length, (length-1) - sel.index));
            }
            this.quill.setSelection(sel);

            if(this.value === '' || this.value === null) {
                this.editorElement.children[0].innerHTML = '';
            }
        }
    }

    render() {
        let containerClass = classNames('ui-widget ui-editor-container ui-corner-all', this.props.className);

        let toolbarHeader = null;
        if (this.props.headerTemplate) {
            toolbarHeader = (
                <div ref={(el) => this.toolbarElement = el} className="ui-editor-toolbar ui-widget-header ui-corner-top">
                    {this.props.headerTemplate}
                </div>
            );
        }
        else {
            toolbarHeader = (
                <div ref={(el) => this.toolbarElement = el} className="ui-editor-toolbar ui-widget-header ui-corner-top">
                    <span className="ql-formats">
                        <select className="ql-header" defaultValue="0">
                          <option value="1">Heading</option>
                          <option value="2">Subheading</option>
                          <option value="0">Normal</option>
                        </select>
                        <select className="ql-font">
                            <option ></option>
                            <option value="serif"></option>
                            <option value="monospace"></option>
                        </select>
                    </span>
                    <span className="ql-formats">
                        <button className="ql-bold" aria-label="Bold"></button>
                        <button className="ql-italic" aria-label="Italic"></button>
                        <button className="ql-underline" aria-label="Underline"></button>
                    </span>
                    <span className="ql-formats">
                        <select className="ql-color"></select>
                        <select className="ql-background"></select>
                    </span>
                    <span className="ql-formats">
                        <button className="ql-list" value="ordered" aria-label="Ordered List"></button>
                        <button className="ql-list" value="bullet" aria-label="Unordered List"></button>
                        <select className="ql-align">
                            <option defaultValue></option>
                            <option value="center"></option>
                            <option value="right"></option>
                            <option value="justify"></option>
                        </select>
                    </span>
                    <span className="ql-formats">
                        <button className="ql-link" aria-label="Insert Link"></button>
                        <button className="ql-image" aria-label="Insert Image"></button>
                        <button className="ql-code-block" aria-label="Insert Code Block"></button>
                    </span>
                    <span className="ql-formats">
                        <button className="ql-clean" aria-label="Remove Styles"></button>
                    </span>
                </div>
            );
        }

        let content = (<div ref={(el) => this.editorElement = el} className="ui-editor-content" style={this.props.style}></div>)

        return (
            <div id={this.props.id} className={containerClass}>
                {toolbarHeader}
                {content}
            </div>
        );
    }
}