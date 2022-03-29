import React, { forwardRef, memo, useImperativeHandle, useRef } from 'react';
import PropTypes from 'prop-types';
import { classNames, DomHandler } from '../utils/Utils';
import { useMountEffect, useUpdateEffect } from '../hooks/Hooks';

export const Editor = memo(forwardRef((props, ref) => {
    const contentRef = useRef(null);
    const toolbarRef = useRef(null);
    const quill = useRef(null);

    const getQuill = () => {
        return quill.current;
    }

    useMountEffect(() => {
        import('quill').then((module) => {
            if (module && module.default && DomHandler.isExist(contentRef.current)) {
                quill.current = new module.default(contentRef.current, {
                    modules: {
                        toolbar: props.showHeader ? toolbarRef.current : false,
                        ...props.modules
                    },
                    placeholder: props.placeholder,
                    readOnly: props.readOnly,
                    theme: props.theme,
                    formats: props.formats
                });

                if (props.value) {
                    quill.current.setContents(quill.current.clipboard.convert(props.value));
                }

                quill.current.on('text-change', (delta, source) => {
                    let html = contentRef.current.children[0].innerHTML;
                    let text = quill.current.getText();
                    if (html === '<p><br></p>') {
                        html = null;
                    }

                    if (props.onTextChange) {
                        props.onTextChange({
                            htmlValue: html,
                            textValue: text,
                            delta: delta,
                            source: source
                        });
                    }
                });

                quill.current.on('selection-change', (range, oldRange, source) => {
                    if (props.onSelectionChange) {
                        props.onSelectionChange({
                            range: range,
                            oldRange: oldRange,
                            source: source
                        });
                    }
                });
            }
        }).then(() => {
            if (quill.current && quill.current.getModule('toolbar')) {
                props.onLoad && props.onLoad(quill.current);
            }
        })
    });

    useUpdateEffect(() => {
        if (quill.current && !quill.current.hasFocus()) {
            props.value ?
                quill.current.setContents(quill.current.clipboard.convert(props.value)) :
                quill.current.setText('');
        }
    }, [props.value]);

    useImperativeHandle(ref, () => {
        getQuill
    });

    const createToolbarHeader = () => {
        if (props.showHeader === false) {
            return null;
        }
        else if (props.headerTemplate) {
            return (
                <div ref={toolbarRef} className="p-editor-toolbar">
                    {props.headerTemplate}
                </div>
            )
        }
        else {
            return (
                <div ref={toolbarRef} className="p-editor-toolbar">
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
            )
        }
    }

    const className = classNames('p-component p-editor-container', props.className);
    const header = createToolbarHeader();
    const content = <div ref={contentRef} className="p-editor-content"></div>

    return (
        <div id={props.id} className={className} style={props.style}>
            {header}
            {content}
        </div>
    )
}));

Editor.defaultProps = {
    __TYPE: 'Editor',
    id: null,
    value: null,
    style: null,
    className: null,
    placeholder: null,
    readOnly: false,
    modules: null,
    formats: null,
    theme: 'snow',
    showHeader: true,
    headerTemplate: null,
    onTextChange: null,
    onSelectionChange: null,
    onLoad: null
}

Editor.propTypes /* remove-proptypes */ = {
    __TYPE: PropTypes.string,
    id: PropTypes.string,
    value: PropTypes.string,
    style: PropTypes.object,
    className: PropTypes.string,
    placeholder: PropTypes.string,
    readOnly: PropTypes.bool,
    modules: PropTypes.object,
    formats: PropTypes.array,
    theme: PropTypes.string,
    showHeader: PropTypes.bool,
    headerTemplate: PropTypes.any,
    onTextChange: PropTypes.func,
    onSelectionChange: PropTypes.func,
    onLoad: PropTypes.func
}
