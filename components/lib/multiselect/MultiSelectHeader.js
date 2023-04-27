import * as React from 'react';
import { localeOption } from '../api/Api';
import { Checkbox } from '../checkbox/Checkbox';
import { InputText } from '../inputtext/InputText';
import { Ripple } from '../ripple/Ripple';
import { classNames, IconUtils, ObjectUtils } from '../utils/Utils';
import { TimesIcon } from '../icons/times';
import { SearchIcon } from '../icons/search';
import { CheckIcon } from '../icons/check';

export const MultiSelectHeader = React.memo((props) => {
    const filterOptions = {
        filter: (e) => onFilter(e),
        reset: () => props.resetFilter()
    };

    const onFilter = (event) => {
        if (props.onFilter) {
            props.onFilter({
                originalEvent: event,
                query: event.target.value
            });
        }
    };

    const onSelectAll = (event) => {
        if (props.onSelectAll) {
            props.onSelectAll({
                originalEvent: event,
                checked: props.selectAll
            });
        }

        event.preventDefault();
    };

    const createFilterElement = () => {
        const filterIconClassName = 'p-multiselect-filter-icon';
        const icon = props.filterIcon || <SearchIcon className={filterIconClassName} />;
        const filterIcon = IconUtils.getJSXIcon(icon, { className: filterIconClassName }, { props });

        if (props.filter) {
            const containerClassName = classNames('p-multiselect-filter-container');
            let content = (
                <div className={containerClassName}>
                    <InputText ref={props.filterRef} type="text" role="textbox" value={props.filterValue} onChange={onFilter} className="p-multiselect-filter" placeholder={props.filterPlaceholder} />
                    {filterIcon}
                </div>
            );

            if (props.filterTemplate) {
                const defaultContentOptions = {
                    className: containerClassName,
                    element: content,
                    filterOptions: filterOptions,
                    onFilter: onFilter,
                    filterIconClassName,
                    props
                };

                content = ObjectUtils.getJSXElement(props.filterTemplate, defaultContentOptions);
            }

            return <>{content}</>;
        }

        return null;
    };

    const filterElement = createFilterElement();
    const selectAllId = props.id ? props.id + '_selectall' : UniqueComponentId();
    const checkboxIconClassName = 'p-checkbox-icon p-c';
    const checkedIcon = props.itemCheckboxIcon || <CheckIcon className={checkboxIconClassName} />;
    const itemCheckboxIcon = IconUtils.getJSXIcon(checkedIcon, { className: checkboxIconClassName }, { selected: props.selected });

    const checkboxElement = props.showSelectAll && (
        <div>
            <Checkbox id={selectAllId} checked={props.selectAll} onChange={onSelectAll} role="checkbox" aria-checked={props.selectAll} icon={itemCheckboxIcon} />
            {!props.filter && (
                <label for={selectAllId} className="p-multiselect-select-all-label">
                    {props.selectAllLabel}
                </label>
            )}
        </div>
    );

    const iconProps = { className: 'p-multiselect-close-icon', 'aria-hidden': true };
    const icon = props.closeIcon || <TimesIcon {...iconProps} />;
    const closeIcon = IconUtils.getJSXIcon(icon, { ...iconProps }, { props });

    const closeElement = (
        <button type="button" className="p-multiselect-close p-link" aria-label={localeOption('close')} onClick={props.onClose}>
            {closeIcon}
            <Ripple />
        </button>
    );

    const element = (
        <div className="p-multiselect-header">
            {checkboxElement}
            {filterElement}
            {closeElement}
        </div>
    );

    if (props.template) {
        const defaultOptions = {
            className: 'p-multiselect-header',
            checkboxElement,
            checked: props.selectAll,
            onChange: onSelectAll,
            filterElement,
            closeElement,
            closeElementClassName: 'p-multiselect-close p-link',
            closeIconClassName: 'p-multiselect-close-icon',
            onCloseClick: props.onClose,
            element,
            itemCheckboxIcon,
            props
        };

        return ObjectUtils.getJSXElement(props.template, defaultOptions);
    }

    return element;
});

MultiSelectHeader.displayName = 'MultiSelectHeader';
