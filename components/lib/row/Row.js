import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Row extends Component {

    static defaultProps = {
        style: null,
        className: null
    }

    static propTypes = {
        style: PropTypes.object,
        className: PropTypes.string
    }

    render() {
        return <tr className={this.props.className} style={this.props.style}>{this.props.children}</tr>;
    }
}