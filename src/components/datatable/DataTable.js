import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {Paginator} from '../paginator/Paginator';
import ObjectUtils from '../utils/ObjectUtils';

class HeaderCell extends Component {

    render() {
        var className = classNames('ui-state-default ui-unselectable-text', this.props.className);

        return (
            <th className={className} style={this.props.style}>
               <span className="ui-column-title">{this.props.header}</span>
            </th>
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

class TableHeader extends Component {

    render() {
        var columnHeaders = this.props.children.map((column,i) => {
                                return <HeaderCell key={i} {...column.props} />;
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
    };

    constructor(props) {
        super(props);
        this.state = {
            first: props.first,
            rows: props.rows
        };
        this.onPageChange = this.onPageChange.bind(this);
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

    render() {
        var className = classNames('ui-datatable ui-widget', this.props.className);
        var paginatorTop = this.props.paginator && this.props.paginatorPosition !== 'bottom' && this.createPaginator('top');
        var paginatorBottom = this.props.paginator && this.props.paginatorPosition !== 'top' && this.createPaginator('bottom');
        var headerFacet = this.props.header && <div className="ui-datatable-header ui-widget-header">{this.props.header}</div>;
        var footerFacet = this.props.footer && <div className="ui-datatable-footer ui-widget-header">{this.props.footer}</div>;

        return (
            <div className={className} style={this.props.style}>
                {headerFacet}
                {paginatorTop}
                <div className="ui-datatable-tablewrapper">
                    <table style={this.props.tableStyle} className={this.props.tableClassName}>
                        <TableHeader>{this.props.children}</TableHeader>
                        <TableBody value={this.props.value} first={this.state.first} rows={this.state.rows} lazy={this.props.lazy}>{this.props.children}</TableBody>
                    </table>
                </div>
                {paginatorBottom}
                {footerFacet}
            </div>
        );
    }
}