import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { InputNumber } from '../inputnumber/InputNumber';
import { ObjectUtils } from '../utils/Utils';

export class JumpToPageInput extends Component {

    static defaultProps = {
        page: null,
        rows: null,
        pageCount: null,
        disabled: false,
        template: null,
        onChange: null
    }

    static propTypes = {
        page: PropTypes.number,
        rows: PropTypes.number,
        pageCount: PropTypes.number,
        disabled: PropTypes.bool,
        template: PropTypes.any,
        onChange: PropTypes.func
    }

    constructor(props) {
        super(props)

        this.onChange = this.onChange.bind(this);
    }

    onChange(event) {
        if (this.props.onChange) {
            this.props.onChange(this.props.rows * (event.value - 1), this.props.rows);
        }
    }

    render() {
        const value = this.props.pageCount > 0 ? this.props.page + 1 : 0;
        const element = <InputNumber value={value} onChange={this.onChange} className="p-paginator-page-input" disabled={this.props.disabled} />;

        if (this.props.template) {
            const defaultOptions = {
                value,
                onChange: this.onChange,
                disabled: this.props.disabled,
                className: 'p-paginator-page-input',
                element,
                props: this.props
            };

            return ObjectUtils.getJSXElement(this.props.template, defaultOptions);
        }

        return element;
    }

}
