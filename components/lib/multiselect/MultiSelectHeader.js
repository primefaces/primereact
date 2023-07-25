import * as React from 'react';
import { localeOption } from '../api/Api';
import { Checkbox } from '../checkbox/Checkbox';
import { CheckIcon } from '../icons/check';
import { SearchIcon } from '../icons/search';
import { TimesIcon } from '../icons/times';
import { InputText } from '../inputtext/InputText';
import { Ripple } from '../ripple/Ripple';
import { IconUtils, ObjectUtils, UniqueComponentId, classNames, mergeProps } from '../utils/Utils';

export const MultiSelectHeader = React.memo((props) => {
    const { ptm, cx } = props;
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
        const filterIconProps = mergeProps(
            {
                className: cx('filterIcon')
            },
            ptm('filterIcon')
        );

        const icon = props.filterIcon || <SearchIcon {...filterIconProps} />;
        const filterIcon = IconUtils.getJSXIcon(icon, { ...filterIconProps }, { props });

        if (props.filter) {
            const filterContainerProps = mergeProps(
                {
                    className: cx('filterContainer')
                },
                ptm('filterContainer')
            );

            let content = (
                <div {...filterContainerProps}>
                    <InputText ref={props.filterRef} type="text" role="textbox" value={props.filterValue} onChange={onFilter} className="p-multiselect-filter" placeholder={props.filterPlaceholder} pt={ptm('filterInput')} />
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

    const headerSelectAllLabelProps = mergeProps(
        {
            htmlFor: selectAllId,
            className: cx('headerSelectAllLabel')
        },
        ptm('headerSelectAllLabel')
    );

    const headerCheckboxProps = mergeProps(
        {
            className: cx('headerCheckbox')
        },
        ptm('headerCheckbox')
    );

    const checkedIcon = props.itemCheckboxIcon || <CheckIcon {...headerCheckboxProps} />;
    const itemCheckboxIcon = IconUtils.getJSXIcon(checkedIcon, { ...headerCheckboxProps }, { selected: props.selected });

    const checkboxElement = props.showSelectAll && (
        <div className="p-multiselect-select-all">
            <Checkbox id={selectAllId} checked={props.selectAll} onChange={onSelectAll} role="checkbox" aria-checked={props.selectAll} icon={itemCheckboxIcon} />
            {!props.filter && <label {...headerSelectAllLabelProps}>{props.selectAllLabel}</label>}
        </div>
    );

    const iconProps = mergeProps(
        {
            className: cx('closeIcon'),
            'aria-hidden': true
        },
        ptm('closeIcon')
    );
    const icon = props.closeIcon || <TimesIcon {...iconProps} />;
    const closeIcon = IconUtils.getJSXIcon(icon, { ...iconProps }, { props });

    const headerProps = mergeProps(
        {
            className: cx('header')
        },
        ptm('header')
    );

    const closeButtonProps = mergeProps(
        {
            type: 'button',
            className: cx('closeButton'),
            'aria-label': localeOption('close'),
            onClick: props.onClose
        },
        ptm('closeButton')
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
