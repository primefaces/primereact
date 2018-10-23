import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TreeTableBodyCell extends Component {

    static defaultProps = {
        style: null,
        className: null
    }

    static propsTypes = {
        style: PropTypes.object,
        className: PropTypes.string
    }

    render() {
        return (
            <td className={this.props.className} style={this.props.style}>
                {this.props.children}
            </td>
        );
    }
}