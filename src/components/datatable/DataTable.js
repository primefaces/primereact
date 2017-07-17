import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {Paginator} from '../paginator/Paginator';
import {Column} from '../column/Column';
import {TableHeader} from './TableHeader';
import {TableBody} from './TableBody';
import {TableFooter} from './TableFooter';
import ObjectUtils from '../utils/ObjectUtils';

export class DataTable extends Component {

    static defaultProps = {
        value: null,
        header: null,
        footer: null,
        style: null,
        className: null,
        tableStyle: null,
        tableClassName: null,
        paginator: false,
        paginatorPosition: 'bottom',
        alwaysShowPaginator: true,
        first: 0,
        rows: 0,
        totalRecords: 0,
        lazy: false,
        sortField: null,
        sortOrder: 1,
        multiSortMeta: null,
        sortMode: 'single',
        selectionMode: null,
        selection: null,
        onSelectionChange: null,
        compareSelectionBy: 'deepEquals',
        dataKey: null,
        metaKeySelection: true,
        headerColumnGroup: null,
        footerColumnGroup: null,
        onSort: null,
        onPage: null,
        onLazyLoad: null,
        onRowClick: null,
        onRowSelect: null,
        onRowUnselect: null
    }

    static propTypes = {
        value: PropTypes.array,
        header: PropTypes.any,
        footer: PropTypes.any,
        style: PropTypes.object,
        className: PropTypes.string,
        tableStyle: PropTypes.any,
        tableClassName: PropTypes.string,
        paginator: PropTypes.bool,
        paginatorPosition: PropTypes.string,
        alwaysShowPaginator: PropTypes.bool,
        first: PropTypes.number,
        rows: PropTypes.number,
        totalRecords: PropTypes.number,
        lazy: PropTypes.bool,
        sortField: PropTypes.string,
        sortOrder: PropTypes.number,
        multiSortMeta: PropTypes.array,
        sortMode: PropTypes.string,
        selectionMode: PropTypes.string,
        selection: PropTypes.any,
        onSelectionChange: PropTypes.func,
        compareSelectionBy: PropTypes.string,
        dataKey: PropTypes.string,
        metaKeySelection: PropTypes.bool,
        headerColumnGroup: PropTypes.object,
        footerColumnGroup: PropTypes.object,
        onSort: PropTypes.func,
        onPage: PropTypes.func,
        onLazyLoad: PropTypes.func,
        onRowClick: PropTypes.func,
        onRowSelect: PropTypes.func,
        onRowUnselect: PropTypes.func
    };

    constructor(props) {
        super(props);
        this.state = {
            first: props.first,
            rows: props.rows,
            sortField: props.sortField,
            sortOrder: props.sortOrder,
            multiSortMeta: props.multiSortMeta
        };
        this.onPageChange = this.onPageChange.bind(this);
        this.onSort = this.onSort.bind(this);
    }

    onPageChange(event) {
        this.setState({first: event.first, rows: event.rows});

        if(this.props.lazy) {
            this.props.onLazyLoad({
                first: event.first,
                rows: event.rows,
                sortField: this.state.sortField,
                sortOrder: this.state.sortOrder
            });
        }

        if(this.props.onPage) {
            this.props.onPage(event);
        }
    }

    getTotalRecords() {
        return this.props.value ? this.props.lazy ? this.props.totalRecords : this.props.value.length : 0;
    }

    createPaginator(position) {
        let className = 'ui-paginator-' + position;

        return <Paginator first={this.state.first} rows={this.state.rows} className={className}
                    totalRecords={this.getTotalRecords()} onPageChange={this.onPageChange} />;
    }

    onSort(event) {
        let sortField = event.sortField;
        let sortOrder = (this.state.sortField === event.sortField) ? this.state.sortOrder * -1 : 1;
        let multiSortMeta;

        if(this.props.sortMode === 'multiple') {
            let metaKey = event.originalEvent.metaKey||event.originalEvent.ctrlKey;
            multiSortMeta = this.state.multiSortMeta;
            if(!multiSortMeta || !metaKey) {
                multiSortMeta = [];
            }

            this.addSortMeta({field: sortField, order: sortOrder}, multiSortMeta);
        }

        this.setState({
            sortField: sortField,
            sortOrder: sortOrder,
            first: 0,
            multiSortMeta: multiSortMeta
        });

        if(this.props.lazy) {
            this.props.onLazyLoad({
                first: this.state.first,
                rows: this.state.rows,
                sortField: sortField,
                sortOrder: sortOrder,
                multiSortMeta: multiSortMeta
            });
        }

        if(this.props.onSort) {
            this.props.onSort({
                sortField: sortField,
                sortOrder: sortOrder
            });
        }
    }

    addSortMeta(meta, multiSortMeta) {
        let index = -1;
        for(let i = 0; i < multiSortMeta.length; i++) {
            if(multiSortMeta[i].field === meta.field) {
                index = i;
                break;
            }
        }

        if(index >= 0)
            multiSortMeta[index] = meta;
        else
            multiSortMeta.push(meta);
    }

    sortSingle(data) {
        let value = [...data];
        value.sort((data1, data2) => {
                let value1 = ObjectUtils.resolveFieldData(data1, this.state.sortField);
                let value2 = ObjectUtils.resolveFieldData(data2, this.state.sortField);
                let result = null;

                if (value1 == null && value2 != null)
                    result = -1;
                else if (value1 != null && value2 == null)
                    result = 1;
                else if (value1 == null && value2 == null)
                    result = 0;
                else if (typeof value1 === 'string' && typeof value2 === 'string')
                    result = value1.localeCompare(value2);
                else
                    result = (value1 < value2) ? -1 : (value1 > value2) ? 1 : 0;

                return (this.state.sortOrder * result);
            });

        return value;
    }

    sortMultiple(data) {
         let value = [...data];
         value.sort((data1, data2) => {
            return this.multisortField(data1, data2, this.state.multiSortMeta, 0);
         });

         return value;
    }

    multisortField(data1, data2, multiSortMeta, index) {
        let value1 = ObjectUtils.resolveFieldData(data1, this.state.multiSortMeta[index].field);
        let value2 = ObjectUtils.resolveFieldData(data2, this.state.multiSortMeta[index].field);
        let result = null;

        if (typeof value1 === 'string' || value1 instanceof String) {
            if (value1.localeCompare && (value1 !== value2)) {
                return (this.state.multiSortMeta[index].order * value1.localeCompare(value2));
            }
        }
        else {
            result = (value1 < value2) ? -1 : 1;
        }

        if(value1 === value2)  {
            return (this.state.multiSortMeta.length - 1) > (index) ? (this.multisortField(data1, data2, this.state.multiSortMeta, index + 1)) : 0;
        }

        return (this.state.multiSortMeta[index].order * result);
    }

    processData() {
        let data = this.props.value;
        if(!this.props.lazy) {
            if(this.state.sortField || this.state.multiSortMeta) {
                if(this.props.sortMode === 'single')
                    data = this.sortSingle(data);
                else if(this.props.sortMode === 'multiple')
                    data = this.sortMultiple(data);
            }
        }

        return data;
    }

    shouldComponentUpdate(nextProps, nextState) {
        if(this.props.lazy && nextProps.value === this.props.value)
            return false;
        else
            return true;
    }

    componentDidMount() {
        if(this.props.lazy) {
            this.props.onLazyLoad({
                first: this.props.first,
                rows: this.props.rows,
                sortField: this.props.sortField,
                sortOrder: this.props.sortOrder,
                multiSortMeta: this.props.multiSortField
            });
        }
    }

    render() {
        let value = this.processData();
        let className = classNames('ui-datatable ui-widget', this.props.className);
        let paginatorTop = this.props.paginator && this.props.paginatorPosition !== 'bottom' && this.createPaginator('top');
        let paginatorBottom = this.props.paginator && this.props.paginatorPosition !== 'top' && this.createPaginator('bottom');
        let headerFacet = this.props.header && <div className="ui-datatable-header ui-widget-header">{this.props.header}</div>;
        let footerFacet = this.props.footer && <div className="ui-datatable-footer ui-widget-header">{this.props.footer}</div>;

        return (
            <div className={className} style={this.props.style}>
                {headerFacet}
                {paginatorTop}
                <div className="ui-datatable-tablewrapper">
                    <table style={this.props.tableStyle} className={this.props.tableClassName}>
                        <TableHeader onSort={this.onSort} sortField={this.state.sortField} sortOrder={this.state.sortOrder} multiSortMeta={this.state.multiSortMeta} columnGroup={this.props.headerColumnGroup}>{this.props.children}</TableHeader>
                        <TableFooter columnGroup={this.props.footerColumnGroup}>{this.props.children}</TableFooter>
                        <TableBody value={value} first={this.state.first} rows={this.state.rows} lazy={this.props.lazy} 
                                selectionMode={this.props.selectionMode} selection={this.props.selection} metaKeySelection={this.props.metaKeySelection}
                                onSelectionChange={this.props.onSelectionChange} onRowClick={this.props.onRowClick} onRowSelect={this.props.onRowSelect} onRowUnselect={this.props.onRowUnselect}>{this.props.children}</TableBody>
                    </table>
                </div>
                {paginatorBottom}
                {footerFacet}
            </div>
        );
    }
}