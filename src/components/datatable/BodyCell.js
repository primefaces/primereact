import React, { Component } from 'react';
import ObjectUtils from '../utils/ObjectUtils';

export class BodyCell extends Component {

    render() {
        var fieldData = ObjectUtils.resolveFieldData(this.props.rowData, this.props.field);

        return (
            <td className={this.props.className} style={this.props.style}>
               <span className="ui-cell-data">{fieldData}</span>
            </td>
        );
    }
}