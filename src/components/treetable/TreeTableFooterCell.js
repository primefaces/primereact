import React, { Component } from 'react';
import classNames from 'classnames';

export class TreeTableFooterCell extends Component {

    render() {
        var colStyleClass = classNames('ui-state-default', this.props.className);

        return (
            <td className={colStyleClass} style={this.props.style}>
                <span className="ui-column-footer">{this.props.footer}</span>
            </td>
        );
    }
} 