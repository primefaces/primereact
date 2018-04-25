import React, { Component } from 'react';
import classNames from 'classnames';

export class TreeTableHeaderCell extends Component {

    render() {
        var colStyleClass = classNames('ui-state-default ui-unselectable-text', this.props.className);

        return (
            <th className={colStyleClass} style={this.props.style}>
                <span className="ui-column-title">{this.props.header}</span>
            </th>
        );
    }
} 