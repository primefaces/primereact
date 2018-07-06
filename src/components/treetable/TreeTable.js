import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { TreeTableHeader } from './TreeTableHeader';
import { TreeTableFooter } from './TreeTableFooter';
import { UITreeRow } from './UITreeRow';
import ObjectUtils from '../utils/ObjectUtils';
import { Column } from "../column/Column"

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
        sortField: null,
        sortOrder: 1,
        multiSortMeta: null,
        sortMode: 'single',
        onSort: null,
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
        sortField: PropTypes.string,
        sortOrder: PropTypes.number,
        multiSortMeta: PropTypes.array,
        sortMode: PropTypes.string,
        onSort: PropTypes.func,
        onNodeSelect: PropTypes.func,
        onNodeUnselect: PropTypes.func,
        onNodeExpand: PropTypes.func,
        onNodeCollapse: PropTypes.func
    }

    constructor(props) {
        super(props);
        this.value = [...this.props.value];

        this.state = {
            sortField: props.sortField,
            sortOrder: props.sortOrder,
            multiSortMeta: props.multiSortMeta
        };

        this.onSort = this.onSort.bind(this);
    }

    onSort(event) {
        let sortField = event.sortField;
        let sortOrder = (this.state.sortField === event.sortField) ? this.state.sortOrder * -1 : 1;
        let multiSortMeta;

        this.columnSortable = event.sortable;
        this.columnSortFunction = event.sortFunction;

        if (this.props.sortMode === 'multiple') {
            let metaKey = event.originalEvent.metaKey || event.originalEvent.ctrlKey;
            multiSortMeta = this.state.multiSortMeta;
            if (!multiSortMeta || !metaKey) {
                multiSortMeta = [];
            }

            this.addSortMeta({ field: sortField, order: sortOrder }, multiSortMeta);
        }

        this.setState({
            sortField: sortField,
            sortOrder: sortOrder,
            multiSortMeta: multiSortMeta
        });

        if (this.props.onSort) {
            this.props.onSort({
                sortField: sortField,
                sortOrder: sortOrder,
                multiSortMeta: multiSortMeta
            });
        }
    }

    addSortMeta(meta, multiSortMeta) {
        let index = -1;
        for (let i = 0; i < multiSortMeta.length; i++) {
            if (multiSortMeta[i].field === meta.field) {
                index = i;
                break;
            }
        }

        if (index >= 0)
            multiSortMeta[index] = meta;
        else
            multiSortMeta.push(meta);
    }

    sortSingle(value) {
        if (this.columnSortable && this.columnSortable === 'custom' && this.columnSortFunction) {
            value = this.columnSortFunction({
                field: this.state.sortField,
                order: this.state.sortOrder
            });
        }
        else {
            value.sort((data1, data2) => {
                let value1 = ObjectUtils.resolveFieldData(data1.data, this.state.sortField);
                let value2 = ObjectUtils.resolveFieldData(data2.data, this.state.sortField);
                let result = null;

                if (value1 == null && value2 != null)
                    result = -1;
                else if (value1 != null && value2 == null)
                    result = 1;
                else if (value1 == null && value2 == null)
                    result = 0;
                else if (typeof value1 === 'string' && typeof value2 === 'string')
                    result = value1.localeCompare(value2, undefined, { numeric: true });
                else
                    result = (value1 < value2) ? -1 : (value1 > value2) ? 1 : 0;

                return (this.state.sortOrder * result);
            });
        }

        for(let i = 0; i < value.length; i++) {
            let child = value[i].children;
            if(child) {
                this.sortSingle(child);
            }
        }

        return value;
    }

    sortMultiple(value) {
        value.sort((data1, data2) => {
            return this.multisortField(data1, data2, this.state.multiSortMeta, 0);
        });

        for(let i = 0; i < value.length; i++) {
            let child = value[i].children;
            if(child) {
                this.sortMultiple(child);
            }
        }

        return value;
    }

    multisortField(data1, data2, multiSortMeta, index) {
        let value1 = ObjectUtils.resolveFieldData(data1.data, this.state.multiSortMeta[index].field);
        let value2 = ObjectUtils.resolveFieldData(data2.data, this.state.multiSortMeta[index].field);
        let result = null;

        if (typeof value1 === 'string' || value1 instanceof String) {
            if (value1.localeCompare && (value1 !== value2)) {
                return (this.state.multiSortMeta[index].order * value1.localeCompare(value2, undefined, { numeric: true }));
            }
        }
        else {
            result = (value1 < value2) ? -1 : 1;
        }

        if (value1 === value2) {
            return (this.state.multiSortMeta.length - 1) > (index) ? (this.multisortField(data1, data2, this.state.multiSortMeta, index + 1)) : 0;
        }

        return (this.state.multiSortMeta[index].order * result);
    }

    onRowClick(event, node) {
        let eventTarget = (event.target);
        if (eventTarget.className && eventTarget.className.indexOf('ui-treetable-toggler') === 0) {
            return;
        }
        else if (this.props.selectionMode) {
            if (node.selectable === false) {
                return;
            }

            let metaSelection = this.rowTouched ? false : this.props.metaKeySelection;
            let index = this.findIndexInSelection(node);
            let selected = (index >= 0);

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
                    let metaKey = (event.metaKey || event.ctrlKey);

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
        let index = -1;

        if (this.props.selectionMode && this.selection) {
            if (this.isSingleSelectionMode()) {
                index = (ObjectUtils.equals(this.selection, node)) ? 0 : - 1;
            }
            else {
                for (let i = 0; i < this.selection.length; i++) {
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
            let selectedCount = 0;
            let childPartialSelected = false;
            for (let child of node.children) {
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
                    let index = this.findIndexInSelection(node);
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

        let parent = node.parent;
        if (parent) {
            this.propagateSelectionUp(parent, select);
        }
    }

    propagateSelectionDown(node, select) {
        let index = this.findIndexInSelection(node);

        if (select && index === -1) {
            this.selection = [...this.selection || [], node];
        }
        else if (!select && index > -1) {
            this.selection = this.selection.filter((val, i) => i !== index);
        }

        node.partialSelected = false;

        if (node.children && node.children.length) {
            for (let child of node.children) {
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
            for (let i = 0; i < this.columns.length; i++) {
                if (this.columns[i].footer) {
                    return true;
                }
            }
        }

        return false;
    }

    processData() {
        let data = this.value;
        if (data && data.length) {
            if (this.state.sortField || this.state.multiSortMeta) {
                if (this.props.sortMode === 'single')
                    data = this.sortSingle(data);
                else if (this.props.sortMode === 'multiple')
                    data = this.sortMultiple(data);
            }
        }

        return data;
    }

    createTreeTableHeader() {
        return <TreeTableHeader columns={this.columns} onSort={this.onSort} sortField={this.state.sortField} sortOrder={this.state.sortOrder} multiSortMeta={this.state.multiSortMeta}></TreeTableHeader>;
    }

    createTreeTableFooter() {
        if (this.hasFooter()) {
            return <TreeTableFooter columns={this.columns}></TreeTableFooter>;
        }
        else {
            return null;
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        let state = {};

        if(this.props.sortOrder !== prevProps.sortOrder && this.props.sortOrder !== prevState.sortOrder) { state = {sortOrder: this.props.sortOrder}; }
        if(this.props.sortField !== prevProps.sortField && this.props.sortField !== prevState.sortField) { state = {...state, ...{sortField: this.props.sortField}}; }
        if(this.props.multiSortMeta !== prevProps.multiSortMeta && this.props.multiSortMeta !== prevState.multiSortMeta) { state = {...state, ...{multiSortMeta: this.props.multiSortMeta}}; }

        if(Object.keys(state).length > 0)
            this.setState(state);
    }

    render() {
        if (this.props.value && !ObjectUtils.equalsByValue(this.props.value, this.value)) { 
            this.value = [...this.props.value]; 
        }

        let value = this.processData();
        this.columns = React.Children.map(this.props.children, (element, i) => {
            if (element && element.type === Column)
                return element;
        });

        let treeTableClass = classNames('ui-treetable ui-widget', this.props.className);

        let headerFacet = this.props.header && <div className="ui-treetable-header ui-widget-header">{this.props.header}</div>,
            footerFacet = this.props.footer && <div className="ui-treetable-footer ui-widget-header">{this.props.footer}</div>;

        let thead = this.createTreeTableHeader(),
            tfoot = this.createTreeTableFooter(),
            tbody = value && value.map((node, index) => {
                return (<UITreeRow key={'row_' + index} node={node} index={index} level={0} labelExpand={this.props.labelExpand} labelCollapse={this.props.labelCollapse} treeTable={this} parentNode={value} />)
            });

        return (
            <div id={this.props.id} className={treeTableClass} style={this.props.style}>
                {headerFacet}
                <div className="ui-treetable-tablewrapper">
                    <table className="ui-widget-content">
                        {thead}
                        {tfoot}
                        {tbody}
                    </table>
                </div>
                {footerFacet}
            </div>);
    }
}