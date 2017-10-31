import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Dropdown} from '../dropdown/Dropdown';

export class RowsPerPageDropdown extends Component {

    static defaultProps = {
        options: null,
        value: null,
        onChange: null
    }

    static propsTypes = {
        options: PropTypes.array,
        value: PropTypes.number,
        onChange: PropTypes.func
    }
    
    render() {
        if(this.props.options) {
            let options = this.props.options.map((opt, i) => {
                return {label: opt, value: opt};
            });
            
            return (
                <Dropdown value={this.props.value} options={options} onChange={this.props.onChange} />
            );
        }
        else {
            return null;
        }
    }
}