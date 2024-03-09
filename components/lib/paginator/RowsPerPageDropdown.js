import * as React from 'react';
import { PrimeReactContext, localeOption } from '../api/Api';
import { ariaLabel } from '../api/Locale';
import { Dropdown } from '../dropdown/Dropdown';
import { useMergeProps } from '../hooks/Hooks';
import { ObjectUtils } from '../utils/Utils';
import { RowsPerPageDropdownBase } from './PaginatorBase';

export const RowsPerPageDropdown = React.memo((inProps) => {
    const mergeProps = useMergeProps();
    const context = React.useContext(PrimeReactContext);
    const props = RowsPerPageDropdownBase.getProps(inProps, context);

    const hasOptions = props.options && props.options.length > 0;
    const options = hasOptions ? props.options.map((opt) => ({ label: String(opt), value: opt })) : [];
    const placeholderValue = localeOption('choose');
    const ariaLabelValue = ariaLabel('jumpToPageDropdownLabel');
    const element = hasOptions ? (
        <>
            <Dropdown
                value={props.value}
                options={options}
                onChange={props.onChange}
                appendTo={props.appendTo}
                disabled={props.disabled}
                placeholder={placeholderValue}
                aria-label={ariaLabelValue}
                pt={props.ptm('RPPDropdown')}
                unstyled={props.unstyled}
                __parentMetadata={{ parent: props.metaData }}
            />
        </>
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
            ariaLabel: ariaLabelValue,
            element,
            props
        };

        return ObjectUtils.getJSXElement(props.template, defaultOptions);
    }

    return element;
});

RowsPerPageDropdown.displayName = 'RowsPerPageDropdown';
