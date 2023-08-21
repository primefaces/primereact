import * as React from 'react';
import { localeOption } from '../api/Api';
import { Checkbox } from '../checkbox/Checkbox';
import { CheckIcon } from '../icons/check';
import { SearchIcon } from '../icons/search';
import { TimesIcon } from '../icons/times';
import { InputText } from '../inputtext/InputText';
import { Ripple } from '../ripple/Ripple';
import { IconUtils, ObjectUtils, classNames, mergeProps } from '../utils/Utils';

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
        const filterIconProps = mergeProps(
            {
                className: filterIconClassName
            },
            props.ptm('filterIcon')
        );

        const icon = props.filterIcon || <SearchIcon {...filterIconProps} />;
        const filterIcon = IconUtils.getJSXIcon(icon, { ...filterIconProps }, { props });

        if (props.filter) {
            const containerClassName = classNames('p-multiselect-filter-container');
            const filterContainerProps = mergeProps(
                {
                    className: containerClassName
                },
                props.ptm('filterContainer')
            );

            let content = (
                <div {...filterContainerProps}>
                    <InputText ref={props.filterRef} type="text" role="textbox" value={props.filterValue} onChange={onFilter} className="p-multiselect-filter" placeholder={props.filterPlaceholder} pt={props.ptm('filterInput')} />
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

    const headerCheckboxProps = mergeProps(
        {
            className: 'p-multiselect-select-all p-checkbox-icon p-c'
        },
        props.ptm('headerCheckbox')
    );

    const checkedIcon = props.itemCheckboxIcon || <CheckIcon {...headerCheckboxProps} />;
    const itemCheckboxIcon = IconUtils.getJSXIcon(checkedIcon, { ...headerCheckboxProps }, { selected: props.selected });

    const checkboxElement = props.showSelectAll ? <Checkbox checked={props.selectAll} onChange={onSelectAll} role="checkbox" aria-checked={props.selectAll} icon={itemCheckboxIcon} /> : null;

    const iconProps = mergeProps(
        {
            className: 'p-multiselect-close-icon',
            'aria-hidden': true
        },
        props.ptm('closeIcon')
    );
    const icon = props.closeIcon || <TimesIcon {...iconProps} />;
    const closeIcon = IconUtils.getJSXIcon(icon, { ...iconProps }, { props });

    const headerProps = mergeProps(
        {
            className: 'p-multiselect-header'
        },
        props.ptm('header')
    );

    const closeButtonProps = mergeProps(
        {
            type: 'button',
            className: 'p-multiselect-close p-link',
            'aria-label': localeOption('close'),
            onClick: props.onClose
        },
        props.ptm('closeButton')
    );

    const closeElement = (
        <button {...closeButtonProps}>
            {closeIcon}
            <Ripple />
        </button>
    );

    const element = (
        <div {...headerProps}>
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
