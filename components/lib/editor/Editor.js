import * as React from 'react';
import { useMountEffect, useUpdateEffect } from '../hooks/Hooks';
import { classNames, DomHandler, mergeProps } from '../utils/Utils';
import { EditorBase } from './EditorBase';
import { PrimeReactContext } from '../api/Api';

const QuillJS = (function () {
    try {
        return Quill;
    } catch {
        return null;
    }
})();

export const Editor = React.memo(
    React.forwardRef((inProps, ref) => {
        const context = React.useContext(PrimeReactContext);
        const props = EditorBase.getProps(inProps, context);
        const { ptm } = EditorBase.setMetaData({
            props
        });
        const elementRef = React.useRef(null);
        const contentRef = React.useRef(null);
        const toolbarRef = React.useRef(null);
        const quill = React.useRef(null);
        const isQuillLoaded = React.useRef(false);

        useMountEffect(() => {
            if (!isQuillLoaded.current) {
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

                if (QuillJS) {
                    // GitHub #3097 loaded by script only
                    quill.current = new Quill(contentRef.current, configuration);
                    initQuill();

                    if (quill.current && quill.current.getModule('toolbar')) {
                        props.onLoad && props.onLoad(quill.current);
                    }
                } else {
                    import('quill')
                        .then((module) => {
                            if (module && DomHandler.isExist(contentRef.current)) {
                                if (module.default) {
                                    // webpack
                                    quill.current = new module.default(contentRef.current, configuration);
                                } else {
                                    // parceljs
                                    quill.current = new module(contentRef.current, configuration);
                                }

                                initQuill();
                            }
                        })
                        .then(() => {
                            if (quill.current && quill.current.getModule('toolbar')) {
                                props.onLoad && props.onLoad(quill.current);
                            }
                        });
                }

                isQuillLoaded.current = true;
            }
        });

        const initQuill = () => {
            if (props.value) {
                quill.current.setContents(quill.current.clipboard.convert(props.value));
            }

            quill.current.on('text-change', (delta, oldContents, source) => {
                let firstChild = contentRef.current.children[0];
                let html = firstChild ? firstChild.innerHTML : null;
                let text = quill.current.getText();

                if (html === '<p><br></p>') {
                    html = null;
                }

                // GitHub #2271 prevent infinite loop on clipboard paste of HTML
                if (source === 'api') {
                    const htmlValue = contentRef.current.children[0];
                    const editorValue = document.createElement('div');

                    editorValue.innerHTML = props.value || '';

                    // this is necessary because Quill rearranged style elements
                    if (DomHandler.isEqualElement(htmlValue, editorValue)) {
                        return;
                    }
                }

                if (props.maxLength) {
                    const length = quill.current.getLength();

                    if (length > props.maxLength) {
                        quill.current.deleteText(props.maxLength, length);
                    }
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
        };

        useUpdateEffect(() => {
            if (quill.current && !quill.current.hasFocus()) {
                props.value ? quill.current.setContents(quill.current.clipboard.convert(props.value)) : quill.current.setText('');
            }
        }, [props.value]);

        React.useImperativeHandle(ref, () => ({
            props,
            getQuill: () => quill.current,
            getElement: () => elementRef.current,
            getContent: () => contentRef.current,
            getToolbar: () => toolbarRef.current
        }));

        const createToolbarHeader = () => {
            const toolbarProps = mergeProps(
                {
                    ref: toolbarRef,
                    className: 'p-editor-toolbar'
                },
                ptm('toolbar')
            );

            if (props.showHeader === false) {
                return null;
            } else if (props.headerTemplate) {
                return <div {...toolbarProps}>{props.headerTemplate}</div>;
            } else {
                const getMergeProps = (params, key) => mergeProps(params && { ...params }, ptm(key));

                const formatsProps = mergeProps({ className: 'ql-formats' }, ptm('formats'));

                return (
                    <div {...toolbarProps}>
                        <span {...formatsProps}>
                            <select {...getMergeProps({ className: 'ql-header', defaultValue: '0' }, 'select')}>
                                <option {...getMergeProps({ value: '1' }, 'option')}>Heading</option>
                                <option {...getMergeProps({ value: '2' }, 'option')}>Subheading</option>
                                <option {...getMergeProps({ value: '0' }, 'option')}>Normal</option>
                            </select>
                            <select {...getMergeProps({ className: 'ql-font' }, 'select')}>
                                <option {...getMergeProps(undefined, 'option')}></option>
                                <option {...getMergeProps({ value: 'serif' }, 'option')}></option>
                                <option {...getMergeProps({ value: 'monospace' }, 'option')}></option>
                            </select>
                        </span>
                        <span {...formatsProps}>
                            <button {...getMergeProps({ type: 'button', className: 'ql-bold', 'aria-label': 'Bold' }, 'button')}></button>
                            <button {...getMergeProps({ type: 'button', className: 'ql-italic', 'aria-label': 'Italic' }, 'button')}></button>
                            <button {...getMergeProps({ type: 'button', className: 'ql-underline', 'aria-label': 'Underline' }, 'button')}></button>
                        </span>
                        <span {...formatsProps}>
                            <select {...getMergeProps({ className: 'ql-color' }, 'select')}></select>
                            <select {...getMergeProps({ className: 'ql-background' }, 'select')}></select>
                        </span>
                        <span {...formatsProps}>
                            <button {...getMergeProps({ type: 'button', className: 'ql-list', value: 'ordered', 'aria-label': 'Ordered List' }, 'button')}></button>
                            <button {...getMergeProps({ type: 'button', className: 'ql-list', value: 'bullet', 'aria-label': 'Unordered List' }, 'button')}></button>
                            <select {...getMergeProps({ className: 'ql-align' }, 'select')}>
                                <option {...getMergeProps({ defaultValue: true }, 'option')}></option>
                                <option {...getMergeProps({ value: 'center' }, 'option')}></option>
                                <option {...getMergeProps({ value: 'right' }, 'option')}></option>
                                <option {...getMergeProps({ value: 'justify' }, 'option')}></option>
                            </select>
                        </span>
                        <span {...formatsProps}>
                            <button {...getMergeProps({ type: 'button', className: 'ql-link', 'aria-label': 'Insert Link' }, 'button')}></button>
                            <button {...getMergeProps({ type: 'button', className: 'ql-image', 'aria-label': 'Insert Image' }, 'button')}></button>
                            <button {...getMergeProps({ type: 'button', className: 'ql-code-block', 'aria-label': 'Insert Code Block' }, 'button')}></button>
                        </span>
                        <span {...formatsProps}>
                            <button {...getMergeProps({ type: 'button', className: 'ql-clean', 'aria-label': 'Remove Styles' }, 'button')}></button>
                        </span>
                    </div>
                );
            }
        };

        const className = classNames('p-component p-editor-container', props.className);
        const header = createToolbarHeader();
        const contentProps = mergeProps(
            {
                ref: contentRef,
                className: 'p-editor-content',
                style: props.style
            },
            ptm('content')
        );
        const content = <div {...contentProps}></div>;
        const rootProps = mergeProps(
            {
                id: props.id,
                ref: elementRef,
                className
            },
            EditorBase.getOtherProps(props),
            ptm('root')
        );

        return (
            <div {...rootProps}>
                {header}
                {content}
            </div>
        );
    })
);

Editor.displayName = 'Editor';
