import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { InputNumber } from '../inputnumber/InputNumber';
import { ObjectUtils } from '../utils/Utils';

export const JumpToPageInput = memo((props) => {

    const onChange = (event) => {
        if (props.onChange) {
            props.onChange(props.rows * (event.value - 1), props.rows);
        }
    }

    const value = props.pageCount > 0 ? props.page + 1 : 0;
    const element = <InputNumber value={value} onChange={onChange} className="p-paginator-page-input" disabled={props.disabled} />;

    if (props.template) {
        const defaultOptions = {
            value,
            onChange: onChange,
            disabled: props.disabled,
            className: 'p-paginator-page-input',
            element,
            props
        };

        return ObjectUtils.getJSXElement(props.template, defaultOptions);
    }

    return element;
});

JumpToPageInput.defaultProps = {
    __TYPE: 'JumbToPageInput',
    page: null,
    rows: null,
    pageCount: null,
    disabled: false,
    template: null,
    onChange: null
}

JumpToPageInput.propTypes /* remove-proptypes */ = {
    __TYPE: PropTypes.string,
    page: PropTypes.number,
    rows: PropTypes.number,
    pageCount: PropTypes.number,
    disabled: PropTypes.bool,
    template: PropTypes.any,
    onChange: PropTypes.func
}
