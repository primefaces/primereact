import * as React from 'react';
import { useEventListener, useUnmountEffect } from '../hooks/Hooks';
import { OverlayService } from '../overlayservice/OverlayService';
import { classNames, DomHandler, mergeProps, ObjectUtils } from '../utils/Utils';
import { ColumnBase } from '../column/ColumnBase';

export const TreeTableBodyCell = (props) => {
    const [editingState, setEditingState] = React.useState(false);
    const elementRef = React.useRef(null);
    const keyHelperRef = React.useRef(null);
    const selfClick = React.useRef(false);
    const overlayEventListener = React.useRef(null);
    const tabIndexTimeout = React.useRef(null);
    const getColumnProp = (name) => ColumnBase.getCProp(props.column, name);
    const getColumnProps = (column) => ColumnBase.getCProps(column);

    const getColumnPTOptions = (key) => {
        const cProps = getColumnProps(props.column);

        return props.ptCallbacks.ptmo(getColumnProp('pt'), key, {
            props: cProps,
            parent: props.metaData,
            state: {
                editing: editingState
            }
        });
    };

    const [bindDocumentClickListener, unbindDocumentClickListener] = useEventListener({
        type: 'click',
        listener: (e) => {
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
    };

    const onKeyDown = (event) => {
        if (event.which === 13 || event.which === 9) {
            switchCellToViewMode(event);
        }
    };

    const isOutsideClicked = (target) => {
        return elementRef.current && !(elementRef.current.isSameNode(target) || elementRef.current.contains(target));
    };

    const closeCell = () => {
        /* When using the 'tab' key, the focus event of the next cell is not called in IE. */
        setTimeout(() => {
            setEditingState(false);
            unbindDocumentClickListener();
            OverlayService.off('overlay-click', overlayEventListener.current);
            overlayEventListener.current = null;
        }, 1);
    };

    const onEditorFocus = (event) => {
        onClick(event);
    };

    const switchCellToViewMode = (event) => {
        if (props.cellEditValidator) {
            let valid = props.cellEditValidator({
                originalEvent: event,
                columnProps: props
            });

            if (valid) {
                closeCell();
            }
        } else {
            closeCell();
        }
    };

    React.useEffect(() => {
        if (elementRef.current && props.editor) {
            clearTimeout(tabIndexTimeout.current);

            if (editingState) {
                let focusable = DomHandler.findSingle(elementRef.current, 'input');

                if (focusable && document.activeElement !== focusable && !focusable.hasAttribute('data-isCellEditing')) {
                    focusable.setAttribute('data-isCellEditing', true);
                    focusable.focus();
                }

                keyHelperRef.current.tabIndex = -1;
            } else {
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

    const bodyClassName = ObjectUtils.getPropValue(props.bodyClassName, props.node.data, { field: props.field, rowIndex: props.rowIndex, props: props });
    const className = classNames(bodyClassName || props.className, {
        'p-editable-column': props.editor,
        'p-cell-editing': props.editor ? editingState : false
    });
    const style = props.bodyStyle || props.style;
    let content;

    if (editingState) {
        if (props.editor) content = ObjectUtils.getJSXElement(props.editor, { node: props.node, rowData: props.node.data, value: ObjectUtils.resolveFieldData(props.node.data, props.field), field: props.field, rowIndex: props.rowIndex, props });
        else throw new Error('Editor is not found on column.');
    } else {
        if (props.body) content = ObjectUtils.getJSXElement(props.body, props.node, { field: props.field, rowIndex: props.rowIndex, props });
        else content = ObjectUtils.resolveFieldData(props.node.data, props.field);
    }

    const editorKeyHelperProps = mergeProps(
        {
            tabIndex: 0,
            ref: keyHelperRef,
            className: 'p-cell-editor-key-helper p-hidden-accessible',
            onFocus: (e) => onEditorFocus(e)
        },
        getColumnPTOptions('editorKeyHelperLabel')
    );

    const editorKeyHelperLabelProps = mergeProps(getColumnPTOptions('editorKeyHelper'));
    /* eslint-disable */
    const editorKeyHelper = props.editor && (
        <a {...editorKeyHelperProps}>
            <span {...editorKeyHelperLabelProps}></span>
        </a>
    );
    /* eslint-enable */
    const bodyCellProps = mergeProps(
        {
            ref: elementRef,
            className,
            style,
            onClick: (e) => onClick(e),
            onKeyDown: (e) => onKeyDown(e)
        },
        getColumnPTOptions('bodyCell'),
        getColumnPTOptions('root')
    );

    return (
        <td {...bodyCellProps}>
            {props.children}
            {editorKeyHelper}
            {content}
        </td>
    );
};

TreeTableBodyCell.displayName = 'TreeTableBodyCell';
