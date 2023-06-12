import * as React from 'react';
import { SearchIcon } from '../icons/search';
import { InputText } from '../inputtext/InputText';
import { IconUtils, ObjectUtils, mergeProps } from '../utils/Utils';

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
        const filterIconProps = mergeProps(
            {
                className: iconClassName
            },
            props.ptm('filterIcon')
        );

        const icon = props.filterIcon || <SearchIcon {...filterIconProps} />;
        const filterIcon = IconUtils.getJSXIcon(icon, { ...filterIconProps }, { props });

        const headerProps = mergeProps(
            {
                className: 'p-listbox-header'
            },
            props.ptm('header')
        );

        const filterContainerProps = mergeProps(
            {
                className: 'p-listbox-filter-container'
            },
            props.ptm('filterContainer')
        );

        let content = (
            <div {...filterContainerProps}>
                <InputText type="text" value={props.filter} onChange={onFilter} className="p-listbox-filter" disabled={props.disabled} placeholder={props.filterPlaceholder} {...props.filterInputProps} pt={props.ptm('filterInput')} />
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

        return <div {...headerProps}>{content}</div>;
    };

    const content = createHeader();

    return <>{content}</>;
});

ListBoxHeader.displayName = 'ListBoxHeader';
