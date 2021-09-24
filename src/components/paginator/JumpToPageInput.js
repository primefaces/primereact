import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { InputNumber } from '../inputnumber/InputNumber';

export class JumpToPageInput extends Component {

    static defaultProps = {
        page: null,
        rows: null,
        disabled: false,
        onChange: null
    }

    static propTypes = {
        page: PropTypes.number,
        rows: PropTypes.number,
        disabled: PropTypes.bool,
        onChange: PropTypes.func
    }

    constructor(props) {
        super(props)

        this.inputChange = this.inputChange.bind(this);
    }

    inputChange(event) {
        if (this.props.onChange) {
            this.props.onChange(this.props.rows * (event.value - 1), this.props.rows);
        }
    }

    render() {
        return (
            <InputNumber value={this.props.page} onChange={this.inputChange} className="p-paginator-page-input" disabled={this.props.disabled} />
        )
    }

}
