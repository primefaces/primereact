import * as React from 'react';
import { ColumnBase } from '../column/ColumnBase';
import { useEventListener, useMergeProps, useUnmountEffect } from '../hooks/Hooks';
import { OverlayService } from '../overlayservice/OverlayService';
import { DomHandler, ObjectUtils, classNames } from '../utils/Utils';

export const TreeTableBodyCell = (props) => {
    const [editingState, setEditingState] = React.useState(false);
    const elementRef = React.useRef(null);
    const keyHelperRef = React.useRef(null);
    const selfClick = React.useRef(false);
    const overlayEventListener = React.useRef(null);
    const tabIndexTimeout = React.useRef(null);
    const mergeProps = useMergeProps();
    const getColumnProp = (name) => ColumnBase.getCProp(props.column, name);
    const getColumnProps = (column) => ColumnBase.getCProps(column);
    const { ptm, ptmo, cx } = props.ptCallbacks;

    const getColumnPTOptions = (key) => {
        const isSingleSelectionMode = props.metaData.props.selectionMode === 'single';
        const isMultipleSelectionMode = props.metaData.props.selectionMode === 'multiple';
        const cProps = getColumnProps(props.column);
        const columnMetadata = {
            props: cProps,
            parent: props.metaData,
            hostName: props.hostName,
            state: {
                editing: editingState
            },
            context: {
                index: props.index,
                selectable: isSingleSelectionMode || isMultipleSelectionMode,
                selected: props.selected,
                scrollable: props.metaData.props.scrollable,
                frozen: getColumnProp('frozen'),
                showGridlines: props.metaData.props.showGridlines
            }
        };

        return mergeProps(ptm(`column.${key}`, { column: columnMetadata }), ptm(`column.${key}`, columnMetadata), ptmo(cProps, key, columnMetadata));
    };

    const field = getColumnProp('field') || `field_${props.index}`;

    const getCellParams = () => {
        return {
            value: resolveFieldData(),
            field: field,
            rowData: props.rowData,
            rowIndex: props.rowIndex,
            cellIndex: props.index,
            selected: isSelected(),
            column: props.column,
            props
        };
    };

    const getCellCallbackParams = (event) => {
        const params = getCellParams();

        return {
            originalEvent: event,
            ...params
        };
    };

    const resolveFieldData = (data) => {
        return ObjectUtils.resolveFieldData(data || props.node.data, field);
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

    const onClick = (event) => {
        if (props.editor && !editingState && (props.selectOnEdit || (!props.selectOnEdit && props.selected))) {
            selfClick.current = true;

            const params = getCellCallbackParams(event);
            const onBeforeCellEditShow = getColumnProp('onBeforeCellEditShow');

            if (onBeforeCellEditShow) {
                // if user returns false do not show the editor
                if (onBeforeCellEditShow(params) === false) {
                    return;
                }

                // if user prevents default stop the editor
                if (event && event.defaultPrevented) {
                    return;
                }
            }

            setEditingState(true);

            const onCellEditInit = getColumnProp('onCellEditInit');

            if (onCellEditInit) {
                if (onCellEditInit(params) === false) {
                    return;
                }

                // if user prevents default stop the editor
                if (event && event.defaultPrevented) {
                    return;
                }
            }

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

    const isSelected = () => {
        return props.selection ? (props.selection instanceof Array ? findIndex(props.selection) > -1 : equals(props.selection)) : false;
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
    const style = props.bodyStyle || props.style;
    let content;

    if (editingState) {
        if (props.editor) content = ObjectUtils.getJSXElement(props.editor, { node: props.node, rowData: props.rowData, value: ObjectUtils.resolveFieldData(props.node.data, props.field), field: props.field, rowIndex: props.rowIndex, props });
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
    const align = getColumnProp('align');
    /* eslint-enable */
    const bodyCellProps = mergeProps(
        {
            role: 'cell',
            className: classNames(bodyClassName || props.className, cx('bodyCell', { bodyProps: props, editingState, align })),
            style,
            onClick: (e) => onClick(e),
            onKeyDown: (e) => onKeyDown(e)
        },
        getColumnPTOptions('root'),
        getColumnPTOptions('bodyCell')
    );

    return (
        <td ref={elementRef} {...bodyCellProps}>
            {props.children}
            {editorKeyHelper}
            {content}
        </td>
    );
};

TreeTableBodyCell.displayName = 'TreeTableBodyCell';
