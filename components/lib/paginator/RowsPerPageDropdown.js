import * as React from 'react';
import { Dropdown } from '../dropdown/Dropdown';
import { ObjectUtils } from '../utils/Utils';

export const RowsPerPageDropdown = React.memo((props) => {
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

RowsPerPageDropdown.displayName = 'RowsPerPageDropdown';
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
