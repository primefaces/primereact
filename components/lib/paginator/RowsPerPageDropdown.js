import * as React from 'react';
import { PrimeReactContext, localeOption } from '../api/Api';
import { Dropdown } from '../dropdown/Dropdown';
import { ObjectUtils } from '../utils/Utils';
import { RowsPerPageDropdownBase } from './PaginatorBase';

export const RowsPerPageDropdown = React.memo((inProps) => {
    const context = React.useContext(PrimeReactContext);
    const props = RowsPerPageDropdownBase.getProps(inProps, context);

    const hasOptions = props.options && props.options.length > 0;
    const options = hasOptions ? props.options.map((opt) => ({ label: String(opt), value: opt })) : [];
    const ariaLabel = localeOption('choose');
    const element = hasOptions ? (
        <Dropdown value={props.value} options={options} onChange={props.onChange} appendTo={props.appendTo} disabled={props.disabled} placeholder={ariaLabel} aria-label={ariaLabel} pt={props.ptm('RPPDropdown')} unstyled={props.unstyled} />
    ) : null;

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
            props
        };

        return ObjectUtils.getJSXElement(props.template, defaultOptions);
    }

    return element;
});

RowsPerPageDropdown.displayName = 'RowsPerPageDropdown';
