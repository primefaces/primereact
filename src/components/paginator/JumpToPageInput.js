import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { InputNumber } from '../inputnumber/InputNumber';

export class JumpToPageInput extends Component {

    static defaultProps = {
        value: null,
        page: null,
        pageCount: null,
        disabled: false
    }

    static propTypes = {
        value: PropTypes.number,
        page: PropTypes.number,
        pageCount: PropTypes.number,
        disabled: PropTypes.bool,
    }

    constructor(props) {
        super(props)

        this.onChange = this.onChange.bind(this);
    }

    onChange(event) {
        if (this.props.onChange) {
            this.props.onChange({
                event: event.originalEvent,
                value: event.value
            });
        }
    }

    render() {
        return (
            <InputNumber value={this.props.value} onChange={this.onChange} className="p-paginator-page-input" disabled={this.props.disabled} />
        )
    }

}
