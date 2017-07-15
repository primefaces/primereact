import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
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
            var rows = this.props.value.map((rowData, i) => {
                        return <BodyRow key={i} rowData={rowData} rowIndex={i}>{this.props.children}</BodyRow>;
                    });
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
        tableClassName: null
    }

    static propTypes = {
        value: PropTypes.array,
        header: PropTypes.any,
        footer: PropTypes.any,
        style: PropTypes.any,
        className: PropTypes.string,
        tableStyle: PropTypes.any,
        tableClassName: PropTypes.string
    };

    render() {
        var className = classNames('ui-datatable ui-widget', this.props.className);

        return (
            <div className={className} style={this.props.style}>
                <div className="ui-datatable-tablewrapper">
                    <table style={this.props.tableStyle} className={this.props.tableClassName}>
                        <TableHeader>{this.props.children}</TableHeader>
                        <TableBody value={this.props.value}>{this.props.children}</TableBody>
                    </table>
                </div>
            </div>
        );
    }
}