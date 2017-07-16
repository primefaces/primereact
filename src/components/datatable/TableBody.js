import React, { Component } from 'react';
import {BodyRow} from './BodyRow';

export class TableBody extends Component {

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