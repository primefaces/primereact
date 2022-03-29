import React, { useEffect, useRef, useState } from 'react';
import { OverlayService } from '../overlayservice/OverlayService';
import { ObjectUtils, DomHandler, classNames } from '../utils/Utils';
import { useEventListener, useUnmountEffect } from '../hooks/Hooks';

export const TreeTableBodyCell = (props) => {
    const [editingState, setEditingState] = useState(false);
    const elementRef = useRef(null);
    const keyHelperRef = useRef(null);
    const selfClick = useRef(false);
    const overlayEventListener = useRef(null);
    const tabIndexTimeout = useRef(null);

    const [bindDocumentClickListener, unbindDocumentClickListener] = useEventListener({
        type: 'click', listener: (e) => {
            if (!selfClick.current && isOutsideClicked(e.target)) {
                switchCellToViewMode(e);
            }

            selfClick.current = false;
        }
    });

    const onClick = () => {
        if (props.editor && !editingState && (props.selectOnEdit || (!props.selectOnEdit && props.selected))) {
            selfClick.current = true;

            setEditingState(true);

            bindDocumentClickListener();

            overlayEventListener.current = (e) => {
                if (!isOutsideClicked(e.target)) {
                    selfClick.current = true;
                }
            };

            OverlayService.on('overlay-click', overlayEventListener.current);
        }
    }

    const onKeyDown = (event) => {
        if (event.which === 13 || event.which === 9) {
            switchCellToViewMode(event);
        }
    }

    const isOutsideClicked = (target) => {
        return elementRef.current && !(elementRef.current.isSameNode(target) || elementRef.current.contains(target));
    }

    const closeCell = () => {
        /* When using the 'tab' key, the focus event of the next cell is not called in IE. */
        setTimeout(() => {
            setEditingState(false);
            unbindDocumentClickListener();
            OverlayService.off('overlay-click', overlayEventListener.current);
            overlayEventListener = null;
        }, 1);
    }

    const onEditorFocus = (event) => {
        onClick(event);
    }

    const switchCellToViewMode = (event) => {
        if (props.cellEditValidator) {
            let valid = props.cellEditValidator({
                originalEvent: event,
                columnProps: props
            });

            if (valid) {
                closeCell();
            }
        }
        else {
            closeCell();
        }
    }

    useEffect(() => {
        if (elementRef.current && props.editor) {
            clearTimeout(tabIndexTimeout.current);
            if (editingState) {
                let focusable = DomHandler.findSingle(elementRef.current, 'input');
                if (focusable && document.activeElement !== focusable && !focusable.hasAttribute('data-isCellEditing')) {
                    focusable.setAttribute('data-isCellEditing', true);
                    focusable.focus();
                }

                keyHelperRef.current.tabIndex = -1;
            }
            else {
                tabIndexTimeout.current = setTimeout(() => {
                    if (keyHelperRef.current) {
                        keyHelperRef.current.setAttribute('tabindex', 0);
                    }
                }, 50);
            }
        }
    });

    useUnmountEffect(() => {
        if (overlayEventListener.current) {
            OverlayService.off('overlay-click', overlayEventListener.current);
            overlayEventListener.current = null;
        }
    });

    const className = classNames(props.bodyClassName || props.className, {
        'p-editable-column': props.editor,
        'p-cell-editing': props.editor ? editingState : false
    });
    const style = props.bodyStyle || props.style
    let content;

    if (editingState) {
        if (props.editor)
            content = ObjectUtils.getJSXElement(props.editor, { node: props.node, rowData: props.node.data, value: ObjectUtils.resolveFieldData(props.node.data, props.field), field: props.field, rowIndex: props.rowIndex, props });
        else
            throw new Error("Editor is not found on column.");
    }
    else {
        if (props.body)
            content = ObjectUtils.getJSXElement(props.body, props.node, { field: props.field, rowIndex: props.rowIndex, props });
        else
            content = ObjectUtils.resolveFieldData(props.node.data, props.field);
    }

    /* eslint-disable */
    const editorKeyHelper = props.editor && <a tabIndex={0} ref={keyHelperRef} className="p-cell-editor-key-helper p-hidden-accessible" onFocus={onEditorFocus}><span></span></a>;
    /* eslint-enable */

    return (
        <td ref={elementRef} className={className} style={style} onClick={onClick} onKeyDown={onKeyDown}>
            {props.children}
            {editorKeyHelper}
            {content}
        </td>
    )
}
