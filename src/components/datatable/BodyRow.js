import React, { Component } from 'react';
import classNames from 'classnames';
import {BodyCell} from './BodyCell';

export class BodyRow extends Component {

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