import * as React from 'react';
import { useMountEffect, useUpdateEffect } from '../hooks/Hooks';
import { classNames, DomHandler, ObjectUtils } from '../utils/Utils';

export const Editor = React.memo(React.forwardRef((props, ref) => {
    const contentRef = React.useRef(null);
    const toolbarRef = React.useRef(null);
    const quill = React.useRef(null);
    const isQuillLoaded = React.useRef(false);

    const getQuill = () => {
        return quill.current;
    }

    useMountEffect(() => {
        if (!isQuillLoaded.current) {
            import('quill').then((module) => {
                if (module && DomHandler.isExist(contentRef.current)) {
                    const configuration = {
                        modules: {
                            toolbar: props.showHeader ? toolbarRef.current : false,
                            ...props.modules
                        },
                        placeholder: props.placeholder,
                        readOnly: props.readOnly,
                        theme: props.theme,
                        formats: props.formats
                    };

                    if (module.default) {
                        // webpack
                        quill.current = new module.default(contentRef.current, configuration);
                    } else {
                        // parceljs
                        quill.current = new module(contentRef.current, configuration);
                    }

                    if (props.value) {
                        quill.current.setContents(quill.current.clipboard.convert(props.value));
                    }

                    quill.current.on('text-change', (delta, source) => {
                        let firstChild = contentRef.current.children[0];
                        let html = firstChild ? firstChild.innerHTML : null;
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
            });

            isQuillLoaded.current = true;
        }
    });

    useUpdateEffect(() => {
        if (quill.current && !quill.current.hasFocus()) {
            props.value ?
                quill.current.setContents(quill.current.clipboard.convert(props.value)) :
                quill.current.setText('');
        }
    }, [props.value]);

    React.useImperativeHandle(ref, () => ({
        getQuill,
        ...props
    }));

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

    const otherProps = ObjectUtils.findDiffKeys(props, Editor.defaultProps);
    const className = classNames('p-component p-editor-container', props.className);
    const header = createToolbarHeader();
    const content = <div ref={contentRef} className="p-editor-content" style={props.style}></div>

    return (
        <div id={props.id} className={className} {...otherProps}>
            {header}
            {content}
        </div>
    )
}));

Editor.displayName = 'Editor';
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
