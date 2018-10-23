import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ObjectUtils from '../utils/ObjectUtils';
import { Paginator } from '../paginator/Paginator';
import { TreeTableHeader } from './TreeTableHeader'; 
import { TreeTableBody } from './TreeTableBody'; 
import { TreeTableFooter } from './TreeTableFooter'; 

export class TreeTable extends Component {
    
    static defaultProps = {
        id: null,
        value: null,
        style: null,
        className: null,
        tableStyle: null,
        tableClassName: null,
        expandedKeys: null,
        paginator: false,
        paginatorPosition: 'bottom',
        alwaysShowPaginator: true,
        paginatorTemplate: 'FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown',
        paginatorLeft:null,
        paginatorRight: null,
        pageLinkSize: 5,
        rowsPerPageOptions: null,
        first: null,
        rows: null,
        totalRecords: null,
        lazy: false,
        sortField: null,
        sortOrder: null,
        multiSortMeta: null,
        sortMode: 'single',
        sortFunction: null,
        defaultSortOrder: 1,
        selectionMode: null,
        selectionKeys: null,
        metaKeySelection: true,
        propagateSelectionUp: true,
        propagateSelectionDown: true,
        loading: false,
        loadingIcon: 'pi pi-spinner',
        scrollable: false,
        virtualScroll: false,
        reorderableColumns: false,
        headerColumnGroup: null,
        footerColumnGroup: null,
        onExpand: null,
        onCollapse: null,
        onToggle: null,
        onPage: null,
        onSort: null,
        onSelect: null,
        onUnselect: null,
        onRowClick: null,
        onSelectionChange: null
    }

    static propsTypes = {
        id: PropTypes.string,
        value: PropTypes.any.isRequired,
        style: PropTypes.object,
        className: PropTypes.string,
        tableStyle: PropTypes.any,
        tableClassName: PropTypes.string,
        expandedKeys: PropTypes.object,
        paginator: PropTypes.bool,
        paginatorPosition: PropTypes.string,
        alwaysShowPaginator: PropTypes.bool,
        paginatorTemplate: PropTypes.string,
        paginatorLeft: PropTypes.any,
        paginatorRight: PropTypes.any,
        pageLinkSize: PropTypes.number,
        rowsPerPageOptions: PropTypes.array,
        first: PropTypes.number,
        rows: PropTypes.number,
        totalRecords: PropTypes.number,
        lazy: PropTypes.bool,
        sortField: PropTypes.string,
        sortOrder: PropTypes.number,
        multiSortMeta: PropTypes.array,
        sortMode: PropTypes.string,
        sortFunction: PropTypes.func,
        defaultSortOrder: PropTypes.number,
        selectionMode: PropTypes.string,
        selectionKeys: PropTypes.array,
        metaKeySelection: PropTypes.bool,
        propagateSelectionUp: PropTypes.bool,
        propagateSelectionDown: PropTypes.bool,
        loading: PropTypes.bool,
        loadingIcon: PropTypes.string,
        scrollable: PropTypes.bool,
        virtualScroll: PropTypes.bool,
        reorderableColumns: PropTypes.bool,
        headerColumnGroup: PropTypes.element,
        footerColumnGroup: PropTypes.element,
        onExpand: PropTypes.func,
        onCollapse: PropTypes.func,
        onToggle: PropTypes.func,
        onPage: PropTypes.func,
        onSort: PropTypes.func,
        onSelect: PropTypes.func,
        onUnselect: PropTypes.func,
        onRowClick: PropTypes.func,
        onSelectionChange: PropTypes.func
    }

    constructor(props) {
        super(props);
        let state = {};

        if (!this.props.onPage) {
            state.first = props.first;
            state.rows = props.rows;
        }

        if (!this.props.onSort) {
            state.sortField = props.sortField;
            state.sortOrder = props.sortOrder;
            state.multiSortMeta = props.multiSortMeta;
        }

        if (Object.keys(state).length) {
            this.state = state;
        }

        this.onPageChange = this.onPageChange.bind(this);
        this.onSort = this.onSort.bind(this);
    }

    onPageChange(event) {
        if (this.props.onPage)
            this.props.onPage(event);
        else
            this.setState({first: event.first, rows: event.rows});
    }

    onSort(event) {
        let sortField = event.sortField;
        let sortOrder = (this.getSortField() === event.sortField) ? this.getSortOrder() * -1 : this.props.defaultSortOrder;
        let multiSortMeta;

        this.columnSortable = event.sortable;
        this.columnSortFunction = event.sortFunction;

        if (this.props.sortMode === 'multiple') {
            let metaKey = event.originalEvent.metaKey || event.originalEvent.ctrlKey;
            multiSortMeta = this.getMultiSortMeta();
            if (!multiSortMeta || !metaKey) {
                multiSortMeta = [];
            }

            multiSortMeta = this.addSortMeta({field: sortField, order: sortOrder}, multiSortMeta);
        }
        
        if (this.props.onSort) {
            this.props.onSort({
                sortField: sortField,
                sortOrder: sortOrder,
                multiSortMeta: multiSortMeta
            });
        }
        else {
            this.setState({
                sortField: sortField,
                sortOrder: sortOrder,
                first: 0,
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

        let value = [...multiSortMeta];
        if(index >= 0)
            value[index] = meta;
        else
            value.push(meta);

        return value;
    }

    sortSingle(data) {
        return this.sortNodes(data);
    }

    sortNodes(data) {
        let value = [...data];

        if(this.columnSortable && this.columnSortable === 'custom' && this.columnSortFunction) {
            value = this.columnSortFunction({
                field: this.getSortField(),
                order: this.getSortOrder()
            });
        }
        else {
            value.sort((node1, node2) => {
                const sortField = this.getSortField();
                const value1 = ObjectUtils.resolveFieldData(node1.data, sortField);
                const value2 = ObjectUtils.resolveFieldData(node2.data, sortField);
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

                return (this.getSortOrder() * result);
            });

            for (let i = 0; i < value.length; i++) {
                if (value[i].children && value[i].children.length) {
                    value[i].children = this.sortNodes(value[i].children);
                }
            }
        }

        return value;
    }

    sortMultiple(data) {
        let multiSortMeta = this.getMultiSortMeta();

        if (multiSortMeta) {
            if (this.props.sortFunction) {
                this.props.sortFunction({
                    data: data,
                    mode: this.props.sortMode,
                    multiSortMeta: multiSortMeta
                });
            }
            else {
                return this.sortMultipleNodes(data, multiSortMeta);
            }
        }
        else {
            return data;
        } 
    }

    sortMultipleNodes(data, multiSortMeta) {
        let value = [...data];
        value.sort((node1, node2) => {
            return this.multisortField(node1, node2, multiSortMeta, 0);
        });

        for (let i = 0; i < value.length; i++) {
            if (value[i].children && value[i].children.length) {
                value[i].children = this.sortMultipleNodes(value[i].children, multiSortMeta);
            }
        }

        return value;
    }

    multisortField(node1, node2, multiSortMeta, index) {
        const value1 = ObjectUtils.resolveFieldData(node1.data, multiSortMeta[index].field);
        const value2 = ObjectUtils.resolveFieldData(node2.data, multiSortMeta[index].field);
        let result = null;

        if (value1 == null && value2 != null)
            result = -1;
        else if (value1 != null && value2 == null)
            result = 1;
        else if (value1 == null && value2 == null)
            result = 0;
        else {
            if (value1 === value2)  {
                return (multiSortMeta.length - 1) > (index) ? (this.multisortField(node1, node2, multiSortMeta, index + 1)) : 0;
            }
            else {
                if ((typeof value1 === 'string' || value1 instanceof String) && (typeof value2 === 'string' || value2 instanceof String))
                    return (multiSortMeta[index].order * value1.localeCompare(value2, undefined, { numeric: true }));
                else
                    result = (value1 < value2) ? -1 : 1;
            }            
        }

        return (multiSortMeta[index].order * result);
    }

    getFirst() {
        return this.props.onPage ? this.props.first : this.state.first;
    }

    getRows() {
        return this.props.onPage ? this.props.rows : this.state.rows;
    }

    getSortField() {
        return this.props.onSort ? this.props.sortField : this.state.sortField;
    }

    getSortOrder() {
        return this.props.onSort ? this.props.sortOrder : this.state.sortOrder;
    }

    getMultiSortMeta() {
        return this.props.onSort ? this.props.multiSortMeta : this.state.multiSortMeta;
    }

    getColumns() {
        let columns = React.Children.toArray(this.props.children);
        
        if(this.props.reorderableColumns && this.state.columnOrder) {
            let orderedColumns = [];
            for(let i = 0; i < this.state.columnOrder.length; i++) {
                orderedColumns.push(this.findColumnByKey(columns, this.state.columnOrder[i]));
            }

            return orderedColumns;
        }
        else {
            return columns;
        }
    }

    getTotalRecords(data) {
        return this.props.lazy ? this.props.totalRecords : data ? data.length : 0;
    }

    isSingleSelectionMode() {
        return this.props.selectionMode && this.props.selectionMode === 'single';
    }

    isMultipleSelectionMode() {
        return this.props.selectionMode && this.props.selectionMode === 'multiple';
    }

    isRowSelectionMode() {
        return this.isSingleSelectionMode() || this.isMultipleSelectionMode();
    }

    processValue() {
        let data = this.props.value;

        if (!this.props.lazy) {
            if(data && data.length) {
                if(this.getSortField() || this.getMultiSortMeta()) {
                    if(this.props.sortMode === 'single')
                        data = this.sortSingle(data);
                    else if(this.props.sortMode === 'multiple')
                        data = this.sortMultiple(data);
                }
            }
        }

        return data;
    }

    createPaginator(position, totalRecords) {
        const className = 'p-paginator-' + position;

        return (
            <Paginator first={this.getFirst()} rows={this.getRows()} pageLinkSize={this.props.pageLinkSize} className={className} 
                    onPageChange={this.onPageChange} template={this.props.paginatorTemplate}
                    totalRecords={totalRecords} rowsPerPageOptions={this.props.rowsPerPageOptions} 
                    leftContent={this.props.paginatorLeft} rightContent={this.props.paginatorRight} />
        )
    }

    renderScrollableTable(value) {

    }

    renderRegularTable(value) {
        const columns = this.getColumns();

        return (
            <div className="p-treetable-tablewrapper">
                <table style={this.props.tableStyle} className={this.props.tableClassName}>
                    <TreeTableHeader columns={columns} columnGroup={this.props.headerColumnGroup} 
                        onSort={this.onSort} sortField={this.getSortField()} sortOrder={this.getSortOrder()} multiSortMeta={this.getMultiSortMeta()}/>                
                    <TreeTableFooter columns={columns} columnGroup={this.props.footerColumnGroup} />
                    <TreeTableBody value={value} columns={columns} expandedKeys={this.props.expandedKeys} 
                        onToggle={this.props.onToggle} onExpand={this.props.onExpand} onCollapse={this.props.onCollapse}
                        paginator={this.props.paginator} first={this.getFirst()} rows={this.getRows()} 
                        selectionMode={this.props.selectionMode} selectionKeys={this.props.selectionKeys} onSelectionChange={this.props.onSelectionChange}
                        metaKeySelection={this.props.metaKeySelection} onRowClick={this.props.onRowClick} onSelect={this.props.onSelect} onUnselect={this.props.onUnselect}
                        propagateSelectionUp={this.props.propagateSelectionDown} propagateSelectionDown={this.props.propagateSelectionDown}
                        lazy={this.props.lazy} virtualScroll={this.props.virtualScroll} />
                </table>
            </div>
        );
    }

    renderTable(value) {
        if (this.props.scrollable)
            return this.renderScrollableTable(value);
        else
            return this.renderRegularTable(value);
    }

    renderLoader() {
        if (this.props.loading) {
            const iconClassName = classNames('p-treetable-loading-icon pi-spin', this.props.loadingIcon);
        
            return (
                <div className="p-treetable-loading">
                    <div className="p-treetable-loading-overlay p-component-overlay"></div>
                    <div className="p-treetable-loading-content">
                        <i className={iconClassName}></i>
                    </div>
                </div>
            );
        }
        else {
            return null;
        }
    }

    render() {
        const value = this.processValue();
        const className = classNames('p-treetable p-component', {'p-treetable-hoverable-rows': this.isRowSelectionMode()});
        const table = this.renderTable(value);
        const totalRecords = this.getTotalRecords(value);
        const headerFacet = this.props.header && <div className="p-treetable-header">{this.props.header}</div>;
        const footerFacet = this.props.footer && <div className="p-treetable-footer">{this.props.footer}</div>;
        const paginatorTop = this.props.paginator && this.props.paginatorPosition !== 'bottom' && this.createPaginator('top', totalRecords);
        const paginatorBottom = this.props.paginator && this.props.paginatorPosition !== 'top' && this.createPaginator('bottom', totalRecords);
        const loader = this.renderLoader();

        return (
            <div id={this.props.id} className={className} style={this.props.style}>
                {loader}
                {headerFacet}
                {paginatorTop}
                {table}
                {paginatorBottom}
                {footerFacet}
            </div>
        );
    }
}