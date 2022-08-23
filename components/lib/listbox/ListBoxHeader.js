import * as React from 'react';
import { InputText } from '../inputtext/InputText';
import { ObjectUtils } from '../utils/Utils';

export const ListBoxHeader = React.memo((props) => {
    const filterOptions = {
        filter: (e) => onFilter(e),
        reset: () => props.resetFilter()
    };

    const onFilter = (event) => {
        if (props.onFilter) {
            props.onFilter({
                originalEvent: event,
                value: event.target.value
            });
        }
    };

    const createHeader = () => {
        let content = (
            <div className="p-listbox-filter-container">
                <InputText type="text" value={props.filter} onChange={onFilter} className="p-listbox-filter" disabled={props.disabled} placeholder={props.filterPlaceholder} {...props.filterInputProps} />
                <span className="p-listbox-filter-icon pi pi-search"></span>
            </div>
        );

        if (props.filterTemplate) {
            const defaultContentOptions = {
                className: 'p-listbox-filter-container',
                element: content,
                filterOptions: filterOptions,
                filterInputChange: onFilter,
                filterIconClassName: 'p-dropdown-filter-icon pi pi-search',
                props
            };

            content = ObjectUtils.getJSXElement(props.filterTemplate, defaultContentOptions);
        }

        return <div className="p-listbox-header">{content}</div>;
    };

    const content = createHeader();

    return <>{content}</>;
});

ListBoxHeader.displayName = 'ListBoxHeader';
