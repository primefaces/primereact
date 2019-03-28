import React, { Component } from 'react';

export class TableLoadingBody extends Component {

    renderRow(index) {
        let cells = [];
        for (let i = 0; i < this.props.columns.length; i++) {
            cells.push(<td key={i}>{this.props.columns[i].props.loadingBody()}</td>);
        }

        return (
            <tr key={index}>
                {cells}
            </tr>
        );
    }

    renderRows() {
        let rows = [];
        for (let i = 0; i < this.props.rows; i++) {
            rows.push(this.renderRow(i));
        }

        return rows;
    }

    render() {
        const rows = this.renderRows();

        return (
            <tbody className="p-datatable-tbody">
                {rows}
            </tbody>
        );
    }
}