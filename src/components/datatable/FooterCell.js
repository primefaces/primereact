import React, { Component } from 'react';

export class FooterCell extends Component {

    render() {
        return (
            <td className="ui-state-default" style={this.props.style}colSpan={this.props.colSpan} rowSpan={this.props.rowSpan}>
               {this.props.footer}
            </td>
        );
    }
}