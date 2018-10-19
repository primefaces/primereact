import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
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
        scrollable: false,
        virtualScroll: false,
        reorderableColumns: false,
        headerColumnGroup: null,
        footerColumnGroup: null,
        onExpand: null,
        onCollapse: null,
        onToggle: null,
        onPage: null
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
        scrollable: PropTypes.bool,
        virtualScroll: PropTypes.bool,
        reorderableColumns: PropTypes.bool,
        headerColumnGroup: PropTypes.element,
        footerColumnGroup: PropTypes.element,
        onExpand: PropTypes.func,
        onCollapse: PropTypes.func,
        onToggle: PropTypes.func,
        onPage: PropTypes.func
    }

    constructor(props) {
        super(props);
        let state = {};

        if (!this.props.onPage) {
            state.first = props.first;
            state.rows = props.rows;
        }

        if (Object.keys(state).length) {
            this.state = state;
        }

        this.onPageChange = this.onPageChange.bind(this);
    }

    onPageChange(event) {
        if (this.props.onPage)
            this.props.onPage(event);
        else
            this.setState({first: event.first, rows: event.rows});
    }

    getFirst() {
        return this.props.onPage ? this.props.first : this.state.first;
    }

    getRows() {
        return this.props.onPage ? this.props.rows : this.state.rows;
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

    processValue() {
        let data = this.props.value;
        
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
                    <TreeTableHeader columns={columns} columnGroup={this.props.headerColumnGroup} />                
                    <TreeTableFooter columns={columns} columnGroup={this.props.footerColumnGroup} />
                    <TreeTableBody value={value} columns={columns} expandedKeys={this.props.expandedKeys} 
                        onToggle={this.props.onToggle} onExpand={this.props.onExpand} onCollapse={this.props.onCollapse}
                        paginator={this.props.paginator} first={this.getFirst()} rows={this.getRows()} 
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

    render() {
        const value = this.processValue();
        const className = classNames('p-treetable p-component');
        const table = this.renderTable(value);
        const totalRecords = this.getTotalRecords(value);
        const headerFacet = this.props.header && <div className="p-treetable-header">{this.props.header}</div>;
        const footerFacet = this.props.footer && <div className="p-treetable-footer">{this.props.footer}</div>;
        const paginatorTop = this.props.paginator && this.props.paginatorPosition !== 'bottom' && this.createPaginator('top', totalRecords);
        const paginatorBottom = this.props.paginator && this.props.paginatorPosition !== 'top' && this.createPaginator('bottom', totalRecords);

        return (
            <div id={this.props.id} className={className} style={this.props.style}>
                {headerFacet}
                {paginatorTop}
                {table}
                {paginatorBottom}
                {footerFacet}
            </div>
        );
    }
}