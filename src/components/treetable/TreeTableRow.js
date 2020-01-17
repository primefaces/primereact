import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import DomHandler from '../utils/DomHandler';
import { TreeTableBodyCell } from './TreeTableBodyCell';

export class TreeTableRow extends Component {

    static defaultProps = {
        node: null,
        level: null,
        columns: null,
        expandedKeys: null,
        contextMenuSelectionKey: null,
        selectionMode: null,
        selectionKeys: null,
        metaKeySelection: true,
        propagateSelectionUp: true,
        propagateSelectionDown: true,
        rowClassName: null,
        onExpand: null,
        onCollapse: null,
        onToggle: null,
        onRowClick: null,
        onSelect: null,
        onUnselect: null,
        onSelectionChange: null,
        onPropagateUp: null,
        onContextMenuSelectionChange: null,
        onContextMenu: null
    }

    static propTypes = {
        node: PropTypes.any,
        level: PropTypes.number,
        columns: PropTypes.array,
        expandedKeys: PropTypes.object,
        contextMenuSelectionKey: PropTypes.any,
        selectionMode: PropTypes.string,
        selectionKeys: PropTypes.any,
        metaKeySelection: PropTypes.bool,
        propagateSelectionUp: PropTypes.bool,
        propagateSelectionDown: PropTypes.bool,
        rowClassName: PropTypes.func,
        onExpand: PropTypes.func,
        onCollapse: PropTypes.func,
        onToggle: PropTypes.func,
        onRowClick: PropTypes.func,
        onSelect: PropTypes.func,
        onUnselect: PropTypes.func,
        onSelectionChange: PropTypes.func,
        onPropagateUp: PropTypes.func,
        onContextMenuSelectionChange: PropTypes.func,
        onContextMenu: PropTypes.func,
    }

    constructor(props) {
        super(props);

        this.onTogglerClick = this.onTogglerClick.bind(this);
        this.onClick = this.onClick.bind(this);
        this.onTouchEnd = this.onTouchEnd.bind(this);
        this.propagateUp = this.propagateUp.bind(this);
        this.onCheckboxChange = this.onCheckboxChange.bind(this);
        this.onCheckboxFocus = this.onCheckboxFocus.bind(this);
        this.onCheckboxBlur = this.onCheckboxBlur.bind(this);
        this.onRightClick = this.onRightClick.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
    }

    isLeaf() {
        return this.props.node.leaf === false ? false : !(this.props.node.children && this.props.node.children.length);
    }

    onTogglerClick(event) {
        if (this.isExpanded())
            this.collapse(event);
        else
            this.expand(event);

        event.preventDefault();
    }

    expand(event) {
        let expandedKeys = this.props.expandedKeys ? {...this.props.expandedKeys} : {};
        expandedKeys[this.props.node.key] = true;

        this.props.onToggle({
            originalEvent: event,
            value: expandedKeys
        });

        this.invokeToggleEvents(event, true);
    }

    collapse(event) {
        let expandedKeys = {...this.props.expandedKeys};
        delete expandedKeys[this.props.node.key];

        this.props.onToggle({
            originalEvent: event,
            value: expandedKeys
        });

        this.invokeToggleEvents(event, false);
    }

    invokeToggleEvents(event, expanded) {
        if (expanded) {
            if (this.props.onExpand) {
                this.props.onExpand({
                    originalEvent: event,
                    node: this.props.node
                });
            }
        }
        else {
            if (this.props.onCollapse) {
                this.props.onCollapse({
                    originalEvent: event,
                    node: this.props.node
                });
            }
        }
    }

    onClick(event) {
        if (this.props.onRowClick) {
            this.props.onRowClick({
                originalEvent: event,
                node: this.props.node
            });
        }

        let targetNode = event.target.nodeName;
        if (targetNode === 'INPUT' || targetNode === 'BUTTON' || targetNode === 'A' || DomHandler.hasClass(event.target, 'p-clickable')
            || DomHandler.hasClass(event.target, 'p-treetable-toggler') || DomHandler.hasClass(event.target.parentElement, 'p-treetable-toggler')) {
            return;
        }

        if ((this.isSingleSelectionMode() || this.isMultipleSelectionMode()) && this.props.node.selectable !== false) {
            let selectionKeys;
            const selected = this.isSelected();
            const metaSelection = this.nodeTouched ? false : this.props.metaKeySelection;

            if (metaSelection) {
                let metaKey = (event.metaKey||event.ctrlKey);

                if (selected && metaKey) {
                    if (this.isSingleSelectionMode()) {
                        selectionKeys = null;
                    }
                    else {
                        selectionKeys = {...this.props.selectionKeys};
                        delete selectionKeys[this.props.node.key];
                    }

                    if (this.props.onUnselect) {
                        this.props.onUnselect({
                            originalEvent: event,
                            node: this.props.node
                        });
                    }
                }
                else {
                    if (this.isSingleSelectionMode()) {
                        selectionKeys = this.props.node.key;
                    }
                    else if (this.isMultipleSelectionMode()) {
                        selectionKeys = !metaKey ? {} : (this.props.selectionKeys ? {...this.props.selectionKeys} : {});
                        selectionKeys[this.props.node.key] = true;
                    }

                    if (this.props.onSelect) {
                        this.props.onSelect({
                            originalEvent: event,
                            node: this.props.node
                        });
                    }
                }
            }
            else {
                if (this.isSingleSelectionMode()) {
                    if (selected) {
                        selectionKeys = null;

                        if (this.props.onUnselect) {
                            this.props.onUnselect({
                                originalEvent: event,
                                node: this.props.node
                            });
                        }
                    }
                    else {
                        selectionKeys = this.props.node.key;

                        if (this.props.onSelect) {
                            this.props.onSelect({
                                originalEvent: event,
                                node: this.props.node
                            });
                        }
                    }
                }
                else {
                    if (selected) {
                        selectionKeys = {...this.props.selectionKeys};
                        delete selectionKeys[this.props.node.key];

                        if (this.props.onUnselect) {
                            this.props.onUnselect({
                                originalEvent: event,
                                node: this.props.node
                            });
                        }
                    }
                    else {
                        selectionKeys = this.props.selectionKeys ? {...this.props.selectionKeys} : {};
                        selectionKeys[this.props.node.key] = true;

                        if (this.props.onSelect) {
                            this.props.onSelect({
                                originalEvent: event,
                                node: this.props.node
                            });
                        }
                    }
                }
            }

            if (this.props.onSelectionChange) {
                this.props.onSelectionChange({
                    originalEvent: event,
                    value: selectionKeys
                })
            }
        }

        this.nodeTouched = false;
    }

    onTouchEnd() {
        this.nodeTouched = true;
    }

    onCheckboxChange(event) {
        const checked = this.isChecked();
        let selectionKeys = this.props.selectionKeys ? {...this.props.selectionKeys} : {};

        if (checked) {
            if (this.props.propagateSelectionDown)
                this.propagateDown(this.props.node, false, selectionKeys);
            else
                delete selectionKeys[this.props.node.key];

            if (this.props.propagateSelectionUp && this.props.onPropagateUp) {
                this.props.onPropagateUp({
                    originalEvent: event,
                    check: false,
                    selectionKeys: selectionKeys
                });
            }

            if (this.props.onUnselect) {
                this.props.onUnselect({
                    originalEvent: event,
                    node: this.props.node
                });
            }
        }
        else {
            if (this.props.propagateSelectionDown)
                this.propagateDown(this.props.node, true, selectionKeys);
            else
                selectionKeys[this.props.node.key] = {checked: true};

                if (this.props.propagateSelectionUp && this.props.onPropagateUp) {
                    this.props.onPropagateUp({
                        originalEvent: event,
                        check: true,
                        selectionKeys: selectionKeys
                    });
                }

            if (this.props.onSelect) {
                this.props.onSelect({
                    originalEvent: event,
                    node: this.props.node
                });
            }
        }

        if (this.props.onSelectionChange) {
            this.props.onSelectionChange({
                originalEvent: event,
                value: selectionKeys
            })
        }

        DomHandler.clearSelection();
    }

    onCheckboxFocus() {
        DomHandler.addClass(this.checkboxBox, 'p-focus');
    }

    onCheckboxBlur() {
        DomHandler.removeClass(this.checkboxBox, 'p-focus');
    }

    propagateUp(event) {
        let check = event.check;
        let selectionKeys = event.selectionKeys;
        let checkedChildCount = 0;
        let childPartialSelected = false;

        for(let child of this.props.node.children) {
            if(selectionKeys[child.key] && selectionKeys[child.key].checked)
                checkedChildCount++;
            else if(selectionKeys[child.key] && selectionKeys[child.key].partialChecked)
                childPartialSelected = true;
        }

        if(check && checkedChildCount === this.props.node.children.length) {
            selectionKeys[this.props.node.key] = {checked: true, partialChecked: false};
        }
        else {
            if (!check) {
                delete selectionKeys[this.props.node.key];
            }

            if(childPartialSelected || (checkedChildCount > 0 && checkedChildCount !== this.props.node.children.length))
                selectionKeys[this.props.node.key] = {checked: false, partialChecked: true};
            else
                selectionKeys[this.props.node.key] = {checked: false, partialChecked: false};
        }

        if (this.props.propagateSelectionUp && this.props.onPropagateUp) {
            this.props.onPropagateUp(event);
        }
    }

    propagateDown(node, check, selectionKeys) {
        if(check)
            selectionKeys[node.key] = {checked: true, partialChecked: false};
        else
            delete selectionKeys[node.key];

        if (node.children && node.children.length) {
            for (let i = 0; i < node.children.length; i++) {
                this.propagateDown(node.children[i], check, selectionKeys);
            }
        }
    }

    onRightClick(event) {
        DomHandler.clearSelection();

        if (this.props.onContextMenuSelectionChange) {
            this.props.onContextMenuSelectionChange({
                originalEvent: event,
                value: this.props.node.key
            });
        }

        if (this.props.onContextMenu) {
            this.props.onContextMenu({
                originalEvent: event,
                node: this.props.node
            });
        }
    }

    onKeyDown(event) {
        if (event.target === this.container) {
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
                    if (!this.isExpanded()) {
                        this.expand(event);
                    }

                    event.preventDefault();
                break;

                //left arrow
                case 37:
                    if (this.isExpanded()) {
                        this.collapse(event);
                    }

                    event.preventDefault();
                break;

                //enter
                case 13:
                    this.onClick(event);
                    event.preventDefault();
                break;

                default:
                    //no op
                break;
            }
        }
    }

    isSingleSelectionMode() {
        return this.props.selectionMode && this.props.selectionMode === 'single';
    }

    isMultipleSelectionMode() {
        return this.props.selectionMode && this.props.selectionMode === 'multiple';
    }

    isExpanded() {
        return this.props.expandedKeys ? this.props.expandedKeys[this.props.node.key] !== undefined : false;
    }

    isSelected() {
        if ((this.props.selectionMode === 'single' || this.props.selectionMode === 'multiple') && this.props.selectionKeys)
            return (this.props.selectionMode === 'single') ? this.props.selectionKeys === this.props.node.key : this.props.selectionKeys[this.props.node.key] !== undefined;
        else
            return false;
    }

    isChecked() {
        return this.props.selectionKeys ? this.props.selectionKeys[this.props.node.key] && this.props.selectionKeys[this.props.node.key].checked: false;
    }

    isPartialChecked() {
        return this.props.selectionKeys ? this.props.selectionKeys[this.props.node.key] && this.props.selectionKeys[this.props.node.key].partialChecked: false;
    }

    renderToggler() {
        const expanded = this.isExpanded();
        const iconClassName = classNames('"p-treetable-toggler-icon pi pi-fw', {'pi-chevron-right': !expanded, 'pi-chevron-down': expanded});
        const style = {marginLeft: this.props.level * 16 + 'px', visibility: (this.props.node.leaf === false || (this.props.node.children && this.props.node.children.length)) ? 'visible' : 'hidden'};

        return (
            <span className="p-treetable-toggler p-unselectable-text" onClick={this.onTogglerClick} style={style}>
                <i className={iconClassName} ></i>
            </span>
        );
    }

    renderCheckbox() {
        if (this.props.selectionMode === 'checkbox' && this.props.node.selectable !== false) {
            const checked = this.isChecked();
            const partialChecked = this.isPartialChecked();
            const className = classNames('p-checkbox-box', {'p-highlight': checked});
            const icon = classNames('p-checkbox-icon p-c', {'pi pi-check': checked, 'pi pi-minus': partialChecked});

            return (
                <div className="p-checkbox p-treetable-checkbox p-component" onClick={this.onCheckboxChange} role="checkbox" aria-checked={checked}>
                    <div className="p-hidden-accessible">
                        <input type="checkbox" onFocus={this.onCheckboxFocus} onBlur={this.onCheckboxBlur} />
                    </div>
                    <div className={className} ref={el => this.checkboxBox = el}>
                        <span className={icon}></span>
                    </div>
                </div>
            )
        }
        else {
            return null;
        }
    }

    renderCell(column) {
        let toggler, checkbox;

        if (column.props.expander) {
            toggler = this.renderToggler();
            checkbox = this.renderCheckbox();
        }

        return (
            <TreeTableBodyCell key={column.props.columnKey||column.props.field} {...column.props} node={this.props.node}>
                {toggler}
                {checkbox}
            </TreeTableBodyCell>
        );
    }

    renderChildren() {
        if (this.isExpanded() && this.props.node.children) {
            return this.props.node.children.map(childNode => {
                return (
                    <TreeTableRow key={childNode.key||JSON.stringify(childNode.data)} level={this.props.level + 1}
                        node={childNode} columns={this.props.columns} expandedKeys={this.props.expandedKeys}
                        onToggle={this.props.onToggle} onExpand={this.props.onExpand} onCollapse={this.props.onCollapse}
                        selectionMode={this.props.selectionMode} selectionKeys={this.props.selectionKeys} onSelectionChange={this.props.onSelectionChange}
                        metaKeySelection={this.props.metaKeySelection} onRowClick={this.props.onRowClick} onSelect={this.props.onSelect} onUnselect={this.props.onUnselect}
                        propagateSelectionUp={this.props.propagateSelectionUp} propagateSelectionDown={this.props.propagateSelectionDown} onPropagateUp={this.propagateUp}
                        rowClassName={this.props.rowClassName}
                        contextMenuSelectionKey={this.props.contextMenuSelectionKey} onContextMenuSelectionChange={this.props.onContextMenuSelectionChange} onContextMenu={this.props.onContextMenu} />
                );
            });
        }
        else {
            return null;
        }
    }

    render() {
        const cells = this.props.columns.map(col => this.renderCell(col));
        const children =  this.renderChildren();
        let className = {
            'p-highlight': this.isSelected(),
            'p-highlight-contextmenu': (this.props.contextMenuSelectionKey && this.props.contextMenuSelectionKey === this.props.node.key)
        };

        if (this.props.rowClassName) {
            let rowClassName = this.props.rowClassName(this.props.node);
            className = {...className, ...rowClassName};
        }

        className = classNames(className, this.props.node.className);

        return (
            <React.Fragment>
                <tr ref={el => this.container = el} tabIndex="0" className={className} style={this.props.node.style} onClick={this.onClick} onTouchEnd={this.onTouchEnd} onContextMenu={this.onRightClick} onKeyDown={this.onKeyDown}>{cells}</tr>
                {children}
            </React.Fragment>
        );
    }
}
