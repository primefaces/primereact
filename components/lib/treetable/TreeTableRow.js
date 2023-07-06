import * as React from 'react';
import { ariaLabel } from '../api/Api';
import { ColumnBase } from '../column/ColumnBase';
import { Ripple } from '../ripple/Ripple';
import { classNames, DomHandler, IconUtils, mergeProps, ObjectUtils } from '../utils/Utils';
import { TreeTableBodyCell } from './TreeTableBodyCell';
import { ChevronDownIcon } from '../icons/chevrondown';
import { ChevronRightIcon } from '../icons/chevronright';
import { CheckIcon } from '../icons/check';
import { MinusIcon } from '../icons/minus';

export const TreeTableRow = React.memo((props) => {
    const elementRef = React.useRef(null);
    const checkboxRef = React.useRef(null);
    const checkboxBoxRef = React.useRef(null);
    const nodeTouched = React.useRef(false);
    const expanded = props.expandedKeys ? props.expandedKeys[props.node.key] !== undefined : false;
    const getColumnProps = (column) => ColumnBase.getCProps(column);

    const getColumnPTOptions = (column, key) => {
        return props.ptCallbacks.ptmo(ColumnBase.getCProp(column, 'pt'), key, {
            props: getColumnProps(column),
            parent: props.metaData
        });
    };

    const getColumnCheckboxPTOptions = (column, key) => {
        return props.ptCallbacks.ptmo(ColumnBase.getCProp(column, 'pt'), key, {
            props: getColumnProps(column),
            parent: props.metaData,
            context: {
                checked: isChecked(),
                partialChecked: isPartialChecked()
            }
        });
    };

    const isLeaf = () => {
        return props.node.leaf === false ? false : !(props.node.children && props.node.children.length);
    };

    const getColumnProp = (column, name) => {
        return ColumnBase.getCProp(column, name);
    };

    const onTogglerClick = (event) => {
        expanded ? collapse(event) : expand(event);

        event.preventDefault();
        event.stopPropagation();
    };

    const expand = (event) => {
        let expandedKeys = props.expandedKeys ? { ...props.expandedKeys } : {};

        expandedKeys[props.node.key] = true;

        props.onToggle({
            originalEvent: event,
            value: expandedKeys
        });

        invokeToggleEvents(event, true);
    };

    const collapse = (event) => {
        let expandedKeys = { ...props.expandedKeys };

        delete expandedKeys[props.node.key];

        props.onToggle({
            originalEvent: event,
            value: expandedKeys
        });

        invokeToggleEvents(event, false);
    };

    const invokeToggleEvents = (event, expanded) => {
        if (expanded) {
            if (props.onExpand) {
                props.onExpand({
                    originalEvent: event,
                    node: props.node
                });
            }
        } else {
            if (props.onCollapse) {
                props.onCollapse({
                    originalEvent: event,
                    node: props.node
                });
            }
        }
    };

    const onClick = (event) => {
        if (props.onRowClick) {
            props.onRowClick(event, props.node);
        }

        nodeTouched.current = false;
    };

    const onTouchEnd = () => {
        nodeTouched.current = true;
    };

    const onMouseEnter = (event) => {
        if (props.onRowMouseEnter) {
            props.onRowMouseEnter({ originalEvent: event, node: props.node, index: props.rowIndex });
        }
    };

    const onMouseLeave = (event) => {
        if (props.onRowMouseLeave) {
            props.onRowMouseLeave({ originalEvent: event, node: props.node, index: props.rowIndex });
        }
    };

    const onCheckboxChange = (event) => {
        const checked = isChecked();
        let selectionKeys = props.selectionKeys ? { ...props.selectionKeys } : {};

        if (checked) {
            if (props.propagateSelectionDown) propagateDown(props.node, false, selectionKeys);
            else delete selectionKeys[props.node.key];

            if (props.propagateSelectionUp && props.onPropagateUp) {
                props.onPropagateUp({
                    originalEvent: event,
                    check: false,
                    selectionKeys: selectionKeys
                });
            }

            if (props.onUnselect) {
                props.onUnselect({
                    originalEvent: event,
                    node: props.node
                });
            }
        } else {
            if (props.propagateSelectionDown) propagateDown(props.node, true, selectionKeys);
            else selectionKeys[props.node.key] = { checked: true };

            if (props.propagateSelectionUp && props.onPropagateUp) {
                props.onPropagateUp({
                    originalEvent: event,
                    check: true,
                    selectionKeys: selectionKeys
                });
            }

            if (props.onSelect) {
                props.onSelect({
                    originalEvent: event,
                    node: props.node
                });
            }
        }

        if (props.onSelectionChange) {
            props.onSelectionChange({
                originalEvent: event,
                value: selectionKeys
            });
        }

        DomHandler.clearSelection();
    };

    const onCheckboxFocus = () => {
        DomHandler.addClass(checkboxBoxRef.current, 'p-focus');
        DomHandler.addClass(checkboxRef.current, 'p-checkbox-focused');
    };

    const onCheckboxBlur = () => {
        DomHandler.removeClass(checkboxBoxRef.current, 'p-focus');
        DomHandler.removeClass(checkboxRef.current, 'p-checkbox-focused');
    };

    const propagateUp = (event) => {
        let check = event.check;
        let selectionKeys = event.selectionKeys;
        let checkedChildCount = 0;
        let childPartialSelected = false;

        for (let child of props.node.children) {
            if (selectionKeys[child.key] && selectionKeys[child.key].checked) checkedChildCount++;
            else if (selectionKeys[child.key] && selectionKeys[child.key].partialChecked) childPartialSelected = true;
        }

        if (check && checkedChildCount === props.node.children.length) {
            selectionKeys[props.node.key] = { checked: true, partialChecked: false };
        } else {
            if (!check) {
                delete selectionKeys[props.node.key];
            }

            if (childPartialSelected || (checkedChildCount > 0 && checkedChildCount !== props.node.children.length)) selectionKeys[props.node.key] = { checked: false, partialChecked: true };
            else selectionKeys[props.node.key] = { checked: false, partialChecked: false };
        }

        if (props.propagateSelectionUp && props.onPropagateUp) {
            props.onPropagateUp(event);
        }
    };

    const propagateDown = (node, check, selectionKeys) => {
        if (check) selectionKeys[node.key] = { checked: true, partialChecked: false };
        else delete selectionKeys[node.key];

        if (node.children && node.children.length) {
            for (let i = 0; i < node.children.length; i++) {
                propagateDown(node.children[i], check, selectionKeys);
            }
        }
    };

    const onRightClick = (event) => {
        DomHandler.clearSelection();

        if (props.onContextMenuSelectionChange) {
            props.onContextMenuSelectionChange({
                originalEvent: event,
                value: props.node.key
            });
        }

        if (props.onContextMenu) {
            props.onContextMenu({
                originalEvent: event,
                node: props.node
            });
        }
    };

    const onKeyDown = (event) => {
        if (event.target === elementRef.current) {
            const rowElement = event.currentTarget;

            switch (event.which) {
                //down arrow
                case 40:
                    const nextRow = rowElement.nextElementSibling;

                    if (nextRow) {
                        nextRow.focus();
                    }

                    event.preventDefault();
                    break;

                //up arrow
                case 38:
                    const previousRow = rowElement.previousElementSibling;

                    if (previousRow) {
                        previousRow.focus();
                    }

                    event.preventDefault();
                    break;

                //right arrow
                case 39:
                    if (!expanded) {
                        expand(event);
                    }

                    event.preventDefault();
                    break;

                //left arrow
                case 37:
                    if (expanded) {
                        collapse(event);
                    }

                    event.preventDefault();
                    break;

                //enter
                case 13:
                    onClick(event);
                    event.preventDefault();
                    break;

                default:
                    //no op
                    break;
            }
        }
    };

    const isSelected = () => {
        if ((props.selectionMode === 'single' || props.selectionMode === 'multiple') && props.selectionKeys) return props.selectionMode === 'single' ? props.selectionKeys === props.node.key : props.selectionKeys[props.node.key] !== undefined;
        else return false;
    };

    const isChecked = () => {
        return props.selectionKeys ? props.selectionKeys[props.node.key] && props.selectionKeys[props.node.key].checked : false;
    };

    const isPartialChecked = () => {
        return props.selectionKeys ? props.selectionKeys[props.node.key] && props.selectionKeys[props.node.key].partialChecked : false;
    };

    const createToggler = (column) => {
        const label = expanded ? ariaLabel('collapseLabel') : ariaLabel('expandLabel');
        const rowTogglerIconProps = mergeProps(
            {
                className: 'p-treetable-toggler-icon',
                'aria-hidden': true
            },
            getColumnPTOptions(column, 'rowTogglerIcon')
        );
        const icon = expanded ? <ChevronDownIcon {...rowTogglerIconProps} /> : <ChevronRightIcon {...rowTogglerIconProps} />;
        const togglerIcon = IconUtils.getJSXIcon(props.togglerIcon || icon, { ...rowTogglerIconProps }, { props });
        const style = { marginLeft: props.level * 16 + 'px', visibility: props.node.leaf === false || (props.node.children && props.node.children.length) ? 'visible' : 'hidden' };
        const rowTogglerProps = mergeProps(
            {
                type: 'button',
                className: 'p-treetable-toggler p-link p-unselectable-text',
                onClick: (e) => onTogglerClick(e),
                tabIndex: -1,
                style,
                'aria-label': label
            },
            getColumnPTOptions(column, 'rowToggler')
        );

        let content = (
            <button {...rowTogglerProps}>
                {togglerIcon}
                <Ripple />
            </button>
        );

        if (props.togglerTemplate) {
            const defaultContentOptions = {
                onClick: onTogglerClick,
                containerClassName: 'p-treetable-toggler p-link',
                iconClassName: 'p-treetable-toggler-icon',
                element: content,
                props,
                expanded,
                buttonStyle: style
            };

            content = ObjectUtils.getJSXElement(props.togglerTemplate, props.node, defaultContentOptions);
        }

        return content;
    };

    const createCheckbox = (column) => {
        if (props.selectionMode === 'checkbox' && props.node.selectable !== false) {
            const checked = isChecked();
            const partialChecked = isPartialChecked();
            const className = classNames('p-checkbox-box', { 'p-highlight': checked, 'p-indeterminate': partialChecked });
            const iconClassName = 'p-checkbox-icon p-c';
            const checboxIconProps = mergeProps(
                {
                    className: iconClassName
                },
                getColumnCheckboxPTOptions(column, 'checkboxIcon')
            );
            const icon = checked ? props.checkboxIcon || <CheckIcon {...checboxIconProps} /> : partialChecked ? props.checkboxIcon || <MinusIcon {...checboxIconProps} /> : null;
            const checkIcon = IconUtils.getJSXIcon(icon, { className: iconClassName }, { props, checked, partialChecked });
            const hiddenInputProps = mergeProps(
                {
                    type: 'checkbox',
                    onFocus: (e) => onCheckboxFocus(e),
                    onBlur: (e) => onCheckboxBlur(e)
                },
                getColumnCheckboxPTOptions(column, 'hiddenInput')
            );
            const checkboxWrapperProps = mergeProps(
                {
                    className: 'p-checkbox p-treetable-checkbox p-component',
                    ref: checkboxRef,
                    onClick: (e) => onCheckboxChange(e),
                    role: 'checkbox',
                    'aria-checked': checked
                },
                getColumnCheckboxPTOptions(column, 'checkboxWrapper')
            );

            const hiddenInputWrapperProps = mergeProps(
                {
                    className: 'p-hidden-accessible'
                },
                getColumnCheckboxPTOptions(column, 'hiddenInputWrapper')
            );

            const checkboxProps = mergeProps(
                {
                    className,
                    ref: checkboxBoxRef
                },
                getColumnCheckboxPTOptions(column, 'checkbox')
            );

            return (
                <div {...checkboxWrapperProps}>
                    <div {...hiddenInputWrapperProps}>
                        <input {...hiddenInputProps} />
                    </div>
                    <div {...checkboxProps}>{checkIcon}</div>
                </div>
            );
        } else {
            return null;
        }
    };

    const createCell = (column, index) => {
        let toggler, checkbox;

        if (getColumnProp(column, 'expander')) {
            toggler = createToggler(column);
            checkbox = createCheckbox(column);
        }

        return (
            <TreeTableBodyCell
                key={`${getColumnProp(column, 'columnKey') || getColumnProp(column, 'field')}_${index}`}
                {...ColumnBase.getCProps(column)}
                column={column}
                selectOnEdit={props.selectOnEdit}
                selected={isSelected()}
                node={props.node}
                rowIndex={props.rowIndex}
                ptCallbacks={props.ptCallbacks}
                metaData={props.metaData}
            >
                {toggler}
                {checkbox}
            </TreeTableBodyCell>
        );
    };

    const createChildren = () => {
        if (expanded && props.node.children) {
            return props.node.children.map((childNode, index) => {
                return (
                    <TreeTableRow
                        key={`${childNode.key || JSON.stringify(childNode.data)}_${index}`}
                        level={props.level + 1}
                        rowIndex={props.rowIndex + '_' + index}
                        node={childNode}
                        checkboxIcon={props.checkboxIcon}
                        columns={props.columns}
                        expandedKeys={props.expandedKeys}
                        selectOnEdit={props.selectOnEdit}
                        onToggle={props.onToggle}
                        togglerTemplate={props.togglerTemplate}
                        onExpand={props.onExpand}
                        onCollapse={props.onCollapse}
                        selectionMode={props.selectionMode}
                        selectionKeys={props.selectionKeys}
                        onSelectionChange={props.onSelectionChange}
                        metaKeySelection={props.metaKeySelection}
                        onRowClick={props.onRowClick}
                        onRowMouseEnter={props.onRowMouseEnter}
                        onRowMouseLeave={props.onRowMouseLeave}
                        onSelect={props.onSelect}
                        onUnselect={props.onUnselect}
                        propagateSelectionUp={props.propagateSelectionUp}
                        propagateSelectionDown={props.propagateSelectionDown}
                        onPropagateUp={propagateUp}
                        rowClassName={props.rowClassName}
                        contextMenuSelectionKey={props.contextMenuSelectionKey}
                        onContextMenuSelectionChange={props.onContextMenuSelectionChange}
                        onContextMenu={props.onContextMenu}
                        ptCallbacks={props.ptCallbacks}
                        metaData={props.metaData}
                    />
                );
            });
        } else {
            return null;
        }
    };

    const cells = props.columns.map(createCell);
    const children = createChildren();
    let className = {
        'p-highlight': isSelected(),
        'p-highlight-contextmenu': props.contextMenuSelectionKey && props.contextMenuSelectionKey === props.node.key,
        'p-row-odd': props.rowIndex % 2 !== 0
    };

    if (props.rowClassName) {
        let rowClassName = props.rowClassName(props.node);

        className = { ...className, ...rowClassName };
    }

    className = classNames(className, props.node.className);
    const rowProps = mergeProps(
        {
            ref: elementRef,
            tabIndex: 0,
            className,
            style: props.node.style,
            onClick: (e) => onClick(e),
            onTouchEnd: (e) => onTouchEnd(e),
            onContextMenu: (e) => onRightClick(e),
            onKeyDown: (e) => onKeyDown(e),
            onMouseEnter: (e) => onMouseEnter(e),
            onMouseLeave: (e) => onMouseLeave(e)
        },
        props.ptCallbacks.ptm('row')
    );

    return (
        <>
            <tr {...rowProps}>{cells}</tr>
            {children}
        </>
    );
});

TreeTableRow.displayName = 'TreeTableRow';
