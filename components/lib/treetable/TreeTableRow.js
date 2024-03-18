import * as React from 'react';
import { ariaLabel } from '../api/Api';
import { ColumnBase } from '../column/ColumnBase';
import { useMergeProps } from '../hooks/Hooks';
import { CheckIcon } from '../icons/check';
import { ChevronDownIcon } from '../icons/chevrondown';
import { ChevronRightIcon } from '../icons/chevronright';
import { MinusIcon } from '../icons/minus';
import { Ripple } from '../ripple/Ripple';
import { classNames, DomHandler, IconUtils, ObjectUtils } from '../utils/Utils';
import { TreeTableBodyCell } from './TreeTableBodyCell';

export const TreeTableRow = React.memo((props) => {
    const elementRef = React.useRef(null);
    const checkboxRef = React.useRef(null);
    const checkboxBoxRef = React.useRef(null);
    const nodeTouched = React.useRef(false);
    const mergeProps = useMergeProps();
    const expanded = props.expandedKeys ? props.expandedKeys[props.node.key] !== undefined : false;

    const getColumnProp = (column, name) => {
        return ColumnBase.getCProp(column, name);
    };

    const getColumnProps = (column) => ColumnBase.getCProps(column);
    const { ptm, ptmo, cx, isUnstyled } = props.ptCallbacks;

    const getColumnPTOptions = (column, key) => {
        const cProps = getColumnProps(column);
        const columnMetadata = {
            props: cProps,
            parent: props.metaData,
            hostName: props.hostName,
            context: {
                index: props.rowIndex,
                selectable: props.node.selectable !== false,
                selected: isSelected(),
                frozen: getColumnProp(column, 'frozen'),
                scrollable: props.metaData.props.scrollable
            }
        };

        return mergeProps(ptm(`column.${key}`, { column: columnMetadata }), ptm(`column.${key}`, columnMetadata), ptmo(cProps, key, columnMetadata));
    };

    const getColumnCheckboxPTOptions = (column, key) => {
        const cProps = getColumnProps(column);

        const columnMetadata = {
            props: cProps,
            parent: props.metaData,
            hostName: props.hostName,
            context: {
                checked: isChecked(),
                partialChecked: isPartialChecked()
            }
        };

        return mergeProps(ptm(`column.${key}`, { column: columnMetadata }), ptm(`column.${key}`, columnMetadata), ptmo(cProps, key, columnMetadata));
    };

    const getRowPTOptions = (key) => {
        const rowMetadata = {
            hostName: props.hostName,
            context: {
                index: props.index,
                selected: isSelected(),
                selectable: props.node.selectable !== false,
                frozen: getColumnProp('frozen'),
                scrollable: props.metaData.props.scrollable,
                showGridlines: props.metaData.props.showGridlines
            }
        };

        return ptm(key, rowMetadata);
    };

    const isLeaf = () => {
        return props.node.leaf === false ? false : !(props.node.children && props.node.children.length);
    };

    const onTogglerClick = (event) => {
        expanded ? collapse(event) : expand(event);

        event.preventDefault();
        event.stopPropagation();
    };

    const expand = (event, navigateFocusToChild = false) => {
        let expandedKeys = props.expandedKeys ? { ...props.expandedKeys } : {};

        expandedKeys[props.node.key] = true;

        props.onToggle({
            originalEvent: event,
            value: expandedKeys,
            navigateFocusToChild
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
        !isUnstyled() && DomHandler.addClass(checkboxBoxRef.current, 'p-focus');
        !isUnstyled() && DomHandler.addClass(checkboxRef.current, 'p-checkbox-focused');
    };

    const onCheckboxBlur = () => {
        !isUnstyled() && DomHandler.removeClass(checkboxBoxRef.current, 'p-focus');
        !isUnstyled() && DomHandler.removeClass(checkboxRef.current, 'p-checkbox-focused');
    };

    const propagateUp = (event) => {
        let check = event.check;
        let selectionKeys = event.selectionKeys;
        let checkedChildCount = 0;

        for (let child of props.node.children) {
            if (selectionKeys[child.key] && selectionKeys[child.key].checked) checkedChildCount++;
        }

        const parentKey = props.node.key;
        const children = ObjectUtils.findChildrenByKey(props.originalOptions, parentKey);

        let isParentPartiallyChecked = children.some((ele) => ele.key in selectionKeys);
        let isCompletelyChecked = children.every((ele) => ele.key in selectionKeys && selectionKeys[ele.key].checked);

        if (isParentPartiallyChecked && !isCompletelyChecked) {
            selectionKeys[parentKey] = { checked: false, partialChecked: true };
        } else if (isCompletelyChecked) {
            selectionKeys[parentKey] = { checked: true, partialChecked: false };
        } else if (check) {
            selectionKeys[parentKey] = { checked: false, partialChecked: false };
        } else {
            delete selectionKeys[parentKey];
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

    const onKeyDown = (event, item) => {
        switch (event.code) {
            case 'ArrowDown':
                onArrowDownKey(event);
                break;

            case 'ArrowUp':
                onArrowUpKey(event);
                break;

            case 'ArrowLeft':
                onArrowLeftKey(event);
                break;

            case 'ArrowRight':
                onArrowRightKey(event);
                break;

            case 'Home':
                onHomeKey(event);
                break;

            case 'End':
                onEndKey(event);
                break;

            case 'Enter':
            case 'NumpadEnter':
            case 'Space':
                if (!DomHandler.isClickable(event.target)) {
                    onEnterKey(event, item);
                }

                break;

            case 'Tab':
                onTabKey(event);
                break;

            default:
                break;
        }
    };

    const onArrowDownKey = (event) => {
        const nextElementSibling = event.currentTarget.nextElementSibling;

        nextElementSibling && focusRowChange(event.currentTarget, nextElementSibling);

        event.preventDefault();
    };

    const onArrowUpKey = (event) => {
        const previousElementSibling = event.currentTarget.previousElementSibling;

        previousElementSibling && focusRowChange(event.currentTarget, previousElementSibling);

        event.preventDefault();
    };

    const onArrowRightKey = (event) => {
        const ishiddenIcon = DomHandler.findSingle(event.currentTarget, 'button').style.visibility === 'hidden';
        const togglerElement = DomHandler.findSingle(elementRef.current, '[data-pc-section="rowtoggler"]');

        if (ishiddenIcon) return;

        // !expanded && togglerElement.click();
        !expanded && expand(event, true);

        // this.$nextTick(() => {
        //     this.onArrowDownKey(event);
        // });

        event.preventDefault();
    };

    const onArrowLeftKey = (event) => {
        if (props.level === 0 && !expanded) {
            return;
        }

        const currentTarget = event.currentTarget;
        const ishiddenIcon = DomHandler.findSingle(currentTarget, 'button').style.visibility === 'hidden';
        const togglerElement = DomHandler.findSingle(currentTarget, '[data-pc-section="rowtoggler"]');

        if (expanded && !ishiddenIcon) {
            // togglerElement.click();
            collapse(event);

            return;
        }

        const target = findBeforeClickableNode(currentTarget);

        target && focusRowChange(currentTarget, target);
    };

    const onHomeKey = (event) => {
        const findFirstElement = DomHandler.findSingle(event.currentTarget.parentElement, `tr[aria-level="${props.level + 1}"]`);

        findFirstElement && DomHandler.focus(findFirstElement);

        event.preventDefault();
    };

    const onEndKey = (event) => {
        const nodes = DomHandler.find(event.currentTarget.parentElement, `tr[aria-level="${props.level + 1}"]`);
        const findFirstElement = nodes[nodes.length - 1];

        DomHandler.focus(findFirstElement);

        event.preventDefault();
    };

    const onEnterKey = (event) => {
        event.preventDefault();
        setTabIndexForSelectionMode(event, nodeTouched.current);

        if (props.selectionMode === 'checkbox') {
            // this.toggleCheckbox();
            onCheckboxChange(event);

            return;
        }

        // this.$emit('node-click', {
        //     originalEvent: event,
        //     nodeTouched: nodeTouched.current,
        //     node: this.node
        // });

        props.onRowClick(event, props.node);

        nodeTouched.current = false;
    };

    const onTabKey = () => {
        const rows = [...DomHandler.find(elementRef.current.parentElement, 'tr')];
        const hasSelectedRow = rows.some((row) => DomHandler.getAttribute(row, 'data-p-highlight') || row.getAttribute('aria-checked') === 'true');

        rows.forEach((row) => {
            row.tabIndex = -1;
        });

        if (hasSelectedRow) {
            const selectedNodes = rows.filter((node) => DomHandler.getAttribute(node, 'data-p-highlight') || node.getAttribute('aria-checked') === 'true');

            selectedNodes[0].tabIndex = 0;

            return;
        }

        rows[0].tabIndex = 0;
    };

    const focusRowChange = (firstFocusableRow, currentFocusedRow) => {
        firstFocusableRow.tabIndex = '-1';
        currentFocusedRow.tabIndex = '0';
        DomHandler.focus(currentFocusedRow);
    };

    const findBeforeClickableNode = (node) => {
        const prevNode = node.previousElementSibling;

        if (prevNode) {
            const prevNodeButton = prevNode.querySelector('button');

            if (prevNodeButton && prevNodeButton.style.visibility !== 'hidden') {
                return prevNode;
            }

            return findBeforeClickableNode(prevNode);
        }

        return null;
    };

    const setTabIndexForSelectionMode = (event, nodeTouched) => {
        if (props.selectionMode !== null) {
            const elements = [...DomHandler.find(elementRef.current.parentElement, 'tr')];

            event.currentTarget.tabIndex = nodeTouched === false ? -1 : 0;

            if (elements.every((element) => element.tabIndex === -1)) {
                elements[0].tabIndex = 0;
            }
        }
    };

    const isSelected = () => {
        if (props.selectionMode === 'single' || ((props.selectionMode === 'multiple' || props.selectionMode === 'checkbox') && props.selectionKeys)) {
            return props.selectionMode === 'single' ? props.selectionKeys === props.node.key : props.selectionKeys[props.node.key] !== undefined;
        }

        return false;
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
                className: cx('rowTogglerIcon'),
                'aria-hidden': true
            },
            getColumnPTOptions(column, 'rowTogglerIcon')
        );
        const icon = expanded ? <ChevronDownIcon {...rowTogglerIconProps} /> : <ChevronRightIcon {...rowTogglerIconProps} />;
        const togglerIcon = IconUtils.getJSXIcon(props.togglerIcon || icon, { ...rowTogglerIconProps }, { props });
        const rowTogglerProps = mergeProps(
            {
                type: 'button',
                className: cx('rowToggler'),
                onClick: (e) => onTogglerClick(e),
                tabIndex: -1,
                style: { marginLeft: props.level * 16 + 'px', visibility: props.node.leaf === false || (props.node.children && props.node.children.length) ? 'visible' : 'hidden' },
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
                buttonStyle: { marginLeft: props.level * 16 + 'px', visibility: props.node.leaf === false || (props.node.children && props.node.children.length) ? 'visible' : 'hidden' }
            };

            content = ObjectUtils.getJSXElement(props.togglerTemplate, props.node, defaultContentOptions);
        }

        return content;
    };

    const createCheckbox = (column) => {
        if (props.selectionMode === 'checkbox' && props.node.selectable !== false) {
            const checked = isChecked();
            const partialChecked = isPartialChecked();
            const checboxIconProps = mergeProps(
                {
                    className: cx('checkboxIcon')
                },
                getColumnCheckboxPTOptions(column, 'checkboxIcon')
            );
            const icon = checked ? props.checkboxIcon || <CheckIcon {...checboxIconProps} /> : partialChecked ? props.checkboxIcon || <MinusIcon {...checboxIconProps} /> : null;
            const checkIcon = IconUtils.getJSXIcon(icon, { ...checboxIconProps }, { props, checked, partialChecked });
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
                    className: cx('checkboxWrapper'),
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
                    className: cx('checkbox', { checked, partialChecked })
                },
                getColumnCheckboxPTOptions(column, 'checkbox')
            );

            return (
                <div ref={checkboxRef} {...checkboxWrapperProps}>
                    <div {...hiddenInputWrapperProps}>
                        <input {...hiddenInputProps} />
                    </div>
                    <div ref={checkboxBoxRef} {...checkboxProps}>
                        {checkIcon}
                    </div>
                </div>
            );
        } else {
            return null;
        }
    };

    const createCell = (column, index) => {
        let toggler, checkbox;

        if (getColumnProp(column, 'hidden')) {
            return null;
        }

        if (getColumnProp(column, 'expander')) {
            toggler = createToggler(column);
            checkbox = createCheckbox(column);
        }

        return (
            <TreeTableBodyCell
                hostName={props.hostName}
                key={`${getColumnProp(column, 'columnKey') || getColumnProp(column, 'field')}_${index}`}
                {...ColumnBase.getCProps(column)}
                index={index}
                column={column}
                selectOnEdit={props.selectOnEdit}
                selected={isSelected()}
                node={props.node}
                rowData={props.node && props.node.data}
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
                        hostName={props.hostName}
                        key={`${childNode.key || JSON.stringify(childNode.data)}_${index}`}
                        level={props.level + 1}
                        rowIndex={props.rowIndex + '_' + index}
                        node={childNode}
                        originalOptions={props.originalOptions}
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
    let rowClassName = null;

    if (props.rowClassName) {
        rowClassName = props.rowClassName(props.node);
    }

    const rowProps = mergeProps(
        {
            tabIndex: 0,
            className: classNames(cx('row', { isSelected, rowProps: props })),
            'aria-expanded': expanded,
            'aria-level': props.level + 1,
            'aria-posinset': props.ariaPosInSet,
            'aria-setsize': props.ariaSetSize,
            'aria-checked': isChecked(),
            'aria-selected': isSelected(),
            style: props.node.style,
            onClick: (e) => onClick(e),
            onTouchEnd: (e) => onTouchEnd(e),
            onContextMenu: (e) => onRightClick(e),
            onKeyDown: (e) => onKeyDown(e),
            onMouseEnter: (e) => onMouseEnter(e),
            onMouseLeave: (e) => onMouseLeave(e),
            'data-p-highlight': isSelected()
        },
        getRowPTOptions('row'),
        {
            className: classNames(rowClassName, props.node.className) // #5983 must be last so all unstyled merging takes place first
        }
    );

    return (
        <>
            <tr ref={elementRef} {...rowProps}>
                {cells}
            </tr>
            {children}
        </>
    );
});

TreeTableRow.displayName = 'TreeTableRow';
