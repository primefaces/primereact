import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from '../dropdown/Dropdown';
import { ObjectUtils } from '../utils/Utils';

export const RowsPerPageDropdown = memo((props) => {
    const hasOptions = props.options && props.options.length > 0;
    const options = hasOptions ? props.options.map(opt => ({ label: String(opt), value: opt })) : [];
    const element = hasOptions ? <Dropdown value={props.value} options={options} onChange={props.onChange} appendTo={props.appendTo} disabled={props.disabled} /> : null;

    if (props.template) {
        const defaultOptions = {
            value: props.value,
            options,
            onChange: props.onChange,
            appendTo: props.appendTo,
            currentPage: props.page,
            totalPages: props.pageCount,
            totalRecords: props.totalRecords,
            disabled: props.disabled,
            element,
            props,
        };

        return ObjectUtils.getJSXElement(props.template, defaultOptions);
    }

    return element;
});

RowsPerPageDropdown.defaultProps = {
    __TYPE: 'RowsPerPageDropdown',
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

RowsPerPageDropdown.propTypes /* remove-proptypes */ = {
    __TYPE: PropTypes.string,
    options: PropTypes.array,
    value: PropTypes.number,
    page: PropTypes.number,
    pageCount: PropTypes.number,
    totalRecords: PropTypes.number,
    appendTo: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    onChange: PropTypes.func,
    template: PropTypes.any
}
