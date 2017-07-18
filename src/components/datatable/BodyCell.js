import React, { Component } from 'react';
import ObjectUtils from '../utils/ObjectUtils';

export class BodyCell extends Component {

    render() {
        let content;
        if(this.props.bodyTemplate)
            content = this.props.bodyTemplate(this.props.rowData, this.props);
        else
            content = ObjectUtils.resolveFieldData(this.props.rowData, this.props.field);

        return (
            <td className={this.props.className} style={this.props.style}>
               <span className="ui-cell-data">{content}</span>
            </td>
        );
    }
}