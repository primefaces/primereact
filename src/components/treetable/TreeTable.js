import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ObjectUtils from '../utils/ObjectUtils';
import {Column} from "../column/Column"

export class UITreeRow extends Component {

    static defaultProps = {
        node: null,
        level: null,
        treeTable: null,
        parentNode: null,
        labelExpand: "Expand",
        labelCollapse: "Collapse"
    }

    static propsTypes = {
        node: PropTypes.any,
        level: PropTypes.any,
        treeTable: PropTypes.any,
        parentNode: PropTypes.any,
        labelExpand: PropTypes.string,
        labelCollapse: PropTypes.string
    }

    constructor(props) {
        super(props);
        this.node = this.props.node;
        this.node.parent = this.props.parentNode;
        this.treeTable = this.props.treeTable;
        this.state = { expanded: this.node.expanded };
    }

    toggle(event) {
        if (this.state.expanded && this.treeTable.props.onNodeCollapse)
            this.treeTable.props.onNodeCollapse({ originalEvent: event, node: this.node });
        else if (this.treeTable.props.onNodeExpand)
            this.treeTable.props.onNodeExpand({ originalEvent: event, node: this.node });

        this.setState({ expanded: !this.state.expanded });

        event.preventDefault();
    }

    isLeaf() {
        return this.node.leaf === false ? false : !(this.node.children && this.node.children.length);
    }

    isSelected() {
        return this.treeTable.isSelected(this.node);
    }

    onRowClick(event) {
        this.treeTable.onRowClick(event, this.node);
    }

    onRowTouchEnd() {
        this.treeTable.onRowTouchEnd();
    }

    resolveFieldData(data, field) {
        if (data && field) {
            if (field.indexOf('.') === -1) {
                return data[field];
            }
            else {
                var fields = field.split('.');
                var value = data;
                for (var i = 0, len = fields.length; i < len; ++i) {
                    value = value[fields[i]];
                }
                return value;
            }
        }
        else {
            return null;
        }
    }

    render() {
        var tableRowClass = classNames('ui-treetable-row', {
            'ui-state-highlight': this.isSelected(),
            'ui-treetable-row-selectable': this.treeTable.props.selectionMode && this.node.selectable !== false
        });

        var childTbody = this.node.children && this.node.children.map((childNode, index) => {
            return (<UITreeRow key={index} node={childNode} index={index} level={this.props.level + 1} labelExpand={this.props.labelExpand} labelCollapse={this.props.labelCollapse} treeTable={this.treeTable} parentNode={this.node} />)
        });

        return (
            <tbody>
                <tr className={tableRowClass}>
                    {
                        this.treeTable.columns && this.treeTable.columns.map((col, i) => {
                            var toggler = null,
                                checkbox = null;

                            if (i === 0) {
                                var togglerClass = classNames('ui-treetable-toggler fa fa-fw ui-c', {
                                    'fa-caret-down': this.state.expanded,
                                    'fa-caret-right': !this.state.expanded
                                }),
                                    togglerStyle = { 'marginLeft': this.props.level * 16 + 'px', 'visibility': this.isLeaf() ? 'hidden' : 'visible' };

                                toggler = (<a className={togglerClass} style={togglerStyle} onClick={this.toggle.bind(this)} title={this.state.expanded ? this.props.labelCollapse : this.props.labelExpand}><span></span></a>);

                                if (this.treeTable.props.selectionMode === 'checkbox') {
                                    var checkboxIconClass = classNames('ui-chkbox-icon ui-c fa', {
                                        'fa-check': this.isSelected(),
                                        'fa-minus': this.node.partialSelected
                                    });

                                    checkbox = (
                                        <div className="ui-chkbox ui-treetable-checkbox">
                                            <div className="ui-chkbox-box ui-widget ui-corner-all ui-state-default">
                                                <span className={checkboxIconClass}></span>
                                            </div>
                                        </div>
                                    );
                                }
                            }

                            var rowData = (<span>{ObjectUtils.resolveFieldData(this.node.data, col.props.field)}</span>);

                            return (
                                <td key={'col_' + i} style={col.props.style} className={col.props.className} onClick={this.onRowClick.bind(this)} onTouchEnd={this.onRowTouchEnd.bind(this)}>
                                    {toggler}
                                    {checkbox}
                                    {rowData}
                                </td>
                            );

                        })
                    }
                </tr>
                {
                    this.node.children && this.state.expanded && (<tr className="ui-treetable-row" style={{ 'display': 'table-row' }}>
                        <td colSpan={this.treeTable.columns.length} className="ui-treetable-child-table-container">
                            <table>
                                {childTbody}
                            </table>
                        </td>
                    </tr>)
                }
            </tbody>
        );
    }
}

export class TreeTable extends Component {
    static defaultProps = {
        id: null,
        value: null,
        labelExpand: "Expand",
        labelCollapse: "Collapse",
        selectionMode: null,
        selection: null,
        selectionChange: null,
        style: null,
        className: null,
        metaKeySelection: true,
        header: '',
        footer: '',
        onNodeSelect: null,
        onNodeUnselect: null,
        onNodeExpand: null,
        onNodeCollapse: null
    }

    static propsTypes = {
        id: PropTypes.string,
        value: PropTypes.any,
        labelExpand: PropTypes.string,
        labelCollapse: PropTypes.string,
        selectionMode: PropTypes.string,
        selection: PropTypes.any,
        selectionChange: PropTypes.func.isRequired,
        style: PropTypes.object,
        className: PropTypes.string,
        metaKeySelection: PropTypes.bool,
        header: PropTypes.string,
        footer: PropTypes.string,
        onNodeSelect: PropTypes.func,
        onNodeUnselect: PropTypes.func,
        onNodeExpand: PropTypes.func,
        onNodeCollapse: PropTypes.func
    }

    onRowClick(event, node) {
        var eventTarget = (event.target);
        if (eventTarget.className && eventTarget.className.indexOf('ui-treetable-toggler') === 0) {
            return;
        }
        else if (this.props.selectionMode) {
            if (node.selectable === false) {
                return;
            }

            var metaSelection = this.rowTouched ? false : this.props.metaKeySelection;
            var index = this.findIndexInSelection(node);
            var selected = (index >= 0);

            if (this.isCheckboxSelectionMode()) {
                if (selected) {
                    this.propagateSelectionDown(node, false);
                    if (node.parent) {
                        this.propagateSelectionUp(node.parent, false);
                    }

                    this.props.selectionChange({
                        originalEvent: event,
                        selection: this.selection
                    });

                    if (this.props.onNodeUnselect) {
                        this.props.onNodeUnselect({
                            originalEvent: event,
                            node: node
                        });
                    }
                }
                else {
                    this.propagateSelectionDown(node, true);
                    if (node.parent) {
                        this.propagateSelectionUp(node.parent, true);
                    }

                    this.props.selectionChange({
                        originalEvent: event,
                        selection: this.selection
                    });

                    if (this.props.onNodeSelect) {
                        this.props.onNodeSelect({
                            originalEvent: event,
                            node: node
                        });
                    }
                }
            }
            else {
                if (metaSelection) {
                    var metaKey = (event.metaKey || event.ctrlKey);

                    if (selected && metaKey) {
                        if (this.isSingleSelectionMode()) {
                            this.selection = null;
                            this.props.selectionChange({
                                originalEvent: event,
                                selection: null
                            });
                        }
                        else {
                            this.selection = this.selection.filter((val, i) => i !== index);
                            this.props.selectionChange({
                                originalEvent: event,
                                selection: this.selection
                            });
                        }

                        if (this.props.onNodeUnselect) {
                            this.props.onNodeUnselect({
                                originalEvent: event,
                                node: node
                            });
                        }
                    }
                    else {
                        if (this.isSingleSelectionMode()) {
                            this.selection = node;
                            this.props.selectionChange({
                                originalEvent: event,
                                selection: node
                            });
                        }
                        else if (this.isMultipleSelectionMode()) {
                            this.selection = (!metaKey) ? [] : this.selection || [];
                            this.selection = [...this.selection, node];
                            this.props.selectionChange({
                                originalEvent: event,
                                selection: this.selection
                            });
                        }

                        if (this.props.onNodeSelect) {
                            this.props.onNodeSelect({
                                originalEvent: event,
                                node: node
                            });
                        }
                    }
                }
                else {
                    if (this.isSingleSelectionMode()) {
                        if (selected) {
                            this.selection = null;
                            if (this.props.onNodeUnselect) {
                                this.props.onNodeUnselect({
                                    originalEvent: event,
                                    node: node
                                });
                            }
                        }
                        else {
                            this.selection = node;
                            if (this.props.onNodeSelect) {
                                this.props.onNodeSelect({
                                    originalEvent: event,
                                    node: node
                                });
                            }
                        }
                    }
                    else {
                        if (selected) {
                            this.selection = this.selection.filter((val, i) => i !== index);
                            if (this.props.onNodeUnselect) {
                                this.props.onNodeUnselect({
                                    originalEvent: event,
                                    node: node
                                });
                            }
                        }
                        else {
                            this.selection = [...this.selection || [], node];
                            if (this.props.onNodeSelect) {
                                this.props.onNodeSelect({
                                    originalEvent: event,
                                    node: node
                                });
                            }
                        }
                    }

                    this.props.selectionChange({
                        originalEvent: event,
                        selection: this.selection
                    });
                }
            }
        }

        this.rowTouched = false;
    }

    onRowTouchEnd() {
        this.rowTouched = true;
    }

    findIndexInSelection(node) {
        var index = -1;

        if (this.props.selectionMode && this.selection) {
            if (this.isSingleSelectionMode()) {
                index = (ObjectUtils.equals(this.selection, node)) ? 0 : - 1;
            }
            else {
                for (var i = 0; i < this.selection.length; i++) {
                    if (ObjectUtils.equals(this.selection[i], node)) {
                        index = i;
                        break;
                    }
                }
            }
        }

        return index;
    }

    propagateSelectionUp(node, select) {
        if (node.children && node.children.length) {
            var selectedCount = 0;
            var childPartialSelected = false;
            for (var child of node.children) {
                if (this.isSelected(child)) {
                    selectedCount++;
                }
                else if (child.partialSelected) {
                    childPartialSelected = true;
                }
            }

            if (select && selectedCount === node.children.length) {
                this.selection = [...this.selection || [], node];
                node.partialSelected = false;
            }
            else {
                if (!select) {
                    var index = this.findIndexInSelection(node);
                    if (index >= 0) {
                        this.selection = this.selection.filter((val, i) => i !== index);
                    }
                }

                if ((childPartialSelected || selectedCount > 0) && selectedCount !== node.children.length)
                    node.partialSelected = true;
                else
                    node.partialSelected = false;
            }
        }

        var parent = node.parent;
        if (parent) {
            this.propagateSelectionUp(parent, select);
        }
    }

    propagateSelectionDown(node, select) {
        var index = this.findIndexInSelection(node);

        if (select && index === -1) {
            this.selection = [...this.selection || [], node];
        }
        else if (!select && index > -1) {
            this.selection = this.selection.filter((val, i) => i !== index);
        }

        node.partialSelected = false;

        if (node.children && node.children.length) {
            for (var child of node.children) {
                this.propagateSelectionDown(child, select);
            }
        }
    }

    isSelected(node) {
        return this.findIndexInSelection(node) !== -1;
    }

    isSingleSelectionMode() {
        return this.props.selectionMode && this.props.selectionMode === 'single';
    }

    isMultipleSelectionMode() {
        return this.props.selectionMode && this.props.selectionMode === 'multiple';
    }

    isCheckboxSelectionMode() {
        return this.props.selectionMode && this.props.selectionMode === 'checkbox';
    }

    hasFooter() {
        if (this.columns) {
            var columnsArr = this.columns;
            for (var i = 0; i < columnsArr.length; i++) {
                if (columnsArr[i].footer) {
                    return true;
                }
            }
        }
        return false;
    }

    render() {
        this.columns = React.Children.map(this.props.children, (element, i) => {
            if (element && element.type === Column)
                return element;
        });

        var treeTableClass = classNames('ui-treetable ui-widget', this.props.className);

        var header =
            this.props.header && <div className="ui-treetable-header ui-widget-header">
                    {this.props.header}
                </div>,
            footer = this.props.footer && <div className="ui-treetable-footer ui-widget-header">
                {this.props.footer}
            </div>;

        var thead = (
            <thead>
                <tr>
                    {
                        this.columns && this.columns.map((col, i) => {
                            var colStyleClass = classNames('ui-state-default ui-unselectable-text', col.props.className);

                            return (<th key={'headerCol_' + i} className={colStyleClass} style={col.props.style}>

                                <span className="ui-column-title">{col.props.header}</span>
                            </th>);
                        })
                    }
                </tr>
            </thead>
        ),
            tfoot = (
                this.hasFooter() && (<tfoot>
                    <tr>
                        {
                            this.columns && this.columns.map((col, i) => {
                                var colStyleClass = classNames('ui-state-default', col.props.className);

                                return (<td key={'footerCol_' + i} className={colStyleClass} style={col.props.style}>
                                    <span className="ui-column-footer">{col.props.footer}</span>
                                </td>);
                            })
                        }
                    </tr>
                </tfoot>)
            ),
            tbody = this.props.value && this.props.value.map((node, index) => {
                return (<UITreeRow key={'row_' + index} node={node} index={index} level={0} labelExpand={this.props.labelExpand} labelCollapse={this.props.labelCollapse} treeTable={this} parentNode={this.props.value} />)
            });

        return (
            <div id={this.props.id} className={treeTableClass} style={this.props.style}>
                {header}
                <div className="ui-treetable-tablewrapper">
                    <table className="ui-widget-content">
                        {thead}
                        {tfoot}
                        {tbody}
                    </table>
                </div>
                {footer}
            </div>);
    }
}