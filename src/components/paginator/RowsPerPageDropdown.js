import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Dropdown} from '../dropdown/Dropdown';

export class RowsPerPageDropdown extends Component {

    static defaultProps = {
        options: null,
        value: null,
        appendTo: null,
        onChange: null
    }

    static propTypes = {
        options: PropTypes.array,
        value: PropTypes.number,
        appendTo: PropTypes.any,
        onChange: PropTypes.func
    }

    render() {
        if (this.props.options) {
            let options = this.props.options.map((opt, i) => {
                return {label: String(opt), value: opt};
            });

            return (
                <Dropdown value={this.props.value} options={options} onChange={this.props.onChange} appendTo={this.props.appendTo} />
            );
        }
        else {
            return null;
        }
    }
}
