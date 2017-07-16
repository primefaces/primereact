import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {Paginator} from '../paginator/Paginator';
import ObjectUtils from '../utils/ObjectUtils';

class HeaderCell extends Component {

    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick(e) {
        this.props.onSort({
            originalEvent: e,
            sortField: this.props.field
        });
    }

    render() {
        var sorted = this.props.sortField === this.props.field;
        var className = classNames('ui-state-default ui-unselectable-text', 
                    {'ui-sortable-column': this.props.sortable, 'ui-state-active': sorted}, this.props.className);

        if(this.props.sortable) {
            var sortIcon = sorted ? this.props.sortOrder < 0 ? 'fa-sort-desc' : 'fa-sort-asc': 'fa-sort';
            var sortIconClassName = classNames('ui-sortable-column-icon fa fa-fw', sortIcon);
        }

        return (
            <th className={className} style={this.props.style} onClick={this.onClick}>
               <span className="ui-column-title">{this.props.header}</span>
               <span className={sortIconClassName}></span>
            </th>
        );
    }
}

class TableHeader extends Component {

    constructor(props) {
        super(props);
        this.onSort = this.onSort.bind(this);
    }

    onSort(e) {
        this.props.onSort(e);
    }

    render() {
        var columnHeaders = this.props.children.map((column,i) => {
                                return <HeaderCell key={i} {...column.props} onSort={this.onSort} 
                                        sortField={this.props.sortField} sortOrder={this.props.sortOrder} />;
                            });

        return (
            <thead className="ui-datatable-thead">
                <tr className="ui-state-default">
                    {columnHeaders}
                </tr>
            </thead>
        );
    }
}

class BodyCell extends Component {

    render() {
        var fieldData = ObjectUtils.resolveFieldData(this.props.rowData, this.props.field);

        return (
            <td className={this.props.className} style={this.props.style}>
               <span className="ui-cell-data">{fieldData}</span>
            </td>
        );
    }
}

class BodyRow extends Component {

    render() {
        var className = classNames('ui-widget-content', {'ui-datatable-odd': (this.props.rowIndex % 2 === 1)})
        var cells = this.props.children.map((column,i) => {
                        return <BodyCell key={i} {...column.props} rowData={this.props.rowData} />;
                    });
        return (
            <tr className={className}>
                {cells}
            </tr>
        );
    }
}

class TableBody extends Component {

    render() {
        if(this.props.value) {
            var rows = [];
            var startIndex = this.props.lazy ? 0 : this.props.first;
            let endIndex = startIndex + this.props.rows||this.props.value.length;

            for(let i = startIndex; i < endIndex; i++) {
                if(i >= this.props.value.length) {
                    break;
                }

                rows.push(<BodyRow key={i} rowData={this.props.value[i]} rowIndex={i}>{this.props.children}</BodyRow>);
            }
        }

        return (
            <tbody className="ui-datatable-data ui-widget-content">
                {rows}
            </tbody>
        );
    }
}

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
        sortMode: 'single'
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
        sortMode: PropTypes.string
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
    }

    getTotalRecords() {
        return this.props.value ? this.props.lazy ? this.props.totalRecords : this.props.value.length : 0;
    }

    createPaginator(position) {
        var className = 'ui-paginator-' + position;

        return <Paginator first={this.state.first} rows={this.state.rows} className={className}
                    totalRecords={this.getTotalRecords()} onPageChange={this.onPageChange} />;
    }

    onSort(event) {
        this.setState({
            sortField: event.sortField,
            sortOrder: (this.state.sortField === event.sortField) ? this.state.sortOrder * -1 : 1
        });
    }

    sortSingle(data, sortField, sortOrder) {
        var value = [...data];
        value.sort((data1, data2) => {
                var value1 = ObjectUtils.resolveFieldData(data1, this.state.sortField);
                var value2 = ObjectUtils.resolveFieldData(data2, this.state.sortField);
                var result = null;

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

    sortMultiple(data, multiSortMeta) {
        
    }

    processData() {
        var data = this.props.value;
        if(this.state.sortField || this.state.multiSortMeta) {
            if(this.props.sortMode === 'single')
                data = this.sortSingle(data, this.state.sortField, this.state.sortOrder);
            else if(this.props.sortMode === 'multiple')
                data = this.sortMultiple(data, this.state.multiSortMeta);
        }

        return data;
    }

    render() {
        var className = classNames('ui-datatable ui-widget', this.props.className);
        var paginatorTop = this.props.paginator && this.props.paginatorPosition !== 'bottom' && this.createPaginator('top');
        var paginatorBottom = this.props.paginator && this.props.paginatorPosition !== 'top' && this.createPaginator('bottom');
        var headerFacet = this.props.header && <div className="ui-datatable-header ui-widget-header">{this.props.header}</div>;
        var footerFacet = this.props.footer && <div className="ui-datatable-footer ui-widget-header">{this.props.footer}</div>;
        var value = this.processData();

        return (
            <div className={className} style={this.props.style}>
                {headerFacet}
                {paginatorTop}
                <div className="ui-datatable-tablewrapper">
                    <table style={this.props.tableStyle} className={this.props.tableClassName}>
                        <TableHeader onSort={this.onSort} sortField={this.state.sortField} sortOrder={this.state.sortOrder}>{this.props.children}</TableHeader>
                        <TableBody value={value} first={this.state.first} rows={this.state.rows} lazy={this.props.lazy}>{this.props.children}</TableBody>
                    </table>
                </div>
                {paginatorBottom}
                {footerFacet}
            </div>
        );
    }
}