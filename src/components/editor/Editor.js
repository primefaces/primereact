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
        readOnly: false,
        modules: null,
        formats: null,
        theme: 'snow',
        headerTemplate: null,
        onTextChange: null,
		onSelectionChange: null
    };

    static propTypes = {
        id: PropTypes.string,
        value: PropTypes.string,
        style: PropTypes.object,
        className: PropTypes.string,
        placeholder: PropTypes.string,
        readOnly: PropTypes.bool,
        modules: PropTypes.object,
        formats: PropTypes.array,
        theme: PropTypes.string,
        headerTemplate: PropTypes.any,
        onTextChange: PropTypes.func,
		onSelectionChange: PropTypes.func
    };

    componentDidMount() {
        this.quill = new Quill(this.editorElement, {
            modules: {
                toolbar: this.toolbarElement,
                ...this.props.modules
            },
            placeholder: this.props.placeholder,
            readOnly: this.props.readOnly,
            theme: this.props.theme,
            formats: this.props.formats
        });

        if (this.props.value) {
            this.quill.pasteHTML(this.props.value);
        }

        this.quill.on('text-change', (delta, source) => {
            let html = this.editorElement.children[0].innerHTML;
            let text = this.quill.getText();
            if (html === '<p><br></p>') {
                html = null;
            }

            if (this.props.onTextChange) {
                this.props.onTextChange({
                    htmlValue: html,
                    textValue: text,
                    delta: delta,
                    source: source
                });
            }
        });

        this.quill.on('selection-change', (range, oldRange, source) => {
            if(this.props.onSelectionChange) {
                this.props.onSelectionChange({
                    range: range,
                    oldRange: oldRange,
                    source: source
                });
            }
        });
    }

    componentDidUpdate(prevProps) {
        if (this.props.value !== prevProps.value && this.quill && !this.quill.hasFocus()) {
            if(this.props.value)
                this.quill.pasteHTML(this.props.value);
            else
                this.quill.setText('');
        }
    }

    render() {
        let containerClass = classNames('p-component p-editor-container', this.props.className);
        let toolbarHeader = null;

        if (this.props.headerTemplate) {
            toolbarHeader = (
                <div ref={(el) => this.toolbarElement = el} className="p-editor-toolbar">
                    {this.props.headerTemplate}
                </div>
            );
        }
        else {
            toolbarHeader = (
                <div ref={el => this.toolbarElement = el} className="p-editor-toolbar">
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
                        <button type="button" className="ql-bold" aria-label="Bold"></button>
                        <button type="button" className="ql-italic" aria-label="Italic"></button>
                        <button type="button" className="ql-underline" aria-label="Underline"></button>
                    </span>
                    <span className="ql-formats">
                        <select className="ql-color"></select>
                        <select className="ql-background"></select>
                    </span>
                    <span className="ql-formats">
                        <button type="button" className="ql-list" value="ordered" aria-label="Ordered List"></button>
                        <button type="button" className="ql-list" value="bullet" aria-label="Unordered List"></button>
                        <select className="ql-align">
                            <option defaultValue></option>
                            <option value="center"></option>
                            <option value="right"></option>
                            <option value="justify"></option>
                        </select>
                    </span>
                    <span className="ql-formats">
                        <button type="button" className="ql-link" aria-label="Insert Link"></button>
                        <button type="button" className="ql-image" aria-label="Insert Image"></button>
                        <button type="button" className="ql-code-block" aria-label="Insert Code Block"></button>
                    </span>
                    <span className="ql-formats">
                        <button type="button" className="ql-clean" aria-label="Remove Styles"></button>
                    </span>
                </div>
            );
        }

        let content = (<div ref={(el) => this.editorElement = el} className="p-editor-content" style={this.props.style}></div>)

        return (
            <div id={this.props.id} className={containerClass}>
                {toolbarHeader}
                {content}
            </div>
        );
    }
}
