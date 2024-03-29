import * as React from 'react';
import { PrimeReactContext } from '../api/Api';
import { useHandleStyle } from '../componentbase/ComponentBase';
import { useMergeProps, useMountEffect, useUpdateEffect } from '../hooks/Hooks';
import { DomHandler, classNames } from '../utils/Utils';
import { EditorBase } from './EditorBase';

const QuillJS = (function () {
    try {
        return Quill;
    } catch {
        return null;
    }
}());

export const Editor = React.memo(
    React.forwardRef((inProps, ref) => {
        const mergeProps = useMergeProps();
        const context = React.useContext(PrimeReactContext);
        const props = EditorBase.getProps(inProps, context);
        const { ptm, cx, isUnstyled } = EditorBase.setMetaData({
            props
        });

        useHandleStyle(EditorBase.css.styles, isUnstyled, { name: 'editor' });
        const elementRef = React.useRef(null);
        const contentRef = React.useRef(null);
        const toolbarRef = React.useRef(null);
        const quill = React.useRef(null);
        const isQuillLoaded = React.useRef(false);

        const [quillCreated, setQuillCreated] = React.useState(false);

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
                    initQuill(new Quill(contentRef.current, configuration));
                } else {
                    import('quill').then((module) => {
                        if (module && DomHandler.isExist(contentRef.current)) {
                            let quillInstance;

                            if (module.default) {
                                // webpack
                                quillInstance = new module.default(contentRef.current, configuration);
                            } else {
                                // parceljs
                                quillInstance = new module(contentRef.current, configuration);
                            }

                            initQuill(quillInstance);
                        }
                    });
                }

                isQuillLoaded.current = true;
            }
        });

        const onTextChange = (delta, oldContents, source) => {
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
        };

        const onSelectionChange = (range, oldRange, source) => {
            if (props.onSelectionChange) {
                props.onSelectionChange({
                    range: range,
                    oldRange: oldRange,
                    source: source
                });
            }
        };

        const initQuill = (quillInstance) => {
            quill.current = quillInstance;

            if (props.value) {
                quill.current.setContents(quill.current.clipboard.convert(props.value));
            }

            setQuillCreated(true);
        };

        useUpdateEffect(() => {
            if (quillCreated) {
                quill.current.on('text-change', onTextChange);
                quill.current.on('selection-change', onSelectionChange);

                return () => {
                    quill.current.off('text-change', onTextChange);
                    quill.current.off('selection-change', onSelectionChange);
                };
            }
        });

        useUpdateEffect(() => {
            if (quillCreated) {
                if (quill.current && quill.current.getModule('toolbar')) {
                    props.onLoad && props.onLoad(quill.current);
                }
            }
        }, [quillCreated]);

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
                    className: cx('toolbar')
                },
                ptm('toolbar')
            );

            if (props.showHeader === false) {
                return null;
            } else if (props.headerTemplate) {
                return <div {...toolbarProps}>{props.headerTemplate}</div>;
            }

            const getMergeProps = (params, key) => mergeProps(params && { ...params }, ptm(key));

            const formatsProps = mergeProps({ className: 'ql-formats' }, ptm('formats'));

            return (
                <div {...toolbarProps}>
                    <span {...formatsProps}>
                        <select {...getMergeProps({ className: 'ql-header', defaultValue: '0' }, 'header')}>
                            <option {...getMergeProps({ value: '1' }, 'option')}>Heading</option>
                            <option {...getMergeProps({ value: '2' }, 'option')}>Subheading</option>
                            <option {...getMergeProps({ value: '0' }, 'option')}>Normal</option>
                        </select>
                        <select {...getMergeProps({ className: 'ql-font' }, 'font')}>
                            <option {...getMergeProps(undefined, 'option')} />
                            <option {...getMergeProps({ value: 'serif' }, 'option')} />
                            <option {...getMergeProps({ value: 'monospace' }, 'option')} />
                        </select>
                    </span>
                    <span {...formatsProps}>
                        <button {...getMergeProps({ type: 'button', className: 'ql-bold', 'aria-label': 'Bold' }, 'bold')} />
                        <button {...getMergeProps({ type: 'button', className: 'ql-italic', 'aria-label': 'Italic' }, 'italic')} />
                        <button {...getMergeProps({ type: 'button', className: 'ql-underline', 'aria-label': 'Underline' }, 'underline')} />
                    </span>
                    <span {...formatsProps}>
                        <select {...getMergeProps({ className: 'ql-color' }, 'color')} />
                        <select {...getMergeProps({ className: 'ql-background' }, 'background')} />
                    </span>
                    <span {...formatsProps}>
                        <button {...getMergeProps({ type: 'button', className: 'ql-list', value: 'ordered', 'aria-label': 'Ordered List' }, 'list')} />
                        <button {...getMergeProps({ type: 'button', className: 'ql-list', value: 'bullet', 'aria-label': 'Unordered List' }, 'list')} />
                        <select {...getMergeProps({ className: 'ql-align' }, 'select')}>
                            <option {...getMergeProps({ defaultValue: true }, 'option')} />
                            <option {...getMergeProps({ value: 'center' }, 'option')} />
                            <option {...getMergeProps({ value: 'right' }, 'option')} />
                            <option {...getMergeProps({ value: 'justify' }, 'option')} />
                        </select>
                    </span>
                    <span {...formatsProps}>
                        <button {...getMergeProps({ type: 'button', className: 'ql-link', 'aria-label': 'Insert Link' }, 'link')} />
                        <button {...getMergeProps({ type: 'button', className: 'ql-image', 'aria-label': 'Insert Image' }, 'image')} />
                        <button {...getMergeProps({ type: 'button', className: 'ql-code-block', 'aria-label': 'Insert Code Block' }, 'codeBlock')} />
                    </span>
                    <span {...formatsProps}>
                        <button {...getMergeProps({ type: 'button', className: 'ql-clean', 'aria-label': 'Remove Styles' }, 'clean')} />
                    </span>
                </div>
            );
        };

        const header = createToolbarHeader();
        const contentProps = mergeProps(
            {
                ref: contentRef,
                className: cx('content'),
                style: props.style
            },
            ptm('content')
        );
        const content = <div {...contentProps} />;
        const rootProps = mergeProps(
            {
                className: classNames(props.className, cx('root'))
            },
            EditorBase.getOtherProps(props),
            ptm('root')
        );

        return (
            <div id={props.id} ref={elementRef} {...rootProps}>
                {header}
                {content}
            </div>
        );
    })
);

Editor.displayName = 'Editor';
