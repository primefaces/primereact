import * as React from 'react';
import { InputText } from '../inputtext/InputText';

export const ListBoxHeader = React.memo((props) => {

    const onFilter = (event) => {
        if (props.onFilter) {
            props.onFilter({
                originalEvent: event,
                value: event.target.value
            });
        }
    }

    return (
        <div className="p-listbox-header">
            <div className="p-listbox-filter-container">
                <InputText type="text" value={props.filter} onChange={onFilter} className="p-listbox-filter" disabled={props.disabled} placeholder={props.filterPlaceholder} {...props.filterInputProps} />
                <span className="p-listbox-filter-icon pi pi-search"></span>
            </div>
        </div>
    )
});

ListBoxHeader.displayName = 'ListBoxHeader';
