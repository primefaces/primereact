import * as React from 'react';
import { InputText } from '../inputtext/InputText';
import { IconUtils, ObjectUtils } from '../utils/Utils';
import { SearchIcon } from '../icon/search';

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
        const iconClassName = 'p-listbox-filter-icon';
        const icon = props.filterIcon || <SearchIcon className={iconClassName} />;
        const filterIcon = IconUtils.getJSXIcon(icon, { className: iconClassName }, { props });

        let content = (
            <div className="p-listbox-filter-container">
                <InputText type="text" value={props.filter} onChange={onFilter} className="p-listbox-filter" disabled={props.disabled} placeholder={props.filterPlaceholder} {...props.filterInputProps} />
                {filterIcon}
            </div>
        );

        if (props.filterTemplate) {
            const defaultContentOptions = {
                className: 'p-listbox-filter-container',
                element: content,
                filterOptions: filterOptions,
                filterInputChange: onFilter,
                filterIconClassName: 'p-dropdown-filter-icon',
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
