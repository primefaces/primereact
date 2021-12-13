import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from '../dropdown/Dropdown';
import { ObjectUtils } from '../utils/Utils';

export class RowsPerPageDropdown extends Component {

    static defaultProps = {
        options: null,
        value: null,
        page: null,
        pageCount: null,
        totalRecords: 0,
        appendTo: null,
        onChange: null,
        template: null,
        disabled: false
    }

    static propTypes = {
        options: PropTypes.array,
        value: PropTypes.number,
        page: PropTypes.number,
        pageCount: PropTypes.number,
        totalRecords: PropTypes.number,
        appendTo: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
        onChange: PropTypes.func,
        template: PropTypes.any
    }

    hasOptions() {
        return this.props.options && this.props.options.length > 0;
    }

    render() {
        const hasOptions = this.hasOptions();
        const options = hasOptions ? this.props.options.map(opt => ({ label: String(opt), value: opt })) : [];
        const element = hasOptions ? <Dropdown value={this.props.value} options={options} onChange={this.props.onChange} appendTo={this.props.appendTo} disabled={this.props.disabled} /> : null;

        if (this.props.template) {
            const defaultOptions = {
                value: this.props.value,
                options,
                onChange: this.props.onChange,
                appendTo: this.props.appendTo,
                currentPage: this.props.page,
                totalPages: this.props.pageCount,
                totalRecords: this.props.totalRecords,
                disabled: this.props.disabled,
                element,
                props: this.props,
            };

            return ObjectUtils.getJSXElement(this.props.template, defaultOptions);
        }

        return element;
    }
}
